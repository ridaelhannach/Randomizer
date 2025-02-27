import React from 'react';
import { Link } from 'react-router-dom';
import { Home, History, Settings } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-white shadow-md">
        <nav className="mt-5">
          <Link to="/" className="block px-4 py-2 text-gray-600 hover:bg-gray-200">
            <Home className="inline-block mr-2" size={20} />
            Home
          </Link>
          <Link to="/history" className="block px-4 py-2 text-gray-600 hover:bg-gray-200">
            <History className="inline-block mr-2" size={20} />
            History
          </Link>
          <Link to="/settings" className="block px-4 py-2 text-gray-600 hover:bg-gray-200">
            <Settings className="inline-block mr-2" size={20} />
            Settings
          </Link>
        </nav>
      </aside>
      <main className="flex-1 p-8 overflow-auto">
        {children}
      </main>
    </div>
  );
};

export default Layout;