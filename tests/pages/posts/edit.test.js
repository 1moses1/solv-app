import { render, screen } from '@testing-library/react';
import EditPostPage from '../../src/pages/posts/edit';

describe('EditPostPage', () => {
  test('renders the edit form when post data is available', () => {
    render(<EditPostPage />);
    expect(screen.getByText('Edit Post')).toBeInTheDocument();
  });
});
