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
        <main className="sm:px-6 lg:px-8">
          <div className="px-4 sm:px-0">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
