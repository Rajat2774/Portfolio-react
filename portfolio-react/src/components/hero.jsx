import pp from "../assets/about1.jpeg";
import ppAscii from "../assets/about-ascii.png";
import { HERO } from '../constants';
import { motion } from "motion/react";
import { useTheme } from '../context/ThemeContext';


const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay }
    },
});

const Hero = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <motion.section
            id="home"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <div className="pb-12 lg:mb-35 mt-24">
                <div className="flex flex-wrap items-center">
                    <div className="w-full lg:w-7/12">
                        <div className="flex flex-col lg:items-start">
                            <motion.h1
                                variants={container(0)}
                                initial="hidden"
                                animate="visible"
                                className={`pb-6 text-5xl sm:text-6xl md:text-7xl lg:text-6xl xl:text-7xl 2xl:text-[7.5rem] font-extrabold tracking-tight leading-none whitespace-nowrap ${
                                    isDark ? 'text-white' : 'text-neutral-900'
                                }`}
                            >
                                Rajat<span className={isDark ? 'text-neutral-500' : 'text-neutral-400'}> Singh</span>
                            </motion.h1>
                            <motion.span
                                variants={container(0.5)}
                                initial="hidden"
                                animate="visible"
                                className={`bg-clip-text text-3xl font-semibold tracking-tight text-transparent lg:text-4xl mt-4 ${
                                    isDark
                                        ? 'bg-gradient-to-r from-fuchsia-400 via-purple-400 to-violet-500'
                                        : 'bg-gradient-to-r from-sky-400 via-cyan-400 to-blue-500'
                                }`}
                            >
                                AI/ML Engineer
                            </motion.span>
                            <motion.div
                                variants={container(1)}
                                initial="hidden"
                                animate="visible"
                                className={`my-4 max-w-xl py-4 font-light tracking-tighter whitespace-pre-line leading-relaxed ${
                                    isDark ? 'text-neutral-300' : 'text-neutral-600'
                                }`}
                            >
                                {HERO}
                            </motion.div>
                        </div>
                    </div>
                    <div className="w-full lg:w-5/12 lg:p-8 mt-8 lg:mt-0">
                        <div className="flex justify-center lg:justify-end">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                                className={`relative group rounded-2xl border-4 shadow-2xl max-w-xs lg:max-w-sm w-full overflow-hidden transition-colors duration-300 ${
                                    isDark
                                        ? 'border-purple-500/40 shadow-purple-900/20 hover:border-purple-400'
                                        : 'border-sky-400/50 shadow-sky-500/20 hover:border-sky-500'
                                }`}
                            >
                                <img
                                    src={pp}
                                    alt="Rajat Singh"
                                    className="w-full h-auto object-cover transition-opacity duration-500 group-hover:opacity-0"
                                />
                                <img
                                    src={ppAscii}
                                    alt="Rajat Singh ASCII"
                                    className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                                />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Hero;
