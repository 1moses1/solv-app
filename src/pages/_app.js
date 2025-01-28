// Importing global styles and necessary dependencies
import '../styles/globals.css'; // Global CSS file for styling
import { useState } from 'react'; // React hook for managing state
import Header from '../components/Header'; // Header component
import Sidebar from '../components/Sidebar'; // Sidebar component
import '@fortawesome/fontawesome-free/css/all.css'; // Font Awesome icons for additional styling

// Main App Component
function MyApp({ Component, pageProps }) {
  // State to manage the sidebar's open/closed state
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  // Function to toggle the sidebar state
  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev); // Toggles the value of `isSidebarOpen`
  };

  return (
    <div className="flex overflow-auto"> {/* Flex container for the sidebar and main content */}
      {/* Sidebar Component */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content Area */}
      <div className={`main-content ${isSidebarOpen ? 'expanded' : 'collapsed'}`}> {/* Dynamically adjust content area based on sidebar state */}
        
        {/* Header Component */}
        <Header isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

        {/* Main Page Content */}
        <main className="p-6">
          {/* Render the specific page component with its props */}
          <Component
            {...pageProps} // Spread the default Next.js page props
            isSidebarOpen={isSidebarOpen} // Pass the sidebar state to the page
            toggleSidebar={toggleSidebar} // Pass the toggleSidebar function to the page
          />
        </main>
      </div>
    </div>
  );
}

// Exporting the App Component
export default MyApp;
