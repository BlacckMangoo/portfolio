import React, { useState, useEffect } from "react";
import "./ArtGallery.css";
import { motion } from "framer-motion";

// Import images
import meditation from './artworks/Screenshot 2025-01-17 020237.png';
import Screenshot_2024_06_05_190003 from './artworks/Screenshot 2024-06-05 190003.png';
import Screenshot_2024_07_05_183359 from './artworks/Screenshot 2024-07-05 183359.png';
import Screenshot_2024_07_05_184055 from './artworks/Screenshot 2024-07-05 184055.png';
import Screenshot_2024_08_12_231651 from './artworks/Screenshot 2024-08-12 231651.png';
import Screenshot_2024_08_18_173106 from './artworks/Screenshot 2024-08-18 173106.png';
import Screenshot_2024_09_08_173858 from './artworks/Screenshot 2024-09-08 173858.png';
import Screenshot_2024_09_15_022149 from './artworks/Screenshot 2024-09-15 022149.png';
import Screenshot_2024_09_25_092828 from './artworks/Screenshot 2024-09-25 092828.png';
import Screenshot_2024_09_25_173816 from './artworks/Screenshot 2024-09-25 173816.png';
import Screenshot_2024_10_09_234705 from './artworks/Screenshot 2024-10-09 234705.png';
import Screenshot_2024_10_18_013116 from './artworks/Screenshot 2024-10-18 013116.png';
import Screenshot_2024_10_24_013143 from './artworks/Screenshot 2024-10-24 013143.png';
import Screenshot_2024_11_03_013410 from './artworks/Screenshot 2024-11-03 013410.png';
import Screenshot_2024_12_15_010149 from './artworks/Screenshot 2024-12-15 010149.png';
import Screenshot_2024_12_29_233014 from './artworks/Screenshot 2024-12-29 233014.png';
import Screenshot_2024_12_29_233402 from './artworks/Screenshot 2024-12-29 233402.png';
import Screenshot_2024_12_31_114428 from './artworks/Screenshot 2024-12-31 114428.png';

// Rearranged image order for better visual flow and grouping
const images = [
  // Feature image - wide landscape with strong visual impact
  Screenshot_2024_11_03_013410,
  
  // Top row - vibrant, colorful images
  Screenshot_2024_12_31_114428,
  Screenshot_2024_07_05_183359,
  
  // Second section - abstract/geometric works
  Screenshot_2024_09_25_092828,
  Screenshot_2024_09_25_173816,
  
  // Middle section - dark/detailed pieces
  meditation,
  Screenshot_2024_08_12_231651,
  
  // Late-middle section - experimental/distinctive works
  Screenshot_2024_10_09_234705,
  Screenshot_2024_10_18_013116,
  
  // Later section - softer, atmospheric pieces
  Screenshot_2024_08_18_173106,
  Screenshot_2024_09_15_022149,
  
  // Final section - conceptual pieces
  Screenshot_2024_12_15_010149,
  Screenshot_2024_10_24_013143,
  Screenshot_2024_12_29_233014,
  Screenshot_2024_06_05_190003,
];

const ArtGallery = () => {
  const [imageInfo, setImageInfo] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
  // Update window width on resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Preload images to get their natural dimensions
  useEffect(() => {
    const loadImages = async () => {
      const info = await Promise.all(
        images.map((src) => {
          return new Promise((resolve) => {
            const img = new Image();
            img.onload = () => {
              // Calculate aspect ratio
              const aspectRatio = img.naturalWidth / img.naturalHeight;
              
              // Determine ideal display size based on aspect ratio
              let idealSpan = 1;
              
              // Very wide landscapes (panoramas)
              if (aspectRatio > 1.8) {
                idealSpan = 2;
              }
              // Square or portrait
              else if (aspectRatio < 0.9) {
                idealSpan = 1;
              }
              // Standard landscape
              else {
                idealSpan = 1;
              }
              
              // Adjust for certain special images by index
              if ([0, 5, 6].includes(images.indexOf(src))) {
                idealSpan = 2; // Feature these images
              }
              
              resolve({
                width: img.naturalWidth,
                height: img.naturalHeight,
                aspectRatio,
                idealSpan
              });
            };
            img.src = src;
          });
        })
      );
      setImageInfo(info);
    };

    loadImages();
  }, []);

  // Determine optimal layout
  const calculateLayout = () => {
    if (!imageInfo.length) return [];
    
    let layout = [];
    let rowSum = 0;
    let rowImages = [];
    const targetRowLength = windowWidth < 768 ? 1 : (windowWidth < 1200 ? 2 : 3);
    
    images.forEach((src, index) => {
      const info = imageInfo[index];
      if (!info) return;
      
      // If this is first image or adding it doesn't overflow row
      if (rowSum === 0 || (rowSum + info.idealSpan <= targetRowLength)) {
        rowSum += info.idealSpan;
        rowImages.push({
          src, 
          index,
          ...info,
          span: info.idealSpan
        });
      } else {
        // Complete current row
        layout.push([...rowImages]);
        // Start new row with this image
        rowSum = info.idealSpan;
        rowImages = [{
          src, 
          index,
          ...info,
          span: info.idealSpan
        }];
      }
    });
    
    // Add the last row if it's not empty
    if (rowImages.length > 0) {
      layout.push([...rowImages]);
    }
    
    return layout;
  };

  const layout = calculateLayout();

  return (
    <div className="art-gallery-container">
      {layout.map((row, rowIndex) => (
        <div key={`row-${rowIndex}`} className="art-gallery-row">
          {row.map(({ src, index, span, aspectRatio }) => (
            <motion.div
              className="image-container"
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                y: -5,
                boxShadow: "0 12px 30px rgba(0, 255, 0, 0.6)"
              }}
              style={{
                flexBasis: `${span === 2 ? '100%' : span === 1 && row.length === 1 ? '70%' : ''}`,
                aspectRatio: aspectRatio > 0 ? aspectRatio : 'auto',
                marginLeft: row.length === 1 ? 'auto' : null,
                marginRight: row.length === 1 ? 'auto' : null,
                minHeight: 'auto'
              }}
            >
              <img 
                src={src} 
                alt={`Artwork ${index + 1}`} 
                className="art-image"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ArtGallery;