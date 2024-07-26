import { Provider } from 'react-redux';
import { Pages } from '../enums/enums';
import { BrowserRouter } from 'react-router-dom';
import { store } from '../../store/store';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import ModalCheckedItem from './modalCheckedItem';
import { vi } from 'vitest';

const renderWithProviders = (ui: React.ReactElement, { route = `?${Pages.ATTR_PATH}=1` } = {}) => {
  window.history.pushState({}, 'Test page', route);

  return render(
    <Provider store={store}>
      <BrowserRouter>{ui}</BrowserRouter>
    </Provider>,
  );
};

describe('ModalCheckedItem', () => {
  it('display modal content', () => {
    renderWithProviders(<ModalCheckedItem />);
    waitFor(() => {
      expect(screen.getByText('Create file')).toBeInTheDocument();
      expect(screen.getByText('Delete')).toBeInTheDocument();
      expect(screen.getByTestId('test-count')).toBeInTheDocument();
    });
  });
  it('click to delete button', () => {
    const handleClick = vi.fn();
    renderWithProviders(<ModalCheckedItem />);
    waitFor(() => {
      fireEvent.click(screen.getByText('Delete'));
      expect(handleClick).toHaveBeenCalled();
    });
  });
});
