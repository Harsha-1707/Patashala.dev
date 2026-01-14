// Centralized motion variants for scroll reveal animations
// Respects prefers-reduced-motion preferences

const prefersReducedMotion = typeof window !== 'undefined' 
  ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
  : false;

// Section fade-up reveal (for entire sections)
export const fadeUp = {
  hidden: { 
    opacity: prefersReducedMotion ? 1 : 0, 
    y: prefersReducedMotion ? 0 : 24 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: prefersReducedMotion ? 0 : 0.4,
      ease: 'easeOut'
    }
  }
};

// Stagger container (for parent elements with multiple children)
export const staggerContainer = {
  hidden: { opacity: prefersReducedMotion ? 1 : 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: prefersReducedMotion ? 0 : 0.1,
      delayChildren: prefersReducedMotion ? 0 : 0.2
    }
  }
};

// Stagger item (for children within stagger container)
export const staggerItem = {
  hidden: { 
    opacity: prefersReducedMotion ? 1 : 0, 
    y: prefersReducedMotion ? 0 : 20 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: prefersReducedMotion ? 0 : 0.3,
      ease: 'easeOut'
    }
  }
};

// Slide in from left
export const slideInLeft = {
  hidden: { 
    opacity: prefersReducedMotion ? 1 : 0, 
    x: prefersReducedMotion ? 0 : -50 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: prefersReducedMotion ? 0 : 0.5,
      ease: 'easeOut'
    }
  }
};

// Slide in from right
export const slideInRight = {
  hidden: { 
    opacity: prefersReducedMotion ? 1 : 0, 
    x: prefersReducedMotion ? 0 : 50 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: prefersReducedMotion ? 0 : 0.5,
      ease: 'easeOut'
    }
  }
};

// Scale up reveal (for elements that need emphasis)
export const scaleUp = {
  hidden: { 
    opacity: prefersReducedMotion ? 1 : 0, 
    scale: prefersReducedMotion ? 1 : 0.9 
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: prefersReducedMotion ? 0 : 0.4,
      ease: 'easeOut'
    }
  }
};

// Viewport config for whileInView (trigger once, early threshold)
export const defaultViewport = {
  once: true,
  margin: '0px 0px -100px 0px', // Trigger 100px before element enters viewport
  amount: 0.2 // Animate when 20% of element is visible
};
