import { useState } from 'react';

import Sidebar from '@components/Layout/App/Dashboard/Sidebar';
import SidebarMobile from '@components/Layout/App/Dashboard/Sidebar/Mobile';
import Navbar from '@components/Layout/App/Dashboard/Navbar';

const Dashboard = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const showSidebar = () => setSidebarOpen(!sidebarOpen);
  return (
    <div className="min-h-full">
      <SidebarMobile sidebar={showSidebar} sidebarValue={sidebarOpen} />

      <Sidebar />

      <div className="lg:pl-64 flex flex-col flex-1">
        <Navbar sidebar={showSidebar} />
        <div className="py-10">
          <header>
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl tracking-tight font-bold leading-tight text-gray-900">Dashboard</h1>
            </div>
          </header>
          <main>
            <div className="mx-auto sm:px-6 lg:px-8">
              <div className="px-4 py-8 sm:px-0">{children}</div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
