import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Button } from '.';

const rendersSomething = !!render(<Button label='Click me' onClick={() => {}} />).container
  .firstChild;

describe.runIf(rendersSomething)('Button Component', () => {
  it('renders the button with the correct label', () => {
    render(<Button label='Click me' onClick={() => {}} />);
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
  });

  it('calls onClick when button is clicked', () => {
    const handleClick = vi.fn();
    render(<Button label='Press' onClick={handleClick} />);
    fireEvent.click(screen.getByRole('button', { name: /press/i }));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
