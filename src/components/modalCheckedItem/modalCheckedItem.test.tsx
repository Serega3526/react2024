import { Provider } from 'react-redux';
import { Pages } from '../enums/enums';
import { BrowserRouter } from 'react-router-dom';
import { store } from '../../store/store';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import ModalCheckedItem from './modalCheckedItem';
import { vi } from 'vitest';

const renderContent = (content: React.ReactElement) => {
  window.history.pushState({}, 'Test', `?${Pages.ATTR_PATH}=1`);

  return render(
    <Provider store={store}>
      <BrowserRouter>{content}</BrowserRouter>
    </Provider>,
  );
};

describe('ModalCheckedItem', () => {
  it('display modal content', () => {
    renderContent(<ModalCheckedItem />);
    waitFor(() => {
      expect(screen.getByText('Create file')).toBeInTheDocument();
      expect(screen.getByText('Delete')).toBeInTheDocument();
      expect(screen.getByTestId('test-count')).toBeInTheDocument();
    });
  });
  it('click to delete button', () => {
    const handleClick = vi.fn();
    renderContent(<ModalCheckedItem />);
    waitFor(() => {
      fireEvent.click(screen.getByText('Delete'));
      expect(handleClick).toHaveBeenCalled();
    });
  });
});
