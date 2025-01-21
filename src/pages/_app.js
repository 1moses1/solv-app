import '../styles/globals.css';
import { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import '@fortawesome/fontawesome-free/css/all.css';

function MyApp({ Component, pageProps }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <div className="flex overflow-auto">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className={`main-content ${isSidebarOpen ? 'expanded' : 'collapsed'}`}>
        <Header isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <main className="p-6">
          {/* Pass sidebar props to all pages */}
          <Component
            {...pageProps}
            isSidebarOpen={isSidebarOpen}
            toggleSidebar={toggleSidebar}
          />
        </main>
      </div>
    </div>
  );
}

export default MyApp;
