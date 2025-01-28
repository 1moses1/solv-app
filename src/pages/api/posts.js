// Mock data representing a simple in-memory database of posts
let mockPosts = [
  { id: 1, title: 'First Post', body: 'This is the first post.' }, // Post 1
  { id: 2, title: 'Second Post', body: 'This is the second post.' } // Post 2
];

// API route handler function
export default function handler(req, res) {
  const { id } = req.query; // Extract the 'id' parameter from the query string

  // Handle GET requests
  if (req.method === 'GET') {
    if (id) {
      // If an ID is provided, find the post with the matching ID
      const post = mockPosts.find((p) => p.id === parseInt(id));
      // Respond with the post if found, otherwise return a 404 error
      res.status(post ? 200 : 404).json(post || { message: 'Post not found' });
    } else {
      // If no ID is provided, return all posts
      res.status(200).json(mockPosts);
    }
  }
  // Handle POST requests (Create new post)
  else if (req.method === 'POST') {
    const { title, body } = req.body; // Extract title and body from the request payload
    const newPost = { id: mockPosts.length + 1, title, body }; // Create a new post with a unique ID
    mockPosts.push(newPost); // Add the new post to the mockPosts array
    res.status(201).json(newPost); // Respond with the newly created post
  }
  // Handle PUT requests (Update an existing post)
  else if (req.method === 'PUT') {
    const { title, body } = req.body; // Extract title and body from the request payload
    const postIndex = mockPosts.findIndex((p) => p.id === parseInt(id)); // Find the index of the post with the matching ID
    if (postIndex !== -1) {
      // If the post exists, update its title and body
      mockPosts[postIndex] = { ...mockPosts[postIndex], title, body };
      res.status(200).json(mockPosts[postIndex]); // Respond with the updated post
    } else {
      // If the post does not exist, return a 404 error
      res.status(404).json({ message: 'Post not found' });
    }
  }
  // Handle DELETE requests (Delete an existing post)
  else if (req.method === 'DELETE') {
    const postIndex = mockPosts.findIndex((p) => p.id === parseInt(id)); // Find the index of the post with the matching ID
    if (postIndex !== -1) {
      // If the post exists, remove it from the mockPosts array
      mockPosts.splice(postIndex, 1);
      res.status(200).json({ message: 'Post deleted successfully' }); // Respond with a success message
    } else {
      // If the post does not exist, return a 404 error
      res.status(404).json({ message: 'Post not found' });
    }
  }
  // Handle unsupported HTTP methods
  else {
    res.status(405).json({ message: 'Method not allowed' }); // Respond with a 405 error for unsupported methods
  }
}
