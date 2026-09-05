import { render, screen, waitFor } from '@testing-library/react';
import { GithubStats } from './GithubStats';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

describe('GithubStats', () => {
  beforeEach(() => {
    // Mock the global fetch
    global.fetch = vi.fn();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders loading state initially', () => {
    // Mock fetch to return a promise that doesn't resolve immediately
    (global.fetch as ReturnType<typeof vi.fn>).mockImplementation(() => new Promise(() => {}));
    
    render(<GithubStats />);
    
    expect(screen.getByTestId('github-stats-loading')).toBeInTheDocument();
    expect(screen.getByText('Carregando dados...')).toBeInTheDocument();
  });

  it('renders error state when fetch fails', async () => {
    (global.fetch as ReturnType<typeof vi.fn>).mockResolvedValueOnce({
      ok: false,
    });
    
    render(<GithubStats />);
    
    await waitFor(() => {
      expect(screen.getByTestId('github-stats-error')).toBeInTheDocument();
      expect(screen.getByText('[Erro] Não foi possível carregar os dados.')).toBeInTheDocument();
    });
  });

  it('renders stats correctly when fetch succeeds', async () => {
    const mockData = {
      userData: {
        login: 'MaskDMoa',
        avatar_url: 'https://example.com/avatar.png',
        bio: 'Developer',
        public_repos: 42,
        followers: 100,
      },
      reposData: [
        { stargazers_count: 10, language: 'TypeScript' },
        { stargazers_count: 5, language: 'TypeScript' },
        { stargazers_count: 20, language: 'Python' },
      ],
    };

    (global.fetch as ReturnType<typeof vi.fn>).mockResolvedValueOnce({
      ok: true,
      json: async () => mockData,
    });
    
    render(<GithubStats />);
    
    await waitFor(() => {
      expect(screen.getByTestId('github-stats')).toBeInTheDocument();
    });

    // Check rendered stats
    expect(screen.getByText('@MaskDMoa')).toBeInTheDocument();
    expect(screen.getByText('Developer')).toBeInTheDocument();
    expect(screen.getByText('42')).toBeInTheDocument(); // public repos
    expect(screen.getByText('100')).toBeInTheDocument(); // followers
    expect(screen.getByText('35')).toBeInTheDocument(); // total stars (10 + 5 + 20)
    expect(screen.getByText('TypeScript')).toBeInTheDocument(); // top language
  });
});
