import { render, screen } from '@testing-library/react';
import Sidebar from '../../src/components/Sidebar';

describe('Sidebar Component', () => {
  test('renders the SOLV logo', () => {
    render(<Sidebar isOpen={true} toggleSidebar={() => {}} />);
    expect(screen.getByText('SOLV')).toBeInTheDocument();
  });

  test('displays navigation menu with Overview and Posts options', () => {
    render(<Sidebar isOpen={true} toggleSidebar={() => {}} />);
    expect(screen.getByText('Overview')).toBeInTheDocument();
    expect(screen.getByText('Posts')).toBeInTheDocument();
  });

  test('applies correct class when sidebar is open', () => {
    const { container } = render(<Sidebar isOpen={true} toggleSidebar={() => {}} />);
    expect(container.firstChild).toHaveClass('translate-x-0');
  });

  test('applies correct class when sidebar is closed', () => {
    const { container } = render(<Sidebar isOpen={false} toggleSidebar={() => {}} />);
    expect(container.firstChild).toHaveClass('-translate-x-full');
  });
});
