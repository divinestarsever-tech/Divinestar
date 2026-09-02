"use client";

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

function GyroRings() {
  const groupRef = useRef<THREE.Group>(null);
  const ring1 = useRef<THREE.Mesh>(null);
  const ring2 = useRef<THREE.Mesh>(null);
  const ring3 = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (ring1.current) ring1.current.rotation.x += delta * 0.2;
    if (ring2.current) ring2.current.rotation.y += delta * 0.3;
    if (ring3.current) {
      ring3.current.rotation.x += delta * 0.1;
      ring3.current.rotation.z += delta * 0.25;
    }
    if (groupRef.current) {
      // Gentle floating tracking
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.3;
      groupRef.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  const material = new THREE.MeshStandardMaterial({
    color: "#ffffff",
    metalness: 1,
    roughness: 0.1,
    envMapIntensity: 2,
  });

  return (
    <group ref={groupRef}>
      <mesh ref={ring1}>
        <torusGeometry args={[2.8, 0.03, 32, 100]} />
        <primitive object={material} />
      </mesh>
      <mesh ref={ring2} rotation={[Math.PI / 4, 0, 0]}>
        <torusGeometry args={[2.4, 0.04, 32, 100]} />
        <primitive object={material} />
      </mesh>
      <mesh ref={ring3} rotation={[0, Math.PI / 3, Math.PI / 6]}>
        <torusGeometry args={[2.0, 0.05, 32, 100]} />
        <primitive object={material} />
      </mesh>
      
      {/* Central core (abstract precision node) */}
      <mesh>
        <octahedronGeometry args={[0.4, 0]} />
        <meshStandardMaterial color="#ffffff" metalness={0.9} roughness={0.1} emissive="#ffffff" emissiveIntensity={0.2} />
      </mesh>
    </group>
  );
}

export default function GyroscopeGraphic() {
  return (
    <div className="w-full h-full absolute inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 9], fov: 45 }} className="w-full h-full">
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={2} />
        <Environment preset="city" />
        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
          <GyroRings />
        </Float>
      </Canvas>
    </div>
  );
}
