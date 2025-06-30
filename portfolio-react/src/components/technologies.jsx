import ReactIcon from "../assets/React.png";
import CppIcon from "../assets/cpp.png";
import pythonIcon from "../assets/python.png";
import djangoIcon from "../assets/django.png";
import tailwindIcon from "../assets/Tailwind.png";
import MysqlIcon from "../assets/sql.png";
import { animate, motion } from "motion/react"
import Sklearn from "../assets/scikit-learn.png";
import Numpy from "../assets/NumPy.png";
import Pandas from "../assets/Pandas.png";
import Java from "../assets/Java.png";
import seaborn from "../assets/seaborn.png";
import HTML from "../assets/HTML5.png";
import JS from "../assets/JavaScript.png";
import CSS from "../assets/CSS3.png";
import mat from "../assets/Matplotlib.png";
import stream from "../assets/Streamlit.png";
import flask from "../assets/Flask.png";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const icons = [
  Sklearn, CppIcon, ReactIcon, pythonIcon, Java, Numpy, Pandas, mat, seaborn,
  stream, HTML, CSS, JS, flask, djangoIcon, tailwindIcon, MysqlIcon
];

const Technologies = () => {
  return (
    <section id="tech">
      <div className="border-b border-neutral-800 pb-24">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          className="my-20 text-center text-4xl text-white"
        >
          Technologies
        </motion.h1>
        
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-6 px-4"
        >
          {icons.map((icon, index) => (
            <motion.div
              key={index}
              variants={iconVariants(2 + (index % 5))}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-neutral-800 p-4 flex items-center justify-center bg-neutral-900"
            >
              <img src={icon} alt={`tech-icon-${index}`} width={64} height={64} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Technologies;
