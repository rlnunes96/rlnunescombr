import { useEffect, useRef, useState } from 'react';
import { hasFinePointer } from '../lib/media.js';

/**
 * The green dot + trailing ring that replace the system cursor.
 *
 * Position is written straight to the DOM nodes rather than held in state —
 * mousemove fires far too often to re-render the page on each event. The ring
 * lags behind via a CSS transition on `transform`.
 */
export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (!hasFinePointer()) return;
    setEnabled(true);
    document.body.classList.add('has-custom-cursor');

    const onMove = (e) => {
      const offset = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      if (dotRef.current) dotRef.current.style.transform = offset;
      if (ringRef.current) ringRef.current.style.transform = offset;
    };

    window.addEventListener('mousemove', onMove);
    return () => {
      window.removeEventListener('mousemove', onMove);
      document.body.classList.remove('has-custom-cursor');
    };
  }, []);

  if (!enabled) return null;

  return (
    <div className="cursor-layer" aria-hidden="true">
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </div>
  );
}
