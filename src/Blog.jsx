import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text, PerspectiveCamera, Float } from "@react-three/drei";
import { EffectComposer, ChromaticAberration, Vignette } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import { motion } from "framer-motion";
import * as THREE from "three";


// BlogCard component for individual cards
const BlogCard = ({ position, title, rotation, onClick}) => {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);

  const handlePointerMove = (e) => {
    const isHovered = meshRef.current?.geometry?.boundingBox?.containsPoint(e.point);
    setHovered(isHovered);
  };

  // Frame-based animation for the card
  useFrame((state) => {
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.4) * 0.3;
    meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.4) * 0.2;
    meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.01;
  });

  return (
    <Float
      speed={2}
      rotationIntensity={0.5}
      floatIntensity={0.5}
      position={position}
    >
      <motion.mesh
        ref={meshRef}
        rotation={rotation}
        scale={hovered ? 1.1 : 1}
        onClick={onClick}
        onpointer
        onPointerOver={() => setHovered(true) }
        onPointerOut={() => setHovered(false)}
      >
        {/* Neon border */}
        <lineSegments>
          <edgesGeometry attach="geometry" args={[new THREE.BoxGeometry(6, 3, 1)]} />
          <lineBasicMaterial
            attach="material"
            color={hovered ? "#00ff11" : "#00ff00"}
            linewidth={8}
            linecap="round"
            linejoin="round"
          />
        </lineSegments>

        {/* Blog title */}
        <Text
          position={[0.2, 0, 1]}
          fontSize={0.5}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
          maxWidth={5}
        >
          {title}
        </Text>
      </motion.mesh>
    </Float>
  );
};

const Effects = () => {
  return (
    <EffectComposer>
     
    </EffectComposer>
  );
};

// Main component
const BlogCardsList = () => {
  const blogs = [
    { id: 1, title: "Does Certainty Exist?", position: [-4, 3, Math.random()], rotation: [0, -Math.random(), Math.random()] , url : 'https://satvikkguptaa.blogspot.com/2024/12/does-truth-exist.html'  },
    { id: 2, title: "Exploring 4-Dimensional Fractals with Chaos Game", position: [6, 3, -2], rotation: [0, Math.random(), Math.random()] ,url: ' https://satvikkguptaa.blogspot.com/2024/12/exploring-4th-dimension-through.html'},
  ];

  const handleCardClick = (url) => {
    window.open(url, "_blank"); 
  };

  return (
    <div className="blog-cards-container">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 15]} />
        <ambientLight intensity={0.5} />

        {blogs.map((blog) => (
          <BlogCard
            key={blog.id}
            position={blog.position}
            title={blog.title}
            rotation={blog.rotation}
            onClick={() => handleCardClick(blog.url)}
          />
        ))}

        <Effects />
      </Canvas>
    </div>
  );
};

export default BlogCardsList;
