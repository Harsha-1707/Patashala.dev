import { motion } from 'framer-motion';
import { PencilMascot } from '@/components/brand/PencilMascot';

export const WhatIsPatashala = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="what" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center mb-6">
            <PencilMascot size="medium" float={true} />
          </div>
          
          <motion.h2 
            className="mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            What is <span className="text-brand-purple">patashala</span>
            <span className="text-brand-teal">.dev</span>?
          </motion.h2>
          
          <p className="text-xl text-brand-neutral-mid leading-relaxed">
            We're not just another tutorial platform. Patashala is a <strong className="text-brand-purple">project-first learning experience</strong> where you build production-grade applications while mastering modern development practices.
          </p>
        </motion.div>

        {/* Feature Grid with 3D effects */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
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
              className="bg-gradient-to-br from-brand-neutral-light to-white rounded-2xl p-8 border-2 border-transparent hover:border-brand-purple transition-all relative group cursor-pointer shadow-lg hover:shadow-2xl"
              variants={itemVariants}
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
                className="text-5xl mb-4 inline-block"
                whileHover={{ 
                  scale: 1.2, 
                  rotate: [0, -10, 10, -10, 0],
                  transition: { duration: 0.5 }
                }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-2xl mb-3 relative">{feature.title}</h3>
              <p className="text-brand-neutral-mid relative">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
