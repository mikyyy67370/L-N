import { Service } from '@/types';

export const services: Service[] = [
  {
    id: 'carpet-cleaning',
    name: 'Teppichreinigung',
    description: 'Professionelle Reinigung von Teppichen und Polstern',
    basePrice: 150,
    category: 'residential'
  },
  {
    id: 'end-of-tenancy',
    name: 'Endreinigung',
    description: 'Komplette Endreinigung nach Umzug mit Garantie',
    basePrice: 350,
    category: 'residential'
  },
  {
    id: 'car-interior',
    name: 'Auto-Innenreinigung',
    description: 'Gründliche Reinigung des Fahrzeuginnenraums',
    basePrice: 120,
    category: 'specialized'
  },
  {
    id: 'sofa-cleaning',
    name: 'Sofas reinigen',
    description: 'Tiefenreinigung von Sofas und Polstermöbeln',
    basePrice: 180,
    category: 'residential'
  },
  {
    id: 'terrace-cleaning',
    name: 'Terrassenreinigung',
    description: 'Reinigung von Terrassen, Balkonen und Außenbereichen',
    basePrice: 200,
    category: 'specialized'
  },
  {
    id: 'private-cleaning',
    name: 'Privat Reinigung',
    description: 'Regelmäßige Hausreinigung und Haushaltshilfe',
    basePrice: 80,
    category: 'residential'
  }
];

export const getServiceById = (id: string): Service | undefined => {
  return services.find(service => service.id === id);
};

export const getServicesByCategory = (category: Service['category']): Service[] => {
  return services.filter(service => service.category === category);
}; 