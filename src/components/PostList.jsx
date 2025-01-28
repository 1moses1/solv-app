import React, { useState } from 'react';

const PostList = ({ posts, handleEdit }) => {
  // State variables for pagination, search term, and deleted post tracking
  const [currentPage, setCurrentPage] = useState(1); // Tracks the current page in pagination
  const [searchTerm, setSearchTerm] = useState(''); // Tracks the search input value
  const [deletedPostId, setDeletedPostId] = useState(null); // Tracks the ID of a recently deleted post
  const postsPerPage = 10; // Number of posts displayed per page

  // Filter posts based on the search term
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate pagination details
  const totalPosts = filteredPosts.length; // Total number of filtered posts
  const totalPages = Math.ceil(totalPosts / postsPerPage); // Total number of pages
  const indexOfLastPost = currentPage * postsPerPage; // Index of the last post on the current page
  const indexOfFirstPost = indexOfLastPost - postsPerPage; // Index of the first post on the current page
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost); // Posts to display on the current page

  // Handle pagination click event
  const handlePageClick = (page) => {
    setCurrentPage(page); // Update the current page
  };

  // Handle post deletion event
  const handleDelete = (id) => {
    setDeletedPostId(id); // Mark the post as deleted by its ID
    setTimeout(() => setDeletedPostId(null), 3000); // Clear the deleted post indicator after 3 seconds
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Search Input */}
      <div className="relative w-2/5 mx-auto mb-6">
        <input
          type="text"
          placeholder="Search posts..." // Placeholder for the search bar
          value={searchTerm} // Controlled input value
          onChange={(e) => setSearchTerm(e.target.value)} // Update the search term on input change
          className="w-full p-3 pl-12 pr-4 border border-gray-300 rounded-full shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#00cc94] focus:border-transparent text-sm"
        />
        {/* Search Icon */}
        <i
          className="fas fa-search absolute left-4 mt-6 transform -translate-y-1/2 text-gray-500 text-base"
          aria-hidden="true"
        ></i>
      </div>

      {/* Posts Table */}
      <div className="overflow-hidden rounded-lg shadow-lg bg-white">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-200">
            <tr>
              {/* Table Header Columns */}
              <th
                scope="col"
                className="px-6 py-3 text-left text-sm font-semibold text-black tracking-wider"
              >
                ID
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-sm font-semibold text-black tracking-wider"
              >
                Title
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-sm font-semibold text-black tracking-wider"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {/* Render the filtered and paginated posts */}
            {currentPosts.map((post) => (
              <tr key={post.id} className="hover:bg-gray-50 transition duration-150">
                {/* Post ID */}
                <td className="px-6 py-4 text-sm font-medium text-gray-800">
                  {post.id}
                </td>
                {/* Post Title */}
                <td className="px-6 py-4 text-sm text-gray-600">{post.title}</td>
                {/* Action Buttons */}
                <td className="px-6 py-4">
                  <div className="flex flex-wrap gap-4 items-center">
                    {/* Edit Button */}
                    <button
                      onClick={() => handleEdit(post.id)} // Trigger the edit functionality
                      className="text-[#00e5a5] hover:text-[#00cc94] text-sm transition"
                      title="Edit"
                    >
                      <i className="fas fa-edit"></i>
                    </button>

                    {/* Delete Button */}
                    <button
                      onClick={() => handleDelete(post.id)} // Trigger the delete functionality
                      className="text-red-500 hover:text-red-600 text-sm transition"
                      title="Delete"
                    >
                      <i className="fas fa-trash"></i>
                    </button>

                    {/* Success Indicator for Deleted Posts */}
                    {deletedPostId === post.id && (
                      <span className="ml-2 text-xs font-semibold text-[#00cc94]">
                        <i className="fas fa-check-circle mr-1"></i> Deleted
                      </span>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6 space-x-2">
        {/* Render pagination buttons */}
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageClick(index + 1)} // Update the page on button click
            className={`w-8 h-8 rounded-full text-xs font-medium flex items-center justify-center transition ${
              currentPage === index + 1
                ? 'bg-[#00cc94] text-white shadow-md' // Active page styling
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300' // Inactive page styling
            }`}
          >
            {index + 1} {/* Display the page number */}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PostList;
