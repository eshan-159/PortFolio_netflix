import React from 'react';
import Navbar from './components/NavBar';
import Chatbot from './components/Chatbot';
import MobileTabBar from './components/MobileTabBar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="content">{children}</div>
      <Chatbot />
      <MobileTabBar />
    </div>
  );
};

export default Layout;
