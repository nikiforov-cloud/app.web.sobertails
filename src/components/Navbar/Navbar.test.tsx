import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // For wrapping with router
import Navbar from './Navbar';
import { ITEMS } from '@/utils/items.ts';

vi.mock('@/utils/items.ts', () => ({
  ITEMS: ['home', 'about', 'contact'],
}));

describe('Navbar', () => {
  it('renders navbar links based on ITEMS', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    );

    // Check that the links are rendered correctly
    ITEMS.forEach((item) => {
      const linkElement = screen.getByText(item);
      expect(linkElement).toBeInTheDocument();
      expect(linkElement).toHaveAttribute('href', `/${item}`);
    });
  });

  it('activates link when the route is matched', () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <Navbar />
      </MemoryRouter>,
    );

    // Check that the active link is highlighted
    const aboutLink = screen.getByText('about');
    expect(aboutLink).toHaveClass('active');
  });

  it('does not activate non-matching links', () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <Navbar />
      </MemoryRouter>,
    );

    const homeLink = screen.getByText('home');
    expect(homeLink).not.toHaveClass('active');
  });
});
