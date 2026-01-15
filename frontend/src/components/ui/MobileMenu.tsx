import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Button } from '@/components/ui/Button';
import logo from '@/assets/illustrations/logo.png';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const location = useLocation();

  // Close menu when route changes
  useEffect(() => {
    onClose();
  }, [location.pathname, onClose]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Helper to check if route is active
  const isActive = (path: string) => location.pathname === path;

  const menuItems = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/courses', label: 'Courses' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Get Started' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
          />

          {/* Menu Drawer */}
          <motion.div
            className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white shadow-2xl z-50 overflow-y-auto"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <img 
                    src={logo} 
                    alt="patashala.dev logo" 
                    className="w-8 h-8 object-contain"
                  />
                  <span className="font-display text-xl font-bold text-brand-purple">
                    patashala<span className="text-brand-teal">.dev</span>
                  </span>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors touch-target"
                  aria-label="Close menu"
                >
                  <svg 
                    className="w-6 h-6 text-brand-neutral-dark" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M6 18L18 6M6 6l12 12" 
                    />
                  </svg>
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex-1 p-6">
                <ul className="space-y-2">
                  {menuItems.map((item, index) => (
                    <motion.li
                      key={item.path}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      {item.path === '/contact' ? (
                        <Link to={item.path} className="block">
                          <Button 
                            variant="primary" 
                            size="lg" 
                            className="w-full justify-center"
                          >
                            {item.label}
                          </Button>
                        </Link>
                      ) : (
                        <Link
                          to={item.path}
                          className={`
                            block px-4 py-4 rounded-lg font-medium transition-all touch-target
                            ${isActive(item.path)
                              ? 'bg-brand-purple/10 text-brand-purple'
                              : 'text-brand-neutral-dark hover:bg-gray-50 hover:text-brand-purple'
                            }
                          `}
                        >
                          {item.label}
                        </Link>
                      )}
                    </motion.li>
                  ))}
                </ul>
              </nav>

              {/* Footer */}
              <div className="p-6 border-t border-gray-100 bg-gray-50">
                <p className="text-sm text-brand-neutral-mid text-center">
                  Learn by building real projects
                </p>
                <div className="flex justify-center gap-4 mt-4">
                  <a
                    href="https://discord.gg/patashala"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg hover:bg-brand-purple/10 transition-colors touch-target"
                    aria-label="Join Discord"
                  >
                    <span className="text-2xl">💬</span>
                  </a>
                  <a
                    href="https://github.com/patashala-dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg hover:bg-brand-purple/10 transition-colors touch-target"
                    aria-label="GitHub"
                  >
                    <span className="text-2xl">💻</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
