import React, { useState } from "react";
import Sidebar from "./Sidebar/Sidebar";
import Header from "./Header/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark">
     
      <div className="flex h-screen overflow-hidden">
       
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
       
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          
          <main>
            <div className="mx-auto bg max-w-screen-2x bg-blue-gray-100 p-4 md:p-6 2xl:p-10" style={{backgroundColor: 'rgb(241,245,249)'}}>
            <Outlet/>
            </div>
          </main>
          
        </div>
        
      </div>
      
    </div>
  );
};

export default Layout;
