import { NextApiRequest, NextApiResponse } from 'next';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';
import { getCantonFromNPA, getCantonName, formatVATRate, calculateVAT, calculateTotalWithVAT } from '../../lib/swiss-data';

export const config = {
  api: {
    bodyParser: { sizeLimit: '2mb' },
  },
};

// ✅ PROFESSIONELLE SCHWEIZER KONFIGURATION
const PDF_CONFIG = {
  // Format A4 portrait avec marges suisses
  PAGE_WIDTH: 595,
  PAGE_HEIGHT: 842,
  MARGINS: {
    TOP: 85,      // 30mm
    BOTTOM: 71,   // 25mm  
    LEFT: 57,     // 20mm
    RIGHT: 57     // 20mm
  },
  // Typographie professionnelle
  FONTS: {
    TITLE: 16,
    SUBTITLE: 12,
    BODY: 10,
    SMALL: 8,
    FOOTER: 9
  },
  // Espacements optimaux
  SPACING: {
    SECTION: 25,
    LINE: 15,
    PARAGRAPH: 12
  },
  // Couleurs L&N 
  COLORS: {
    GOLD: rgb(0.8, 0.6, 0.0),
    BROWN: rgb(0.2, 0.15, 0.05),
    GRAY: rgb(0.4, 0.4, 0.4),
    LIGHT_GRAY: rgb(0.95, 0.95, 0.95),
    BORDER: rgb(0.8, 0.8, 0.8),
    TEXT_LIGHT: rgb(0.27, 0.27, 0.27)
  }
};

// ✅ CALCUL AUTOMATIQUE DURÉE ESTIMÉE
function calculateEstimatedDuration(services: string[] = [], area: number = 0): number {
  let totalHours = 0;
  
  services.forEach(service => {
    switch (service) {
      case 'Büroreinigung':
        totalHours += Math.max(2, area * 0.08);
        break;
      case 'Endreinigung (Wohnung/Haus)':
        totalHours += Math.max(4, area * 0.15);
        break;
      case 'Sofa-/Polsterreinigung':
        totalHours += 2;
        break;
      case 'Auto-Innenreinigung':
        totalHours += 1.5;
        break;
      case 'Terrassenreinigung':
        totalHours += Math.max(1, area * 0.3 * 0.1);
        break;
      case 'Haushaltsreinigung':
        totalHours += Math.max(2, area * 0.1);
        break;
      default:
        totalHours += 2;
    }
  });
  
  return Math.ceil(totalHours);
}

// ✅ GESTION INTELLIGENTE DU TEXTE LONG
function wrapText(text: string, maxWidth: number, font: any, fontSize: number): string[] {
  const words = text.split(' ');
  const lines = [];
  let currentLine = '';

  for (const word of words) {
    const testLine = currentLine ? `${currentLine} ${word}` : word;
    const testWidth = font.widthOfTextAtSize(testLine, fontSize);
    
    if (testWidth <= maxWidth) {
      currentLine = testLine;
    } else {
      if (currentLine) {
        lines.push(currentLine);
        currentLine = word;
      } else {
        // Mot trop long, le couper
        lines.push(word.substring(0, Math.floor(word.length * maxWidth / testWidth)));
      }
    }
  }
  
  if (currentLine) {
    lines.push(currentLine);
  }
  
  return lines;
}

