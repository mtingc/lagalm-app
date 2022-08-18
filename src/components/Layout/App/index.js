import { useState } from 'react';
import Sidebar from '@components/Sidebar';
import SidebarMobile from '@components/Sidebar/Mobile';
import Navbar from '@components/Navbar';

const LayoutApp = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const showSidebar = () => setSidebarOpen(!sidebarOpen);
  return (
    <div className="min-h-full">
      <SidebarMobile sidebar={showSidebar} sidebarValue={sidebarOpen} />

      {/* Static sidebar for desktop */}
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
              {/* Replace with your content */}
              <div className="px-4 py-8 sm:px-0">
                <div className="border-4 border-dashed border-gray-200 rounded-lg h-96" />
              </div>
              {/* /End replace */}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default LayoutApp;
