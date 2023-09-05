import React from 'react';
import { shallowEqual } from 'react-redux';
import { Canvas } from '@react-three/fiber';
import { Stats, OrbitControls } from '@react-three/drei'
import { useSelector } from "react-redux";

function Figure() {

    const valList = useSelector((state) => (state.values), shallowEqual);
    const [cursor, setCursor] = React.useState("grab");

    function grab() {
        setCursor("grabbing")
    }

    function release() {
        setCursor("grab")
    }

    return (
        <div style={{ width: "100vw", height: "100vh", cursor: cursor }}
            onMouseDown={grab}
            onMouseUp={release}>

            <Canvas camera={{ position: [4, 2, 1.5] }}>
                <ambientLight intensity={.2} />
                <pointLight position={[1, valList.height, 0]} />
                <mesh position={[0, valList.height / 2, 0]}>
                    <coneGeometry args={[valList.radius, valList.height, valList.segments, valList.smooth ? valList.height*1000 : 1]} />
                    <meshNormalMaterial />
                </mesh>
                <gridHelper />
                <axesHelper args={[5]} />
                <OrbitControls />
                <Stats />
            </Canvas>

        </div>
    );
}

export default Figure;