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
        {images.map((img, i) => (
          <motion.div
            key={img.path}
            className="art-gallery-item"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.4, delay: (i % 6) * 0.05 }}
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