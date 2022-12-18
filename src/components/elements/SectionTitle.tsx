import { motion } from "framer-motion";

type sectionTitleType = {
  titleText: string;
};

const SectionTitle = ({ titleText }: sectionTitleType) => {
  return (
    <div className="flex items-center gap-2">
      <motion.div
        initial={{ opacity: 0, x: -16 }}
        whileInView={{ opacity: 1, x: 0, transition: { duration: 0.2 } }}
        viewport={{ once: true }}
        className=" h-4 w-8 rounded-full bg-gradient-to-r from-clr-secondary-one to-clr-secondary-two"
      ></motion.div>
      <motion.h3
        initial={{ opacity: 0, x: -32 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: { delay: 0.2, duration: 0.4 },
        }}
        viewport={{ once: true }}
        className="text-2xl font-bold md:text-3xl"
      >
        {titleText}
      </motion.h3>
    </div>
  );
};

export default SectionTitle;
