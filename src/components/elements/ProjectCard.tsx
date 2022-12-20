import Image from "next/image";

import { motion } from "framer-motion";

type projectCardType = {
  project: {
    projectImage: any;
    projectTitle: string;
    projectLink: string;
    projectDescription: string;
    projectStack: Array<string>;
  };
  projectCardVariant: any;
};

const ProjectCard = ({ project, projectCardVariant }: projectCardType) => {
  return (
    <motion.a
      href={project.projectLink}
      target="_blank"
      variants={projectCardVariant}
      className="project-card-parent flex flex-col overflow-hidden rounded-xl bg-clr-primary-two"
    >
      <div className="relative h-full w-full overflow-y-hidden">
        <Image
          src={project.projectImage}
          alt={`${project.projectTitle} app screenshot.`}
          width="200"
          height="200"
          className="h-full w-full object-cover"
        />
        <div className="project-card-children absolute left-0 top-0 h-full w-full bg-clr-primary-one/75 px-8 pt-4 opacity-0 transition-opacity duration-200 ease-in-out lg:pt-8">
          <p className="font-medium md:text-lg">{project.projectDescription}</p>
          <div className="py-2" />
          <div className="h-full w-full space-x-4 space-y-2 text-center">
            {project.projectStack.map((stack, index) => (
              <span
                key={index}
                className="inline-block rounded-full bg-clr-secondary-one px-3 py-1 text-sm text-clr-primary-one md:text-base"
              >
                {stack}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="project-card-children-two py-1 text-center text-lg font-bold transition-colors duration-200 ease-in-out md:text-xl">
        {project.projectTitle}
      </div>
    </motion.a>
  );
};

export default ProjectCard;
