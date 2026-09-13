declare module 'aos' {
  export interface AosOptions {
    offset?: number;
    delay?: number;
    duration?: number;
    easing?: string;
    once?: boolean;
    mirror?: boolean;
    anchorPlacement?: string;
    disable?: boolean | 'phone' | 'tablet' | 'mobile' | (() => boolean);
  }

  const AOS: {
    init(options?: AosOptions): void;
    refresh(hard?: boolean): void;
    refreshHard(): void;
  };

  export default AOS;
}
