"use client";

import React, { useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

function WireframeGlobe({ hovered }: { hovered: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const { viewport } = useThree();
  
  // If viewport is narrow (mobile), scale down the sphere to prevent it from being too big
  const isMobile = viewport.width < 6;
  const baseScale = isMobile ? 0.65 : 1.0;
  const hoverScale = isMobile ? 0.7 : 1.05;

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Gentle continuous rotation to simulate a living global node
      meshRef.current.rotation.y += delta * 0.15;
      meshRef.current.rotation.x += delta * 0.05;
      
      // Calculate target tilt based on mouse position
      const targetX = (state.pointer.y * Math.PI) / 4;
      const targetY = (state.pointer.x * Math.PI) / 4;
      
      if (hovered) {
        // Shift towards mouse/touch
        meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, targetX, 0.05);
        meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, targetY, 0.05);
        // Slightly scale up for interactivity
        meshRef.current.scale.lerp(new THREE.Vector3(hoverScale, hoverScale, hoverScale), 0.05);
      } else {
        // Return to natural scale
        meshRef.current.scale.lerp(new THREE.Vector3(baseScale, baseScale, baseScale), 0.05);
      }
    }
  });

  return (
    <mesh ref={meshRef}>
      {/* A geodesic sphere (Icosahedron with detail) for a premium technical look */}
      <icosahedronGeometry args={[3, 2]} />
      <meshBasicMaterial 
        color="#1a1a1a" 
        wireframe={true}
        transparent={true}
        opacity={hovered ? 0.3 : 0.08}
      />
    </mesh>
  );
}

export default function InteractiveGlobeGraphic() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="absolute inset-0 w-full h-full z-0 overflow-hidden cursor-crosshair transition-colors duration-1000"
      style={{ backgroundColor: isHovered ? 'var(--color-brand-white)' : 'transparent' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
      onTouchCancel={() => setIsHovered(false)}
    >
      <Canvas camera={{ position: [0, 0, 7], fov: 45 }} className="w-full h-full touch-none">
        <ambientLight intensity={1} />
        <Float speed={1} rotationIntensity={0.2} floatIntensity={0.5}>
          <WireframeGlobe hovered={isHovered} />
        </Float>
      </Canvas>
    </div>
  );
}
