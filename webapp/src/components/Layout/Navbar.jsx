import React from 'react';
import { Wifi, WifiOff, Globe } from 'lucide-react';
import { useAppContext } from '../../context/AppContext';
import { SUPPORTED_LANGUAGES } from '../../utils/languageUtils';

const Navbar = () => {
  const { isOffline, toggleOfflineMode, isNetworkOnline, language, changeLanguage, t } = useAppContext();

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="bg-primary-600 p-2 rounded-lg">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-xl font-bold text-gray-900">
              Media Literacy Dashboard
            </h1>
          </div>

          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <select
              value={language}
              onChange={(e) => changeLanguage(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
              aria-label={t('selectLanguage')}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.nativeName}
                </option>
              ))}
            </select>

            {/* Network Status */}
            {!isNetworkOnline && (
              <div className="flex items-center space-x-2 text-orange-600 text-sm">
                <WifiOff className="w-4 h-4" />
                <span>No Internet</span>
              </div>
            )}

            {/* Offline Mode Toggle */}
            <button
              onClick={toggleOfflineMode}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition ${
                isOffline
                  ? 'bg-orange-100 text-orange-700 hover:bg-orange-200'
                  : 'bg-green-100 text-green-700 hover:bg-green-200'
              }`}
              title={isOffline ? t('offlineMode') : t('onlineMode')}
            >
              {isOffline ? (
                <>
                  <WifiOff className="w-4 h-4" />
                  <span className="text-sm font-medium">{t('offlineMode')}</span>
                </>
              ) : (
                <>
                  <Wifi className="w-4 h-4" />
                  <span className="text-sm font-medium">{t('onlineMode')}</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;