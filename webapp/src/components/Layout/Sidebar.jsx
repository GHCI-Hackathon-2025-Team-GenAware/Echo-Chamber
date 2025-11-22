import React from 'react';
import { BarChart3, MessageCircle } from 'lucide-react';
import { useAppContext } from '../../context/AppContext';

const Sidebar = ({ activeTab, setActiveTab }) => {
  const { t } = useAppContext();

  const menuItems = [
    { id: 'dashboard', icon: BarChart3, label: t('dashboard') },
    { id: 'mentor', icon: MessageCircle, label: t('mentorBot') }
  ];

  return (
    <aside className="w-64 bg-white shadow-md min-h-screen">
      <nav className="p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition ${
                isActive
                  ? 'bg-primary-600 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;