// ✅ GÉNÉRATEUR PDF MULTI-PAGES PROFESSIONNEL
async function generateOffertePDF(data: any) {
  const pdfDoc = await PDFDocument.create();
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);

  // Variables pour gestion multi-pages
  let currentPage = pdfDoc.addPage([PDF_CONFIG.PAGE_WIDTH, PDF_CONFIG.PAGE_HEIGHT]);
  let pageNumber = 1;
  const totalPagesRef = { count: 1 }; // Référence pour le total des pages
  
  // Zones de travail calculées
  const contentWidth = PDF_CONFIG.PAGE_WIDTH - PDF_CONFIG.MARGINS.LEFT - PDF_CONFIG.MARGINS.RIGHT;
  const contentHeight = PDF_CONFIG.PAGE_HEIGHT - PDF_CONFIG.MARGINS.TOP - PDF_CONFIG.MARGINS.BOTTOM;
  let y = PDF_CONFIG.PAGE_HEIGHT - PDF_CONFIG.MARGINS.TOP;

  // ✅ FONCTION POUR CRÉER UNE NOUVELLE PAGE
  function createNewPage() {
    // Ajouter footer à la page courante avant de créer une nouvelle page
    addFooterToPage(currentPage, pageNumber, totalPagesRef);
    
    pageNumber++;
    totalPagesRef.count = pageNumber;
    currentPage = pdfDoc.addPage([PDF_CONFIG.PAGE_WIDTH, PDF_CONFIG.PAGE_HEIGHT]);
    y = PDF_CONFIG.PAGE_HEIGHT - PDF_CONFIG.MARGINS.TOP;
    
    // En-tête simplifié pour les pages suivantes
    currentPage.drawText(`L&N REINIGUNG - Offerte (Seite ${pageNumber})`, { 
      x: PDF_CONFIG.MARGINS.LEFT, 
      y: y - 20, 
      size: PDF_CONFIG.FONTS.SUBTITLE, 
      font: fontBold, 
      color: PDF_CONFIG.COLORS.GOLD 
    });
    y -= 50;
    return currentPage;
  }

  // ✅ FONCTION POUR VÉRIFIER L'ESPACE RESTANT
  function checkSpaceAndCreatePage(requiredSpace: number) {
    if (y - requiredSpace < PDF_CONFIG.MARGINS.BOTTOM + 120) { // 120px pour le footer
      createNewPage();
    }
  }

  // ✅ FONCTION POUR AJOUTER LE FOOTER À UNE PAGE
  function addFooterToPage(page: any, pageNum: number, totalPages: any) {
    const footerY = 80; // Position fixe en bas
    const rightX = PDF_CONFIG.PAGE_WIDTH - PDF_CONFIG.MARGINS.RIGHT;
    
    // Numéro de page centré
    const pageText = `Seite ${pageNum} von ${totalPages.count}`;
    const pageTextWidth = fontRegular.widthOfTextAtSize(pageText, PDF_CONFIG.FONTS.SMALL);
    page.drawText(pageText, {
      x: (PDF_CONFIG.PAGE_WIDTH - pageTextWidth) / 2,
      y: footerY + 40,
      size: PDF_CONFIG.FONTS.SMALL,
      font: fontRegular,
      color: PDF_CONFIG.COLORS.GRAY
    });

    // Coordonnées entreprise alignées à droite (seulement sur la dernière page)
    if (pageNum === totalPages.count) {
      const mainTitle = 'L&N Reinigung – Professioneller Reinigungsdienst in der Schweiz';
      const mainTitleWidth = fontBold.widthOfTextAtSize(mainTitle, PDF_CONFIG.FONTS.FOOTER);
      page.drawText(mainTitle, { 
        x: rightX - mainTitleWidth, 
        y: footerY + 20, 
        size: PDF_CONFIG.FONTS.FOOTER, 
        font: fontBold, 
        color: PDF_CONFIG.COLORS.TEXT_LIGHT 
      });
      
      const contactInfo = 'E-Mail: mikaleclerc5@gmail.com | Tel: +41 76 123 45 67 | www.ln-reinigung.ch';
      const contactWidth = fontRegular.widthOfTextAtSize(contactInfo, PDF_CONFIG.FONTS.FOOTER);
      page.drawText(contactInfo, { 
        x: rightX - contactWidth, 
        y: footerY,
        size: PDF_CONFIG.FONTS.FOOTER, 
        font: fontRegular, 
        color: PDF_CONFIG.COLORS.TEXT_LIGHT 
      });
      
      const legalInfo = 'IDE: CHE-123.456.789 | HR: ZH-987.654.321 | MWST: CHE-123.456.789 MWST';
      const legalWidth = fontRegular.widthOfTextAtSize(legalInfo, PDF_CONFIG.FONTS.FOOTER);
      page.drawText(legalInfo, { 
        x: rightX - legalWidth, 
        y: footerY - 20,
        size: PDF_CONFIG.FONTS.FOOTER, 
        font: fontRegular, 
        color: PDF_CONFIG.COLORS.TEXT_LIGHT 
      });
    }
  }

  // ✅ 1. EN-TÊTE PROFESSIONNEL L&N
  try {
    const logoPath = path.join(process.cwd(), 'public', 'images', 'logo-ln.png');
    const logoBytes = fs.readFileSync(logoPath);
    const logoImage = await pdfDoc.embedPng(logoBytes);
    
    const logoDims = logoImage.scale(0.15);
    currentPage.drawImage(logoImage, {
      x: PDF_CONFIG.MARGINS.LEFT,
      y: y - logoDims.height,
      width: logoDims.width,
      height: logoDims.height,
    });
    
    // Nom entreprise à côté du logo
    const logoEndX = PDF_CONFIG.MARGINS.LEFT + logoDims.width + 20;
    currentPage.drawText('L&N REINIGUNG', { 
      x: logoEndX, 
      y: y - 10, 
      size: PDF_CONFIG.FONTS.TITLE, 
      font: fontBold, 
      color: PDF_CONFIG.COLORS.GOLD 
    });
    
    currentPage.drawText('Professioneller Reinigungsdienst', { 
      x: logoEndX, 
      y: y - 28, 
      size: PDF_CONFIG.FONTS.SMALL, 
      font: fontRegular, 
      color: PDF_CONFIG.COLORS.GRAY 
    });
    
  } catch (error) {
    // Fallback sans logo
    currentPage.drawText('L&N REINIGUNG', { 
      x: PDF_CONFIG.MARGINS.LEFT, 
      y: y - 10, 
      size: PDF_CONFIG.FONTS.TITLE, 
      font: fontBold, 
      color: PDF_CONFIG.COLORS.GOLD 
    });
  }

  // Titre OFFERTE aligné à droite
  const titleText = 'OFFERTE';
  const titleWidth = fontBold.widthOfTextAtSize(titleText, 18);
  currentPage.drawText(titleText, { 
    x: PDF_CONFIG.PAGE_WIDTH - PDF_CONFIG.MARGINS.RIGHT - titleWidth, 
    y: y - 10, 
    size: 18, 
    font: fontBold, 
    color: PDF_CONFIG.COLORS.BROWN 
  });

  y -= PDF_CONFIG.SPACING.SECTION * 2;
  checkSpaceAndCreatePage(100);

  // ✅ 2. INFORMATIONS DEVIS (Cadre professionnel)
  const currentDate = new Date().toLocaleDateString('de-CH');
  const validDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString('de-CH');
  const offerNumber = `OFF-${new Date().getFullYear()}-${String(Math.floor(Math.random() * 999) + 1).padStart(3, '0')}`;
  
  const infoBoxWidth = 200;
  const infoBoxHeight = 85;
  const infoBoxX = PDF_CONFIG.PAGE_WIDTH - PDF_CONFIG.MARGINS.RIGHT - infoBoxWidth;
  
  currentPage.drawRectangle({
    x: infoBoxX,
    y: y - infoBoxHeight,
    width: infoBoxWidth,
    height: infoBoxHeight,
    borderColor: PDF_CONFIG.COLORS.BORDER,
    borderWidth: 1,
  });
  
  let infoY = y - 15;
  const infoTextX = infoBoxX + 12;
  
  currentPage.drawText(`Offert-Nr.: ${offerNumber}`, { x: infoTextX, y: infoY, size: PDF_CONFIG.FONTS.BODY, font: fontRegular });
  infoY -= PDF_CONFIG.SPACING.LINE;
  currentPage.drawText(`Datum: ${currentDate}`, { x: infoTextX, y: infoY, size: PDF_CONFIG.FONTS.BODY, font: fontRegular });
  infoY -= PDF_CONFIG.SPACING.LINE;
  currentPage.drawText(`Gültig bis: ${validDate}`, { x: infoTextX, y: infoY, size: PDF_CONFIG.FONTS.BODY, font: fontRegular });
  infoY -= PDF_CONFIG.SPACING.LINE;
  
  const canton = data.plz ? getCantonFromNPA(data.plz) : null;
  currentPage.drawText(`MWST (föderaler Satz): 8.1%`, { x: infoTextX, y: infoY, size: PDF_CONFIG.FONTS.SMALL, font: fontRegular, color: PDF_CONFIG.COLORS.GRAY });

  y -= infoBoxHeight + PDF_CONFIG.SPACING.SECTION;
  checkSpaceAndCreatePage(120);

  // ✅ 3. ADRESSE CLIENT (Alignée à gauche)
  currentPage.drawText('KUNDE / ADRESSE', { 
    x: PDF_CONFIG.MARGINS.LEFT, 
    y, 
    size: PDF_CONFIG.FONTS.SUBTITLE, 
    font: fontBold, 
    color: PDF_CONFIG.COLORS.BROWN 
  });
  y -= PDF_CONFIG.SPACING.LINE + 5;
  
  if (data.firma) {
    currentPage.drawText(`Firma: ${data.firma}`, { x: PDF_CONFIG.MARGINS.LEFT, y, size: PDF_CONFIG.FONTS.BODY, font: fontBold });
    y -= PDF_CONFIG.SPACING.LINE;
  }
  
  currentPage.drawText(`${data.firstName} ${data.lastName}`, { x: PDF_CONFIG.MARGINS.LEFT, y, size: PDF_CONFIG.FONTS.BODY, font: fontRegular });
  y -= PDF_CONFIG.SPACING.LINE;
  currentPage.drawText(`${data.address}`, { x: PDF_CONFIG.MARGINS.LEFT, y, size: PDF_CONFIG.FONTS.BODY, font: fontRegular });
  y -= PDF_CONFIG.SPACING.LINE;
  currentPage.drawText(`${data.plz} ${data.city}`, { x: PDF_CONFIG.MARGINS.LEFT, y, size: PDF_CONFIG.FONTS.BODY, font: fontRegular });
  y -= PDF_CONFIG.SPACING.LINE;
  
  if (data.phone) {
    currentPage.drawText(`Tel: ${data.phone}`, { x: PDF_CONFIG.MARGINS.LEFT, y, size: PDF_CONFIG.FONTS.BODY, font: fontRegular });
    y -= PDF_CONFIG.SPACING.LINE;
  }
  
  currentPage.drawText(`E-Mail: ${data.email}`, { x: PDF_CONFIG.MARGINS.LEFT, y, size: PDF_CONFIG.FONTS.BODY, font: fontRegular });

  y -= PDF_CONFIG.SPACING.SECTION;

  // ✅ 4. TABLEAU PRESTATIONS ADAPTATIF
  checkSpaceAndCreatePage(150); // Vérifier l'espace pour le titre du tableau
  
  currentPage.drawText('LEISTUNGEN UND PREISE', { 
    x: PDF_CONFIG.MARGINS.LEFT, 
    y, 
    size: PDF_CONFIG.FONTS.SUBTITLE, 
    font: fontBold, 
    color: PDF_CONFIG.COLORS.BROWN 
  });
  y -= PDF_CONFIG.SPACING.LINE + 10;

  // Génération des prestations avec calculs précis
  let sousTotal = 0;
  const prestations = [];
  
  if (data.services && data.services.length > 0) {
    data.services.forEach((service: string) => {
      let description = service;
      let quantite = 1;
      let prixUnitaire = 0;
      let unite = 'service';
      
      const area = parseFloat(data.flaeche) || 0;
      const etage = parseInt(data.etage) || 1;
      const hasLift = data.lift === true;
      
      // Mapping services avec calculs précis
      switch (service) {
        case 'Büroreinigung':
          description = 'Professionelle Büroreinigung';
          quantite = area > 0 ? area : 50;
          prixUnitaire = 8;
          unite = 'm²';
          break;
        case 'Endreinigung (Wohnung/Haus)':
          description = 'Endreinigung - Komplette Wohnung/Haus';
          quantite = area > 0 ? area : 80;
          prixUnitaire = 12;
          unite = 'm²';
          break;
        case 'Sofa-/Polsterreinigung':
          description = 'Sofa- und Polsterreinigung';
          quantite = 1;
          prixUnitaire = 150;
          unite = 'Pauschal';
          break;
        case 'Auto-Innenreinigung':
          description = 'Auto-Innenreinigung komplett';
          quantite = 1;
          prixUnitaire = 80;
          unite = 'Fahrzeug';
          break;
        case 'Terrassenreinigung':
          description = 'Terrassen- und Balkonreinigung';
          quantite = area > 0 ? Math.ceil(area * 0.3) : 20;
          prixUnitaire = 6;
          unite = 'm²';
          break;
        case 'Haushaltsreinigung':
          description = 'Regelmässige Haushaltsreinigung';
          quantite = area > 0 ? area : 60;
          prixUnitaire = 10;
          unite = 'm²';
          break;
        default:
          description = service;
          quantite = 1;
          prixUnitaire = 100;
          unite = 'Service';
      }
      
      // Ajustement prix selon étage sans lift
      if (etage > 1 && !hasLift && ['Endreinigung (Wohnung/Haus)', 'Haushaltsreinigung'].includes(service)) {
        prixUnitaire += (etage - 1) * 2;
      }
      
      const total = quantite * prixUnitaire;
      prestations.push({ description, quantite, prixUnitaire, total, unite });
      sousTotal += total;
    });
  }

  // Frais de déplacement selon canton
  let fraisDeplacementBase = 25;
  let descriptionDeplacement = 'Anfahrtskosten';
  
  if (canton) {
    const cantonsFaraway = ['GR', 'TI', 'VS', 'UR', 'GL', 'AI', 'AR'];
    const cantonsDistant = ['BE', 'FR', 'JU', 'NE', 'VD'];
    
    if (cantonsFaraway.includes(canton)) {
      fraisDeplacementBase = 60;
      descriptionDeplacement = 'Anfahrtskosten (Bergregion)';
    } else if (cantonsDistant.includes(canton)) {
      fraisDeplacementBase = 40;
      descriptionDeplacement = 'Anfahrtskosten (erhöhte Distanz)';
    }
  }
  
  prestations.push({
    description: descriptionDeplacement,
    quantite: 1,
    prixUnitaire: fraisDeplacementBase,
    total: fraisDeplacementBase,
    unite: 'Pauschal'
  });
  sousTotal += fraisDeplacementBase;

  // ✅ TABLEAU ADAPTATIF SELON NOMBRE DE LIGNES
  const nombreLignes = prestations.length;
  let tableauFontSize = PDF_CONFIG.FONTS.BODY;
  let ligneeHeight = 22;
  
  // Ajustement automatique si trop de prestations
  if (nombreLignes > 8) {
    tableauFontSize = PDF_CONFIG.FONTS.SMALL;
    ligneeHeight = 18;
  }

  // Colonnes du tableau (largeurs optimisées)
  const col1Width = 280; // Description
  const col2Width = 80;  // Quantité  
  const col3Width = 80;  // Prix unitaire
  const col4Width = 80;  // Total
  const tableWidth = col1Width + col2Width + col3Width + col4Width;
  
  const tableX = PDF_CONFIG.MARGINS.LEFT;
  const col1X = tableX;
  const col2X = col1X + col1Width;
  const col3X = col2X + col2Width;
  const col4X = col3X + col3Width;

  // Vérifier l'espace pour l'en-tête du tableau
  checkSpaceAndCreatePage(50);

  // En-tête du tableau
  const headerHeight = 25;
  currentPage.drawRectangle({ 
    x: tableX, 
    y: y - headerHeight, 
    width: tableWidth, 
    height: headerHeight, 
    color: PDF_CONFIG.COLORS.LIGHT_GRAY,
    borderColor: PDF_CONFIG.COLORS.BORDER,
    borderWidth: 1
  });
  
  const headerTextY = y - 15;
  currentPage.drawText('Leistungsbeschreibung', { x: col1X + 5, y: headerTextY, size: tableauFontSize, font: fontBold, color: PDF_CONFIG.COLORS.BROWN });
  currentPage.drawText('Menge', { x: col2X + 5, y: headerTextY, size: tableauFontSize, font: fontBold, color: PDF_CONFIG.COLORS.BROWN });
  currentPage.drawText('Preis/Einheit', { x: col3X + 5, y: headerTextY, size: tableauFontSize, font: fontBold, color: PDF_CONFIG.COLORS.BROWN });
  currentPage.drawText('Total CHF', { x: col4X + 5, y: headerTextY, size: tableauFontSize, font: fontBold, color: PDF_CONFIG.COLORS.BROWN });
  
  y -= headerHeight;

  // Lignes du tableau avec gestion multi-pages
  prestations.forEach((p, i) => {
    // Vérifier l'espace pour chaque ligne
    checkSpaceAndCreatePage(ligneeHeight + 5);
    
    // Fond alterné pour lisibilité
    if (i % 2 === 0) {
      currentPage.drawRectangle({ 
        x: tableX, 
        y: y - ligneeHeight, 
        width: tableWidth, 
        height: ligneeHeight, 
        color: rgb(0.98, 0.98, 0.98) 
      });
    }
    
    // Bordures
    currentPage.drawRectangle({ 
      x: tableX, 
      y: y - ligneeHeight, 
      width: tableWidth, 
      height: ligneeHeight,
      borderColor: PDF_CONFIG.COLORS.BORDER,
      borderWidth: 0.5
    });
    
    const rowTextY = y - (ligneeHeight / 2) - 3;
    
    // Description (avec retour à la ligne si nécessaire)
    const descriptionLines = wrapText(p.description, col1Width - 10, fontRegular, tableauFontSize);
    let descY = rowTextY + (descriptionLines.length > 1 ? 5 : 0);
    descriptionLines.forEach(line => {
      currentPage.drawText(line, { x: col1X + 5, y: descY, size: tableauFontSize, font: fontRegular });
      descY -= 12;
    });
    
    // Quantité + unité (aligné à droite)
    const quantiteText = `${p.quantite} ${p.unite}`;
    const quantiteWidth = fontRegular.widthOfTextAtSize(quantiteText, tableauFontSize);
    currentPage.drawText(quantiteText, { x: col2X + col2Width - quantiteWidth - 5, y: rowTextY, size: tableauFontSize, font: fontRegular });
    
    // Prix unitaire (aligné à droite)
    const prixText = `CHF ${p.prixUnitaire.toFixed(2)}`;
    const prixWidth = fontRegular.widthOfTextAtSize(prixText, tableauFontSize);
    currentPage.drawText(prixText, { x: col3X + col3Width - prixWidth - 5, y: rowTextY, size: tableauFontSize, font: fontRegular });
    
    // Total (aligné à droite)
    const totalText = `CHF ${p.total.toFixed(2)}`;
    const totalWidth = fontRegular.widthOfTextAtSize(totalText, tableauFontSize);
    currentPage.drawText(totalText, { x: col4X + col4Width - totalWidth - 5, y: rowTextY, size: tableauFontSize, font: fontRegular });
    
    y -= ligneeHeight;
  });

  y -= PDF_CONFIG.SPACING.SECTION;
  checkSpaceAndCreatePage(120);

  // ✅ 5. TOTAUX (Séparation claire + alignement)
  // Ligne de séparation dorée
  currentPage.drawLine({ 
    start: { x: tableX, y: y + 10 }, 
    end: { x: tableX + tableWidth, y: y + 10 }, 
    thickness: 2, 
    color: PDF_CONFIG.COLORS.GOLD 
  });

  // Calculs TVA et totaux
  const tva = sousTotal * 0.081;
  const totalTTC = sousTotal + tva;

  // Cadre pour les totaux
  const totauxBoxWidth = 250;
  const totauxBoxHeight = 70;
  const totauxBoxX = PDF_CONFIG.PAGE_WIDTH - PDF_CONFIG.MARGINS.RIGHT - totauxBoxWidth;
  
  currentPage.drawRectangle({
    x: totauxBoxX,
    y: y - totauxBoxHeight,
    width: totauxBoxWidth,
    height: totauxBoxHeight,
    borderColor: PDF_CONFIG.COLORS.BORDER,
    borderWidth: 1,
  });

  let totalY = y - 15;
  const totalTextX = totauxBoxX + 15;
  
  // Sous-total
  currentPage.drawText('Sous-total:', { x: totalTextX, y: totalY, size: PDF_CONFIG.FONTS.BODY, font: fontRegular });
  const soustoTalText = `CHF ${sousTotal.toFixed(2)}`;
  const soustoTalWidth = fontRegular.widthOfTextAtSize(soustoTalText, PDF_CONFIG.FONTS.BODY);
  currentPage.drawText(soustoTalText, { x: totauxBoxX + totauxBoxWidth - soustoTalWidth - 15, y: totalY, size: PDF_CONFIG.FONTS.BODY, font: fontRegular });
  
  totalY -= PDF_CONFIG.SPACING.LINE;
  
  // TVA
  currentPage.drawText('MWST 8.1%:', { x: totalTextX, y: totalY, size: PDF_CONFIG.FONTS.BODY, font: fontRegular });
  const tvaText = `CHF ${tva.toFixed(2)}`;
  const tvaWidth = fontRegular.widthOfTextAtSize(tvaText, PDF_CONFIG.FONTS.BODY);
  currentPage.drawText(tvaText, { x: totauxBoxX + totauxBoxWidth - tvaWidth - 15, y: totalY, size: PDF_CONFIG.FONTS.BODY, font: fontRegular });
  
  totalY -= PDF_CONFIG.SPACING.LINE + 5;
  
  // Total TTC (en gras + fond doré léger)
  currentPage.drawRectangle({
    x: totauxBoxX + 5,
    y: totalY - 10,
    width: totauxBoxWidth - 10,
    height: 20,
    color: rgb(1, 0.95, 0.8),
  });
  
  currentPage.drawText('TOTAL TTC:', { x: totalTextX, y: totalY, size: PDF_CONFIG.FONTS.SUBTITLE, font: fontBold, color: PDF_CONFIG.COLORS.BROWN });
  const totalTTCText = `CHF ${totalTTC.toFixed(2)}`;
  const totalTTCWidth = fontBold.widthOfTextAtSize(totalTTCText, PDF_CONFIG.FONTS.SUBTITLE);
  currentPage.drawText(totalTTCText, { x: totauxBoxX + totauxBoxWidth - totalTTCWidth - 15, y: totalY, size: PDF_CONFIG.FONTS.SUBTITLE, font: fontBold, color: PDF_CONFIG.COLORS.BROWN });

  y -= totauxBoxHeight + PDF_CONFIG.SPACING.SECTION;
  checkSpaceAndCreatePage(120);

  // ✅ 6. CONDITIONS & GARANTIES (Marge 20px minimum)
  currentPage.drawText('BEDINGUNGEN & GARANTIEN', { 
    x: PDF_CONFIG.MARGINS.LEFT, 
    y, 
    size: PDF_CONFIG.FONTS.SUBTITLE, 
    font: fontBold, 
    color: PDF_CONFIG.COLORS.BROWN 
  });
  y -= PDF_CONFIG.SPACING.LINE + 8;

  const conditions = [
    '• 100% Zufriedenheitsgarantie inklusive',
    '• Umweltfreundliche und ökologische Reinigungsprodukte',
    '• Haftpflichtversicherung vorhanden',
    '• Stornierung bis 24h vor dem Termin möglich',
    `• Geschätzte Reinigungsdauer: ${calculateEstimatedDuration(data.services, parseFloat(data.flaeche) || 0)}h`
  ];

  if (data.message) {
    conditions.unshift(`• Spezielle Anfrage: ${data.message}`);
  }

  conditions.forEach((condition) => {
    checkSpaceAndCreatePage(20);
    currentPage.drawText(condition, { 
      x: PDF_CONFIG.MARGINS.LEFT, 
      y, 
      size: PDF_CONFIG.FONTS.BODY, 
      font: fontRegular 
    });
    y -= 18; // line-height: 1.6
  });

  y -= PDF_CONFIG.SPACING.SECTION;

  // ✅ 7. RENDEZ-VOUS (si demandé)
  if (data.date || data.time) {
    checkSpaceAndCreatePage(100);
    
    // Ligne de séparation
    currentPage.drawLine({ 
      start: { x: PDF_CONFIG.MARGINS.LEFT, y: y - 5 }, 
      end: { x: PDF_CONFIG.PAGE_WIDTH - PDF_CONFIG.MARGINS.RIGHT, y: y - 5 }, 
      thickness: 0.5, 
      color: PDF_CONFIG.COLORS.BORDER 
    });
    
    y -= 25;
    currentPage.drawText('TERMINWUNSCH', { 
      x: PDF_CONFIG.MARGINS.LEFT, 
      y, 
      size: PDF_CONFIG.FONTS.SUBTITLE, 
      font: fontBold, 
      color: PDF_CONFIG.COLORS.BROWN 
    });
    y -= PDF_CONFIG.SPACING.LINE + 5;
    
    if (data.date) {
      checkSpaceAndCreatePage(20);
      const formattedDate = new Date(data.date).toLocaleDateString('de-CH', {
        weekday: 'long',
        year: 'numeric', 
        month: 'long',
        day: 'numeric'
      });
      currentPage.drawText(`• Wunschtermin: ${formattedDate}`, { 
        x: PDF_CONFIG.MARGINS.LEFT, 
        y, 
        size: PDF_CONFIG.FONTS.BODY, 
        font: fontRegular 
      });
      y -= 16;
    }
    
    if (data.time) {
      checkSpaceAndCreatePage(20);
      currentPage.drawText(`• Bevorzugte Uhrzeit: ${data.time} Uhr`, { 
        x: PDF_CONFIG.MARGINS.LEFT, 
        y, 
        size: PDF_CONFIG.FONTS.BODY, 
        font: fontRegular 
      });
      y -= 16;
    }
    
    y -= 20;
  }

  // ✅ 8. SIGNATURES (40px padding top minimum)
  checkSpaceAndCreatePage(120);
  
  // Ligne de séparation
  currentPage.drawLine({ 
    start: { x: PDF_CONFIG.MARGINS.LEFT, y: y - 5 }, 
    end: { x: PDF_CONFIG.PAGE_WIDTH - PDF_CONFIG.MARGINS.RIGHT, y: y - 5 }, 
    thickness: 0.5, 
    color: PDF_CONFIG.COLORS.BORDER 
  });
  
  y -= 45; // 40px minimum + marge
  currentPage.drawText('UNTERSCHRIFTEN', { 
    x: PDF_CONFIG.MARGINS.LEFT, 
    y, 
    size: PDF_CONFIG.FONTS.SUBTITLE, 
    font: fontBold, 
    color: PDF_CONFIG.COLORS.BROWN 
  });
  y -= 35;
  
  // Signatures sur deux colonnes bien espacées
  const signatureY = y - 25;
  const lineLength = 180;
  const spaceBetween = 100;
  
  // Signature L&N
  currentPage.drawText('Unterschrift L&N Reinigung:', { 
    x: PDF_CONFIG.MARGINS.LEFT, 
    y, 
    size: PDF_CONFIG.FONTS.BODY, 
    font: fontRegular 
  });
  currentPage.drawLine({ 
    start: { x: PDF_CONFIG.MARGINS.LEFT, y: signatureY }, 
    end: { x: PDF_CONFIG.MARGINS.LEFT + lineLength, y: signatureY }, 
    thickness: 1, 
    color: PDF_CONFIG.COLORS.BORDER 
  });
  
  // Signature client
  const clientSignX = PDF_CONFIG.MARGINS.LEFT + lineLength + spaceBetween;
  currentPage.drawText('Unterschrift Kunde:', { 
    x: clientSignX, 
    y, 
    size: PDF_CONFIG.FONTS.BODY, 
    font: fontRegular 
  });
  currentPage.drawLine({ 
    start: { x: clientSignX, y: signatureY }, 
    end: { x: clientSignX + lineLength, y: signatureY }, 
    thickness: 1, 
    color: PDF_CONFIG.COLORS.BORDER 
  });
  
  // Note légale finale
  y -= 60;
  currentPage.drawText('Diese Offerte gilt als Auftrag bei Annahme durch Unterschrift.', { 
    x: PDF_CONFIG.MARGINS.LEFT, 
    y, 
    size: PDF_CONFIG.FONTS.SMALL, 
    font: fontRegular, 
    color: PDF_CONFIG.COLORS.GRAY 
  });

  // ✅ FINALISER LE PDF - Ajouter le footer à la dernière page
  addFooterToPage(currentPage, pageNumber, totalPagesRef);

  const pdfBytes = await pdfDoc.save();
  return pdfBytes;
}

