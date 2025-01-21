import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/Sidebar';
import PostList from '../../components/PostList';
import axios from 'axios';

const PostListPage = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(response.data);
    } catch (err) {
      setError('Failed to fetch posts');
    }
  };

  const handleEdit = (id) => {
    window.location.href = `/posts/edit?id=${id}`;
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
      setPosts(posts.filter((post) => post.id !== id));
      alert('Post deleted successfully');
    } catch (err) {
      alert('Failed to delete post');
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="main-content p-6">
        <h1 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
          <i className="fa-solid fa-gear"></i> Posts
        </h1>
        <PostList posts={posts} handleEdit={handleEdit} handleDelete={handleDelete} />
      </div>
    </div>
  );
};

export default PostListPage;
