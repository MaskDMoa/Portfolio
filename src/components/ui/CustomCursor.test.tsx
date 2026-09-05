import { render, fireEvent } from '@testing-library/react';
import { CustomCursor } from './CustomCursor';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import * as useIsMobileModule from '@/hooks/useIsMobile';

describe('CustomCursor', () => {
  beforeEach(() => {
    vi.spyOn(useIsMobileModule, 'useIsMobile').mockReturnValue(false); // Simulate desktop
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders nothing on mobile devices', () => {
    vi.spyOn(useIsMobileModule, 'useIsMobile').mockReturnValue(true);
    const { container } = render(<CustomCursor />);
    expect(container.firstChild).toBeNull();
  });

  it('renders aero cursor by default on desktop', () => {
    const { container } = render(<CustomCursor />);
    expect(container.querySelector('svg')).toBeInTheDocument();
    
    // The default aero arrow has a path with fill="white"
    const path = container.querySelector('path');
    expect(path).toHaveAttribute('fill', 'white');
  });

  it('changes to precision select cursor when hovering interactive element', () => {
    const { container } = render(
      <div>
        <CustomCursor />
        <a href="#" id="test-link">Hover Me</a>
      </div>
    );
    
    // Mouse over the link
    const link = document.getElementById('test-link')!;
    fireEvent.mouseOver(link);
    
    // The precision select crosshair has stroke="white" and no fill
    const svgs = container.querySelectorAll('svg');
    // We expect the cursor to change to the crosshair
    const path = svgs[svgs.length - 1].querySelector('path');
    expect(path).not.toHaveAttribute('fill', 'white');
    expect(path).toHaveAttribute('stroke', 'white');
  });
});
