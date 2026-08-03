import ReactIcon from "../assets/React.png";
import CppIcon from "../assets/cpp.png";
import pythonIcon from "../assets/python.png";
import djangoIcon from "../assets/django.png";
import tailwindIcon from "../assets/Tailwind.png";
import MysqlIcon from "../assets/sql.png";
import { animate, motion } from "motion/react";
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
import dvc from "../assets/dvc.png";
import mlflow from "../assets/mlflow.jpeg";
import groq from "../assets/groq.png";
import fastapi from "../assets/FastAPI.png";
import grafana from "../assets/Grafana.png";
import HF from "../assets/HF.jpeg";
import Kubernetes from "../assets/Kubernetes.png";
import Prometheus from "../assets/Prometheus.png";
import Langchain from "../assets/Langchain.jpeg";
import Docker from "../assets/Docker.png";
import Tensorflow from "../assets/TensorFlow.png";
import { useTheme } from '../context/ThemeContext';


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
  Langchain,Prometheus,grafana,Kubernetes,Docker,Tensorflow,HF,fastapi,groq,mlflow,dvc,Sklearn, CppIcon, ReactIcon, pythonIcon, Java, Numpy, Pandas, mat, seaborn,
  stream, HTML, CSS, JS, flask, djangoIcon, tailwindIcon, MysqlIcon
];

const Technologies = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <motion.section
      id="tech"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="pb-24">
        {/* eyebrow */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mt-20 mb-10 flex items-center gap-4 px-4 lg:px-8"
        >
          <span className={`font-mono text-sm ${isDark ? 'text-neutral-500' : 'text-sky-400'}`}>02.</span>
          <span className={`h-px flex-1 ${isDark ? 'bg-neutral-800' : 'bg-sky-200'}`} />
        </motion.div>

        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          className={`mb-20 text-center text-5xl font-extrabold tracking-tight lg:text-6xl ${isDark ? 'text-white' : 'text-neutral-900'}`}
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
              data-card="true"
              className={`rounded-2xl border-4 p-4 flex items-center justify-center ${
                isDark
                  ? 'border-neutral-800 bg-neutral-900'
                  : 'border-sky-100 bg-white shadow-md shadow-sky-100/50'
              }`}
            >
              <img src={icon} alt={`tech-icon-${index}`} width={64} height={64} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Technologies;
