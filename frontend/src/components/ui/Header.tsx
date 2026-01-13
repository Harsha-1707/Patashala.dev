import { Link } from 'react-router-dom';
import { PencilMascot } from '@/components/brand/PencilMascot';
import { Button } from '@/components/ui/Button';

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo with Mascot */}
          <Link to="/" className="flex items-center gap-3 group">
            <PencilMascot size="small" />
            <span className="font-display text-2xl font-bold text-brand-purple">
              patashala<span className="text-brand-teal">.dev</span>
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link 
              to="/#what" 
              className="text-brand-neutral-dark hover:text-brand-purple transition-colors font-medium"
            >
              What We Do
            </Link>
            <Link 
              to="/#projects" 
              className="text-brand-neutral-dark hover:text-brand-purple transition-colors font-medium"
            >
              Projects
            </Link>
            <Link 
              to="/#community" 
              className="text-brand-neutral-dark hover:text-brand-purple transition-colors font-medium"
            >
              Community
            </Link>
            <Button variant="primary" size="sm">
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
      </div>
    </header>
  );
};
