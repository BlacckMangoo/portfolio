
import { motion } from 'framer-motion';

const Education = () => {
  return (
    <motion.div 
      id="education-section"
      className="education-mini"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.8 }}
      style={{ 
        marginTop: '2.5rem', 
        textAlign: 'left',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
        alignItems: 'flex-start',
        border: '1px solid rgba(0, 255, 0, 0.2)',
        background: 'rgba(255, 255, 255, 0.03)',
        padding: '1.5rem',
        maxWidth: '500px',
        marginLeft: 'auto',
        marginRight: 'auto'
      }}
    >
      <h3 style={{ 
        color: 'var(--primary-color)', 
        fontSize: '1.1rem', 
        margin: 0,
        fontFamily: '"Orbitron", sans-serif',
        letterSpacing: '1px'
      }}>
        Netaji Subhas University of Technology
      </h3>
      <p style={{ 
        color: '#ffffff', 
        fontSize: '0.95rem', 
        margin: 0 
      }}>
        B.Tech in ECE with AI & ML
      </p>
      <span style={{ 
        color: 'var(--primary-color)', 
        fontSize: '0.8rem',
        border: '1px solid rgba(0, 255, 0, 0.3)',
        padding: '2px 8px',
        marginTop: '0.2rem',
        opacity: 0.8
      }}>
        2nd Year
      </span>
    </motion.div>
  );
};

export default Education;
