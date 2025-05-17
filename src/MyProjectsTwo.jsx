import SierpinskiVideo from '/src/sierpinski.mp4';
import React from "react";
import IconTray from './ToolsIconList.jsx';
import { motion } from "framer-motion";
import LazyLoadVideo from './LazyLoadVideo.jsx';

const icons = [
  <i className="devicon-react-original-wordmark"></i>,
  <i className="devicon-threejs-original-wordmark"></i>,
  <i className="devicon-javascript-plain"></i>
];

const ProjectsTwo = () => {
  const explanationText = "I started it as a simple sierpinski triangle exercise to learn recursion and JavaScript, extended it to 3D using chaos game algorithm. Then I thought wouldn't it be crazy if I extend it to 4 dimensions and project it onto 3D space and got this interesting fractal";

  return (
    <motion.div
      className="project-container"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <div className="project-content">
        <h1>Sierpinski Triangle Extended to 3D and 4D</h1>
        <p>{explanationText}</p>
        <IconTray iconlist={icons} />
      </div>
        <div className="project-video">
        <LazyLoadVideo src={SierpinskiVideo} />
      </div>
    </motion.div>
  );
};

export default ProjectsTwo;

