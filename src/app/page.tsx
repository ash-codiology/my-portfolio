"use client";

import { useState } from "react";
import { motion } from 'framer-motion';
import Head from "next/head";
import Image from 'next/image';

const Portfolio = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    setIsDarkMode(!isDarkMode);
  };

  // Animation Variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -10 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.8 },
    },
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Head>
        <title>Ashfa Shakeel | Portfolio</title>
        <meta name="description" content="Ashfa Shakeel's professional portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Header */}
      <header className="p-6 bg-teal-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 flex justify-between items-center sticky top-0 z-50 shadow-lg">
        <h1 className="text-3xl font-bold">Ashfa&apos;s Portfolio</h1>
        <nav className="space-x-8">
          <button onClick={() => scrollToSection("home")}>Home</button>
          <button onClick={() => scrollToSection("about")}>About</button>
          <button onClick={() => scrollToSection("skills")}>Skills</button>
          <button onClick={() => scrollToSection("experience")}>Experience</button>
          <button onClick={() => scrollToSection("education")}>Education</button>
          <button onClick={() => scrollToSection("contact")}>Contact</button>
        </nav>
        <button
          className="ml-4 p-2 rounded-full bg-yellow-400 dark:bg-gray-700 text-black dark:text-white"
          onClick={toggleDarkMode}
        >
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>

      {/* Main Content */}
      <main className="bg-teal-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 min-h-screen transition-colors">
        {/* Home Section */}
        <motion.section
          id="home"
          className="min-h-screen flex flex-col items-center justify-center bg-teal-100 dark:bg-gray-800 text-center"
          initial="hidden"          
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <Image 
            src="/profile-pic (1).png" 
            alt="Ashfa Shakeel" 
            className=" rounded-full shadow-lg mb-6" 
            width={400} 
            height={400} 
          />
          <h1 className="text-5xl font-bold text-gray-700 dark:text-yellow-300">
            Welcome to My Portfolio
          </h1>
          <p className="text-xl mt-4 max-w-3xl">
            {`I'm Ashfa Shakeel, a passionate pharmacist and aspiring web developer. Here, you'll discover a blend of my expertise in healthcare and my growing skills in web development. I'm excited to share my journey, experiences that combine technology and pharmacy, creating impactful solutions for better healthcare.`}
          </p>
          <p className="text-xl mt-4 max-w-3xl">
           {`Explore my portfolio to see how I bring these two worlds together. Let's connect and collaborate on new projects to help shape the future of healthcare technology!`}
          </p>
        </motion.section>

        {/* About Section */}
        <motion.section
          id="about"
          className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-700 text-center p-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <h1 className="text-4xl font-bold">About Me</h1>
          <p className="text-xl mt-4 max-w-3xl">
            {`I am a passionate pharmacist with a deep interest in technology, and my goal is to create impactful solutions that bridge the gap between healthcare and digital innovation. With a background in pharmacy and a growing expertise in web development, I strive to make healthcare more accessible and efficient through the power of technology.`}
          </p>
          <p className="text-xl mt-4 max-w-3xl">
           {` My experience in pharmacy allows me to understand the challenges healthcare professionals face, which I combine with my web development skills to create user-friendly digital tools. I am continuously learning new technologies and expanding my skills to stay at the forefront of the tech world.`}
          </p>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          id="skills"
          className="min-h-screen flex flex-col items-center justify-center bg-yellow-50 dark:bg-gray-600 text-center p-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <h1 className="text-4xl font-bold">Skills & Expertise</h1>
          <ul className="list-disc list-inside mt-6 text-lg">
            <li>{`Pharmacy Expertise - In-depth understanding of pharmaceutical practices, drug management, and patient care.`}</li>
            <li>{`Web Development - Proficient in creating full-stack web applications with Next.js, React, Node.js, and Express`}</li>
            <li>{`Front-End Technologies - Advanced knowledge of HTML, CSS, JavaScript, and Tailwind CSS for creating responsive, user-friendly interfaces.`}</li>
            <li>{`Responsive Design - Expertise in designing mobile-first, responsive websites to ensure seamless user experiences across devices.`}</li>
            <li>{`UI/UX Design - Skilled in creating intuitive and aesthetically pleasing designs that prioritize user experience.`}</li>
            <li>{`Version Control - Proficient in using Git and GitHub for collaborative coding and version management.`}</li>
          </ul>
        </motion.section>

        {/* Experience Section */}
        <motion.section
          id="experience"
          className="min-h-screen flex flex-col items-center justify-center bg-teal-50 dark:bg-gray-700 text-center p-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <h1 className="text-4xl font-bold">Experience</h1>
          <ul className="list-disc list-inside mt-6 text-lg">
            <li><strong>{`Working as a Pharmacist`}</strong>{`(2024 - Present)`}<p>{`I provide exceptional patient care through the safe and effective use of medications, bridging healthcare and technology to improve patient outcomes.`}</p></li>
            <li><strong>{`Web Developer at Governor Sindh Initiative For GenAL, Web3, Metaverse`}</strong>{` (2023 - Present)`} <p>{`I am expanding my web development skills with technologies like React and Next.js, focusing on healthcare-driven solutions.`}</p></li>
            <li><strong>{`House Job`}</strong>{` (2023-2024) `}<p>{`I worked as a hospital pharmacist, gaining hands-on experience in medication management and patient care.`}</p></li>
          </ul>
        </motion.section>

        {/* Education Section */}
        <motion.section
          id="education"
          className="min-h-screen flex flex-col items-center justify-center bg-teal-50 dark:bg-gray-700 text-center p-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <h1 className="text-4xl font-bold">Education</h1>
          <ul className="list-disc list-inside mt-6 text-lg">
            <li><strong>{`Web Development (Present)`}</strong> {`- GIAIC, 2024`}</li>
            <li><strong>{`House Job`}</strong> {`- 2022-23`}</li>
            <li><strong>{`Bachelor of Pharmacy`}</strong> {`- University of PUMHSW, 2017`}</li>
            <li><strong>{`Intermediate`}</strong> {`- County Girls College, 2016`}</li>
            <li><strong>{`Matriculation`}</strong> {`- Eaton Public School, 2014`}</li>
          </ul>
        </motion.section>
      </main>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="min-h-screen flex flex-col items-center justify-center bg-yellow-50 dark:bg-gray-800 text-center p-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <h1 className="text-4xl font-bold">Contact Me</h1>
        <p className="text-xl mt-4 max-w-3xl">{`Feel free to reach out to me for collaboration or job opportunities.`}</p>
        <form className="max-w-lg w-full space-y-4 mt-6">
          <input type="text" placeholder="Your Name" className="w-full p-4 rounded-lg shadow-sm focus:ring-2 focus:ring-yellow-500 dark:focus:ring-gray-500" />
          <input type="email" placeholder="Your Email" className="w-full p-4 rounded-lg shadow-sm focus:ring-2 focus:ring-yellow-500 dark:focus:ring-gray-500" />
          <textarea placeholder="Your Message" className="w-full p-4 rounded-lg shadow-sm focus:ring-2 focus:ring-yellow-500 dark:focus:ring-gray-500" />
          <button type="submit" className="w-full p-4 bg-yellow-400 dark:bg-gray-600 text-white rounded-lg transform transition hover:scale-105">
            Send Message
          </button>
        </form>
      </motion.section>

      {/* Footer */}
      <footer className="p-6 bg-teal-200 dark:bg-gray-900 text-gray-800 dark:text-gray-100 text-center">
        <p>&copy; 2024 Ashfa Shakeel | All Rights Reserved</p>
      </footer>
    </>
  );
};

export default Portfolio;
