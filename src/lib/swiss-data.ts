// Swiss postal codes to canton mapping (selection des principales villes)
export const npaToCantonMap: { [key: string]: string } = {
  // Zurich (ZH)
  '8000': 'ZH', '8001': 'ZH', '8002': 'ZH', '8003': 'ZH', '8004': 'ZH', '8005': 'ZH',
  '8006': 'ZH', '8007': 'ZH', '8008': 'ZH', '8009': 'ZH', '8010': 'ZH', '8032': 'ZH',
  '8037': 'ZH', '8038': 'ZH', '8044': 'ZH', '8045': 'ZH', '8046': 'ZH', '8047': 'ZH',
  '8048': 'ZH', '8049': 'ZH', '8050': 'ZH', '8051': 'ZH', '8052': 'ZH', '8053': 'ZH',
  '8055': 'ZH', '8057': 'ZH', '8063': 'ZH', '8064': 'ZH', '8092': 'ZH', '8093': 'ZH',
  
  // Bern (BE)
  '3000': 'BE', '3001': 'BE', '3003': 'BE', '3004': 'BE', '3005': 'BE', '3006': 'BE',
  '3007': 'BE', '3008': 'BE', '3009': 'BE', '3010': 'BE', '3011': 'BE', '3012': 'BE',
  '3013': 'BE', '3014': 'BE', '3015': 'BE', '3018': 'BE', '3019': 'BE', '3020': 'BE',
  '3027': 'BE', '3032': 'BE', '3033': 'BE', '3052': 'BE', '3053': 'BE', '3063': 'BE',
  
  // Basel-Stadt (BS)
  '4000': 'BS', '4001': 'BS', '4002': 'BS', '4003': 'BS', '4051': 'BS', '4052': 'BS',
  '4053': 'BS', '4054': 'BS', '4055': 'BS', '4056': 'BS', '4057': 'BS', '4058': 'BS',
  
  // Basel-Landschaft (BL)
  '4100': 'BL', '4101': 'BL', '4102': 'BL', '4103': 'BL', '4104': 'BL', '4105': 'BL',
  '4106': 'BL', '4107': 'BL', '4108': 'BL', '4109': 'BL', '4110': 'BL', '4123': 'BL',
  '4125': 'BL', '4127': 'BL', '4133': 'BL', '4142': 'BL', '4144': 'BL', '4147': 'BL',
  
  // Genève (GE)
  '1200': 'GE', '1201': 'GE', '1202': 'GE', '1203': 'GE', '1204': 'GE', '1205': 'GE',
  '1206': 'GE', '1207': 'GE', '1208': 'GE', '1209': 'GE', '1212': 'GE', '1213': 'GE',
  '1214': 'GE', '1215': 'GE', '1216': 'GE', '1217': 'GE', '1218': 'GE', '1219': 'GE',
  '1220': 'GE', '1227': 'GE', '1228': 'GE', '1231': 'GE', '1232': 'GE', '1233': 'GE',
  
  // Vaud (VD)
  '1000': 'VD', '1001': 'VD', '1002': 'VD', '1003': 'VD', '1004': 'VD', '1005': 'VD',
  '1006': 'VD', '1007': 'VD', '1008': 'VD', '1009': 'VD', '1010': 'VD', '1011': 'VD',
  '1012': 'VD', '1018': 'VD', '1020': 'VD', '1022': 'VD', '1023': 'VD', '1024': 'VD',
  '1025': 'VD', '1026': 'VD', '1027': 'VD', '1028': 'VD', '1029': 'VD', '1030': 'VD',
  
  // Luzern (LU)
  '6000': 'LU', '6003': 'LU', '6004': 'LU', '6005': 'LU', '6006': 'LU', '6010': 'LU',
  '6011': 'LU', '6012': 'LU', '6013': 'LU', '6014': 'LU', '6015': 'LU', '6016': 'LU',
  '6017': 'LU', '6018': 'LU', '6020': 'LU', '6021': 'LU', '6022': 'LU', '6023': 'LU',
  
  // St. Gallen (SG)
  '9000': 'SG', '9001': 'SG', '9004': 'SG', '9006': 'SG', '9007': 'SG', '9008': 'SG',
  '9010': 'SG', '9011': 'SG', '9012': 'SG', '9013': 'SG', '9014': 'SG', '9015': 'SG',
  '9016': 'SG', '9020': 'SG', '9030': 'SG', '9032': 'SG', '9034': 'SG', '9035': 'SG',
  
  // Aargau (AG)
  '5000': 'AG', '5001': 'AG', '5003': 'AG', '5004': 'AG', '5005': 'AG', '5006': 'AG',
  '5007': 'AG', '5008': 'AG', '5012': 'AG', '5013': 'AG', '5014': 'AG', '5015': 'AG',
  '5023': 'AG', '5024': 'AG', '5025': 'AG', '5026': 'AG', '5027': 'AG', '5028': 'AG',
  
  // Thurgau (TG)
  '8500': 'TG', '8501': 'TG', '8502': 'TG', '8503': 'TG', '8505': 'TG', '8506': 'TG',
  '8507': 'TG', '8508': 'TG', '8510': 'TG', '8512': 'TG', '8514': 'TG', '8515': 'TG',
  
  // Ticino (TI)
  '6900': 'TI', '6901': 'TI', '6902': 'TI', '6903': 'TI', '6904': 'TI', '6905': 'TI',
  '6906': 'TI', '6911': 'TI', '6912': 'TI', '6914': 'TI', '6915': 'TI', '6916': 'TI',
  '6917': 'TI', '6918': 'TI', '6919': 'TI', '6920': 'TI', '6921': 'TI', '6922': 'TI',
  
  // Valais (VS)
  '1950': 'VS', '1951': 'VS', '1952': 'VS', '1955': 'VS', '1958': 'VS', '1961': 'VS',
  '1962': 'VS', '1963': 'VS', '1964': 'VS', '1965': 'VS', '1966': 'VS', '1967': 'VS',
  
  // Neuchâtel (NE)
  '2000': 'NE', '2001': 'NE', '2002': 'NE', '2003': 'NE', '2004': 'NE', '2005': 'NE',
  '2006': 'NE', '2007': 'NE', '2008': 'NE', '2009': 'NE', '2010': 'NE', '2011': 'NE',
  
  // Fribourg (FR)
  '1700': 'FR', '1701': 'FR', '1702': 'FR', '1703': 'FR', '1704': 'FR', '1705': 'FR',
  '1706': 'FR', '1707': 'FR', '1708': 'FR', '1709': 'FR', '1710': 'FR', '1712': 'FR',
  
  // Jura (JU)
  '2800': 'JU', '2801': 'JU', '2802': 'JU', '2803': 'JU', '2805': 'JU', '2806': 'JU',
  
  // Solothurn (SO)
  '4500': 'SO', '4501': 'SO', '4502': 'SO', '4503': 'SO', '4504': 'SO', '4505': 'SO',
  
  // Schaffhausen (SH)
  '8200': 'SH', '8201': 'SH', '8202': 'SH', '8203': 'SH', '8204': 'SH', '8205': 'SH',
  
  // Appenzell Ausserrhoden (AR)
  '9100': 'AR', '9101': 'AR', '9102': 'AR', '9103': 'AR', '9104': 'AR', '9105': 'AR',
  
  // Appenzell Innerrhoden (AI)
  '9050': 'AI', '9051': 'AI', '9052': 'AI', '9053': 'AI',
  
  // Graubünden (GR)
  '7000': 'GR', '7001': 'GR', '7002': 'GR', '7003': 'GR', '7004': 'GR', '7005': 'GR',
  
  // Glarus (GL)
  '8750': 'GL', '8751': 'GL', '8752': 'GL', '8753': 'GL', '8754': 'GL', '8755': 'GL',
  
  // Zug (ZG)
  '6300': 'ZG', '6301': 'ZG', '6302': 'ZG', '6303': 'ZG', '6304': 'ZG', '6305': 'ZG',
  
  // Schwyz (SZ)
  '6400': 'SZ', '6401': 'SZ', '6402': 'SZ', '6403': 'SZ', '6404': 'SZ', '6405': 'SZ',
  
  // Uri (UR)
  '6460': 'UR', '6461': 'UR', '6462': 'UR', '6463': 'UR', '6464': 'UR', '6465': 'UR',
  
  // Obwalden (OW)
  '6060': 'OW', '6061': 'OW', '6062': 'OW', '6063': 'OW', '6064': 'OW', '6065': 'OW',
  
  // Nidwalden (NW)
  '6370': 'NW', '6371': 'NW', '6372': 'NW', '6373': 'NW', '6374': 'NW', '6375': 'NW',
};

