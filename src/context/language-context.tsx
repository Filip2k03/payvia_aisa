// src/context/language-context.tsx
"use client";

import React, { createContext, useState, useContext, ReactNode } from 'react';
import translations from '@/lib/translations';

type Language = 'en' | 'mm';

interface LanguageContextType {
  language: Language;
  translations: typeof translations.en;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'mm' : 'en'));
  };

  const currentTranslations = translations[language];

  return (
    <LanguageContext.Provider value={{ language, translations: currentTranslations, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
