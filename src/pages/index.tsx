import { type NextPage } from "next";
import Head from "next/head";

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
  /* {
    projectImage: "",
    projectTitle: "WhatToDo",
    projectLink: "https://todoapp-d0363.web.app/",
    projectDescription: "To-Do application for productivity managment.",
    projectStack: ["Next JS", "Tailwind CSS", "Firebase"],
  }, */
  {
    projectImage:
      "https://firebasestorage.googleapis.com/v0/b/iam-camilomillan.appspot.com/o/TheCinephileHouseImage.PNG?alt=media&token=90be410e-42c5-4f3b-afb3-ea69c42f1ae5",
    projectTitle: "The Cinephile House",
    projectLink: "https://thecinephilehouse-camilomillan.vercel.app/",
    projectDescription:
      "App for making lists, add to favorites and watchlists full of movies and shows from the TMDB API.",
    projectStack: ["Next JS", "Tailwind CSS", "Firebase", "tRPC", "Fetch API"],
  },
  {
    projectImage:
      "https://firebasestorage.googleapis.com/v0/b/iam-camilomillan.appspot.com/o/rickAndMortyImage.PNG?alt=media&token=11f34c76-4f54-4e74-93f6-3cd8fb510f4e",
    projectTitle: "Rick and Morty Wiki",
    projectLink: "https://rick-and-morty-wiki-camilomillan.vercel.app/",
    projectDescription: "Rick and morty wiki made with the Rick And Morty API.",
    projectStack: ["Next JS", "Tailwind CSS", "Fetch API", "tRPC"],
  },
  {
    projectImage:
      "https://firebasestorage.googleapis.com/v0/b/iam-camilomillan.appspot.com/o/pokepediaImage.PNG?alt=media&token=513e56a3-9e48-4666-b5e5-7cc82a8c83a1",
    projectTitle: "Pokepedia",
    projectLink: "https://pokepedia-camilomillan.vercel.app/",
    projectDescription: "Pokemon wiki made with the Pokemon API",
    projectStack: ["Next JS", "Tailwind CSS", "Fetch API"],
  },
];

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>I&#39;m Camilo Millan</title>
        <meta
          name="description"
          content="This is my personal porfolio, this will tell you a little about me, my skills as a developer, some worth-mention projects that i made and how to contact me."
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
