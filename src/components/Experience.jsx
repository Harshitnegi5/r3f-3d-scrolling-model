import React from "react";
import { OrbitControls, ScrollControls } from "@react-three/drei";
import { Office } from "./Office";

const Experience = () => {
  return (
    <>
      <ambientLight intensity={1} />
      <OrbitControls enableZoom={false} />
      <ScrollControls pages={4} damping={0.25}>
        <Office />
      </ScrollControls>
    </>
  );
};

export default Experience;
