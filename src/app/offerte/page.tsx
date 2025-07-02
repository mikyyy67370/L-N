"use client";
import { useState } from "react";
import Link from "next/link";
import { Shield, Info, CheckCircle, MapPin, Clock, Phone, Home, Building2, Sofa, Car, TreePine, Sparkles, ArrowLeft, ArrowRight, User, Wrench, Calendar, ShieldCheck } from "lucide-react";
import { getCantonFromNPA, getCantonName, formatVATRate } from "@/lib/swiss-data";
import { useRouter } from 'next/navigation';
import TranslatableText from '../../components/TranslatableText';

const steps = [
  { title: "Persönliche Angaben" },
  { title: "Objekt & Adresse" },
  { title: "Service wählen" },
  { title: "Details & Termin" },
  { title: "Zusammenfassung" },
];

const serviceOptions = [
  {
    name: "Endreinigung (Wohnung/Haus)",
    description: "Umfassende Reinigung nach Auszug",
    price: "ab CHF 12.-/m²",
    icon: Home,
    popular: true
  },
  {
    name: "Büroreinigung",
    description: "Professionelle Büro- & Geschäftsreinigung",
    price: "ab CHF 8.-/m²",
    icon: Building2,
    popular: false
  },
  {
    name: "Sofa-/Polsterreinigung",
    description: "Tiefenreinigung von Polstermöbeln",
    price: "ab CHF 150.- pauschal",
    icon: Sofa,
    popular: false
  },
  {
    name: "Auto-Innenreinigung",
    description: "Komplette Fahrzeuginnenreinigung",
    price: "ab CHF 80.- pauschal",
    icon: Car,
    popular: false
  },
  {
    name: "Terrassenreinigung",
    description: "Reinigung von Terrassen & Balkonen",
    price: "ab CHF 6.-/m²",
    icon: TreePine,
    popular: false
  },
  {
    name: "Haushaltsreinigung",
    description: "Regelmässige Haushaltsreinigung",
    price: "ab CHF 10.-/m²",
    icon: Sparkles,
    popular: false
  }
];

