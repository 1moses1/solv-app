// Importing necessary dependencies and components
import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/Sidebar'; // Sidebar navigation component
import PostForm from '../../components/PostForm'; // Form component for editing a post
import { useRouter } from 'next/router'; // Router for accessing query parameters
import axios from 'axios'; // Axios for making HTTP requests
import { Gear } from '@phosphor-icons/react'; // Importing Phosphor Gear Icon for consistent UI

const EditPostPage = ({ isSidebarOpen, toggleSidebar }) => {
  const router = useRouter(); // Access the Next.js router
  const { id } = router.query; // Extract the `id` query parameter from the URL
  const [post, setPost] = useState(null); // State to store the post data
  const [loading, setLoading] = useState(true); // State to track loading status

  // Fetch the post data whenever the `id` changes
  useEffect(() => {
    if (id) {
      fetchPost(); // Call the API to fetch post data
    }
  }, [id]);

  // Function to fetch post data from the API
  const fetchPost = async () => {
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`); // Fetch post by ID
      setPost(response.data); // Update the post state with fetched data
      setLoading(false); // Set loading to false after fetching
    } catch (err) {
      console.error('Failed to fetch post'); // Log error if fetching fails
      setLoading(false); // Ensure loading is set to false
    }
  };

  return (
    <div className={`flex ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
      {/* Sidebar Component */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content Area */}
      <div className="main-content">
        {/* Page Title with Gear Icon */}
        <h1 className="text-2xl font-bold text-black mb-4 ml-10 flex items-center gap-2">
          <Gear size={30} /> {/* Using Phosphor Gear Icon */}
          Posts
        </h1>

        {/* Conditional Rendering for Loading and Form */}
        {loading ? (
          // Display a loading message while fetching data
          <p className="text-gray-500">Loading...</p>
        ) : (
          // Render the PostForm component once the data is loaded
          post && (
            <PostForm
              id={post.id} // Pass the post ID to the form
              existingTitle={post.title} // Pass the current title to the form
              existingBody={post.body} // Pass the current body to the form
              isEdit // Indicate that this is an edit operation
              isSidebarOpen={isSidebarOpen} // Pass the sidebar state
            />
          )
        )}
      </div>
    </div>
  );
};

export default EditPostPage;
