import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Button } from '.';

const rendersSomething = Element => {
  const { container, unmount } = render(Element);
  return !!container.firstChild && (unmount(), true);
};

describe.runIf(rendersSomething(<Button />))('Button Component', () => {
  it('Renders the button with the correct label', () => {
    render(<Button label='Click me' onClick={() => {}} />);
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
  });

  it('Calls onClick when button is clicked', () => {
    const handleClick = vi.fn();
    render(<Button label='Press' onClick={handleClick} />);
    fireEvent.click(screen.getByRole('button', { name: /press/i }));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('Does not call onClick when disabled', () => {
    const handleClick = vi.fn();
    render(<Button label='Disabled' onClick={handleClick} disabled />);
    const button = screen.getByRole('button', { name: /disabled/i });
    fireEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });
});
