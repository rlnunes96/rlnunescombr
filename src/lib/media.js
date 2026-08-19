/** True when the visitor asked the OS to tone animation down. */
export function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/** True on devices with a precise pointer — where a custom cursor makes sense. */
export function hasFinePointer() {
  return window.matchMedia('(pointer: fine)').matches;
}
