import SectionTitle from "../elements/SectionTitle";
import ProjectCard from "../elements/ProjectCard";

import { motion } from "framer-motion";

type projectsType = {
  projects: Array<any>;
};

/* Framer motion variants */
const variantGridContanier = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { delayChildren: 0.6, staggerChildren: 0.2 },
  },
};

const variantGridItem = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.4 } },
};

const Projects = ({ projects }: projectsType) => {
  return (
    <section id="projects" className="w-full px-4 pt-4">
      <SectionTitle titleText="Projects" />
      <motion.div
        variants={variantGridContanier}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mx-auto grid w-full max-w-4xl gap-4 px-4 pt-6 md:grid-cols-2"
      >
        {projects?.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            projectCardVariant={variantGridItem}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
