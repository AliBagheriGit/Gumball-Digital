'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Lang, translations } from './translations';

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
  t: typeof translations.en;
  dir: 'ltr' | 'rtl';
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'en',
  setLang: () => {},
  toggleLang: () => {},
  t: translations.en,
  dir: 'ltr',
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Lang>('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('gumball_lang') as Lang | null;
    if (saved === 'fa' || saved === 'en') {
      setLangState(saved);
      document.documentElement.dir = saved === 'fa' ? 'rtl' : 'ltr';
      document.documentElement.lang = saved;
    } else {
      document.documentElement.dir = 'ltr';
      document.documentElement.lang = 'en';
    }
  }, []);

  const setLang = (newLang: Lang) => {
    setLangState(newLang);
    localStorage.setItem('gumball_lang', newLang);
    document.documentElement.dir = newLang === 'fa' ? 'rtl' : 'ltr';
    document.documentElement.lang = newLang;
  };

  const toggleLang = () => {
    setLang(lang === 'en' ? 'fa' : 'en');
  };

  const t = translations[lang];
  const dir = lang === 'fa' ? 'rtl' : 'ltr';

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);

