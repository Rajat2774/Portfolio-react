import React from 'react';
import { EXPERIENCES } from '../constants';
import { motion } from "motion/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { Timeline } from './ui/timeline';
import { useTheme } from '../context/ThemeContext';

// Picks briefcase vs. graduation cap based on experience type or text matching
function getIcon(experience) {
    if (experience.type === "education") return faGraduationCap;
    if (experience.type === "work") return faBriefcase;
    const text = `${experience.role || ""} ${experience.company || ""}`.toLowerCase();
    if (/university|college|institute|b\.?tech|b\.?s\.?c?|bachelor|degree/.test(text)) {
        return faGraduationCap;
    }
    return faBriefcase;
}

const Experience = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    // Map EXPERIENCES into the Timeline data format
    const timelineData = EXPERIENCES.map((experience) => ({
        title: experience.year,
        content: (
            <div data-card="true" className={`rounded-2xl border p-6 backdrop-blur-sm transition-colors ${
                isDark
                    ? 'border-neutral-800 bg-neutral-900/40 hover:border-purple-500/40'
                    : 'border-neutral-200 bg-white shadow-md hover:border-sky-300'
            }`}>
                <div className='mb-1 flex items-center gap-3'>
                    <FontAwesomeIcon icon={getIcon(experience)} className={`text-xl ${isDark ? 'text-purple-400' : 'text-sky-500'}`} />
                    <h3 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-neutral-900'}`}>{experience.role}</h3>
                </div>
                <p className={`mb-4 ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>{experience.company}</p>

                {experience.cgpa && (
                    <p className={`mt-3 text-sm ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>CGPA {experience.cgpa}</p>
                )}

                {experience.description && (
                    <p className={`mt-4 text-sm leading-relaxed ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>{experience.description}</p>
                )}

                {experience.technologies?.length > 0 && (
                    <div className='mt-4 flex flex-wrap gap-2'>
                        {experience.technologies.map((tech, techIndex) => (
                            <span
                                key={techIndex}
                                className={`rounded border px-2 py-1 text-xs font-mono ${
                                    isDark
                                        ? 'border-neutral-700 bg-neutral-800/60 text-fuchsia-300/80'
                                        : 'border-sky-200 bg-sky-50 text-sky-600'
                                }`}
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        ),
    }));

    return (
        <section id="experience">
            <div className='pb-4'>
                {/* eyebrow */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="mt-20 mb-10 flex items-center gap-4 px-4 lg:px-8"
                >
                    <span className={`font-mono text-sm ${isDark ? 'text-neutral-500' : 'text-sky-400'}`}>03.</span>
                    <span className={`h-px flex-1 ${isDark ? 'bg-neutral-800' : 'bg-sky-200'}`} />
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className={`mb-20 text-center text-5xl font-extrabold tracking-tight lg:text-6xl ${isDark ? 'text-white' : 'text-neutral-900'}`}
                >
                    Experience
                </motion.h2>

                <Timeline data={timelineData} />
            </div>
        </section>
    );
};

export default Experience;