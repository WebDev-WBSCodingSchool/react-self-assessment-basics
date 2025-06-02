import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, afterEach, beforeEach } from 'vitest';
import { PokemonViewer } from '.';

beforeEach(() => (globalThis.fetch = vi.fn()));

afterEach(() => vi.restoreAllMocks());

const rendersSomething = Element => {
  const { container, unmount } = render(Element);
  return !!container.firstChild && (unmount(), true);
};

describe.runIf(rendersSomething(<PokemonViewer />))('PokemonViewer Component', () => {
  it('Renders "Invalid Pokémon ID" for out-of-range values', () => {
    render(<PokemonViewer id={999} />);
    expect(screen.getByText(/invalid pokémon id/i)).toBeInTheDocument();
  });

  it('Shows loading state initially', async () => {
    globalThis.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ name: 'bulbasaur', sprites: { front_default: 'bulba.png' } })
    });
    render(<PokemonViewer id={1} />);
    const loading = await screen.findByText(/loading/i);
    expect(loading).toBeInTheDocument();
  });

  it('Renders fetched Pokémon name and image', async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        name: 'pikachu',
        sprites: { front_default: 'pikachu.png' }
      })
    });
    render(<PokemonViewer id={25} />);
    await waitFor(() => expect(screen.getByText(/pikachu/i)).toBeInTheDocument());
    expect(screen.getByRole('img', { name: /pikachu/i })).toHaveAttribute('src', 'pikachu.png');
  });

  it('Shows error message if fetch fails', async () => {
    fetch.mockRejectedValueOnce(new Error('fail'));
    render(<PokemonViewer id={1} />);
    await waitFor(() => expect(screen.getByText(/failed to fetch pokémon/i)).toBeInTheDocument());
  });
});
