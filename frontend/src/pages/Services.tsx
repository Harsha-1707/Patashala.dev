import { motion } from 'framer-motion';
import { PageLayout } from '@/components/layout/PageLayout';
import { Button } from '@/components/ui/Button';
import { useNavigate } from 'react-router-dom';
import { fadeUp, staggerContainer, staggerItem, defaultViewport } from '@/utils/motionVariants';

export const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: '💻',
      title: 'Custom Web Applications',
      problem: 'Off-the-shelf software doesn\'t fit your unique business processes',
      solution: 'Tailored web applications built with React, Node.js, and modern frameworks',
      audience: 'Startups and businesses needing custom solutions',
      color: 'purple',
      gradient: 'from-purple-500 to-purple-700'
    },
    {
      icon: '📱',
      title: 'Mobile App Development',
      problem: 'You need to reach users on iOS and Android without doubling costs',
      solution: 'Cross-platform apps with React Native or native development for performance',
      audience: 'Companies launching mobile-first products',
      color: 'teal',
      gradient: 'from-teal-500 to-teal-700'
    },
    {
      icon: '☁️',
      title: 'SaaS Development',
      problem: 'Building a SaaS product requires complex infrastructure and scaling',
      solution: 'Complete SaaS platforms with authentication, billing, and analytics',
      audience: 'Founders launching subscription-based products',
      color: 'orange',
      gradient: 'from-orange-500 to-orange-700'
    },
    {
      icon: '🏢',
      title: 'Enterprise Solutions',
      problem: 'Legacy systems slow down your enterprise workflows',
      solution: 'Modern enterprise applications with secure integrations and compliance',
      audience: 'Large organizations modernizing their tech stack',
      color: 'purple',
      gradient: 'from-purple-600 to-indigo-700'
    },
    {
      icon: '⚡',
      title: 'Cloud Development & Integration',
      problem: 'Your infrastructure can\'t handle growth or costs are spiraling',
      solution: 'Cloud-native apps on AWS, GCP, or Azure with auto-scaling and DevOps',
      audience: 'Businesses scaling their infrastructure',
      color: 'teal',
      gradient: 'from-teal-600 to-cyan-700'
    },
    {
      icon: '🛠️',
      title: 'Maintenance & Support',
      problem: 'Your existing app needs updates, fixes, or performance improvements',
      solution: 'Ongoing maintenance, monitoring, and feature development',
      audience: 'Companies with existing applications',
      color: 'orange',
      gradient: 'from-orange-600 to-red-700'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery',
      description: 'We understand your business goals, technical requirements, and timeline.',
      icon: '🔍'
    },
    {
      step: '02',
      title: 'Build',
      description: 'Our team develops your solution using industry best practices and modern tech.',
      icon: '🛠️'
    },
    {
      step: '03',
      title: 'Deliver',
      description: 'We deploy, test, and hand over a production-ready application with documentation.',
      icon: '🚀'
    }
  ];

  return (
    <PageLayout>
      <section className="py-24 bg-gradient-to-br from-brand-neutral-light via-purple-50 to-teal-50 min-h-screen">
        <div className="container mx-auto px-6">
          {/* Hero Section */}
          <motion.div
            className="text-center max-w-4xl mx-auto mb-20"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
          >
            <motion.h1
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Build <span className="text-brand-purple">Production-Grade</span> Applications
            </motion.h1>
            <motion.p
              className="text-xl text-brand-neutral-mid leading-relaxed mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              We help startups and enterprises ship modern web and mobile applications
              that scale with your business.
            </motion.p>
            <motion.p
              className="text-lg text-brand-neutral-mid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              From idea to deployment, we build applications using production-ready code and industry best practices.
            </motion.p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
          >
            {services.map((service) => (
              <motion.div
                key={service.title}
                className="bg-white rounded-2xl p-6 shadow-lg border-2 border-transparent hover:border-brand-purple transition-all group cursor-pointer relative overflow-hidden"
                variants={staggerItem}
                whileHover={{
                  y: -10,
                  boxShadow: '0 20px 50px rgba(0,0,0,0.15)'
                }}
              >
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity`} />

                <motion.div
                  className="text-4xl mb-3 inline-block relative"
                  whileHover={{
                    scale: 1.2,
                    rotate: [0, -10, 10, -10, 0],
                    transition: { duration: 0.5 }
                  }}
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-xl mb-3 font-bold text-brand-purple-dark relative">
                  {service.title}
                </h3>
                
                <div className="space-y-2 relative">
                  <div>
                    <p className="text-sm font-semibold text-brand-purple mb-1">Problem:</p>
                    <p className="text-sm text-brand-neutral-mid">{service.problem}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-brand-teal mb-1">Solution:</p>
                    <p className="text-sm text-brand-neutral-mid">{service.solution}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-brand-orange mb-1">Best for:</p>
                    <p className="text-sm text-brand-neutral-mid">{service.audience}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* How We Work Section */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={defaultViewport}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-center mb-12 text-brand-purple">
              How We Work
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {process.map((item, index) => (
                <motion.div
                  key={item.step}
                  className="bg-white rounded-2xl p-8 shadow-lg text-center relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-6xl mb-4">{item.icon}</div>
                  <div className="text-brand-purple font-bold text-sm mb-2">STEP {item.step}</div>
                  <h3 className="text-2xl font-bold mb-3 text-brand-purple-dark">{item.title}</h3>
                  <p className="text-brand-neutral-mid">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            className="text-center bg-white rounded-3xl p-12 shadow-xl max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={defaultViewport}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-brand-purple">
              Ready to Build Your Project?
            </h2>
            <p className="text-lg text-brand-neutral-mid mb-8">
              Let's discuss your requirements and create a development plan that fits your timeline and budget.
            </p>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Button
                variant="primary"
                size="lg"
                onClick={() => navigate('/contact')}
              >
                Get in Touch →
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};
