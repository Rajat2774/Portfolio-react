import { motion } from "motion/react";
import { useState } from "react";
import emailjs from '@emailjs/browser';
import { SOCIAL } from '../constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faSquareXTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane, faEnvelope } from '@fortawesome/free-solid-svg-icons';
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
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
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

  const cardClass = isDark
    ? 'bg-neutral-900/80 border-neutral-800'
    : 'bg-white border-neutral-200';

  const labelAccent = isDark ? 'text-purple-400' : 'text-sky-500';

  const tileClass = isDark
    ? 'bg-neutral-950/70 border-neutral-800 hover:border-neutral-700'
    : 'bg-neutral-100 border-neutral-200 hover:border-neutral-300';

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
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
          initial={{ opacity: 0, y: -20 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className={`mb-6 text-center text-5xl font-extrabold tracking-tight lg:text-6xl ${isDark ? 'text-white' : 'text-neutral-900'}`}
        >
          Get in{" "}
          <span className={isDark ? 'text-purple-400' : 'text-sky-500'}>Touch</span>
        </motion.h1>

        <p className={`mb-16 max-w-2xl text-center px-4 ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
          Have a project in mind, a question, or just want to talk tech? Fill
          out the form or reach me directly through any of the links below —
          I try to reply within a day or two.
        </p>

        <div className="grid w-full max-w-4xl grid-cols-1 gap-6 px-4 lg:grid-cols-2 lg:px-8">
          {/* ---- Connect card ---- */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -40 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={`rounded-2xl border p-6 shadow-2xl backdrop-blur-md ${cardClass}`}
          >
            <span className={`mb-4 block font-mono text-xs font-semibold uppercase tracking-widest ${labelAccent}`}>
              Connect
            </span>

            <div className="flex flex-col gap-3">
              {/* email tile */}
              <div className={`flex items-center gap-3 rounded-xl border p-3 transition-colors ${tileClass}`}>
                <span className={`flex h-10 w-10 flex-none items-center justify-center rounded-lg ${isDark ? 'bg-purple-500/10 text-purple-400' : 'bg-sky-500/10 text-sky-500'}`}>
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
                <div className="min-w-0">
                  <p className={`text-xs ${isDark ? 'text-neutral-500' : 'text-neutral-500'}`}>Email me at</p>
                  <p className="truncate text-sm font-semibold">{SOCIAL.email}</p>
                </div>
              </div>

              {/* linkedin, github, twitter, instagram */}
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={SOCIAL.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2 rounded-xl border p-3 text-sm font-medium transition-colors ${tileClass}`}
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                  LinkedIn
                </a>
                <a
                  href={SOCIAL.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2 rounded-xl border p-3 text-sm font-medium transition-colors ${tileClass}`}
                >
                  <FontAwesomeIcon icon={faGithub} />
                  GitHub
                </a>
                <a
                  href={SOCIAL.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2 rounded-xl border p-3 text-sm font-medium transition-colors ${tileClass}`}
                >
                  <FontAwesomeIcon icon={faSquareXTwitter} />
                  Twitter
                </a>
                <a
                  href={SOCIAL.insta}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2 rounded-xl border p-3 text-sm font-medium transition-colors ${tileClass}`}
                >
                  <FontAwesomeIcon icon={faInstagram} />
                  Instagram
                </a>
              </div>
            </div>
          </motion.div>

          {/* ---- Send a message card ---- */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 40 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={`rounded-2xl border p-6 shadow-2xl backdrop-blur-md ${cardClass}`}
          >
            <span className={`mb-4 block font-mono text-xs font-semibold uppercase tracking-widest ${labelAccent}`}>
              Send a Message
            </span>

            <form onSubmit={handleSubmit} data-card="true">
              <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className={`block text-sm font-medium mb-2 ${isDark ? 'text-neutral-300' : 'text-neutral-600'}`}>
                    Name
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
                <div>
                  <label htmlFor="email" className={`block text-sm font-medium mb-2 ${isDark ? 'text-neutral-300' : 'text-neutral-600'}`}>
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="youremail@example.com"
                    required
                    className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-1 transition-colors ${inputClass}`}
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className={`block text-sm font-medium mb-2 ${isDark ? 'text-neutral-300' : 'text-neutral-600'}`}>
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project, ideas, or challenges..."
                  required
                  className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-1 transition-colors ${inputClass}`}
                  rows="5"
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

              <button
                type="submit"
                disabled={isLoading}
                className={`w-full flex items-center justify-center gap-2 p-3 text-white font-bold rounded-lg focus:outline-none focus:ring-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all ${
                  isDark
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 focus:ring-purple-600'
                    : 'bg-gradient-to-r from-sky-400 to-cyan-400 hover:from-cyan-400 hover:to-sky-400 focus:ring-sky-500'
                }`}
              >
                {isLoading ? 'Sending...' : 'Send Message'}
                <FontAwesomeIcon icon={faPaperPlane} />
              </button>
            </form>
          </motion.div>
        </div>

        {/* footer */}
        <div className="mt-10 flex items-center">
          <FontAwesomeIcon icon={faCopyright} className={`mr-2 ${isDark ? 'text-neutral-500' : 'text-neutral-500'}`} />
          <p className={isDark ? 'text-neutral-400' : 'text-neutral-600'}>Rajat Singh</p>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;