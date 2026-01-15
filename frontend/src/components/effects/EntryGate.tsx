import { useState, useEffect, lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '@/assets/illustrations/logo.png';
import { analytics } from '@/utils/analytics';

// Lazy load Prism for performance
const Prism = lazy(() => import('@/components/effects/Prism'));

const STORAGE_KEY = 'hasEnteredSite';

interface EntryGateProps {
  children: React.ReactNode;
}

export const EntryGate = ({ children }: EntryGateProps) => {
  const [hasEntered, setHasEntered] = useState(false);
  const [showEntry, setShowEntry] = useState(true);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Check if user has already entered before
    const previouslyEntered = localStorage.getItem(STORAGE_KEY) === 'true';
    
    // Skip entry screen if reduced motion OR previously entered
    if (prefersReducedMotion || previouslyEntered) {
      setHasEntered(true);
      setShowEntry(false);
      // Track that entry was skipped
      if (previouslyEntered) {
        analytics.trackEntryGate('skipped');
      }
    }
  }, []);

  const handleEnter = () => {
    // Track entry gate interaction
    analytics.trackEntryGate('entered');
    
    // Mark as entered in localStorage
    localStorage.setItem(STORAGE_KEY, 'true');
    setHasEntered(true);
    
    // Delay hiding entry screen for smooth transition
    setTimeout(() => {
      setShowEntry(false);
    }, 800);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {showEntry && !hasEntered && (
          <motion.div
            key="entry"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="fixed inset-0 z-50 flex items-center justify-center cursor-pointer"
            onClick={handleEnter}
            role="button"
            aria-label="Click to enter site"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                handleEnter();
              }
            }}
          >
            {/* Prism background - fullscreen */}
            <div className="absolute inset-0">
              <Suspense fallback={<div className="absolute inset-0 bg-black" />}>
                <Prism
                  animationType="3drotate"
                  timeScale={0.3}
                  height={3.5}
                  baseWidth={5.5}
                  scale={3.6}
                  hueShift={0.3}
                  colorFrequency={1}
                  noise={0}
                  glow={1.5}
                  bloom={1.2}
                  suspendWhenOffscreen={false}
                />
              </Suspense>
            </div>

            {/* Logo centered in prism glow - minimal overlay text */}
            <motion.div
              className="relative z-10 flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 1, ease: 'easeOut' }}
            >
              {/* Logo - larger and central */}
              <motion.img
                src={logo}
                alt="Patashala.Dev"
                className="w-32 h-32 drop-shadow-2xl"
                animate={{
                  rotate: [0, 3, -3, 0],
                  scale: [1, 1.02, 1]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              />

              {/* Minimal enter hint - Cosmic Sans */}
              <motion.div
                className="mt-8 text-white/80 text-lg font-heading font-semibold tracking-wide"
                animate={{
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              >
                Click to Enter
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main app - fades in when entry dismissed */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: hasEntered ? 1 : 0 }}
        transition={{ duration: 0.6, delay: hasEntered ? 0.3 : 0 }}
      >
        {children}
      </motion.div>
    </>
  );
};
