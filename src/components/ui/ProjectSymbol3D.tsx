"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three";
import { Project } from "@/data/projects";

interface SymbolProps {
    symbol: Project["symbol3d"];
    hovered: boolean;
}

function Geometry({ symbol, hovered }: SymbolProps) {
    const meshRef = useRef<THREE.Mesh>(null);
    const groupRef = useRef<THREE.Group>(null);

    useFrame((state, delta) => {
        if (!meshRef.current && !groupRef.current) return;

        const target = meshRef.current || groupRef.current;
        if (!target) return;

        // Base rotation
        target.rotation.x += delta * (hovered ? 0.8 : 0.2);
        target.rotation.y += delta * (hovered ? 1.2 : 0.3);
        
        // Float effect
        target.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.1;
    });

    const material = new THREE.MeshStandardMaterial({
        color: "#111111",
        roughness: 0.2,
        metalness: 0.8,
        wireframe: hovered,
    });

    switch (symbol) {
        case "cross":
            return (
                <group ref={groupRef} scale={hovered ? 1.2 : 1}>
                    <mesh material={material}>
                        <boxGeometry args={[0.5, 1.5, 0.5]} />
                    </mesh>
                    <mesh material={material}>
                        <boxGeometry args={[1.5, 0.5, 0.5]} />
                    </mesh>
                </group>
            );
        case "icosahedron":
            return (
                <mesh ref={meshRef} material={material} scale={hovered ? 1.2 : 1}>
                    <icosahedronGeometry args={[1, 0]} />
                </mesh>
            );
        case "shield":
            return (
                <mesh ref={meshRef} material={material} scale={hovered ? 1.2 : 1}>
                    <cylinderGeometry args={[1, 0.1, 0.2, 6]} />
                </mesh>
            );
        case "torus":
            return (
                <mesh ref={meshRef} material={material} scale={hovered ? 1.2 : 1}>
                    <torusGeometry args={[0.7, 0.3, 16, 32]} />
                </mesh>
            );
        case "capsule":
            return (
                <mesh ref={meshRef} material={material} scale={hovered ? 1.2 : 1}>
                    <capsuleGeometry args={[0.6, 0.8, 16, 16]} />
                </mesh>
            );
        case "cube":
            return (
                <mesh ref={meshRef} material={material} scale={hovered ? 1.2 : 1}>
                    <boxGeometry args={[1.2, 1.2, 1.2]} />
                </mesh>
            );
        default:
            return (
                <mesh ref={meshRef} material={material}>
                    <sphereGeometry args={[1, 16, 16]} />
                </mesh>
            );
    }
}

export function ProjectSymbol3D({ symbol }: { symbol: Project["symbol3d"] }) {
    const [hovered, setHovered] = useState(false);

    return (
        <div 
            className="w-full h-full absolute inset-0 z-0 opacity-20 pointer-events-auto"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>
                <ambientLight intensity={2} />
                <directionalLight position={[2, 5, 2]} intensity={4} />
                <pointLight position={[-2, -2, -2]} intensity={2} color="#ffffff" />
                
                <Geometry symbol={symbol} hovered={hovered} />
            </Canvas>
        </div>
    );
}
