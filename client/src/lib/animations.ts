/**
 * Animation Constants and Utilities
 * Kinetic Editorial Style
 */

export const ANIMATION_TIMINGS = {
  // Entrance animations
  entrance: 0.6,
  entranceStagger: 0.1,
  
  // Hover effects
  hover: 0.3,
  
  // Scroll reveals
  scrollReveal: 0.8,
  scrollStagger: 0.05,
  
  // Floating animations
  float: 4,
};

export const ANIMATION_EASING = {
  entrance: "easeOut" as const,
  hover: "easeInOut" as const,
  scrollReveal: "easeOut" as const,
};

// Variant presets for common animations
export const ANIMATION_VARIANTS = {
  // Fade and slide up
  fadeInUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  },
  
  // Fade only
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  
  // Scale and fade
  scaleIn: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
  },
  
  // Slide from left
  slideInLeft: {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -30 },
  },
  
  // Slide from right
  slideInRight: {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 30 },
  },
  
  // Floating animation
  float: {
    animate: { y: [0, -8, 0] },
  },
};

// Container variants for staggered animations
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: ANIMATION_TIMINGS.entranceStagger,
      delayChildren: 0.1,
    },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION_TIMINGS.entrance,
      ease: ANIMATION_EASING.entrance,
    },
  },
};