// ✅ API HANDLER PRINCIPAL
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const data = req.body;

  try {
    // Génération du PDF professionnel
    const pdfBytes = await generateOffertePDF(data);
    
    const currentDate = new Date().toLocaleDateString('de-CH');

    // Configuration email optimisée
    const smtpUser = 'mikaleclerc5@gmail.com';
    const smtpPass = 'xburhsvdnbjwnfmh';
    const adminEmail = 'mikaleclerc5@gmail.com';

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: smtpUser,
        pass: smtpPass
      }
    });

    // Email professionnel
    const mailOptions = {
      from: `L&N Reinigung <${smtpUser}>`,
      to: data.email,
      bcc: adminEmail,
      subject: 'Ihre Offertanfrage – L&N Reinigung',
      html: `
        <div style="font-family: Inter, -apple-system, sans-serif; max-width: 600px; margin: 0 auto; line-height: 1.6;">
          <h2 style="color: #CC9A00; margin-bottom: 20px;">Vielen Dank für Ihre Offertanfrage!</h2>
          <p>Liebe/r ${data.firstName} ${data.lastName},</p>
          <p>vielen Dank für Ihr Vertrauen in L&N Reinigung. Ihre Offertanfrage haben wir erfolgreich erhalten.</p>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Nächste Schritte:</h3>
            <ul style="margin: 0; padding-left: 20px;">
              <li>Wir melden uns innerhalb von 24h persönlich bei Ihnen</li>
              <li>Kostenlose Besichtigung und transparente Offerte</li>
              <li>Terminvereinbarung nach Ihren Wünschen</li>
            </ul>
          </div>
          
          <p>Im Anhang finden Sie eine detaillierte Zusammenfassung Ihrer Anfrage.</p>
          <p>Mit freundlichen Grüssen<br><strong>Ihr L&N Reinigung Team</strong></p>
          
          <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
          <p style="font-size: 12px; color: #666; text-align: center;">
            L&N Reinigung – Professionelle Reinigung mit Schweizer Garantie<br>
            E-Mail: mikaleclerc5@gmail.com | Tel: +41 76 123 45 67
          </p>
        </div>
      `,
      attachments: [
        {
          filename: `Offerte_LN-Reinigung_${currentDate.replace(/\./g, '-')}.pdf`,
          content: Buffer.from(pdfBytes),
          contentType: 'application/pdf'
        }
      ]
    };

    await transporter.sendMail(mailOptions);

    // Retour du PDF généré
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `inline; filename="Offerte_LN-Reinigung_${currentDate}.pdf"`);
    res.send(Buffer.from(pdfBytes));

  } catch (error) {
    console.error('Erreur lors de la génération:', error);
    res.status(500).json({ 
      error: 'Erreur lors de la génération de l\'offerte',
      details: error instanceof Error ? error.message : 'Erreur inconnue'
    });
  }
} 