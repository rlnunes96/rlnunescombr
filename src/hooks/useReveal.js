import { useEffect, useRef, useState } from 'react';

/**
 * Fades a section in the first time it scrolls into view. Returns the ref to
 * attach and the class name carrying the revealed state.
 */
export function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Without the observer the sections would stay stuck at opacity 0, so fail
    // open and show them.
    if (typeof IntersectionObserver === 'undefined') {
      setRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold },
    );
    observer.observe(el);

    return () => observer.disconnect();
  }, [threshold]);

  return [ref, revealed ? 'reveal is-revealed' : 'reveal'];
}
