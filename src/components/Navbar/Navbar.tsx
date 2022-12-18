import { useEffect, useState } from "react";
import Link from "next/link";

import { motion } from "framer-motion";

import NavMobile from "./NavMobile";
import { debounce } from "../../utils/debounce";

import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [prevScrollPosition, setPrevScrollPosition] = useState(0);
  const [visible, setVisible] = useState(true);
  const [transparent, setTransparent] = useState(true);

  const [isHidden, setIsHidden] = useState(true);

  const handleScroll = debounce(() => {
    const currentScrollPosition = window.scrollY;

    setTransparent(currentScrollPosition === 0);
    setVisible(
      (prevScrollPosition > currentScrollPosition &&
        prevScrollPosition - currentScrollPosition > 70) ||
        currentScrollPosition < 10
    );

    setPrevScrollPosition(currentScrollPosition);
  }, 100);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPosition, visible, handleScroll]);

  return (
    <motion.header
      animate={visible ? { y: "0" } : { y: "-100%" }}
      className={`fixed ${
        transparent ? "" : "bg-clr-primary-one/75"
      } z-20 w-full p-4 transition-colors duration-200 ease-in-out`}
    >
      <div className="flex items-center justify-between">
        <div
          onClick={() => setIsHidden(true)}
          className="z-20 text-xl font-bold"
        >
          <Link href="/">
            <span className="text-clr-secondary-one">&#60;</span>Camilo
            <span className="text-clr-secondary-one">Millan</span>&#47;
            <span className="text-clr-secondary-one">&#62;</span>
          </Link>
        </div>

        <nav className="hidden items-center justify-center gap-4 md:flex">
          <Link
            href="#about"
            className="font-medium transition-all duration-200 ease-in-out hover:text-clr-secondary-one"
          >
            About
          </Link>
          <Link
            href="#skills"
            className="font-medium transition-all duration-200 ease-in-out hover:text-clr-secondary-one"
          >
            Skills
          </Link>
          <Link
            href="#projects"
            className="font-medium transition-all duration-200 ease-in-out hover:text-clr-secondary-one"
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className="font-medium transition-all duration-200 ease-in-out hover:text-clr-secondary-one"
          >
            Contact
          </Link>
        </nav>
        <a
          href="../assets/resume.pdf"
          className="hidden rounded-full border border-clr-secondary-one bg-transparent px-2 py-1 font-bold text-clr-secondary-one transition-colors duration-200 ease-in-out hover:bg-clr-secondary-one hover:text-clr-primary-three md:block"
          download="resume"
        >
          My Resume
        </a>
        <NavMobile isHidden={isHidden} setIsHidden={setIsHidden} />
        <button
          onClick={() => setIsHidden(!isHidden)}
          className="z-20 text-2xl transition-colors duration-200 ease-in-out hover:text-clr-secondary-one md:hidden"
        >
          {isHidden ? <HiMenu /> : <HiX />}
        </button>
      </div>
    </motion.header>
  );
};

export default Navbar;
