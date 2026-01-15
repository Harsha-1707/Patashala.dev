import { PageLayout } from '@/components/layout/PageLayout';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { fadeUp, staggerContainer, staggerItem, defaultViewport } from '@/utils/motionVariants';

export const Courses = () => {
  const navigate = useNavigate();

  const coursePaths = [
    {
      icon: '💻',
      title: 'Full-Stack Development',
      description: 'Build complete web applications from frontend to backend, deployment to database.',
      projects: ['E-commerce Platform', 'Social Network', 'SaaS Dashboard']
    },
    {
      icon: '⚙️',
      title: 'Backend Engineering',
      description: 'Master server-side development, APIs, databases, and microservices architecture.',
      projects: ['REST API', 'GraphQL Service', 'Microservices System']
    },
    {
      icon: '🎨',
      title: 'Frontend Mastery',
      description: 'Create stunning, responsive interfaces with React, animations, and modern UI/UX.',
      projects: ['Admin Dashboard', 'Interactive UI', 'Animation Library']
    },
    {
      icon: '🛠️',
      title: 'DevOps & Cloud',
      description: 'Learn deployment, CI/CD pipelines, monitoring, and cloud infrastructure.',
      projects: ['CI/CD Pipeline', 'Monitoring System', 'Cloud Architecture']
    }
  ];

  return (
    <PageLayout>
      <section className="py-24 bg-gradient-to-br from-brand-neutral-light via-purple-50 to-teal-50 min-h-screen">
        <div className="container mx-auto px-6 max-w-6xl">
          {/* Hero */}
          <motion.div
            className="text-center mb-16"
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
              Learn Development by <span className="text-brand-purple">Building Real Projects</span>
            </motion.h1>
            <motion.p
              className="text-xl text-brand-neutral-mid max-w-3xl mx-auto leading-relaxed mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Stop watching tutorials. Start building production-grade applications that you can showcase to employers.
            </motion.p>
            <motion.p
              className="text-lg text-brand-neutral-mid max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Every course teaches through hands-on projects using industry-standard tools and best practices.
            </motion.p>
          </motion.div>

          {/* Learning Approach */}
          <motion.div
            className="bg-white rounded-2xl p-8 shadow-lg mb-16 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={defaultViewport}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-4 text-brand-purple">Why Project-Based?</h2>
            <div className="space-y-3 text-brand-neutral-mid">
              <p className="flex items-start gap-3">
                <span className="text-brand-teal text-xl">✓</span>
                <span><strong>Learn by doing:</strong> Build complete applications, not isolated code snippets</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-brand-teal text-xl">✓</span>
                <span><strong>Production-ready:</strong> Master deployment, testing, and best practices</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-brand-teal text-xl">✓</span>
                <span><strong>Portfolio-worthy:</strong> Create projects you can showcase to employers</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-brand-teal text-xl">✓</span>
                <span><strong>Job-ready skills:</strong> Focus on technologies used by real development teams</span>
              </p>
            </div>
          </motion.div>

          {/* Course Paths Grid */}
          <motion.div
            className="grid md:grid-cols-2 gap-8 mb-16"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
          >
            {coursePaths.map((path) => (
              <motion.div
                key={path.title}
                className="bg-white rounded-2xl p-8 shadow-lg border-2 border-transparent hover:border-brand-purple transition-all group"
                variants={staggerItem}
                whileHover={{ y: -5 }}
              >
                <div className="text-5xl mb-4">{path.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-brand-purple-dark">{path.title}</h3>
                <p className="text-brand-neutral-mid mb-4">{path.description}</p>
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-brand-purple">Example Projects:</p>
                  <ul className="space-y-1">
                    {path.projects.map((project) => (
                      <li key={project} className="text-sm text-brand-neutral-mid flex items-center gap-2">
                        <span className="text-brand-teal">→</span>
                        {project}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Preview Notice & Waitlist CTA */}
          <motion.div
            className="bg-gradient-to-br from-brand-purple via-purple-600 to-brand-teal rounded-3xl p-12 text-white text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={defaultViewport}
            transition={{ duration: 0.6 }}
          >
            <div className="text-6xl mb-6">🚀</div>
            <h2 className="text-3xl font-bold mb-4">
              Courses Launching Soon!
            </h2>
            <p className="text-lg mb-8 opacity-90">
              We're crafting comprehensive project-based courses with hands-on learning experiences. 
              Join the waitlist to get early access when we launch.
            </p>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Button
                variant="secondary"
                size="lg"
                className="bg-white text-brand-purple hover:bg-white/90"
                onClick={() => navigate('/contact')}
              >
                Join the Waitlist →
              </Button>
            </motion.div>
            <p className="text-sm mt-6 opacity-75">
              No spam, just updates when courses are ready
            </p>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};
