"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Edges, RoundedBox } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { Project } from "@/data/projects";

interface SymbolProps {
    symbol: Project["symbol3d"];
    hovered: boolean;
}


type SymbolStyle = {
    color: string;
    edgeColor: string;
    roughness: number;
    metalness: number;
};

const SYMBOL_STYLE: Record<string, SymbolStyle> = {
    cross: { color: "#4a0f0f", edgeColor: "#1a0505", roughness: 0.3, metalness: 0.4 },
    icosahedron: { color: "#0a0a0a", edgeColor: "#000000", roughness: 0.15, metalness: 0.85 },
    shield: { color: "#0d1b2a", edgeColor: "#000000", roughness: 0.25, metalness: 0.7 },
    torus: { color: "#0a0a0a", edgeColor: "#000000", roughness: 0.1, metalness: 0.9 },
    capsule: { color: "#0d2b26", edgeColor: "#000000", roughness: 0.3, metalness: 0.5 },
    cube: { color: "#14210d", edgeColor: "#000000", roughness: 0.4, metalness: 0.3 },
    default: { color: "#000000", edgeColor: "#000000", roughness: 0.2, metalness: 0.8 },
};


function Geometry({ symbol, hovered }: SymbolProps) {
    const wrapperRef = useRef<THREE.Group>(null);

    useFrame((state, delta) => {
        const target = wrapperRef.current;
        if (!target) return;

        target.rotation.x += delta * (hovered ? 0.8 : 0.2);
        target.rotation.y += delta * (hovered ? 1.2 : 0.3);
        target.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.1;
    });

    const style = SYMBOL_STYLE[symbol ?? "default"] ?? SYMBOL_STYLE.default;

    const material = useMemo(
        () =>
            new THREE.MeshStandardMaterial({
                color: style.color,
                roughness: style.roughness,
                metalness: style.metalness,
                wireframe: hovered,
            }),
        [style, hovered]
    );

    const edges = (
    <Edges color={style.edgeColor} lineWidth={hovered ? 2 : 1.5} opacity={1} transparent={false} />
    );

    const scale = hovered ? 1.15 : 1;

    const shape = (() => {
        switch (symbol) {
            case "cross":
                return (
                    <>
                        <RoundedBox args={[0.5, 1.5, 0.5]} radius={0.06} material={material}>
                            {edges}
                        </RoundedBox>
                        <RoundedBox args={[1.5, 0.5, 0.5]} radius={0.06} material={material}>
                            {edges}
                        </RoundedBox>
                    </>
                );
            case "icosahedron":
                return (
                    <mesh material={material}>
                        <icosahedronGeometry args={[1, 0]} />
                        {edges}
                    </mesh>
                );
            case "shield":
                return (
                    <mesh material={material} rotation={[Math.PI / 2, 0, 0]}>
                        <cylinderGeometry args={[1, 0.35, 0.25, 6]} />
                        {edges}
                    </mesh>
                );
            case "torus":
                return (
                    <mesh material={material}>
                        <torusGeometry args={[0.7, 0.22, 16, 32]} />
                        {edges}
                    </mesh>
                );
            case "capsule":
                return (
                    <mesh material={material}>
                        <capsuleGeometry args={[0.55, 0.75, 8, 16]} />
                        {edges}
                    </mesh>
                );
            case "cube":
                return (
                    <RoundedBox args={[1.2, 1.2, 1.2]} radius={0.08} material={material}>
                        {edges}
                    </RoundedBox>
                );
            default:
                return (
                    <mesh material={material}>
                        <sphereGeometry args={[1, 16, 16]} />
                        {edges}
                    </mesh>
                );
        }
    })();

    return (
        <group ref={wrapperRef} scale={scale}>
            {shape}
        </group>
    );
}

export function ProjectSymbol3D({
    symbol,
    hovered,
}: {
    symbol: Project["symbol3d"];
    hovered: boolean;
}) {
    return (
        <div
            className="w-full h-full absolute inset-0 z-0 pointer-events-none [mask-image:radial-gradient(circle_at_bottom_right,black,transparent_70%)]"
            style={{ mixBlendMode: "multiply", opacity: 0.85 }}
        >
            <Canvas
                camera={{ position: [0, 0, 4], fov: 45 }}
                dpr={[1, 1.5]}
                gl={{ antialias: true, alpha: true }}
            >
                <ambientLight intensity={2} />
                <directionalLight position={[2, 5, 2]} intensity={4} />
                <Geometry symbol={symbol} hovered={hovered} />
            </Canvas>
        </div>
    );
}
