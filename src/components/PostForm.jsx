import { useState } from 'react';
import axios from 'axios';

const PostForm = ({ id = null, existingTitle = '', existingBody = '', isEdit = false, updateLocalState, isSidebarOpen }) => {
  // State variables for form fields and submission messages
  const [title, setTitle] = useState(existingTitle); // Holds the value of the "Title" input field
  const [body, setBody] = useState(existingBody); // Holds the value of the "Body" input field
  const [message, setMessage] = useState(''); // Holds success or error messages after submission

  // Handles form submission for either creating or editing a post
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    try {
      // Determine API URL and method based on whether it's an edit or create operation
      const url = isEdit
        ? `https://jsonplaceholder.typicode.com/posts/${id}` // API endpoint for updating a post
        : 'https://jsonplaceholder.typicode.com/posts'; // API endpoint for creating a post
      const method = isEdit ? 'put' : 'post'; // HTTP method (PUT for edit, POST for create)

      // Perform the API request using axios
      const response = await axios[method](url, { title, body });

      // Set success message based on the operation
      setMessage(isEdit ? 'Post updated successfully!' : 'Post created successfully!');

      // Update local state to reflect the changes, if applicable
      if (updateLocalState) {
        if (isEdit) {
          updateLocalState('edit', response.data); // Update the edited post in local state
        } else {
          updateLocalState('create', response.data); // Add the newly created post to local state
        }
      }
    } catch (error) {
      // Set error message if the API request fails
      setMessage('Failed to submit post.');
    }
  };

  return (
    <div
      className="p-6 bg-white rounded shadow-md"
      style={{
        // Style configurations for the form container
        transition: 'width 0.3s ease', // Smooth transition for width changes
        height: 'calc(100vh - 64px)', // Ensure the form takes the full height of the viewport minus header
        boxSizing: 'border-box', // Include padding in width/height calculations
        marginRight: '-38px', // Adjust right margin for alignment
      }}
    >
      {/* Form Title */}
      <h1
        className="mb-4 mt-14"
        style={{
          fontSize: '16px', // Font size for the title
          fontWeight: 'bold', // Bold font weight
          marginBottom: '90px', // Space below the title
          marginLeft: '20px', // Space on the left for alignment
        }}
      >
        {isEdit ? 'Edit Post' : 'Create Post'} {/* Display dynamic title based on operation */}
      </h1>

      {/* Horizontal Divider */}
      <hr className="border-t border-gray-300 ml-20 lg:mr-96 md:mr-72 sm:mr-10 mt-6" />

      {/* Form */}
      <form onSubmit={handleSubmit} className="mt-6">
        {/* Title Field */}
        <div className="grid grid-cols-12 gap-2 items-start mb-6 mx-20 lg:mr-96 md:mr-72 sm:mr-10">
          <label className="col-span-3 text-black text-sm">Title</label> {/* Label for the title input */}
          <input
            type="text"
            value={title} // Controlled input value
            onChange={(e) => setTitle(e.target.value)} // Update title state on change
            className="col-span-9 p-3 bg-gray-100 rounded-full w-full"
            placeholder="Title" // Placeholder text for the input
            required
            style={{
              border: 'none', // Removes the default border
              borderRadius: '12px', // Adds rounded corners
            }}
          />
        </div>

        {/* Body Field */}
        <div className="grid grid-cols-12 gap-2 items-start mb-6 mx-20 lg:mr-96 md:mr-72 sm:mr-10">
          <label className="col-span-3 text-black text-sm">Body</label> {/* Label for the body input */}
          <textarea
            value={body} // Controlled textarea value
            onChange={(e) => setBody(e.target.value)} // Update body state on change
            className="col-span-9 p-3 bg-gray-100 rounded-full w-full"
            rows="5" // Number of rows for the textarea
            placeholder="Body" // Placeholder text for the textarea
            required
            style={{
              border: 'none', // Removes the default border
              borderRadius: '12px', // Adds rounded corners
            }}
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="flex flex-col items-end mx-20 lg:mr-96 md:mr-72 sm:mr-10 mt-6">
          <button
            type="submit"
            className="bg-primary text-black py-2 px-6 rounded-full hover:bg-opacity-90"
            style={{
              borderRadius: '15px', // Rounded corners
              width: '180px', // Fixed width for the button
              height: '40px', // Fixed height for the button
              fontWeight: 'bold', // Bold font weight for the button text
              fontSize: '13px', // Font size for the button text
            }}
          >
            {isEdit ? 'Update Post' : 'Save Post'} {/* Dynamic button text */}
          </button>

          {/* Success or Error Message */}
          {message && (
            <p className="mt-2 text-primary font-medium text-right sm:text-sm">
              {message} {/* Display success or error message */}
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default PostForm;
