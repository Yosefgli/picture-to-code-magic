import React, { createContext, useContext, useState, useEffect } from 'react';

type LanguageContextType = {
  isHebrew: boolean;
  isAnimating: boolean;
};

const LanguageContext = createContext<LanguageContextType>({ isHebrew: true, isAnimating: false });

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [isHebrew, setIsHebrew] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setIsHebrew(prev => !prev);
        setIsAnimating(false);
      }, 500);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <LanguageContext.Provider value={{ isHebrew, isAnimating }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);