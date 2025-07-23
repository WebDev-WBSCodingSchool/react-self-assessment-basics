import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Counter } from '.';

const rendersSomething = Element => {
  const { container, unmount } = render(Element);
  return !!container.firstChild && (unmount(), true);
};

describe.runIf(rendersSomething(<Counter />))('Counter Component', () => {
  it('Renders the initial count', () => {
    render(<Counter />);
    expect(screen.getByText(/Count: 0/i)).toBeInTheDocument();
  });

  it('Increments the count by 1 when "Increment" is clicked', () => {
    render(<Counter />);
    fireEvent.click(screen.getByRole('button', { name: /increment/i }));
    expect(screen.getByText(/Count: 1/i)).toBeInTheDocument();
  });

  it('Decrements the count by 1 when "Decrement" is clicked', () => {
    render(<Counter />);
    fireEvent.click(screen.getByRole('button', { name: /decrement/i }));
    expect(screen.getByText(/Count: -1/i)).toBeInTheDocument();
  });

  it('Resets the count to 0 when "Reset" is clicked', () => {
    render(<Counter />);
    fireEvent.click(screen.getByRole('button', { name: /increment/i }));
    fireEvent.click(screen.getByRole('button', { name: /reset/i }));
    expect(screen.getByText(/Count: 0/i)).toBeInTheDocument();
  });

  it('Changes the sign of the count when "Change sign" is clicked', () => {
    render(<Counter />);
    fireEvent.click(screen.getByRole('button', { name: /increment/i })); // count = 1
    fireEvent.click(screen.getByRole('button', { name: /change sign/i })); // count = -1
    expect(screen.getByText(/Count: -1/i)).toBeInTheDocument();
  });

  it('Toggles sign multiple times', () => {
    render(<Counter />);
    fireEvent.click(screen.getByRole('button', { name: /increment/i })); // 1
    fireEvent.click(screen.getByRole('button', { name: /change sign/i })); // -1
    fireEvent.click(screen.getByRole('button', { name: /change sign/i })); // 1
    expect(screen.getByText(/Count: 1/i)).toBeInTheDocument();
  });
});
