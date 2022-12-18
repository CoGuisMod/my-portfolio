import Image from "next/image";

import { Typewriter } from "react-simple-typewriter";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative flex h-screen items-center justify-center"
    >
      {/* Background */}
      <div className="absolute  h-full w-full  shadow-inner-custom">
        <Image
          src="/images/heroImage.jpg"
          alt="Picture of myself."
          fill
          className="-z-10 object-cover object-center blur-sm"
        />
      </div>

      {/* Text */}
      <div className="max-w-7xl px-4">
        {/* First text */}
        <motion.h2
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 0.2 } }}
          viewport={{ once: true }}
          className="text-left text-xs sm:text-base lg:text-lg"
        >
          Hey there! How&#39;s it going? I&#39;m...
        </motion.h2>

        {/* Main text */}
        <motion.h1
          initial={{ opacity: 0, y: -16 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.2, duration: 0.4 },
          }}
          viewport={{ once: true }}
          className="text-center font-lora text-5xl font-bold xs:text-6xl sm:-my-1 sm:text-7xl md:text-8xl lg:-my-4 lg:text-9xl"
        >
          Camilo <span className="text-clr-secondary-one">Millan</span>
        </motion.h1>

        {/* second text */}
        <motion.h2
          initial={{ opacity: 0, x: 16 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { delay: 0.6, duration: 0.2 },
          }}
          viewport={{ once: true }}
          className="text-right text-xs sm:text-base lg:text-lg"
        >
          <Typewriter
            words={["Front-End Developer", "UI/UX Designer"]}
            loop={false}
          />
          .
        </motion.h2>
      </div>
    </section>
  );
};

export default Hero;
