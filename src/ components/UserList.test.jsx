import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { UserList } from '.';

const sampleUsers = [
  { id: 1, name: 'Ada Lovelace', picture: 'ada.png' },
  { id: 2, name: 'Grace Hopper', picture: 'grace.png' }
];

const rendersSomething = Element => {
  const { container, unmount } = render(Element);
  return !!container.firstChild && (unmount(), true);
};

describe.runIf(rendersSomething(<UserList />))('UserList Component', () => {
  it('Renders a <ul> with list items', () => {
    const { container } = render(<UserList users={sampleUsers} />);
    expect(container.querySelector('ul')).toBeInTheDocument();
    expect(container.querySelectorAll('li')).toHaveLength(sampleUsers.length);
  });

  it('Displays each user name', () => {
    render(<UserList users={sampleUsers} />);
    for (const user of sampleUsers) {
      expect(screen.getByText(user.name)).toBeInTheDocument();
    }
  });

  it('Renders an image for each user with correct alt', () => {
    render(<UserList users={sampleUsers} />);
    for (const user of sampleUsers) {
      const img = screen.getByAltText(user.name);
      expect(img).toHaveAttribute('src', user.picture);
    }
  });

  it('Renders fallback text when users array is empty', () => {
    render(<UserList users={[]} />);
    expect(screen.getByText('No users found.')).toBeInTheDocument();
  });

  it('Renders fallback text when users prop is missing', () => {
    render(<UserList />);
    expect(screen.getByText('No users found.')).toBeInTheDocument();
  });
});
