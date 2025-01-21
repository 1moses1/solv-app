import { render, screen } from '@testing-library/react';
import Header from '../../src/components/Header';

describe('Header Component', () => {
  test('renders the breadcrumb correctly when in posts route', () => {
    render(<Header isSidebarOpen={false} toggleSidebar={() => {}} />);
    expect(screen.getByText(/Solv > Posts/)).toBeInTheDocument();
  });

  test('displays notification and user icons', () => {
    render(<Header isSidebarOpen={false} toggleSidebar={() => {}} />);
    expect(screen.getByTestId('notification-icon')).toBeInTheDocument();
    expect(screen.getByTestId('user-icon')).toBeInTheDocument();
  });

  test('renders the sidebar toggle button when the sidebar is closed', () => {
    render(<Header isSidebarOpen={false} toggleSidebar={() => {}} />);
    expect(screen.getByText('☰')).toBeInTheDocument();
  });
});
