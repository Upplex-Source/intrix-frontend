import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useFBX } from '@react-three/drei';

const FBXModel = ({ path }) => {
  const fbx = useFBX(path);
  return <primitive object={fbx} />;
};

const ThreeScene = () => {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <FBXModel path="/product/3d/5_IN_1_Chrome.fbx" />
        <OrbitControls />
      </Suspense>
    </Canvas>
  );
};

export default ThreeScene;
