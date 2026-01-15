import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import logo from '@/assets/illustrations/logo.png';
import { fadeUp, defaultViewport } from '@/utils/motionVariants';
import { useNavigate } from 'react-router-dom';

export const FinalCTA = () => {
  const navigate = useNavigate();
  
  return (
    <section className="py-12 md:py-20 lg:py-24 bg-gradient-to-br from-brand-purple via-purple-600 to-brand-teal relative overflow-hidden">
      {/* Animated decorative elements */}
      <motion.div 
        className="absolute top-10 left-10 w-40 h-40 md:w-64 md:h-64 bg-white/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.5, 1],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-10 right-10 w-48 h-48 md:w-80 md:h-80 bg-white/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -40, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Floating shapes */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-4 h-4 bg-white/20 rounded-full"
          style={{
            left: `${10 + i * 12}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.2
          }}
        />
      ))}

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          <motion.div 
            className="flex justify-center mb-6 md:mb-8"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
          >
            <motion.div
              whileHover={{ 
                scale: 1.3, 
                rotate: 360,
                filter: "drop-shadow(0 0 20px rgba(255,255,255,0.8))"
              }}
              whileTap={{ 
                scale: 0.8,
                rotate: -360
              }}
              transition={{ duration: 0.6 }}
            >
              <motion.img 
                src={logo} 
                alt="patashala.dev logo" 
                className="w-16 h-16 md:w-20 md:h-20 object-contain cursor-pointer"
                animate={{
                  y: [-10, 10, -10],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </motion.div>

          <motion.h2 
            className="text-white mb-4 md:mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Ready to Build Something Amazing?
          </motion.h2>

          <motion.p 
            className="text-base md:text-lg lg:text-xl text-white/90 mb-8 md:mb-10 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Join thousands of developers learning by building production-grade projects. 
            Start your journey today.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
            >
              <Button 
                variant="secondary" 
                size="lg"
                className="bg-white text-brand-purple hover:bg-white/90 hover:text-brand-purple-dark shadow-2xl"
                onClick={() => navigate('/contact')}
              >
                Get Started Free →
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
            >
              <Button 
                variant="ghost" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-brand-purple"
                onClick={() => navigate('/courses')}
              >
                Browse Projects
              </Button>
            </motion.div>
          </motion.div>

          <motion.p 
            className="text-white/70 text-xs md:text-sm mt-6 md:mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            No credit card required • Free tier available • Cancel anytime
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};
