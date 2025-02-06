import { useEffect, useRef, useState } from 'react';

interface UseInViewOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useInView({
  threshold = 0.1,
  rootMargin = '0px',
  triggerOnce = true
}: UseInViewOptions = {}) {
  const [isInView, setIsInView] = useState(false);
  const elementRef = useRef<HTMLElement | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const isElementInView = entry.isIntersecting;
        setIsInView(isElementInView);

        // If element has been seen and triggerOnce is true, unobserve it
        if (isElementInView && triggerOnce && elementRef.current) {
          observer.unobserve(elementRef.current);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observerRef.current = observer;

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [threshold, rootMargin, triggerOnce]);

  useEffect(() => {
    const currentObserver = observerRef.current;
    const currentElement = elementRef.current;

    if (currentElement && currentObserver) {
      currentObserver.observe(currentElement);
    }

    return () => {
      if (currentElement && currentObserver) {
        currentObserver.unobserve(currentElement);
      }
    };
  }, [elementRef.current]);

  return [elementRef, isInView] as const;
}
