import React, { useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Image, Environment } from '@react-three/drei'
import * as THREE from 'three'

const ArtGallery = () => {
  return (
    <div className="h-screen w-full">
      <Canvas style={{width:'100vw',height:'100vh'}}
        camera={{ position: [0, 2, 0], fov: 29 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Environment preset="warehouse" />
        <ambientLight intensity={0.3} />
        <spotLight position={[0, 10, 0]} intensity={0.2} />
        <CurvedWall />
       
        <ReflectivePlane />
        
      </Canvas>
    </div>
  )
}

const CurvedWall = () => {
  const radius = 20
  const height = 15
  const segments = 10
  const wallGeometry = useRef()

  // Create curved wall geometry
  const generateCurvedWall = () => {
    const geometry = new THREE.BufferGeometry()
    const vertices = []
    const indices = []
    const uvs = []

    // Generate vertices for half-cylinder
    for (let y = 0; y <= height; y++) {
      for (let x = 0; x <= segments; x++) {
        const theta = (x / segments) * Math.PI
        const xPos = Math.cos(theta) * radius
        const zPos = Math.sin(theta) * radius
        vertices.push(xPos, y, zPos)
        uvs.push(x / segments, y / height)
      }
    }

    // Generate faces
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < segments; x++) {
        const v1 = x + y * (segments + 1)
        const v2 = v1 + segments + 1
        const v3 = v1 + 1
        const v4 = v2 + 1

        indices.push(v1, v2, v3)
        indices.push(v2, v4, v3)
      }
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3))
    geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2))
    geometry.setIndex(indices)
    geometry.computeVertexNormals()

    return geometry
  }

  return (
    <mesh geometry={generateCurvedWall()}>
      <meshStandardMaterial 
        color="#000000" 
        roughness={0.5}
        metalness={0}
        side={THREE.DoubleSide}
      />
    </mesh>
  )
}



const ReflectivePlane = () => {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
      <planeGeometry args={[50, 80]} />
      <meshStandardMaterial 
        color="#000000"
        metalness={0}
        roughness={0.8}
      />
    </mesh>
  )
}


export default ArtGallery