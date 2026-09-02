"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef, useState } from "react";
import * as THREE from "three";
import { useRetroMode } from "@/context/RetroModeContext";

function CRTMonitor() {
    const monitor = useRef<THREE.Group>(null);
    const { isRetroOn, toggleRetro } = useRetroMode();
    const [hovered, setHovered] = useState(false);

    useFrame((state, delta) => {
        if (!monitor.current) return;

        if (hovered) {
            monitor.current.rotation.y += delta * 1.5;
            monitor.current.rotation.x = Math.sin(state.clock.elapsedTime * 2) * 0.1;
        } else {
            monitor.current.rotation.y = THREE.MathUtils.lerp(monitor.current.rotation.y, -0.4, 0.1);
            monitor.current.rotation.x = THREE.MathUtils.lerp(monitor.current.rotation.x, 0.1, 0.1);
        }
    });

    return (
        <group 
            ref={monitor}
            onClick={(e) => {
                e.stopPropagation();
                toggleRetro();
            }}
            onPointerOver={(e) => {
                e.stopPropagation();
                setHovered(true);
                document.body.style.cursor = 'pointer';
            }}
            onPointerOut={(e) => {
                e.stopPropagation();
                setHovered(false);
                document.body.style.cursor = 'auto';
            }}
            scale={hovered ? 1.05 : 1}
        >
            {/* Corpo do monitor */}
            <mesh castShadow receiveShadow>
                <boxGeometry args={[3.8, 2.8, 2.5]} />
                <meshStandardMaterial
                    color="#5c5c54"
                    roughness={0.7}
                />
            </mesh>

            {/* Moldura frontal */}
            <mesh position={[0, 0.05, 1.28]}>
                <boxGeometry args={[3.25, 2.25, 0.15]} />
                <meshStandardMaterial
                    color="#44443e"
                    roughness={0.6}
                />
            </mesh>

            {/* Tela CRT */}
            <mesh position={[0, 0.05, 1.38]}>
                <planeGeometry args={[2.8, 1.75]} />
                <meshStandardMaterial
                    color="#062d20"
                    emissive={isRetroOn ? "#00ff88" : "#002200"}
                    emissiveIntensity={isRetroOn ? 0.45 : 0.05}
                    roughness={0.4}
                />
            </mesh>

            {/* Botão de ligar */}
            <mesh position={[1.25, -0.9, 1.4]}>
                <cylinderGeometry args={[0.16, 0.16, 0.08, 32]} />
                <meshStandardMaterial color="#8a8a81" />
            </mesh>

            {/* LED */}
            <mesh position={[0.8, -0.9, 1.4]}>
                <sphereGeometry args={[0.07, 16, 16]} />
                <meshStandardMaterial
                    color={isRetroOn ? "#00ff88" : "#ff3333"}
                    emissive={isRetroOn ? "#00ff88" : "#ff3333"}
                    emissiveIntensity={isRetroOn ? 2 : 0.5}
                />
            </mesh>

            {/* Base */}
            <mesh position={[0, -1.65, 0]}>
                <boxGeometry args={[2.2, 0.35, 1.4]} />
                <meshStandardMaterial
                    color="#4a4a44"
                    roughness={0.8}
                />
            </mesh>

            {/* Pé */}
            <mesh position={[0, -1.35, 0]}>
                <boxGeometry args={[0.8, 0.45, 0.8]} />
                <meshStandardMaterial
                    color="#4a4a44"
                    roughness={0.8}
                />
            </mesh>
        </group>
    );
}

export function RetroComputer() {
    return (
        <div className="w-full h-full">
            <Canvas
                camera={{
                    position: [5, 3, 7],
                    fov: 45,
                }}
                shadows
            >
                <ambientLight intensity={1.5} />

                <directionalLight
                    position={[5, 5, 5]}
                    intensity={3}
                    castShadow
                />

                <pointLight
                    position={[-5, 5, 5]}
                    intensity={1.5}
                    color="#ffffff"
                />

                <CRTMonitor />

                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    minPolarAngle={Math.PI / 3}
                    maxPolarAngle={Math.PI / 2}
                />
            </Canvas>
        </div>
    );
}