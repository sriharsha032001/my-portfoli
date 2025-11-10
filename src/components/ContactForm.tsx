import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send, Linkedin, Github, ExternalLink } from 'lucide-react';

interface ContactFormProps {
  darkMode: boolean;
}

const ContactForm = ({ darkMode }: ContactFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className={`py-20 px-4 ${
        darkMode ? 'bg-gray-900' : 'bg-white'
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`text-4xl font-bold mb-12 text-center ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}
        >
          Get In Touch
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div>
              <h3
                className={`text-2xl font-bold mb-6 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}
              >
                Contact Information
              </h3>
              <p
                className={`mb-6 ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}
              >
                Feel free to reach out for collaborations, opportunities, or
                just to say hello!
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:ramachandrasriharsha1@gmail.com"
                className={`flex items-center gap-4 p-4 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-accent ${
                  darkMode
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Mail
                  size={24}
                  className={darkMode ? 'text-accent' : 'text-accent-dark'}
                />
                <span>ramachandrasriharsha1@gmail.com</span>
              </a>

              <a
                href="tel:8497906821"
                className={`flex items-center gap-4 p-4 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-accent ${
                  darkMode
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Phone
                  size={24}
                  className={darkMode ? 'text-accent' : 'text-accent-dark'}
                />
                <span>8497906821</span>
              </a>

              <div className="flex gap-4 pt-4">
                <a
                  href="https://www.linkedin.com/in/ravinuthala-ramachandra-sri-harsha-919822330/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-accent ${
                    darkMode
                      ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="https://github.com/sriharsha032001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-accent ${
                    darkMode
                      ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  aria-label="GitHub"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://sriharsha032001.github.io/my-portfoli/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-accent ${
                    darkMode
                      ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  aria-label="Portfolio"
                >
                  <ExternalLink size={24} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className={`p-6 rounded-xl ${
              darkMode
                ? 'bg-gray-800 border border-gray-700'
                : 'bg-gray-50 border border-gray-200'
            }`}
          >
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className={`block text-sm font-medium mb-2 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent ${
                    darkMode
                      ? 'bg-gray-900 text-white border border-gray-700'
                      : 'bg-white text-gray-900 border border-gray-300'
                  }`}
                  aria-required="true"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className={`block text-sm font-medium mb-2 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent ${
                    darkMode
                      ? 'bg-gray-900 text-white border border-gray-700'
                      : 'bg-white text-gray-900 border border-gray-300'
                  }`}
                  aria-required="true"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className={`block text-sm font-medium mb-2 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={`w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent resize-none ${
                    darkMode
                      ? 'bg-gray-900 text-white border border-gray-700'
                      : 'bg-white text-gray-900 border border-gray-300'
                  }`}
                  aria-required="true"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-green-500 text-sm text-center"
                >
                  Message sent successfully!
                </motion.p>
              )}

              {submitStatus === 'error' && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-500 text-sm text-center"
                >
                  Failed to send message. Please try again.
                </motion.p>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

