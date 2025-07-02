"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface LanguageContextType {
  currentLang: string;
  setCurrentLang: (lang: string) => void;
  getTranslation: (text: string, targetLang?: string) => string;
  isTranslating: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [currentLang, setCurrentLang] = useState("de"); // Langue par défaut : allemand
  const [translationCache, setTranslationCache] = useState<Record<string, string>>({});
  const [isTranslating] = useState(false); // Toujours false, car plus de traduction

  // Charger la langue depuis localStorage au démarrage
  useEffect(() => {
    const savedLang = localStorage.getItem("selectedLanguage");
    if (savedLang) {
      setCurrentLang(savedLang);
    }
  }, []);

  // Sauvegarder la langue dans localStorage
  useEffect(() => {
    localStorage.setItem("selectedLanguage", currentLang);
  }, [currentLang]);

  // Fonction synchrone pour récupérer une traduction (depuis le cache ou texte original)
  const getTranslation = (text: string, targetLang?: string): string => {
    // Ici, on ne fait plus de traduction automatique
    return text;
  };

  return (
    <LanguageContext.Provider
      value={{
        currentLang,
        setCurrentLang,
        getTranslation,
        isTranslating,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
} 