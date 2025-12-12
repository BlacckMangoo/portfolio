
import { motion } from "framer-motion";
import './BlogCard.css'; // We'll create this file next



// Main component - Using a simple version that doesn't rely on Three.js for better reliability
const BlogCardsList = () => {
  const blogs = [
    { 
      id: 1, 
      title: "Make Beautiful Art for Your Game Even if You Suck at It", 
      url: 'https://dev.to/blacckmangoo/make-beautiful-art-for-your-game-even-if-you-suck-at-it-dg' 
    },
    { 
      id: 2, 
      title: "Does Certainty Exist?", 
      url: 'https://dev.to/blacckmangoo/does-certainity-exist--11mk'    },
    { 
      id: 3, 
      title: "How I Made 4D Fractals Using the Chaos Game Algorithm", 
      url: 'https://dev.to/blacckmangoo/how-i-made-4d-fractals-using-the-chaos-game-algorithm-5gpf' 
    },
    {
      id: 4,
      title: "How Language shapes our thoughts" ,
      url: "https://medium.com/@satvik730gupta/the-hidden-power-of-language-how-words-shape-our-thoughts-and-world-028cfa6fe348"
    },
  ];

  return (
    <div className="blog-section-container">
  
      <div className="blog-grid ">
        {blogs.map((blog) => (
          <motion.div 
            key={blog.id}
            className="blog-card"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 20px rgba(0, 255, 0, 0.5)"
            }}
            onClick={() => window.open(blog.url, "_blank")}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="card-content">
              <h3>{blog.title}</h3>
              <br />
              <p className="card-hint">Click to read</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BlogCardsList;
