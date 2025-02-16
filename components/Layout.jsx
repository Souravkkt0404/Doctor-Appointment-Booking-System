import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Layout = ({ children }) => {

  return (
    <div className="flex flex-row justify-start">
      <Sidebar />
      <div className="bg-white dark:bg-gray-900 flex-1 p-4 text-text dark:text-white">
        <Header />
        {children}
      </div>
    </div>
  );
};

export default Layout;
