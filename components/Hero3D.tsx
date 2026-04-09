"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls, Sphere, Torus } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function HoloGlobe() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += 0.003;
    groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.2;
  });

  return (
    <group ref={groupRef}>
      <Float speed={2.2} rotationIntensity={0.5} floatIntensity={1.2}>
        <Sphere args={[1.25, 48, 48]}>
          <meshStandardMaterial
            color="#89d9ff"
            emissive="#2f66ff"
            emissiveIntensity={0.65}
            roughness={0.15}
            metalness={0.85}
            wireframe
          />
        </Sphere>
      </Float>
      <Torus args={[1.85, 0.05, 24, 120]} rotation={[Math.PI / 2.8, 0.3, 0]}>
        <meshStandardMaterial color="#9f7bff" emissive="#8f77ff" emissiveIntensity={1.2} />
      </Torus>
      <Torus args={[2.2, 0.03, 24, 120]} rotation={[Math.PI / 1.6, 0.1, 0.5]}>
        <meshStandardMaterial color="#3be7ff" emissive="#3be7ff" emissiveIntensity={0.8} />
      </Torus>
    </group>
  );
}

export function Hero3D() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 55 }}>
      <color attach="background" args={["#04030b"]} />
      <ambientLight intensity={0.9} />
      <pointLight position={[2, 3, 3]} intensity={13} color="#50a8ff" />
      <pointLight position={[-2, -2, 2]} intensity={9} color="#b98dff" />
      <HoloGlobe />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.28} />
    </Canvas>
  );
}
