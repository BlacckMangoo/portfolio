import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TypingEffect = ({ text = "" }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    if (!text) return; // Guard clause to prevent issues with undefined text

    let index = 0; // Start from the first character
    setDisplayedText(""); // Clear previous text when a new text is passed

    const interval = setInterval(() => {
      if (index < text.length-1) {
        setDisplayedText((prev) => (prev || "") + text[index]); // Append the next character
        index++;
      } else {
        clearInterval(interval); // Clear interval once the text is fully displayed
      }
    }, 100); // Adjust typing speed

    return () => clearInterval(interval); // Clean up on unmount or text change
  }, [text]); // Rerun when `text` changes

  return (
    <motion.h1
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      style={{ fontSize: "2rem", fontWeight: "bold" }}
    >
      {displayedText}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{
          repeat: Infinity,
          duration: 0.5,
        }}
        style={{ display: "inline-block" }}
      >
        |
      </motion.span>
    </motion.h1>
  );
};

export default TypingEffect;



