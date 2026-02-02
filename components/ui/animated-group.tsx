'use client';

import { ReactNode } from 'react';
import { motion, Variants } from 'motion/react';
import React from 'react';

export type PresetType =
  | 'fade'
  | 'slide'
  | 'scale'
  | 'blur'
  | 'blur-slide'
  | 'zoom'
  | 'flip'
  | 'bounce'
  | 'rotate'
  | 'swing';

export type AnimatedGroupProps = {
  children: ReactNode;
  className?: string;
  variants?: {
    container?: Variants;
    item?: Variants;
  };
  preset?: PresetType;
  as?: React.ElementType;
  asChild?: React.ElementType;
};

const defaultContainerVariants: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const defaultItemVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const presetVariants: Record<PresetType, Variants> = {
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  slide: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  },
  blur: {
    hidden: { opacity: 0, filter: 'blur(4px)' },
    visible: { opacity: 1, filter: 'blur(0px)' },
  },
  'blur-slide': {
    hidden: { opacity: 0, filter: 'blur(4px)', y: 20 },
    visible: { opacity: 1, filter: 'blur(0px)', y: 0 },
  },
  zoom: {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: 'spring', stiffness: 300, damping: 20 },
    },
  },
  flip: {
    hidden: { opacity: 0, rotateX: -90 },
    visible: {
      opacity: 1,
      rotateX: 0,
      transition: { type: 'spring', stiffness: 300, damping: 20 },
    },
  },
  bounce: {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 400, damping: 10 },
    },
  },
  rotate: {
    hidden: { opacity: 0, rotate: -180 },
    visible: {
      opacity: 1,
      rotate: 0,
      transition: { type: 'spring', stiffness: 200, damping: 15 },
    },
  },
  swing: {
    hidden: { opacity: 0, rotate: -10 },
    visible: {
      opacity: 1,
      rotate: 0,
      transition: { type: 'spring', stiffness: 300, damping: 8 },
    },
  },
};

function AnimatedGroup({
  children,
  className,
  variants,
  preset,
}: AnimatedGroupProps) {
  const containerVariants = variants?.container || defaultContainerVariants;
  const itemVariants = variants?.item || (preset ? presetVariants[preset] : defaultItemVariants);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={containerVariants}
      className={className}
    >
      {React.Children.map(children, (child, index) => (
        <motion.div key={index} variants={itemVariants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}

export { AnimatedGroup };
