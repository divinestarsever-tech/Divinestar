"use client";

import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

function BrilliantCutWireframe({ hovered }: { hovered: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  const [targetScale, setTargetScale] = useState(1);

  // Animate rotation based on mouse
  useFrame((state, delta) => {
    if (groupRef.current) {
      // Gentle constant rotation to make it feel alive
      groupRef.current.rotation.y += delta * 0.4;
      
      // Calculate target tilt based on mouse position (tracks entire canvas)
      const targetX = (state.pointer.y * Math.PI) / 6;
      const targetY = (state.pointer.x * Math.PI) / 6;
      
      if (hovered) {
        groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetX, 0.1);
        groupRef.current.rotation.z = THREE.MathUtils.lerp(groupRef.current.rotation.z, -targetY * 0.3, 0.1);
        setTargetScale(THREE.MathUtils.lerp(targetScale, 1.2, 0.1));
      } else {
        // Return to flat profile
        groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, 0, 0.05);
        groupRef.current.rotation.z = THREE.MathUtils.lerp(groupRef.current.rotation.z, 0, 0.05);
        setTargetScale(THREE.MathUtils.lerp(targetScale, 1, 0.05));
      }
      
      groupRef.current.scale.set(targetScale, targetScale, targetScale);
    }
  });

  // Dark graphite color for brand consistency
  const wireframeMaterial = new THREE.MeshBasicMaterial({ 
    color: '#1a1a1a', 
    wireframe: true,
    transparent: true,
    opacity: hovered ? 1 : 0.3
  });

  return (
    <group ref={groupRef}>
      {/* Crown (Top half) - Flattop cylinder mimicking the table and crown facets */}
      <mesh position={[0, 0.5, 0]}>
        <cylinderGeometry args={[1.2, 2.2, 0.6, 8, 1]} />
        <primitive object={wireframeMaterial} attach="material" />
      </mesh>
      
      {/* Pavilion (Bottom half) - Cone flipped upside down ending in a culet (point) */}
      <mesh position={[0, -0.8, 0]} rotation={[Math.PI, 0, 0]}>
        <coneGeometry args={[2.2, 2, 8, 1]} />
        <primitive object={wireframeMaterial} attach="material" />
      </mesh>
    </group>
  );
}

export default function InteractiveDiamondGraphic() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative w-full h-full p-8 md:p-12 flex justify-center items-center overflow-hidden cursor-crosshair md:col-span-1 min-h-[40vh] md:min-h-0 bg-[var(--color-brand-white)]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      
      {/* The 3D Canvas */}
      <div className="absolute inset-0 w-full h-full z-10">
        <Canvas camera={{ position: [0, 0, 8], fov: 45 }} className="w-full h-full">
          <ambientLight intensity={1} />
          <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.5}>
            <BrilliantCutWireframe hovered={isHovered} />
          </Float>
        </Canvas>
      </div>
      
      {/* Subtle Fig Label */}
      <span className="absolute bottom-6 right-6 font-mono text-[8px] tracking-[0.3em] uppercase text-[var(--color-brand-text-secondary)] pointer-events-none z-0">
        FIG 01.
      </span>
    </div>
  );
}
