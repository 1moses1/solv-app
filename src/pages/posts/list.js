// Importing necessary dependencies and components
import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/Sidebar'; // Sidebar navigation component
import PostList from '../../components/PostList'; // Component to display the list of posts
import axios from 'axios'; // Axios for making HTTP requests
import { Gear } from '@phosphor-icons/react'; // Importing Phosphor Gear Icon for UI consistency

const PostListPage = () => {
  // State to store fetched posts
  const [posts, setPosts] = useState([]);
  // State to store error messages in case fetching fails
  const [error, setError] = useState(null);

  // Fetch posts from the API when the component mounts
  useEffect(() => {
    fetchPosts(); // Call the function to fetch posts
  }, []); // Empty dependency array ensures this runs only once

  // Function to fetch posts from the API
  const fetchPosts = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts'); // GET request to fetch posts
      setPosts(response.data); // Update the `posts` state with the fetched data
    } catch (err) {
      setError('Failed to fetch posts'); // Set an error message if the request fails
    }
  };

  // Function to handle the edit action
  const handleEdit = (id) => {
    window.location.href = `/posts/edit?id=${id}`; // Redirect to the edit page with the post ID as a query parameter
  };

  // Function to handle the delete action
  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`); // DELETE request to remove a post
      setPosts(posts.filter((post) => post.id !== id)); // Remove the deleted post from the `posts` state
      alert('Post deleted successfully'); // Display a success alert
    } catch (err) {
      alert('Failed to delete post'); // Display an error alert if the request fails
    }
  };

  return (
    <div className="flex">
      {/* Sidebar Component */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="main-content p-6">
        {/* Page Title with Gear Icon */}
        <h1 className="text-2xl font-bold text-black mb-4 ml-10 flex items-center gap-2">
          <Gear size={30} /> {/* Using Phosphor Gear Icon */}
          Posts
        </h1>

        {/* PostList Component */}
        <PostList
          posts={posts} // Pass the posts data to the PostList component
          handleEdit={handleEdit} // Pass the edit handler to the PostList component
          handleDelete={handleDelete} // Pass the delete handler to the PostList component
        />
      </div>
    </div>
  );
};

export default PostListPage;
