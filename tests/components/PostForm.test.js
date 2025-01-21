import { render, screen, fireEvent } from '@testing-library/react';
import PostForm from '../../src/components/PostForm';

describe('PostForm Component', () => {
  test('renders the form with title and body inputs', () => {
    render(<PostForm />);
    expect(screen.getByLabelText('Title')).toBeInTheDocument();
    expect(screen.getByLabelText('Body')).toBeInTheDocument();
  });

  test('displays success message after submitting the form', async () => {
    render(<PostForm isEdit={false} />);
    fireEvent.change(screen.getByLabelText('Title'), { target: { value: 'Test Title' } });
    fireEvent.change(screen.getByLabelText('Body'), { target: { value: 'Test Body' } });
    fireEvent.click(screen.getByText('Save Post'));
    expect(await screen.findByText('Post created successfully!')).toBeInTheDocument();
  });
});
