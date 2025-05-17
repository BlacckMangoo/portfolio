import AccordVideo from '/src/trailer.mp4';
import React from "react";
import IconTray from './ToolsIconList.jsx';
import { motion } from "framer-motion";
import LazyLoadVideo from './LazyLoadVideo.jsx';

const icons = [
  <i className="devicon-unity-plain-wordmark"></i>,
  <i className="devicon-photoshop-plain"></i>,
  <i className="devicon-csharp-plain-wordmark"></i>,
];

const Projects = () => {
  const explanationText = "Accord is a 2d shooting platformer, set in a hand sketched world. Till now I have implemented basic platforming mechanics like wall jumping dashing, an inventory system and a shop system along with multiple bullet types and ability to switch between weapons";

  return (
    <motion.div
      className="project-container"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <div className="project-content">
        <h1>Accord</h1>
        <p>{explanationText}</p>
        <IconTray iconlist={icons} />
        <a 
          href="https://satvikkgupta.itch.io/acord" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="play-button"
        >
          Play on itch.io
        </a>
      </div>
        <div className="project-video">
        <LazyLoadVideo src={AccordVideo} />
      </div>
    </motion.div>
  );
};

export default Projects;

