import { useState, useEffect } from 'react';
import { getTranslation } from '../utils/languageUtils';

export const useLanguage = () => {
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem('language');
    return saved || 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [language]);

  const t = (key) => getTranslation(key, language);

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };

  return {
    language,
    changeLanguage,
    t
  };
};