import React, { createContext, useContext, useState } from 'react';
import { useOfflineMode } from '../hooks/useOfflineMode';
import { useLanguage } from '../hooks/useLanguage';

const AppContext = createContext();

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within AppProvider');
  }
  return context;
};

export const AppProvider = ({ children }) => {
  const { isOffline, toggleOfflineMode, isNetworkOnline } = useOfflineMode();
  const { language, changeLanguage, t } = useLanguage();
  const [historyData, setHistoryData] = useState(null);
  const [loading, setLoading] = useState(false);

  const value = {
    // Offline mode
    isOffline,
    toggleOfflineMode,
    isNetworkOnline,
    
    // Language
    language,
    changeLanguage,
    t,
    
    // Data
    historyData,
    setHistoryData,
    loading,
    setLoading
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};