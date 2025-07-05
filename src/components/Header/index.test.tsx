import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import Header from './';
import { MemoryRouter } from 'react-router-dom';

import { useAuth } from '../../contexts/AuthContext';
import i18n from '../../i18n';

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}));

vi.mock('../../i18n', () => ({
  default: {
    language: 'en',
    changeLanguage: vi.fn(),
  },
}));

vi.mock('../../contexts/AuthContext', () => ({
  useAuth: vi.fn(),
}));

const renderHeader = () =>
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );

describe('Header (TypeScript)', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders guest info when user is not logged in', () => {
    (useAuth as unknown).mockReturnValue({
      user: null,
      logout: vi.fn(),
    });

    renderHeader();

    expect(screen.getByText('guest')).toBeInTheDocument();
    expect(screen.getByText('signup.title')).toBeInTheDocument();
    expect(screen.getByText('login.title')).toBeInTheDocument();
  });

  it('renders username and logout button when user is logged in', () => {
    (useAuth as unknown).mockReturnValue({
      user: { name: 'Axel' },
      logout: vi.fn(),
    });

    renderHeader();

    expect(screen.getByText('Axel')).toBeInTheDocument();
    expect(screen.getByText('logout.title')).toBeInTheDocument();
  });

  it('calls logout when logout button is clicked', () => {
    const mockLogout = vi.fn();
    (useAuth as unknown).mockReturnValue({
      user: { name: 'Axel' },
      logout: mockLogout,
    });

    renderHeader();

    fireEvent.click(screen.getByText('logout.title'));
    expect(mockLogout).toHaveBeenCalled();
  });

  it('calls changeLanguage when select value changes', () => {
    (useAuth as unknown).mockReturnValue({
      user: null,
      logout: vi.fn(),
    });

    renderHeader();

    const select = screen.getByRole('combobox');
    fireEvent.change(select, { target: { value: 'fr' } });

    expect(i18n.changeLanguage).toHaveBeenCalledWith('fr');
  });
});
