"use client";

import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function MedTechHoloCore() {
  const coreRef = useRef<THREE.Group>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const ring3Ref = useRef<THREE.Mesh>(null);
  const innerIcosaRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();
    if (coreRef.current) {
      // Gentle floating breathing animation
      coreRef.current.position.y = Math.sin(t * 0.8) * 0.12;
      // Gentle response to pointer
      coreRef.current.rotation.y = THREE.MathUtils.lerp(
        coreRef.current.rotation.y,
        state.pointer.x * 0.45,
        0.05
      );
      coreRef.current.rotation.x = THREE.MathUtils.lerp(
        coreRef.current.rotation.x,
        -state.pointer.y * 0.45,
        0.05
      );
    }

    if (ring1Ref.current) {
      ring1Ref.current.rotation.z += delta * 0.35;
      ring1Ref.current.rotation.x += delta * 0.15;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y += delta * 0.45;
      ring2Ref.current.rotation.z -= delta * 0.2;
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.x -= delta * 0.3;
      ring3Ref.current.rotation.y += delta * 0.25;
    }
    if (innerIcosaRef.current) {
      innerIcosaRef.current.rotation.y += delta * 0.5;
      innerIcosaRef.current.rotation.x -= delta * 0.3;
    }
  });

  return (
    <group ref={coreRef}>
      {/* Central Pulsing Geometric Core */}
      <mesh ref={innerIcosaRef}>
        <icosahedronGeometry args={[0.9, 1]} />
        <meshStandardMaterial
          color="#10b981"
          emissive="#065f4a"
          emissiveIntensity={0.6}
          wireframe
          transparent
          opacity={0.75}
        />
      </mesh>

      {/* Solid Inner Glow Sphere */}
      <mesh>
        <sphereGeometry args={[0.45, 24, 24]} />
        <meshStandardMaterial
          color="#6ee7b7"
          emissive="#10b981"
          emissiveIntensity={1.2}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      {/* Orbital Ring 1 - Equator */}
      <mesh ref={ring1Ref}>
        <torusGeometry args={[1.5, 0.025, 16, 80]} />
        <meshStandardMaterial
          color="#34d399"
          emissive="#059669"
          emissiveIntensity={0.8}
          transparent
          opacity={0.85}
        />
      </mesh>

      {/* Orbital Ring 2 - Latitude 45 */}
      <mesh ref={ring2Ref} rotation={[Math.PI / 4, 0, 0]}>
        <torusGeometry args={[1.9, 0.02, 16, 90]} />
        <meshStandardMaterial
          color="#6ee7b7"
          emissive="#10b981"
          emissiveIntensity={0.6}
          transparent
          opacity={0.65}
        />
      </mesh>

      {/* Orbital Ring 3 - Polar */}
      <mesh ref={ring3Ref} rotation={[0, Math.PI / 3, Math.PI / 6]}>
        <torusGeometry args={[2.3, 0.018, 16, 100]} />
        <meshStandardMaterial
          color="#10b981"
          emissive="#047857"
          emissiveIntensity={0.4}
          transparent
          opacity={0.45}
        />
      </mesh>
    </group>
  );
}

function AmbientParticles() {
  const count = 70;
  const pointsRef = useRef<THREE.Points>(null);

  const [positions] = useState(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 8;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 6;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 6;
    }
    return pos;
  });

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.05;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.055}
        color="#6ee7b7"
        transparent
        opacity={0.7}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export function SpatialScene() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="relative flex h-[380px] w-full items-center justify-center">
        <div className="size-48 rounded-full border border-emerald-500/30 animate-pulse bg-emerald-500/10 blur-xl" />
      </div>
    );
  }

  return (
    <div className="relative h-[380px] w-full max-w-[500px] overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 4.8], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.7} />
        <pointLight position={[5, 5, 5]} intensity={1.5} color="#6ee7b7" />
        <pointLight position={[-5, -5, -2]} intensity={0.8} color="#047857" />
        <MedTechHoloCore />
        <AmbientParticles />
      </Canvas>
    </div>
  );
}
