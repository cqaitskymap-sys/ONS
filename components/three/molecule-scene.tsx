"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, Environment } from "@react-three/drei";
import * as THREE from "three";

function Molecule() {
  const groupRef = useRef<THREE.Group>(null);
  const elapsed = useRef(0);
  const atoms = useMemo(() => {
    const positions: [number, number, number][] = [
      [0, 0, 0], [1.2, 0.5, 0.3], [-1, 0.8, -0.2], [0.5, -1, 0.5],
      [-0.8, -0.5, 0.8], [0.3, 1.2, -0.5], [-0.3, -0.8, -0.8],
    ];
    return positions;
  }, []);

  useFrame((_, delta) => {
    elapsed.current += delta;
    if (groupRef.current) {
      groupRef.current.rotation.y = elapsed.current * 0.15;
      groupRef.current.rotation.x = Math.sin(elapsed.current * 0.1) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {atoms.map((pos, i) => (
        <Float key={i} speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
          <Sphere args={[i === 0 ? 0.35 : 0.2, 32, 32]} position={pos}>
            <MeshDistortMaterial
              color={i === 0 ? "#00d084" : i % 2 === 0 ? "#2563eb" : "#7c3aed"}
              distort={0.2}
              speed={2}
              roughness={0.2}
              metalness={0.8}
            />
          </Sphere>
        </Float>
      ))}
      {atoms.slice(1).map((pos, i) => (
        <mesh key={`bond-${i}`} position={[
          pos[0] / 2, pos[1] / 2, pos[2] / 2,
        ]}>
          <cylinderGeometry args={[0.03, 0.03, Math.sqrt(pos[0]**2 + pos[1]**2 + pos[2]**2), 8]} />
          <meshStandardMaterial color="#ffffff" opacity={0.3} transparent />
        </mesh>
      ))}
    </group>
  );
}

function Capsule({ position }: { position: [number, number, number] }) {
  const ref = useRef<THREE.Mesh>(null);
  const elapsed = useRef(0);
  useFrame((_, delta) => {
    elapsed.current += delta;
    if (ref.current) {
      ref.current.rotation.z = elapsed.current * 0.5;
    }
  });
  return (
    <Float speed={2} floatIntensity={1}>
      <mesh ref={ref} position={position}>
        <capsuleGeometry args={[0.15, 0.5, 8, 16]} />
        <meshStandardMaterial color="#00d084" metalness={0.6} roughness={0.3} />
      </mesh>
    </Float>
  );
}

function ParticleCloud() {
  const count = 200;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return pos;
  }, []);

  const ref = useRef<THREE.Points>(null);
  const elapsed = useRef(0);
  useFrame((_, delta) => {
    elapsed.current += delta;
    if (ref.current) {
      ref.current.rotation.y = elapsed.current * 0.02;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.02} color="#00d084" transparent opacity={0.6} sizeAttenuation />
    </points>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} />
      <pointLight position={[-5, -5, -5]} color="#7c3aed" intensity={0.5} />
      <Molecule />
      <Capsule position={[2.5, 1, -1]} />
      <Capsule position={[-2, -1, 1]} />
      <ParticleCloud />
      <Environment preset="city" />
    </>
  );
}

export function MoleculeScene() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
