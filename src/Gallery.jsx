import { useMemo } from "react";
import "./ArtGallery.css";
import { motion } from "framer-motion";
import LazyLoadImage from "./LazyLoadImage.jsx";

// Auto-import all images from the artworks folder (including subfolders)
const imageModules = import.meta.glob(
  "./artworks/**/*.{png,jpg,jpeg,gif,webp,svg}",
  { eager: true, import: "default" }
);

const ArtGallery = () => {
  // Build a sorted image list once
  const images = useMemo(() => {
    const entries = Object.entries(imageModules).map(([path, url]) => {
      const file = path.split("/").pop() || "image";
      const alt = file
        .replace(/[-_]/g, " ")
        .replace(/\.[^.]+$/, "")
        .trim();
      return { src: url, alt, name: file.toLowerCase(), path };
    });
    // Sort by filename for stable order
    return entries.sort((a, b) => a.name.localeCompare(b.name));
  }, []);

  return (
    <div className="art-gallery-container">
      <div className="art-gallery">
        {images.map((img) => (
          <motion.div
            key={img.path}
            className="art-gallery-item"
            whileHover={{
              scale: 1.9,
              zIndex: 999
            }}
            transition={{ 
              type: "spring",
              stiffness: 300,
              damping: 20
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          > 
            <LazyLoadImage
              src={img.src}
              alt={img.alt}
              className="artwork-image"
              style={{ width: "100%", height: "auto" }}
              containerStyle={{ width: "100%", height: "auto", position: "relative" }}
            />
          </motion.div>




         
        ))  }      </div>
    </div>
  );
};

export default ArtGallery;