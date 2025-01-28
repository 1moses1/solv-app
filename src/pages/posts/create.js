// Importing necessary components and dependencies
import Sidebar from '../../components/Sidebar'; // Sidebar navigation component
import PostForm from '../../components/PostForm'; // Form component for creating a post
import { Gear } from '@phosphor-icons/react'; // Importing Phosphor Gear Icon for UI consistency

const CreatePostPage = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <div className="flex">
      {/* Sidebar Component: Displays the sidebar menu */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content Area */}
      <div className="main-content">
        {/* Page Title with Icon */}
        <h1 className="text-2xl font-bold text-black mb-4 ml-10 flex items-center gap-2">
          <Gear size={30} /> {/* Using Phosphor Gear Icon for visual consistency */}
          Posts
        </h1>

        {/* Render the PostForm Component */}
        <PostForm isSidebarOpen={isSidebarOpen} />
      </div>
    </div>
  );
};

export default CreatePostPage;
