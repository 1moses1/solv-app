import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/Sidebar'; // Import Sidebar component
import PostForm from '../../components/PostForm';
import { useRouter } from 'next/router';
import axios from 'axios';

const EditPostPage = ({ isSidebarOpen, toggleSidebar }) => {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetchPost();
    }
  }, [id]);

  const fetchPost = async () => {
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
      setPost(response.data);
      setLoading(false);
    } catch (err) {
      console.error('Failed to fetch post');
      setLoading(false);
    }
  };

  return (
    <div className={`flex ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
      {/* Sidebar */}
      <div className="sidebar-container">
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      </div>

      {/* Main Content */}
      <div className="main-content">
        <h1 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
          <i className="fas fa-cog"></i>
          Posts
        </h1>
        {loading ? (
          <p className="text-gray-500">Loading...</p>
        ) : (
          post && (
            <PostForm
              id={post.id}
              existingTitle={post.title}
              existingBody={post.body}
              isEdit
            />
          )
        )}
      </div>
    </div>
  );
};

export default EditPostPage;
