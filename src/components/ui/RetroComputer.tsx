"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef, useState } from "react";
import * as THREE from "three";
import { useRetroMode } from "@/context/RetroModeContext";

function CRTMonitor() {
    const monitor = useRef<THREE.Group>(null);
    const screenRef = useRef<THREE.MeshStandardMaterial>(null);
    const ledRef = useRef<THREE.MeshStandardMaterial>(null);
    const { isRetroOn, toggleRetro } = useRetroMode();
    const [hovered, setHovered] = useState(false);

    // Smooth values for lerped transitions
    const smoothEmissive = useRef(0.05);
    const smoothLedIntensity = useRef(0.5);
    const ledFlicker = useRef(0);

    useFrame((state, delta) => {
        if (!monitor.current) return;

        // --- Rotation ---
        // Always rotate slowly (continuous). Faster on hover.
        const baseSpeed = 0.3;
        const hoverSpeed = 1.2;
        const speed = hovered ? hoverSpeed : baseSpeed;
        monitor.current.rotation.y += delta * speed;

        // Gentle organic oscillation on X axis
        const breathe = Math.sin(state.clock.elapsedTime * 0.8) * 0.06;
        monitor.current.rotation.x = THREE.MathUtils.lerp(
            monitor.current.rotation.x,
            0.1 + breathe,
            0.05
        );

        // --- CRT Screen: 3 states ---
        // Target emissive intensity based on state
        let targetEmissive: number;
        let targetLed: number;

        if (isRetroOn) {
            // State 3: ON — bright green CRT
            targetEmissive = 0.45;
            targetLed = 2;
        } else if (hovered) {
            // State 2: HOVER/STANDBY — subtle glow, flickering LED
            targetEmissive = 0.18;
            // Flickering LED effect
            ledFlicker.current += delta * 8;
            targetLed = 0.8 + Math.sin(ledFlicker.current) * 0.5;
        } else {
            // State 1: OFF — very faint
            targetEmissive = 0.05;
            targetLed = 0.5;
            ledFlicker.current = 0;
        }

        // Lerp for smooth transitions
        smoothEmissive.current = THREE.MathUtils.lerp(smoothEmissive.current, targetEmissive, delta * 3);
        smoothLedIntensity.current = THREE.MathUtils.lerp(smoothLedIntensity.current, targetLed, delta * 4);

        // Apply to materials
        if (screenRef.current) {
            screenRef.current.emissiveIntensity = smoothEmissive.current;
            // Shift emissive color from dark green (off) to brighter green (on)
            const t = (smoothEmissive.current - 0.05) / 0.4; // 0 to 1
            screenRef.current.emissive.setRGB(0, 0.1 + t * 0.9, 0.1 + t * 0.4);
        }
        if (ledRef.current) {
            ledRef.current.emissiveIntensity = smoothLedIntensity.current;
        }
    });

    const ledColor = isRetroOn ? "#00ff88" : hovered ? "#ffaa00" : "#ff3333";

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
                    ref={screenRef}
                    color="#062d20"
                    emissive="#002200"
                    emissiveIntensity={0.05}
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
                    ref={ledRef}
                    color={ledColor}
                    emissive={ledColor}
                    emissiveIntensity={0.5}
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