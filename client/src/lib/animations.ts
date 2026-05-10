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

// ============================================
// MICRO-ANIMATIONS (Anime-Style)
// ============================================

// Navigation underline bounce
export const navUnderlineVariants = {
  initial: { scaleX: 0, originX: 0 },
  hover: { 
    scaleX: 1,
    transition: { duration: 0.4, ease: [0.34, 1.56, 0.64, 1] as any }
  },
};

// Button arrow dance
export const arrowDanceVariants = {
  initial: { y: 0 },
  hover: {
    y: [0, -6, 0],
    transition: { duration: 0.6, ease: "easeInOut" as any, repeat: Infinity }
  },
};

// Pulse glow animation
export const pulseGlowVariants = {
  initial: { scale: 1, opacity: 0.8 },
  animate: {
    scale: [1, 1.05, 1],
    opacity: [0.8, 1, 0.8],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
  },
};

// Skill tag bounce
export const tagBounceVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.34, 1.56, 0.64, 1] as any,
    },
  }),
};

// Gallery image glow
export const galleryGlowVariants = {
  initial: { scale: 1, filter: "brightness(1)" },
  hover: {
    scale: 1.05,
    filter: "brightness(1.1) drop-shadow(0 0 20px rgba(217, 119, 6, 0.4))",
    transition: { duration: 0.3, ease: "easeOut" as any }
  },
};

// Timeline dot pulse
export const timelineDotVariants = {
  initial: { scale: 1, opacity: 1 },
  animate: {
    scale: [1, 1.3, 1],
    opacity: [1, 0.6, 1],
    transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" as any }
  },
};

// Social icon spin
export const socialSpinVariants = {
  initial: { rotate: 0 },
  hover: {
    rotate: 360,
    transition: { duration: 0.6, ease: "easeInOut" as any }
  },
};

// Shine effect (sweeps across)
export const shineVariants = {
  initial: { x: "-100%" },
  animate: {
    x: "100%",
    transition: { duration: 2, ease: "easeInOut", repeat: Infinity, repeatDelay: 3 }
  },
};

// Form input focus underline
export const inputUnderlineVariants = {
  initial: { scaleX: 0, originX: 0.5 },
  focus: {
    scaleX: 1,
    transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] as any }
  },
  blur: {
    scaleX: 0,
    transition: { duration: 0.2 }
  },
};

// Status badge pulse
export const statusPulseVariants = {
  animate: {
    scale: [1, 1.08, 1],
    transition: { duration: 2.5, repeat: Infinity, ease: "easeInOut" as any }
  },
};
