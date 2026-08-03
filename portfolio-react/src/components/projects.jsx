import React from "react";
import { motion } from "motion/react";
import { FaGithub } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { GoDotFill } from "react-icons/go";
import { PROJECTS } from "../constants";
import { useTheme } from '../context/ThemeContext';

/**
 * ProjectCard — Dual-themed blueprint card.
 */

// ---- Motion variants ------------------------------------------------
const bracketVariants = {
  rest: { pathLength: 0, opacity: 0 },
  hover: { pathLength: 1, opacity: 1, transition: { duration: 0.45, ease: "easeOut" } },
};
const artVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.045, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};
const overlayVariants = {
  rest: { opacity: 0, y: 6 },
  hover: { opacity: 1, y: 0, transition: { duration: 0.25, ease: "easeOut" } },
};
const listVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};
const chipVariants = {
  hidden: { opacity: 0, y: 6 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
};

const statusMap = {
  live: { label: "Live", color: "text-emerald-400", dot: "fill-emerald-400" },
  wip: { label: "In progress", color: "text-amber-400", dot: "fill-amber-400" },
  archived: { label: "Archived", color: "text-neutral-500", dot: "fill-neutral-500" },
};

function ProjectCard({ project, index }) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const status = statusMap[project.status] || statusMap.live;
  const formattedIndex = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-40px" }}
      variants={cardVariants}
      whileHover="hover"
      data-card="true"
      className={`group relative flex flex-col rounded-lg backdrop-blur-sm overflow-hidden border ${
        isDark
          ? 'bg-neutral-900/60 border-neutral-800'
          : 'bg-white border-neutral-200 shadow-md'
      }`}
    >
      {/* corner crop-marks */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full z-10" viewBox="0 0 100 100" preserveAspectRatio="none">
        {[
          "M2,10 L2,2 L10,2",
          "M90,2 L98,2 L98,10",
          "M98,90 L98,98 L90,98",
          "M10,98 L2,98 L2,90",
        ].map((d, i) => (
          <motion.path
            key={i}
            d={d}
            fill="none"
            stroke={isDark ? "#D946EF" : "#38bdf8"}
            strokeWidth="0.6"
            variants={bracketVariants}
            vectorEffect="non-scaling-stroke"
          />
        ))}
      </svg>

      {/* image area */}
      <div className="relative h-48 overflow-hidden">
        <motion.div variants={artVariants} className="h-full w-full">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className={`relative h-full w-full overflow-hidden ${
              isDark
                ? 'bg-gradient-to-br from-neutral-900 to-neutral-800'
                : 'bg-gradient-to-br from-sky-50 to-white'
            }`}>
              <div
                className="absolute inset-0 opacity-[0.08]"
                style={{
                  backgroundImage: isDark
                    ? "linear-gradient(#D946EF 1px, transparent 1px), linear-gradient(90deg, #D946EF 1px, transparent 1px)"
                    : "linear-gradient(#38bdf8 1px, transparent 1px), linear-gradient(90deg, #38bdf8 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                }}
              />
              <span className={`absolute -bottom-6 -right-2 text-[9rem] font-bold leading-none select-none ${
                isDark ? 'text-fuchsia-500/10' : 'text-sky-300/20'
              }`}>
                {project.title.charAt(0)}
              </span>
            </div>
          )}
        </motion.div>

        {/* hover overlay with quick links */}
        <motion.div
          variants={overlayVariants}
          className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/80 to-transparent px-4 py-3 z-10"
        >
          <span className="font-mono text-[11px] tracking-wide text-white/60">
            ~/projects/{project.title.toLowerCase().replace(/\s+/g, "-")}
          </span>
          <div className="flex items-center gap-2">
            {project.code && (
              <a
                href={project.code}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.title} source on GitHub`}
                className={`rounded-full p-1.5 text-white transition-colors ${
                  isDark ? 'bg-white/10 hover:bg-fuchsia-500/30' : 'bg-white/10 hover:bg-sky-500/30'
                }`}
              >
                <FaGithub size={14} />
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.title} live demo`}
                className={`rounded-full p-1.5 text-white transition-colors ${
                  isDark ? 'bg-white/10 hover:bg-fuchsia-500/30' : 'bg-white/10 hover:bg-sky-500/30'
                }`}
              >
                <FiArrowUpRight size={14} />
              </a>
            )}
          </div>
        </motion.div>
      </div>

      {/* body */}
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <span className="font-mono text-[11px] tracking-widest text-neutral-500">
              FIG. {formattedIndex}
            </span>
            <h3 className={`text-lg font-bold leading-tight ${isDark ? 'text-white' : 'text-neutral-900'}`}>
              {project.title}
            </h3>
          </div>
          <span className={`flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wide ${status.color}`}>
            <GoDotFill size={7} className={status.dot} />
            {status.label}
          </span>
        </div>

        {project.tagline && (
          <p className={`text-sm font-medium ${isDark ? 'text-fuchsia-300/80' : 'text-sky-500'}`}>{project.tagline}</p>
        )}
        <p className={`text-sm leading-relaxed ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>{project.description}</p>

        {/* tech stack chips */}
        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          className="mt-1 flex flex-wrap gap-1.5"
        >
          {project.technologies.map((t) => (
            <motion.li
              key={t}
              variants={chipVariants}
              className={`rounded border px-2 py-0.5 font-mono text-[11px] ${
                isDark
                  ? 'border-neutral-700 bg-neutral-800/60 text-fuchsia-300/70'
                  : 'border-sky-200 bg-sky-50 text-sky-600'
              }`}
            >
              {t}
            </motion.li>
          ))}
        </motion.ul>

        {/* footer: metric + links */}
        <div className={`mt-auto flex items-center justify-between border-t pt-3 ${
          isDark ? 'border-neutral-800' : 'border-neutral-200'
        }`}>
          {project.metric ? (
            <div className="font-mono text-xs text-neutral-500">
              <span className="text-neutral-600">{project.metric.label} </span>
              <span className={`font-semibold ${isDark ? 'text-fuchsia-400' : 'text-sky-500'}`}>{project.metric.value}</span>
            </div>
          ) : (
            <span />
          )}
          <div className="flex items-center gap-4 text-xs font-semibold">
            {project.code && (
              <a
                href={project.code}
                target="_blank"
                rel="noreferrer"
                className={`transition-colors ${isDark ? 'text-neutral-400 hover:text-fuchsia-400' : 'text-neutral-400 hover:text-sky-500'}`}
              >
                Code
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className={`transition-colors ${isDark ? 'text-neutral-400 hover:text-fuchsia-400' : 'text-neutral-400 hover:text-sky-500'}`}
              >
                Live
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section id="projects">
      <div className="pb-4">
        {/* eyebrow */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mt-20 mb-10 flex items-center gap-4 px-4 lg:px-8"
        >
          <span className={`font-mono text-sm ${isDark ? 'text-neutral-500' : 'text-sky-400'}`}>04.</span>
          <span className={`h-px flex-1 ${isDark ? 'bg-neutral-800' : 'bg-sky-200'}`} />
        </motion.div>

        <div className="mb-10 flex items-end justify-between px-4 lg:px-8">
          <div>
            <motion.h2
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className={`text-5xl font-extrabold tracking-tight lg:text-6xl ${isDark ? 'text-white' : 'text-neutral-900'}`}
            >
              Projects
            </motion.h2>
          </div>
          <span className="hidden font-mono text-[11px] text-neutral-500 sm:block">
            {PROJECTS.length} projects shown
          </span>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={i} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
