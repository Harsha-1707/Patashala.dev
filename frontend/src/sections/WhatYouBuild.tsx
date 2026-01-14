import { motion } from 'framer-motion';
import learningIcons from '@/assets/illustrations/learning-icons.png';
import { fadeUp, staggerContainer, staggerItem, defaultViewport } from '@/utils/motionVariants';

export const WhatYouBuild = () => {
  const projects = [
    {
      category: 'Full-Stack Apps',
      examples: ['E-commerce Platform', 'Social Network', 'Project Management Tool'],
      color: 'purple',
      icon: '💻'
    },
    {
      category: 'Backend Systems',
      examples: ['REST APIs', 'GraphQL Services', 'Microservices'],
      color: 'teal',
      icon: '⚙️'
    },
    {
      category: 'Frontend Apps',
      examples: ['React Dashboards', 'Interactive UIs', 'Animation Systems'],
      color: 'orange',
      icon: '🎨'
    },
    {
      category: 'DevOps & Tools',
      examples: ['CI/CD Pipelines', 'Monitoring Systems', 'CLI Tools'],
      color: 'yellow',
      icon: '🛠️'
    }
  ];

  return (
    <section id="projects" className="py-24 bg-gradient-to-br from-brand-neutral-light via-purple-50 to-teal-50 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header with 3D Icons */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          <motion.div className="bg-white rounded-3xl p-8 mb-8 inline-block shadow-lg">
            <motion.img 
              src={learningIcons} 
              alt="Learning concepts"
              className="w-72 mx-auto"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: 'spring' }}
              animate={{
                y: [-5, 5, -5],
              }}
              whileHover={{
                scale: 1.1,
                rotate: [0, -3, 3, 0],
              }}
            />
          </motion.div>
          
          <h2 className="mb-6">
            What You'll <span className="text-brand-purple">Build</span>
          </h2>
          
          <p className="text-xl text-brand-neutral-mid leading-relaxed">
            From frontend to backend, from deployment to testing—build complete, production-ready applications.
          </p>
        </motion.div>

        {/* Project Grid with staggered reveals */}
        <motion.div 
          className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.category}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-md border-l-4 cursor-pointer group relative"
              style={{ 
                borderColor: `var(--color-brand-${project.color})`,
                transformStyle: 'preserve-3d'
              }}
              variants={staggerItem}
              whileHover={{ 
                scale: 1.05,
                rotate: index % 2 === 0 ? -2 : 2,
                boxShadow: '0 20px 50px rgba(0,0,0,0.15)',
                borderWidth: '6px',
                backgroundColor: 'rgba(255,255,255,0.95)'
              }}
            >
              {/* Floating icon */}
              <motion.div
                className="absolute -top-6 -right-6 text-6xl"
                initial={{ rotate: 0 }}
                whileHover={{ 
                  rotate: 360,
                  scale: 1.2,
                }}
                transition={{ duration: 0.6 }}
              >
                {project.icon}
              </motion.div>

              <motion.h3 
                className="text-2xl mb-4 pr-12" 
                style={{ color: `var(--color-brand-${project.color})` }}
                whileHover={{ x: 10 }}
              >
                {project.category}
              </motion.h3>
              <motion.ul className="space-y-2">
                {project.examples.map((example, i) => (
                  <motion.li 
                    key={example} 
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + i * 0.05 }}
                    whileHover={{ x: 10, color: `var(--color-brand-${project.color})` }}
                  >
                    <motion.span 
                      className="text-brand-purple"
                      whileHover={{ scale: 1.5, rotate: 90 }}
                    >
                      →
                    </motion.span>
                    <span className="text-brand-neutral-dark">{example}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
