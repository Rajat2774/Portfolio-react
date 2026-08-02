import React from 'react'
import { EXPERIENCES } from '../constants';
import { motion } from "motion/react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { Timeline } from './ui/timeline';

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
    // Map EXPERIENCES into the Timeline data format
    const timelineData = EXPERIENCES.map((experience) => ({
        title: experience.year,
        content: (
            <div data-card="true" className='rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6 backdrop-blur-sm transition-colors hover:border-purple-500/40'>
                <div className='mb-1 flex items-center gap-3'>
                    <FontAwesomeIcon icon={getIcon(experience)} className='text-xl text-purple-400' />
                    <h3 className='text-lg font-bold text-white'>{experience.role}</h3>
                </div>
                <p className='mb-4 text-neutral-400'>{experience.company}</p>

                {experience.cgpa && (
                    <p className='mt-3 text-sm text-neutral-400'>CGPA {experience.cgpa}</p>
                )}

                {experience.description && (
                    <p className='mt-4 text-sm text-neutral-400 leading-relaxed'>{experience.description}</p>
                )}

                {experience.technologies?.length > 0 && (
                    <div className='mt-4 flex flex-wrap gap-2'>
                        {experience.technologies.map((tech, techIndex) => (
                            <span
                                key={techIndex}
                                className='rounded border border-neutral-700 bg-neutral-800/60 px-2 py-1 text-xs font-mono text-fuchsia-300/80'
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
            <div className='border-b border-neutral-900 pb-4'>
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className='my-20 text-center text-5xl font-extrabold tracking-tight text-white lg:text-6xl'
                >
                    Experience
                </motion.h2>

                <Timeline data={timelineData} />
            </div>
        </section>
    );
};

export default Experience