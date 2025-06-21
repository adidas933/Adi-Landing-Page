// components/Animations/FadeInSection.tsx
import { motion, useAnimation, Variants } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

interface FadeInSectionProps {
  children: React.ReactNode;
  once?: boolean;
  delay?: number;
  yOffset?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function FadeInSection({
  children,
  once = true,
  delay = 0,
  yOffset = 30,
  className,
  style,
}: FadeInSectionProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once, margin: '0px 0px -100px 0px' });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const variants: Variants = {
    hidden: { opacity: 0, y: yOffset },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut', delay },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
