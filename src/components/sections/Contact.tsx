import SectionTitle from "../elements/SectionTitle";

import { motion } from "framer-motion";
import { SiGithub, SiInstagram, SiLinkedin, SiTwitter } from "react-icons/si";

/* Framer motion variants */
const variantContanier = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { delayChildren: 1, staggerChildren: 0.2 },
  },
};
const variantChildren = {
  hidden: { opacity: 0, y: -16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const Contact = () => {
  return (
    <section id="contact" className="w-full px-4 pt-4">
      <SectionTitle titleText="Contact" />
      <div className="mx-auto w-full max-w-4xl px-4 pt-6">
        <motion.p
          initial={{ opacity: 0, y: -16 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.6, duration: 0.2 },
          }}
          viewport={{ once: true }}
          className="md:text-lg"
        >
          If you wanna work together get in touch, you can find me here...
        </motion.p>
        <div className="py-2" />
        <div className="flex flex-col items-center justify-center gap-4">
          <motion.a
            initial={{ opacity: 0, y: -16 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.8, duration: 0.4 },
            }}
            whileHover={{ scale: 1.15, transition: { duration: 0.1 } }}
            whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
            viewport={{ once: true }}
            href="mailto:iam.camilomillan@gmail.com"
            target="_blank"
            className="text-xl transition-colors duration-200 ease-in-out hover:text-clr-secondary-one md:text-2xl"
          >
            iam.camilomillan@gmail.com
          </motion.a>
          <motion.div
            variants={variantContanier}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4"
          >
            <motion.a
              variants={variantChildren}
              whileHover={{ scale: 1.15, transition: { duration: 0.1 } }}
              whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
              href="https://www.linkedin.com/in/camilo-millan-664019232/"
              target="_blank"
              className="text-3xl transition-colors duration-200 ease-in-out hover:text-clr-secondary-one"
            >
              <SiLinkedin />
            </motion.a>
            <motion.a
              variants={variantChildren}
              whileHover={{ scale: 1.15, transition: { duration: 0.1 } }}
              whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
              href="https://github.com/CoGuisMod"
              target="_blank"
              className="text-3xl transition-colors duration-200 ease-in-out hover:text-clr-secondary-one"
            >
              <SiGithub />
            </motion.a>
            <motion.a
              variants={variantChildren}
              whileHover={{ scale: 1.15, transition: { duration: 0.1 } }}
              whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
              href="https://www.instagram.com/coguismod/"
              target="_blank"
              className="text-3xl transition-colors duration-200 ease-in-out hover:text-clr-secondary-one"
            >
              <SiInstagram />
            </motion.a>
            <motion.a
              variants={variantChildren}
              whileHover={{ scale: 1.15, transition: { duration: 0.1 } }}
              whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
              href="https://twitter.com/CoGuisMod"
              target="_blank"
              className="text-3xl transition-colors duration-200 ease-in-out hover:text-clr-secondary-one"
            >
              <SiTwitter />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
