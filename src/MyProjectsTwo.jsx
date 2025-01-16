

import SierpinskiVideo from '/src/sierpinski.mp4';

import React from "react";
import IconTray from './ToolsIconList.jsx';
import { svg } from 'motion/react-client';

const icons = [

    <i class="devicon-react-original-wordmark"></i>,
    <i class="devicon-threejs-original-wordmark"></i>,
    <i class="devicon-javascript-plain"></i>
]
;
const ProjectsTwo = () => {

  const explanationText ="I started it as a simple sierpinski triangle excercise to learn recursion and java script , extended it to 3d  using chaos game algorithm , Then i thought wouldnt it be crazy if i extend it 4 dimensions and project it onto 3d space  and got this intresting fractal   ";

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        padding: " 5rem",
        boxSizing: "border-box",
        margin:'0'
      }}
    >
      {/* Explanation Text */}
      <div style={{ flex: 1, textAlign: "center", paddingTop: "20px" ,maxWidth:'40rem'}}>
        <h1> Sierpinski triangle extended to 3D and 4D</h1>
        <p style={{ fontSize: "19px", lineHeight: "1.6", maxWidth:'40rem' }}>{explanationText}</p>
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
          <source src={SierpinskiVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default ProjectsTwo;

