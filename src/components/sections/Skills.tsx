import SectionTitle from "../elements/SectionTitle";
import SkillCard from "../elements/SkillCard";

import { motion } from "framer-motion";

type skillsType = {
  skills: Array<any>;
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

const Skills = ({ skills }: skillsType) => {
  return (
    <section id="skills" className="w-full px-4 pt-4">
      <SectionTitle titleText="Skills" />
      <motion.div
        variants={variantGridContanier}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mx-auto grid w-full max-w-4xl gap-4 px-4 pt-6 md:grid-cols-2"
      >
        {skills?.map((skill, index) => (
          <motion.div variants={variantGridItem} key={index}>
            <SkillCard skill={skill} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
