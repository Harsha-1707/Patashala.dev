import { motion } from 'framer-motion';
import pencilMascot from '@/assets/illustrations/pencil-mascot.png';

interface PencilMascotProps {
  size?: 'small' | 'medium' | 'large';
  className?: string;
  animate?: boolean;
  float?: boolean; // New: continuous floating animation
}

const sizeClasses = {
  small: 'w-12 h-12',
  medium: 'w-24 h-24',
  large: 'w-32 h-32 md:w-40 md:h-40',
};

export const PencilMascot = ({ 
  size = 'medium', 
  className = '',
  animate = true,
  float = false
}: PencilMascotProps) => {
  const MotionImage = motion.img;

  if (!animate && !float) {
    return (
      <img 
        src={pencilMascot} 
        alt="Patashala Pencil Mascot" 
        className={`${sizeClasses[size]} ${className} object-contain`}
      />
    );
  }

  return (
    <MotionImage
      src={pencilMascot}
      alt="Patashala Pencil Mascot"
      className={`${sizeClasses[size]} ${className} object-contain cursor-pointer`}
      initial={float ? { y: 0 } : undefined}
      animate={float ? {
        y: [-8, 8, -8],
        rotate: [-2, 2, -2],
      } : undefined}
      transition={float ? {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      } : undefined}
      whileHover={{
        rotate: 10,
        y: -12,
        scale: 1.05,
        transition: {
          duration: 0.3,
          ease: [0.34, 1.56, 0.64, 1], // Organic bounce easing
        }
      }}
      whileTap={{
        scale: 0.95,
        rotate: -5,
        transition: { duration: 0.1 }
      }}
    />
  );
};
