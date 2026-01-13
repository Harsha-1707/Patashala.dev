import { ReactNode, useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

interface IllustratedCardProps {
  children: ReactNode;
  illustration?: string;
  illustrationAlt?: string;
  illustrationPosition?: 'top' | 'right' | 'bottom' | 'left';
  className?: string;
  interactive3D?: boolean; // New: enable 3D tilt effect
}

export const IllustratedCard = ({
  children,
  illustration,
  illustrationAlt = 'Illustration',
  illustrationPosition = 'top',
  className = '',
  interactive3D = true,
}: IllustratedCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!interactive3D) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  const isVertical = illustrationPosition === 'top' || illustrationPosition === 'bottom';
  
  return (
    <motion.div
      className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow ${className}`}
      style={interactive3D ? {
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      } : undefined}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      whileHover={interactive3D ? { scale: 1.02, z: 50 } : { scale: 1.02 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`flex ${isVertical ? 'flex-col' : 'flex-row'} gap-6 items-center`}>
        {(illustrationPosition === 'top' || illustrationPosition === 'left') && illustration && (
          <motion.div 
            className="flex-shrink-0"
            animate={isHovered ? {
              scale: 1.05,
              rotate: [0, -2, 2, 0],
            } : {}}
            transition={{ duration: 0.5 }}
          >
            <img 
              src={illustration} 
              alt={illustrationAlt}
              className="w-full max-w-xs object-contain"
              style={{ transform: 'translateZ(20px)' }}
            />
          </motion.div>
        )}
        
        <div className="flex-1" style={{ transform: 'translateZ(10px)' }}>
          {children}
        </div>

        {(illustrationPosition === 'bottom' || illustrationPosition === 'right') && illustration && (
          <motion.div 
            className="flex-shrink-0"
            animate={isHovered ? {
              scale: 1.05,
              rotate: [0, 2, -2, 0],
            } : {}}
            transition={{ duration: 0.5 }}
          >
            <img 
              src={illustration} 
              alt={illustrationAlt}
              className="w-full max-w-xs object-contain"
              style={{ transform: 'translateZ(20px)' }}
            />
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};
