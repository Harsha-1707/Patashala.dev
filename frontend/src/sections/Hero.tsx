import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import heroIllustration from '@/assets/illustrations/hero-illustration.png';
import logo from '@/assets/illustrations/logo.png';
import { useNavigate } from 'react-router-dom';
import DecryptedText from '@/components/effects/DecryptedText';

export const Hero = () => {
  const navigate = useNavigate();
  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  const { scrollY } = useScroll();
  
  // Parallax for background decorative elements only (disabled if reduced motion)
  const bgBlobY1 = useTransform(scrollY, [0, 500], [0, prefersReducedMotion ? 0 : 80]);
  const bgBlobY2 = useTransform(scrollY, [0, 500], [0, prefersReducedMotion ? 0 : 50]);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-brand-neutral-light via-purple-50 to-teal-50">
      {/* Animated background decorative elements with subtle parallax */}
      <motion.div 
        className="absolute top-10 right-10 w-20 h-20 md:w-32 md:h-32 bg-brand-purple/10 rounded-full blur-3xl"
        style={{ y: bgBlobY1 }}
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-20 left-10 md:left-20 w-24 h-24 md:w-40 md:h-40 bg-brand-teal/10 rounded-full blur-3xl"
        style={{ y: bgBlobY2 }}
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -15, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Content (static for readability) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 bg-brand-purple/10 px-3 py-2 md:px-4 rounded-full mb-4 md:mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.img 
                src={logo} 
                alt="patashala.dev logo" 
                className="w-5 h-5 md:w-6 md:h-6 object-contain"
                animate={{
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <span className="text-brand-purple font-semibold text-xs md:text-sm">
                Learn by Building Real Projects
              </span>
            </motion.div>

            <motion.h1 
              className="mb-4 md:mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <DecryptedText 
                text="Build " 
                animateOn="view"
                revealDirection="start"
                maxIterations={10}
                speed={60}
                sequential={true}
              />
              <span className="text-gradient-purple">
                <DecryptedText 
                  text="Real Projects" 
                  animateOn="view"
                  revealDirection="center"
                  maxIterations={15}
                  speed={80}
                  sequential={true}
                />
              </span>,
              <br />
              <DecryptedText 
                text="Learn " 
                animateOn="view"
                revealDirection="start"
                maxIterations={10}
                speed={60}
                sequential={true}
              />
              <span className="text-gradient-purple">
                <DecryptedText 
                  text="Real Skills" 
                  animateOn="view"
                  revealDirection="center"
                  maxIterations={15}
                  speed={80}
                  sequential={true}
                />
              </span>
            </motion.h1>

            <motion.p 
              className="text-base md:text-xl text-brand-neutral-mid mb-6 md:mb-8 leading-relaxed max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
            >
              Learn development by building production-grade applications. No theory, no tutorials—just real projects you can deploy.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Button variant="primary" size="lg" onClick={() => navigate('/courses')}>
                View Courses
              </Button>
              <Button variant="ghost" size="lg" onClick={() => navigate('/courses')}>
                See Projects
              </Button>
            </motion.div>

            {/* Animated Stats */}
            <motion.div 
              className="mt-8 md:mt-12 grid grid-cols-3 gap-4 md:gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              {[
                { value: '500+', label: 'Projects Built', color: 'text-brand-purple' },
                { value: '1,200+', label: 'Learners', color: 'text-brand-teal' },
                { value: '50+', label: 'Technologies', color: 'text-brand-orange' }
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.7 + i * 0.1, type: 'spring', stiffness: 200 }}
                  whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                  className="text-center md:text-left"
                >
                  <div className={`text-xl md:text-3xl font-bold ${stat.color}`}>{stat.value}</div>
                  <div className="text-xs md:text-sm text-brand-neutral-mid">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Illustration (static for stability) */}
          <motion.div
            className="relative order-first lg:order-last"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
          >
            <div className="relative bg-white/40 backdrop-blur-md rounded-2xl md:rounded-3xl p-4 md:p-8 shadow-lg border border-white/20">
              <motion.img 
                src={heroIllustration} 
                alt="Learning workspace illustration"
                className="w-full max-w-2xl mx-auto"
                animate={{
                  y: [-10, 10, -10],
                  rotate: [-1, 1, -1],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
