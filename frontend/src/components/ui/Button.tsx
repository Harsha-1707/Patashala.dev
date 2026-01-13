import { ReactNode, useState } from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}

const variantStyles = {
  primary: 'bg-brand-purple hover:bg-brand-purple-dark text-white shadow-lg hover:shadow-xl',
  secondary: 'bg-brand-teal hover:bg-brand-teal-dark text-white shadow-lg hover:shadow-xl',
  ghost: 'bg-transparent border-2 border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white',
};

const sizeStyles = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export const Button = ({ 
  variant = 'primary', 
  size = 'md',
  children, 
  className = '',
  onClick,
  disabled,
}: ButtonProps) => {
  const [ripples, setRipples] = useState<Array<{ x: number; y: number; id: number; size: number }>>([]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const newRipple = { x, y, id: Date.now(), size: Math.max(rect.width, rect.height) };
    setRipples([...ripples, newRipple]);
    
    setTimeout(() => {
      setRipples(prev => prev.filter(r => r.id !== newRipple.id));
    }, 600);
    
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <motion.button
      className={`
        font-display font-semibold rounded-xl
        transition-all duration-200
        relative overflow-hidden
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${className}
        disabled:opacity-50 disabled:cursor-not-allowed
      `}
      onClick={handleClick}
      disabled={disabled}
      whileHover={{ 
        scale: 1.05,
        boxShadow: '0 10px 40px rgba(99, 102, 241, 0.3)',
      }}
      whileTap={{ 
        scale: 0.95,
      }}
    >
      {/* Ripple effect */}
      {ripples.map(ripple => (
        <motion.span
          key={ripple.id}
          className="absolute rounded-full bg-white/30 pointer-events-none"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: ripple.size,
            height: ripple.size,
            transform: 'translate(-50%, -50%)',
          }}
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 4, opacity: 0 }}
          transition={{ duration: 0.6 }}
        />
      ))}
      
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};
