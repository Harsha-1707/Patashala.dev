import { PageLayout } from '@/components/layout/PageLayout';
import { motion } from 'framer-motion';
import { useState, FormEvent } from 'react';
import { submitContact, ContactFormData } from '@/api/client';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export const Contact = () => {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data: ContactFormData = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      requirement: formData.get('requirement') as string,
      message: formData.get('message') as string,
    };

    try {
      const response = await submitContact(data);

      if (response.success) {
        setStatus('success');
        form.reset();
      } else {
        throw new Error(response.error || 'Form submission failed');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage(
        error instanceof Error 
          ? error.message 
          : 'Failed to send message. Please try emailing us directly at hello@patashala.dev'
      );
    }
  };

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
                Ready to build something amazing? Let's discuss your project requirements.
              </p>

              {/* Success Message */}
              {status === 'success' && (
                <motion.div
                  className="bg-green-50 border-2 border-green-500 text-green-800 rounded-xl p-6 mb-8"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">✅</span>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Message Sent Successfully!</h3>
                      <p>Thank you for reaching out. We'll get back to you within 24 hours.</p>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Error Message */}
              {status === 'error' && (
                <motion.div
                  className="bg-red-50 border-2 border-red-500 text-red-800 rounded-xl p-6 mb-8"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">❌</span>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Oops! Something went wrong</h3>
                      <p>{errorMessage}</p>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Contact Form */}
              <motion.form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl p-8 shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
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
                      minLength={2}
                      disabled={status === 'submitting'}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-brand-purple focus:outline-none transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed"
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
                      disabled={status === 'submitting'}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-brand-purple focus:outline-none transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed"
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
                      disabled={status === 'submitting'}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-brand-purple focus:outline-none transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed"
                    >
                      <option value="">Select an option</option>
                      <option value="development">Development Services</option>
                      <option value="courses">Learning Platform / Courses</option>
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
                      minLength={10}
                      rows={6}
                      disabled={status === 'submitting'}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-brand-purple focus:outline-none transition-colors resize-none disabled:bg-gray-100 disabled:cursor-not-allowed"
                      placeholder="Tell us about your project requirements..."
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full bg-brand-purple hover:bg-brand-purple-dark text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all disabled:bg-gray-400 disabled:cursor-not-allowed"
                    whileHover={{ scale: status === 'submitting' ? 1 : 1.02 }}
                    whileTap={{ scale: status === 'submitting' ? 1 : 0.98 }}
                  >
                    {status === 'submitting' ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      'Send Message'
                    )}
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
