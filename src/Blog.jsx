import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, PerspectiveCamera, Float } from '@react-three/drei';
import { EffectComposer, Bloom, ChromaticAberration, Noise, Vignette } from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';
import * as THREE from 'three';
// BlogCard component for individual cards
const BlogCard = ({ position, title, rotation }) => {
  const meshRef = useRef();
  
  useFrame((state) => {
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.4) * 0.1;
    meshRef.current.rotation.z=Math.sin(state.clock.elapsedTime * 0.4) * 0.1;
    meshRef.current.rotation.y=Math.sin(state.clock.elapsedTime * 0.4) * 0.1;
  });

  return (
    <Float
      speed={2}
      rotationIntensity={0.5}
      floatIntensity={0.5}
      position={position}
    >
      <mesh ref={meshRef} rotation={rotation}>
        {/* Card background */}
        <boxGeometry args={[6, 3, 1]} />
        <meshStandardMaterial 
          color="black"
          emissive="#00ff00"
          emissiveIntensity={0.4} // Increased for better bloom effect
          metalness={1}
          roughness={0.2}
        />
        
        {/* Neon border */}
        <lineSegments>
          <edgesGeometry attach="geometry" args={[new THREE.BoxGeometry(6, 3, 1)]} />
          <lineBasicMaterial 
            attach="material" 
            color="#00ff00"
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
      </mesh>
    </Float>
  );
};

// Post-processing effects wrapper
const Effects = () => {
  return (
    <EffectComposer>
      {/* Bloom effect for the neon glow */}
      <Bloom 
        intensity={2}
        luminanceThreshold={0.6}
        luminanceSmoothing={1}
        height={300}
      />
      
      {/* Slight color distortion for a cyber effect */}
      <ChromaticAberration
        offset={[0.001, 0.0017]}
        blendFunction={BlendFunction.NORMAL}
      />
     
      
      {/* Darkened edges */}
      <Vignette
        offset={0.5}
        darkness={0.9}
        blendFunction={BlendFunction.NORMAL}
      />
    </EffectComposer>
  );
};

// Main component
const BlogCardsList = () => {
  const blogs = [
    { id: 1, title: "Does Certainity Exist?", position: [-6, 3, 0], rotation: [0, -0.2, 0] },
    { id: 2, title: "Exploring 4 dimensional fractals with chaos game", position: [6, 3, -2], rotation: [0, 0, 0] },
    
  ];

  return (
    <div className="w-screen h-screen bg-black">
      <Canvas style={{width:'150rem',height:'100rem'}}
        camera={{ position: [0, 0, 10], fov: 100 }}
      >
       
      
        
        <PerspectiveCamera makeDefault position={[0, 0, 15]} />
        <ambientLight intensity={0.5} />
        
        
        {blogs.map((blog) => (
          <BlogCard
            key={blog.id}
            position={blog.position}
            title={blog.title}
            rotation={blog.rotation}
          />
        ))}
        
        <Effects />
      </Canvas>
    </div>
  );
};

export default BlogCardsList;