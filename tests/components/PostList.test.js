import { render, screen, fireEvent } from '@testing-library/react';
import PostList from '../../src/components/PostList';

const mockPosts = [
  { id: 1, title: 'First Post' },
  { id: 2, title: 'Second Post' },
];

describe('PostList Component', () => {
  test('renders a list of posts', () => {
    render(<PostList posts={mockPosts} handleEdit={() => {}} handleDelete={() => {}} />);
    expect(screen.getByText('First Post')).toBeInTheDocument();
    expect(screen.getByText('Second Post')).toBeInTheDocument();
  });

  test('filters posts by search term', () => {
    render(<PostList posts={mockPosts} handleEdit={() => {}} handleDelete={() => {}} />);
    const searchInput = screen.getByPlaceholderText('Search posts by title...');
    fireEvent.change(searchInput, { target: { value: 'First' } });
    expect(screen.getByText('First Post')).toBeInTheDocument();
    expect(screen.queryByText('Second Post')).not.toBeInTheDocument();
  });

  test('renders pagination buttons', () => {
    render(<PostList posts={mockPosts} handleEdit={() => {}} handleDelete={() => {}} />);
    expect(screen.getAllByRole('button', { name: /\d/ }).length).toBe(1);
  });
});
