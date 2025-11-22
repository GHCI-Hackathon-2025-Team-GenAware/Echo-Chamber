import { useState, useEffect } from 'react';

export const useOfflineMode = () => {
  const [isOffline, setIsOffline] = useState(() => {
    const saved = localStorage.getItem('offlineMode');
    return saved ? JSON.parse(saved) : false;
  });
  
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const toggleOfflineMode = () => {
    const newMode = !isOffline;
    setIsOffline(newMode);
    localStorage.setItem('offlineMode', JSON.stringify(newMode));
  };

  // Force offline mode if network is unavailable
  const effectiveOfflineMode = isOffline || !isOnline;

  return {
    isOffline: effectiveOfflineMode,
    toggleOfflineMode,
    isNetworkOnline: isOnline
  };
};