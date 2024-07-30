import { render, screen } from '@testing-library/react';
import ErrorBoundary from './ErrorBoundary';

describe('ErrorBoundary', () => {
  it('renders children when no error is thrown', () => {
    render(
      <ErrorBoundary>
        <div data-testid="render-child">Child component</div>
      </ErrorBoundary>,
    );
    expect(screen.getByTestId('render-child')).toBeInTheDocument();
  });

  it('renders error message when error is thrown', () => {
    const ThrowError = () => {
      throw new Error('Test');
    };

    render(
      <ErrorBoundary>
        <ThrowError />
      </ErrorBoundary>,
    );
    expect(screen.getByText('Sorry.. there was an error')).toBeInTheDocument();
  });
});
