import React from 'react';
import Navbar from './components/NavBar';
import Chatbot from './components/Chatbot';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="content">{children}</div>
      <Chatbot />
    </div>
  );
};

export default Layout;
