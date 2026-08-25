import { useState, useEffect, useRef } from 'react';

export const useInView = (options = {}) => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      // When the image enters the screen, trigger the animation
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.unobserve(entry.target); // Stop looking once it's animated
      }
    }, { threshold: 0.2, ...options }); // 0.2 means it triggers when 20% is visible

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return [ref, isInView];
};