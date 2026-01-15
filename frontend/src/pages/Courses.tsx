import { Header } from '@/components/ui/Header';
import { ComicClickEffect } from '@/components/effects/ComicClickEffect';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const Courses = () => {
  return (
    <>
      <ComicClickEffect />
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-brand-neutral-light via-purple-50 to-teal-50">
        <section className="py-24">
          <div className="container mx-auto px-6 max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl font-bold mb-6">
                Our <span className="text-brand-purple">Learning Paths</span>
              </h1>
              <p className="text-xl text-brand-neutral-mid max-w-3xl mx-auto">
                Production-ready projects designed to take you from beginner to job-ready developer. 
                Choose your path and start building real applications.
              </p>
            </motion.div>

            {/* Coming Soon Notice */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl p-12 shadow-xl text-center max-w-2xl mx-auto"
            >
              <div className="text-6xl mb-6">🚀</div>
              <h2 className="text-3xl font-bold mb-4 text-brand-purple">
                Coming Soon!
              </h2>
              <p className="text-lg text-brand-neutral-mid mb-8">
                We're crafting an amazing collection of project-based learning paths. 
                Our courses will be launching soon with hands-on projects in:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-8 text-left">
                {[
                  '💻 Full-Stack Development',
                  '⚙️ Backend Engineering',
                  '🎨 Frontend Mastery',
                  '🛠️ DevOps & Cloud'
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="bg-brand-neutral-light rounded-xl p-4 font-medium"
                  >
                    {item}
                  </motion.div>
                ))}
              </div>

              <div className="space-y-4">
                <p className="text-brand-neutral-mid">
                  Want early access when we launch?
                </p>
                <Link to="/contact">
                  <Button variant="primary" size="lg">
                    Get Notified →
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Back to Home */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-center mt-12"
            >
              <Link
                to="/"
                className="text-brand-purple hover:text-brand-purple-dark font-medium transition-colors"
              >
                ← Back to Home
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};
