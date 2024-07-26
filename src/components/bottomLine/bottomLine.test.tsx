import { describe } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import { Pages } from '../enums/enums';
import BottomLine from './bottomLine';

const renderWithProviders = (ui: React.ReactElement, { route = `?${Pages.ATTR_PATH}=1` } = {}) => {
  window.history.pushState({}, 'Test page', route);

  return render(
    <Provider store={store}>
      <BrowserRouter>{ui}</BrowserRouter>
    </Provider>,
  );
};

describe('Bottom Line', () => {
  it('display top content', () => {
    renderWithProviders(<BottomLine />);
    waitFor(() => {
      expect(screen.getByText('main')).toBeInTheDocument();
    });
  });
  it('display bottom content', () => {
    renderWithProviders(<BottomLine />);
    waitFor(() => {
      expect(screen.getByTestId('bottom-content')).toBeInTheDocument();
    });
  });
});
