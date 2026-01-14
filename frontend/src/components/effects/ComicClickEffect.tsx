import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ComicEffect {
  id: number;
  x: number;
  y: number;
  text: string;
  color: string;
}

const COMIC_WORDS = ['POW!', 'BAM!', 'ZAP!', 'BOOM!', 'WHAM!'];
const COLORS = ['#ff6b6b', '#4ecdc4', '#ffe66d', '#ff9ff3', '#54a0ff'];

export const ComicClickEffect = () => {
  const [effects, setEffects] = useState<ComicEffect[]>([]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const randomWord = COMIC_WORDS[Math.floor(Math.random() * COMIC_WORDS.length)];
      const randomColor = COLORS[Math.floor(Math.random() * COLORS.length)];
      
      const newEffect: ComicEffect = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
        text: randomWord,
        color: randomColor,
      };

      setEffects(prev => [...prev, newEffect]);

      // Remove effect after animation
      setTimeout(() => {
        setEffects(prev => prev.filter(effect => effect.id !== newEffect.id));
      }, 1000);
    };

    // Only add effect on specific interactive elements
    const interactiveElements = document.querySelectorAll('button, a, [role="button"]');
    
    interactiveElements.forEach(element => {
      element.addEventListener('click', handleClick as EventListener);
    });

    return () => {
      interactiveElements.forEach(element => {
        element.removeEventListener('click', handleClick as EventListener);
      });
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      <AnimatePresence>
        {effects.map(effect => (
          <motion.div
            key={effect.id}
            initial={{ 
              opacity: 0, 
              scale: 0,
              x: effect.x - 40,
              y: effect.y - 40,
              rotate: -12
            }}
            animate={{ 
              opacity: [0, 1, 1, 0], 
              scale: [0.5, 1.2, 1.3, 0.8],
              rotate: [12, -8, 15, 0],
              y: effect.y - 80
            }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute font-display text-4xl font-black"
            style={{
              color: effect.color,
              textShadow: `
                3px 3px 0px #000,
                -1px -1px 0px #fff,
                2px 2px 8px rgba(0,0,0,0.5)
              `,
              WebkitTextStroke: '2px #000',
              paintOrder: 'stroke fill'
            }}
          >
            {effect.text}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};
