import { useFrame } from "@react-three/fiber";
import { useSpring } from "@react-spring/web";
import { Vector3 } from "three";
import Model from "./Model";
import { useCallback, useEffect, useState } from "react";

function Laptop() {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const spring = useSpring({
    from: { mouseX: 0, mouseY: 1 },
    to: { mouseX: mouseX, mouseY: mouseY },
  });

  useFrame(({ camera }) => {
    camera.position.x = spring.mouseX.get() * 0.05;
    camera.position.y = spring.mouseY.get() * 0.2;
    camera.lookAt(new Vector3(0, 0.15, 0));
  });

  const onMouseMove = useCallback((e: MouseEvent) => {
    const hw = window.innerWidth / 2;
    const x = 1 - e.clientX / hw;

    setMouseX(x);

    const hh = window.innerHeight / 2;
    const y = 1 - e.clientY / hh;

    setMouseY(-y + 3);
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousedown", onMouseMove);
    };
  }, []);

  return (
    <>
      <pointLight
        castShadow
        color={"#ffc926"}
        intensity={5}
        position={[0.25, 0.3, -0.3]}
        shadow-bias={-0.0005}
        shadow-camera-far={10}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />

      <pointLight
        castShadow
        color={"#ffffff"}
        intensity={0.5}
        position={[-0.4, 0.3, 0.3]}
        shadow-bias={-0.0005}
        shadow-camera-far={10}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <Model />
      <ambientLight
        color={"#ffffff"}
        intensity={0.5}
        shadowBias={-0.0005}
        shadowMapWidth={1024}
        shadowMapHeight={1024}
        shadowCameraFar={10}
      />
    </>
  );
}

export default Laptop;
