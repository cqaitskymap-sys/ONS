"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

const MoleculeScene = dynamic(
  () => import("@/components/three/molecule-scene").then((m) => m.MoleculeScene),
  { ssr: false, loading: () => <div className="absolute inset-0 bg-transparent" /> }
);

export function Hero3D() {
  return (
    <Suspense fallback={null}>
      <MoleculeScene />
    </Suspense>
  );
}
