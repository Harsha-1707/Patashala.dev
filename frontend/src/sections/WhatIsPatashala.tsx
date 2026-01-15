import { motion } from 'framer-motion';
import { PencilMascot } from '@/components/brand/PencilMascot';
import { staggerContainer, staggerItem, fadeUp, defaultViewport } from '@/utils/motionVariants';

export const WhatIsPatashala = () => {

  return (
    <section id="what" className="py-12 md:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-10 md:mb-12 lg:mb-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          <div className="flex justify-center mb-6">
            <PencilMascot size="medium" float={true} />
          </div>
          
          <motion.h2 
            className="mb-4 md:mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            What is <span className="text-brand-purple">patashala</span>
            <span className="text-brand-teal">.dev</span>?
          </motion.h2>
          
          <p className="text-base md:text-lg lg:text-xl text-brand-neutral-mid leading-relaxed">
            We're not just another tutorial platform. Patashala is a <strong className="text-brand-purple">project-first learning experience</strong> where you build production-grade applications while mastering modern development practices.
          </p>
        </motion.div>

        {/* Feature Grid with 3D effects */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          {[
            {
              icon: '🎯',
              title: 'Project-Driven',
              description: 'Learn by building real-world applications, not toy examples.',
              color: 'purple',
              gradient: 'from-purple-500 to-purple-700'
            },
            {
              icon: '⚡',
              title: 'Production-Grade',
              description: 'Every project follows industry best practices and clean architecture.',
              color: 'teal',
              gradient: 'from-teal-500 to-teal-700'
            },
            {
              icon: '🚀',
              title: 'Skills That Matter',
              description: 'Focus on technologies and patterns used by actual development teams.',
              color: 'orange',
              gradient: 'from-orange-500 to-orange-700'
            }
          ].map((feature) => (
            <motion.div
              key={feature.title}
              className="bg-gradient-to-br from-brand-neutral-light to-white rounded-xl md:rounded-2xl p-6 md:p-8 border-2 border-transparent hover:border-brand-purple transition-all relative group cursor-pointer shadow-lg hover:shadow-2xl"
              variants={staggerItem}
              whileHover={{ 
                y: -10,
                borderColor: `var(--color-brand-${feature.color})`
              }}
              style={{
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity`} />
              
              <motion.div 
                className="text-3xl md:text-4xl lg:text-5xl mb-3 md:mb-4 inline-block"
                whileHover={{ 
                  scale: 1.2, 
                  rotate: [0, -10, 10, -10, 0],
                  transition: { duration: 0.5 }
                }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-lg md:text-xl lg:text-2xl mb-2 md:mb-3 relative">{feature.title}</h3>
              <p className="text-sm md:text-base text-brand-neutral-mid relative">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
