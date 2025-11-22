// Chart configuration and color themes

export const chartColors = {
  bias: {
    Left: '#ef4444',
    'Center-Left': '#f97316',
    Center: '#eab308',
    'Center-Right': '#22c55e',
    Right: '#3b82f6'
  },
  sentiment: {
    positive: '#10b981',
    neutral: '#6b7280',
    negative: '#ef4444'
  },
  echoChamber: '#8b5cf6'
};

export const chartTheme = {
  grid: {
    stroke: '#e5e7eb',
    strokeDasharray: '3 3'
  },
  axis: {
    stroke: '#9ca3af',
    fontSize: 12
  },
  tooltip: {
    backgroundColor: '#1f2937',
    border: 'none',
    borderRadius: 8,
    color: '#ffffff'
  }
};

export const responsiveConfig = {
  small: { width: '100%', height: 250 },
  medium: { width: '100%', height: 300 },
  large: { width: '100%', height: 350 }
};

export const formatChartData = {
  percentage: (value) => `${value}%`,
  score: (value) => value.toFixed(2),
  count: (value) => value.toString(),
  date: (value) => new Date(value).toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric' 
  })
};

export const getEchoChamberLevel = (score) => {
  if (score < 0.3) return { level: 'Low', color: '#10b981', text: 'Good diversity' };
  if (score < 0.6) return { level: 'Moderate', color: '#f59e0b', text: 'Some echo effect' };
  return { level: 'High', color: '#ef4444', text: 'Limited diversity' };
};

export const getBiasColor = (bias) => {
  return chartColors.bias[bias] || '#6b7280';
};

export const getSentimentColor = (sentiment) => {
  if (sentiment > 0.2) return chartColors.sentiment.positive;
  if (sentiment < -0.2) return chartColors.sentiment.negative;
  return chartColors.sentiment.neutral;
};