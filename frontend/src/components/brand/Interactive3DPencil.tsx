import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

function AnimatedPencil() {
  const meshRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime) * 0.1;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.3}>
      <group ref={meshRef}>
        {/* Pencil body */}
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.3, 0.3, 4, 6]} />
          <meshStandardMaterial color="#FFA500" />
        </mesh>
        
        {/* Pencil tip */}
        <mesh position={[0, -2.3, 0]}>
          <coneGeometry args={[0.3, 0.6, 6]} />
          <meshStandardMaterial color="#2C1810" />
        </mesh>
        
        {/* Eraser */}
        <mesh position={[0, 2.2, 0]}>
          <cylinderGeometry args={[0.32, 0.32, 0.4, 6]} />
          <meshStandardMaterial color="#FF69B4" />
        </mesh>
        
        {/* Metal band */}
        <mesh position={[0, 2, 0]}>
          <cylinderGeometry args={[0.33, 0.33, 0.1, 8]} />
          <meshStandardMaterial color="#C0C0C0" metalness={0.8} roughness={0.2} />
        </mesh>
      </group>
    </Float>
  );
}

export const Interactive3DPencil = ({ size = 150 }: { size?: number }) => {
  return (
    <div style={{ width: `${size}px`, height: `${size}px` }} className="cursor-pointer">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#6366F1" />
        <AnimatedPencil />
      </Canvas>
    </div>
  );
};
