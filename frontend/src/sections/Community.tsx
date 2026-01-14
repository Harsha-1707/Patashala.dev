import { motion } from 'framer-motion';
import { fadeUp, slideInLeft, slideInRight, staggerContainer, staggerItem, defaultViewport } from '@/utils/motionVariants';

export const Community = () => {
  return (
    <section id="community" className="py-24 bg-gradient-to-br from-white via-purple-50 to-teal-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left: Illustration with slide-in */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
          >
            <div className="w-full max-w-lg mx-auto p-12 bg-white rounded-3xl shadow-lg">
              <motion.div
                className="text-center space-y-6"
                animate={{
                  y: [-8, 8, -8],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="text-8xl">👥</div>
                <div className="flex justify-center gap-4">
                  <div className="text-6xl">💬</div>
                  <div className="text-6xl">🤝</div>
                </div>
                <div className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-teal-600">
                  Build Together
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Content with slide-in */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
          >
            <motion.h2 
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Join a <span className="text-brand-purple">Community</span> of Builders
            </motion.h2>
            
            <motion.p 
              className="text-xl text-brand-neutral-mid mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Learn alongside developers who share your passion for building real projects. 
              Get feedback, share knowledge, and grow together.
            </motion.p>

            {/* Feature list with stagger */}
            <motion.div 
              className="space-y-6"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
            >
              {[
                { icon: '💬', title: 'Active Discord Community', desc: 'Real-time help and discussions', color: 'purple' },
                { icon: '🎓', title: 'Code Reviews', desc: 'Get feedback from experienced developers', color: 'teal' },
                { icon: '🏆', title: 'Showcase Your Work', desc: 'Share your projects and get recognized', color: 'orange' }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  className="flex gap-4 items-start p-4 rounded-xl bg-white/50 backdrop-blur-sm hover:bg-white transition-all cursor-pointer group shadow-md hover:shadow-xl"
                  variants={staggerItem}
                  whileHover={{ 
                    x: 10,
                  }}
                >
                  <motion.div 
                    className="text-5xl flex-shrink-0"
                    whileHover={{ 
                      scale: 1.3,
                      rotate: [0, -10, 10, -10, 0],
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {item.icon}
                  </motion.div>
                  <div>
                    <motion.h4 
                      className="text-xl font-bold mb-1 group-hover:text-brand-purple transition-colors"
                      style={{ color: `var(--color-brand-${item.color})` }}
                    >
                      {item.title}
                    </motion.h4>
                    <p className="text-brand-neutral-mid">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
