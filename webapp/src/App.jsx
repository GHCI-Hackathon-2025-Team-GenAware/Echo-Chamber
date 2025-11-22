import React, { useState } from 'react';
import { AppProvider } from './context/AppContext';
import ErrorBoundary from './components/Common/ErrorBoundary';
import Navbar from './components/Layout/Navbar';
import Sidebar from './components/Layout/Sidebar';
import Dashboard from './components/Dashboard/Dashboard';
import MentorBot from './components/MentorBot/MentorBot';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <ErrorBoundary>
      <AppProvider>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          
          <div className="flex">
            <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
            
            <main className="flex-1 overflow-x-hidden">
              {activeTab === 'dashboard' ? <Dashboard /> : <MentorBot />}
            </main>
          </div>
        </div>
      </AppProvider>
    </ErrorBoundary>
  );
}

export default App;