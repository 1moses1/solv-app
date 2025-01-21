import { useState } from 'react';
import axios from 'axios';

const PostForm = ({ id = null, existingTitle = '', existingBody = '', isEdit = false, updateLocalState }) => {
  const [title, setTitle] = useState(existingTitle);
  const [body, setBody] = useState(existingBody);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = isEdit
        ? `https://jsonplaceholder.typicode.com/posts/${id}`
        : 'https://jsonplaceholder.typicode.com/posts';
      const method = isEdit ? 'put' : 'post';
      const response = await axios[method](url, { title, body });

      setMessage(isEdit ? 'Post updated successfully!' : 'Post created successfully!');

      if (updateLocalState) {
        if (isEdit) {
          updateLocalState('edit', response.data);
        } else {
          updateLocalState('create', response.data);
        }
      }
    } catch (error) {
      setMessage('Failed to submit post.');
    }
  };

  return (
    <div className="p-6 bg-white rounded shadow-md">
      <h1 className="text-2xl font-bold mb-4">{isEdit ? 'Edit Post' : 'Create Post'}</h1>
      {message && <p className="mb-4 text-primary">{message}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-black font-semibold mb-2">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 border rounded bg-gray-100"
            placeholder="Title"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-black font-semibold mb-2">Body</label>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="w-full p-3 border rounded bg-gray-100"
            rows="5"
            placeholder="Body"
            required
          ></textarea>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-primary text-black py-2 px-4 rounded hover:bg-opacity-90"
          >
            {isEdit ? 'Update Post' : 'Save Post'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostForm;
