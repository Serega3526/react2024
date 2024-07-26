import { describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import ErrorButton from './buttonError';

describe('Top Content', () => {
  it('render error button', () => {
    render(<ErrorButton />);
    expect(screen.getByTestId('button-error')).toHaveTextContent('ERROR');
  });
});
