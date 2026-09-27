import { motion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';

type Direction = 'up' | 'left' | 'right' | 'scale' | 'none';

const variantsFor = (direction: Direction): Variants => {
  switch (direction) {
    case 'left':
      return {
        hidden: { opacity: 0, x: -36 },
        show: { opacity: 1, x: 0 },
      };
    case 'right':
      return {
        hidden: { opacity: 0, x: 36 },
        show: { opacity: 1, x: 0 },
      };
    case 'scale':
      return {
        hidden: { opacity: 0, scale: 0.92 },
        show: { opacity: 1, scale: 1 },
      };
    case 'none':
      return {
        hidden: { opacity: 0 },
        show: { opacity: 1 },
      };
    default:
      return {
        hidden: { opacity: 0, y: 28 },
        show: { opacity: 1, y: 0 },
      };
  }
};

export function Reveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  className,
  once = true,
  amount = 0.3,
}: {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  amount?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      variants={variantsFor(direction)}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/** Stagger container: wrap a list of children that each use `staggerItem` variants */
export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};
