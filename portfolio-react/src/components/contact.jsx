import { motion } from "framer-motion";
import { SOCIAL } from '../constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faSquareXTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';

const Contact = () => {
  return (
    <section id="contact">
      <div className="min-h-screen flex flex-col justify-center items-center text-white mb-10">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="text-3xl mb-8 text-center font-semibold tracking-wide my-20"
        >
          Get in Touch
        </motion.h1>
        <motion.form
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="bg-black bg-opacity-50 p-8 rounded-lg shadow-lg max-w-md w-full"
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className="w-full p-2 bg-black bg-opacity-40 rounded text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="w-full p-2 bg-black bg-opacity-40 rounded text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Type Message...
            </label>
            <textarea
              id="message"
              placeholder="Type Message..."
              className="w-full p-2 bg-black bg-opacity-40 rounded text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
              rows="4"
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="md:w-1/2 p-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-lg hover:bg-gradient-to-l hover:from-pink-500 hover:to-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-600"
            >
              Send <FontAwesomeIcon icon={faPaperPlane} style={{ color: 'white' }} />
            </button>
          </div>
        </motion.form>
        <div className="w-full flex flex-col md:flex-row justify-between items-center mt-8 space-y-4 md:space-y-0">
          <div className="flex items-center">
            <FontAwesomeIcon icon={faCopyright} className="text-white mr-2" />
            <p className="text-white">Rajat Singh</p>
          </div>
          <div className="flex space-x-4 text-2xl">
            <a href={SOCIAL.linkedin} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} style={{ color: 'white' }} />
            </a>
            <a href={SOCIAL.github} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} style={{ color: 'white' }} />
            </a>
            <a href={SOCIAL.twitter} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faSquareXTwitter} style={{ color: 'white' }} />
            </a>
            <a href={SOCIAL.insta} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} style={{ color: 'white' }} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
