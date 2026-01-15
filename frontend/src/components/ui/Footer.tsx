import { Link } from 'react-router-dom';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-brand-purple via-purple-700 to-brand-teal text-white py-8 md:py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
          {/* Company Info */}
          <div className="text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
              patashala<span className="text-brand-teal">.dev</span>
            </h3>
            <p className="text-white/80 mb-3 md:mb-4 text-sm md:text-base">
              Learn by building production-grade projects. Master real-world development skills.
            </p>
            <p className="text-white/60 text-xs md:text-sm">
              📍 Hyderabad, India
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-white/80 hover:text-white transition-colors text-sm md:text-base inline-block py-1 touch-target">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-white/80 hover:text-white transition-colors text-sm md:text-base inline-block py-1 touch-target">
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/80 hover:text-white transition-colors text-sm md:text-base inline-block py-1 touch-target">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-white transition-colors text-sm md:text-base inline-block py-1 touch-target">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Get in Touch</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="mailto:hello@patashala.dev"
                  className="text-white/80 hover:text-white transition-colors flex items-center justify-center md:justify-start gap-2 text-sm md:text-base touch-target"
                >
                  <span>📧</span> hello@patashala.dev
                </a>
              </li>
              <li>
                <a 
                  href="https://discord.gg/patashala"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors flex items-center justify-center md:justify-start gap-2 text-sm md:text-base touch-target"
                >
                  <span>💬</span> Join our Discord
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/patashala-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors flex items-center justify-center md:justify-start gap-2 text-sm md:text-base touch-target"
                >
                  <span>💻</span> GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/20 pt-4 md:pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
            <p className="text-white/60 text-xs md:text-sm text-center md:text-left">
              © {currentYear} Patashala.Dev. All rights reserved.
            </p>
            <div className="flex gap-4 md:gap-6 text-xs md:text-sm">
              <Link to="/privacy" className="text-white/60 hover:text-white transition-colors touch-target">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-white/60 hover:text-white transition-colors touch-target">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
