import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, staggerItem, defaultViewport } from '@/utils/motionVariants';

export const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Choose Your Path',
      description: 'Pick a project that matches your learning goals and current skill level.',
      icon: '🎯',
      color: 'purple'
    },
    {
      number: '02',
      title: 'Build Step-by-Step',
      description: 'Follow guided modules with code reviews, best practices, and real-world patterns.',
      icon: '🛠️',
      color: 'teal'
    },
    {
      number: '03',
      title: 'Ship & Showcase',
      description: 'Deploy your project, add it to your portfolio, and share with the community.',
      icon: '🚀',
      color: 'orange'
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Animated decorative elements */}
      <motion.div 
        className="absolute top-0 right-0 w-96 h-96 bg-brand-teal/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-0 left-0 w-96 h-96 bg-brand-purple/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-20"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          <h2 className="mb-6">
            How <span className="text-brand-purple">Learning</span> Works
          </h2>
          
          <p className="text-xl text-brand-neutral-mid leading-relaxed">
            A structured, hands-on approach to mastering modern development
          </p>
        </motion.div>

        {/* Steps with staggered reveals */}
        <motion.div 
          className="max-w-5xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="relative mb-12 last:mb-0"
              variants={staggerItem}
            >
              <div className={`flex items-start gap-8 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}>
                {/* Animated number circle */}
                <motion.div 
                  className="flex-shrink-0"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <motion.div 
                    className="w-24 h-24 rounded-full bg-brand-purple/10 flex items-center justify-center cursor-pointer relative"
                    style={{
                      transformStyle: 'preserve-3d',
                    }}
                    whileHover={{
                      boxShadow: `0 20px 40px rgba(99, 102, 241, 0.3)`,
                    }}
                  >
                    <motion.span 
                      className="text-4xl"
                      animate={{
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3
                      }}
                    >
                      {step.icon}
                    </motion.span>
                  </motion.div>
                </motion.div>

                {/* Content card with 3D effect */}
                <motion.div 
                  className={`flex-1 bg-brand-neutral-light rounded-2xl p-8 cursor-pointer group ${index % 2 === 1 ? 'text-right' : ''}`}
                  whileHover={{ 
                    scale: 1.03,
                    rotate: index % 2 === 0 ? -1 : 1,
                    boxShadow: '0 20px 50px rgba(0,0,0,0.1)',
                    borderColor: `var(--color-brand-${step.color})`,
                  }}
                  style={{
                    transformStyle: 'preserve-3d',
                    borderLeft: index % 2 === 0 ? `4px solid var(--color-brand-${step.color})` : 'none',
                    borderRight: index % 2 === 1 ? `4px solid var(--color-brand-${step.color})` : 'none',
                  }}
                >
                  <motion.div 
                    className="text-brand-purple font-bold text-sm mb-2"
                    whileHover={{ scale: 1.2 }}
                  >
                    {step.number}
                  </motion.div>
                  <motion.h3 
                    className="text-3xl mb-4 group-hover:text-brand-purple transition-colors"
                    whileHover={{ x: index % 2 === 0 ? 10 : -10 }}
                  >
                    {step.title}
                  </motion.h3>
                  <p className="text-lg text-brand-neutral-mid">{step.description}</p>
                </motion.div>
              </div>

              {/* Animated connector line */}
              {index < steps.length - 1 && (
                <motion.div 
                  className="absolute left-12 top-24 w-px h-12 bg-brand-purple/20"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.5, duration: 0.5 }}
                />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
