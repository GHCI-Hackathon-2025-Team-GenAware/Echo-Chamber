// Mock data for development without backend dependency

export const mockHistoryData = {
  summary: {
    totalArticles: 156,
    avgBiasScore: 0.34,
    avgSentiment: 0.12,
    echoChamberScore: 0.68,
    lastUpdated: new Date().toISOString()
  },
  biasDistribution: [
    { category: 'Left', count: 42, percentage: 27 },
    { category: 'Center-Left', count: 38, percentage: 24 },
    { category: 'Center', count: 28, percentage: 18 },
    { category: 'Center-Right', count: 32, percentage: 21 },
    { category: 'Right', count: 16, percentage: 10 }
  ],
  sentimentTrend: [
    { date: '2024-01-15', positive: 45, neutral: 30, negative: 25 },
    { date: '2024-01-16', positive: 52, neutral: 28, negative: 20 },
    { date: '2024-01-17', positive: 48, neutral: 32, negative: 20 },
    { date: '2024-01-18', positive: 55, neutral: 25, negative: 20 },
    { date: '2024-01-19', positive: 60, neutral: 22, negative: 18 },
    { date: '2024-01-20', positive: 58, neutral: 24, negative: 18 },
    { date: '2024-01-21', positive: 62, neutral: 23, negative: 15 }
  ],
  echoChamberTrend: [
    { date: '2024-01-15', score: 0.72 },
    { date: '2024-01-16', score: 0.70 },
    { date: '2024-01-17', score: 0.68 },
    { date: '2024-01-18', score: 0.69 },
    { date: '2024-01-19', score: 0.67 },
    { date: '2024-01-20', score: 0.68 },
    { date: '2024-01-21', score: 0.68 }
  ],
  recentArticles: [
    {
      id: 1,
      title: 'Climate Change Policy Debate Heats Up',
      source: 'News Source A',
      bias: 'Center-Left',
      sentiment: 0.15,
      timestamp: '2024-01-21T10:30:00Z'
    },
    {
      id: 2,
      title: 'Economic Reforms Announced',
      source: 'News Source B',
      bias: 'Center',
      sentiment: 0.42,
      timestamp: '2024-01-21T09:15:00Z'
    },
    {
      id: 3,
      title: 'Education System Overhaul Proposed',
      source: 'News Source C',
      bias: 'Center-Right',
      sentiment: -0.08,
      timestamp: '2024-01-21T08:45:00Z'
    }
  ]
};

