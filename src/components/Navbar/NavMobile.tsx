import Link from "next/link";

import { motion } from "framer-motion";

type navMobileType = {
  isHidden: boolean;
  setIsHidden: any;
};

const NavMobile = ({ isHidden, setIsHidden }: navMobileType) => {
  return (
    <motion.div
      animate={isHidden ? { x: "0" } : { x: "-100%" }}
      className="fixed -right-full top-0 flex h-screen w-full origin-right flex-col items-center justify-evenly bg-clr-primary-one md:hidden"
    >
      <nav className="flex flex-col items-center justify-center gap-16 text-2xl">
        <Link
          href="#about"
          onClick={() => setIsHidden(!isHidden)}
          className="hover:text-clr-secondary-one "
        >
          About
        </Link>
        <Link
          href="#skills"
          onClick={() => setIsHidden(!isHidden)}
          className="hover:text-clr-secondary-one "
        >
          Skills
        </Link>
        <Link
          href="#projects"
          onClick={() => setIsHidden(!isHidden)}
          className="hover:text-clr-secondary-one "
        >
          Projects
        </Link>
        <Link
          href="#contact"
          onClick={() => setIsHidden(!isHidden)}
          className="hover:text-clr-secondary-one "
        >
          Contact
        </Link>
      </nav>
      <button className="rounded-full border border-clr-secondary-one px-2 py-1 text-xl text-clr-secondary-one hover:bg-clr-secondary-one hover:text-clr-primary-three">
        My Resume
      </button>
    </motion.div>
  );
};

export default NavMobile;
