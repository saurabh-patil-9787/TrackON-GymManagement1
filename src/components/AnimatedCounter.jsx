import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

export default function AnimatedCounter({ target, prefix = '', suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({ threshold: 0.5, triggerOnce: true });
  const frameRef = useRef(null);

  // Parse the target to handle "50,000" or "4.9" etc.
  const numericTarget = parseFloat(String(target).replace(/[^0-9.]/g, ''));
  const isDecimal = Number.isInteger(numericTarget) === false;

  useEffect(() => {
    if (!inView) return;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * numericTarget;
      setCount(isDecimal ? Math.round(current * 10) / 10 : Math.floor(current));
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      } else {
        setCount(numericTarget);
      }
    };

    frameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameRef.current);
  }, [inView, numericTarget, duration, isDecimal]);

  const formatted = isDecimal ? count.toFixed(1) : count.toLocaleString('en-IN');

  return (
    <span ref={ref}>
      {prefix}{formatted}{suffix}
    </span>
  );
}
