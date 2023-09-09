import React, { useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { CameraControls } from "@react-three/drei";

function Cone({ geometryData }) {
  const { camera } = useThree();
  camera.position.z = -30;
  camera.position.y = +30;

  const meshRef = useRef();
  const geometryRef = useRef();
  const materialRef = useRef();

  const [vertices, indices] = geometryData;

  useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    geometry.setIndex(indices);
    geometry.setAttribute(
      "position",
      new THREE.BufferAttribute(new Float32Array(vertices), 3)
    );
    geometry.computeVertexNormals();
    geometryRef.current = geometry;
  }, [vertices, indices]);

  useMemo(() => {
    const material = new THREE.MeshBasicMaterial({
      color: "#E55137",
      wireframe: true,
      side: THREE.DoubleSide,
      wireframeLinewidth: 2,
    });
    materialRef.current = material;
  }, []);

  useFrame(() => {
    meshRef.current.rotation.y += 0.01;
  });

  return (
    <>
      <CameraControls />
      <mesh
        geometry={geometryRef.current}
        material={materialRef.current}
        ref={meshRef}
        side={THREE.FrontSide}
      />
      <spotLight
        position={[0, 10, 0]}
        angle={Math.PI / 4}
        penumbra={0.8}
        intensity={1}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
    </>
  );
}

export default React.memo(Cone);
