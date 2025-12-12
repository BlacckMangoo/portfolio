import { useState } from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';

const coursesList = [
  {
    title: "SIGNAL AND SYSTEMS",
    summary: "Mathematical analysis of signals and systems using transform methods.",
    topics: ["Fourier Series", "Laplace Transform", "Z-Transform", "LTI Systems", "Sampling"],
    tags: ["EE", "Math"]
  },
  {
    title: "PROBABILITY THEORY",
    summary: "Study of random phenomena and statistical inference.",
    topics: ["Random Variables", "Chebyshev Inequality", "Bayes Theorem", "Stochastic Processes"],
    tags: ["Math", "Stats"]
  },
  {
    title: "DLD",
    summary: "Digital Logic Design: Building blocks of digital computers.",
    topics: ["Boolean Algebra", "Logic Gates", "K-Maps", "Sequential Circuits", "Verilog"],
    tags: ["Hardware", "Logic"]
  },
  {
    title: "DSA",
    summary: "Data Structures and Algorithms: Core computer science problem solving.",
    topics: ["Arrays & Lists", "Trees & Graphs", "Sorting & Searching", "Dynamic Programming"],
    tags: ["CS", "Coding"]
  },
  {
    title: "COMP ARCHITECHTURE",
    summary: "Design and organization of computer systems.",
    topics: ["Instruction Sets", "Pipelining", "Memory Hierarchy", "Cache", "RISC vs CISC"],
    tags: ["Hardware", "Systems"]
  }
];

const CourseCard = ({ course }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      className="course-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
    >
      <button 
        className="course-header" 
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <div className="course-title-group">
          <h3 className="course-title">{course.title}</h3>
        </div>
        <span className="course-toggle">
          {isOpen ? '−' : '+'}
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="course-details"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div style={{ paddingTop: '10px' }}>
              <p className="course-summary">{course.summary}</p>
              <ul className="course-topics">
                {course.topics.map((topic, idx) => (
                  <li key={idx}>{topic}</li>
                ))}
              </ul>
              <div className="course-tags">
                {course.tags.map((tag, idx) => (
                  <span key={idx} className="course-tag">{tag}</span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

CourseCard.propTypes = {
  course: PropTypes.shape({
    title: PropTypes.string.isRequired,
    summary: PropTypes.string,
    topics: PropTypes.arrayOf(PropTypes.string),
    tags: PropTypes.arrayOf(PropTypes.string)
  }).isRequired
};

const Courses = () => {
  return (
    <section className="courses-section">
      
      <div className="courses-grid">
        {coursesList.map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>
    </section>
  );
};

export default Courses;
