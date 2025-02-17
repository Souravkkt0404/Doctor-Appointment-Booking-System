import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Layout = ({ children }) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div className="flex flex-row justify-start">
      <Sidebar isCollapsed={isSidebarCollapsed} />
      <div className="bg-white dark:bg-gray-900 flex-1 p-4 text-text dark:text-white">
        <Header
          isSidebarCollapsed={isSidebarCollapsed}
          onToggleSidebar={toggleSidebar}
        />
        {children}
      </div>
    </div>
  );
};

export default Layout;
