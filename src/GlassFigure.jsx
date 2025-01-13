import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const RotatingGlass = () => {
  const glassRef = useRef();

  // Rotate the glass object
  useFrame(() => {
    if (glassRef.current) {
      glassRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={glassRef} position={[1.5, 0, 0]}>
      {/* Geometry for the abstract shape */}
      <icosahedronGeometry args={[1, 0]} />
      {/* Physical material for glass effect */}
      <meshPhysicalMaterial
        color="white"
        transmission={0.9} // Enables transparency
        roughness={0.1}
        thickness={1} // Glass thickness
        clearcoat={1.0}
        ior={1.5} // Index of Refraction
      />
    </mesh>
  );
};

export default RotatingGlass;
