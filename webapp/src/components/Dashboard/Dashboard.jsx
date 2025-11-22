import React, { useEffect, useState } from 'react';
import { FileText, TrendingUp, Heart, Radio } from 'lucide-react';
import { useAppContext } from '../../context/AppContext';
import apiService from '../../services/api';
import StatCard from './StatCard';
import BiasDistribution from './BiasDistribution';
import SentimentTrend from './SentimentTrend';
import EchoChamberTrend from './EchoChamberTrend';
import Loading from '../Common/Loading';

const Dashboard = () => {
  const { isOffline, t, historyData, setHistoryData, loading, setLoading } = useAppContext();
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const response = await apiService.getHistory(isOffline);
        setHistoryData(response.data);
      } catch (err) {
        console.error('Error fetching history:', err);
        setError(t('error'));
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [isOffline, setHistoryData, setLoading, t]);

  if (loading) {
    return <Loading message={t('loading')} />;
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  if (!historyData) {
    return null;
  }

  const { summary, biasDistribution, sentimentTrend, echoChamberTrend } = historyData;

  return (
    <div className="p-6 space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title={t('totalArticles')}
          value={summary.totalArticles}
          icon={FileText}
          color="blue"
        />
        <StatCard
          title={t('avgBias')}
          value={summary.avgBiasScore.toFixed(2)}
          icon={TrendingUp}
          color="purple"
          subtitle="Lower is more balanced"
        />
        <StatCard
          title={t('avgSentiment')}
          value={summary.avgSentiment.toFixed(2)}
          icon={Heart}
          color="green"
          subtitle="Range: -1 to 1"
        />
        <StatCard
          title={t('echoChamber')}
          value={summary.echoChamberScore.toFixed(2)}
          icon={Radio}
          color="orange"
          subtitle="Lower is better"
        />
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <BiasDistribution data={biasDistribution} />
        <SentimentTrend data={sentimentTrend} />
      </div>

      {/* Full Width Chart */}
      <EchoChamberTrend data={echoChamberTrend} />

      {/* Recent Articles */}
      {historyData.recentArticles && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">{t('recentArticles')}</h2>
          <div className="space-y-4">
            {historyData.recentArticles.map((article) => (
              <div key={article.id} className="border-l-4 border-primary-500 pl-4 py-2">
                <h3 className="font-semibold text-gray-900">{article.title}</h3>
                <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                  <span>{article.source}</span>
                  <span className="px-2 py-1 bg-gray-100 rounded">
                    {article.bias}
                  </span>
                  <span>
                    Sentiment: {article.sentiment > 0 ? '+' : ''}{article.sentiment.toFixed(2)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;