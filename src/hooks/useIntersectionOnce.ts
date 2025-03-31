import { useEffect, useRef, useState, type RefObject } from "react";
import { useIntersection } from "react-use";

export function useIntersectionOnce<T extends HTMLElement>(
  options?: IntersectionObserverInit,
) {
  const ref = useRef<T>(null);
  const [didIntersect, setDidIntersect] = useState(false);
  const entry = useIntersection(ref as RefObject<T>, {
    rootMargin: "-20% 0px",
    ...options,
  });

  useEffect(() => {
    if (entry?.isIntersecting) setDidIntersect(true);
  }, [entry?.isIntersecting]);

  return [ref, didIntersect] as const;
}
