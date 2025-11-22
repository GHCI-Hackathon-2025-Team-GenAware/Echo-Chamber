// Language utilities for Indic language support

export const SUPPORTED_LANGUAGES = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी' },
  { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்' },
  { code: 'bn', name: 'Bengali', nativeName: 'বাংলা' },
  { code: 'te', name: 'Telugu', nativeName: 'తెలుగు' },
  { code: 'mr', name: 'Marathi', nativeName: 'मराठी' },
  { code: 'gu', name: 'Gujarati', nativeName: 'ગુજરાતી' },
  { code: 'kn', name: 'Kannada', nativeName: 'ಕನ್ನಡ' }
];

export const translations = {
  en: {
    dashboard: 'Dashboard',
    mentorBot: 'Mentor Bot',
    totalArticles: 'Total Articles',
    avgBias: 'Average Bias',
    avgSentiment: 'Average Sentiment',
    echoChamber: 'Echo Chamber Score',
    biasDistribution: 'Bias Distribution',
    sentimentTrend: 'Sentiment Trend',
    echoChamberTrend: 'Echo Chamber Trend',
    recentArticles: 'Recent Articles',
    offlineMode: 'Offline Mode',
    onlineMode: 'Online Mode',
    sendMessage: 'Send message...',
    send: 'Send',
    typeMessage: 'Type your message here...',
    selectLanguage: 'Select Language',
    loading: 'Loading...',
    error: 'Error loading data'
  },
  hi: {
    dashboard: 'डैशबोर्ड',
    mentorBot: 'मेंटर बॉट',
    totalArticles: 'कुल लेख',
    avgBias: 'औसत पूर्वाग्रह',
    avgSentiment: 'औसत भावना',
    echoChamber: 'इको चैंबर स्कोर',
    biasDistribution: 'पूर्वाग्रह वितरण',
    sentimentTrend: 'भावना प्रवृत्ति',
    echoChamberTrend: 'इको चैंबर प्रवृत्ति',
    recentArticles: 'हाल के लेख',
    offlineMode: 'ऑफलाइन मोड',
    onlineMode: 'ऑनलाइन मोड',
    sendMessage: 'संदेश भेजें...',
    send: 'भेजें',
    typeMessage: 'यहाँ अपना संदेश लिखें...',
    selectLanguage: 'भाषा चुनें',
    loading: 'लोड हो रहा है...',
    error: 'डेटा लोड करने में त्रुटि'
  },
  ta: {
    dashboard: 'டாஷ்போர்டு',
    mentorBot: 'மெண்டர் பாட்',
    totalArticles: 'மொத்த கட்டுரைகள்',
    avgBias: 'சராசரி சார்பு',
    avgSentiment: 'சராசரி உணர்வு',
    echoChamber: 'எதிரொலி அறை மதிப்பெண்',
    biasDistribution: 'சார்பு விநியோகம்',
    sentimentTrend: 'உணர்வு போக்கு',
    echoChamberTrend: 'எதிரொலி அறை போக்கு',
    recentArticles: 'சமீபத்திய கட்டுரைகள்',
    offlineMode: 'ஆஃப்லைன் பயன்முறை',
    onlineMode: 'ஆன்லைன் பயன்முறை',
    sendMessage: 'செய்தி அனுப்பு...',
    send: 'அனுப்பு',
    typeMessage: 'உங்கள் செய்தியை இங்கே தட்டச்சு செய்யவும்...',
    selectLanguage: 'மொழியைத் தேர்ந்தெடுக்கவும்',
    loading: 'ஏற்றுகிறது...',
    error: 'தரவை ஏற்றுவதில் பிழை'
  },
  bn: {
    dashboard: 'ড্যাশবোর্ড',
    mentorBot: 'মেন্টর বট',
    totalArticles: 'মোট নিবন্ধ',
    avgBias: 'গড় পক্ষপাত',
    avgSentiment: 'গড় অনুভূতি',
    echoChamber: 'ইকো চেম্বার স্কোর',
    biasDistribution: 'পক্ষপাত বিতরণ',
    sentimentTrend: 'অনুভূতি প্রবণতা',
    echoChamberTrend: 'ইকো চেম্বার প্রবণতা',
    recentArticles: 'সাম্প্রতিক নিবন্ধ',
    offlineMode: 'অফলাইন মোড',
    onlineMode: 'অনলাইন মোড',
    sendMessage: 'বার্তা পাঠান...',
    send: 'পাঠান',
    typeMessage: 'এখানে আপনার বার্তা টাইপ করুন...',
    selectLanguage: 'ভাষা নির্বাচন করুন',
    loading: 'লোড হচ্ছে...',
    error: 'ডেটা লোড করতে ত্রুটি'
  }
};

export const getTranslation = (key, language = 'en') => {
  return translations[language]?.[key] || translations.en[key] || key;
};

export const detectLanguage = (text) => {
  // Simple language detection based on Unicode ranges
  const devanagariRange = /[\u0900-\u097F]/;
  const tamilRange = /[\u0B80-\u0BFF]/;
  const bengaliRange = /[\u0980-\u09FF]/;
  const teluguRange = /[\u0C00-\u0C7F]/;
  const gujaratiRange = /[\u0A80-\u0AFF]/;
  const kannadaRange = /[\u0C80-\u0CFF]/;
  
  if (devanagariRange.test(text)) return 'hi';
  if (tamilRange.test(text)) return 'ta';
  if (bengaliRange.test(text)) return 'bn';
  if (teluguRange.test(text)) return 'te';
  if (gujaratiRange.test(text)) return 'gu';
  if (kannadaRange.test(text)) return 'kn';
  
  return 'en';
};

export const formatDate = (dateString, language = 'en') => {
  const date = new Date(dateString);
  const localeMap = {
    en: 'en-US',
    hi: 'hi-IN',
    ta: 'ta-IN',
    bn: 'bn-IN',
    te: 'te-IN',
    mr: 'mr-IN',
    gu: 'gu-IN',
    kn: 'kn-IN'
  };
  
  return date.toLocaleDateString(localeMap[language] || 'en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};