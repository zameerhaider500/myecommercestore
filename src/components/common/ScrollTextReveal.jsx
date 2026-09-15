import React, { memo, useRef } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from 'framer-motion';

/**
 * Individual animated text line
 */
const GlitchSlideLine = memo(function GlitchSlideLine({
  text,
  progress,
  index,
  total,
  fontSize,
  letterSpacing,
  baseOpacity = 1,
}) {
  // Spread the animations across the scroll progress,
  // but keep the whole sequence relatively compact.
  const stagger = index / Math.max(total - 1, 1);

  const start = 0.18 + stagger * 0.24;
  const end = start + 0.14;
  const middle = (start + end) / 2;

  // Vertical slide
  const yRaw = useTransform(
    progress,
    [0, start, end, 1],
    [60, 60, 0, -35]
  );

  const y = useSpring(yRaw, {
    stiffness: 140,
    damping: 24,
    mass: 0.6,
  });

  // RGB glitch intensity
  const glitchOffset = useTransform(
    progress,
    [0, start, middle, end, 1],
    [0, 8, 2, 0, -1.5]
  );

  // Opacity
  const opacity = useTransform(
    progress,
    [0, start, middle, end, 1],
    [0, 0, 1, baseOpacity, 0]
  );

  // Blur
  const filter = useTransform(
    progress,
    [0, start, end, 1],
    [
      'blur(8px)',
      'blur(4px)',
      'blur(0px)',
      'blur(2px)',
    ]
  );

  // RGB split
  const textShadow = useTransform(glitchOffset, (offset) => {
    if (Math.abs(offset) < 0.5) {
      return 'none';
    }

    const shift = Math.abs(offset);

    return `
      ${shift}px 0 0 rgba(255, 0, 0, 0.65),
      -${shift}px 0 0 rgba(0, 100, 255, 0.65)
    `;
  });

  return (
    <motion.div
      style={{
        y,
        opacity,
        filter,
        textShadow,

        fontSize,
        letterSpacing,
        fontWeight: 900,
        lineHeight: 0.92,

        color: '#fff',
        textTransform: 'uppercase',
        textAlign: 'center',

        whiteSpace: 'nowrap',
        userSelect: 'none',

        // Prevent accidental overflow from the glitch effect
        maxWidth: '100%',

        // Better rendering performance
        willChange: 'transform, opacity, filter, text-shadow',

        transformStyle: 'preserve-3d',
      }}
    >
      {text}
    </motion.div>
  );
});


const ScrollTextReveal = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const lines = [
    {
      text: 'ELEVATE',
      size: 'clamp(1.15rem, 4vw, 3rem)',
      spacing: '0.18em',
      opacity: 0.6,
    },
    {
      text: 'YOUR',
      size: 'clamp(1.8rem, 7vw, 4.5rem)',
      spacing: '0.08em',
      opacity: 1,
    },
    {
      text: 'DAILY',
      size: 'clamp(2.8rem, 12vw, 7rem)',
      spacing: '0.025em',
      opacity: 1,
    },
    {
      text: 'ESSENTIALS',
      size: 'clamp(2.8rem, 12vw, 7rem)',
      spacing: '0.025em',
      opacity: 1,
    },
    {
      text: 'TODAY',
      size: 'clamp(1.8rem, 7vw, 4.5rem)',
      spacing: '0.08em',
      opacity: 1,
    },
  ];

  return (
    <section
      ref={containerRef}
      style={{
        position: 'relative',

        // Much tighter than 130vh
        minHeight: '100vh',
        height: '100svh',

        background: '#000',

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        overflow: 'hidden',

        // Responsive horizontal spacing
        padding: 'clamp(1rem, 4vw, 3rem)',

        boxSizing: 'border-box',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '1100px',

          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',

          // Small responsive gap instead of large margins
          gap: 'clamp(0.15rem, 0.6vw, 0.5rem)',

          overflow: 'visible',
        }}
      >
        {lines.map((line, index) => (
          <GlitchSlideLine
            key={line.text}
            text={line.text}
            progress={scrollYProgress}
            index={index}
            total={lines.length}
            fontSize={line.size}
            letterSpacing={line.spacing}
            baseOpacity={line.opacity}
          />
        ))}
      </div>
    </section>
  );
};

export default ScrollTextReveal;
