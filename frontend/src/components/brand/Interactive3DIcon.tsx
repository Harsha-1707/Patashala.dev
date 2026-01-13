import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

interface Icon3DProps {
  type: 'book' | 'code' | 'lightbulb';
  color: string;
}

function Book({ color }: { color: string }) {
  return (
    <group>
      <mesh position={[0, 0, 0.1]}>
        <boxGeometry args={[2, 2.5, 0.4]} />
        <meshStandardMaterial color={color} />
      </mesh>
      <mesh position={[0, 0, -0.1]}>
        <boxGeometry args={[2, 2.5, 0.2]} />
        <meshStandardMaterial color={new THREE.Color(color).multiplyScalar(0.8).getHex()} />
      </mesh>
    </group>
  );
}

function CodeBrackets({ color }: { color: string }) {
  return (
    <group>
      {/* Left bracket */}
      <mesh position={[-0.8, 0, 0]}>
        <torusGeometry args={[0.6, 0.2, 8, 16, Math.PI]} />
        <meshStandardMaterial color={color} />
      </mesh>
      {/* Right bracket */}
      <mesh position={[0.8, 0, 0]} rotation={[0, 0, Math.PI]}>
        <torusGeometry args={[0.6, 0.2, 8, 16, Math.PI]} />
        <meshStandardMaterial color={color} />
      </mesh>
    </group>
  );
}

function Lightbulb({ color }: { color: string }) {
  return (
    <group>
      {/* Bulb */}
      <mesh position={[0, 0.5, 0]}>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} />
      </mesh>
      {/* Base */}
      <mesh position={[0, -0.5, 0]}>
        <cylinderGeometry args={[0.5, 0.6, 0.8, 16]} />
        <meshStandardMaterial color="#C0C0C0" metalness={0.8} />
      </mesh>
      {/* Filament glow */}
      <pointLight position={[0, 0.5, 0]} color={color} intensity={2} distance={3} />
    </group>
  );
}

function AnimatedIcon({ type, color }: Icon3DProps) {
  const meshRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  
  useFrame((_state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += hovered ? 0.03 : 0.01;
      meshRef.current.scale.setScalar(hovered ? 1.2 : 1);
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group 
        ref={meshRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        {type === 'book' && <Book color={color} />}
        {type === 'code' && <CodeBrackets color={color} />}
        {type === 'lightbulb' && <Lightbulb color={color} />}
      </group>
    </Float>
  );
}

export const Interactive3DIcon = ({ type, color = '#6366F1', size = 200 }: Icon3DProps & { size?: number }) => {
  return (
    <div style={{ width: `${size}px`, height: `${size}px` }} className="inline-block">
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 5, 5]} intensity={1} />
        <pointLight position={[-5, -5, -5]} intensity={0.5} color="#14B8A6" />
        <AnimatedIcon type={type} color={color} />
      </Canvas>
    </div>
  );
};
