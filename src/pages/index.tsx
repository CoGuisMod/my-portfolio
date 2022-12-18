import { type NextPage } from "next";
import Head from "next/head";

/* Images imports */
/* import whatToDoImage from "/images/whatToDoImage.png";
import theCinephileHouse from "/images/theCinephileHouse.png";
import rickAndMortyImage from "/images/rickAndMortyImage.png"; */

/* Components imports */
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";

/* Sections imports */
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Skills from "../components/sections/Skills";
import Projects from "../components/sections/Projects";
import Contact from "../components/sections/Contact";

/* Icons */
import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiSass,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

/* Skills data */
const skills: Array<object> = [
  {
    skillIcon: <SiHtml5 className="text-orange-400" />,
    skillName: "HTML5",
    skillExperience: "1+ years",
    skillProficiency: "High",
  },
  {
    skillIcon: <SiCss3 className="text-blue-400" />,
    skillName: "CSS3",
    skillExperience: "1+ years",
    skillProficiency: "High",
  },
  {
    skillIcon: <SiSass className="text-pink-400" />,
    skillName: "Sass",
    skillExperience: "1+ years",
    skillProficiency: "High",
  },
  {
    skillIcon: <SiTailwindcss className="text-cyan-400" />,
    skillName: "Tailwind CSS",
    skillExperience: "1+ years",
    skillProficiency: "High",
  },
  {
    skillIcon: <SiJavascript className="text-yellow-400" />,
    skillName: "JavaScript",
    skillExperience: "1+ years",
    skillProficiency: "High",
  },
  {
    skillIcon: <SiTypescript className=" text-blue-400" />,
    skillName: "TypeScript",
    skillExperience: "6+ months",
    skillProficiency: "Medium",
  },
  {
    skillIcon: <SiReact className="text-3xl text-cyan-400" />,
    skillName: "React JS",
    skillExperience: "1+ years",
    skillProficiency: "High",
  },
  {
    skillIcon: <SiNextdotjs className="text-3xl text-black" />,
    skillName: "Next JS",
    skillExperience: "6+ months",
    skillProficiency: "Medium",
  },
];

/* Projects data */
const projects = [
  {
    /* projectImage: whatToDoImage, */
    projectTitle: "WhatToDo",
    projectLink: "https://todoapp-d0363.web.app/",
    projectDescription: "To-Do application for productivity managment.",
    projectStack: ["Next JS", "Tailwind CSS", "Firebase"],
  },
  {
    /* projectImage: theCinephileHouse, */
    projectTitle: "Netflix Clone",
    projectLink: "https://netflixclone-a44e2.web.app/",
    projectDescription: "Netflix UI clone that fetches the TMDB API.",
    projectStack: ["React JS", "Tailwind CSS", "Firebase", "Axios"],
  },
  {
    /* projectImage: rickAndMortyImage, */
    projectTitle: "Rick and Morty Wiki",
    projectLink: "https://rickandmortywiki-f8dc1.web.app/",
    projectDescription: "Rick and morty wiki made with the Rick And Morty API.",
    projectStack: ["React JS", "Tailwind CSS", "Axios"],
  },
];

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>I&#39;m Camilo Millan</title>
        <meta
          name="description"
          content="Hey! I'm Camilo Millan and this is my personal portfolio."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <main>
        {/* Hero */}
        <Hero />

        <div className="py-4" />

        {/* About */}
        <About />

        <div className="py-4" />

        {/* Skills */}
        <Skills skills={skills} />

        <div className="py-4" />

        {/* Projects */}
        <Projects projects={projects} />

        <div className="py-4" />

        {/* Contact */}
        <Contact />
      </main>

      <div className="py-4 md:py-8" />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Home;
