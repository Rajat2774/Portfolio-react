import { motion } from "motion/react";
import { useTheme } from '../context/ThemeContext';

// Replace with your real interests
const INTERESTS = [
    "Agentic AI",
    "LLMs & RAG Systems",
    "AI Automation",
    "MLOps",
    "Open Source",
];

const listVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08, delayChildren: 0.4 } },
};

const itemVariants = {
    hidden: { opacity: 0, x: -8 },
    show: { opacity: 1, x: 0, transition: { duration: 0.3 } },
};

const About = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <motion.section
            id="about"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <div className="pb-4">

                {/* eyebrow */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="mt-20 mb-10 flex items-center gap-4 px-4 lg:px-8"
                >
                    <span className={`font-mono text-sm ${isDark ? 'text-neutral-500' : 'text-sky-400'}`}>01.</span>
                    <span className={`h-px flex-1 ${isDark ? 'bg-neutral-800' : 'bg-sky-200'}`} />
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className={`mb-16 px-4 text-5xl font-extrabold tracking-tight lg:px-8 lg:text-6xl ${isDark ? 'text-white' : 'text-neutral-900'}`}
                >
                    About<span className={isDark ? 'text-neutral-500' : 'text-neutral-400'}> Me</span>
                </motion.h2>

                <div className="flex flex-wrap gap-y-12 px-4 lg:px-8">
                    {/* left: bio text */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="w-full lg:w-1/2 lg:pr-8"
                    >
                        <p className={`max-w-xl text-lg ${isDark ? 'text-neutral-300' : 'text-neutral-600'}`}>
                            I'm an <strong className={`font-semibold ${isDark ? 'text-white' : 'text-neutral-900'}`}>AI Engineer</strong> passionate about{" "}
                            <strong className={`font-semibold ${isDark ? 'text-white' : 'text-neutral-900'}`}>Agentic AI</strong>,{" "}
                            <strong className={`font-semibold ${isDark ? 'text-white' : 'text-neutral-900'}`}>Large Language Models (LLMs)</strong>, and{" "}
                            <strong className={`font-semibold ${isDark ? 'text-white' : 'text-neutral-900'}`}>Full-Stack AI Development</strong>.
                        </p>

                        <p className={`mt-6 max-w-xl ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>
                            I build intelligent applications powered by LLMs, RAG pipelines, multi-agent systems, and
                            scalable AI infrastructure. My work focuses on turning cutting-edge AI research into
                            practical, production-ready solutions that solve real-world problems.
                        </p>

                        <p className={`mt-6 max-w-xl ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>
                            Beyond AI, I enjoy exploring cybersecurity, Linux, cloud technologies, and MLOps. I'm
                            constantly learning, experimenting with new technologies, and building projects that push
                            the boundaries of intelligent software.
                        </p>

                        <motion.a
                            href="/Resume_AI_July2026.pdf"
                            download
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className={`mt-8 inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all ${
                                isDark
                                    ? 'bg-gradient-to-r from-fuchsia-500 to-purple-500 text-white shadow-lg shadow-fuchsia-900/30 hover:from-fuchsia-400 hover:to-purple-400'
                                    : 'bg-gradient-to-r from-sky-500 to-cyan-500 text-white shadow-lg shadow-sky-200 hover:from-sky-400 hover:to-cyan-400'
                            }`}
                        >
                            Download Resume
                        </motion.a>
                    </motion.div>

                    {/* right: terminal mockup */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="w-full lg:w-1/2"
                    >
                        <div className={`overflow-hidden rounded-xl border font-mono text-sm shadow-2xl ${
                            isDark
                                ? 'border-neutral-800 bg-neutral-950 shadow-black/40'
                                : 'border-neutral-200 bg-white shadow-neutral-200/60'
                        }`}>
                            {/* title bar */}
                            <div className={`flex items-center gap-2 border-b px-4 py-3 ${
                                isDark ? 'border-neutral-800 bg-neutral-900/60' : 'border-neutral-200 bg-neutral-50'
                            }`}>
                                <span className={`h-3 w-3 rounded-full ${isDark ? 'bg-neutral-700' : 'bg-red-400'}`} />
                                <span className={`h-3 w-3 rounded-full ${isDark ? 'bg-neutral-700' : 'bg-yellow-400'}`} />
                                <span className={`h-3 w-3 rounded-full ${isDark ? 'bg-neutral-700' : 'bg-green-400'}`} />
                                <span className={`ml-2 text-xs ${isDark ? 'text-neutral-500' : 'text-neutral-400'}`}>terminal — bash</span>
                            </div>

                            {/* body */}
                            <div className={`space-y-4 px-6 py-6 ${isDark ? 'text-neutral-300' : 'text-neutral-600'}`}>
                                <p><span className={isDark ? 'text-neutral-500' : 'text-sky-400'}>$</span> whoami</p>

                                <p>Name: <span className={isDark ? 'text-white' : 'text-neutral-900'}>Rajat Singh</span></p>

                                <div>
                                    <p className={`mb-2 ${isDark ? 'text-neutral-500' : 'text-sky-400'}`}>Interests:</p>
                                    <motion.ul
                                        variants={listVariants}
                                        initial="hidden"
                                        whileInView="show"
                                        viewport={{ once: true, margin: "-100px" }}
                                        className="space-y-1"
                                    >
                                        {INTERESTS.map((interest) => (
                                            <motion.li key={interest} variants={itemVariants} className={isDark ? 'text-white' : 'text-neutral-800'}>
                                                <span className={isDark ? 'text-neutral-500' : 'text-sky-400'}>→</span> {interest}
                                            </motion.li>
                                        ))}
                                    </motion.ul>
                                </div>

                                <div>
                                    <p className={isDark ? 'text-neutral-500' : 'text-sky-400'}>Status:</p>
                                    <p className={isDark ? 'text-white' : 'text-neutral-800'}>
                                        Building the future... <span className={isDark ? 'text-neutral-400' : 'text-sky-400'}>✓</span>
                                    </p>
                                </div>

                                <p className={`flex items-center gap-1 ${isDark ? 'text-neutral-500' : 'text-sky-400'}`}>
                                    $
                                    <motion.span
                                        className={`inline-block h-4 w-2 ${isDark ? 'bg-neutral-400' : 'bg-sky-400'}`}
                                        animate={{ opacity: [1, 1, 0, 0] }}
                                        transition={{ duration: 1, times: [0, 0.5, 0.5, 1], repeat: Infinity, ease: "linear" }}
                                        aria-hidden="true"
                                    />
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

export default About;