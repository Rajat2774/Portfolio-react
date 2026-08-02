import { motion } from "motion/react"

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
    return (
        <section id="about">
            <div className="border-b border-neutral-900 pb-4">

                {/* eyebrow */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="mt-20 mb-10 flex items-center gap-4 px-4 lg:px-8"
                >
                    <span className="font-mono text-sm text-neutral-500">01.</span>
                    <span className="h-px flex-1 bg-neutral-800" />
                </motion.div>

                <h1 className="mb-16 px-4 text-5xl font-extrabold tracking-tight text-white lg:px-8 lg:text-6xl">
                    About<span className="text-neutral-500"> Me</span>
                </h1>

                <div className="flex flex-wrap gap-y-12 px-4 lg:px-8">
                    {/* left: bio text — replace with your own copy */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="w-full lg:w-1/2 lg:pr-8"
                    >
                        <p className="max-w-xl text-lg text-neutral-300">
                            I'm an <strong className="font-semibold text-white">AI Engineer</strong> passionate about{" "}
                            <strong className="font-semibold text-white">Agentic AI</strong>,{" "}
                            <strong className="font-semibold text-white">Large Language Models (LLMs)</strong>, and{" "}
                            <strong className="font-semibold text-white">Full-Stack AI Development</strong>.
                        </p>

                        <p className="mt-6 max-w-xl text-neutral-400">
                            I build intelligent applications powered by LLMs, RAG pipelines, multi-agent systems, and
                            scalable AI infrastructure. My work focuses on turning cutting-edge AI research into
                            practical, production-ready solutions that solve real-world problems.
                        </p>

                        <p className="mt-6 max-w-xl text-neutral-400">
                            Beyond AI, I enjoy exploring cybersecurity, Linux, cloud technologies, and MLOps. I'm
                            constantly learning, experimenting with new technologies, and building projects that push
                            the boundaries of intelligent software.
                        </p>
                    </motion.div>

                    {/* right: terminal mockup */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="w-full lg:w-1/2"
                    >
                        <div className="overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950 font-mono text-sm shadow-2xl shadow-black/40">
                            {/* title bar */}
                            <div className="flex items-center gap-2 border-b border-neutral-800 bg-neutral-900/60 px-4 py-3">
                                <span className="h-3 w-3 rounded-full bg-neutral-700" />
                                <span className="h-3 w-3 rounded-full bg-neutral-700" />
                                <span className="h-3 w-3 rounded-full bg-neutral-700" />
                                <span className="ml-2 text-xs text-neutral-500">terminal — bash</span>
                            </div>

                            {/* body */}
                            <div className="space-y-4 px-6 py-6 text-neutral-300">
                                <p><span className="text-neutral-500">$</span> whoami</p>

                                <p>Name: <span className="text-white">Your Name</span></p>

                                <div>
                                    <p className="mb-2 text-neutral-500">Interests:</p>
                                    <motion.ul
                                        variants={listVariants}
                                        initial="hidden"
                                        whileInView="show"
                                        viewport={{ once: true, margin: "-100px" }}
                                        className="space-y-1"
                                    >
                                        {INTERESTS.map((interest) => (
                                            <motion.li key={interest} variants={itemVariants} className="text-white">
                                                <span className="text-neutral-500">→</span> {interest}
                                            </motion.li>
                                        ))}
                                    </motion.ul>
                                </div>

                                <div>
                                    <p className="text-neutral-500">Status:</p>
                                    <p className="text-white">
                                        Building the future... <span className="text-neutral-400">✓</span>
                                    </p>
                                </div>

                                <p className="flex items-center gap-1 text-neutral-500">
                                    $
                                    <motion.span
                                        className="inline-block h-4 w-2 bg-neutral-400"
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
        </section>
    )
}

export default About