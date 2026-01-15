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
      description: 'Build scalable, high-performance web applications tailored to your business needs with modern frameworks and best practices.',
      color: 'purple',
      gradient: 'from-purple-500 to-purple-700'
    },
    {
      icon: '📱',
      title: 'Mobile App Development',
      description: 'Create stunning cross-platform mobile apps with React Native or native iOS/Android development for seamless user experiences.',
      color: 'teal',
      gradient: 'from-teal-500 to-teal-700'
    },
    {
      icon: '☁️',
      title: 'SaaS Development',
      description: 'Launch your SaaS product with robust architecture, user authentication, payment integration, and analytics built-in.',
      color: 'orange',
      gradient: 'from-orange-500 to-orange-700'
    },
    {
      icon: '🏢',
      title: 'Enterprise Solutions',
      description: 'Develop enterprise-grade systems with complex workflows, integrations, and security requirements for large organizations.',
      color: 'purple',
      gradient: 'from-purple-600 to-indigo-700'
    },
    {
      icon: '⚡',
      title: 'Cloud Development & Integration',
      description: 'Build cloud-native applications on AWS, GCP, or Azure with microservices, serverless architecture, and DevOps automation.',
      color: 'teal',
      gradient: 'from-teal-600 to-cyan-700'
    },
    {
      icon: '🛠️',
      title: 'Maintenance & Support',
      description: 'Keep your applications running smoothly with ongoing maintenance, bug fixes, performance optimization, and feature updates.',
      color: 'orange',
      gradient: 'from-orange-600 to-red-700'
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
              Development <span className="text-brand-purple">Services</span>
            </motion.h1>
            <motion.p
              className="text-xl text-brand-neutral-mid leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Patashala.Dev brings together expertise in modern development practices and cutting-edge technologies 
              to build production-grade applications that scale.
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
                className="bg-white rounded-2xl p-8 shadow-lg border-2 border-transparent hover:border-brand-purple transition-all group cursor-pointer"
                variants={staggerItem}
                whileHover={{
                  y: -10,
                  boxShadow: '0 20px 50px rgba(0,0,0,0.15)'
                }}
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity`} />

                <motion.div
                  className="text-5xl mb-4 inline-block"
                  whileHover={{
                    scale: 1.2,
                    rotate: [0, -10, 10, -10, 0],
                    transition: { duration: 0.5 }
                  }}
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-2xl mb-3 font-bold text-brand-purple-dark">
                  {service.title}
                </h3>
                <p className="text-brand-neutral-mid leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
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
              Let's discuss how we can bring your ideas to life with modern development practices.
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
