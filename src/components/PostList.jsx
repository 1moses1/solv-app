import React, { useState } from 'react';

const PostList = ({ posts, handleEdit, handleDelete }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const postsPerPage = 10;

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPosts = filteredPosts.length;
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      {/* Search Input */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search posts by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-3 border rounded bg-gray-100"
        />
      </div>

      {/* Posts Table */}
      <div className="card">
        <table className="w-full text-sm">
          <thead>
            <tr>
              <th className="text-left p-2">ID</th>
              <th className="text-left p-2">Title</th>
              <th className="text-left p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentPosts.map((post) => (
              <tr key={post.id} className="border-b">
                <td className="p-2">{post.id}</td>
                <td className="p-2">{post.title}</td>
                <td className="p-2 space-x-2">
                  <button
                    className="px-3 py-1 rounded-full bg-primary text-white text-xs hover:bg-opacity-80"
                    onClick={() => handleEdit(post.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="px-3 py-1 rounded-full bg-red-500 text-white text-xs hover:bg-red-600"
                    onClick={() => handleDelete(post.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex justify-center mt-4 space-x-2">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageClick(index + 1)}
              className={`w-8 h-8 rounded-full text-xs flex items-center justify-center ${
                currentPage === index + 1
                  ? 'bg-primary text-white'
                  : 'bg-gray-200 text-black hover:bg-gray-300'
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostList;
