import React, { useState } from "react";
import Header from "./NewLayout/NewHeader";
import Sidebar from "./Sidebar";

import { children } from "react";

const DefaultLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark">
      <div className="flex h-screen overflow-hidden">
        <Sidebar  />

        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <Header  />

          <main>
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default DefaultLayout;
