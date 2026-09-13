import { useEffect, useRef } from 'react';
import AOS from 'aos';
import type { AosOptions } from 'aos';
import 'aos/dist/aos.css';

const DEFAULT_OPTIONS: AosOptions = { duration: 1000, once: true };

/**
 * Initialises AOS exactly once. Previously the options object was a default
 * literal in the dependency array, so a fresh object on every render made the
 * effect re-run and re-initialise AOS on each paint.
 */
export function useAOS(options: AosOptions = DEFAULT_OPTIONS) {
  const optionsRef = useRef(options);

  useEffect(() => {
    AOS.init(optionsRef.current);
  }, []);
}
