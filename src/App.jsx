
import { motion } from "framer-motion";
import './App.css';


import Navbar from './Navbar.jsx';
import Socials from './Icon.jsx';
import MatrixBackground from './MatrixBackground.jsx';
import BlogCardsList from './Blog.jsx';
import Project from './Project.jsx';
import Courses from './Courses.jsx';
import ArtGallery from './Gallery.jsx';

// Import Videos
import AccordVideo from './trailer.mp4';
import SierpinskiVideo from './sierpinski.mp4';
import rtiwImage from './rtiow.webp';
import RemRebootVideo from './remreboot.webm'
const App = () => {
 

  // Define icons for each project as strings
  const iconsAccord = ['unity', 'photoshop', 'csharp'];
  const iconsSierpinski = ['react', 'threejs', 'javascript'];
  const iconsOnlyNands = ['react', 'javascript'];

  return (
    <div className="app-container">
      <MatrixBackground />

      {/* Content Container */}
      <div style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        <Socials />
        <Navbar />

        {/* Main Content */}
        <div className="main-content">

          {/* Hero Section */}
          <div className="text-container">
            <h1>Hey, I am</h1>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
            >
              <strong>Satvik Gupta.</strong>
            </motion.h1>

            <motion.div
              className='taglines'
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.5 }}
            >
              <p>I like C++ , Gamedev and want to understand how 
                computers work from bare metal to software </p>
              <p><strong>A</strong>rtist | <strong>G</strong>amedev | <strong>P</strong>hilosophy | <strong>C</strong>omp <strong>S</strong>ci</p> 
            </motion.div>
          </div>

          <motion.hr
            className="divider"
            initial={{ width: 0 }}
            whileInView={{ width: '90%' }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeInOut" }}
            style={{ 
              borderColor: "var(--primary-color)",
              marginTop: "30vh",
              marginBottom: "4rem"
            }}
            opacity={0.1}
          />

        

      .

          {/* BLOGS SECTION */}
          <div id="blog-section" className="section-container">
            <motion.h1
              className="simple-heading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <strong>MY BLOGS</strong>
            </motion.h1>

            <motion.div
              className="blog-list"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <BlogCardsList />
            </motion.div>
          </div>

          {/* PROJECTS SECTION */}
          <div id="projects-section" className="section-container">
            <motion.h1
              className="simple-heading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <strong>MY PROJECTS</strong>
            </motion.h1>

            <div className="projects-wrapper">
              <Project
                title="Accord"
                description="Accord is a 2D shooting platformer, set in a hand-sketched world. I have implemented basic platforming mechanics like wall jumping, dashing, an inventory system, and a shop system along with multiple bullet types and ability to switch between weapons."
                videoSrc={AccordVideo}
                icons={iconsAccord}
                link="https://satvikkgupta.itch.io/acord"
                linkText="Play on itch.io"
              />
              <Project
                title="Sierpinski Triangle Extended to 3D and 4D"
                description="I started it as a simple Sierpinski triangle exercise to learn recursion and JavaScript, extended it to 3D using the chaos game algorithm. Then I thought wouldn't it be crazy if I extend it to 4 dimensions and project it onto 3D space, and got this interesting fractal."
                videoSrc={SierpinskiVideo}
                icons={iconsSierpinski}
              />
              <Project
                title=" Basic Raytracer "
                description="Implemented a basic raytracer is cpp,SDL following the book 'Ray Tracing in One Weekend' by Peter Shirley."
                imagesrc={rtiwImage}
                icons={iconsOnlyNands}
                link="https://github.com/BlacckMangoo/RaytracingInOneWeekendSDL"
                linkText="star on github"
              />
              <Project
              title=" Remnant Reboot"
              videoSrc={RemRebootVideo}
              description = " A 2d top down shooter game made in unity in 3d days for a game jam. Collect Resources and rebuild the fallen city of remnant "
              link="https://satvikkgupta.itch.io/remnant-reboot"
              linkText="Play on itch.io"
              icons={iconsAccord}
              />
            </div>
          </div>

          {/* COURSES SECTION */}
          <div id="courses-section" className="section-container">
            <motion.h1
              className="simple-heading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <strong>MY COURSES</strong>
            </motion.h1>
            <Courses />
          </div>

          {/* ARTWORKS SECTION */}
          <div id="artworks-section" className="section-container">
            <motion.h1
              className="simple-heading"
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <strong>MY ARTWORKS</strong>
            </motion.h1>
            <ArtGallery />
          </div>

          <motion.button
            className="back-to-top"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
          >
            ↑
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default App;
