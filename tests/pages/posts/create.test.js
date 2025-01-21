import { render, screen } from '@testing-library/react';
import CreatePostPage from '../../src/pages/posts/create';

describe('CreatePostPage', () => {
  test('renders the post form', () => {
    render(<CreatePostPage />);
    expect(screen.getByText('Create Post')).toBeInTheDocument();
  });
});
