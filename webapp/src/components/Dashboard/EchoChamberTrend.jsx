import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { chartColors, formatChartData, getEchoChamberLevel } from '../../utils/chartConfig';
import { useAppContext } from '../../context/AppContext';

const EchoChamberTrend = ({ data }) => {
  const { t } = useAppContext();
  
  const latestScore = data[data.length - 1]?.score || 0;
  const echoChamberInfo = getEchoChamberLevel(latestScore);

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const score = payload[0].value;
      const level = getEchoChamberLevel(score);
      
      return (
        <div className="bg-gray-900 text-white p-3 rounded-lg shadow-lg">
          <p className="font-semibold mb-1">{formatChartData.date(label)}</p>
          <p className="text-sm">Score: {formatChartData.score(score)}</p>
          <p className="text-sm" style={{ color: level.color }}>
            Level: {level.level}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 animate-fade-in">
      <div className="flex justify-between items-start mb-4">
        <h2 className="text-xl font-bold text-gray-900">{t('echoChamberTrend')}</h2>
        <div className="text-right">
          <div 
            className="inline-block px-3 py-1 rounded-full text-sm font-semibold"
            style={{ 
              backgroundColor: `${echoChamberInfo.color}20`,
              color: echoChamberInfo.color 
            }}
          >
            {echoChamberInfo.level}
          </div>
          <p className="text-xs text-gray-600 mt-1">{echoChamberInfo.text}</p>
        </div>
      </div>
      
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={chartColors.echoChamber} stopOpacity={0.8}/>
              <stop offset="95%" stopColor={chartColors.echoChamber} stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis 
            dataKey="date" 
            tickFormatter={formatChartData.date}
            tick={{ fontSize: 12 }}
          />
          <YAxis 
            domain={[0, 1]}
            tick={{ fontSize: 12 }}
            tickFormatter={formatChartData.score}
          />
          <Tooltip content={<CustomTooltip />} />
          <Area 
            type="monotone" 
            dataKey="score" 
            stroke={chartColors.echoChamber}
            fillOpacity={1}
            fill="url(#colorScore)"
            strokeWidth={2}
          />
        </AreaChart>
      </ResponsiveContainer>
      
      <div className="mt-4 flex justify-center space-x-6 text-sm">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-green-500" />
          <span className="text-gray-600">Low (0.0-0.3)</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-orange-500" />
          <span className="text-gray-600">Moderate (0.3-0.6)</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <span className="text-gray-600">High (0.6-1.0)</span>
        </div>
      </div>
    </div>
  );
};

export default EchoChamberTrend;