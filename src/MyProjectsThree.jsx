import OnlyNandsVideo from '/src/onlynands.mp4';
import React from "react";
import IconTray from './ToolsIconList.jsx';
import { motion } from "framer-motion";
import LazyLoadVideo from './LazyLoadVideo.jsx';

const icons = [
  <i className="devicon-react-original-wordmark"></i>,
  <i className="devicon-javascript-plain"></i>
];

const ProjectsThree = () => {
  const explanationText = "Only Nands is a Logic gate evaluator made in react, you can essentially build GTA 6 using this , just need a Billions of nands probably lmao and a lot of time. It is a simple logic gate evaluator that allows you to build complex circuits using only NAND gates. The project showcases the power of functional programming and the beauty of digital logic design. You can create any logic circuit using just NAND gates, which is a fundamental concept in computer science and electronics.";

  return (
    <motion.div
      className="project-container"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <div className="project-content">
        <h1>Only Nands</h1>
        <p>{explanationText}</p>
        <IconTray iconlist={icons} />
      </div>        <div className="project-video">
          <LazyLoadVideo src={OnlyNandsVideo} />
        </div>
    </motion.div>
  );
};

export default ProjectsThree;
