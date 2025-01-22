import AccordVideo from '/src/trailer.mp4';

import React from "react";
import IconTray from './ToolsIconList.jsx';

const icons = [
  <i class="devicon-unity-plain-wordmark"></i>,
 
  <i class="devicon-photoshop-plain"></i>,

  <i class="devicon-csharp-plain-wordmark"></i>,
];

const Projects = () => {

  const explanationText ="Accord is a 2d shooting platformer , set in a hand sketched world , Till now I have implemented a basic platforming mechanics like wall jumping dashing , an inventory system and a shop system along with multiple bullet types and ability to switch between weapons  ";

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
        padding: " 5rem",
        boxSizing: "border-box",
        margin:'0'
      }}
    >
      <div style={{ flex: 1, textAlign: "center", paddingTop: "20px" ,maxWidth:'40rem'}}>
        <h1>Accord</h1>
        <p style={{ fontSize: "18px", lineHeight: "1.6", maxWidth:'40rem' }}>{explanationText}</p>
        <div  >
         <IconTray iconlist={icons}></IconTray>
      </div>
      </div>
      
      {/* Video */}
      <div style={{ flex: 1, textAlign: "center", padding: "20px" }}>
        <video
          width="100%"
           autoPlay muted loop
          style={{
            maxWidth: "80rem",
            borderRadius: "10px",
            
            boxShadow: "0px 4px 10px rgb(0, 0, 0)",
          }}
        >
          <source src={AccordVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Projects;