export default function OffertePage() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    plz: "",
    city: "",
    objekt: "",
    flaeche: "",
    etage: "",
    lift: false,
    services: [] as string[],
    date: "",
    time: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const next = () => setStep((s) => Math.min(s + 1, steps.length - 1));
  const prev = () => setStep((s) => Math.max(s - 1, 0));

  // Fonction simplifiée pour détection canton
  const getDetectedCanton = () => {
    if (form.plz && form.plz.length === 4) {
      return getCantonFromNPA(form.plz);
    }
    return null;
  };

  const getVatRate = () => {
    return "8.1%"; // TVA fédérale suisse standard
  };

  // Gestion des services
  const toggleService = (serviceName: string) => {
    setForm(f => ({
      ...f,
      services: f.services.includes(serviceName)
        ? f.services.filter(s => s !== serviceName)
        : [...f.services, serviceName]
    }));
  };

  // Calcul simple du prix
  const calculatePrice = () => {
    const area = parseFloat(form.flaeche) || 0;
    let total = 0;

    form.services.forEach(serviceName => {
      switch(serviceName) {
        case "Endreinigung (Wohnung/Haus)":
          total += area * 12;
          break;
        case "Büroreinigung":
          total += area * 8;
          break;
        case "Sofa-/Polsterreinigung":
          total += 150;
          break;
        case "Auto-Innenreinigung":
          total += 80;
          break;
        case "Terrassenreinigung":
          total += area * 6;
          break;
        case "Haushaltsreinigung":
          total += area * 10;
          break;
        default:
          total += 100;
      }
    });

    if (parseInt(form.etage) > 1 && !form.lift) {
      total += (parseInt(form.etage) - 1) * 20;
    }

    return total;
  };

  // Validation simple
  const isStepValid = (stepIndex: number) => {
    switch(stepIndex) {
      case 0:
        return form.firstName && form.lastName && form.email && form.phone;
      case 1:
        return form.address && form.plz && form.city && form.objekt && form.flaeche;
      case 2:
        return form.services.length > 0;
      case 3:
        return form.date;
      default:
        return true;
    }
  };

  // Navigation intelligente
  const smartNext = () => {
    if (isStepValid(step)) {
      next();
    }
  };

  // Soumission
  const handleSubmit = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/offerte', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        router.push('/offerte/success');
      } else {
        const data = await res.json();
        setError(data.error || 'Fehler beim Senden. Bitte versuchen Sie es erneut.');
      }
    } catch (e: any) {
      setError('Fehler beim Senden. Bitte versuchen Sie es erneut.');
    } finally {
      setLoading(false);
    }
  };

  // Fonction pour déterminer le contenu à afficher
  const getCurrentStepKey = () => {
    if (step === 999) return "success";
    return `step${step}`;
  };

  const renderCurrentStep = () => {
    if (step === 999) {
      return null;
    }

    if (step === 0) {
      return (
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-dark-brown-900">Persönliche Angaben</h2>
            <div className="flex items-center space-x-2 text-sm text-dark-brown-700">
              <Shield className="w-4 h-4 text-amber-600" />
              <span>Datenschutz garantiert</span>
            </div>
          </div>

          {/* Privacy Notice */}
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
            <div className="flex items-start space-x-3">
              <Info className="w-5 h-5 text-amber-600 mt-0.5" />
              <div>
                <h4 className="font-semibold text-amber-900 mb-1">Ihre Daten sind sicher</h4>
                <p className="text-sm text-amber-800">
                  Wir behandeln Ihre persönlichen Daten vertraulich und geben sie niemals an Dritte weiter. 
                  SSL-verschlüsselte Übertragung nach Schweizer Datenschutzstandards.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-dark-brown-900 mb-1">
                Vorname <span className="text-red-500">*</span>
              </label>
              <input 
                type="text" 
                className="w-full rounded-lg border border-gold-400/20 px-4 py-2 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all" 
                value={form.firstName} 
                onChange={e => setForm(f => ({ ...f, firstName: e.target.value }))} 
                placeholder="Max" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-dark-brown-900 mb-1">
                Nachname <span className="text-red-500">*</span>
              </label>
              <input 
                type="text" 
                className="w-full rounded-lg border border-gold-400/20 px-4 py-2 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all" 
                value={form.lastName} 
                onChange={e => setForm(f => ({ ...f, lastName: e.target.value }))} 
                placeholder="Mustermann" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-dark-brown-900 mb-1">
                E-Mail <span className="text-red-500">*</span>
              </label>
              <input 
                type="email" 
                className="w-full rounded-lg border border-gold-400/20 px-4 py-2 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all" 
                value={form.email} 
                onChange={e => setForm(f => ({ ...f, email: e.target.value }))} 
                placeholder="max.mustermann@email.ch" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-dark-brown-900 mb-1">
                Telefon <span className="text-red-500">*</span>
              </label>
              <input 
                type="tel" 
                className="w-full rounded-lg border border-gold-400/20 px-4 py-2 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all" 
                value={form.phone} 
                onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} 
                placeholder="+41 79 123 45 67" 
              />
              <p className="text-xs text-gray-600 mt-1">Für Rückfragen</p>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 text-center">
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
              <Clock className="w-6 h-6 text-amber-600 mx-auto mb-2" />
              <p className="text-xs text-amber-800 font-medium">Antwort innert 24h</p>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
              <Phone className="w-6 h-6 text-amber-600 mx-auto mb-2" />
              <p className="text-xs text-amber-800 font-medium">Kostenlose Beratung</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <button 
              onClick={smartNext} 
              className="w-full sm:w-auto bg-gradient-to-r from-gold-400 to-gold-500 text-dark-brown-900 font-bold px-6 sm:px-8 py-2 sm:py-3 rounded-xl shadow-lg hover:from-gold-500 hover:to-gold-600 transition-all text-base sm:text-lg"
            >
              Weiter
            </button>
          </div>
        </div>
      );
    }

    if (step === 1) {
      return (
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-dark-brown-900">Objekt & Adresse</h2>
            <div className="flex items-center space-x-2 text-sm text-dark-brown-700">
              <Shield className="w-4 h-4 text-amber-600" />
              <span>Schweizer Standards</span>
            </div>
          </div>

          {/* Adresse Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-dark-brown-900 mb-1">
                Adresse <span className="text-red-500">*</span>
              </label>
              <input 
                type="text" 
                className="w-full rounded-lg border border-gold-400/20 px-4 py-2 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all" 
                value={form.address} 
                onChange={e => setForm(f => ({ ...f, address: e.target.value }))} 
                placeholder="Musterstrasse 123" 
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-dark-brown-900 mb-1">
                PLZ <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input 
                  type="text" 
                  maxLength={4}
                  className="w-full rounded-lg border border-gold-400/20 px-4 py-2 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all" 
                  value={form.plz} 
                  onChange={e => setForm(f => ({ ...f, plz: e.target.value }))} 
                  placeholder="8001" 
                />
                {getDetectedCanton() && (
                  <div className="absolute right-2 top-2 text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">
                    {getCantonName(getDetectedCanton()!)}
                  </div>
                )}
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-dark-brown-900 mb-1">
                Ort <span className="text-red-500">*</span>
              </label>
              <input 
                type="text" 
                className="w-full rounded-lg border border-gold-400/20 px-4 py-2 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all" 
                value={form.city} 
                onChange={e => setForm(f => ({ ...f, city: e.target.value }))} 
                placeholder="Zürich" 
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-dark-brown-900 mb-1">
                Objekttyp <span className="text-red-500">*</span>
              </label>
              <select 
                className="w-full rounded-lg border border-gold-400/20 px-4 py-2 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all"
                value={form.objekt} 
                onChange={e => setForm(f => ({ ...f, objekt: e.target.value }))}
              >
                <option value="">Objekttyp wählen</option>
                <option value="Wohnung">Wohnung</option>
                <option value="Haus">Haus/Einfamilienhaus</option>
                <option value="Büro">Büro</option>
                <option value="Praxis">Praxis</option>
                <option value="Gewerbe">Gewerberäume</option>
                <option value="Sonstiges">Sonstiges</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-dark-brown-900 mb-1">
                Fläche (m²) <span className="text-red-500">*</span>
              </label>
              <input 
                type="number" 
                min="1"
                className="w-full rounded-lg border border-gold-400/20 px-4 py-2 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all" 
                value={form.flaeche} 
                onChange={e => setForm(f => ({ ...f, flaeche: e.target.value }))} 
                placeholder="z.B. 80" 
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-dark-brown-900 mb-1">Etage</label>
              <input 
                type="number" 
                min="0"
                className="w-full rounded-lg border border-gold-400/20 px-4 py-2 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all" 
                value={form.etage} 
                onChange={e => setForm(f => ({ ...f, etage: e.target.value }))} 
                placeholder="z.B. 2 (optional)" 
              />
            </div>
            
            <div className="md:col-span-2">
              <div className="flex items-center mt-2">
                <input 
                  type="checkbox" 
                  id="lift" 
                  checked={form.lift} 
                  onChange={e => setForm(f => ({ ...f, lift: e.target.checked }))} 
                  className="mr-3 accent-gold-400 h-4 w-4" 
                />
                <label htmlFor="lift" className="text-sm text-dark-brown-900 cursor-pointer">
                  Lift/Aufzug vorhanden
                </label>
              </div>
            </div>
          </div>

          {/* TVA Information Box */}
          {getDetectedCanton() && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <div className="flex items-start space-x-3">
                <Info className="w-5 h-5 text-blue-600 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-blue-900 mb-1">Steuerliche Informationen</h4>
                  <p className="text-sm text-blue-800">
                    <span className="font-medium">Erkannter Kanton:</span> {getCantonName(getDetectedCanton()!)} ({getDetectedCanton()})<br/>
                    <span className="font-medium">MWST (föderaler Satz):</span> {getVatRate()} - Standard Schweiz
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Trust Elements */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 text-center">
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
              <Shield className="w-6 h-6 text-amber-600 mx-auto mb-2" />
              <p className="text-xs text-amber-800 font-medium">Versichert & Zertifiziert</p>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
              <MapPin className="w-6 h-6 text-amber-600 mx-auto mb-2" />
              <p className="text-xs text-amber-800 font-medium">Schweizweit tätig</p>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
              <CheckCircle className="w-6 h-6 text-amber-600 mx-auto mb-2" />
              <p className="text-xs text-amber-800 font-medium">Zufriedenheitsgarantie</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <button 
              onClick={prev} 
              className="w-full sm:w-auto bg-gray-100 text-dark-brown-900 font-bold px-4 sm:px-6 py-2 sm:py-3 rounded-xl shadow hover:bg-gray-200 transition-all"
            >
              Zurück
            </button>
            <button 
              onClick={next} 
              className="w-full sm:w-auto bg-gradient-to-r from-gold-400 to-gold-500 text-dark-brown-900 font-bold px-6 sm:px-8 py-2 sm:py-3 rounded-xl shadow-lg hover:from-gold-500 hover:to-gold-600 transition-all text-base sm:text-lg"
            >
              Weiter
            </button>
          </div>
        </div>
      );
    }

    if (step === 2) {
      return (
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-dark-brown-900">Service wählen</h2>
            <div className="flex items-center space-x-2 text-sm text-dark-brown-700">
              <Shield className="w-4 h-4 text-amber-600" />
              <span>Fixe Preise</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {serviceOptions.map((service) => (
              <label 
                key={service.name} 
                className={`relative p-4 rounded-lg border-2 cursor-pointer transition-all ${
                  form.services.includes(service.name) 
                    ? "border-gold-400 bg-gold-50 shadow-md" 
                    : "border-gold-400/20 bg-white hover:border-gold-400/40 hover:shadow-sm"
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-2 -right-2 bg-amber-500 text-white text-xs px-2 py-1 rounded-full">
                    Beliebt
                  </div>
                )}
                
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    checked={form.services.includes(service.name)}
                    onChange={() => toggleService(service.name)}
                    className="mt-1 accent-gold-400 h-4 w-4"
                  />
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center">
                        <service.icon className="w-5 h-5 text-amber-900" />
                      </div>
                      <h3 className="font-semibold text-amber-900">{service.name}</h3>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{service.description}</p>
                    <p className="text-sm font-bold text-gold-600">{service.price}</p>
                  </div>
                </div>
              </label>
            ))}
          </div>

          {/* Service selection help */}
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
            <div className="flex items-start space-x-3">
              <Info className="w-5 h-5 text-amber-600 mt-0.5" />
              <div>
                <h4 className="font-semibold text-amber-900 mb-1">Tipp</h4>
                <p className="text-sm text-amber-800">
                  Sie können mehrere Services auswählen. Die Preise verstehen sich als Richtpreise - 
                  Sie erhalten eine detaillierte Offerte basierend auf Ihren spezifischen Anforderungen.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <button 
              onClick={prev} 
              className="w-full sm:w-auto bg-gray-100 text-dark-brown-900 font-bold px-4 sm:px-6 py-2 sm:py-3 rounded-xl shadow hover:bg-gray-200 transition-all"
            >
              Zurück
            </button>
            <button 
              onClick={next} 
              disabled={form.services.length === 0}
              className={`w-full sm:w-auto bg-gradient-to-r from-gold-400 to-gold-500 text-dark-brown-900 font-bold px-6 sm:px-8 py-2 sm:py-3 rounded-xl shadow-lg hover:from-gold-500 hover:to-gold-600 transition-all text-base sm:text-lg ${
                form.services.length > 0 
                  ? "" 
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              Weiter ({form.services.length} ausgewählt)
            </button>
          </div>
        </div>
      );
    }

    if (step === 3) {
      const today = new Date().toISOString().split('T')[0];
      const maxDate = new Date();
      maxDate.setMonth(maxDate.getMonth() + 3);
      const maxDateStr = maxDate.toISOString().split('T')[0];

      return (
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-dark-brown-900">Details & Termin</h2>
            <div className="flex items-center space-x-2 text-sm text-dark-brown-700">
              <Clock className="w-4 h-4 text-amber-600" />
              <span>Flexible Termine</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-dark-brown-900 mb-2">
                Wunschtermin <span className="text-red-500">*</span>
              </label>
              <input 
                type="date" 
                min={today}
                max={maxDateStr}
                className="w-full rounded-lg border border-gold-400/20 px-4 py-3 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all" 
                value={form.date} 
                onChange={e => setForm(f => ({ ...f, date: e.target.value }))} 
              />
              <p className="text-xs text-gray-600 mt-1">
                Wählen Sie Ihren bevorzugten Termin (bis zu 3 Monate im Voraus)
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-dark-brown-900 mb-2">Bevorzugte Uhrzeit</label>
              <select 
                className="w-full rounded-lg border border-gold-400/20 px-4 py-3 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all"
                value={form.time || ''}
                onChange={e => setForm(f => ({ ...f, time: e.target.value }))}
              >
                <option value="">Uhrzeit wählen (optional)</option>
                <option value="08:00-12:00">Morgen (08:00 - 12:00)</option>
                <option value="12:00-16:00">Mittag (12:00 - 16:00)</option>
                <option value="16:00-20:00">Abend (16:00 - 20:00)</option>
                <option value="flexible">Flexible</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-dark-brown-900 mb-2">
                Bemerkungen / Spezielle Wünsche
              </label>
              <textarea 
                className="w-full rounded-lg border border-gold-400/20 px-4 py-3 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all" 
                rows={4} 
                value={form.message} 
                onChange={e => setForm(f => ({ ...f, message: e.target.value }))} 
                placeholder="Z.B. Schlüsselübergabe, besondere Reinigungsanforderungen, Allergien, etc..."
              />
              <p className="text-xs text-gray-600 mt-1">
                Teilen Sie uns alles mit, was für die Offerte wichtig ist
              </p>
            </div>
          </div>

          {/* Information Box */}
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5" />
              <div>
                <h4 className="font-semibold text-amber-900 mb-1">Was passiert als nächstes?</h4>
                <ul className="text-sm text-amber-800 space-y-1">
                  <li>• Sie erhalten sofort eine PDF-Offerte per E-Mail</li>
                  <li>• Wir kontaktieren Sie innert 24h für Details</li>
                  <li>• Terminbestätigung nach Absprache</li>
                  <li>• Professionelle Reinigung zum vereinbarten Termin</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <button 
              onClick={prev} 
              className="w-full sm:w-auto bg-gray-100 text-dark-brown-900 font-bold px-4 sm:px-6 py-2 sm:py-3 rounded-xl shadow hover:bg-gray-200 transition-all"
            >
              Zurück
            </button>
            <button 
              onClick={next} 
              disabled={!form.date}
              className={`w-full sm:w-auto bg-gradient-to-r from-gold-400 to-gold-500 text-dark-brown-900 font-bold px-6 sm:px-8 py-2 sm:py-3 rounded-xl shadow-lg hover:from-gold-500 hover:to-gold-600 transition-all text-base sm:text-lg ${
                form.date 
                  ? "" 
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              Zur Zusammenfassung
            </button>
          </div>
        </div>
      );
    }

    if (step === 4) {
      const totalEstimated = calculatePrice() * 1.081;

      return (
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-dark-brown-900">Zusammenfassung</h2>
            <div className="flex items-center space-x-2 text-sm text-dark-brown-700">
              <Shield className="w-4 h-4 text-amber-600" />
              <span>Sicher & verschlüsselt</span>
            </div>
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Contact Information */}
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <h3 className="font-semibold text-amber-900 mb-3 flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <TranslatableText text="Kontaktdaten" />
              </h3>
              <div className="space-y-2 text-sm text-amber-800">
                <div><span className="font-medium">Name:</span> {form.firstName} {form.lastName}</div>
                <div><span className="font-medium">E-Mail:</span> {form.email}</div>
                <div><span className="font-medium">Telefon:</span> {form.phone}</div>
              </div>
            </div>

            {/* Property Information */}
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <h3 className="font-semibold text-amber-900 mb-3 flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                <TranslatableText text="Objekt" />
              </h3>
              <div className="space-y-2 text-sm text-amber-800">
                <div><span className="font-medium">Adresse:</span> {form.address}</div>
                <div><span className="font-medium">Ort:</span> {form.plz} {form.city}</div>
                <div><span className="font-medium">Typ:</span> {form.objekt}</div>
                <div><span className="font-medium">Fläche:</span> {form.flaeche} m²</div>
                {form.etage && <div><span className="font-medium">Etage:</span> {form.etage}</div>}
                <div><span className="font-medium">Lift:</span> {form.lift ? "Ja" : "Nein"}</div>
              </div>
            </div>

            {/* Services */}
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <h3 className="font-semibold text-amber-900 mb-3 flex items-center">
                <CheckCircle className="w-4 h-4 mr-2" />
                <TranslatableText text="Gewählte Services" />
              </h3>
              <ul className="space-y-1 text-sm text-amber-800">
                {form.services.map(serviceName => (
                  <li key={serviceName} className="flex items-center">
                    <CheckCircle className="w-3 h-3 text-amber-600 mr-2" />
                    {serviceName}
                  </li>
                ))}
              </ul>
            </div>

            {/* Schedule */}
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <h3 className="font-semibold text-amber-900 mb-3 flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <TranslatableText text="Termin" />
              </h3>
              <div className="space-y-2 text-sm text-amber-800">
                <div><span className="font-medium">Datum:</span> {new Date(form.date).toLocaleDateString('de-CH')}</div>
                {form.time && <div><span className="font-medium">Uhrzeit:</span> {form.time}</div>}
                {form.message && (
                  <div>
                    <span className="font-medium">Bemerkungen:</span>
                    <p className="mt-1 text-xs bg-white p-2 rounded border">{form.message}</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Price Estimation */}
          {calculatePrice() > 0 && (
            <div className="bg-gold-50 border border-gold-200 rounded-lg p-4">
              <h4 className="font-semibold text-dark-brown-900 mb-2">Geschätzte Kosten</h4>
              <div className="space-y-1 text-xs">
                <div className="flex justify-between">
                  <span>Nettopreis:</span>
                  <span>CHF {calculatePrice().toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>MWST (föderaler Satz):</span>
                  <span>CHF {(calculatePrice() * 0.081).toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-bold border-t border-gold-300 pt-1">
                  <span>Total:</span>
                  <span>CHF {(totalEstimated).toFixed(2)}</span>
                </div>
              </div>
              <p className="text-xs text-gray-600 mt-2 italic">
                * Unverbindliche Schätzung
              </p>
            </div>
          )}

          {/* Trust & Conversion Elements */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 text-center">
              <Shield className="w-6 h-6 text-amber-600 mx-auto mb-2" />
              <p className="text-xs text-amber-800 font-medium">100% versichert</p>
              <p className="text-xs text-amber-600">Vollkasko & Haftpflicht</p>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 text-center">
              <Clock className="w-6 h-6 text-amber-600 mx-auto mb-2" />
              <p className="text-xs text-amber-800 font-medium">24h Antwort</p>
              <p className="text-xs text-amber-600">Garantierte Rückmeldung</p>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 text-center">
              <CheckCircle className="w-6 h-6 text-amber-600 mx-auto mb-2" />
              <p className="text-xs text-amber-800 font-medium">Zufriedenheitsgarantie</p>
              <p className="text-xs text-amber-600">Oder Geld zurück</p>
            </div>
          </div>

          {/* Privacy Notice */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 mb-6">
            <p className="text-xs text-gray-700 text-center">
              <Shield className="w-3 h-3 inline mr-1" />
              Ihre Daten werden verschlüsselt übertragen und gemäss Schweizer Datenschutzgesetz behandelt.
            </p>
          </div>

          {error && <div className="text-red-600 mb-4 text-center bg-red-50 border border-red-200 rounded-lg p-3">{error}</div>}
          
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <button 
              onClick={prev} 
              className="w-full sm:w-auto bg-gray-100 text-dark-brown-900 font-bold px-4 sm:px-6 py-2 sm:py-3 rounded-xl shadow hover:bg-gray-200 transition-all"
            >
              Zurück
            </button>
            <button 
              onClick={handleSubmit} 
              disabled={loading} 
              className="w-full sm:w-auto bg-gradient-to-r from-gold-400 to-gold-500 text-dark-brown-900 font-bold px-6 sm:px-8 py-2 sm:py-3 rounded-xl shadow-lg hover:from-gold-500 hover:to-gold-600 transition-all text-base sm:text-lg"
            >
              {loading && <svg className="animate-spin mr-2 h-5 w-5 text-dark-brown-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" /></svg>}
              {loading ? "Wird versendet..." : "Offerte anfordern"}
            </button>
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <section className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Bouton de retour à la page d'accueil */}
        <div className="mb-6">
          <Link 
            href="/" 
            className="inline-flex items-center space-x-2 text-amber-700 hover:text-amber-900 transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200" />
            <span className="font-medium">Zurück zur Startseite</span>
          </Link>
        </div>

        {/* Header avec barre de progression */}
        {step !== 999 && (
          <div className="w-full mb-8">
            <div className="flex items-center justify-between mb-4">
              {steps.map((s, i) => (
                <div key={s.title} className="flex-1 flex flex-col items-center">
                  <div className={`w-10 h-10 flex items-center justify-center rounded-full font-bold text-lg border-2 transition-all ${
                    i < step ? "bg-amber-500 text-white border-amber-500" : 
                    i === step ? "bg-gold-400 text-dark-brown-900 border-gold-400" : 
                    "bg-white text-gray-400 border-gray-200"
                  }`}>
                    {i < step ? <CheckCircle className="w-5 h-5" /> : i + 1}
                  </div>
                  <span className={`mt-2 text-xs font-semibold ${i === step ? "text-gold-700" : i < step ? "text-amber-600" : "text-gray-400"}`}>
                    <TranslatableText text={s.title} />
                  </span>
                </div>
              ))}
            </div>
            <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-gold-400 to-gold-500 transition-all duration-700" 
                   style={{ width: `${((step + 1) / steps.length) * 100}%` }} />
            </div>
            <div className="text-center mt-2 text-sm text-gray-600">
              Schritt {step + 1} von {steps.length}
            </div>
          </div>
        )}
        
        {/* Layout principal */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Formulaire principal */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div 
                key={getCurrentStepKey()}
                className="min-h-[400px] transition-all duration-300 ease-in-out"
                style={{ opacity: 1, transform: 'translateY(0)' }}
              >
                {renderCurrentStep()}
              </div>
            </div>
          </div>

          {/* Sidebar résumé */}
          {step !== 999 && (
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-xl p-6 sticky top-4">
                <h3 className="text-lg font-bold text-dark-brown-900 mb-4">Ihre Offerte</h3>
                
                {/* Résumé contact */}
                <div className="space-y-3 text-sm">
                  <div className="pb-3 border-b border-gray-200">
                    <h4 className="font-semibold text-dark-brown-900 mb-2">Kontakt</h4>
                    {form.firstName || form.lastName ? (
                      <p className="text-gray-700">{form.firstName} {form.lastName}</p>
                    ) : (
                      <p className="text-gray-400 italic">Name eingeben</p>
                    )}
                    {form.email ? (
                      <p className="text-gray-700">{form.email}</p>
                    ) : (
                      <p className="text-gray-400 italic">E-Mail eingeben</p>
                    )}
                  </div>

                  {/* Résumé adresse */}
                  <div className="pb-3 border-b border-gray-200">
                    <h4 className="font-semibold text-dark-brown-900 mb-2">Objekt</h4>
                    {form.address && form.city ? (
                      <div>
                        <p className="text-gray-700">{form.address}</p>
                        <p className="text-gray-700">{form.plz} {form.city}</p>
                        {getDetectedCanton() && (
                          <p className="text-xs text-amber-600">Kanton: {getCantonName(getDetectedCanton()!)}</p>
                        )}
                      </div>
                    ) : (
                      <p className="text-gray-400 italic">Adresse eingeben</p>
                    )}
                    {form.objekt && <p className="text-gray-700 font-medium">{form.objekt}</p>}
                    {form.flaeche && <p className="text-gray-700">{form.flaeche} m²</p>}
                  </div>

                  {/* Résumé services */}
                  <div className="pb-3 border-b border-gray-200">
                    <h4 className="font-semibold text-dark-brown-900 mb-2">Services</h4>
                                         {form.services.length > 0 ? (
                       <ul className="space-y-1">
                         {form.services.map(serviceName => (
                           <li key={serviceName} className="text-gray-700 text-xs flex items-center">
                             <CheckCircle className="w-3 h-3 text-amber-500 mr-2" />
                             {serviceName}
                           </li>
                         ))}
                       </ul>
                     ) : (
                       <p className="text-gray-400 italic">Services wählen</p>
                     )}
                  </div>

                  {/* Estimation prix */}
                  {calculatePrice() > 0 && (
                    <div className="bg-gold-50 border border-gold-200 rounded-lg p-4">
                      <h4 className="font-semibold text-dark-brown-900 mb-2">Geschätzte Kosten</h4>
                      <div className="space-y-1 text-xs">
                        <div className="flex justify-between">
                          <span>Nettopreis:</span>
                          <span>CHF {calculatePrice().toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>MWST (föderaler Satz):</span>
                          <span>CHF {(calculatePrice() * 0.081).toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between font-bold border-t border-gold-300 pt-1">
                          <span>Total:</span>
                          <span>CHF {(calculatePrice() * 1.081).toFixed(2)}</span>
                        </div>
                      </div>
                      <p className="text-xs text-gray-600 mt-2 italic">
                        * Unverbindliche Schätzung
                      </p>
                    </div>
                  )}

                  {/* Validation badges */}
                  <div className="pt-3">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className={`w-3 h-3 rounded-full ${isStepValid(0) ? 'bg-amber-500' : 'bg-gray-300'}`}></div>
                      <span className="text-xs text-gray-600">Persönliche Daten</span>
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      <div className={`w-3 h-3 rounded-full ${isStepValid(1) ? 'bg-amber-500' : 'bg-gray-300'}`}></div>
                      <span className="text-xs text-gray-600">Objekt & Adresse</span>
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      <div className={`w-3 h-3 rounded-full ${isStepValid(2) ? 'bg-amber-500' : 'bg-gray-300'}`}></div>
                      <span className="text-xs text-gray-600">Services</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className={`w-3 h-3 rounded-full ${isStepValid(3) ? 'bg-amber-500' : 'bg-gray-300'}`}></div>
                      <span className="text-xs text-gray-600">Termin</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
} 