// Typen für Reinigungsdienste
export interface CleaningService {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: 'residential' | 'commercial' | 'specialized';
}

// Typen für das Angebotsformular
export interface QuoteRequest {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: {
    street: string;
    city: string;
    postalCode: string;
  };
  serviceId: string;
  message?: string;
}

// Typen für das generierte Angebot
export interface Quote {
  id: string;
  clientInfo: QuoteRequest;
  services: CleaningService[];
  totalPrice: number;
  validUntil: Date;
  terms: string[];
  createdAt: Date;
}

// Typen für Preisgestaltung
export interface PricingRule {
  serviceId: string;
  basePrice: number;
  pricePerUnit?: number;
  unit?: 'hour' | 'sqm' | 'room';
  minimumPrice?: number;
  size?: number;
}

// Typen für Sprachen
export type Locale = 'de-CH' | 'fr' | 'en';

export interface Translation {
  [key: string]: {
    'de-CH': string;
    'fr': string;
    'en': string;
  };
} 