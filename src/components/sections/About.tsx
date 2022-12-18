import Image from "next/image";
import Link from "next/link";

import SectionTitle from "../elements/SectionTitle";

import { motion } from "framer-motion";

/* Framer motion variants */
const variantContanier = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { delayChildren: 0.6, staggerChildren: 0.2 },
  },
};
const variantChildren = {
  hidden: { opacity: 0, y: -16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.2 } },
};
const variantChildrenTwo = {
  hidden: { opacity: 0, y: -16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

const About = () => {
  return (
    <section id="about" className="w-full px-4 pt-4">
      <SectionTitle titleText="About Me" />
      <div className="mx-auto grid h-full w-full max-w-2xl gap-10 px-4 pt-6 md:grid-cols-2">
        {/* Paragraphs container */}
        <motion.div
          variants={variantContanier}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col md:text-lg"
        >
          {/* Paragraph one */}
          <motion.p variants={variantChildren}>
            Hi! I&#39;m <span className="text-clr-secondary-one">Camilo</span>,
            a 20 years old guy from Colombia with a strong passion about
            technology, i&#39;m a self-taught{" "}
            <span className="text-clr-secondary-one">
              Front-End Development
            </span>{" "}
            and also i am introducing myself in the world of{" "}
            <span className="text-clr-secondary-one">UI/UX Design</span> .
          </motion.p>
          <div className="py-2" />

          {/* Paragraph two */}
          <motion.p variants={variantChildren}>
            I&#39;m currently doing a degree at Universidad Del Valle about IT,
            i like food, specially hamburguers and to workout. I consider myself
            a well-organized person, honest and kinda perfectionist.
          </motion.p>
          <div className="py-4" />

          {/* Button */}
          <motion.div
            variants={variantChildrenTwo}
            whileHover={{ scale: 1.15, transition: { duration: 0.1 } }}
            whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
            className="mx-auto"
          >
            <Link
              href="#contact"
              className="rounded-full border border-clr-secondary-one px-2 py-1 font-bold text-clr-secondary-one transition-colors duration-200 ease-in-out hover:bg-clr-secondary-one hover:text-clr-primary-three"
            >
              Talk to me!
            </Link>
          </motion.div>
        </motion.div>

        {/* Image container */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 1, duration: 0.4 },
          }}
          viewport={{ once: true }}
          className="custom-shadow mx-auto h-full w-4/5 md:w-full"
        >
          <Image
            src="/images/aboutImage.jpg"
            alt="Picture of myself wearing a mask and a hoodie."
            width="300"
            height="600"
            className="h-full w-full rounded-3xl object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