export const mockMentorResponses = {
  en: {
    greeting: "Hello! I'm your Media Literacy Mentor. I can help you understand bias, sentiment analysis, and echo chambers in news media. What would you like to learn about?",
    bias: "Bias in news refers to the tendency of media outlets to present information from a particular perspective. There are different types: Left-leaning sources may emphasize social welfare and environmental issues, while right-leaning sources may focus on economic freedom and traditional values. Understanding bias helps you get a balanced view.",
    sentiment: "Sentiment analysis measures the emotional tone of news articles - whether they're positive, negative, or neutral. This helps identify how news is framed and can reveal emotional manipulation techniques.",
    echoChamber: "An echo chamber occurs when you only consume news that confirms your existing beliefs. Your current echo chamber score is 0.68, which suggests moderate diversity. Try exploring sources with different perspectives to broaden your understanding."
  },
  hi: {
    greeting: "नमस्ते! मैं आपका मीडिया साक्षरता सलाहकार हूं। मैं आपको समाचार मीडिया में पूर्वाग्रह, भावना विश्लेषण और इको चैंबर को समझने में मदद कर सकता हूं। आप क्या जानना चाहेंगे?",
    bias: "समाचार में पूर्वाग्रह का मतलब है मीडिया आउटलेट्स की एक विशेष दृष्टिकोण से जानकारी प्रस्तुत करने की प्रवृत्ति। विभिन्न प्रकार हैं: वाम-झुकाव वाले स्रोत सामाजिक कल्याण पर जोर दे सकते हैं, जबकि दक्षिणपंथी स्रोत आर्थिक स्वतंत्रता पर ध्यान केंद्रित कर सकते हैं।",
    sentiment: "भावना विश्लेषण समाचार लेखों के भावनात्मक स्वर को मापता है - चाहे वे सकारात्मक, नकारात्मक या तटस्थ हों। यह भावनात्मक हेरफेर तकनीकों को प्रकट कर सकता है।",
    echoChamber: "इको चैंबर तब होता है जब आप केवल उन समाचारों का उपभोग करते हैं जो आपके मौजूदा विश्वासों की पुष्टि करते हैं। आपका वर्तमान इको चैंबर स्कोर 0.68 है, जो मध्यम विविधता का सुझाव देता है।"
  },
  ta: {
    greeting: "வணக்கம்! நான் உங்கள் ஊடக எழுத்தறிவு ஆலோசகர். செய்தி ஊடகங்களில் சார்பு, உணர்வு பகுப்பாய்வு மற்றும் எதிரொலி அறைகளைப் புரிந்துகொள்ள நான் உங்களுக்கு உதவ முடியும். நீங்கள் என்ன அறிய விரும்புகிறீர்கள்?",
    bias: "செய்திகளில் சார்பு என்பது ஊடக நிறுவனங்கள் ஒரு குறிப்பிட்ட கண்ணோட்டத்தில் தகவல்களை வழங்கும் போக்கைக் குறிக்கிறது. இடதுசாரி ஆதாரங்கள் சமூக நலன்களை வலியுறுத்தலாம், வலதுசாரி ஆதாரங்கள் பொருளாதார சுதந்திரத்தில் கவனம் செலுத்தலாம்.",
    sentiment: "உணர்வு பகுப்பாய்வு செய்தி கட்டுரைகளின் உணர்ச்சி தொனியை அளவிடுகிறது - அவை நேர்மறையானவை, எதிர்மறையானவை அல்லது நடுநிலையானவை. இது உணர்ச்சி கையாளுதல் நுட்பங்களை வெளிப்படுத்த உதவுகிறது।",
    echoChamber: "உங்கள் தற்போதைய நம்பிக்கைகளை உறுதிப்படுத்தும் செய்திகளை மட்டும் நீங்கள் பயன்படுத்தும்போது எதிரொலி அறை ஏற்படுகிறது. உங்கள் தற்போதைய மதிப்பெண் 0.68 ஆகும்."
  },
  bn: {
    greeting: "নমস্কার! আমি আপনার মিডিয়া সাক্ষরতা পরামর্শদাতা। আমি আপনাকে সংবাদ মাধ্যমে পক্ষপাত, সেন্টিমেন্ট বিশ্লেষণ এবং ইকো চেম্বার বুঝতে সাহায্য করতে পারি। আপনি কী জানতে চান?",
    bias: "সংবাদে পক্ষপাত বলতে বোঝায় মিডিয়া আউটলেটগুলির একটি নির্দিষ্ট দৃষ্টিকোণ থেকে তথ্য উপস্থাপন করার প্রবণতা। বাম-ঝোঁক উৎসগুলি সামাজিক কল্যাণ জোর দিতে পারে, যখন ডান-ঝোঁক উৎসগুলি অর্থনৈতিক স্বাধীনতায় ফোকাস করতে পারে।",
    sentiment: "সেন্টিমেন্ট বিশ্লেষণ সংবাদ নিবন্ধগুলির আবেগপূর্ণ টোন পরিমাপ করে - তারা ইতিবাচক, নেতিবাচক বা নিরপেক্ষ কিনা। এটি আবেগজনক ম্যানিপুলেশন কৌশলগুলি প্রকাশ করতে সহায়তা করে।",
    echoChamber: "যখন আপনি কেবলমাত্র এমন সংবাদ ব্যবহার করেন যা আপনার বিদ্যমান বিশ্বাসগুলি নিশ্চিত করে তখন একটি ইকো চেম্বার ঘটে। আপনার বর্তমান স্কোর 0.68।"
  }
};

export const getMockMentorResponse = (message, language = 'en') => {
  const lowerMessage = message.toLowerCase();
  const responses = mockMentorResponses[language] || mockMentorResponses.en;
  
  if (lowerMessage.includes('bias') || lowerMessage.includes('पूर्वाग्रह') || lowerMessage.includes('சார்பு') || lowerMessage.includes('পক্ষপাত')) {
    return responses.bias;
  } else if (lowerMessage.includes('sentiment') || lowerMessage.includes('भावना') || lowerMessage.includes('உணர்வு') || lowerMessage.includes('সেন্টিমেন্ট')) {
    return responses.sentiment;
  } else if (lowerMessage.includes('echo') || lowerMessage.includes('इको') || lowerMessage.includes('எதிரொலி') || lowerMessage.includes('ইকো')) {
    return responses.echoChamber;
  } else if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('नमस्ते') || lowerMessage.includes('வணக்கம்') || lowerMessage.includes('নমস্কার')) {
    return responses.greeting;
  }
  
  return responses.greeting;
};