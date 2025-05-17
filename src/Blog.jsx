import React, { useRef, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import './BlogCard.css'; // We'll create this file next

// Fallback component for when 3D rendering has issues
const BlogCardsFallback = () => {
  const blogs = [
    { 
      id: 1, 
      title: "Make Beautiful Art for Your Game Even if You Suck at It", 
      url: 'https://dev.to/blacckmangoo/make-beautiful-art-for-your-game-even-if-you-suck-at-it-dg' 
    },
    { 
      id: 2, 
      title: "Does Certainty Exist?", 
      url: 'https://dev.to/blacckmangoo/does-certainity-exist--11mk' 
    },
    { 
      id: 3, 
      title: "Exploring the Nature of Certainty", 
      url: 'https://dev.to/blacckmangoo/does-certainity-exist--11mk' 
    },
  ];

  return (
    <div className="blog-fallback-container">
      {blogs.map((blog) => (
        <motion.div 
          key={blog.id}
          className="blog-card-fallback"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.open(blog.url, "_blank")}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: blog.id * 0.2 }}
        >
          <h3>{blog.title}</h3>
          <p className="card-hint">Click to read</p>
        </motion.div>
      ))}
    </div>
  );
};

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
      url: 'https://dev.to/blacckmangoo/does-certainity-exist--11mk' 
    },
    { 
      id: 3, 
      title: "Exploring the Nature of Certainty", 
      url: 'https://dev.to/blacckmangoo/does-certainity-exist--11mk' 
    },
  ];

  return (
    <div className="blog-section-container" id="blogs">
      <div className="blog-grid">
        {blogs.map((blog) => (
          <motion.div 
            key={blog.id}
            className="blog-card"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 20px rgba(0, 255, 0, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open(blog.url, "_blank")}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: blog.id * 0.2 }}
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
