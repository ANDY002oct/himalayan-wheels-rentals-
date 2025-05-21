
import React, { createContext, useContext, useState, ReactNode } from 'react';
import enTranslations from '@/locales/en';
import neTranslations from '@/locales/ne';

type Locale = 'en' | 'ne';

// Updated type definition to allow for nested translation objects AND arrays of strings
type TranslationValue = string | string[] | { [key: string]: TranslationValue };

interface Translations {
  [key: string]: TranslationValue;
}

interface LanguageContextType {
  locale: Locale;
  translations: Translations;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string | string[];
}

const defaultLanguage: Locale = 'en';

const LanguageContext = createContext<LanguageContextType>({
  locale: defaultLanguage,
  translations: {},
  setLocale: () => {},
  t: () => '',
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocale] = useState<Locale>(defaultLanguage);
  
  const translations = locale === 'en' ? enTranslations : neTranslations;

  // Translation function that gets nested keys like "bikes.filter.location"
  const t = (key: string): string | string[] => {
    const keys = key.split('.');
    let result: any = translations;
    
    for (const k of keys) {
      if (result[k] === undefined) {
        console.warn(`Translation key not found: ${key}`);
        return key;
      }
      result = result[k];
    }
    
    return typeof result === 'string' || Array.isArray(result) ? result : key;
  };

  return (
    <LanguageContext.Provider value={{ locale, translations, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
