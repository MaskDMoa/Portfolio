import { renderHook } from '@testing-library/react';
import { useIsMobile } from '@/hooks/useIsMobile';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

describe('useIsMobile', () => {
  beforeEach(() => {
    vi.stubGlobal('matchMedia', vi.fn());
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('should return true if no fine pointer (touch device)', () => {
    vi.mocked(window.matchMedia).mockImplementation((query) => ({
      matches: query === '(max-width: 767px)' ? false : false, // no fine pointer
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }));

    const { result } = renderHook(() => useIsMobile());
    expect(result.current).toBe(true);
  });

  it('should return true if narrow screen', () => {
    vi.mocked(window.matchMedia).mockImplementation((query) => ({
      matches: query === '(max-width: 767px)' ? true : true, // has fine pointer but narrow screen
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }));

    const { result } = renderHook(() => useIsMobile());
    expect(result.current).toBe(true);
  });

  it('should return false for desktop (fine pointer and wide screen)', () => {
    vi.mocked(window.matchMedia).mockImplementation((query) => ({
      matches: query === '(pointer: fine)' ? true : false,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }));

    const { result } = renderHook(() => useIsMobile());
    expect(result.current).toBe(false);
  });
});
