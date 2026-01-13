import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function LaptopScene() {
  const laptopRef = useRef<THREE.Group>(null);
  const bookRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (laptopRef.current) {
      laptopRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
    if (bookRef.current) {
      bookRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1 - 1;
    }
  });

  return (
    <group>
      {/* Laptop base */}
      <group ref={laptopRef}>
        <mesh position={[0, -0.8, 0]}>
          <boxGeometry args={[4, 0.2, 3]} />
          <meshStandardMaterial color="#4169E1" metalness={0.3} roughness={0.4} />
        </mesh>
        
        {/* Screen */}
        <mesh position={[0, 0.5, -1.3]} rotation={[-0.2, 0, 0]}>
          <boxGeometry args={[3.8, 2.5, 0.1]} />
          <meshStandardMaterial color="#1a1a2e" />
        </mesh>
        
        {/* Screen glow */}
        <mesh position={[0, 0.5, -1.25]} rotation={[-0.2, 0, 0]}>
          <planeGeometry args={[3.6, 2.3]} />
          <meshStandardMaterial 
            color="#6366F1" 
            emissive="#6366F1"
            emissiveIntensity={0.5}
          />
        </mesh>
      </group>

      {/* Floating books */}
      <Float speed={1.5} rotationIntensity={0.3}>
        <group ref={bookRef} position={[-2, -1, 1]}>
          <mesh>
            <boxGeometry args={[1.2, 1.6, 0.3]} />
            <meshStandardMaterial color="#F97316" />
          </mesh>
        </group>
      </Float>

      {/* Plant */}
      <Float speed={2} floatIntensity={0.2}>
        <group position={[-2.5, -0.5, 0.5]}>
          <mesh position={[0, 0, 0]}>
            <cylinderGeometry args={[0.3, 0.4, 0.8, 8]} />
            <meshStandardMaterial color="#D2691E" />
          </mesh>
          <mesh position={[0, 0.6, 0]}>
            <sphereGeometry args={[0.5, 16, 16]} />
            <meshStandardMaterial color="#228B22" />
          </mesh>
        </group>
      </Float>

      {/* Floating lightbulb */}
      <Float speed={3} floatIntensity={0.5}>
        <group position={[2, 1.5, 0]}>
          <mesh>
            <sphereGeometry args={[0.4, 16, 16]} />
            <meshStandardMaterial color="#FBBF24" emissive="#FBBF24" emissiveIntensity={0.8} />
          </mesh>
          <pointLight position={[0, 0, 0]} color="#FBBF24" intensity={2} distance={3} />
        </group>
      </Float>

      {/* Rocket */}
      <Float speed={2.5} floatIntensity={0.4}>
        <group position={[2.5, 0.5, 0.5]} rotation={[0, 0, -0.5]}>
          <mesh>
            <coneGeometry args={[0.3, 1, 8]} />
            <meshStandardMaterial color="#FF6B6B" />
          </mesh>
          <mesh position={[0, -0.7, 0]}>
            <cylinderGeometry args={[0.3, 0.3, 0.5, 8]} />
            <meshStandardMaterial color="#4ECDC4" />
          </mesh>
        </group>
      </Float>

      {/* Code symbols floating */}
      <Float speed={2} floatIntensity={0.6}>
        <group position={[1.5, -0.5, 2]}>
          <mesh>
            <boxGeometry args={[0.8, 0.8, 0.1]} />
            <meshStandardMaterial color="#14B8A6" emissive="#14B8A6" emissiveIntensity={0.3} />
          </mesh>
        </group>
      </Float>
    </group>
  );
}

export const Interactive3DWorkspace = ({ height = 500 }: { height?: number }) => {
  return (
    <div style={{ height: `${height}px`, width: '100%' }}>
      <Canvas camera={{ position: [0, 2, 8], fov: 50 }}>
        <color attach="background" args={['transparent']} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#ffffff" />
        <pointLight position={[-10, 5, -10]} intensity={0.5} color="#6366F1" />
        <LaptopScene />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
};
