import React from "react";
import "./ArtGallery.css"; // CSS file for styling
import {  motion } from "framer-motion";
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

const images = [
  

  Screenshot_2024_07_05_183359,
  Screenshot_2024_11_03_013410,
  Screenshot_2024_12_31_114428,
  Screenshot_2024_08_12_231651,
 
  Screenshot_2024_09_25_092828,
  Screenshot_2024_09_25_173816,
  Screenshot_2024_10_09_234705,
  Screenshot_2024_10_18_013116,
  Screenshot_2024_10_24_013143,
  Screenshot_2024_08_18_173106,
 
  Screenshot_2024_09_08_173858,
  Screenshot_2024_09_15_022149,
 
  Screenshot_2024_12_15_010149,

  Screenshot_2024_12_29_233014,
  Screenshot_2024_12_29_233402,

  Screenshot_2024_06_05_190003,
  Screenshot_2024_07_05_184055,
  meditation
 
];

const ArtGallery = () => {
  return (
    <div className="art-gallery">
      {images.map((image, index) => (
        <motion.div  className="image-container" key={index} initial = {{scale: 1 }}  whileHover={{ scale:1.07 }}>
          <img src={image} alt={`Artwork ${index + 1}`} className="art-image" />
        </motion.div>
      ))}
    </div>
  );
};

export default ArtGallery;