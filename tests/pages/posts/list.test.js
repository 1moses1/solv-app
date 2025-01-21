import { render, screen } from '@testing-library/react';
import PostListPage from '../../src/pages/posts/list';

describe('PostListPage', () => {
  test('renders the post list', () => {
    render(<PostListPage />);
    expect(screen.getByText('Posts')).toBeInTheDocument();
  });
});
