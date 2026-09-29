"use client";

import { Canvas } from "@react-three/fiber";
import { Float, useGLTF, Center } from "@react-three/drei";
import { Suspense } from "react";

const models = ["magenta_bundle_filled", "book_and_quill", "compass"];

function Model({ path }: { path: string }) {
  const { scene } = useGLTF(path);

  return (
    <Float speed={5} rotationIntensity={1.25} floatIntensity={1}>
      <Center>
        <primitive object={scene} scale={1.5} />
      </Center>
    </Float>
  );
}

models.map((model) => useGLTF.preload(`/models/${model}.gltf`));

export function Minecraft3DItem({ path }: { path: string }) {
  return (
    <div
      aria-hidden="true"
      className="size-40 drop-shadow-[0_0_50px_rgba(152,16,250,0.5)]"
    >
      <div className="drop-shadow-[0_0_2px_rgba(255,255,255,0.5)]">
        <Canvas camera={{ position: [0, 0, 3], fov: 45 }}>
          <ambientLight intensity={1.5} />
          <directionalLight position={[5, 5, 5]} intensity={2} />
          <Suspense fallback={null}>
            <Model path={`/models/${path}.gltf`} />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}
