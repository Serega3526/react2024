import { describe, vi } from 'vitest';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import DetailCard from './detailCard';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import { ReactElement } from 'react';
import { Pages } from '../enums/enums';

const renderWithProviders = (ui: ReactElement, { route = `?${Pages.SEARCH_PATH}=1&${Pages.DETAILS}=1` } = {}) => {
  window.history.pushState({}, 'Test page', route);

  return render(
    <Provider store={store}>
      <BrowserRouter>{ui}</BrowserRouter>
    </Provider>,
  );
};

describe('Detail card', () => {
  it('display detail card', () => {
    renderWithProviders(<DetailCard />);
    waitFor(() => {
      expect(screen.getByText('Rick Sanchez')).toBeInTheDocument();
      expect(screen.getByText('Human')).toBeInTheDocument();
      expect(screen.getByText('Male')).toBeInTheDocument();
      expect(screen.getByText('Alive')).toBeInTheDocument();
    });
  });
  it('display close button', () => {
    const handleClick = vi.fn();
    renderWithProviders(<DetailCard />);
    waitFor(() => {
      fireEvent.click(screen.getByTestId('detail-card-btn'));
      expect(handleClick).toHaveBeenCalled();
    });
  });
});
