import axios from 'axios';
import { mockHistoryData, getMockMentorResponse } from './mockData';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000/api';

// Create axios instance with default config
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor for adding auth tokens if needed
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      console.error('API Error:', error.response.status, error.response.data);
    } else if (error.request) {
      console.error('Network Error:', error.message);
    }
    return Promise.reject(error);
  }
);

// API Service Functions
export const apiService = {
  // Get user history data
  getHistory: async (offlineMode = false) => {
    if (offlineMode) {
      return new Promise((resolve) => {
        setTimeout(() => resolve({ data: mockHistoryData }), 500);
      });
    }
    
    try {
      const response = await api.get('/history');
      return response;
    } catch (error) {
      console.warn('Failed to fetch from API, using mock data:', error);
      return { data: mockHistoryData };
    }
  },

  // Post message to mentor bot
  postMentorMessage: async (message, language = 'en', offlineMode = false) => {
    if (offlineMode) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const response = getMockMentorResponse(message, language);
          resolve({ 
            data: { 
              response,
              timestamp: new Date().toISOString()
            } 
          });
        }, 800);
      });
    }
    
    try {
      const response = await api.post('/mentor', { 
        message, 
        language,
        timestamp: new Date().toISOString()
      });
      return response;
    } catch (error) {
      console.warn('Failed to post to API, using mock response:', error);
      const mockResponse = getMockMentorResponse(message, language);
      return { 
        data: { 
          response: mockResponse,
          timestamp: new Date().toISOString()
        } 
      };
    }
  },

  // Get analytics data
  getAnalytics: async (timeRange = '7d', offlineMode = false) => {
    if (offlineMode) {
      return new Promise((resolve) => {
        setTimeout(() => resolve({ data: mockHistoryData }), 500);
      });
    }
    
    try {
      const response = await api.get('/analytics', { params: { timeRange } });
      return response;
    } catch (error) {
      console.warn('Failed to fetch analytics, using mock data:', error);
      return { data: mockHistoryData };
    }
  },

  // Health check
  healthCheck: async () => {
    try {
      const response = await api.get('/health');
      return response.data.status === 'ok';
    } catch (error) {
      return false;
    }
  }
};

export default apiService;