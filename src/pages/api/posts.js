let mockPosts = [
    { id: 1, title: 'First Post', body: 'This is the first post.' },
    { id: 2, title: 'Second Post', body: 'This is the second post.' },
  ];
  
  export default function handler(req, res) {
    const { id } = req.query;
  
    if (req.method === 'GET') {
      if (id) {
        const post = mockPosts.find((p) => p.id === parseInt(id));
        res.status(post ? 200 : 404).json(post || { message: 'Post not found' });
      } else {
        res.status(200).json(mockPosts);
      }
    } else if (req.method === 'POST') {
      const { title, body } = req.body;
      const newPost = { id: mockPosts.length + 1, title, body };
      mockPosts.push(newPost);
      res.status(201).json(newPost);
    } else if (req.method === 'PUT') {
      const { title, body } = req.body;
      const postIndex = mockPosts.findIndex((p) => p.id === parseInt(id));
      if (postIndex !== -1) {
        mockPosts[postIndex] = { ...mockPosts[postIndex], title, body };
        res.status(200).json(mockPosts[postIndex]);
      } else {
        res.status(404).json({ message: 'Post not found' });
      }
    } else if (req.method === 'DELETE') {
      const postIndex = mockPosts.findIndex((p) => p.id === parseInt(id));
      if (postIndex !== -1) {
        mockPosts.splice(postIndex, 1);
        res.status(200).json({ message: 'Post deleted successfully' });
      } else {
        res.status(404).json({ message: 'Post not found' });
      }
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  }
  