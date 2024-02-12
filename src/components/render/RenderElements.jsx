import {useGLTF} from "@react-three/drei";
import React from "react";

export function RenderElements(props) {
    const {myPath} = props
    // const myPath = "cubeBake"
    const {nodes, materials} = useGLTF(`./models/${myPath}.gltf`);
    // const {nodes} = useGLTF(`./models/${myPath}.gltf`);

    return (
        <>
            <mesh
                geometry={nodes[myPath].geometry}
                material={materials[myPath]}
            />
        </>
    )
}
