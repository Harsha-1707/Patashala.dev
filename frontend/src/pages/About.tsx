import { motion } from 'framer-motion';
import { PageLayout } from '@/components/layout/PageLayout';
import { Button } from '@/components/ui/Button';
import { useNavigate } from 'react-router-dom';
import { PencilMascot } from '@/components/brand/PencilMascot';
import { fadeUp, staggerContainer, staggerItem, defaultViewport } from '@/utils/motionVariants';

export const About = () => {
  const navigate = useNavigate();

  const values = [
    {
      icon: '🎯',
      title: 'Hands-On Learning',
      description: 'We believe the best way to learn is by building. Every course is a real project.'
    },
    {
      icon: '🚀',
      title: 'Future-Ready Skills',
      description: 'Focus on technologies and practices that matter in modern development teams.'
    },
    {
      icon: '💡',
      title: 'Production Quality',
      description: 'Learn to build applications the right way, with best practices from day one.'
    }
  ];

  return (
    <PageLayout>
      <section className="py-24 bg-white min-h-screen">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Hero with Mascot */}
          <motion.div
            className="text-center mb-16"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
          >
            <div className="flex justify-center mb-8">
              <PencilMascot size="large" float={true} />
            </div>
            <motion.h1
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              About <span className="text-brand-purple">Patashala</span>
              <span className="text-brand-teal">.Dev</span>
            </motion.h1>
            <motion.p
              className="text-xl text-brand-neutral-mid leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              A hands-on learning platform for developers who want to build real applications
            </motion.p>
          </motion.div>

          {/* Mission */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={defaultViewport}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-brand-purple">What We Do</h2>
            <p className="text-lg text-brand-neutral-mid leading-relaxed mb-4">
              We teach developers how to build production-grade applications through project-based courses. 
              Each course walks you through building a real application from scratch—complete with architecture, testing, deployment, and maintenance.
            </p>
            <p className="text-lg text-brand-neutral-mid leading-relaxed">
              We also build custom web and mobile applications for businesses. Every app we build 
              becomes a learning resource, ensuring our courses teach real-world patterns and practices.
            </p>
          </motion.div>

          {/* Why We Exist */}
          <motion.div
            className="mb-16 bg-gradient-to-br from-purple-50 to-teal-50 rounded-2xl p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={defaultViewport}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-brand-purple">Why Patashala.Dev?</h2>
            <p className="text-lg text-brand-neutral-mid leading-relaxed mb-4">
              "Patashala" (पाठशाला) means "school" in Hindi, but it represents more than that—it's a place where learning is practical and immediately applicable.
            </p>
            <p className="text-lg text-brand-neutral-mid leading-relaxed">
              Too many developers complete courses without the confidence to build real applications. 
              We're fixing that by making project-based learning comprehensive, practical, and job-ready.
            </p>
          </motion.div>

          {/* Values Grid */}
          <motion.div
            className="mb-16"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
          >
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-purple">How We Teach</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {values.map((value) => (
                <motion.div
                  key={value.title}
                  className="bg-white rounded-xl p-6 shadow-lg border-2 border-transparent hover:border-brand-purple transition-all text-center"
                  variants={staggerItem}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-4xl mb-3">{value.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-brand-purple-dark">{value.title}</h3>
                  <p className="text-brand-neutral-mid">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            className="text-center bg-gradient-to-br from-brand-purple via-purple-600 to-brand-teal rounded-3xl p-12 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={defaultViewport}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Build Real Projects?</h2>
            <p className="text-lg mb-8 opacity-90">
              Start learning by building production-grade applications.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }}>
                <Button
                  variant="secondary"
                  size="lg"
                  className="bg-white text-brand-purple hover:bg-white/90"
                  onClick={() => navigate('/courses')}
                >
                  Explore Courses
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Button
                  variant="ghost"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-brand-purple"
                  onClick={() => navigate('/contact')}
                >
                  Get in Touch
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};
