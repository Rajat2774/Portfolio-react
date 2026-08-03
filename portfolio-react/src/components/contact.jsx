import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from '@emailjs/browser';
import { SOCIAL } from '../constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faSquareXTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import { useTheme } from '../context/ThemeContext';

const Contact = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('');

    try {
      // Replace these with your EmailJS credentials
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      if (result.text === 'OK') {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
    } finally {
      setIsLoading(false);
      setTimeout(() => setStatus(''), 5000);
    }
  };

  const inputClass = isDark
    ? 'bg-neutral-950/70 border-neutral-800 text-white placeholder-neutral-500 focus:border-purple-500 focus:ring-purple-500'
    : 'bg-neutral-100 border-neutral-200 text-neutral-900 placeholder-neutral-400 focus:border-sky-400 focus:ring-sky-400';

  return (
    <section id="contact">
      <div className={`min-h-screen flex flex-col justify-center items-center mb-10 ${isDark ? 'text-white' : 'text-neutral-900'}`}>
        {/* eyebrow */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mt-20 mb-10 flex items-center gap-4 px-4 lg:px-8 w-full max-w-4xl"
        >
          <span className={`font-mono text-sm ${isDark ? 'text-neutral-500' : 'text-sky-400'}`}>05.</span>
          <span className={`h-px flex-1 ${isDark ? 'bg-neutral-800' : 'bg-sky-200'}`} />
        </motion.div>

        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className={`mb-20 text-center text-5xl font-extrabold tracking-tight lg:text-6xl ${isDark ? 'text-white' : 'text-neutral-900'}`}
        >
          Get in Touch
        </motion.h1>
        <motion.form
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          onSubmit={handleSubmit}
          data-card="true"
          className={`p-8 rounded-2xl shadow-2xl backdrop-blur-md max-w-md w-full border ${
            isDark
              ? 'bg-neutral-900/80 border-neutral-800'
              : 'bg-white border-neutral-200'
          }`}
        >
          <div className="mb-4">
            <label htmlFor="name" className={`block text-sm font-medium mb-2 ${isDark ? 'text-neutral-300' : 'text-neutral-600'}`}>
              Your Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-1 transition-colors ${inputClass}`}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className={`block text-sm font-medium mb-2 ${isDark ? 'text-neutral-300' : 'text-neutral-600'}`}>
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-1 transition-colors ${inputClass}`}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className={`block text-sm font-medium mb-2 ${isDark ? 'text-neutral-300' : 'text-neutral-600'}`}>
              Type Message...
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Type Message..."
              required
              className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-1 transition-colors ${inputClass}`}
              rows="4"
            ></textarea>
          </div>
          
          {status === 'success' && (
            <div className="mb-4 p-3 bg-green-600 bg-opacity-50 rounded text-white text-center">
              Message sent successfully! 🎉
            </div>
          )}
          
          {status === 'error' && (
            <div className="mb-4 p-3 bg-red-600 bg-opacity-50 rounded text-white text-center">
              Failed to send message. Please try again.
            </div>
          )}

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={isLoading}
              className={`md:w-1/2 p-2 text-white font-bold rounded-lg focus:outline-none focus:ring-2 disabled:opacity-50 disabled:cursor-not-allowed ${
                isDark
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l hover:from-pink-500 hover:to-purple-500 focus:ring-purple-600'
                  : 'bg-gradient-to-r from-sky-400 to-cyan-400 hover:bg-gradient-to-l hover:from-cyan-400 hover:to-sky-400 focus:ring-sky-500'
              }`}
            >
              {isLoading ? 'Sending...' : 'Send'} <FontAwesomeIcon icon={faPaperPlane} style={{ color: 'white' }} />
            </button>
          </div>
        </motion.form>
        <div className="w-full flex flex-col md:flex-row justify-between items-center mt-8 space-y-4 md:space-y-0">
          <div className="flex items-center">
            <FontAwesomeIcon icon={faCopyright} className={`mr-2 ${isDark ? 'text-white' : 'text-neutral-800'}`} />
            <p className={isDark ? 'text-white' : 'text-neutral-800'}>Rajat Singh</p>
          </div>
          <div className="flex space-x-4 text-2xl">
            <a href={SOCIAL.linkedin} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className={isDark ? 'text-white' : 'text-neutral-700 hover:text-sky-500'} />
            </a>
            <a href={SOCIAL.github} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} className={isDark ? 'text-white' : 'text-neutral-700 hover:text-sky-500'} />
            </a>
            <a href={SOCIAL.twitter} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faSquareXTwitter} className={isDark ? 'text-white' : 'text-neutral-700 hover:text-sky-500'} />
            </a>
            <a href={SOCIAL.insta} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} className={isDark ? 'text-white' : 'text-neutral-700 hover:text-sky-500'} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;