// Canton names in Swiss German
export const cantonNames: { [key: string]: string } = {
  'ZH': 'Zürich',
  'BE': 'Bern',
  'LU': 'Luzern',
  'UR': 'Uri',
  'SZ': 'Schwyz',
  'OW': 'Obwalden',
  'NW': 'Nidwalden',
  'GL': 'Glarus',
  'ZG': 'Zug',
  'FR': 'Freiburg',
  'SO': 'Solothurn',
  'BS': 'Basel-Stadt',
  'BL': 'Basel-Landschaft',
  'SH': 'Schaffhausen',
  'AR': 'Appenzell Ausserrhoden',
  'AI': 'Appenzell Innerrhoden',
  'SG': 'St. Gallen',
  'GR': 'Graubünden',
  'AG': 'Aargau',
  'TG': 'Thurgau',
  'TI': 'Tessin',
  'VD': 'Waadt',
  'VS': 'Wallis',
  'NE': 'Neuenburg',
  'GE': 'Genf',
  'JU': 'Jura',
};

// VAT rates by canton (most are 8.1%, but structure allows for exceptions)
export const vatRates: { [key: string]: number } = {
  default: 0.081, // Standard Swiss VAT 8.1%
  // All cantons use the same federal VAT rate for cleaning services
  // This structure allows for future exceptions if needed
};

// Get canton from postal code
export function getCantonFromNPA(npa: string): string | null {
  return npaToCantonMap[npa] || null;
}

// Get canton name in Swiss German
export function getCantonName(cantonCode: string): string {
  return cantonNames[cantonCode] || cantonCode;
}

// Get VAT rate for canton
export function getVATRate(cantonCode?: string): number {
  return vatRates[cantonCode || 'default'] || vatRates.default;
}

// Calculate VAT amount
export function calculateVAT(amount: number, cantonCode?: string): number {
  const rate = getVATRate(cantonCode);
  return amount * rate;
}

// Calculate total with VAT
export function calculateTotalWithVAT(amount: number, cantonCode?: string): number {
  return amount + calculateVAT(amount, cantonCode);
}

// Format VAT rate as percentage
export function formatVATRate(cantonCode?: string): string {
  const rate = getVATRate(cantonCode);
  return `${(rate * 100).toFixed(1)}%`;
} 