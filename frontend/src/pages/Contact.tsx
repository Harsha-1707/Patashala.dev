import { PageLayout } from '@/components/layout/PageLayout';
import { motion } from 'framer-motion';

export const Contact = () => {
  return (
    <PageLayout>
      <main className="min-h-screen bg-gradient-to-br from-brand-neutral-light via-purple-50 to-teal-50">
        <section className="py-24">
          <div className="container mx-auto px-6 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-5xl font-bold text-center mb-6">
                Get in <span className="text-brand-purple">Touch</span>
              </h1>
              <p className="text-xl text-center text-brand-neutral-mid mb-12">
                Have questions? Want to discuss custom training or partnerships? We'd love to hear from you.
              </p>

              {/* Contact Form using Netlify Forms */}
              <motion.form
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                className="bg-white rounded-2xl p-8 shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {/* Netlify form name */}
                <input type="hidden" name="form-name" value="contact" />
                
                {/* Honeypot for spam protection */}
                <p className="hidden">
                  <label>
                    Don't fill this out if you're human: <input name="bot-field" />
                  </label>
                </p>

                <div className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-brand-neutral-dark mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-brand-purple focus:outline-none transition-colors"
                      placeholder="Rahul Sharma"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-brand-neutral-dark mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-brand-purple focus:outline-none transition-colors"
                      placeholder="rahul@example.com"
                    />
                  </div>

                  {/* Requirement Type */}
                  <div>
                    <label htmlFor="requirement" className="block text-sm font-medium text-brand-neutral-dark mb-2">
                      I'm interested in *
                    </label>
                    <select
                      id="requirement"
                      name="requirement"
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-brand-purple focus:outline-none transition-colors"
                    >
                      <option value="">Select an option</option>
                      <option value="courses">Learning Platform / Courses</option>
                      <option value="services">Custom Training Services</option>
                      <option value="partnership">Partnership Opportunities</option>
                      <option value="other">Other Inquiry</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-brand-neutral-dark mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-brand-purple focus:outline-none transition-colors resize-none"
                      placeholder="Tell us about your requirements..."
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    className="w-full bg-brand-purple hover:bg-brand-purple-dark text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send Message
                  </motion.button>
                </div>
              </motion.form>

              {/* Alternative Contact Methods */}
              <motion.div
                className="mt-12 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <p className="text-brand-neutral-mid mb-4">Or reach out directly:</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a
                    href="mailto:hello@patashala.dev"
                    className="text-brand-purple hover:text-brand-purple-dark font-medium transition-colors"
                  >
                    📧 hello@patashala.dev
                  </a>
                  <span className="hidden sm:inline text-gray-300">|</span>
                  <a
                    href="https://discord.gg/patashala"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-teal hover:text-brand-teal-dark font-medium transition-colors"
                  >
                    💬 Join our Discord
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </PageLayout>
  );
};
