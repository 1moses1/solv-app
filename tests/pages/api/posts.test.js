import handler from '../../src/pages/api/posts';

describe('API /api/posts', () => {
  test('returns a list of posts on GET request', async () => {
    const req = { method: 'GET' };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    await handler(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(expect.any(Array));
  });

  test('creates a post on POST request', async () => {
    const req = {
      method: 'POST',
      body: { title: 'New Post', body: 'This is a new post.' },
    };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    await handler(req, res);
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(expect.objectContaining({ title: 'New Post' }));
  });
});
