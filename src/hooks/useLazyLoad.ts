"use client";

import { useState, useEffect, useRef, MutableRefObject } from "react";

export const useLazyLoad = (
  threshold = 0.1
): [boolean, MutableRefObject<null>] => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.disconnect();
      }
    };
  }, [ref, threshold]);

  return [true, ref];
};
