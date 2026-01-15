import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { motion, useScroll, useTransform } from 'framer-motion';
import logo from '@/assets/illustrations/logo.png';

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Scroll detection for navbar state change
  const { scrollY } = useScroll();
  
  // Threshold-based transitions (activate after 50px scroll)
  const headerBg = useTransform(
    scrollY,
    [0, 50],
    ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.95)']
  );
  
  const headerShadow = useTransform(
    scrollY,
    [0, 50],
    ['0px 0px 0px rgba(0, 0, 0, 0)', '0px 10px 30px rgba(0, 0, 0, 0.1)']
  );
  
  const headerPadding = useTransform(
    scrollY,
    [0, 50],
    ['20px', '12px']
  );

  // Helper to check if route is active
  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.header 
      className="sticky top-0 z-50 backdrop-blur-md border-b border-purple-100/50"
      style={{
        backgroundColor: headerBg,
        boxShadow: headerShadow,
      }}
      // Respect reduced motion preference
      transition={{ duration: 0.25, ease: 'easeOut' }}
    >
      <motion.div 
        className="container mx-auto px-6"
        style={{ paddingTop: headerPadding, paddingBottom: headerPadding }}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <motion.img 
              src={logo} 
              alt="patashala.dev logo" 
              className="w-10 h-10 object-contain cursor-pointer"
              whileHover={{ 
                scale: 1.2, 
                rotate: [0, -10, 10, -10, 0],
                transition: { duration: 0.5 }
              }}
              whileTap={{ 
                scale: 0.9,
                rotate: 360,
                transition: { duration: 0.6 }
              }}
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <span className="font-display text-2xl font-bold text-brand-purple">
              patashala<span className="text-brand-teal">.dev</span>
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link 
              to="/" 
              className={`font-medium transition-colors ${
                isActive('/') 
                  ? 'text-brand-purple' 
                  : 'text-brand-neutral-dark hover:text-brand-purple'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className={`font-medium transition-colors ${
                isActive('/services') 
                  ? 'text-brand-purple' 
                  : 'text-brand-neutral-dark hover:text-brand-purple'
              }`}
            >
              Services
            </Link>
            <Link 
              to="/courses" 
              className={`font-medium transition-colors ${
                isActive('/courses') 
                  ? 'text-brand-purple' 
                  : 'text-brand-neutral-dark hover:text-brand-purple'
              }`}
            >
              Courses
            </Link>
            <Link 
              to="/about" 
              className={`font-medium transition-colors ${
                isActive('/about') 
                  ? 'text-brand-purple' 
                  : 'text-brand-neutral-dark hover:text-brand-purple'
              }`}
            >
              About
            </Link>
            <Button variant="primary" size="sm" onClick={() => navigate('/contact')}>
              Get Started
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-brand-purple">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </motion.div>
    </motion.header>
  );
};
