import { PROJECTS } from "../constants";
import { animate, motion } from "motion/react";

const Projects = () => {
  return (
    <section id="projects">
      <div className="border-b border-neutral-900 pb-4">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="my-20 text-center text-4xl text-white"
        >
          Projects
        </motion.h2>
        <div>
          {PROJECTS.map((project, index) => (
            <div key={index} className="mb-12 flex flex-wrap lg:justify-center">
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                className="w-full lg:w-1/3 flex flex-col items-center"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="mb-4 rounded shadow-lg max-h-64 w-auto"
                />
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded border border-neutral-700 bg-transparent px-3 py-1.5 text-xs font-medium text-white transition hover:border-purple-500 hover:text-purple-300"
                    >
                      Demo
                    </a>
                  )}
                  {project.code && (
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded bg-purple-900 px-3 py-1.5 text-xs font-medium text-white transition hover:bg-purple-700"
                    >
                      Code
                    </a>
                  )}
                </div>
              </motion.div>
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1 }}
                className="w-full max-w-xl lg:w-2/3 px-4"
              >
                <h6 className="mb-2 font-semibold text-white">
                  {project.title}
                </h6>
                <p className="mb-4 text-neutral-400">{project.description}</p>
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="mr-2 mb-2 inline-block rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900"
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
