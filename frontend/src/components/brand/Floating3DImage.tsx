import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, useTexture } from '@react-three/drei';
import * as THREE from 'three';

interface Floating3DImageProps {
  imagePath: string;
  size?: [number, number];
  floatIntensity?: number;
  rotationIntensity?: number;
}

function FloatingImage({ imagePath, size = [5, 5], floatIntensity = 1, rotationIntensity = 0.5 }: Floating3DImageProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const texture = useTexture(imagePath);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * rotationIntensity;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <Float
      speed={2}
      rotationIntensity={rotationIntensity}
      floatIntensity={floatIntensity}
    >
      <mesh ref={meshRef}>
        <planeGeometry args={size} />
        <meshStandardMaterial 
          map={texture} 
          transparent
          side={THREE.DoubleSide}
        />
      </mesh>
    </Float>
  );
}

export const Floating3DImage = ({ imagePath, className = '', height = 400 }: { imagePath: string; className?: string; height?: number }) => {
  return (
    <div className={className} style={{ height: `${height}px` }}>
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <FloatingImage imagePath={imagePath} />
      </Canvas>
    </div>
  );
};
