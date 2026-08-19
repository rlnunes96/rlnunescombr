import { useEffect, useState } from 'react';
import { prefersReducedMotion } from '../lib/media.js';

/**
 * Reveals `text` one character at a time. Restarts from zero whenever `text`
 * changes, so toggling the language retypes the new string.
 */
export function useTypewriter(text, speed = 22) {
  const [typed, setTyped] = useState('');

  useEffect(() => {
    if (prefersReducedMotion()) {
      setTyped(text);
      return;
    }

    let index = 0;
    let timer;

    setTyped('');
    const step = () => {
      index += 1;
      setTyped(text.slice(0, index));
      if (index < text.length) timer = setTimeout(step, speed);
    };
    step();

    return () => clearTimeout(timer);
  }, [text, speed]);

  return typed;
}
