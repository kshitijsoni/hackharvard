import React, { Suspense, useRef, useState } from "react"
import { Link } from "react-router-dom"
import * as THREE from 'three'
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'
import { Canvas } from "@react-three/fiber"
import { ContactShadows, Environment, useGLTF, OrbitControls } from "@react-three/drei"
import { proxy, useSnapshot } from "valtio"

const state = proxy({
    current: null,
})

function Model({ ...props }) {
    const group = useRef()
    const { nodes, materials } = useGLTF('/poloxamer/scene.gltf')
    const [hovered, set] = useState(null)
    return (
        <group ref={group} {...props} dispose={null}
            onPointerOver={(e) => (e.stopPropagation(), set(e.object.material.name))}
            onPointerOut={(e) => e.intersections.length === 0 && set(null)}
            onPointerMissed={() => (state.current = null)}
            onPointerDown={(e) => (e.stopPropagation(), (state.current = e.object.material.name))}
        >
           <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[10.68, 19.79, 3.42]} rotation={[-0.95, 0.03, -0.12]} scale={[0.42, 0.43, 0.42]}>
            <mesh geometry={nodes.primitive_color.geometry} material={nodes.primitive_color.material} />
          </group>
          <group position={[11.34, 18.55, 3.19]} rotation={[-0.95, 0.03, -0.12]} scale={[0.38, 0.37, 0.37]}>
            <mesh geometry={nodes.primitive_color_1.geometry} material={nodes.primitive_color_1.material} />
          </group>
          <group position={[11.28, 17.7, 4.31]} rotation={[-0.95, 0.03, -0.12]} scale={[0.42, 0.43, 0.42]}>
            <mesh geometry={nodes.primitive_color_2.geometry} material={nodes.primitive_color_2.material} />
          </group>
          <group position={[11.48, 16.24, 3.87]} rotation={[-0.95, 0.03, -0.12]} scale={[0.42, 0.43, 0.42]}>
            <mesh geometry={nodes.primitive_color_3.geometry} material={nodes.primitive_color_3.material} />
          </group>
          <group position={[10.3, 17.75, 4.84]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_4.geometry} material={nodes.primitive_color_4.material} />
          </group>
          <group position={[12.08, 17.94, 5.02]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_5.geometry} material={nodes.primitive_color_5.material} />
          </group>
          <group position={[12.64, 16.06, 3.07]} rotation={[-0.95, 0.03, -0.12]} scale={[0.38, 0.37, 0.37]}>
            <mesh geometry={nodes.primitive_color_6.geometry} material={nodes.primitive_color_6.material} />
          </group>
          <group position={[10.61, 15.95, 3.25]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_7.geometry} material={nodes.primitive_color_7.material} />
          </group>
          <group position={[11.48, 15.56, 4.75]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_8.geometry} material={nodes.primitive_color_8.material} />
          </group>
          <group position={[13.84, 16.19, 3.81]} rotation={[-0.95, 0.03, -0.12]} scale={[0.42, 0.43, 0.42]}>
            <mesh geometry={nodes.primitive_color_9.geometry} material={nodes.primitive_color_9.material} />
          </group>
          <group position={[14.94, 15.39, 3.09]} rotation={[-0.95, 0.03, -0.12]} scale={[0.42, 0.43, 0.42]}>
            <mesh geometry={nodes.primitive_color_10.geometry} material={nodes.primitive_color_10.material} />
          </group>
          <group position={[16.22, 15.61, 3.65]} rotation={[-0.95, 0.03, -0.12]} scale={[0.38, 0.37, 0.37]}>
            <mesh geometry={nodes.primitive_color_11.geometry} material={nodes.primitive_color_11.material} />
          </group>
          <group position={[14.68, 14.31, 3.03]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_12.geometry} material={nodes.primitive_color_12.material} />
          </group>
          <group position={[14.99, 15.74, 2.04]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_13.geometry} material={nodes.primitive_color_13.material} />
          </group>
          <group position={[16.5, 14.74, 4.74]} rotation={[-0.95, 0.03, -0.12]} scale={[0.42, 0.43, 0.42]}>
            <mesh geometry={nodes.primitive_color_14.geometry} material={nodes.primitive_color_14.material} />
          </group>
          <group position={[17.72, 13.87, 4.43]} rotation={[-0.95, 0.03, -0.12]} scale={[0.42, 0.43, 0.42]}>
            <mesh geometry={nodes.primitive_color_15.geometry} material={nodes.primitive_color_15.material} />
          </group>
          <group position={[15.65, 14.07, 5.01]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_16.geometry} material={nodes.primitive_color_16.material} />
          </group>
          <group position={[16.72, 15.35, 5.64]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_17.geometry} material={nodes.primitive_color_17.material} />
          </group>
          <group position={[18.85, 14.67, 4.11]} rotation={[-0.95, 0.03, -0.12]} scale={[0.38, 0.37, 0.37]}>
            <mesh geometry={nodes.primitive_color_18.geometry} material={nodes.primitive_color_18.material} />
          </group>
          <group position={[17.5, 13.22, 3.55]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_19.geometry} material={nodes.primitive_color_19.material} />
          </group>
          <group position={[17.86, 13.21, 5.31]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_20.geometry} material={nodes.primitive_color_20.material} />
          </group>
          <group position={[19.99, 14.32, 4.89]} rotation={[-0.95, 0.03, -0.12]} scale={[0.42, 0.43, 0.42]}>
            <mesh geometry={nodes.primitive_color_21.geometry} material={nodes.primitive_color_21.material} />
          </group>
          <group position={[21.26, 14.52, 4.06]} rotation={[-0.95, 0.03, -0.12]} scale={[0.42, 0.43, 0.42]}>
            <mesh geometry={nodes.primitive_color_22.geometry} material={nodes.primitive_color_22.material} />
          </group>
          <group position={[20.02, 14.96, 5.79]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_23.geometry} material={nodes.primitive_color_23.material} />
          </group>
          <group position={[20, 13.25, 5.19]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_24.geometry} material={nodes.primitive_color_24.material} />
          </group>
          <group position={[14.13, 17.26, 3.83]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_25.geometry} material={nodes.primitive_color_25.material} />
          </group>
          <group position={[13.75, 15.8, 4.85]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_26.geometry} material={nodes.primitive_color_26.material} />
          </group>
          <group position={[11.52, 20.77, 4.26]} rotation={[-0.95, 0.03, -0.12]} scale={[0.42, 0.43, 0.42]}>
            <mesh geometry={nodes.primitive_color_27.geometry} material={nodes.primitive_color_27.material} />
          </group>
          <group position={[9.66, 19.67, 3.84]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_28.geometry} material={nodes.primitive_color_28.material} />
          </group>
          <group position={[10.54, 20.26, 2.43]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_29.geometry} material={nodes.primitive_color_29.material} />
          </group>
          <group position={[11.53, 20.37, 5.62]} rotation={[-0.95, 0.03, -0.12]} scale={[0.38, 0.37, 0.37]}>
            <mesh geometry={nodes.primitive_color_30.geometry} material={nodes.primitive_color_30.material} />
          </group>
          <group position={[12.53, 20.88, 3.79]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_31.geometry} material={nodes.primitive_color_31.material} />
          </group>
          <group position={[11.04, 21.77, 4.22]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_32.geometry} material={nodes.primitive_color_32.material} />
          </group>
          <group position={[22.37, 14.2, 4.87]} rotation={[-0.95, 0.03, -0.12]} scale={[0.38, 0.37, 0.37]}>
            <mesh geometry={nodes.primitive_color_33.geometry} material={nodes.primitive_color_33.material} />
          </group>
          <group position={[21.3, 15.59, 3.73]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_34.geometry} material={nodes.primitive_color_34.material} />
          </group>
          <group position={[21.2, 13.85, 3.18]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_35.geometry} material={nodes.primitive_color_35.material} />
          </group>
          <group position={[23.56, 14.31, 4.11]} rotation={[-0.95, 0.03, -0.12]} scale={[0.42, 0.43, 0.42]}>
            <mesh geometry={nodes.primitive_color_36.geometry} material={nodes.primitive_color_36.material} />
          </group>
          <group position={[23.72, 15.35, 3.76]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_37.geometry} material={nodes.primitive_color_37.material} />
          </group>
          <group position={[23.57, 13.59, 3.27]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_38.geometry} material={nodes.primitive_color_38.material} />
          </group>
          <group position={[24.41, 14.05, 4.77]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_39.geometry} material={nodes.primitive_color_39.material} />
          </group>
          <group position={[26.75, 17.06, 9.07]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_40.geometry} material={nodes.primitive_color_40.material} />
          </group>
          <group position={[23.68, 17.76, 4.36]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_41.geometry} material={nodes.primitive_color_41.material} />
          </group>
          <group position={[20.97, 20.52, 5.66]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_42.geometry} material={nodes.primitive_color_42.material} />
          </group>
          <group position={[14.18, 17.69, 6.62]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_43.geometry} material={nodes.primitive_color_43.material} />
          </group>
          <group position={[16.1, 19.28, 4.81]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_44.geometry} material={nodes.primitive_color_44.material} />
          </group>
          <group position={[16.42, 16.92, 7.44]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_45.geometry} material={nodes.primitive_color_45.material} />
          </group>
          <group position={[18.39, 17.34, 5.5]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_46.geometry} material={nodes.primitive_color_46.material} />
          </group>
          <group position={[20.2, 17.99, 4.08]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_47.geometry} material={nodes.primitive_color_47.material} />
          </group>
          <group position={[24.49, 18.86, 6.44]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_48.geometry} material={nodes.primitive_color_48.material} />
          </group>
          <group position={[24.31, 17.42, 8.78]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_49.geometry} material={nodes.primitive_color_49.material} />
          </group>
          <group position={[26.33, 17.09, 8.04]} rotation={[-0.95, 0.03, -0.12]} scale={[0.42, 0.43, 0.42]}>
            <mesh geometry={nodes.primitive_color_50.geometry} material={nodes.primitive_color_50.material} />
          </group>
          <group position={[22.96, 18.03, 5.16]} rotation={[-0.95, 0.03, -0.12]} scale={[0.42, 0.43, 0.42]}>
            <mesh geometry={nodes.primitive_color_51.geometry} material={nodes.primitive_color_51.material} />
          </group>
          <group position={[21.1, 19.45, 5.39]} rotation={[-0.95, 0.03, -0.12]} scale={[0.42, 0.43, 0.42]}>
            <mesh geometry={nodes.primitive_color_52.geometry} material={nodes.primitive_color_52.material} />
          </group>
          <group position={[14.52, 18.01, 7.63]} rotation={[-0.95, 0.03, -0.12]} scale={[0.42, 0.43, 0.42]}>
            <mesh geometry={nodes.primitive_color_53.geometry} material={nodes.primitive_color_53.material} />
          </group>
          <group position={[27.2, 14.94, 7.67]} rotation={[-0.95, 0.03, -0.12]} scale={[0.42, 0.43, 0.42]}>
            <mesh geometry={nodes.primitive_color_54.geometry} material={nodes.primitive_color_54.material} />
          </group>
          <group position={[16.56, 18.47, 5.41]} rotation={[-0.95, 0.03, -0.12]} scale={[0.42, 0.43, 0.42]}>
            <mesh geometry={nodes.primitive_color_55.geometry} material={nodes.primitive_color_55.material} />
          </group>
          <group position={[16.05, 17.95, 7.65]} rotation={[-0.95, 0.03, -0.12]} scale={[0.42, 0.43, 0.42]}>
            <mesh geometry={nodes.primitive_color_56.geometry} material={nodes.primitive_color_56.material} />
          </group>
          <group position={[17.95, 18.15, 4.88]} rotation={[-0.95, 0.03, -0.12]} scale={[0.42, 0.43, 0.42]}>
            <mesh geometry={nodes.primitive_color_57.geometry} material={nodes.primitive_color_57.material} />
          </group>
          <group position={[20.04, 19.06, 4.37]} rotation={[-0.95, 0.03, -0.12]} scale={[0.42, 0.43, 0.42]}>
            <mesh geometry={nodes.primitive_color_58.geometry} material={nodes.primitive_color_58.material} />
          </group>
          <group position={[23.7, 18.08, 6.5]} rotation={[-0.95, 0.03, -0.12]} scale={[0.42, 0.43, 0.42]}>
            <mesh geometry={nodes.primitive_color_59.geometry} material={nodes.primitive_color_59.material} />
          </group>
          <group position={[24.83, 16.76, 8.05]} rotation={[-0.95, 0.03, -0.12]} scale={[0.42, 0.43, 0.42]}>
            <mesh geometry={nodes.primitive_color_60.geometry} material={nodes.primitive_color_60.material} />
          </group>
          <group position={[24.28, 16.81, 6.75]} rotation={[-0.95, 0.03, -0.12]} scale={[0.38, 0.37, 0.37]}>
            <mesh geometry={nodes.primitive_color_61.geometry} material={nodes.primitive_color_61.material} />
          </group>
          <group position={[18.76, 19.31, 4.94]} rotation={[-0.95, 0.03, -0.12]} scale={[0.38, 0.37, 0.37]}>
            <mesh geometry={nodes.primitive_color_62.geometry} material={nodes.primitive_color_62.material} />
          </group>
          <group position={[16.62, 18.9, 6.76]} rotation={[-0.95, 0.03, -0.12]} scale={[0.38, 0.37, 0.37]}>
            <mesh geometry={nodes.primitive_color_63.geometry} material={nodes.primitive_color_63.material} />
          </group>
          <group position={[14.09, 19.31, 7.96]} rotation={[-0.95, 0.03, -0.12]} scale={[0.38, 0.37, 0.37]}>
            <mesh geometry={nodes.primitive_color_64.geometry} material={nodes.primitive_color_64.material} />
          </group>
          <group position={[22.4, 19.29, 4.84]} rotation={[-0.95, 0.03, -0.12]} scale={[0.38, 0.37, 0.37]}>
            <mesh geometry={nodes.primitive_color_65.geometry} material={nodes.primitive_color_65.material} />
          </group>
          <group position={[27.06, 16.26, 7.15]} rotation={[-0.95, 0.03, -0.12]} scale={[0.38, 0.37, 0.37]}>
            <mesh geometry={nodes.primitive_color_66.geometry} material={nodes.primitive_color_66.material} />
          </group>
          <group position={[26.45, 18.14, 7.69]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_67.geometry} material={nodes.primitive_color_67.material} />
          </group>
          <group position={[22.19, 17.22, 5.17]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_68.geometry} material={nodes.primitive_color_68.material} />
          </group>
          <group position={[20.95, 18.88, 6.33]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_69.geometry} material={nodes.primitive_color_69.material} />
          </group>
          <group position={[14.12, 17.28, 8.38]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_70.geometry} material={nodes.primitive_color_70.material} />
          </group>
          <group position={[15.93, 17.58, 5.26]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_71.geometry} material={nodes.primitive_color_71.material} />
          </group>
          <group position={[17.84, 17.82, 3.82]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_72.geometry} material={nodes.primitive_color_72.material} />
          </group>
          <group position={[16.4, 18.19, 8.67]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_73.geometry} material={nodes.primitive_color_73.material} />
          </group>
          <group position={[20.15, 19.67, 3.45]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_74.geometry} material={nodes.primitive_color_74.material} />
          </group>
          <group position={[22.96, 18.34, 7.29]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_75.geometry} material={nodes.primitive_color_75.material} />
          </group>
          <group position={[24.68, 15.73, 8.44]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_76.geometry} material={nodes.primitive_color_76.material} />
          </group>
          <group position={[31.57, 15.49, 7.48]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_77.geometry} material={nodes.primitive_color_77.material} />
          </group>
          <group position={[29.21, 15.33, 10.74]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_78.geometry} material={nodes.primitive_color_78.material} />
          </group>
          <group position={[27.16, 15.3, 11.6]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_79.geometry} material={nodes.primitive_color_79.material} />
          </group>
          <group position={[23.61, 13.7, 16.69]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_80.geometry} material={nodes.primitive_color_80.material} />
          </group>
          <group position={[24.5, 16.53, 14.34]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_81.geometry} material={nodes.primitive_color_81.material} />
          </group>
          <group position={[24.4, 16.17, 17.31]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_82.geometry} material={nodes.primitive_color_82.material} />
          </group>
          <group position={[24.21, 13.42, 14.33]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_83.geometry} material={nodes.primitive_color_83.material} />
          </group>
          <group position={[26.87, 14.52, 13.89]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_84.geometry} material={nodes.primitive_color_84.material} />
          </group>
          <group position={[31.14, 14.37, 11.94]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_85.geometry} material={nodes.primitive_color_85.material} />
          </group>
          <group position={[32.39, 13.36, 8.46]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_86.geometry} material={nodes.primitive_color_86.material} />
          </group>
          <group position={[30.87, 14.64, 7.6]} rotation={[-0.95, 0.03, -0.12]} scale={[0.42, 0.43, 0.42]}>
            <mesh geometry={nodes.primitive_color_87.geometry} material={nodes.primitive_color_87.material} />
          </group>
          <group position={[29.29, 14.23, 10.87]} rotation={[-0.95, 0.03, -0.12]} scale={[0.42, 0.43, 0.42]}>
            <mesh geometry={nodes.primitive_color_88.geometry} material={nodes.primitive_color_88.material} />
          </group>
          <group position={[27.21, 14.21, 11.81]} rotation={[-0.95, 0.03, -0.12]} scale={[0.42, 0.43, 0.42]}>
            <mesh geometry={nodes.primitive_color_89.geometry} material={nodes.primitive_color_89.material} />
          </group>
          <group position={[24.39, 13.97, 17.44]} rotation={[-0.95, 0.03, -0.12]} scale={[0.42, 0.43, 0.42]}>
            <mesh geometry={nodes.primitive_color_90.geometry} material={nodes.primitive_color_90.material} />
          </group>
          <group position={[28.57, 14.39, 7.28]} rotation={[-0.95, 0.03, -0.12]} scale={[0.42, 0.43, 0.42]}>
            <mesh geometry={nodes.primitive_color_91.geometry} material={nodes.primitive_color_91.material} />
          </group>
          <group position={[24.37, 15.56, 14.87]} rotation={[-0.95, 0.03, -0.12]} scale={[0.42, 0.43, 0.42]}>
            <mesh geometry={nodes.primitive_color_92.geometry} material={nodes.primitive_color_92.material} />
          </group>
          <group position={[25.06, 15.3, 17.08]} rotation={[-0.95, 0.03, -0.12]} scale={[0.42, 0.43, 0.42]}>
            <mesh geometry={nodes.primitive_color_93.geometry} material={nodes.primitive_color_93.material} />
          </group>
          <group position={[24.21, 14.42, 13.85]} rotation={[-0.95, 0.03, -0.12]} scale={[0.42, 0.43, 0.42]}>
            <mesh geometry={nodes.primitive_color_94.geometry} material={nodes.primitive_color_94.material} />
          </group>
          <group position={[26.38, 13.98, 13.06]} rotation={[-0.95, 0.03, -0.12]} scale={[0.42, 0.43, 0.42]}>
            <mesh geometry={nodes.primitive_color_95.geometry} material={nodes.primitive_color_95.material} />
          </group>
          <group position={[30.77, 13.91, 11]} rotation={[-0.95, 0.03, -0.12]} scale={[0.42, 0.43, 0.42]}>
            <mesh geometry={nodes.primitive_color_96.geometry} material={nodes.primitive_color_96.material} />
          </group>
          <group position={[31.38, 13.73, 8.73]} rotation={[-0.95, 0.03, -0.12]} scale={[0.42, 0.43, 0.42]}>
            <mesh geometry={nodes.primitive_color_97.geometry} material={nodes.primitive_color_97.material} />
          </group>
          <group position={[31.5, 14.48, 9.93]} rotation={[-0.95, 0.03, -0.12]} scale={[0.38, 0.37, 0.37]}>
            <mesh geometry={nodes.primitive_color_98.geometry} material={nodes.primitive_color_98.material} />
          </group>
          <group position={[25.11, 14.53, 12.78]} rotation={[-0.95, 0.03, -0.12]} scale={[0.38, 0.37, 0.37]}>
            <mesh geometry={nodes.primitive_color_99.geometry} material={nodes.primitive_color_99.material} />
          </group>
          <group position={[25.48, 15.32, 15.73]} rotation={[-0.95, 0.03, -0.12]} scale={[0.38, 0.37, 0.37]}>
            <mesh geometry={nodes.primitive_color_100.geometry} material={nodes.primitive_color_100.material} />
          </group>
          <group position={[23.87, 14.02, 18.76]} rotation={[-0.95, 0.03, -0.12]} scale={[0.38, 0.37, 0.37]}>
            <mesh geometry={nodes.primitive_color_101.geometry} material={nodes.primitive_color_101.material} />
          </group>
          <group position={[28.56, 13.8, 12]} rotation={[-0.95, 0.03, -0.12]} scale={[0.38, 0.37, 0.37]}>
            <mesh geometry={nodes.primitive_color_102.geometry} material={nodes.primitive_color_102.material} />
          </group>
          <group position={[29.59, 15.17, 7.89]} rotation={[-0.95, 0.03, -0.12]} scale={[0.38, 0.37, 0.37]}>
            <mesh geometry={nodes.primitive_color_103.geometry} material={nodes.primitive_color_103.material} />
          </group>
          <group position={[30.91, 14.08, 6.63]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_104.geometry} material={nodes.primitive_color_104.material} />
          </group>
          <group position={[28.91, 13.7, 9.96]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_105.geometry} material={nodes.primitive_color_105.material} />
          </group>
          <group position={[26.75, 13.64, 10.97]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_106.geometry} material={nodes.primitive_color_106.material} />
          </group>
          <group position={[25.13, 13.15, 17.37]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_107.geometry} material={nodes.primitive_color_107.material} />
          </group>
          <group position={[23.4, 15.63, 15.41]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_108.geometry} material={nodes.primitive_color_108.material} />
          </group>
          <group position={[23.2, 14.53, 13.4]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_109.geometry} material={nodes.primitive_color_109.material} />
          </group>
          <group position={[25.95, 15.44, 17.73]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_110.geometry} material={nodes.primitive_color_110.material} />
          </group>
          <group position={[26.32, 12.89, 13.27]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_111.geometry} material={nodes.primitive_color_111.material} />
          </group>
          <group position={[30.96, 12.81, 11.1]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_112.geometry} material={nodes.primitive_color_112.material} />
          </group>
          <group position={[30.72, 12.84, 8.81]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_113.geometry} material={nodes.primitive_color_113.material} />
          </group>
          <group position={[26.41, 14.3, 7.22]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_114.geometry} material={nodes.primitive_color_114.material} />
          </group>
          <group position={[27.12, 14.89, 8.78]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_115.geometry} material={nodes.primitive_color_115.material} />
          </group>
          <group position={[28.66, 14.43, 6.17]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_116.geometry} material={nodes.primitive_color_116.material} />
          </group>
          <group position={[28.62, 13.33, 7.62]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_117.geometry} material={nodes.primitive_color_117.material} />
          </group>
          <group position={[12.78, 19.54, 7.46]} rotation={[-0.95, 0.03, -0.12]} scale={[0.42, 0.43, 0.42]}>
            <mesh geometry={nodes.primitive_color_118.geometry} material={nodes.primitive_color_118.material} />
          </group>
          <group position={[12.84, 20.26, 6.12]} rotation={[-0.95, 0.03, -0.12]} scale={[0.42, 0.43, 0.42]}>
            <mesh geometry={nodes.primitive_color_119.geometry} material={nodes.primitive_color_119.material} />
          </group>
          <group position={[12.23, 20.17, 8.19]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_120.geometry} material={nodes.primitive_color_120.material} />
          </group>
          <group position={[12.19, 18.6, 7.38]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_121.geometry} material={nodes.primitive_color_121.material} />
          </group>
          <group position={[13.3, 21.26, 6.26]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_122.geometry} material={nodes.primitive_color_122.material} />
          </group>
          <group position={[13.48, 19.65, 5.43]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_123.geometry} material={nodes.primitive_color_123.material} />
          </group>
          <group position={[22.48, 14.29, 18.75]} rotation={[-0.95, 0.03, -0.12]} scale={[0.42, 0.43, 0.42]}>
            <mesh geometry={nodes.primitive_color_124.geometry} material={nodes.primitive_color_124.material} />
          </group>
          <group position={[21.69, 12.96, 18.76]} rotation={[-0.95, 0.03, -0.12]} scale={[0.42, 0.43, 0.42]}>
            <mesh geometry={nodes.primitive_color_125.geometry} material={nodes.primitive_color_125.material} />
          </group>
          <group position={[22.13, 15.15, 19.97]} rotation={[-0.95, 0.03, -0.12]} scale={[0.42, 0.43, 0.42]}>
            <mesh geometry={nodes.primitive_color_126.geometry} material={nodes.primitive_color_126.material} />
          </group>
          <group position={[22.16, 14.89, 17.87]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_127.geometry} material={nodes.primitive_color_127.material} />
          </group>
          <group position={[22.68, 16.12, 19.91]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_128.geometry} material={nodes.primitive_color_128.material} />
          </group>
          <group position={[22.42, 14.65, 20.91]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_129.geometry} material={nodes.primitive_color_129.material} />
          </group>
          <group position={[21.04, 15.37, 19.98]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_130.geometry} material={nodes.primitive_color_130.material} />
          </group>
          <group position={[22.08, 12.17, 19.88]} rotation={[-0.95, 0.03, -0.12]} scale={[0.38, 0.37, 0.37]}>
            <mesh geometry={nodes.primitive_color_131.geometry} material={nodes.primitive_color_131.material} />
          </group>
          <group position={[21.93, 12.39, 17.84]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_132.geometry} material={nodes.primitive_color_132.material} />
          </group>
          <group position={[20.6, 13.18, 18.7]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_133.geometry} material={nodes.primitive_color_133.material} />
          </group>
          <group position={[21.01, 11.93, 20.78]} rotation={[-0.95, 0.03, -0.12]} scale={[0.42, 0.43, 0.42]}>
            <mesh geometry={nodes.primitive_color_134.geometry} material={nodes.primitive_color_134.material} />
          </group>
          <group position={[20.35, 10.58, 20.45]} rotation={[-0.95, 0.03, -0.12]} scale={[0.42, 0.43, 0.42]}>
            <mesh geometry={nodes.primitive_color_135.geometry} material={nodes.primitive_color_135.material} />
          </group>
          <group position={[19.58, 9.3, 18.66]} rotation={[-0.95, 0.03, -0.12]} scale={[0.42, 0.43, 0.42]}>
            <mesh geometry={nodes.primitive_color_136.geometry} material={nodes.primitive_color_136.material} />
          </group>
          <group position={[18.32, 9.28, 17.78]} rotation={[-0.95, 0.03, -0.12]} scale={[0.42, 0.43, 0.42]}>
            <mesh geometry={nodes.primitive_color_137.geometry} material={nodes.primitive_color_137.material} />
          </group>
          <group position={[17.2, 9.66, 18.56]} rotation={[-0.95, 0.03, -0.12]} scale={[0.38, 0.37, 0.37]}>
            <mesh geometry={nodes.primitive_color_138.geometry} material={nodes.primitive_color_138.material} />
          </group>
          <group position={[18.46, 9.98, 16.93]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_139.geometry} material={nodes.primitive_color_139.material} />
          </group>
          <group position={[18.21, 8.23, 17.4]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_140.geometry} material={nodes.primitive_color_140.material} />
          </group>
          <group position={[15.99, 9.44, 17.84]} rotation={[-0.95, 0.03, -0.12]} scale={[0.42, 0.43, 0.42]}>
            <mesh geometry={nodes.primitive_color_141.geometry} material={nodes.primitive_color_141.material} />
          </group>
          <group position={[15.31, 7.86, 19.53]} rotation={[-0.95, 0.03, -0.12]} scale={[0.38, 0.37, 0.37]}>
            <mesh geometry={nodes.primitive_color_142.geometry} material={nodes.primitive_color_142.material} />
          </group>
          <group position={[14.9, 9.03, 18.84]} rotation={[-0.95, 0.03, -0.12]} scale={[0.42, 0.43, 0.42]}>
            <mesh geometry={nodes.primitive_color_143.geometry} material={nodes.primitive_color_143.material} />
          </group>
          <group position={[14.93, 7.89, 20.89]} rotation={[-0.95, 0.03, -0.12]} scale={[0.42, 0.43, 0.42]}>
            <mesh geometry={nodes.primitive_color_144.geometry} material={nodes.primitive_color_144.material} />
          </group>
          <group position={[14.9, 6.46, 21.44]} rotation={[-0.95, 0.03, -0.12]} scale={[0.42, 0.43, 0.42]}>
            <mesh geometry={nodes.primitive_color_145.geometry} material={nodes.primitive_color_145.material} />
          </group>
          <group position={[14.72, 9.9, 19.51]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_146.geometry} material={nodes.primitive_color_146.material} />
          </group>
          <group position={[13.95, 8.82, 18.3]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_147.geometry} material={nodes.primitive_color_147.material} />
          </group>
          <group position={[13.99, 5.66, 20.7]} rotation={[-0.95, 0.03, -0.12]} scale={[0.38, 0.37, 0.37]}>
            <mesh geometry={nodes.primitive_color_148.geometry} material={nodes.primitive_color_148.material} />
          </group>
          <group position={[15.91, 6, 21.35]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_149.geometry} material={nodes.primitive_color_149.material} />
          </group>
          <group position={[14.67, 6.52, 22.53]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_150.geometry} material={nodes.primitive_color_150.material} />
          </group>
          <group position={[13.04, 5.02, 21.54]} rotation={[-0.95, 0.03, -0.12]} scale={[0.42, 0.43, 0.42]}>
            <mesh geometry={nodes.primitive_color_151.geometry} material={nodes.primitive_color_151.material} />
          </group>
          <group position={[21.58, 11.9, 22.2]} rotation={[-0.95, 0.03, -0.12]} scale={[0.42, 0.43, 0.42]}>
            <mesh geometry={nodes.primitive_color_152.geometry} material={nodes.primitive_color_152.material} />
          </group>
          <group position={[20.24, 12.74, 20.78]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_153.geometry} material={nodes.primitive_color_153.material} />
          </group>
          <group position={[22.05, 12.87, 22.44]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_154.geometry} material={nodes.primitive_color_154.material} />
          </group>
          <group position={[22.36, 11.11, 22.29]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_155.geometry} material={nodes.primitive_color_155.material} />
          </group>
          <group position={[20.78, 11.71, 22.94]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_156.geometry} material={nodes.primitive_color_156.material} />
          </group>
          <group position={[19.79, 10.61, 19.16]} rotation={[-0.95, 0.03, -0.12]} scale={[0.38, 0.37, 0.37]}>
            <mesh geometry={nodes.primitive_color_157.geometry} material={nodes.primitive_color_157.material} />
          </group>
          <group position={[19.54, 10.38, 21.19]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_158.geometry} material={nodes.primitive_color_158.material} />
          </group>
          <group position={[21.14, 9.8, 20.54]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_159.geometry} material={nodes.primitive_color_159.material} />
          </group>
          <group position={[20.8, 8.87, 17.84]} rotation={[-0.95, 0.03, -0.12]} scale={[0.42, 0.43, 0.42]}>
            <mesh geometry={nodes.primitive_color_160.geometry} material={nodes.primitive_color_160.material} />
          </group>
          <group position={[19.41, 8.56, 19.48]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_161.geometry} material={nodes.primitive_color_161.material} />
          </group>
          <group position={[20.97, 9.57, 16.99]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_162.geometry} material={nodes.primitive_color_162.material} />
          </group>
          <group position={[20.65, 7.84, 17.43]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_163.geometry} material={nodes.primitive_color_163.material} />
          </group>
          <group position={[21.71, 8.85, 18.47]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_164.geometry} material={nodes.primitive_color_164.material} />
          </group>
          <group position={[15.59, 10.72, 17.09]} rotation={[-0.95, 0.03, -0.12]} scale={[0.42, 0.43, 0.42]}>
            <mesh geometry={nodes.primitive_color_165.geometry} material={nodes.primitive_color_165.material} />
          </group>
          <group position={[16.07, 8.6, 17.11]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_166.geometry} material={nodes.primitive_color_166.material} />
          </group>
          <group position={[14.63, 10.56, 16.55]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_167.geometry} material={nodes.primitive_color_167.material} />
          </group>
          <group position={[16.37, 10.99, 16.35]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_168.geometry} material={nodes.primitive_color_168.material} />
          </group>
          <group position={[15.47, 11.56, 17.81]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_169.geometry} material={nodes.primitive_color_169.material} />
          </group>
          <group position={[15.93, 8.73, 21.71]} rotation={[-0.95, 0.03, -0.12]} scale={[0.42, 0.43, 0.42]}>
            <mesh geometry={nodes.primitive_color_170.geometry} material={nodes.primitive_color_170.material} />
          </group>
          <group position={[13.9, 8.31, 21.02]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_171.geometry} material={nodes.primitive_color_171.material} />
          </group>
          <group position={[15.96, 9.78, 21.37]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_172.geometry} material={nodes.primitive_color_172.material} />
          </group>
          <group position={[16.96, 8.31, 21.61]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_173.geometry} material={nodes.primitive_color_173.material} />
          </group>
          <group position={[15.64, 8.73, 22.78]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_174.geometry} material={nodes.primitive_color_174.material} />
          </group>
          <group position={[13.69, 3.85, 22.31]} rotation={[-0.95, 0.03, -0.12]} scale={[0.42, 0.43, 0.42]}>
            <mesh geometry={nodes.primitive_color_175.geometry} material={nodes.primitive_color_175.material} />
          </group>
          <group position={[14.11, 3.11, 21.6]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_176.geometry} material={nodes.primitive_color_176.material} />
          </group>
          <group position={[12.94, 3.35, 22.95]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_177.geometry} material={nodes.primitive_color_177.material} />
          </group>
          <group position={[14.5, 4.22, 22.97]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_178.geometry} material={nodes.primitive_color_178.material} />
          </group>
          <group position={[11.89, 4.5, 20.66]} rotation={[-0.95, 0.03, -0.12]} scale={[0.42, 0.43, 0.42]}>
            <mesh geometry={nodes.primitive_color_179.geometry} material={nodes.primitive_color_179.material} />
          </group>
          <group position={[12.59, 5.75, 22.25]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_180.geometry} material={nodes.primitive_color_180.material} />
          </group>
          <group position={[10.88, 3.95, 21.49]} rotation={[-0.95, 0.03, -0.12]} scale={[0.38, 0.37, 0.37]}>
            <mesh geometry={nodes.primitive_color_181.geometry} material={nodes.primitive_color_181.material} />
          </group>
          <group position={[11.47, 5.36, 20.1]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_182.geometry} material={nodes.primitive_color_182.material} />
          </group>
          <group position={[12.31, 3.75, 19.96]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_183.geometry} material={nodes.primitive_color_183.material} />
          </group>
          <group position={[-20.92, 13.31, 6.53]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_184.geometry} material={nodes.primitive_color_184.material} />
          </group>
          <group position={[-20.34, 14.51, 4.19]} rotation={[-0.95, 0.03, -0.12]} scale={[0.38, 0.37, 0.37]}>
            <mesh geometry={nodes.primitive_color_185.geometry} material={nodes.primitive_color_185.material} />
          </group>
          <group position={[-19.34, 16.15, 3.48]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_186.geometry} material={nodes.primitive_color_186.material} />
          </group>
          <group position={[-20.94, 12.67, 5.61]} rotation={[-0.95, 0.03, -0.12]} scale={[0.42, 0.43, 0.42]}>
            <mesh geometry={nodes.primitive_color_187.geometry} material={nodes.primitive_color_187.material} />
          </group>
          <group position={[-19.91, 10.76, 7.75]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_188.geometry} material={nodes.primitive_color_188.material} />
          </group>
          <group position={[-21.97, 12.75, 5.21]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_189.geometry} material={nodes.primitive_color_189.material} />
          </group>
          <group position={[-19.43, 15.07, 3.25]} rotation={[-0.95, 0.03, -0.12]} scale={[0.42, 0.43, 0.42]}>
            <mesh geometry={nodes.primitive_color_190.geometry} material={nodes.primitive_color_190.material} />
          </group>
          <group position={[-19.97, 13.19, 4.54]} rotation={[-0.95, 0.03, -0.12]} scale={[0.42, 0.43, 0.42]}>
            <mesh geometry={nodes.primitive_color_191.geometry} material={nodes.primitive_color_191.material} />
          </group>
          <group position={[-19.01, 12.06, 6.93]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_192.geometry} material={nodes.primitive_color_192.material} />
          </group>
          <group position={[-20.94, 15.39, 1.75]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_193.geometry} material={nodes.primitive_color_193.material} />
          </group>
          <group position={[-19.58, 11.12, 6.75]} rotation={[-0.95, 0.03, -0.12]} scale={[0.42, 0.43, 0.42]}>
            <mesh geometry={nodes.primitive_color_194.geometry} material={nodes.primitive_color_194.material} />
          </group>
          <group position={[-18.94, 13.17, 4.96]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_195.geometry} material={nodes.primitive_color_195.material} />
          </group>
          <group position={[-20.71, 11.31, 5.92]} rotation={[-0.95, 0.03, -0.12]} scale={[0.38, 0.37, 0.37]}>
            <mesh geometry={nodes.primitive_color_196.geometry} material={nodes.primitive_color_196.material} />
          </group>
          <group position={[-19.94, 14.91, 1.82]} rotation={[-0.95, 0.03, -0.12]} scale={[0.42, 0.43, 0.42]}>
            <mesh geometry={nodes.primitive_color_197.geometry} material={nodes.primitive_color_197.material} />
          </group>
          <group position={[-18.4, 14.65, 3.34]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_198.geometry} material={nodes.primitive_color_198.material} />
          </group>
          <group position={[-17.69, 10.14, 6.74]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_199.geometry} material={nodes.primitive_color_199.material} />
          </group>
          <group position={[-20.05, 12.51, 3.68]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_200.geometry} material={nodes.primitive_color_200.material} />
          </group>
          <group position={[-18.61, 10.12, 6.12]} rotation={[-0.95, 0.03, -0.12]} scale={[0.42, 0.43, 0.42]}>
            <mesh geometry={nodes.primitive_color_201.geometry} material={nodes.primitive_color_201.material} />
          </group>
          <group position={[-19.22, 15.42, 1.14]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_202.geometry} material={nodes.primitive_color_202.material} />
          </group>
          <group position={[-20.02, 13.54, 1.52]} rotation={[-0.95, 0.03, -0.12]} scale={[0.38, 0.37, 0.37]}>
            <mesh geometry={nodes.primitive_color_203.geometry} material={nodes.primitive_color_203.material} />
          </group>
          <group position={[-18.28, 10.44, 5.1]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_204.geometry} material={nodes.primitive_color_204.material} />
          </group>
          <group position={[-12.6, 3.7, 14.77]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_205.geometry} material={nodes.primitive_color_205.material} />
          </group>
          <group position={[-19.05, 8.77, 6.14]} rotation={[-0.95, 0.03, -0.12]} scale={[0.38, 0.37, 0.37]}>
            <mesh geometry={nodes.primitive_color_206.geometry} material={nodes.primitive_color_206.material} />
          </group>
          <group position={[-13.31, 3.8, 17.11]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_207.geometry} material={nodes.primitive_color_207.material} />
          </group>
          <group position={[-21.11, 8.9, 5.82]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_208.geometry} material={nodes.primitive_color_208.material} />
          </group>
          <group position={[-20.48, 13.33, 0.21]} rotation={[-0.95, 0.03, -0.12]} scale={[0.42, 0.43, 0.42]}>
            <mesh geometry={nodes.primitive_color_209.geometry} material={nodes.primitive_color_209.material} />
          </group>
          <group position={[-19.69, 13.63, -0.51]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_210.geometry} material={nodes.primitive_color_210.material} />
          </group>
          <group position={[-17.6, 11.22, 1.06]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_211.geometry} material={nodes.primitive_color_211.material} />
          </group>
          <group position={[-19.91, 11.25, 0.37]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_212.geometry} material={nodes.primitive_color_212.material} />
          </group>
          <group position={[-13.43, 6.45, 11.9]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_213.geometry} material={nodes.primitive_color_213.material} />
          </group>
          <group position={[-13.17, 4.61, 15.08]} rotation={[-0.95, 0.03, -0.12]} scale={[0.42, 0.43, 0.42]}>
            <mesh geometry={nodes.primitive_color_214.geometry} material={nodes.primitive_color_214.material} />
          </group>
          <group position={[-14.59, 5.02, 16.67]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_215.geometry} material={nodes.primitive_color_215.material} />
          </group>
          <group position={[-13.97, 4.18, 16.3]} rotation={[-0.95, 0.03, -0.12]} scale={[0.42, 0.43, 0.42]}>
            <mesh geometry={nodes.primitive_color_216.geometry} material={nodes.primitive_color_216.material} />
          </group>
          <group position={[-20.19, 8.49, 5.36]} rotation={[-0.95, 0.03, -0.12]} scale={[0.42, 0.43, 0.42]}>
            <mesh geometry={nodes.primitive_color_217.geometry} material={nodes.primitive_color_217.material} />
          </group>
          <group position={[-11, 5.32, 16.06]} rotation={[-0.95, 0.03, -0.12]} scale={[0.38, 0.37, 0.37]}>
            <mesh geometry={nodes.primitive_color_218.geometry} material={nodes.primitive_color_218.material} />
          </group>
          <group position={[-19.71, 12.31, -2.24]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_219.geometry} material={nodes.primitive_color_219.material} />
          </group>
          <group position={[-20.79, 11.84, 0.08]} rotation={[-0.95, 0.03, -0.12]} scale={[0.42, 0.43, 0.42]}>
            <mesh geometry={nodes.primitive_color_220.geometry} material={nodes.primitive_color_220.material} />
          </group>
          <group position={[-9.44, 6.87, 17.55]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_221.geometry} material={nodes.primitive_color_221.material} />
          </group>
          <group position={[-11.78, 6.07, 14.36]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_222.geometry} material={nodes.primitive_color_222.material} />
          </group>
          <group position={[-12.16, 5.74, 15.36]} rotation={[-0.95, 0.03, -0.12]} scale={[0.42, 0.43, 0.42]}>
            <mesh geometry={nodes.primitive_color_223.geometry} material={nodes.primitive_color_223.material} />
          </group>
          <group position={[-16.9, 10.9, 0.26]} rotation={[-0.95, 0.03, -0.12]} scale={[0.47, 0.47, 0.47]}>
            <mesh geometry={nodes.primitive_color_224.geometry} material={nodes.primitive_color_224.material} />
          </group>
          <group position={[-13.83, 4.5, 12.82]} rotation={[-0.95, 0.03, -0.12]} scale={[0.42, 0.43, 0.42]}>
            <mesh geometry={nodes.primitive_color_225.geometry} material={nodes.primitive_color_225.material} />
          </group>
          <group position={[-14.06, 5.55, 11.73]} rotation={[-0.95, 0.03, -0.12]} scale={[0.42, 0.43, 0.42]}>
            <mesh geometry={nodes.primitive_color_226.geometry} material={nodes.primitive_color_226.material} />
          </group>
          <group position={[-8.58, 4.97, 17.49]} rotation={[-0.95, 0.03, -0.12]} scale={[0.38, 0.37, 0.37]}>
            <mesh geometry={nodes.primitive_color_227.geometry} material={nodes.primitive_color_227.material} />
          </group>
          <group position={[-14.65, 7.81, 1.31]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_228.geometry} material={nodes.primitive_color_228.material} />
          </group>
          <group position={[-15.97, 9.91, 0.67]} rotation={[-0.95, 0.03, -0.12]} scale={[0.38, 0.37, 0.37]}>
            <mesh geometry={nodes.primitive_color_229.geometry} material={nodes.primitive_color_229.material} />
          </group>
          <group position={[-11.83, 7.42, 17.8]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_230.geometry} material={nodes.primitive_color_230.material} />
          </group>
          <group position={[-12.77, 4.15, 12.72]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_231.geometry} material={nodes.primitive_color_231.material} />
          </group>
          <group position={[-20.22, 9.24, -2.23]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_232.geometry} material={nodes.primitive_color_232.material} />
          </group>
          <group position={[-21.42, 13.9, 0]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_233.geometry} material={nodes.primitive_color_233.material} />
          </group>
          <group position={[-11.81, 5.11, 10.95]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_234.geometry} material={nodes.primitive_color_234.material} />
          </group>
          <group position={[-20.06, 9.96, 3.76]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_235.geometry} material={nodes.primitive_color_235.material} />
          </group>
          <group position={[-18.68, 9.92, -1.05]} rotation={[-0.95, 0.03, -0.12]} scale={[0.38, 0.37, 0.37]}>
            <mesh geometry={nodes.primitive_color_236.geometry} material={nodes.primitive_color_236.material} />
          </group>
          <group position={[-9.61, 5.84, 17.95]} rotation={[-0.95, 0.03, -0.12]} scale={[0.42, 0.43, 0.42]}>
            <mesh geometry={nodes.primitive_color_237.geometry} material={nodes.primitive_color_237.material} />
          </group>
          <group position={[-3.8, 4.96, 18.28]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_238.geometry} material={nodes.primitive_color_238.material} />
          </group>
          <group position={[-20.34, 11.4, -2.19]} rotation={[-0.95, 0.03, -0.12]} scale={[0.42, 0.43, 0.42]}>
            <mesh geometry={nodes.primitive_color_239.geometry} material={nodes.primitive_color_239.material} />
          </group>
          <group position={[0.41, 3.73, 17.73]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_240.geometry} material={nodes.primitive_color_240.material} />
          </group>
          <group position={[-4.43, 4.6, 14.44]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_241.geometry} material={nodes.primitive_color_241.material} />
          </group>
          <group position={[-20.31, 7.38, 5.4]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_242.geometry} material={nodes.primitive_color_242.material} />
          </group>
          <group position={[-14.09, 5.06, 14.09]} rotation={[-0.95, 0.03, -0.12]} scale={[0.38, 0.37, 0.37]}>
            <mesh geometry={nodes.primitive_color_243.geometry} material={nodes.primitive_color_243.material} />
          </group>
          <group position={[-21.56, 11.59, 0.85]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_244.geometry} material={nodes.primitive_color_244.material} />
          </group>
          <group position={[-15.11, 5.89, 11.8]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_245.geometry} material={nodes.primitive_color_245.material} />
          </group>
          <group position={[-5.39, 5.98, 17.34]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_246.geometry} material={nodes.primitive_color_246.material} />
          </group>
          <group position={[-11.01, 5.4, 17.49]} rotation={[-0.95, 0.03, -0.12]} scale={[0.42, 0.43, 0.42]}>
            <mesh geometry={nodes.primitive_color_247.geometry} material={nodes.primitive_color_247.material} />
          </group>
          <group position={[-20.07, 8.86, 3.87]} rotation={[-0.95, 0.03, -0.12]} scale={[0.42, 0.43, 0.42]}>
            <mesh geometry={nodes.primitive_color_248.geometry} material={nodes.primitive_color_248.material} />
          </group>
          <group position={[-19.5, 10.09, -2.19]} rotation={[-0.95, 0.03, -0.12]} scale={[0.42, 0.43, 0.42]}>
            <mesh geometry={nodes.primitive_color_249.geometry} material={nodes.primitive_color_249.material} />
          </group>
          <group position={[-17.76, 11.75, -1.46]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_250.geometry} material={nodes.primitive_color_250.material} />
          </group>
          <group position={[-17.52, 10.72, -1.13]} rotation={[-0.95, 0.03, -0.12]} scale={[0.42, 0.43, 0.42]}>
            <mesh geometry={nodes.primitive_color_251.geometry} material={nodes.primitive_color_251.material} />
          </group>
          <group position={[-5.81, 4.01, 16.69]} rotation={[-0.95, 0.03, -0.12]} scale={[0.38, 0.37, 0.37]}>
            <mesh geometry={nodes.primitive_color_252.geometry} material={nodes.primitive_color_252.material} />
          </group>
          <group position={[-12.02, 6.38, 18.14]} rotation={[-0.95, 0.03, -0.12]} scale={[0.42, 0.43, 0.42]}>
            <mesh geometry={nodes.primitive_color_253.geometry} material={nodes.primitive_color_253.material} />
          </group>
          <group position={[-15.67, 7.79, 1.73]} rotation={[-0.95, 0.03, -0.12]} scale={[0.42, 0.43, 0.42]}>
            <mesh geometry={nodes.primitive_color_254.geometry} material={nodes.primitive_color_254.material} />
          </group>
          <group position={[-0.58, 5.94, 19.65]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_255.geometry} material={nodes.primitive_color_255.material} />
          </group>
          <group position={[-21.32, 11.46, -1.17]} rotation={[-0.95, 0.03, -0.12]} scale={[0.38, 0.37, 0.37]}>
            <mesh geometry={nodes.primitive_color_256.geometry} material={nodes.primitive_color_256.material} />
          </group>
          <group position={[-14.66, 3.36, 16.02]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_257.geometry} material={nodes.primitive_color_257.material} />
          </group>
          <group position={[-16.23, 5.91, 3.73]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_258.geometry} material={nodes.primitive_color_258.material} />
          </group>
          <group position={[2.95, 4.46, 18.52]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_259.geometry} material={nodes.primitive_color_259.material} />
          </group>
          <group position={[-15.6, 8.23, 2.75]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_260.geometry} material={nodes.primitive_color_260.material} />
          </group>
          <group position={[-6.21, 5.35, 16.95]} rotation={[-0.95, 0.03, -0.12]} scale={[0.42, 0.43, 0.42]}>
            <mesh geometry={nodes.primitive_color_261.geometry} material={nodes.primitive_color_261.material} />
          </group>
          <group position={[-12.5, 4.73, 10.16]} rotation={[-0.95, 0.03, -0.12]} scale={[0.42, 0.43, 0.42]}>
            <mesh geometry={nodes.primitive_color_262.geometry} material={nodes.primitive_color_262.material} />
          </group>
          <group position={[-16.58, 8.65, 0.83]} rotation={[-0.95, 0.03, -0.12]} scale={[0.42, 0.43, 0.42]}>
            <mesh geometry={nodes.primitive_color_263.geometry} material={nodes.primitive_color_263.material} />
          </group>
          <group position={[1.94, 3.09, 19.89]} rotation={[-0.95, 0.03, -0.12]} scale={[0.42, 0.43, 0.42]}>
            <mesh geometry={nodes.primitive_color_264.geometry} material={nodes.primitive_color_264.material} />
          </group>
          <group position={[-19.12, 8.44, 3.51]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_265.geometry} material={nodes.primitive_color_265.material} />
          </group>
          <group position={[-13.86, 5.03, 10.43]} rotation={[-0.95, 0.03, -0.12]} scale={[0.38, 0.37, 0.37]}>
            <mesh geometry={nodes.primitive_color_266.geometry} material={nodes.primitive_color_266.material} />
          </group>
          <group position={[-7.32, 5.42, 18.01]} rotation={[-0.95, 0.03, -0.12]} scale={[0.42, 0.43, 0.42]}>
            <mesh geometry={nodes.primitive_color_267.geometry} material={nodes.primitive_color_267.material} />
          </group>
          <group position={[-3.61, 3.98, 17.82]} rotation={[-0.95, 0.03, -0.12]} scale={[0.42, 0.43, 0.42]}>
            <mesh geometry={nodes.primitive_color_268.geometry} material={nodes.primitive_color_268.material} />
          </group>
          <group position={[-3.86, 4.77, 15.37]} rotation={[-0.95, 0.03, -0.12]} scale={[0.42, 0.43, 0.42]}>
            <mesh geometry={nodes.primitive_color_269.geometry} material={nodes.primitive_color_269.material} />
          </group>
          <group position={[-6.87, 3.53, 19.01]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_270.geometry} material={nodes.primitive_color_270.material} />
          </group>
          <group position={[-2.14, 6.25, 18.85]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_271.geometry} material={nodes.primitive_color_271.material} />
          </group>
          <group position={[-16.66, 8.16, -0.16]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_272.geometry} material={nodes.primitive_color_272.material} />
          </group>
          <group position={[-0.1, 3.41, 18.66]} rotation={[-0.95, 0.03, -0.12]} scale={[0.42, 0.43, 0.42]}>
            <mesh geometry={nodes.primitive_color_273.geometry} material={nodes.primitive_color_273.material} />
          </group>
          <group position={[3.87, 2.96, 18.88]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_274.geometry} material={nodes.primitive_color_274.material} />
          </group>
          <group position={[2.86, 3.36, 18.69]} rotation={[-0.95, 0.03, -0.12]} scale={[0.42, 0.43, 0.42]}>
            <mesh geometry={nodes.primitive_color_275.geometry} material={nodes.primitive_color_275.material} />
          </group>
          <group position={[-1.19, 5.67, 18.77]} rotation={[-0.95, 0.03, -0.12]} scale={[0.42, 0.43, 0.42]}>
            <mesh geometry={nodes.primitive_color_276.geometry} material={nodes.primitive_color_276.material} />
          </group>
          <group position={[-13.07, 6.12, 17.93]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_277.geometry} material={nodes.primitive_color_277.material} />
          </group>
          <group position={[-20.89, 11.41, -3.15]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_278.geometry} material={nodes.primitive_color_278.material} />
          </group>
          <group position={[-12.64, 6.66, 15.74]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_279.geometry} material={nodes.primitive_color_279.material} />
          </group>
          <group position={[-14.5, 3.63, 12.66]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_280.geometry} material={nodes.primitive_color_280.material} />
          </group>
          <group position={[-1.45, 4.15, 18.72]} rotation={[-0.95, 0.03, -0.12]} scale={[0.42, 0.43, 0.42]}>
            <mesh geometry={nodes.primitive_color_281.geometry} material={nodes.primitive_color_281.material} />
          </group>
          <group position={[-4.4, 3.86, 16.49]} rotation={[-0.95, 0.03, -0.12]} scale={[0.42, 0.43, 0.42]}>
            <mesh geometry={nodes.primitive_color_282.geometry} material={nodes.primitive_color_282.material} />
          </group>
          <group position={[0.67, 3.74, 19.81]} rotation={[-0.95, 0.03, -0.12]} scale={[0.38, 0.37, 0.37]}>
            <mesh geometry={nodes.primitive_color_283.geometry} material={nodes.primitive_color_283.material} />
          </group>
          <group position={[-3.91, 5.85, 15.63]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_284.geometry} material={nodes.primitive_color_284.material} />
          </group>
          <group position={[-9.61, 5.86, 19.07]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_285.geometry} material={nodes.primitive_color_285.material} />
          </group>
          <group position={[-2.22, 3.8, 17.58]} rotation={[-0.95, 0.03, -0.12]} scale={[0.38, 0.37, 0.37]}>
            <mesh geometry={nodes.primitive_color_286.geometry} material={nodes.primitive_color_286.material} />
          </group>
          <group position={[-16.87, 6.11, 2.85]} rotation={[-0.95, 0.03, -0.12]} scale={[0.42, 0.43, 0.42]}>
            <mesh geometry={nodes.primitive_color_287.geometry} material={nodes.primitive_color_287.material} />
          </group>
          <group position={[-12.19, 5.25, 9.23]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_288.geometry} material={nodes.primitive_color_288.material} />
          </group>
          <group position={[8.38, 1.36, 20.92]} rotation={[-0.95, 0.03, -0.12]} scale={[0.38, 0.37, 0.37]}>
            <mesh geometry={nodes.primitive_color_289.geometry} material={nodes.primitive_color_289.material} />
          </group>
          <group position={[-6.95, 4.61, 19.26]} rotation={[-0.95, 0.03, -0.12]} scale={[0.42, 0.43, 0.42]}>
            <mesh geometry={nodes.primitive_color_290.geometry} material={nodes.primitive_color_290.material} />
          </group>
          <group position={[-17.56, 6.95, 3.1]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_291.geometry} material={nodes.primitive_color_291.material} />
          </group>
          <group position={[-1.95, 3.83, 19.67]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_292.geometry} material={nodes.primitive_color_292.material} />
          </group>
          <group position={[-4.24, 2.83, 16.12]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_293.geometry} material={nodes.primitive_color_293.material} />
          </group>
          <group position={[-11.2, 4.38, 17.89]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_294.geometry} material={nodes.primitive_color_294.material} />
          </group>
          <group position={[-11.22, 3.02, 9.94]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_295.geometry} material={nodes.primitive_color_295.material} />
          </group>
          <group position={[-11.91, 6.36, 19.24]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_296.geometry} material={nodes.primitive_color_296.material} />
          </group>
          <group position={[-21.17, 8.31, 3.17]} rotation={[-0.95, 0.03, -0.12]} scale={[0.38, 0.37, 0.37]}>
            <mesh geometry={nodes.primitive_color_297.geometry} material={nodes.primitive_color_297.material} />
          </group>
          <group position={[-18.9, 10.03, -3.13]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_298.geometry} material={nodes.primitive_color_298.material} />
          </group>
          <group position={[-16.09, 6.44, 1.72]} rotation={[-0.95, 0.03, -0.12]} scale={[0.38, 0.37, 0.37]}>
            <mesh geometry={nodes.primitive_color_299.geometry} material={nodes.primitive_color_299.material} />
          </group>
          <group position={[-12.31, 3.22, 10.01]} rotation={[-0.95, 0.03, -0.12]} scale={[0.42, 0.43, 0.42]}>
            <mesh geometry={nodes.primitive_color_300.geometry} material={nodes.primitive_color_300.material} />
          </group>
          <group position={[-20.4, 9.33, 1.49]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_301.geometry} material={nodes.primitive_color_301.material} />
          </group>
          <group position={[-16.77, 10.28, -1.83]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_302.geometry} material={nodes.primitive_color_302.material} />
          </group>
          <group position={[-3.97, 3.19, 18.51]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_303.geometry} material={nodes.primitive_color_303.material} />
          </group>
          <group position={[-12.87, 2.77, 8.79]} rotation={[-0.95, 0.03, -0.12]} scale={[0.38, 0.37, 0.37]}>
            <mesh geometry={nodes.primitive_color_304.geometry} material={nodes.primitive_color_304.material} />
          </group>
          <group position={[-7.36, 6.5, 18.3]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_305.geometry} material={nodes.primitive_color_305.material} />
          </group>
          <group position={[-2.79, 4.53, 15.16]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_306.geometry} material={nodes.primitive_color_306.material} />
          </group>
          <group position={[-0.32, 2.32, 18.63]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_307.geometry} material={nodes.primitive_color_307.material} />
          </group>
          <group position={[-6.56, 5.84, 16.01]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_308.geometry} material={nodes.primitive_color_308.material} />
          </group>
          <group position={[-17.58, 8.72, 1.31]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_309.geometry} material={nodes.primitive_color_309.material} />
          </group>
          <group position={[-7.73, 4.73, 20.04]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_310.geometry} material={nodes.primitive_color_310.material} />
          </group>
          <group position={[-20.99, 8.43, 1.77]} rotation={[-0.95, 0.03, -0.12]} scale={[0.42, 0.43, 0.42]}>
            <mesh geometry={nodes.primitive_color_311.geometry} material={nodes.primitive_color_311.material} />
          </group>
          <group position={[-18.5, 4.82, 3.37]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_312.geometry} material={nodes.primitive_color_312.material} />
          </group>
          <group position={[-15.46, 3.53, 9.53]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_313.geometry} material={nodes.primitive_color_313.material} />
          </group>
          <group position={[-0.67, 6.01, 17.85]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_314.geometry} material={nodes.primitive_color_314.material} />
          </group>
          <group position={[2.48, 2.87, 17.77]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_315.geometry} material={nodes.primitive_color_315.material} />
          </group>
          <group position={[-17.76, 4.89, 2.55]} rotation={[-0.95, 0.03, -0.12]} scale={[0.42, 0.43, 0.42]}>
            <mesh geometry={nodes.primitive_color_316.geometry} material={nodes.primitive_color_316.material} />
          </group>
          <group position={[-21.98, 8.55, 1.3]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_317.geometry} material={nodes.primitive_color_317.material} />
          </group>
          <group position={[-5.98, 4.96, 19.67]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_318.geometry} material={nodes.primitive_color_318.material} />
          </group>
          <group position={[-14.14, 1.46, 9.91]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_319.geometry} material={nodes.primitive_color_319.material} />
          </group>
          <group position={[-14.05, 2, 8.94]} rotation={[-0.95, 0.03, -0.12]} scale={[0.42, 0.43, 0.42]}>
            <mesh geometry={nodes.primitive_color_320.geometry} material={nodes.primitive_color_320.material} />
          </group>
          <group position={[-18.37, 5.01, 1.63]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_321.geometry} material={nodes.primitive_color_321.material} />
          </group>
          <group position={[-15.28, 2.86, 8.66]} rotation={[-0.95, 0.03, -0.12]} scale={[0.42, 0.43, 0.42]}>
            <mesh geometry={nodes.primitive_color_322.geometry} material={nodes.primitive_color_322.material} />
          </group>
          <group position={[-12.65, 2.67, 10.91]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_323.geometry} material={nodes.primitive_color_323.material} />
          </group>
          <group position={[-16.88, 4.56, 7.9]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_324.geometry} material={nodes.primitive_color_324.material} />
          </group>
          <group position={[-20.31, 7.18, 1.2]} rotation={[-0.95, 0.03, -0.12]} scale={[0.42, 0.43, 0.42]}>
            <mesh geometry={nodes.primitive_color_325.geometry} material={nodes.primitive_color_325.material} />
          </group>
          <group position={[-16.16, 2.19, 8.54]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_326.geometry} material={nodes.primitive_color_326.material} />
          </group>
          <group position={[-17.07, 3.66, 2.54]} rotation={[-0.95, 0.03, -0.12]} scale={[0.38, 0.37, 0.37]}>
            <mesh geometry={nodes.primitive_color_327.geometry} material={nodes.primitive_color_327.material} />
          </group>
          <group position={[-19.34, 7.09, 1.71]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_328.geometry} material={nodes.primitive_color_328.material} />
          </group>
          <group position={[-16.68, 2.67, 0.77]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_329.geometry} material={nodes.primitive_color_329.material} />
          </group>
          <group position={[-15.02, 3.62, 7.5]} rotation={[-0.95, 0.03, -0.12]} scale={[0.38, 0.37, 0.37]}>
            <mesh geometry={nodes.primitive_color_330.geometry} material={nodes.primitive_color_330.material} />
          </group>
          <group position={[-20.15, 7.31, -0.2]} rotation={[-0.95, 0.03, -0.12]} scale={[0.38, 0.37, 0.37]}>
            <mesh geometry={nodes.primitive_color_331.geometry} material={nodes.primitive_color_331.material} />
          </group>
          <group position={[-14, 1.21, 8.16]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_332.geometry} material={nodes.primitive_color_332.material} />
          </group>
          <group position={[-16.17, 4.32, 7.07]} rotation={[-0.95, 0.03, -0.12]} scale={[0.42, 0.43, 0.42]}>
            <mesh geometry={nodes.primitive_color_333.geometry} material={nodes.primitive_color_333.material} />
          </group>
          <group position={[-16.25, 3.47, 1.41]} rotation={[-0.95, 0.03, -0.12]} scale={[0.42, 0.43, 0.42]}>
            <mesh geometry={nodes.primitive_color_334.geometry} material={nodes.primitive_color_334.material} />
          </group>
          <group position={[-18.64, 7.46, -2.38]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_335.geometry} material={nodes.primitive_color_335.material} />
          </group>
          <group position={[-18.28, 6.38, -0.18]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_336.geometry} material={nodes.primitive_color_336.material} />
          </group>
          <group position={[-13.57, 2.44, 3.98]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_337.geometry} material={nodes.primitive_color_337.material} />
          </group>
          <group position={[-20.94, 6.29, 1.43]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_338.geometry} material={nodes.primitive_color_338.material} />
          </group>
          <group position={[-19.28, 6.29, -0.66]} rotation={[-0.95, 0.03, -0.12]} scale={[0.42, 0.43, 0.42]}>
            <mesh geometry={nodes.primitive_color_339.geometry} material={nodes.primitive_color_339.material} />
          </group>
          <group position={[-17.32, 2.6, 6.39]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_340.geometry} material={nodes.primitive_color_340.material} />
          </group>
          <group position={[-16.14, 4.36, 0.75]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_341.geometry} material={nodes.primitive_color_341.material} />
          </group>
          <group position={[-15.83, 5.29, 6.66]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_342.geometry} material={nodes.primitive_color_342.material} />
          </group>
          <group position={[-16.87, 3.53, 5.97]} rotation={[-0.95, 0.03, -0.12]} scale={[0.42, 0.43, 0.42]}>
            <mesh geometry={nodes.primitive_color_343.geometry} material={nodes.primitive_color_343.material} />
          </group>
          <group position={[-19.05, 6.45, -2.16]} rotation={[-0.95, 0.03, -0.12]} scale={[0.42, 0.43, 0.42]}>
            <mesh geometry={nodes.primitive_color_344.geometry} material={nodes.primitive_color_344.material} />
          </group>
          <group position={[-16.49, 6.21, -1.76]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_345.geometry} material={nodes.primitive_color_345.material} />
          </group>
          <group position={[-15.02, 1.73, 5.9]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_346.geometry} material={nodes.primitive_color_346.material} />
          </group>
          <group position={[-14.44, 1.75, 3.84]} rotation={[-0.95, 0.03, -0.12]} scale={[0.42, 0.43, 0.42]}>
            <mesh geometry={nodes.primitive_color_347.geometry} material={nodes.primitive_color_347.material} />
          </group>
          <group position={[-15.97, 3.29, 4.9]} rotation={[-0.95, 0.03, -0.12]} scale={[0.38, 0.37, 0.37]}>
            <mesh geometry={nodes.primitive_color_348.geometry} material={nodes.primitive_color_348.material} />
          </group>
          <group position={[-15.5, 1.96, 4.92]} rotation={[-0.95, 0.03, -0.12]} scale={[0.42, 0.43, 0.42]}>
            <mesh geometry={nodes.primitive_color_349.geometry} material={nodes.primitive_color_349.material} />
          </group>
          <group position={[-15.01, 1.79, 2.55]} rotation={[-0.95, 0.03, -0.12]} scale={[0.38, 0.37, 0.37]}>
            <mesh geometry={nodes.primitive_color_350.geometry} material={nodes.primitive_color_350.material} />
          </group>
          <group position={[-14.87, 3.04, 1.9]} rotation={[-0.95, 0.03, -0.12]} scale={[0.42, 0.43, 0.42]}>
            <mesh geometry={nodes.primitive_color_351.geometry} material={nodes.primitive_color_351.material} />
          </group>
          <group position={[-16.88, 5.84, -2.74]} rotation={[-0.95, 0.03, -0.12]} scale={[0.42, 0.43, 0.42]}>
            <mesh geometry={nodes.primitive_color_352.geometry} material={nodes.primitive_color_352.material} />
          </group>
          <group position={[-20.02, 6.39, -2.69]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_353.geometry} material={nodes.primitive_color_353.material} />
          </group>
          <group position={[-18.22, 5.41, -2.64]} rotation={[-0.95, 0.03, -0.12]} scale={[0.38, 0.37, 0.37]}>
            <mesh geometry={nodes.primitive_color_354.geometry} material={nodes.primitive_color_354.material} />
          </group>
          <group position={[-19.72, 5.29, -0.48]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_355.geometry} material={nodes.primitive_color_355.material} />
          </group>
          <group position={[-14.02, 0.73, 3.97]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_356.geometry} material={nodes.primitive_color_356.material} />
          </group>
          <group position={[-17.72, 4.14, 5.59]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_357.geometry} material={nodes.primitive_color_357.material} />
          </group>
          <group position={[-14.47, 3.85, 2.55]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_358.geometry} material={nodes.primitive_color_358.material} />
          </group>
          <group position={[-16.77, 6.61, -3.54]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_359.geometry} material={nodes.primitive_color_359.material} />
          </group>
          <group position={[-14.18, 2.92, 1.04]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_360.geometry} material={nodes.primitive_color_360.material} />
          </group>
          <group position={[-16.25, 4.98, -3.03]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_361.geometry} material={nodes.primitive_color_361.material} />
          </group>
          <group position={[-16.33, 1.24, 4.74]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_362.geometry} material={nodes.primitive_color_362.material} />
          </group>
          <group position={[9.92, 3.22, 20.73]} rotation={[-0.95, 0.03, -0.12]} scale={[0.42, 0.43, 0.42]}>
            <mesh geometry={nodes.primitive_color_363.geometry} material={nodes.primitive_color_363.material} />
          </group>
          <group position={[8.84, 4.16, 20.19]} rotation={[-0.95, 0.03, -0.12]} scale={[0.42, 0.43, 0.42]}>
            <mesh geometry={nodes.primitive_color_364.geometry} material={nodes.primitive_color_364.material} />
          </group>
          <group position={[9.29, 4.9, 19.5]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_365.geometry} material={nodes.primitive_color_365.material} />
          </group>
          <group position={[8.34, 4.7, 21.02]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_366.geometry} material={nodes.primitive_color_366.material} />
          </group>
          <group position={[8.08, 3.59, 19.62]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_367.geometry} material={nodes.primitive_color_367.material} />
          </group>
          <group position={[9.3, 2.16, 21.65]} rotation={[-0.95, 0.03, -0.12]} scale={[0.42, 0.43, 0.42]}>
            <mesh geometry={nodes.primitive_color_368.geometry} material={nodes.primitive_color_368.material} />
          </group>
          <group position={[10.39, 2.66, 19.89]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_369.geometry} material={nodes.primitive_color_369.material} />
          </group>
          <group position={[10.14, 1.55, 22.06]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_370.geometry} material={nodes.primitive_color_370.material} />
          </group>
          <group position={[8.77, 2.66, 22.5]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_371.geometry} material={nodes.primitive_color_371.material} />
          </group>
          <group position={[8.08, 0.15, 21.61]} rotation={[-0.95, 0.03, -0.12]} scale={[0.42, 0.43, 0.42]}>
            <mesh geometry={nodes.primitive_color_372.geometry} material={nodes.primitive_color_372.material} />
          </group>
          <group position={[1.81, 1.6, 20.22]} rotation={[-0.95, 0.03, -0.12]} scale={[0.42, 0.43, 0.42]}>
            <mesh geometry={nodes.primitive_color_373.geometry} material={nodes.primitive_color_373.material} />
          </group>
          <group position={[2.44, 3.57, 20.77]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_374.geometry} material={nodes.primitive_color_374.material} />
          </group>
          <group position={[9.11, -0.93, 21.23]} rotation={[-0.95, 0.03, -0.12]} scale={[0.42, 0.43, 0.42]}>
            <mesh geometry={nodes.primitive_color_375.geometry} material={nodes.primitive_color_375.material} />
          </group>
          <group position={[9.1, -1.11, 20.14]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_376.geometry} material={nodes.primitive_color_376.material} />
          </group>
          <group position={[8.87, -1.88, 21.75]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_377.geometry} material={nodes.primitive_color_377.material} />
          </group>
          <group position={[10.13, -0.63, 21.53]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_378.geometry} material={nodes.primitive_color_378.material} />
          </group>
          <group position={[6.67, -0.32, 21.22]} rotation={[-0.95, 0.03, -0.12]} scale={[0.42, 0.43, 0.42]}>
            <mesh geometry={nodes.primitive_color_379.geometry} material={nodes.primitive_color_379.material} />
          </group>
          <group position={[8.08, 0.29, 22.72]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_380.geometry} material={nodes.primitive_color_380.material} />
          </group>
          <group position={[4.55, 0.03, 22.15]} rotation={[-0.95, 0.03, -0.12]} scale={[0.42, 0.43, 0.42]}>
            <mesh geometry={nodes.primitive_color_381.geometry} material={nodes.primitive_color_381.material} />
          </group>
          <group position={[5.7, 0.65, 21.59]} rotation={[-0.95, 0.03, -0.12]} scale={[0.38, 0.37, 0.37]}>
            <mesh geometry={nodes.primitive_color_382.geometry} material={nodes.primitive_color_382.material} />
          </group>
          <group position={[4.74, -0.16, 23.66]} rotation={[-0.95, 0.03, -0.12]} scale={[0.42, 0.43, 0.42]}>
            <mesh geometry={nodes.primitive_color_383.geometry} material={nodes.primitive_color_383.material} />
          </group>
          <group position={[5.61, -0.82, 23.86]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_384.geometry} material={nodes.primitive_color_384.material} />
          </group>
          <group position={[3.84, -0.63, 24.1]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_385.geometry} material={nodes.primitive_color_385.material} />
          </group>
          <group position={[4.92, 0.82, 24.15]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_386.geometry} material={nodes.primitive_color_386.material} />
          </group>
          <group position={[3.31, 0.91, 21.88]} rotation={[-0.95, 0.03, -0.12]} scale={[0.42, 0.43, 0.42]}>
            <mesh geometry={nodes.primitive_color_387.geometry} material={nodes.primitive_color_387.material} />
          </group>
          <group position={[3.09, 1.02, 20.49]} rotation={[-0.95, 0.03, -0.12]} scale={[0.38, 0.37, 0.37]}>
            <mesh geometry={nodes.primitive_color_388.geometry} material={nodes.primitive_color_388.material} />
          </group>
          <group position={[1.37, 1.05, 19.37]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_389.geometry} material={nodes.primitive_color_389.material} />
          </group>
          <group position={[1.09, 1.47, 21.06]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_390.geometry} material={nodes.primitive_color_390.material} />
          </group>
          <group position={[3.47, 1.92, 22.33]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_391.geometry} material={nodes.primitive_color_391.material} />
          </group>
          <group position={[2.45, 0.4, 22.38]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_392.geometry} material={nodes.primitive_color_392.material} />
          </group>
          <group position={[4.33, -0.95, 21.67]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_393.geometry} material={nodes.primitive_color_393.material} />
          </group>
          <group position={[6.52, -1.31, 21.72]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_394.geometry} material={nodes.primitive_color_394.material} />
          </group>
          <group position={[6.62, -0.48, 20.12]} rotation={[-0.95, 0.03, -0.12]} scale={[0.25, 0.25, 0.25]}>
            <mesh geometry={nodes.primitive_color_395.geometry} material={nodes.primitive_color_395.material} />
          </group>
          <group position={[10.94, 19.3, 3.33]} rotation={[-0.2, 0.63, -2.53]} scale={[0.2, 0.19, 0.2]}>
            <mesh geometry={nodes.primitive_color_396.geometry} material={nodes.primitive_color_396.material} />
          </group>
          <group position={[11.11, 18.98, 3.27]} rotation={[0.16, 0.04, 0.48]} scale={[0.2, 0.17, 0.2]}>
            <mesh geometry={nodes.primitive_color_397.geometry} material={nodes.primitive_color_397.material} />
          </group>
          <group position={[11.3, 18.04, 3.87]} rotation={[-0.92, 0.02, -0.04]} scale={[0.2, 0.19, 0.2]}>
            <mesh geometry={nodes.primitive_color_398.geometry} material={nodes.primitive_color_398.material} />
          </group>
          <group position={[11.31, 18.26, 3.58]} rotation={[2.22, 0.09, 0.04]} scale={[0.2, 0.17, 0.2]}>
            <mesh geometry={nodes.primitive_color_399.geometry} material={nodes.primitive_color_399.material} />
          </group>
          <group position={[11.38, 16.97, 4.09]} rotation={[0.29, 0.02, 0.14]} scale={[0.2, 0.39, 0.2]}>
            <mesh geometry={nodes.primitive_color_400.geometry} material={nodes.primitive_color_400.material} />
          </group>
          <group position={[10.8, 17.72, 4.57]} rotation={[0.54, 0.41, 1.28]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_401.geometry} material={nodes.primitive_color_401.material} />
          </group>
          <group position={[10.54, 17.73, 4.71]} rotation={[-0.56, 0.45, -1.36]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_402.geometry} material={nodes.primitive_color_402.material} />
          </group>
          <group position={[11.67, 17.82, 4.65]} rotation={[0.76, -0.39, -0.92]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_403.geometry} material={nodes.primitive_color_403.material} />
          </group>
          <group position={[11.88, 17.88, 4.84]} rotation={[-0.93, -0.65, 1.18]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_404.geometry} material={nodes.primitive_color_404.material} />
          </group>
          <group position={[12.24, 16.12, 3.35]} rotation={[0.67, 0.42, 1.1]} scale={[0.2, 0.17, 0.2]}>
            <mesh geometry={nodes.primitive_color_405.geometry} material={nodes.primitive_color_405.material} />
          </group>
          <group position={[11.94, 16.17, 3.55]} rotation={[-0.73, 0.56, -1.29]} scale={[0.2, 0.19, 0.2]}>
            <mesh geometry={nodes.primitive_color_406.geometry} material={nodes.primitive_color_406.material} />
          </group>
          <group position={[11.06, 16.1, 3.57]} rotation={[-0.77, -0.64, 1.37]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_407.geometry} material={nodes.primitive_color_407.material} />
          </group>
          <group position={[10.83, 16.02, 3.41]} rotation={[0.64, -0.36, -1]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_408.geometry} material={nodes.primitive_color_408.material} />
          </group>
          <group position={[11.48, 15.91, 4.29]} rotation={[2.24, 0.01, 0]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_409.geometry} material={nodes.primitive_color_409.material} />
          </group>
          <group position={[11.48, 15.73, 4.53]} rotation={[-0.91, 0, 0]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_410.geometry} material={nodes.primitive_color_410.material} />
          </group>
          <group position={[14.39, 15.79, 3.45]} rotation={[-0.71, 0.77, -1.66]} scale={[0.2, 0.39, 0.2]}>
            <mesh geometry={nodes.primitive_color_411.geometry} material={nodes.primitive_color_411.material} />
          </group>
          <group position={[15.78, 15.54, 3.46]} rotation={[-0.46, -0.44, 1.53]} scale={[0.2, 0.17, 0.2]}>
            <mesh geometry={nodes.primitive_color_412.geometry} material={nodes.primitive_color_412.material} />
          </group>
          <group position={[15.45, 15.48, 3.31]} rotation={[0.43, -0.32, -1.26]} scale={[0.2, 0.19, 0.2]}>
            <mesh geometry={nodes.primitive_color_413.geometry} material={nodes.primitive_color_413.material} />
          </group>
          <group position={[14.81, 14.87, 3.06]} rotation={[-0.06, -0.46, 2.88]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_414.geometry} material={nodes.primitive_color_414.material} />
          </group>
          <group position={[14.74, 14.58, 3.04]} rotation={[0.06, -0.01, -0.24]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_415.geometry} material={nodes.primitive_color_415.material} />
          </group>
          <group position={[14.96, 15.56, 2.58]} rotation={[-1.25, 0.03, -0.04]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_416.geometry} material={nodes.primitive_color_416.material} />
          </group>
          <group position={[14.97, 15.66, 2.3]} rotation={[1.89, 0.06, 0.04]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_417.geometry} material={nodes.primitive_color_417.material} />
          </group>
          <group position={[16.32, 15.31, 4.03]} rotation={[2.16, -0.4, -0.22]} scale={[0.2, 0.17, 0.2]}>
            <mesh geometry={nodes.primitive_color_418.geometry} material={nodes.primitive_color_418.material} />
          </group>
          <group position={[16.39, 15.09, 4.31]} rotation={[-0.87, -0.09, 0.2]} scale={[0.2, 0.19, 0.2]}>
            <mesh geometry={nodes.primitive_color_419.geometry} material={nodes.primitive_color_419.material} />
          </group>
          <group position={[17.11, 14.3, 4.58]} rotation={[-0.22, 0.39, -2.11]} scale={[0.2, 0.39, 0.2]}>
            <mesh geometry={nodes.primitive_color_420.geometry} material={nodes.primitive_color_420.material} />
          </group>
          <group position={[16.09, 14.42, 4.87]} rotation={[0.29, 0.49, 2.1]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_421.geometry} material={nodes.primitive_color_421.material} />
          </group>
          <group position={[15.86, 14.24, 4.94]} rotation={[-0.25, 0.12, -0.88]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_422.geometry} material={nodes.primitive_color_422.material} />
          </group>
          <group position={[16.61, 15.03, 5.17]} rotation={[0.95, -0.1, -0.2]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_423.geometry} material={nodes.primitive_color_423.material} />
          </group>
          <group position={[16.66, 15.19, 5.41]} rotation={[-2.09, -0.37, 0.21]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_424.geometry} material={nodes.primitive_color_424.material} />
          </group>
          <group position={[18.17, 14.19, 4.3]} rotation={[-0.22, 0.11, -0.93]} scale={[0.2, 0.19, 0.2]}>
            <mesh geometry={nodes.primitive_color_425.geometry} material={nodes.primitive_color_425.material} />
          </group>
          <group position={[18.46, 14.4, 4.22]} rotation={[0.24, 0.41, 2.09]} scale={[0.2, 0.17, 0.2]}>
            <mesh geometry={nodes.primitive_color_426.geometry} material={nodes.primitive_color_426.material} />
          </group>
          <group position={[17.61, 13.55, 4]} rotation={[-2.13, -0.38, 0.22]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_427.geometry} material={nodes.primitive_color_427.material} />
          </group>
          <group position={[17.55, 13.38, 3.77]} rotation={[0.91, -0.1, -0.2]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_428.geometry} material={nodes.primitive_color_428.material} />
          </group>
          <group position={[17.79, 13.55, 4.85]} rotation={[2.18, -0.25, -0.13]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_429.geometry} material={nodes.primitive_color_429.material} />
          </group>
          <group position={[17.82, 13.37, 5.09]} rotation={[-0.92, -0.06, 0.13]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_430.geometry} material={nodes.primitive_color_430.material} />
          </group>
          <group position={[19.24, 14.55, 4.38]} rotation={[0.73, -0.62, -1.39]} scale={[0.2, 0.17, 0.2]}>
            <mesh geometry={nodes.primitive_color_431.geometry} material={nodes.primitive_color_431.material} />
          </group>
          <group position={[19.53, 14.46, 4.58]} rotation={[-0.62, -0.36, 1.03]} scale={[0.2, 0.19, 0.2]}>
            <mesh geometry={nodes.primitive_color_432.geometry} material={nodes.primitive_color_432.material} />
          </group>
          <group position={[20.62, 14.42, 4.47]} rotation={[0.68, 0.54, 1.33]} scale={[0.2, 0.39, 0.2]}>
            <mesh geometry={nodes.primitive_color_433.geometry} material={nodes.primitive_color_433.material} />
          </group>
          <group position={[20, 14.63, 5.32]} rotation={[0.95, -0.02, -0.03]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_434.geometry} material={nodes.primitive_color_434.material} />
          </group>
          <group position={[20.01, 14.8, 5.56]} rotation={[-2.19, -0.07, 0.03]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_435.geometry} material={nodes.primitive_color_435.material} />
          </group>
          <group position={[19.99, 13.8, 5.03]} rotation={[2.86, -0.07, -0.01]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_436.geometry} material={nodes.primitive_color_436.material} />
          </group>
          <group position={[19.99, 13.52, 5.12]} rotation={[-0.28, 0, 0.01]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_437.geometry} material={nodes.primitive_color_437.material} />
          </group>
          <group position={[13.05, 16.1, 3.32]} rotation={[0.61, -0.42, -1.19]} scale={[0.2, 0.17, 0.2]}>
            <mesh geometry={nodes.primitive_color_438.geometry} material={nodes.primitive_color_438.material} />
          </group>
          <group position={[13.36, 16.14, 3.51]} rotation={[-0.64, -0.51, 1.33]} scale={[0.2, 0.19, 0.2]}>
            <mesh geometry={nodes.primitive_color_439.geometry} material={nodes.primitive_color_439.material} />
          </group>
          <group position={[13.98, 16.71, 3.82]} rotation={[0.02, 0, -0.26]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_440.geometry} material={nodes.primitive_color_440.material} />
          </group>
          <group position={[14.06, 16.99, 3.82]} rotation={[-0.02, -0.14, 2.88]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_441.geometry} material={nodes.primitive_color_441.material} />
          </group>
          <group position={[13.8, 16, 4.31]} rotation={[1.92, 0.11, 0.08]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_442.geometry} material={nodes.primitive_color_442.material} />
          </group>
          <group position={[13.78, 15.9, 4.58]} rotation={[-1.21, 0.05, -0.08]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_443.geometry} material={nodes.primitive_color_443.material} />
          </group>
          <group position={[11.1, 20.28, 3.84]} rotation={[0.59, -0.18, -0.59]} scale={[0.2, 0.39, 0.2]}>
            <mesh geometry={nodes.primitive_color_444.geometry} material={nodes.primitive_color_444.material} />
          </group>
          <group position={[10.19, 19.73, 3.62]} rotation={[0.42, 0.4, 1.52]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_445.geometry} material={nodes.primitive_color_445.material} />
          </group>
          <group position={[9.92, 19.7, 3.74]} rotation={[-0.41, 0.32, -1.32]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_446.geometry} material={nodes.primitive_color_446.material} />
          </group>
          <group position={[10.61, 20.02, 2.94]} rotation={[-1.12, -0.08, 0.13]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_447.geometry} material={nodes.primitive_color_447.material} />
          </group>
          <group position={[10.57, 20.14, 2.68]} rotation={[1.98, -0.2, -0.13]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_448.geometry} material={nodes.primitive_color_448.material} />
          </group>
          <group position={[11.52, 20.61, 4.8]} rotation={[1.86, -0.01, -0.01]} scale={[0.2, 0.19, 0.2]}>
            <mesh geometry={nodes.primitive_color_449.geometry} material={nodes.primitive_color_449.material} />
          </group>
          <group position={[11.53, 20.51, 5.15]} rotation={[-1.28, -0.01, 0.01]} scale={[0.2, 0.17, 0.2]}>
            <mesh geometry={nodes.primitive_color_450.geometry} material={nodes.primitive_color_450.material} />
          </group>
          <group position={[12, 20.83, 4.03]} rotation={[-0.47, 0.35, -1.29]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_451.geometry} material={nodes.primitive_color_451.material} />
          </group>
          <group position={[12.27, 20.86, 3.91]} rotation={[0.48, 0.44, 1.46]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_452.geometry} material={nodes.primitive_color_452.material} />
          </group>
          <group position={[11.29, 21.26, 4.24]} rotation={[-0.04, -0.01, 0.45]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_453.geometry} material={nodes.primitive_color_453.material} />
          </group>
          <group position={[11.16, 21.52, 4.23]} rotation={[0.04, -0.16, -2.69]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_454.geometry} material={nodes.primitive_color_454.material} />
          </group>
          <group position={[21.99, 14.32, 4.59]} rotation={[-0.66, -0.38, 1.01]} scale={[0.2, 0.17, 0.2]}>
            <mesh geometry={nodes.primitive_color_455.geometry} material={nodes.primitive_color_455.material} />
          </group>
          <group position={[21.7, 14.4, 4.39]} rotation={[0.78, -0.62, -1.33]} scale={[0.2, 0.19, 0.2]}>
            <mesh geometry={nodes.primitive_color_456.geometry} material={nodes.primitive_color_456.material} />
          </group>
          <group position={[21.28, 15.04, 3.9]} rotation={[-0.3, 0.01, -0.04]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_457.geometry} material={nodes.primitive_color_457.material} />
          </group>
          <group position={[21.29, 15.32, 3.82]} rotation={[2.83, 0.27, 0.04]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_458.geometry} material={nodes.primitive_color_458.material} />
          </group>
          <group position={[21.23, 14.2, 3.64]} rotation={[-2.22, -0.1, 0.05]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_459.geometry} material={nodes.primitive_color_459.material} />
          </group>
          <group position={[21.22, 14.02, 3.4]} rotation={[0.92, -0.02, -0.05]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_460.geometry} material={nodes.primitive_color_460.material} />
          </group>
          <group position={[23.08, 14.27, 4.42]} rotation={[0.66, 0.51, 1.29]} scale={[0.2, 0.19, 0.2]}>
            <mesh geometry={nodes.primitive_color_461.geometry} material={nodes.primitive_color_461.material} />
          </group>
          <group position={[22.78, 14.24, 4.61]} rotation={[-0.63, 0.43, -1.18]} scale={[0.2, 0.17, 0.2]}>
            <mesh geometry={nodes.primitive_color_462.geometry} material={nodes.primitive_color_462.material} />
          </group>
          <group position={[23.64, 14.81, 3.94]} rotation={[-0.32, 0.02, -0.15]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_463.geometry} material={nodes.primitive_color_463.material} />
          </group>
          <group position={[23.68, 15.09, 3.85]} rotation={[2.65, 0.84, 0.22]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_464.geometry} material={nodes.primitive_color_464.material} />
          </group>
          <group position={[23.56, 13.96, 3.7]} rotation={[-2.28, 0.02, -0.01]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_465.geometry} material={nodes.primitive_color_465.material} />
          </group>
          <group position={[23.56, 13.77, 3.48]} rotation={[0.86, 0, 0.01]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_466.geometry} material={nodes.primitive_color_466.material} />
          </group>
          <group position={[23.97, 14.18, 4.43]} rotation={[0.83, -0.64, -1.29]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_467.geometry} material={nodes.primitive_color_467.material} />
          </group>
          <group position={[24.2, 14.12, 4.6]} rotation={[-0.69, -0.38, 0.98]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_468.geometry} material={nodes.primitive_color_468.material} />
          </group>
          <group position={[25.58, 16.92, 8.04]} rotation={[0.01, 0.01, 1.79]} scale={[0.2, 0.39, 0.2]}>
            <mesh geometry={nodes.primitive_color_469.geometry} material={nodes.primitive_color_469.material} />
          </group>
          <group position={[26.53, 17.08, 8.53]} rotation={[1.44, -0.37, -0.42]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_470.geometry} material={nodes.primitive_color_470.material} />
          </group>
          <group position={[26.64, 17.07, 8.81]} rotation={[-1.4, -0.35, 0.42]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_471.geometry} material={nodes.primitive_color_471.material} />
          </group>
          <group position={[26.39, 17.6, 7.87]} rotation={[-0.31, 0.02, -0.11]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_472.geometry} material={nodes.primitive_color_472.material} />
          </group>
          <group position={[26.42, 17.87, 7.78]} rotation={[2.74, 0.67, 0.14]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_473.geometry} material={nodes.primitive_color_473.material} />
          </group>
          <group position={[23.33, 18.05, 5.83]} rotation={[1.28, -0.42, -0.56]} scale={[0.2, 0.39, 0.2]}>
            <mesh geometry={nodes.primitive_color_474.geometry} material={nodes.primitive_color_474.material} />
          </group>
          <group position={[23.3, 17.9, 4.78]} rotation={[-1.16, 0.66, -0.97]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_475.geometry} material={nodes.primitive_color_475.material} />
          </group>
          <group position={[23.49, 17.83, 4.56]} rotation={[0.89, 0.39, 0.78]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_476.geometry} material={nodes.primitive_color_476.material} />
          </group>
          <group position={[22.59, 17.64, 5.17]} rotation={[0.01, 0.02, 2.38]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_477.geometry} material={nodes.primitive_color_477.material} />
          </group>
          <group position={[22.38, 17.43, 5.17]} rotation={[-0.01, 0, -0.76]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_478.geometry} material={nodes.primitive_color_478.material} />
          </group>
          <group position={[21.04, 19.97, 5.52]} rotation={[0.24, 0.01, 0.12]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_479.geometry} material={nodes.primitive_color_479.material} />
          </group>
          <group position={[21.01, 20.25, 5.59]} rotation={[-2.75, 0.9, -0.19]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_480.geometry} material={nodes.primitive_color_480.material} />
          </group>
          <group position={[21.03, 19.17, 5.85]} rotation={[2.08, 0.24, 0.14]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_481.geometry} material={nodes.primitive_color_481.material} />
          </group>
          <group position={[20.99, 19.02, 6.09]} rotation={[-1.02, 0.08, -0.14]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_482.geometry} material={nodes.primitive_color_482.material} />
          </group>
          <group position={[14.35, 18.53, 7.76]} rotation={[0.24, 0.04, 0.31]} scale={[0.2, 0.19, 0.2]}>
            <mesh geometry={nodes.primitive_color_483.geometry} material={nodes.primitive_color_483.material} />
          </group>
          <group position={[14.24, 18.86, 7.85]} rotation={[-0.67, 1.19, -2.19]} scale={[0.2, 0.17, 0.2]}>
            <mesh geometry={nodes.primitive_color_484.geometry} material={nodes.primitive_color_484.material} />
          </group>
          <group position={[14.35, 17.85, 7.14]} rotation={[-1.74, -0.4, 0.34]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_485.geometry} material={nodes.primitive_color_485.material} />
          </group>
          <group position={[14.26, 17.77, 6.88]} rotation={[1.19, -0.22, -0.32]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_486.geometry} material={nodes.primitive_color_486.material} />
          </group>
          <group position={[14.33, 17.66, 7.99]} rotation={[1.98, 0.75, 0.51]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_487.geometry} material={nodes.primitive_color_487.material} />
          </group>
          <group position={[14.23, 17.47, 8.19]} rotation={[-0.74, 0.15, -0.37]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_488.geometry} material={nodes.primitive_color_488.material} />
          </group>
          <group position={[27.15, 15.47, 7.46]} rotation={[-0.37, -0.02, 0.1]} scale={[0.2, 0.19, 0.2]}>
            <mesh geometry={nodes.primitive_color_489.geometry} material={nodes.primitive_color_489.material} />
          </group>
          <group position={[27.11, 15.8, 7.33]} rotation={[2.71, -0.53, -0.12]} scale={[0.2, 0.17, 0.2]}>
            <mesh geometry={nodes.primitive_color_490.geometry} material={nodes.primitive_color_490.material} />
          </group>
          <group position={[16.59, 18.64, 5.95]} rotation={[1.26, -0.03, -0.04]} scale={[0.2, 0.19, 0.2]}>
            <mesh geometry={nodes.primitive_color_491.geometry} material={nodes.primitive_color_491.material} />
          </group>
          <group position={[16.6, 18.75, 6.3]} rotation={[-1.88, -0.06, 0.04]} scale={[0.2, 0.17, 0.2]}>
            <mesh geometry={nodes.primitive_color_492.geometry} material={nodes.primitive_color_492.material} />
          </group>
          <group position={[16.34, 18.87, 5.12]} rotation={[-0.58, -0.13, 0.43]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_493.geometry} material={nodes.primitive_color_493.material} />
          </group>
          <group position={[16.22, 19.08, 4.96]} rotation={[1.76, -0.98, -0.83]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_494.geometry} material={nodes.primitive_color_494.material} />
          </group>
          <group position={[16.26, 18.04, 5.34]} rotation={[-0.15, -0.42, 2.46]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_495.geometry} material={nodes.primitive_color_495.material} />
          </group>
          <group position={[16.09, 17.81, 5.3]} rotation={[0.14, -0.04, -0.61]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_496.geometry} material={nodes.primitive_color_496.material} />
          </group>
          <group position={[16.28, 18.33, 7.3]} rotation={[-0.68, 0.15, -0.42]} scale={[0.2, 0.19, 0.2]}>
            <mesh geometry={nodes.primitive_color_497.geometry} material={nodes.primitive_color_497.material} />
          </group>
          <group position={[16.43, 18.57, 7.07]} rotation={[1.85, 0.87, 0.67]} scale={[0.2, 0.17, 0.2]}>
            <mesh geometry={nodes.primitive_color_498.geometry} material={nodes.primitive_color_498.material} />
          </group>
          <group position={[15.29, 17.98, 7.64]} rotation={[-0.01, -0.01, 1.54]} scale={[0.2, 0.39, 0.2]}>
            <mesh geometry={nodes.primitive_color_499.geometry} material={nodes.primitive_color_499.material} />
          </group>
          <group position={[16.22, 18.07, 8.14]} rotation={[1.26, -0.24, -0.33]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_500.geometry} material={nodes.primitive_color_500.material} />
          </group>
          <group position={[16.31, 18.13, 8.42]} rotation={[-1.67, -0.38, 0.34]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_501.geometry} material={nodes.primitive_color_501.material} />
          </group>
          <group position={[16.23, 17.45, 7.55]} rotation={[-0.34, 0.98, -2.51]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_502.geometry} material={nodes.primitive_color_502.material} />
          </group>
          <group position={[16.33, 17.18, 7.49]} rotation={[0.19, 0.03, 0.33]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_503.geometry} material={nodes.primitive_color_503.material} />
          </group>
          <group position={[17.26, 18.31, 5.15]} rotation={[0.37, 0.27, 1.24]} scale={[0.2, 0.39, 0.2]}>
            <mesh geometry={nodes.primitive_color_504.geometry} material={nodes.primitive_color_504.material} />
          </group>
          <group position={[17.9, 17.99, 4.37]} rotation={[-1.86, -0.14, 0.11]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_505.geometry} material={nodes.primitive_color_505.material} />
          </group>
          <group position={[17.87, 17.9, 4.09]} rotation={[1.26, -0.08, -0.1]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_506.geometry} material={nodes.primitive_color_506.material} />
          </group>
          <group position={[18.16, 17.76, 5.18]} rotation={[1.85, -0.95, -0.74]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_507.geometry} material={nodes.primitive_color_507.material} />
          </group>
          <group position={[18.28, 17.54, 5.34]} rotation={[-0.6, -0.13, 0.41]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_508.geometry} material={nodes.primitive_color_508.material} />
          </group>
          <group position={[20.57, 19.25, 4.88]} rotation={[0.8, -0.38, -0.85]} scale={[0.2, 0.39, 0.2]}>
            <mesh geometry={nodes.primitive_color_509.geometry} material={nodes.primitive_color_509.material} />
          </group>
          <group position={[20.12, 18.54, 4.23]} rotation={[-2.63, 1.01, -0.29]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_510.geometry} material={nodes.primitive_color_510.material} />
          </group>
          <group position={[20.16, 18.26, 4.16]} rotation={[0.27, 0.02, 0.15]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_511.geometry} material={nodes.primitive_color_511.material} />
          </group>
          <group position={[20.09, 19.35, 3.93]} rotation={[-0.98, 0.05, -0.1]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_512.geometry} material={nodes.primitive_color_512.material} />
          </group>
          <group position={[20.12, 19.52, 3.69]} rotation={[2.14, 0.18, 0.1]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_513.geometry} material={nodes.primitive_color_513.material} />
          </group>
          <group position={[23.93, 17.57, 6.6]} rotation={[0.24, -0.75, -2.54]} scale={[0.2, 0.19, 0.2]}>
            <mesh geometry={nodes.primitive_color_514.geometry} material={nodes.primitive_color_514.material} />
          </group>
          <group position={[24.08, 17.25, 6.66]} rotation={[-0.18, -0.04, 0.42]} scale={[0.2, 0.17, 0.2]}>
            <mesh geometry={nodes.primitive_color_515.geometry} material={nodes.primitive_color_515.material} />
          </group>
          <group position={[23.34, 18.2, 6.88]} rotation={[0.87, 0.39, 0.81]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_516.geometry} material={nodes.primitive_color_516.material} />
          </group>
          <group position={[23.14, 18.27, 7.09]} rotation={[-1.12, 0.66, -1.01]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_517.geometry} material={nodes.primitive_color_517.material} />
          </group>
          <group position={[24.08, 18.46, 6.47]} rotation={[-0.05, 0.02, -0.79]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_518.geometry} material={nodes.primitive_color_518.material} />
          </group>
          <group position={[24.29, 18.66, 6.45]} rotation={[0.05, 0.13, 2.35]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_519.geometry} material={nodes.primitive_color_519.material} />
          </group>
          <group position={[24.76, 16.26, 8.24]} rotation={[2.66, 0.71, 0.18]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_520.geometry} material={nodes.primitive_color_520.material} />
          </group>
          <group position={[24.71, 15.99, 8.34]} rotation={[-0.36, 0.03, -0.14]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_521.geometry} material={nodes.primitive_color_521.material} />
          </group>
          <group position={[24.58, 17.08, 8.4]} rotation={[0.73, 0.19, 0.5]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_522.geometry} material={nodes.primitive_color_522.material} />
          </group>
          <group position={[24.44, 17.25, 8.6]} rotation={[-1.66, 0.85, -0.79]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_523.geometry} material={nodes.primitive_color_523.material} />
          </group>
          <group position={[24.47, 16.79, 7.2]} rotation={[1.45, -0.38, -0.43]} scale={[0.2, 0.17, 0.2]}>
            <mesh geometry={nodes.primitive_color_524.geometry} material={nodes.primitive_color_524.material} />
          </group>
          <group position={[24.61, 16.78, 7.53]} rotation={[-1.37, -0.35, 0.43]} scale={[0.2, 0.19, 0.2]}>
            <mesh geometry={nodes.primitive_color_525.geometry} material={nodes.primitive_color_525.material} />
          </group>
          <group position={[18.48, 18.91, 4.92]} rotation={[-0.04, -0.13, 2.53]} scale={[0.2, 0.17, 0.2]}>
            <mesh geometry={nodes.primitive_color_526.geometry} material={nodes.primitive_color_526.material} />
          </group>
          <group position={[18.28, 18.61, 4.9]} rotation={[0.04, -0.01, -0.61]} scale={[0.2, 0.19, 0.2]}>
            <mesh geometry={nodes.primitive_color_527.geometry} material={nodes.primitive_color_527.material} />
          </group>
          <group position={[19.2, 19.22, 4.74]} rotation={[-0.46, 0.45, -1.55]} scale={[0.2, 0.17, 0.2]}>
            <mesh geometry={nodes.primitive_color_528.geometry} material={nodes.primitive_color_528.material} />
          </group>
          <group position={[19.53, 19.16, 4.6]} rotation={[0.43, 0.31, 1.24]} scale={[0.2, 0.19, 0.2]}>
            <mesh geometry={nodes.primitive_color_529.geometry} material={nodes.primitive_color_529.material} />
          </group>
          <group position={[21.95, 19.35, 5.03]} rotation={[0.42, 0.32, 1.31]} scale={[0.2, 0.17, 0.2]}>
            <mesh geometry={nodes.primitive_color_530.geometry} material={nodes.primitive_color_530.material} />
          </group>
          <group position={[21.62, 19.39, 5.17]} rotation={[-0.43, 0.41, -1.51]} scale={[0.2, 0.19, 0.2]}>
            <mesh geometry={nodes.primitive_color_531.geometry} material={nodes.primitive_color_531.material} />
          </group>
          <group position={[22.59, 18.86, 4.95]} rotation={[0.41, -0.96, -2.39]} scale={[0.2, 0.17, 0.2]}>
            <mesh geometry={nodes.primitive_color_532.geometry} material={nodes.primitive_color_532.material} />
          </group>
          <group position={[22.74, 18.53, 5.04]} rotation={[-0.23, -0.05, 0.4]} scale={[0.2, 0.19, 0.2]}>
            <mesh geometry={nodes.primitive_color_533.geometry} material={nodes.primitive_color_533.material} />
          </group>
          <group position={[26.81, 16.55, 7.46]} rotation={[0.69, 0.2, 0.56]} scale={[0.2, 0.17, 0.2]}>
            <mesh geometry={nodes.primitive_color_534.geometry} material={nodes.primitive_color_534.material} />
          </group>
          <group position={[26.62, 16.76, 7.68]} rotation={[-1.48, 0.89, -0.97]} scale={[0.2, 0.19, 0.2]}>
            <mesh geometry={nodes.primitive_color_535.geometry} material={nodes.primitive_color_535.material} />
          </group>
          <group position={[31.12, 14.19, 8.17]} rotation={[1.98, -0.63, -0.42]} scale={[0.2, 0.39, 0.2]}>
            <mesh geometry={nodes.primitive_color_536.geometry} material={nodes.primitive_color_536.material} />
          </group>
          <group position={[31.21, 15.05, 7.54]} rotation={[-0.11, 0.04, -0.68]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_537.geometry} material={nodes.primitive_color_537.material} />
          </group>
          <group position={[31.39, 15.27, 7.51]} rotation={[0.11, 0.3, 2.42]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_538.geometry} material={nodes.primitive_color_538.material} />
          </group>
          <group position={[30.89, 14.37, 7.13]} rotation={[-2.09, 0.06, -0.03]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_539.geometry} material={nodes.primitive_color_539.material} />
          </group>
          <group position={[30.9, 14.22, 6.88]} rotation={[1.05, 0.02, 0.03]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_540.geometry} material={nodes.primitive_color_540.material} />
          </group>
          <group position={[30.03, 14.07, 10.94]} rotation={[0.09, -0.11, -1.77]} scale={[0.2, 0.39, 0.2]}>
            <mesh geometry={nodes.primitive_color_541.geometry} material={nodes.primitive_color_541.material} />
          </group>
          <group position={[29.25, 14.76, 10.81]} rotation={[-0.11, 0, 0.06]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_542.geometry} material={nodes.primitive_color_542.material} />
          </group>
          <group position={[29.23, 15.05, 10.77]} rotation={[2.91, -1.06, -0.13]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_543.geometry} material={nodes.primitive_color_543.material} />
          </group>
          <group position={[29.1, 13.97, 10.43]} rotation={[-1.87, -0.55, 0.42]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_544.geometry} material={nodes.primitive_color_544.material} />
          </group>
          <group position={[29, 13.84, 10.19]} rotation={[0.98, -0.19, -0.36]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_545.geometry} material={nodes.primitive_color_545.material} />
          </group>
          <group position={[27.19, 14.74, 11.71]} rotation={[-0.19, 0, 0.05]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_546.geometry} material={nodes.primitive_color_546.material} />
          </group>
          <group position={[27.18, 15.03, 11.65]} rotation={[2.93, -0.49, -0.05]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_547.geometry} material={nodes.primitive_color_547.material} />
          </group>
          <group position={[26.99, 13.93, 11.41]} rotation={[-1.77, -0.7, 0.58]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_548.geometry} material={nodes.primitive_color_548.material} />
          </group>
          <group position={[26.87, 13.78, 11.19]} rotation={[0.87, -0.21, -0.44]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_549.geometry} material={nodes.primitive_color_549.material} />
          </group>
          <group position={[24.18, 13.99, 17.97]} rotation={[1.39, 0.33, 0.4]} scale={[0.2, 0.19, 0.2]}>
            <mesh geometry={nodes.primitive_color_550.geometry} material={nodes.primitive_color_550.material} />
          </group>
          <group position={[24.05, 14, 18.3]} rotation={[-1.46, 0.36, -0.4]} scale={[0.2, 0.17, 0.2]}>
            <mesh geometry={nodes.primitive_color_551.geometry} material={nodes.primitive_color_551.material} />
          </group>
          <group position={[24.01, 13.84, 17.08]} rotation={[-1.03, -0.67, 1.1]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_552.geometry} material={nodes.primitive_color_552.material} />
          </group>
          <group position={[23.81, 13.77, 16.88]} rotation={[0.81, -0.39, -0.86]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_553.geometry} material={nodes.primitive_color_553.material} />
          </group>
          <group position={[24.75, 13.57, 17.41]} rotation={[-0.06, 0.15, -2.4]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_554.geometry} material={nodes.primitive_color_554.material} />
          </group>
          <group position={[24.95, 13.35, 17.39]} rotation={[0.06, 0.02, 0.73]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_555.geometry} material={nodes.primitive_color_555.material} />
          </group>
          <group position={[28.98, 14.7, 7.52]} rotation={[0.46, -0.2, -0.82]} scale={[0.2, 0.19, 0.2]}>
            <mesh geometry={nodes.primitive_color_556.geometry} material={nodes.primitive_color_556.material} />
          </group>
          <group position={[29.24, 14.9, 7.68]} rotation={[-0.63, -0.75, 1.76]} scale={[0.2, 0.17, 0.2]}>
            <mesh geometry={nodes.primitive_color_557.geometry} material={nodes.primitive_color_557.material} />
          </group>
          <group position={[24.81, 15.46, 15.21]} rotation={[0.83, -0.6, -1.23]} scale={[0.2, 0.19, 0.2]}>
            <mesh geometry={nodes.primitive_color_558.geometry} material={nodes.primitive_color_558.material} />
          </group>
          <group position={[25.09, 15.4, 15.43]} rotation={[-0.72, -0.41, 1.01]} scale={[0.2, 0.17, 0.2]}>
            <mesh geometry={nodes.primitive_color_559.geometry} material={nodes.primitive_color_559.material} />
          </group>
          <group position={[24.43, 16.03, 14.61]} rotation={[-0.49, 0.03, -0.12]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_560.geometry} material={nodes.primitive_color_560.material} />
          </group>
          <group position={[24.47, 16.29, 14.47]} rotation={[2.59, 0.45, 0.13]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_561.geometry} material={nodes.primitive_color_561.material} />
          </group>
          <group position={[23.9, 15.6, 15.13]} rotation={[0.56, 0.41, 1.25]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_562.geometry} material={nodes.primitive_color_562.material} />
          </group>
          <group position={[23.64, 15.61, 15.27]} rotation={[-0.58, 0.47, -1.36]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_563.geometry} material={nodes.primitive_color_563.material} />
          </group>
          <group position={[25.23, 15.31, 16.54]} rotation={[-1.47, 0.28, -0.31]} scale={[0.2, 0.19, 0.2]}>
            <mesh geometry={nodes.primitive_color_564.geometry} material={nodes.primitive_color_564.material} />
          </group>
          <group position={[25.33, 15.31, 16.2]} rotation={[1.49, 0.29, 0.31]} scale={[0.2, 0.17, 0.2]}>
            <mesh geometry={nodes.primitive_color_565.geometry} material={nodes.primitive_color_565.material} />
          </group>
          <group position={[24.73, 14.63, 17.26]} rotation={[0.38, 0.89, 2.38]} scale={[0.2, 0.39, 0.2]}>
            <mesh geometry={nodes.primitive_color_566.geometry} material={nodes.primitive_color_566.material} />
          </group>
          <group position={[25.49, 15.37, 17.4]} rotation={[0.7, -0.43, -1.08]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_567.geometry} material={nodes.primitive_color_567.material} />
          </group>
          <group position={[25.73, 15.4, 17.57]} rotation={[-0.77, -0.57, 1.25]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_568.geometry} material={nodes.primitive_color_568.material} />
          </group>
          <group position={[24.74, 15.72, 17.19]} rotation={[0.2, 0.07, 0.64]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_569.geometry} material={nodes.primitive_color_569.material} />
          </group>
          <group position={[24.56, 15.95, 17.25]} rotation={[-0.24, 0.57, -2.35]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_570.geometry} material={nodes.primitive_color_570.material} />
          </group>
          <group position={[24.29, 14.99, 14.36]} rotation={[0.72, -0.04, -0.1]} scale={[0.2, 0.39, 0.2]}>
            <mesh geometry={nodes.primitive_color_571.geometry} material={nodes.primitive_color_571.material} />
          </group>
          <group position={[23.72, 14.48, 13.63]} rotation={[-0.45, -0.34, 1.3]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_572.geometry} material={nodes.primitive_color_572.material} />
          </group>
          <group position={[23.46, 14.51, 13.51]} rotation={[0.47, -0.43, -1.48]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_573.geometry} material={nodes.primitive_color_573.material} />
          </group>
          <group position={[24.21, 13.93, 14.09]} rotation={[2.7, 0, 0]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_574.geometry} material={nodes.primitive_color_574.material} />
          </group>
          <group position={[24.21, 13.67, 14.21]} rotation={[-0.44, 0, 0]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_575.geometry} material={nodes.primitive_color_575.material} />
          </group>
          <group position={[26.8, 14.09, 12.43]} rotation={[-1.11, 0.4, -0.64]} scale={[0.2, 0.38, 0.2]}>
            <mesh geometry={nodes.primitive_color_576.geometry} material={nodes.primitive_color_576.material} />
          </group>
          <group position={[26.62, 14.24, 13.46]} rotation={[0.88, -0.23, -0.47]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_577.geometry} material={nodes.primitive_color_577.material} />
          </group>
          <group position={[26.75, 14.39, 13.68]} rotation={[-1.7, -0.71, 0.63]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_578.geometry} material={nodes.primitive_color_578.material} />
          </group>
          <group position={[26.35, 13.45, 13.16]} rotation={[2.92, 0.56, 0.07]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_579.geometry} material={nodes.primitive_color_579.material} />
          </group>
          <group position={[26.33, 13.17, 13.22]} rotation={[-0.19, 0.01, -0.06]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_580.geometry} material={nodes.primitive_color_580.material} />
          </group>
          <group position={[31.06, 14.14, 10.58]} rotation={[-0.91, 0.28, -0.56]} scale={[0.2, 0.19, 0.2]}>
            <mesh geometry={nodes.primitive_color_581.geometry} material={nodes.primitive_color_581.material} />
          </group>
          <group position={[31.25, 14.28, 10.3]} rotation={[1.52, 0.71, 0.75]} scale={[0.2, 0.17, 0.2]}>
            <mesh geometry={nodes.primitive_color_582.geometry} material={nodes.primitive_color_582.material} />
          </group>
          <group position={[30.86, 13.38, 11.05]} rotation={[0.15, -0.96, -2.85]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_583.geometry} material={nodes.primitive_color_583.material} />
          </group>
          <group position={[30.91, 13.09, 11.08]} rotation={[-0.09, -0.01, 0.17]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_584.geometry} material={nodes.primitive_color_584.material} />
          </group>
          <group position={[30.95, 14.13, 11.46]} rotation={[1.04, -0.2, -0.35]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_585.geometry} material={nodes.primitive_color_585.material} />
          </group>
          <group position={[31.05, 14.26, 11.71]} rotation={[-1.83, -0.51, 0.39]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_586.geometry} material={nodes.primitive_color_586.material} />
          </group>
          <group position={[31.06, 13.3, 8.77]} rotation={[0.07, 0.21, 2.49]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_587.geometry} material={nodes.primitive_color_587.material} />
          </group>
          <group position={[30.88, 13.07, 8.79]} rotation={[-0.07, 0.02, -0.64]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_588.geometry} material={nodes.primitive_color_588.material} />
          </group>
          <group position={[31.87, 13.55, 8.6]} rotation={[-0.26, 0.34, -1.84]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_589.geometry} material={nodes.primitive_color_589.material} />
          </group>
          <group position={[32.13, 13.45, 8.53]} rotation={[0.25, 0.17, 1.17]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_590.geometry} material={nodes.primitive_color_590.material} />
          </group>
          <group position={[31.46, 14.22, 9.52]} rotation={[-2.11, -0.15, 0.09]} scale={[0.2, 0.17, 0.2]}>
            <mesh geometry={nodes.primitive_color_591.geometry} material={nodes.primitive_color_591.material} />
          </group>
          <group position={[31.43, 14.03, 9.21]} rotation={[1.01, -0.05, -0.08]} scale={[0.2, 0.19, 0.2]}>
            <mesh geometry={nodes.primitive_color_592.geometry} material={nodes.primitive_color_592.material} />
          </group>
          <group position={[24.8, 14.49, 13.15]} rotation={[1.12, 0.56, 0.86]} scale={[0.2, 0.17, 0.2]}>
            <mesh geometry={nodes.primitive_color_593.geometry} material={nodes.primitive_color_593.material} />
          </group>
          <group position={[24.57, 14.46, 13.42]} rotation={[-1.03, 0.47, -0.8]} scale={[0.2, 0.19, 0.2]}>
            <mesh geometry={nodes.primitive_color_594.geometry} material={nodes.primitive_color_594.material} />
          </group>
          <group position={[25.55, 14.34, 12.88]} rotation={[0.21, -0.3, -1.92]} scale={[0.2, 0.17, 0.2]}>
            <mesh geometry={nodes.primitive_color_595.geometry} material={nodes.primitive_color_595.material} />
          </group>
          <group position={[25.87, 14.2, 12.95]} rotation={[-0.2, -0.13, 1.14]} scale={[0.2, 0.19, 0.2]}>
            <mesh geometry={nodes.primitive_color_596.geometry} material={nodes.primitive_color_596.material} />
          </group>
          <group position={[28.09, 13.94, 11.93]} rotation={[-0.13, -0.1, 1.26]} scale={[0.2, 0.17, 0.2]}>
            <mesh geometry={nodes.primitive_color_597.geometry} material={nodes.primitive_color_597.material} />
          </group>
          <group position={[27.75, 14.04, 11.88]} rotation={[0.14, -0.18, -1.84]} scale={[0.2, 0.19, 0.2]}>
            <mesh geometry={nodes.primitive_color_598.geometry} material={nodes.primitive_color_598.material} />
          </group>
          <group position={[28.81, 13.95, 11.61]} rotation={[-1.01, 0.32, -0.58]} scale={[0.2, 0.17, 0.2]}>
            <mesh geometry={nodes.primitive_color_599.geometry} material={nodes.primitive_color_599.material} />
          </group>
          <group position={[28.99, 14.06, 11.32]} rotation={[1.47, 0.63, 0.7]} scale={[0.2, 0.19, 0.2]}>
            <mesh geometry={nodes.primitive_color_600.geometry} material={nodes.primitive_color_600.material} />
          </group>
          <group position={[30.03, 14.98, 7.79]} rotation={[-0.21, 0.3, -1.9]} scale={[0.2, 0.17, 0.2]}>
            <mesh geometry={nodes.primitive_color_601.geometry} material={nodes.primitive_color_601.material} />
          </group>
          <group position={[30.36, 14.85, 7.71]} rotation={[0.21, 0.13, 1.15]} scale={[0.2, 0.19, 0.2]}>
            <mesh geometry={nodes.primitive_color_602.geometry} material={nodes.primitive_color_602.material} />
          </group>
          <group position={[27.89, 14.67, 7.47]} rotation={[-0.28, 0.37, -1.85]} scale={[0.2, 0.39, 0.2]}>
            <mesh geometry={nodes.primitive_color_603.geometry} material={nodes.primitive_color_603.material} />
          </group>
          <group position={[26.82, 14.63, 7.45]} rotation={[-0.57, -0.74, 1.85]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_604.geometry} material={nodes.primitive_color_604.material} />
          </group>
          <group position={[26.61, 14.46, 7.33]} rotation={[0.42, -0.18, -0.81]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_605.geometry} material={nodes.primitive_color_605.material} />
          </group>
          <group position={[27.16, 14.92, 8.2]} rotation={[1.62, 0.08, 0.07]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_606.geometry} material={nodes.primitive_color_606.material} />
          </group>
          <group position={[27.14, 14.9, 8.5]} rotation={[-1.51, 0.07, -0.07]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_607.geometry} material={nodes.primitive_color_607.material} />
          </group>
          <group position={[28.61, 14.41, 6.74]} rotation={[-1.53, 0.07, -0.08]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_608.geometry} material={nodes.primitive_color_608.material} />
          </group>
          <group position={[28.64, 14.42, 6.45]} rotation={[1.6, 0.08, 0.08]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_609.geometry} material={nodes.primitive_color_609.material} />
          </group>
          <group position={[28.6, 13.88, 7.44]} rotation={[2.81, -0.28, -0.05]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_610.geometry} material={nodes.primitive_color_610.material} />
          </group>
          <group position={[28.61, 13.6, 7.54]} rotation={[-0.32, -0.01, 0.05]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_611.geometry} material={nodes.primitive_color_611.material} />
          </group>
          <group position={[13.64, 19.39, 7.79]} rotation={[-0.37, -0.28, 1.29]} scale={[0.2, 0.17, 0.2]}>
            <mesh geometry={nodes.primitive_color_612.geometry} material={nodes.primitive_color_612.material} />
          </group>
          <group position={[13.3, 19.45, 7.66]} rotation={[0.39, -0.4, -1.59]} scale={[0.2, 0.19, 0.2]}>
            <mesh geometry={nodes.primitive_color_613.geometry} material={nodes.primitive_color_613.material} />
          </group>
          <group position={[12.81, 19.9, 6.79]} rotation={[-1.08, 0.02, -0.04]} scale={[0.2, 0.39, 0.2]}>
            <mesh geometry={nodes.primitive_color_614.geometry} material={nodes.primitive_color_614.material} />
          </group>
          <group position={[12.51, 19.84, 7.82]} rotation={[0.74, 0.21, 0.54]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_615.geometry} material={nodes.primitive_color_615.material} />
          </group>
          <group position={[12.37, 20.01, 8.01]} rotation={[-1.55, 0.86, -0.87]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_616.geometry} material={nodes.primitive_color_616.material} />
          </group>
          <group position={[12.49, 19.09, 7.42]} rotation={[-0.08, -0.27, 2.56]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_617.geometry} material={nodes.primitive_color_617.material} />
          </group>
          <group position={[12.34, 18.84, 7.4]} rotation={[0.08, -0.02, -0.56]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_618.geometry} material={nodes.primitive_color_618.material} />
          </group>
          <group position={[11.99, 20.33, 5.79]} rotation={[0.39, -0.37, -1.51]} scale={[0.2, 0.17, 0.2]}>
            <mesh geometry={nodes.primitive_color_619.geometry} material={nodes.primitive_color_619.material} />
          </group>
          <group position={[12.32, 20.31, 5.92]} rotation={[-0.38, -0.31, 1.36]} scale={[0.2, 0.19, 0.2]}>
            <mesh geometry={nodes.primitive_color_620.geometry} material={nodes.primitive_color_620.material} />
          </group>
          <group position={[13.07, 20.74, 6.18]} rotation={[0.13, -0.03, -0.42]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_621.geometry} material={nodes.primitive_color_621.material} />
          </group>
          <group position={[13.19, 21.01, 6.22]} rotation={[-0.15, -0.56, 2.63]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_622.geometry} material={nodes.primitive_color_622.material} />
          </group>
          <group position={[13.15, 19.97, 5.79]} rotation={[-1.3, 0.88, -1.11]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_623.geometry} material={nodes.primitive_color_623.material} />
          </group>
          <group position={[13.32, 19.81, 5.61]} rotation={[0.68, 0.23, 0.63]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_624.geometry} material={nodes.primitive_color_624.material} />
          </group>
          <group position={[23.39, 14.12, 18.76]} rotation={[0, 0, 1.38]} scale={[0.2, 0.17, 0.2]}>
            <mesh geometry={nodes.primitive_color_625.geometry} material={nodes.primitive_color_625.material} />
          </group>
          <group position={[23.03, 14.18, 18.76]} rotation={[0, 0, -1.76]} scale={[0.2, 0.19, 0.2]}>
            <mesh geometry={nodes.primitive_color_626.geometry} material={nodes.primitive_color_626.material} />
          </group>
          <group position={[22.08, 13.63, 18.76]} rotation={[0.01, 0.02, 2.61]} scale={[0.2, 0.39, 0.2]}>
            <mesh geometry={nodes.primitive_color_627.geometry} material={nodes.primitive_color_627.material} />
          </group>
          <group position={[22.3, 14.72, 19.36]} rotation={[0.92, 0.11, 0.23]} scale={[0.2, 0.39, 0.2]}>
            <mesh geometry={nodes.primitive_color_628.geometry} material={nodes.primitive_color_628.material} />
          </group>
          <group position={[22.32, 14.58, 18.33]} rotation={[-0.93, -0.15, 0.29]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_629.geometry} material={nodes.primitive_color_629.material} />
          </group>
          <group position={[22.24, 14.74, 18.09]} rotation={[2, -0.51, -0.33]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_630.geometry} material={nodes.primitive_color_630.material} />
          </group>
          <group position={[22.39, 15.62, 19.94]} rotation={[-0.05, 0.01, -0.52]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_631.geometry} material={nodes.primitive_color_631.material} />
          </group>
          <group position={[22.54, 15.87, 19.92]} rotation={[0.06, 0.2, 2.61]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_632.geometry} material={nodes.primitive_color_632.material} />
          </group>
          <group position={[22.27, 14.91, 20.42]} rotation={[1.95, -0.42, -0.29]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_633.geometry} material={nodes.primitive_color_633.material} />
          </group>
          <group position={[22.34, 14.78, 20.67]} rotation={[-1.04, -0.15, 0.26]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_634.geometry} material={nodes.primitive_color_634.material} />
          </group>
          <group position={[21.6, 15.26, 19.97]} rotation={[0.02, 0.01, 1.38]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_635.geometry} material={nodes.primitive_color_635.material} />
          </group>
          <group position={[21.31, 15.31, 19.98]} rotation={[-0.02, 0.02, -1.77]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_636.geometry} material={nodes.primitive_color_636.material} />
          </group>
          <group position={[21.85, 12.65, 19.21]} rotation={[2.03, -0.5, -0.32]} scale={[0.2, 0.19, 0.2]}>
            <mesh geometry={nodes.primitive_color_637.geometry} material={nodes.primitive_color_637.material} />
          </group>
          <group position={[21.94, 12.45, 19.49]} rotation={[-0.91, -0.14, 0.28]} scale={[0.2, 0.17, 0.2]}>
            <mesh geometry={nodes.primitive_color_638.geometry} material={nodes.primitive_color_638.material} />
          </group>
          <group position={[21.81, 12.69, 18.32]} rotation={[-2.04, 0.37, -0.23]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_639.geometry} material={nodes.primitive_color_639.material} />
          </group>
          <group position={[21.87, 12.54, 18.08]} rotation={[0.99, 0.12, 0.21]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_640.geometry} material={nodes.primitive_color_640.material} />
          </group>
          <group position={[21.16, 13.07, 18.74]} rotation={[-0.05, -0.04, 1.37]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_641.geometry} material={nodes.primitive_color_641.material} />
          </group>
          <group position={[20.88, 13.13, 18.72]} rotation={[0.05, -0.07, -1.76]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_642.geometry} material={nodes.primitive_color_642.material} />
          </group>
          <group position={[21.43, 12.02, 20.42]} rotation={[-0.77, 0.42, -0.97]} scale={[0.2, 0.19, 0.2]}>
            <mesh geometry={nodes.primitive_color_643.geometry} material={nodes.primitive_color_643.material} />
          </group>
          <group position={[21.71, 12.09, 20.19]} rotation={[0.89, 0.62, 1.18]} scale={[0.2, 0.17, 0.2]}>
            <mesh geometry={nodes.primitive_color_644.geometry} material={nodes.primitive_color_644.material} />
          </group>
          <group position={[20.68, 11.25, 20.62]} rotation={[0.21, -0.05, -0.45]} scale={[0.2, 0.39, 0.2]}>
            <mesh geometry={nodes.primitive_color_645.geometry} material={nodes.primitive_color_645.material} />
          </group>
          <group position={[18.95, 9.29, 18.22]} rotation={[-0.71, -0.5, 1.2]} scale={[0.2, 0.39, 0.2]}>
            <mesh geometry={nodes.primitive_color_646.geometry} material={nodes.primitive_color_646.material} />
          </group>
          <group position={[17.59, 9.52, 18.29]} rotation={[-0.74, 0.63, -1.4]} scale={[0.2, 0.17, 0.2]}>
            <mesh geometry={nodes.primitive_color_647.geometry} material={nodes.primitive_color_647.material} />
          </group>
          <group position={[17.88, 9.43, 18.09]} rotation={[0.62, 0.35, 1.01]} scale={[0.2, 0.19, 0.2]}>
            <mesh geometry={nodes.primitive_color_648.geometry} material={nodes.primitive_color_648.material} />
          </group>
          <group position={[18.39, 9.62, 17.37]} rotation={[-0.87, 0.06, -0.12]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_649.geometry} material={nodes.primitive_color_649.material} />
          </group>
          <group position={[18.43, 9.8, 17.15]} rotation={[2.23, 0.26, 0.13]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_650.geometry} material={nodes.primitive_color_650.material} />
          </group>
          <group position={[18.27, 8.77, 17.6]} rotation={[-2.73, -0.55, 0.12]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_651.geometry} material={nodes.primitive_color_651.material} />
          </group>
          <group position={[18.24, 8.5, 17.5]} rotation={[0.35, -0.02, -0.1]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_652.geometry} material={nodes.primitive_color_652.material} />
          </group>
          <group position={[16.47, 9.53, 18.13]} rotation={[0.57, -0.38, -1.16]} scale={[0.2, 0.19, 0.2]}>
            <mesh geometry={nodes.primitive_color_653.geometry} material={nodes.primitive_color_653.material} />
          </group>
          <group position={[16.78, 9.58, 18.31]} rotation={[-0.62, -0.53, 1.4]} scale={[0.2, 0.17, 0.2]}>
            <mesh geometry={nodes.primitive_color_654.geometry} material={nodes.primitive_color_654.material} />
          </group>
          <group position={[15.17, 8.27, 19.29]} rotation={[-0.51, -0.08, 0.3]} scale={[0.2, 0.17, 0.2]}>
            <mesh geometry={nodes.primitive_color_655.geometry} material={nodes.primitive_color_655.material} />
          </group>
          <group position={[15.06, 8.57, 19.11]} rotation={[2.19, -0.94, -0.51]} scale={[0.2, 0.19, 0.2]}>
            <mesh geometry={nodes.primitive_color_656.geometry} material={nodes.primitive_color_656.material} />
          </group>
          <group position={[15.08, 7.88, 20.35]} rotation={[-1.52, 0.27, -0.28]} scale={[0.2, 0.19, 0.2]}>
            <mesh geometry={nodes.primitive_color_657.geometry} material={nodes.primitive_color_657.material} />
          </group>
          <group position={[15.18, 7.87, 20]} rotation={[1.47, 0.26, 0.28]} scale={[0.2, 0.17, 0.2]}>
            <mesh geometry={nodes.primitive_color_658.geometry} material={nodes.primitive_color_658.material} />
          </group>
          <group position={[15.45, 9.24, 18.34]} rotation={[-0.77, 0.38, -0.87]} scale={[0.2, 0.39, 0.2]}>
            <mesh geometry={nodes.primitive_color_659.geometry} material={nodes.primitive_color_659.material} />
          </group>
          <group position={[14.81, 9.45, 19.16]} rotation={[0.65, 0.05, 0.16]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_660.geometry} material={nodes.primitive_color_660.material} />
          </group>
          <group position={[14.77, 9.68, 19.34]} rotation={[-2.4, 0.46, -0.18]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_661.geometry} material={nodes.primitive_color_661.material} />
          </group>
          <group position={[14.44, 8.93, 18.58]} rotation={[-0.6, -0.54, 1.45]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_662.geometry} material={nodes.primitive_color_662.material} />
          </group>
          <group position={[14.19, 8.88, 18.43]} rotation={[0.55, -0.36, -1.14]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_663.geometry} material={nodes.primitive_color_663.material} />
          </group>
          <group position={[14.3, 5.94, 20.95]} rotation={[0.56, -0.22, -0.72]} scale={[0.2, 0.17, 0.2]}>
            <mesh geometry={nodes.primitive_color_664.geometry} material={nodes.primitive_color_664.material} />
          </group>
          <group position={[14.54, 6.14, 21.14]} rotation={[-0.93, -0.87, 1.49]} scale={[0.2, 0.19, 0.2]}>
            <mesh geometry={nodes.primitive_color_665.geometry} material={nodes.primitive_color_665.material} />
          </group>
          <group position={[14.92, 7.18, 21.16]} rotation={[2.78, 0.09, 0.02]} scale={[0.2, 0.39, 0.2]}>
            <mesh geometry={nodes.primitive_color_666.geometry} material={nodes.primitive_color_666.material} />
          </group>
          <group position={[15.39, 6.24, 21.39]} rotation={[-0.08, 0.13, -1.99]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_667.geometry} material={nodes.primitive_color_667.material} />
          </group>
          <group position={[15.66, 6.12, 21.37]} rotation={[0.08, 0.05, 1.14]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_668.geometry} material={nodes.primitive_color_668.material} />
          </group>
          <group position={[14.79, 6.49, 21.96]} rotation={[1.48, 0.2, 0.22]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_669.geometry} material={nodes.primitive_color_669.material} />
          </group>
          <group position={[14.73, 6.5, 22.25]} rotation={[-1.58, 0.22, -0.22]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_670.geometry} material={nodes.primitive_color_670.material} />
          </group>
          <group position={[13.66, 5.44, 20.99]} rotation={[1.02, 0.81, 1.3]} scale={[0.2, 0.17, 0.2]}>
            <mesh geometry={nodes.primitive_color_671.geometry} material={nodes.primitive_color_671.material} />
          </group>
          <group position={[13.41, 5.28, 21.2]} rotation={[-0.66, 0.28, -0.77]} scale={[0.2, 0.19, 0.2]}>
            <mesh geometry={nodes.primitive_color_672.geometry} material={nodes.primitive_color_672.material} />
          </group>
          <group position={[21.3, 11.91, 21.49]} rotation={[1.44, -0.36, -0.41]} scale={[0.2, 0.39, 0.2]}>
            <mesh geometry={nodes.primitive_color_673.geometry} material={nodes.primitive_color_673.material} />
          </group>
          <group position={[20.64, 12.32, 20.78]} rotation={[0, 0, 0.76]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_674.geometry} material={nodes.primitive_color_674.material} />
          </group>
          <group position={[20.44, 12.53, 20.78]} rotation={[0, 0, -2.38]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_675.geometry} material={nodes.primitive_color_675.material} />
          </group>
          <group position={[21.81, 12.37, 22.31]} rotation={[0.22, -0.05, -0.44]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_676.geometry} material={nodes.primitive_color_676.material} />
          </group>
          <group position={[21.93, 12.63, 22.38]} rotation={[-0.34, -0.87, 2.43]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_677.geometry} material={nodes.primitive_color_677.material} />
          </group>
          <group position={[21.96, 11.52, 22.24]} rotation={[0.08, -0.2, -2.35]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_678.geometry} material={nodes.primitive_color_678.material} />
          </group>
          <group position={[22.16, 11.31, 22.26]} rotation={[-0.08, -0.03, 0.77]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_679.geometry} material={nodes.primitive_color_679.material} />
          </group>
          <group position={[21.19, 11.81, 22.55]} rotation={[0.97, 0.62, 1.1]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_680.geometry} material={nodes.primitive_color_680.material} />
          </group>
          <group position={[20.98, 11.76, 22.75]} rotation={[-0.82, 0.42, -0.92]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_681.geometry} material={nodes.primitive_color_681.material} />
          </group>
          <group position={[19.98, 10.6, 19.61]} rotation={[1.42, -0.38, -0.44]} scale={[0.2, 0.17, 0.2]}>
            <mesh geometry={nodes.primitive_color_682.geometry} material={nodes.primitive_color_682.material} />
          </group>
          <group position={[20.12, 10.59, 19.94]} rotation={[-1.38, -0.36, 0.44]} scale={[0.2, 0.19, 0.2]}>
            <mesh geometry={nodes.primitive_color_683.geometry} material={nodes.primitive_color_683.material} />
          </group>
          <group position={[19.96, 10.48, 20.81]} rotation={[0.97, 0.63, 1.11]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_684.geometry} material={nodes.primitive_color_684.material} />
          </group>
          <group position={[19.75, 10.43, 21.01]} rotation={[-0.82, 0.42, -0.92]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_685.geometry} material={nodes.primitive_color_685.material} />
          </group>
          <group position={[20.73, 10.2, 20.5]} rotation={[0.08, -0.19, -2.34]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_686.geometry} material={nodes.primitive_color_686.material} />
          </group>
          <group position={[20.94, 9.99, 20.52]} rotation={[-0.08, -0.03, 0.79]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_687.geometry} material={nodes.primitive_color_687.material} />
          </group>
          <group position={[19.66, 9.82, 18.86]} rotation={[0.36, -0.03, -0.14]} scale={[0.2, 0.19, 0.2]}>
            <mesh geometry={nodes.primitive_color_688.geometry} material={nodes.primitive_color_688.material} />
          </group>
          <group position={[19.71, 10.16, 18.98]} rotation={[-2.65, -0.74, 0.2]} scale={[0.2, 0.17, 0.2]}>
            <mesh geometry={nodes.primitive_color_689.geometry} material={nodes.primitive_color_689.material} />
          </group>
          <group position={[20.19, 9.08, 18.25]} rotation={[-0.73, 0.64, -1.42]} scale={[0.2, 0.39, 0.2]}>
            <mesh geometry={nodes.primitive_color_690.geometry} material={nodes.primitive_color_690.material} />
          </group>
          <group position={[19.5, 8.94, 19.05]} rotation={[2.25, 0.34, 0.17]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_691.geometry} material={nodes.primitive_color_691.material} />
          </group>
          <group position={[19.45, 8.74, 19.27]} rotation={[-0.82, 0.07, -0.16]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_692.geometry} material={nodes.primitive_color_692.material} />
          </group>
          <group position={[20.88, 9.21, 17.43]} rotation={[-0.86, 0.07, -0.15]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_693.geometry} material={nodes.primitive_color_693.material} />
          </group>
          <group position={[20.93, 9.39, 17.21]} rotation={[2.22, 0.32, 0.16]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_694.geometry} material={nodes.primitive_color_694.material} />
          </group>
          <group position={[20.73, 8.37, 17.64]} rotation={[-2.65, -0.68, 0.18]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_695.geometry} material={nodes.primitive_color_695.material} />
          </group>
          <group position={[20.69, 8.1, 17.53]} rotation={[0.38, -0.03, -0.14]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_696.geometry} material={nodes.primitive_color_696.material} />
          </group>
          <group position={[21.24, 8.86, 18.14]} rotation={[0.71, -0.49, -1.2]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_697.geometry} material={nodes.primitive_color_697.material} />
          </group>
          <group position={[21.48, 8.86, 18.31]} rotation={[-0.7, -0.48, 1.18]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_698.geometry} material={nodes.primitive_color_698.material} />
          </group>
          <group position={[15.79, 10.08, 17.47]} rotation={[-0.51, -0.07, 0.27]} scale={[0.2, 0.39, 0.2]}>
            <mesh geometry={nodes.primitive_color_699.geometry} material={nodes.primitive_color_699.material} />
          </group>
          <group position={[16.03, 9.03, 17.49]} rotation={[-2.41, 0.18, -0.07]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_700.geometry} material={nodes.primitive_color_700.material} />
          </group>
          <group position={[16.05, 8.81, 17.29]} rotation={[0.72, 0.03, 0.07]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_701.geometry} material={nodes.primitive_color_701.material} />
          </group>
          <group position={[15.13, 10.64, 16.83]} rotation={[-0.59, -0.51, 1.41]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_702.geometry} material={nodes.primitive_color_702.material} />
          </group>
          <group position={[14.88, 10.6, 16.69]} rotation={[0.55, -0.38, -1.19]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_703.geometry} material={nodes.primitive_color_703.material} />
          </group>
          <group position={[15.97, 10.85, 16.74]} rotation={[-0.81, 0.39, -0.86]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_704.geometry} material={nodes.primitive_color_704.material} />
          </group>
          <group position={[16.17, 10.92, 16.54]} rotation={[1.03, 0.67, 1.11]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_705.geometry} material={nodes.primitive_color_705.material} />
          </group>
          <group position={[15.53, 11.12, 17.44]} rotation={[0.7, 0.04, 0.11]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_706.geometry} material={nodes.primitive_color_706.material} />
          </group>
          <group position={[15.5, 11.35, 17.63]} rotation={[-2.41, 0.29, -0.11]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_707.geometry} material={nodes.primitive_color_707.material} />
          </group>
          <group position={[15.43, 8.31, 21.3]} rotation={[0.58, -0.23, -0.73]} scale={[0.2, 0.39, 0.2]}>
            <mesh geometry={nodes.primitive_color_708.geometry} material={nodes.primitive_color_708.material} />
          </group>
          <group position={[14.43, 8.09, 20.95]} rotation={[0.11, 0.08, 1.18]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_709.geometry} material={nodes.primitive_color_709.material} />
          </group>
          <group position={[14.16, 8.2, 20.99]} rotation={[-0.11, 0.17, -1.93]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_710.geometry} material={nodes.primitive_color_710.material} />
          </group>
          <group position={[15.94, 9.24, 21.54]} rotation={[-0.31, 0, -0.02]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_711.geometry} material={nodes.primitive_color_711.material} />
          </group>
          <group position={[15.95, 9.52, 21.45]} rotation={[2.83, 0.14, 0.02]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_712.geometry} material={nodes.primitive_color_712.material} />
          </group>
          <group position={[16.43, 8.52, 21.66]} rotation={[-0.09, 0.13, -1.95]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_713.geometry} material={nodes.primitive_color_713.material} />
          </group>
          <group position={[16.7, 8.41, 21.64]} rotation={[0.09, 0.06, 1.18]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_714.geometry} material={nodes.primitive_color_714.material} />
          </group>
          <group position={[15.79, 8.73, 22.23]} rotation={[1.5, 0.25, 0.27]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_715.geometry} material={nodes.primitive_color_715.material} />
          </group>
          <group position={[15.72, 8.73, 22.51]} rotation={[-1.5, 0.25, -0.27]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_716.geometry} material={nodes.primitive_color_716.material} />
          </group>
          <group position={[13.36, 4.44, 21.92]} rotation={[1.62, -1.05, -1]} scale={[0.2, 0.4, 0.2]}>
            <mesh geometry={nodes.primitive_color_717.geometry} material={nodes.primitive_color_717.material} />
          </group>
          <group position={[13.89, 3.49, 21.96]} rotation={[-1.91, 0.83, -0.6]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_718.geometry} material={nodes.primitive_color_718.material} />
          </group>
          <group position={[14, 3.3, 21.78]} rotation={[0.7, 0.15, 0.4]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_719.geometry} material={nodes.primitive_color_719.material} />
          </group>
          <group position={[13.32, 3.61, 22.62]} rotation={[0.99, 0.8, 1.33]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_720.geometry} material={nodes.primitive_color_720.material} />
          </group>
          <group position={[13.13, 3.47, 22.79]} rotation={[-0.65, 0.27, -0.78]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_721.geometry} material={nodes.primitive_color_721.material} />
          </group>
          <group position={[14.08, 4.03, 22.63]} rotation={[0.68, -0.34, -0.89]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_722.geometry} material={nodes.primitive_color_722.material} />
          </group>
          <group position={[14.3, 4.12, 22.8]} rotation={[-0.89, -0.71, 1.31]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_723.geometry} material={nodes.primitive_color_723.material} />
          </group>
          <group position={[12.46, 4.76, 21.1]} rotation={[-0.84, -0.7, 1.37]} scale={[0.2, 0.39, 0.2]}>
            <mesh geometry={nodes.primitive_color_724.geometry} material={nodes.primitive_color_724.material} />
          </group>
          <group position={[12.82, 5.37, 21.88]} rotation={[0.7, 0.16, 0.42]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_725.geometry} material={nodes.primitive_color_725.material} />
          </group>
          <group position={[12.7, 5.57, 22.07]} rotation={[-1.85, 0.84, -0.65]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_726.geometry} material={nodes.primitive_color_726.material} />
          </group>
          <group position={[11.23, 4.14, 21.2]} rotation={[-0.66, 0.3, -0.84]} scale={[0.2, 0.17, 0.2]}>
            <mesh geometry={nodes.primitive_color_727.geometry} material={nodes.primitive_color_727.material} />
          </group>
          <group position={[11.48, 4.28, 20.99]} rotation={[0.92, 0.75, 1.34]} scale={[0.2, 0.19, 0.2]}>
            <mesh geometry={nodes.primitive_color_728.geometry} material={nodes.primitive_color_728.material} />
          </group>
          <group position={[11.69, 4.92, 20.39]} rotation={[-0.54, -0.11, 0.38]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_729.geometry} material={nodes.primitive_color_729.material} />
          </group>
          <group position={[11.58, 5.15, 20.24]} rotation={[1.88, -1, -0.76]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_730.geometry} material={nodes.primitive_color_730.material} />
          </group>
          <group position={[12.09, 4.14, 20.32]} rotation={[-1.92, 0.83, -0.6]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_731.geometry} material={nodes.primitive_color_731.material} />
          </group>
          <group position={[12.2, 3.94, 20.14]} rotation={[0.7, 0.14, 0.4]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_732.geometry} material={nodes.primitive_color_732.material} />
          </group>
          <group position={[-20.03, 14.7, 3.86]} rotation={[-0.76, 0.31, -0.74]} scale={[0.2, 0.17, 0.2]}>
            <mesh geometry={nodes.primitive_color_733.geometry} material={nodes.primitive_color_733.material} />
          </group>
          <group position={[-19.79, 14.84, 3.62]} rotation={[1.16, 0.77, 1.11]} scale={[0.2, 0.19, 0.2]}>
            <mesh geometry={nodes.primitive_color_734.geometry} material={nodes.primitive_color_734.material} />
          </group>
          <group position={[-20.85, 12.13, 5.73]} rotation={[2.44, -1.23, -0.51]} scale={[0.2, 0.19, 0.2]}>
            <mesh geometry={nodes.primitive_color_735.geometry} material={nodes.primitive_color_735.material} />
          </group>
          <group position={[-20.79, 11.78, 5.81]} rotation={[-0.22, -0.02, 0.16]} scale={[0.2, 0.17, 0.2]}>
            <mesh geometry={nodes.primitive_color_736.geometry} material={nodes.primitive_color_736.material} />
          </group>
          <group position={[-20.46, 12.93, 5.08]} rotation={[-0.83, 0.34, -0.73]} scale={[0.2, 0.39, 0.2]}>
            <mesh geometry={nodes.primitive_color_737.geometry} material={nodes.primitive_color_737.material} />
          </group>
          <group position={[-21.44, 12.71, 5.42]} rotation={[-0.4, -0.32, 1.37]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_738.geometry} material={nodes.primitive_color_738.material} />
          </group>
          <group position={[-21.71, 12.73, 5.31]} rotation={[0.4, -0.37, -1.49]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_739.geometry} material={nodes.primitive_color_739.material} />
          </group>
          <group position={[-20.93, 12.98, 6.06]} rotation={[0.96, -0.01, -0.02]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_740.geometry} material={nodes.primitive_color_740.material} />
          </group>
          <group position={[-20.93, 13.15, 6.3]} rotation={[-2.18, -0.03, 0.02]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_741.geometry} material={nodes.primitive_color_741.material} />
          </group>
          <group position={[-19.38, 15.59, 3.36]} rotation={[0.21, -0.01, -0.08]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_742.geometry} material={nodes.primitive_color_742.material} />
          </group>
          <group position={[-19.36, 15.88, 3.42]} rotation={[-2.85, -0.77, 0.12]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_743.geometry} material={nodes.primitive_color_743.material} />
          </group>
          <group position={[-18.93, 14.87, 3.3]} rotation={[0.08, -0.11, -1.94]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_744.geometry} material={nodes.primitive_color_744.material} />
          </group>
          <group position={[-18.66, 14.76, 3.32]} rotation={[-0.08, -0.05, 1.18]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_745.geometry} material={nodes.primitive_color_745.material} />
          </group>
          <group position={[-20.12, 13.71, 4.4]} rotation={[-0.26, -0.03, 0.27]} scale={[0.2, 0.19, 0.2]}>
            <mesh geometry={nodes.primitive_color_746.geometry} material={nodes.primitive_color_746.material} />
          </group>
          <group position={[-20.21, 14.05, 4.31]} rotation={[1.32, -1.31, -1.55]} scale={[0.2, 0.17, 0.2]}>
            <mesh geometry={nodes.primitive_color_747.geometry} material={nodes.primitive_color_747.material} />
          </group>
          <group position={[-19.47, 13.18, 4.74]} rotation={[0.41, -0.36, -1.44]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_748.geometry} material={nodes.primitive_color_748.material} />
          </group>
          <group position={[-19.2, 13.17, 4.85]} rotation={[-0.4, -0.34, 1.41]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_749.geometry} material={nodes.primitive_color_749.material} />
          </group>
          <group position={[-20.01, 12.86, 4.12]} rotation={[-2.23, -0.14, 0.07]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_750.geometry} material={nodes.primitive_color_750.material} />
          </group>
          <group position={[-20.03, 12.68, 3.9]} rotation={[0.9, -0.03, -0.07]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_751.geometry} material={nodes.primitive_color_751.material} />
          </group>
          <group position={[-20.03, 11.2, 6.42]} rotation={[-0.71, -0.43, 1.07]} scale={[0.2, 0.19, 0.2]}>
            <mesh geometry={nodes.primitive_color_752.geometry} material={nodes.primitive_color_752.material} />
          </group>
          <group position={[-20.32, 11.24, 6.21]} rotation={[0.78, -0.57, -1.24]} scale={[0.2, 0.17, 0.2]}>
            <mesh geometry={nodes.primitive_color_753.geometry} material={nodes.primitive_color_753.material} />
          </group>
          <group position={[-19.74, 10.95, 7.24]} rotation={[1.79, 0.4, 0.33]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_754.geometry} material={nodes.primitive_color_754.material} />
          </group>
          <group position={[-19.83, 10.85, 7.5]} rotation={[-1.16, 0.2, -0.3]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_755.geometry} material={nodes.primitive_color_755.material} />
          </group>
          <group position={[-19.31, 11.58, 6.84]} rotation={[0.16, -0.04, -0.54]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_756.geometry} material={nodes.primitive_color_756.material} />
          </group>
          <group position={[-19.16, 11.83, 6.89]} rotation={[-0.19, -0.55, 2.49]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_757.geometry} material={nodes.primitive_color_757.material} />
          </group>
          <group position={[-19.69, 14.99, 2.54]} rotation={[1.36, -0.29, -0.36]} scale={[0.2, 0.39, 0.2]}>
            <mesh geometry={nodes.primitive_color_758.geometry} material={nodes.primitive_color_758.material} />
          </group>
          <group position={[-20.43, 15.15, 1.79]} rotation={[-0.06, -0.04, 1.12]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_759.geometry} material={nodes.primitive_color_759.material} />
          </group>
          <group position={[-20.69, 15.27, 1.77]} rotation={[0.06, -0.09, -2.01]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_760.geometry} material={nodes.primitive_color_760.material} />
          </group>
          <group position={[-19.59, 15.16, 1.49]} rotation={[-0.69, 0.28, -0.74]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_761.geometry} material={nodes.primitive_color_761.material} />
          </group>
          <group position={[-19.4, 15.29, 1.31]} rotation={[1.1, 0.81, 1.23]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_762.geometry} material={nodes.primitive_color_762.material} />
          </group>
          <group position={[-19.1, 10.62, 6.44]} rotation={[0.43, 0.16, 0.7]} scale={[0.2, 0.39, 0.2]}>
            <mesh geometry={nodes.primitive_color_763.geometry} material={nodes.primitive_color_763.material} />
          </group>
          <group position={[-18.45, 10.28, 5.63]} rotation={[-1.2, 0.21, -0.31]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_764.geometry} material={nodes.primitive_color_764.material} />
          </group>
          <group position={[-18.36, 10.36, 5.36]} rotation={[1.75, 0.39, 0.33]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_765.geometry} material={nodes.primitive_color_765.material} />
          </group>
          <group position={[-18.16, 10.13, 6.42]} rotation={[0.68, -0.47, -1.19]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_766.geometry} material={nodes.primitive_color_766.material} />
          </group>
          <group position={[-17.92, 10.14, 6.58]} rotation={[-0.69, -0.49, 1.22]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_767.geometry} material={nodes.primitive_color_767.material} />
          </group>
          <group position={[-19.99, 14.02, 1.62]} rotation={[0.21, -0.01, -0.06]} scale={[0.2, 0.17, 0.2]}>
            <mesh geometry={nodes.primitive_color_768.geometry} material={nodes.primitive_color_768.material} />
          </group>
          <group position={[-19.97, 14.37, 1.7]} rotation={[-2.89, -0.52, 0.07]} scale={[0.2, 0.19, 0.2]}>
            <mesh geometry={nodes.primitive_color_769.geometry} material={nodes.primitive_color_769.material} />
          </group>
          <group position={[-18.9, 9.24, 6.13]} rotation={[-0.02, 0, -0.31]} scale={[0.2, 0.17, 0.2]}>
            <mesh geometry={nodes.primitive_color_770.geometry} material={nodes.primitive_color_770.material} />
          </group>
          <group position={[-18.78, 9.58, 6.13]} rotation={[0.02, 0.11, 2.83]} scale={[0.2, 0.19, 0.2]}>
            <mesh geometry={nodes.primitive_color_771.geometry} material={nodes.primitive_color_771.material} />
          </group>
          <group position={[-19.44, 8.67, 5.87]} rotation={[-0.73, -0.59, 1.35]} scale={[0.2, 0.17, 0.2]}>
            <mesh geometry={nodes.primitive_color_772.geometry} material={nodes.primitive_color_772.material} />
          </group>
          <group position={[-19.74, 8.6, 5.67]} rotation={[0.64, -0.38, -1.06]} scale={[0.2, 0.19, 0.2]}>
            <mesh geometry={nodes.primitive_color_773.geometry} material={nodes.primitive_color_773.material} />
          </group>
          <group position={[-20.3, 13.42, 0.73]} rotation={[1.32, -0.27, -0.35]} scale={[0.2, 0.19, 0.2]}>
            <mesh geometry={nodes.primitive_color_774.geometry} material={nodes.primitive_color_774.material} />
          </group>
          <group position={[-20.18, 13.47, 1.07]} rotation={[-1.59, -0.37, 0.36]} scale={[0.2, 0.17, 0.2]}>
            <mesh geometry={nodes.primitive_color_775.geometry} material={nodes.primitive_color_775.material} />
          </group>
          <group position={[-20.1, 13.48, -0.14]} rotation={[-0.76, 0.37, -0.88]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_776.geometry} material={nodes.primitive_color_776.material} />
          </group>
          <group position={[-19.89, 13.55, -0.33]} rotation={[0.97, 0.68, 1.18]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_777.geometry} material={nodes.primitive_color_777.material} />
          </group>
          <group position={[-20.94, 13.61, 0.11]} rotation={[-0.19, -0.1, 1.01]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_778.geometry} material={nodes.primitive_color_778.material} />
          </group>
          <group position={[-21.18, 13.76, 0.05]} rotation={[0.2, -0.32, -2.05]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_779.geometry} material={nodes.primitive_color_779.material} />
          </group>
          <group position={[-12.66, 5.17, 15.22]} rotation={[0.18, -0.07, -0.71]} scale={[0.2, 0.4, 0.2]}>
            <mesh geometry={nodes.primitive_color_780.geometry} material={nodes.primitive_color_780.material} />
          </group>
          <group position={[-13.57, 4.39, 15.69]} rotation={[1.44, 0.63, 0.71]} scale={[0.2, 0.39, 0.2]}>
            <mesh geometry={nodes.primitive_color_781.geometry} material={nodes.primitive_color_781.material} />
          </group>
          <group position={[-12.89, 4.17, 14.93]} rotation={[-0.45, 0.87, -2.23]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_782.geometry} material={nodes.primitive_color_782.material} />
          </group>
          <group position={[-12.74, 3.93, 14.84]} rotation={[0.29, 0.08, 0.54]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_783.geometry} material={nodes.primitive_color_783.material} />
          </group>
          <group position={[-14.27, 4.59, 16.48]} rotation={[0.34, 0.11, 0.59]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_784.geometry} material={nodes.primitive_color_784.material} />
          </group>
          <group position={[-14.44, 4.81, 16.58]} rotation={[-0.56, 0.89, -2.06]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_785.geometry} material={nodes.primitive_color_785.material} />
          </group>
          <group position={[-13.65, 4, 16.69]} rotation={[1.31, -0.71, -0.91]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_786.geometry} material={nodes.primitive_color_786.material} />
          </group>
          <group position={[-13.48, 3.9, 16.9]} rotation={[-0.88, -0.33, 0.68]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_787.geometry} material={nodes.primitive_color_787.material} />
          </group>
          <group position={[-14.31, 3.78, 16.16]} rotation={[-0.33, -0.66, 2.24]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_788.geometry} material={nodes.primitive_color_788.material} />
          </group>
          <group position={[-14.49, 3.56, 16.09]} rotation={[0.26, -0.09, -0.67]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_789.geometry} material={nodes.primitive_color_789.material} />
          </group>
          <group position={[-20.13, 8.67, 4.62]} rotation={[-1.32, 0.06, -0.08]} scale={[0.2, 0.39, 0.2]}>
            <mesh geometry={nodes.primitive_color_790.geometry} material={nodes.primitive_color_790.material} />
          </group>
          <group position={[-20.64, 8.69, 5.58]} rotation={[0.44, 0.25, 1.03]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_791.geometry} material={nodes.primitive_color_791.material} />
          </group>
          <group position={[-20.88, 8.8, 5.7]} rotation={[-0.52, 0.58, -1.69]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_792.geometry} material={nodes.primitive_color_792.material} />
          </group>
          <group position={[-20.25, 7.95, 5.38]} rotation={[0.04, 0.63, 3.01]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_793.geometry} material={nodes.primitive_color_793.material} />
          </group>
          <group position={[-20.28, 7.66, 5.39]} rotation={[-0.04, 0, -0.11]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_794.geometry} material={nodes.primitive_color_794.material} />
          </group>
          <group position={[-21, 11.69, -0.42]} rotation={[-1.66, -0.47, 0.43]} scale={[0.2, 0.19, 0.2]}>
            <mesh geometry={nodes.primitive_color_795.geometry} material={nodes.primitive_color_795.material} />
          </group>
          <group position={[-21.14, 11.59, -0.74]} rotation={[1.17, -0.26, -0.39]} scale={[0.2, 0.17, 0.2]}>
            <mesh geometry={nodes.primitive_color_796.geometry} material={nodes.primitive_color_796.material} />
          </group>
          <group position={[-20.64, 12.59, 0.15]} rotation={[0.08, -0.01, -0.2]} scale={[0.2, 0.39, 0.2]}>
            <mesh geometry={nodes.primitive_color_797.geometry} material={nodes.primitive_color_797.material} />
          </group>
          <group position={[-20.36, 11.56, 0.22]} rotation={[0.3, -0.47, -2.02]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_798.geometry} material={nodes.primitive_color_798.material} />
          </group>
          <group position={[-20.13, 11.4, 0.3]} rotation={[-0.27, -0.14, 0.95]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_799.geometry} material={nodes.primitive_color_799.material} />
          </group>
          <group position={[-21.17, 11.72, 0.45]} rotation={[1.05, 0.66, 1.07]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_800.geometry} material={nodes.primitive_color_800.material} />
          </group>
          <group position={[-21.37, 11.66, 0.65]} rotation={[-0.84, 0.4, -0.85]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_801.geometry} material={nodes.primitive_color_801.material} />
          </group>
          <group position={[-11.7, 5.58, 15.64]} rotation={[0.66, -0.62, -1.5]} scale={[0.2, 0.19, 0.2]}>
            <mesh geometry={nodes.primitive_color_802.geometry} material={nodes.primitive_color_802.material} />
          </group>
          <group position={[-11.4, 5.47, 15.82]} rotation={[-0.55, -0.32, 1.03]} scale={[0.2, 0.17, 0.2]}>
            <mesh geometry={nodes.primitive_color_803.geometry} material={nodes.primitive_color_803.material} />
          </group>
          <group position={[-11.97, 5.9, 14.88]} rotation={[-1.17, 0.24, -0.36]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_804.geometry} material={nodes.primitive_color_804.material} />
          </group>
          <group position={[-11.87, 5.98, 14.61]} rotation={[1.71, 0.45, 0.39]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_805.geometry} material={nodes.primitive_color_805.material} />
          </group>
          <group position={[-12.39, 6.19, 15.54]} rotation={[0.36, 0.08, 0.45]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_806.geometry} material={nodes.primitive_color_806.material} />
          </group>
          <group position={[-12.52, 6.43, 15.64]} rotation={[-0.89, 1.1, -1.83]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_807.geometry} material={nodes.primitive_color_807.material} />
          </group>
          <group position={[-17.27, 11.07, 0.68]} rotation={[0.88, 0.36, 0.73]} scale={[0.2, 0.15, 0.2]}>
            <mesh geometry={nodes.primitive_color_808.geometry} material={nodes.primitive_color_808.material} />
          </group>
          <group position={[-17.43, 11.14, 0.87]} rotation={[-1.22, 0.7, -0.96]} scale={[0.2, 0.12, 0.2]}>
            <mesh geometry={nodes.primitive_color_809.geometry} material={nodes.primitive_color_809.material} />
          </group>
          <group position={[-13.93, 4.72, 13.33]} rotation={[1.13, 0.12, 0.19]} scale={[0.2, 0.19, 0.2]}>
            <mesh geometry={nodes.primitive_color_810.geometry} material={nodes.primitive_color_810.material} />
          </group>
          <group position={[-14, 4.86, 13.65]} rotation={[-1.93, 0.28, -0.2]} scale={[0.2, 0.17, 0.2]}>
            <mesh geometry={nodes.primitive_color_811.geometry} material={nodes.primitive_color_811.material} />
          </group>
          <group position={[-13.32, 4.33, 12.77]} rotation={[-0.09, 0.13, -1.87]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_812.geometry} material={nodes.primitive_color_812.material} />
          </group>
          <group position={[-13.04, 4.24, 12.74]} rotation={[0.09, 0.07, 1.25]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_813.geometry} material={nodes.primitive_color_813.material} />
          </group>
          <group position={[-14.15, 4.08, 12.74]} rotation={[-0.16, -0.42, 2.41]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_814.geometry} material={nodes.primitive_color_814.material} />
          </group>
          <group position={[-14.33, 3.85, 12.7]} rotation={[0.15, -0.05, -0.66]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_815.geometry} material={nodes.primitive_color_815.material} />
          </group>
          <group position={[-13.98, 5.34, 11.21]} rotation={[-1.92, 0.2, -0.14]} scale={[0.2, 0.19, 0.2]}>
            <mesh geometry={nodes.primitive_color_816.geometry} material={nodes.primitive_color_816.material} />
          </group>
          <group position={[-13.93, 5.21, 10.88]} rotation={[1.18, 0.09, 0.14]} scale={[0.2, 0.17, 0.2]}>
            <mesh geometry={nodes.primitive_color_817.geometry} material={nodes.primitive_color_817.material} />
          </group>
          <group position={[-13.94, 5.02, 12.28]} rotation={[2.28, -0.35, -0.16]} scale={[0.2, 0.39, 0.2]}>
            <mesh geometry={nodes.primitive_color_818.geometry} material={nodes.primitive_color_818.material} />
          </group>
          <group position={[-14.57, 5.72, 11.77]} rotation={[0.06, 0.05, 1.25]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_819.geometry} material={nodes.primitive_color_819.material} />
          </group>
          <group position={[-14.85, 5.81, 11.78]} rotation={[-0.06, 0.09, -1.88]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_820.geometry} material={nodes.primitive_color_820.material} />
          </group>
          <group position={[-13.75, 5.99, 11.81]} rotation={[0.15, -0.05, -0.61]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_821.geometry} material={nodes.primitive_color_821.material} />
          </group>
          <group position={[-13.59, 6.22, 11.86]} rotation={[-0.17, -0.46, 2.45]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_822.geometry} material={nodes.primitive_color_822.material} />
          </group>
          <group position={[-8.93, 5.27, 17.65]} rotation={[0.33, 0.15, 0.82]} scale={[0.2, 0.17, 0.2]}>
            <mesh geometry={nodes.primitive_color_823.geometry} material={nodes.primitive_color_823.material} />
          </group>
          <group position={[-9.2, 5.5, 17.77]} rotation={[-0.42, 0.64, -2.01]} scale={[0.2, 0.19, 0.2]}>
            <mesh geometry={nodes.primitive_color_824.geometry} material={nodes.primitive_color_824.material} />
          </group>
          <group position={[-16.28, 10.24, 0.53]} rotation={[-0.29, -0.11, 0.72]} scale={[0.2, 0.15, 0.2]}>
            <mesh geometry={nodes.primitive_color_825.geometry} material={nodes.primitive_color_825.material} />
          </group>
          <group position={[-16.51, 10.47, 0.44]} rotation={[0.37, -0.67, -2.15]} scale={[0.2, 0.18, 0.2]}>
            <mesh geometry={nodes.primitive_color_826.geometry} material={nodes.primitive_color_826.material} />
          </group>
          <group position={[-16.18, 9.47, 0.72]} rotation={[0.14, 0.51, 2.63]} scale={[0.2, 0.17, 0.2]}>
            <mesh geometry={nodes.primitive_color_827.geometry} material={nodes.primitive_color_827.material} />
          </group>
          <group position={[-16.34, 9.15, 0.77]} rotation={[-0.12, 0.03, -0.44]} scale={[0.2, 0.19, 0.2]}>
            <mesh geometry={nodes.primitive_color_828.geometry} material={nodes.primitive_color_828.material} />
          </group>
          <group position={[-18.97, 9.98, -1.45]} rotation={[-1.09, -0.43, 0.69]} scale={[0.2, 0.17, 0.2]}>
            <mesh geometry={nodes.primitive_color_829.geometry} material={nodes.primitive_color_829.material} />
          </group>
          <group position={[-19.18, 10.02, -1.74]} rotation={[1.26, -0.56, -0.76]} scale={[0.2, 0.19, 0.2]}>
            <mesh geometry={nodes.primitive_color_830.geometry} material={nodes.primitive_color_830.material} />
          </group>
          <group position={[-18.28, 10.2, -1.08]} rotation={[-0.06, 0.03, -0.97]} scale={[0.2, 0.17, 0.2]}>
            <mesh geometry={nodes.primitive_color_831.geometry} material={nodes.primitive_color_831.material} />
          </group>
          <group position={[-17.98, 10.4, -1.1]} rotation={[0.06, 0.11, 2.17]} scale={[0.2, 0.19, 0.2]}>
            <mesh geometry={nodes.primitive_color_832.geometry} material={nodes.primitive_color_832.material} />
          </group>
          <group position={[-10.31, 5.62, 17.72]} rotation={[-0.33, -0.39, 1.75]} scale={[0.2, 0.39, 0.2]}>
            <mesh geometry={nodes.primitive_color_833.geometry} material={nodes.primitive_color_833.material} />
          </group>
          <group position={[-9.61, 5.85, 18.49]} rotation={[1.55, 0, 0]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_834.geometry} material={nodes.primitive_color_834.material} />
          </group>
          <group position={[-9.61, 5.85, 18.78]} rotation={[-1.59, 0, 0]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_835.geometry} material={nodes.primitive_color_835.material} />
          </group>
          <group position={[-9.53, 6.34, 17.76]} rotation={[-0.36, 0.03, -0.15]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_836.geometry} material={nodes.primitive_color_836.material} />
          </group>
          <group position={[-9.48, 6.61, 17.65]} rotation={[2.63, 0.76, 0.21]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_837.geometry} material={nodes.primitive_color_837.material} />
          </group>
          <group position={[-20.73, 11.42, -1.79]} rotation={[0.96, 0.5, 0.91]} scale={[0.2, 0.19, 0.2]}>
            <mesh geometry={nodes.primitive_color_838.geometry} material={nodes.primitive_color_838.material} />
          </group>
          <group position={[-20.98, 11.44, -1.53]} rotation={[-1, 0.55, -0.95]} scale={[0.2, 0.17, 0.2]}>
            <mesh geometry={nodes.primitive_color_839.geometry} material={nodes.primitive_color_839.material} />
          </group>
          <group position={[-20.03, 11.84, -2.22]} rotation={[-0.04, 0.01, -0.6]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_840.geometry} material={nodes.primitive_color_840.material} />
          </group>
          <group position={[-19.87, 12.08, -2.23]} rotation={[0.04, 0.14, 2.54]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_841.geometry} material={nodes.primitive_color_841.material} />
          </group>
          <group position={[-20.6, 11.4, -2.66]} rotation={[-1.28, -0.44, 0.59]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_842.geometry} material={nodes.primitive_color_842.material} />
          </group>
          <group position={[-20.75, 11.41, -2.91]} rotation={[1.3, -0.46, -0.59]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_843.geometry} material={nodes.primitive_color_843.material} />
          </group>
          <group position={[-13.77, 4.9, 14.43]} rotation={[1.16, -0.72, -1.04]} scale={[0.2, 0.17, 0.2]}>
            <mesh geometry={nodes.primitive_color_844.geometry} material={nodes.primitive_color_844.material} />
          </group>
          <group position={[-13.53, 4.79, 14.69]} rotation={[-0.83, -0.35, 0.76]} scale={[0.2, 0.19, 0.2]}>
            <mesh geometry={nodes.primitive_color_845.geometry} material={nodes.primitive_color_845.material} />
          </group>
          <group position={[-11.01, 5.37, 16.92]} rotation={[-1.63, 0.01, -0.01]} scale={[0.2, 0.19, 0.2]}>
            <mesh geometry={nodes.primitive_color_846.geometry} material={nodes.primitive_color_846.material} />
          </group>
          <group position={[-11, 5.35, 16.56]} rotation={[1.52, 0.01, 0.01]} scale={[0.2, 0.18, 0.2]}>
            <mesh geometry={nodes.primitive_color_847.geometry} material={nodes.primitive_color_847.material} />
          </group>
          <group position={[-11.51, 5.89, 17.81]} rotation={[0.44, 0.17, 0.72]} scale={[0.2, 0.4, 0.2]}>
            <mesh geometry={nodes.primitive_color_848.geometry} material={nodes.primitive_color_848.material} />
          </group>
          <group position={[-11.1, 4.91, 17.68]} rotation={[2.56, 0.85, 0.27]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_849.geometry} material={nodes.primitive_color_849.material} />
          </group>
          <group position={[-11.15, 4.64, 17.79]} rotation={[-0.37, 0.03, -0.18]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_850.geometry} material={nodes.primitive_color_850.material} />
          </group>
          <group position={[-19.61, 8.65, 3.7]} rotation={[-0.38, 0.48, -1.8]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_851.geometry} material={nodes.primitive_color_851.material} />
          </group>
          <group position={[-19.36, 8.54, 3.6]} rotation={[0.34, 0.21, 1.08]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_852.geometry} material={nodes.primitive_color_852.material} />
          </group>
          <group position={[-20.07, 9.39, 3.82]} rotation={[-0.1, 0, -0.01]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_853.geometry} material={nodes.primitive_color_853.material} />
          </group>
          <group position={[-20.07, 9.68, 3.79]} rotation={[3.04, 0.14, 0.01]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_854.geometry} material={nodes.primitive_color_854.material} />
          </group>
          <group position={[-19.92, 10.75, -2.19]} rotation={[0, 0, 0.57]} scale={[0.2, 0.4, 0.2]}>
            <mesh geometry={nodes.primitive_color_855.geometry} material={nodes.primitive_color_855.material} />
          </group>
          <group position={[-19.21, 10.06, -2.64]} rotation={[-1.27, 0.51, -0.67]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_856.geometry} material={nodes.primitive_color_856.material} />
          </group>
          <group position={[-19.05, 10.04, -2.89]} rotation={[1.19, 0.44, 0.65]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_857.geometry} material={nodes.primitive_color_857.material} />
          </group>
          <group position={[-19.85, 9.68, -2.21]} rotation={[-0.04, -0.1, 2.44]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_858.geometry} material={nodes.primitive_color_858.material} />
          </group>
          <group position={[-20.04, 9.46, -2.22]} rotation={[0.04, -0.01, -0.7]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_859.geometry} material={nodes.primitive_color_859.material} />
          </group>
          <group position={[-17.22, 10.81, -0.46]} rotation={[1.3, -0.33, -0.44]} scale={[0.2, 0.37, 0.2]}>
            <mesh geometry={nodes.primitive_color_860.geometry} material={nodes.primitive_color_860.material} />
          </group>
          <group position={[-17.63, 11.22, -1.29]} rotation={[-0.3, -0.03, 0.22]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_861.geometry} material={nodes.primitive_color_861.material} />
          </group>
          <group position={[-17.7, 11.49, -1.38]} rotation={[2.29, -1.16, -0.58]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_862.geometry} material={nodes.primitive_color_862.material} />
          </group>
          <group position={[-17.15, 10.51, -1.47]} rotation={[-1.06, 0.77, -1.21]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_863.geometry} material={nodes.primitive_color_863.material} />
          </group>
          <group position={[-16.96, 10.39, -1.65]} rotation={[0.72, 0.31, 0.78]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_864.geometry} material={nodes.primitive_color_864.material} />
          </group>
          <group position={[-5.95, 4.47, 16.78]} rotation={[0.18, 0.03, 0.29]} scale={[0.2, 0.18, 0.2]}>
            <mesh geometry={nodes.primitive_color_865.geometry} material={nodes.primitive_color_865.material} />
          </group>
          <group position={[-6.06, 4.82, 16.84]} rotation={[-0.41, 1.1, -2.48]} scale={[0.2, 0.19, 0.2]}>
            <mesh geometry={nodes.primitive_color_866.geometry} material={nodes.primitive_color_866.material} />
          </group>
          <group position={[-11.93, 6.89, 17.97]} rotation={[-0.31, 0.03, -0.17]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_867.geometry} material={nodes.primitive_color_867.material} />
          </group>
          <group position={[-11.88, 7.16, 17.88]} rotation={[2.58, 0.95, 0.29]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_868.geometry} material={nodes.primitive_color_868.material} />
          </group>
          <group position={[-11.97, 6.37, 18.67]} rotation={[1.59, -0.09, -0.09]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_869.geometry} material={nodes.primitive_color_869.material} />
          </group>
          <group position={[-11.94, 6.36, 18.96]} rotation={[-1.54, -0.09, 0.09]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_870.geometry} material={nodes.primitive_color_870.material} />
          </group>
          <group position={[-12.53, 6.25, 18.03]} rotation={[-0.2, -0.24, 1.77]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_871.geometry} material={nodes.primitive_color_871.material} />
          </group>
          <group position={[-12.8, 6.18, 17.98]} rotation={[0.2, -0.15, -1.29]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_872.geometry} material={nodes.primitive_color_872.material} />
          </group>
          <group position={[-15.84, 7.26, 1.73]} rotation={[0, -0.02, 2.85]} scale={[0.2, 0.19, 0.2]}>
            <mesh geometry={nodes.primitive_color_873.geometry} material={nodes.primitive_color_873.material} />
          </group>
          <group position={[-15.94, 6.91, 1.72]} rotation={[0, 0, -0.3]} scale={[0.2, 0.17, 0.2]}>
            <mesh geometry={nodes.primitive_color_874.geometry} material={nodes.primitive_color_874.material} />
          </group>
          <group position={[-15.64, 8.01, 2.22]} rotation={[1.16, -0.05, -0.07]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_875.geometry} material={nodes.primitive_color_875.material} />
          </group>
          <group position={[-15.62, 8.12, 2.49]} rotation={[-1.97, -0.11, 0.07]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_876.geometry} material={nodes.primitive_color_876.material} />
          </group>
          <group position={[-15.18, 7.8, 1.52]} rotation={[-0.41, 0.35, -1.4]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_877.geometry} material={nodes.primitive_color_877.material} />
          </group>
          <group position={[-14.91, 7.81, 1.41]} rotation={[0.42, 0.36, 1.43]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_878.geometry} material={nodes.primitive_color_878.material} />
          </group>
          <group position={[-5.81, 5.65, 17.14]} rotation={[0.37, -0.17, -0.86]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_879.geometry} material={nodes.primitive_color_879.material} />
          </group>
          <group position={[-5.6, 5.82, 17.24]} rotation={[-0.46, -0.65, 1.92]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_880.geometry} material={nodes.primitive_color_880.material} />
          </group>
          <group position={[-6.38, 5.59, 16.49]} rotation={[-1.03, -0.18, 0.32]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_881.geometry} material={nodes.primitive_color_881.material} />
          </group>
          <group position={[-6.47, 5.71, 16.25]} rotation={[1.88, -0.49, -0.36]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_882.geometry} material={nodes.primitive_color_882.material} />
          </group>
          <group position={[-13.04, 4.85, 10.27]} rotation={[0.19, 0.15, 1.33]} scale={[0.2, 0.19, 0.2]}>
            <mesh geometry={nodes.primitive_color_883.geometry} material={nodes.primitive_color_883.material} />
          </group>
          <group position={[-13.39, 4.93, 10.34]} rotation={[-0.19, 0.23, -1.74]} scale={[0.2, 0.17, 0.2]}>
            <mesh geometry={nodes.primitive_color_884.geometry} material={nodes.primitive_color_884.material} />
          </group>
          <group position={[-12.17, 4.91, 10.54]} rotation={[0.84, -0.34, -0.72]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_885.geometry} material={nodes.primitive_color_885.material} />
          </group>
          <group position={[-11.98, 5.01, 10.75]} rotation={[-1.23, -0.72, 0.98]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_886.geometry} material={nodes.primitive_color_886.material} />
          </group>
          <group position={[-12.35, 4.98, 9.71]} rotation={[-1.02, 0.16, -0.29]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_887.geometry} material={nodes.primitive_color_887.material} />
          </group>
          <group position={[-12.27, 5.12, 9.47]} rotation={[1.93, 0.45, 0.32]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_888.geometry} material={nodes.primitive_color_888.material} />
          </group>
          <group position={[-16.13, 8.22, 1.28]} rotation={[1.19, -0.89, -1.23]} scale={[0.2, 0.39, 0.2]}>
            <mesh geometry={nodes.primitive_color_889.geometry} material={nodes.primitive_color_889.material} />
          </group>
          <group position={[-16.62, 8.42, 0.35]} rotation={[-2.02, -0.11, 0.07]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_890.geometry} material={nodes.primitive_color_890.material} />
          </group>
          <group position={[-16.64, 8.29, 0.09]} rotation={[1.11, -0.04, -0.07]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_891.geometry} material={nodes.primitive_color_891.material} />
          </group>
          <group position={[-17.07, 8.68, 1.06]} rotation={[0.48, 0.37, 1.32]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_892.geometry} material={nodes.primitive_color_892.material} />
          </group>
          <group position={[-17.33, 8.7, 1.19]} rotation={[-0.49, 0.42, -1.43]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_893.geometry} material={nodes.primitive_color_893.material} />
          </group>
          <group position={[2.4, 3.23, 19.29]} rotation={[-1.02, 0.41, -0.71]} scale={[0.2, 0.39, 0.2]}>
            <mesh geometry={nodes.primitive_color_894.geometry} material={nodes.primitive_color_894.material} />
          </group>
          <group position={[-6.77, 5.39, 17.48]} rotation={[-0.95, 0.55, -1.01]} scale={[0.2, 0.39, 0.2]}>
            <mesh geometry={nodes.primitive_color_895.geometry} material={nodes.primitive_color_895.material} />
          </group>
          <group position={[-7.82, 5.24, 17.8]} rotation={[-0.43, -0.49, 1.7]} scale={[0.2, 0.19, 0.2]}>
            <mesh geometry={nodes.primitive_color_896.geometry} material={nodes.primitive_color_896.material} />
          </group>
          <group position={[-8.14, 5.13, 17.67]} rotation={[0.39, -0.25, -1.13]} scale={[0.2, 0.18, 0.2]}>
            <mesh geometry={nodes.primitive_color_897.geometry} material={nodes.primitive_color_897.material} />
          </group>
          <group position={[-7.14, 5.02, 18.64]} rotation={[2.03, -0.43, -0.27]} scale={[0.2, 0.39, 0.2]}>
            <mesh geometry={nodes.primitive_color_898.geometry} material={nodes.primitive_color_898.material} />
          </group>
          <group position={[-7.34, 5.94, 18.15]} rotation={[0.26, 0, 0.03]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_899.geometry} material={nodes.primitive_color_899.material} />
          </group>
          <group position={[-7.35, 6.23, 18.23]} rotation={[-2.88, 0.23, -0.03]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_900.geometry} material={nodes.primitive_color_900.material} />
          </group>
          <group position={[-4, 3.92, 17.15]} rotation={[-1.33, -0.49, 0.62]} scale={[0.2, 0.4, 0.2]}>
            <mesh geometry={nodes.primitive_color_901.geometry} material={nodes.primitive_color_901.material} />
          </group>
          <group position={[-3.7, 4.45, 18.04]} rotation={[0.43, 0.04, 0.17]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_902.geometry} material={nodes.primitive_color_902.material} />
          </group>
          <group position={[-3.75, 4.71, 18.16]} rotation={[-2.55, 0.74, -0.24]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_903.geometry} material={nodes.primitive_color_903.material} />
          </group>
          <group position={[-3.78, 3.59, 18.15]} rotation={[2.06, 0.78, 0.49]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_904.geometry} material={nodes.primitive_color_904.material} />
          </group>
          <group position={[-3.88, 3.39, 18.33]} rotation={[-0.68, 0.12, -0.34]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_905.geometry} material={nodes.primitive_color_905.material} />
          </group>
          <group position={[-3.88, 5.29, 15.5]} rotation={[0.24, 0.01, 0.05]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_906.geometry} material={nodes.primitive_color_906.material} />
          </group>
          <group position={[-3.9, 5.58, 15.57]} rotation={[-2.88, 0.41, -0.06]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_907.geometry} material={nodes.primitive_color_907.material} />
          </group>
          <group position={[-3.34, 4.66, 15.27]} rotation={[-0.19, 0.23, -1.75]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_908.geometry} material={nodes.primitive_color_908.material} />
          </group>
          <group position={[-3.06, 4.59, 15.22]} rotation={[0.19, 0.15, 1.32]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_909.geometry} material={nodes.primitive_color_909.material} />
          </group>
          <group position={[-4.13, 4.69, 14.92]} rotation={[-1.38, -0.54, 0.65]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_910.geometry} material={nodes.primitive_color_910.material} />
          </group>
          <group position={[-4.29, 4.65, 14.67]} rotation={[1.14, -0.39, -0.59]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_911.geometry} material={nodes.primitive_color_911.material} />
          </group>
          <group position={[-0.2, 2.88, 18.65]} rotation={[-0.03, -0.27, 2.93]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_912.geometry} material={nodes.primitive_color_912.material} />
          </group>
          <group position={[-0.26, 2.59, 18.64]} rotation={[0.03, 0, -0.2]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_913.geometry} material={nodes.primitive_color_913.material} />
          </group>
          <group position={[0.15, 3.56, 18.21]} rotation={[-1.08, 0.3, -0.5]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_914.geometry} material={nodes.primitive_color_914.material} />
          </group>
          <group position={[0.28, 3.65, 17.96]} rotation={[1.56, 0.57, 0.58]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_915.geometry} material={nodes.primitive_color_915.material} />
          </group>
          <group position={[2.67, 3.13, 18.24]} rotation={[-1.84, -0.53, 0.41]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_916.geometry} material={nodes.primitive_color_916.material} />
          </group>
          <group position={[2.57, 3, 18]} rotation={[1.01, -0.2, -0.36]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_917.geometry} material={nodes.primitive_color_917.material} />
          </group>
          <group position={[3.35, 3.17, 18.78]} rotation={[0.18, -0.26, -1.9]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_918.geometry} material={nodes.primitive_color_918.material} />
          </group>
          <group position={[3.62, 3.06, 18.83]} rotation={[-0.18, -0.12, 1.17]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_919.geometry} material={nodes.primitive_color_919.material} />
          </group>
          <group position={[2.9, 3.89, 18.61]} rotation={[-0.15, 0.01, -0.08]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_920.geometry} material={nodes.primitive_color_920.material} />
          </group>
          <group position={[2.92, 4.18, 18.56]} rotation={[2.87, 0.95, 0.14]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_921.geometry} material={nodes.primitive_color_921.material} />
          </group>
          <group position={[-1.65, 5.95, 18.81]} rotation={[0.08, 0.05, 1.02]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_922.geometry} material={nodes.primitive_color_922.material} />
          </group>
          <group position={[-1.9, 6.1, 18.83]} rotation={[-0.08, 0.14, -2.1]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_923.geometry} material={nodes.primitive_color_923.material} />
          </group>
          <group position={[-0.94, 5.84, 18.32]} rotation={[-1.05, 0.31, -0.52]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_924.geometry} material={nodes.primitive_color_924.material} />
          </group>
          <group position={[-0.8, 5.92, 18.08]} rotation={[1.55, 0.59, 0.61]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_925.geometry} material={nodes.primitive_color_925.material} />
          </group>
          <group position={[-0.89, 5.8, 19.19]} rotation={[1.02, -0.36, -0.64]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_926.geometry} material={nodes.primitive_color_926.material} />
          </group>
          <group position={[-0.73, 5.87, 19.43]} rotation={[-1.36, -0.62, 0.75]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_927.geometry} material={nodes.primitive_color_927.material} />
          </group>
          <group position={[-1.75, 4.01, 18.27]} rotation={[-1.4, -0.62, 0.73]} scale={[0.2, 0.19, 0.2]}>
            <mesh geometry={nodes.primitive_color_928.geometry} material={nodes.primitive_color_928.material} />
          </group>
          <group position={[-1.95, 3.92, 17.97]} rotation={[1.03, -0.36, -0.62]} scale={[0.2, 0.17, 0.2]}>
            <mesh geometry={nodes.primitive_color_929.geometry} material={nodes.primitive_color_929.material} />
          </group>
          <group position={[-0.77, 3.78, 18.69]} rotation={[-0.04, 0.07, -2.07]} scale={[0.2, 0.4, 0.2]}>
            <mesh geometry={nodes.primitive_color_930.geometry} material={nodes.primitive_color_930.material} />
          </group>
          <group position={[-1.32, 4.91, 18.74]} rotation={[0.03, 0, -0.16]} scale={[0.2, 0.4, 0.2]}>
            <mesh geometry={nodes.primitive_color_931.geometry} material={nodes.primitive_color_931.material} />
          </group>
          <group position={[-1.69, 4, 19.18]} rotation={[1.57, 0.56, 0.56]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_932.geometry} material={nodes.primitive_color_932.material} />
          </group>
          <group position={[-1.82, 3.91, 19.43]} rotation={[-1.08, 0.3, -0.49]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_933.geometry} material={nodes.primitive_color_933.material} />
          </group>
          <group position={[-4.96, 3.92, 16.57]} rotation={[0.14, 0.12, 1.45]} scale={[0.2, 0.19, 0.2]}>
            <mesh geometry={nodes.primitive_color_934.geometry} material={nodes.primitive_color_934.material} />
          </group>
          <group position={[-5.33, 3.96, 16.62]} rotation={[-0.14, 0.15, -1.65]} scale={[0.2, 0.18, 0.2]}>
            <mesh geometry={nodes.primitive_color_935.geometry} material={nodes.primitive_color_935.material} />
          </group>
          <group position={[-4.13, 4.32, 15.93]} rotation={[-0.83, 0.16, -0.37]} scale={[0.2, 0.4, 0.2]}>
            <mesh geometry={nodes.primitive_color_936.geometry} material={nodes.primitive_color_936.material} />
          </group>
          <group position={[-4.33, 3.36, 16.31]} rotation={[-2.66, 0.77, -0.2]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_937.geometry} material={nodes.primitive_color_937.material} />
          </group>
          <group position={[-4.28, 3.09, 16.21]} rotation={[0.34, 0.02, 0.14]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_938.geometry} material={nodes.primitive_color_938.material} />
          </group>
          <group position={[0.4, 3.63, 19.41]} rotation={[-1.39, -0.61, 0.72]} scale={[0.2, 0.17, 0.2]}>
            <mesh geometry={nodes.primitive_color_939.geometry} material={nodes.primitive_color_939.material} />
          </group>
          <group position={[0.21, 3.54, 19.12]} rotation={[1.04, -0.36, -0.62]} scale={[0.2, 0.19, 0.2]}>
            <mesh geometry={nodes.primitive_color_940.geometry} material={nodes.primitive_color_940.material} />
          </group>
          <group position={[1.11, 3.52, 19.84]} rotation={[0.06, -0.1, -2.04]} scale={[0.2, 0.18, 0.2]}>
            <mesh geometry={nodes.primitive_color_941.geometry} material={nodes.primitive_color_941.material} />
          </group>
          <group position={[1.44, 3.35, 19.86]} rotation={[-0.06, -0.04, 1.1]} scale={[0.2, 0.19, 0.2]}>
            <mesh geometry={nodes.primitive_color_942.geometry} material={nodes.primitive_color_942.material} />
          </group>
          <group position={[-2.7, 3.86, 17.66]} rotation={[0.17, 0.15, 1.42]} scale={[0.2, 0.17, 0.2]}>
            <mesh geometry={nodes.primitive_color_943.geometry} material={nodes.primitive_color_943.material} />
          </group>
          <group position={[-3.05, 3.91, 17.72]} rotation={[-0.17, 0.19, -1.66]} scale={[0.2, 0.19, 0.2]}>
            <mesh geometry={nodes.primitive_color_944.geometry} material={nodes.primitive_color_944.material} />
          </group>
          <group position={[-17.21, 6.52, 2.97]} rotation={[0.23, 0.08, 0.67]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_945.geometry} material={nodes.primitive_color_945.material} />
          </group>
          <group position={[-17.39, 6.74, 3.03]} rotation={[-0.28, 0.6, -2.3]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_946.geometry} material={nodes.primitive_color_946.material} />
          </group>
          <group position={[-16.56, 6.02, 3.28]} rotation={[1.3, -0.6, -0.77]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_947.geometry} material={nodes.primitive_color_947.material} />
          </group>
          <group position={[-16.4, 5.96, 3.51]} rotation={[-1.04, -0.4, 0.68]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_948.geometry} material={nodes.primitive_color_948.material} />
          </group>
          <group position={[-6.91, 4.09, 19.14]} rotation={[-2.87, 0.62, -0.09]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_949.geometry} material={nodes.primitive_color_949.material} />
          </group>
          <group position={[-6.89, 3.81, 19.08]} rotation={[0.22, 0.01, 0.07]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_950.geometry} material={nodes.primitive_color_950.material} />
          </group>
          <group position={[-7.33, 4.67, 19.64]} rotation={[0.91, 0.46, 0.9]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_951.geometry} material={nodes.primitive_color_951.material} />
          </group>
          <group position={[-7.53, 4.7, 19.84]} rotation={[-1.01, 0.59, -1]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_952.geometry} material={nodes.primitive_color_952.material} />
          </group>
          <group position={[-6.48, 4.78, 19.46]} rotation={[0.39, -0.25, -1.12]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_953.geometry} material={nodes.primitive_color_953.material} />
          </group>
          <group position={[-6.23, 4.88, 19.57]} rotation={[-0.44, -0.49, 1.7]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_954.geometry} material={nodes.primitive_color_954.material} />
          </group>
          <group position={[-20.79, 8.5, 3.41]} rotation={[0.54, -0.28, -0.94]} scale={[0.2, 0.17, 0.2]}>
            <mesh geometry={nodes.primitive_color_955.geometry} material={nodes.primitive_color_955.material} />
          </group>
          <group position={[-20.51, 8.64, 3.59]} rotation={[-0.69, -0.68, 1.55]} scale={[0.2, 0.19, 0.2]}>
            <mesh geometry={nodes.primitive_color_956.geometry} material={nodes.primitive_color_956.material} />
          </group>
          <group position={[-21.11, 8.35, 2.68]} rotation={[-1.47, 0.12, -0.13]} scale={[0.2, 0.17, 0.2]}>
            <mesh geometry={nodes.primitive_color_957.geometry} material={nodes.primitive_color_957.material} />
          </group>
          <group position={[-21.06, 8.38, 2.33]} rotation={[1.63, 0.14, 0.13]} scale={[0.2, 0.19, 0.2]}>
            <mesh geometry={nodes.primitive_color_958.geometry} material={nodes.primitive_color_958.material} />
          </group>
          <group position={[-16.36, 6.33, 2.11]} rotation={[1.36, 0.62, 0.75]} scale={[0.2, 0.17, 0.2]}>
            <mesh geometry={nodes.primitive_color_959.geometry} material={nodes.primitive_color_959.material} />
          </group>
          <group position={[-16.56, 6.24, 2.4]} rotation={[-1.03, 0.37, -0.64]} scale={[0.2, 0.19, 0.2]}>
            <mesh geometry={nodes.primitive_color_960.geometry} material={nodes.primitive_color_960.material} />
          </group>
          <group position={[-12.4, 3.98, 10.09]} rotation={[0.1, 0.01, 0.13]} scale={[0.2, 0.39, 0.2]}>
            <mesh geometry={nodes.primitive_color_961.geometry} material={nodes.primitive_color_961.material} />
          </group>
          <group position={[-12.47, 2.95, 10.45]} rotation={[1.93, 0.52, 0.37]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_962.geometry} material={nodes.primitive_color_962.material} />
          </group>
          <group position={[-12.57, 2.81, 10.68]} rotation={[-0.97, 0.17, -0.32]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_963.geometry} material={nodes.primitive_color_963.material} />
          </group>
          <group position={[-11.78, 3.12, 9.98]} rotation={[-0.06, 0.07, -1.75]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_964.geometry} material={nodes.primitive_color_964.material} />
          </group>
          <group position={[-11.49, 3.07, 9.96]} rotation={[0.06, 0.05, 1.39]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_965.geometry} material={nodes.primitive_color_965.material} />
          </group>
          <group position={[-12.67, 2.93, 9.21]} rotation={[1.1, -0.26, -0.42]} scale={[0.2, 0.17, 0.2]}>
            <mesh geometry={nodes.primitive_color_966.geometry} material={nodes.primitive_color_966.material} />
          </group>
          <group position={[-12.53, 3.04, 9.52]} rotation={[-1.67, -0.53, 0.48]} scale={[0.2, 0.19, 0.2]}>
            <mesh geometry={nodes.primitive_color_967.geometry} material={nodes.primitive_color_967.material} />
          </group>
          <group position={[-13.28, 2.5, 8.84]} rotation={[0.11, 0.19, 2.13]} scale={[0.2, 0.17, 0.2]}>
            <mesh geometry={nodes.primitive_color_968.geometry} material={nodes.primitive_color_968.material} />
          </group>
          <group position={[-13.58, 2.31, 8.88]} rotation={[-0.11, 0.06, -0.99]} scale={[0.2, 0.19, 0.2]}>
            <mesh geometry={nodes.primitive_color_969.geometry} material={nodes.primitive_color_969.material} />
          </group>
          <group position={[-20.65, 7.8, 1.49]} rotation={[-0.99, 1.11, -1.71]} scale={[0.2, 0.39, 0.2]}>
            <mesh geometry={nodes.primitive_color_970.geometry} material={nodes.primitive_color_970.material} />
          </group>
          <group position={[-20.7, 8.86, 1.64]} rotation={[-0.25, 0.07, -0.56]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_971.geometry} material={nodes.primitive_color_971.material} />
          </group>
          <group position={[-20.55, 9.1, 1.56]} rotation={[0.35, 0.77, 2.31]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_972.geometry} material={nodes.primitive_color_972.material} />
          </group>
          <group position={[-21.47, 8.48, 1.54]} rotation={[-0.47, -0.35, 1.28]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_973.geometry} material={nodes.primitive_color_973.material} />
          </group>
          <group position={[-21.73, 8.52, 1.42]} rotation={[0.49, -0.44, -1.47]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_974.geometry} material={nodes.primitive_color_974.material} />
          </group>
          <group position={[-17.32, 5.5, 2.7]} rotation={[0.2, -0.06, -0.61]} scale={[0.2, 0.4, 0.2]}>
            <mesh geometry={nodes.primitive_color_975.geometry} material={nodes.primitive_color_975.material} />
          </group>
          <group position={[-18.12, 4.85, 2.95]} rotation={[1.08, 0.56, 0.89]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_976.geometry} material={nodes.primitive_color_976.material} />
          </group>
          <group position={[-18.31, 4.83, 3.16]} rotation={[-1, 0.48, -0.84]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_977.geometry} material={nodes.primitive_color_977.material} />
          </group>
          <group position={[-18.06, 4.95, 2.1]} rotation={[-1.14, -0.42, 0.65]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_978.geometry} material={nodes.primitive_color_978.material} />
          </group>
          <group position={[-18.22, 4.98, 1.86]} rotation={[1.3, -0.53, -0.69]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_979.geometry} material={nodes.primitive_color_979.material} />
          </group>
          <group position={[-14.66, 2.43, 8.8]} rotation={[-0.18, -0.09, 0.94]} scale={[0.2, 0.39, 0.2]}>
            <mesh geometry={nodes.primitive_color_980.geometry} material={nodes.primitive_color_980.material} />
          </group>
          <group position={[-14.09, 1.74, 9.41]} rotation={[2.07, 0.14, 0.08]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_981.geometry} material={nodes.primitive_color_981.material} />
          </group>
          <group position={[-14.12, 1.59, 9.67]} rotation={[-1.05, 0.05, -0.08]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_982.geometry} material={nodes.primitive_color_982.material} />
          </group>
          <group position={[-14.03, 1.62, 8.57]} rotation={[-2.36, 0.1, -0.04]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_983.geometry} material={nodes.primitive_color_983.material} />
          </group>
          <group position={[-14.02, 1.41, 8.36]} rotation={[0.78, 0.02, 0.04]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_984.geometry} material={nodes.primitive_color_984.material} />
          </group>
          <group position={[-15.37, 3.19, 9.08]} rotation={[0.89, 0.08, 0.17]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_985.geometry} material={nodes.primitive_color_985.material} />
          </group>
          <group position={[-15.41, 3.36, 9.31]} rotation={[-2.18, 0.33, -0.17]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_986.geometry} material={nodes.primitive_color_986.material} />
          </group>
          <group position={[-15.7, 2.54, 8.61]} rotation={[-0.11, -0.22, 2.2]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_987.geometry} material={nodes.primitive_color_987.material} />
          </group>
          <group position={[-15.94, 2.36, 8.57]} rotation={[0.11, -0.05, -0.91]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_988.geometry} material={nodes.primitive_color_988.material} />
          </group>
          <group position={[-20.25, 7.23, 0.64]} rotation={[-1.46, 0.11, -0.12]} scale={[0.2, 0.19, 0.2]}>
            <mesh geometry={nodes.primitive_color_989.geometry} material={nodes.primitive_color_989.material} />
          </group>
          <group position={[-20.21, 7.26, 0.29]} rotation={[1.65, 0.13, 0.12]} scale={[0.2, 0.17, 0.2]}>
            <mesh geometry={nodes.primitive_color_990.geometry} material={nodes.primitive_color_990.material} />
          </group>
          <group position={[-20.62, 6.75, 1.31]} rotation={[0.26, 0.63, 2.37]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_991.geometry} material={nodes.primitive_color_991.material} />
          </group>
          <group position={[-20.78, 6.51, 1.38]} rotation={[-0.21, 0.07, -0.6]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_992.geometry} material={nodes.primitive_color_992.material} />
          </group>
          <group position={[-19.84, 7.13, 1.45]} rotation={[0.53, -0.45, -1.4]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_993.geometry} material={nodes.primitive_color_993.material} />
          </group>
          <group position={[-19.58, 7.11, 1.58]} rotation={[-0.52, -0.39, 1.27]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_994.geometry} material={nodes.primitive_color_994.material} />
          </group>
          <group position={[-17.31, 4.09, 2.54]} rotation={[0, 0, 0.51]} scale={[0.2, 0.17, 0.2]}>
            <mesh geometry={nodes.primitive_color_995.geometry} material={nodes.primitive_color_995.material} />
          </group>
          <group position={[-17.49, 4.4, 2.54]} rotation={[0, 0.02, -2.63]} scale={[0.2, 0.19, 0.2]}>
            <mesh geometry={nodes.primitive_color_996.geometry} material={nodes.primitive_color_996.material} />
          </group>
          <group position={[-15.11, 3.36, 7.91]} rotation={[2.09, 0.33, 0.19]} scale={[0.2, 0.17, 0.2]}>
            <mesh geometry={nodes.primitive_color_997.geometry} material={nodes.primitive_color_997.material} />
          </group>
          <group position={[-15.18, 3.17, 8.2]} rotation={[-0.97, 0.1, -0.18]} scale={[0.2, 0.19, 0.2]}>
            <mesh geometry={nodes.primitive_color_998.geometry} material={nodes.primitive_color_998.material} />
          </group>
          <group position={[-15.42, 3.86, 7.35]} rotation={[-0.32, -0.17, 0.97]} scale={[0.2, 0.17, 0.2]}>
            <mesh geometry={nodes.primitive_color_999.geometry} material={nodes.primitive_color_999.material} />
          </group>
          <group position={[-15.71, 4.04, 7.24]} rotation={[0.36, -0.51, -1.93]} scale={[0.2, 0.19, 0.2]}>
            <mesh geometry={nodes.primitive_color_1000.geometry} material={nodes.primitive_color_1000.material} />
          </group>
          <group position={[-19.85, 6.96, -0.36]} rotation={[-0.49, 0.8, -2.07]} scale={[0.2, 0.17, 0.2]}>
            <mesh geometry={nodes.primitive_color_1001.geometry} material={nodes.primitive_color_1001.material} />
          </group>
          <group position={[-19.62, 6.7, -0.48]} rotation={[0.34, 0.12, 0.67]} scale={[0.2, 0.19, 0.2]}>
            <mesh geometry={nodes.primitive_color_1002.geometry} material={nodes.primitive_color_1002.material} />
          </group>
          <group position={[-16.52, 3.92, 6.52]} rotation={[-1.69, -0.75, 0.68]} scale={[0.2, 0.39, 0.2]}>
            <mesh geometry={nodes.primitive_color_1003.geometry} material={nodes.primitive_color_1003.material} />
          </group>
          <group position={[-16.51, 4.44, 7.47]} rotation={[0.93, 0.4, 0.76]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_1004.geometry} material={nodes.primitive_color_1004.material} />
          </group>
          <group position={[-16.7, 4.5, 7.69]} rotation={[-1.18, 0.65, -0.92]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_1005.geometry} material={nodes.primitive_color_1005.material} />
          </group>
          <group position={[-16.01, 4.79, 6.87]} rotation={[-0.38, 0.06, -0.31]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_1006.geometry} material={nodes.primitive_color_1006.material} />
          </group>
          <group position={[-15.92, 5.05, 6.77]} rotation={[1.89, 1.17, 0.89]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_1007.geometry} material={nodes.primitive_color_1007.material} />
          </group>
          <group position={[-16.58, 3.55, 1.86]} rotation={[1.08, 0.42, 0.69]} scale={[0.2, 0.19, 0.2]}>
            <mesh geometry={nodes.primitive_color_1008.geometry} material={nodes.primitive_color_1008.material} />
          </group>
          <group position={[-16.78, 3.59, 2.15]} rotation={[-1.26, 0.57, -0.76]} scale={[0.2, 0.17, 0.2]}>
            <mesh geometry={nodes.primitive_color_1009.geometry} material={nodes.primitive_color_1009.material} />
          </group>
          <group position={[-15.56, 3.25, 1.65]} rotation={[0.37, -0.42, -1.72]} scale={[0.2, 0.39, 0.2]}>
            <mesh geometry={nodes.primitive_color_1010.geometry} material={nodes.primitive_color_1010.material} />
          </group>
          <group position={[-16.46, 3.08, 1.1]} rotation={[-1.87, -0.93, 0.71]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_1011.geometry} material={nodes.primitive_color_1011.material} />
          </group>
          <group position={[-16.57, 2.87, 0.93]} rotation={[0.62, -0.13, -0.41]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_1012.geometry} material={nodes.primitive_color_1012.material} />
          </group>
          <group position={[-16.2, 3.9, 1.09]} rotation={[-0.63, 0.03, -0.1]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_1013.geometry} material={nodes.primitive_color_1013.material} />
          </group>
          <group position={[-16.17, 4.13, 0.92]} rotation={[2.48, 0.29, 0.1]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_1014.geometry} material={nodes.primitive_color_1014.material} />
          </group>
          <group position={[-19.49, 5.81, -0.58]} rotation={[0.22, 0.73, 2.58]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_1015.geometry} material={nodes.primitive_color_1015.material} />
          </group>
          <group position={[-19.61, 5.54, -0.53]} rotation={[-0.16, 0.03, -0.41]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_1016.geometry} material={nodes.primitive_color_1016.material} />
          </group>
          <group position={[-18.8, 6.34, -0.43]} rotation={[0.49, -0.37, -1.3]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_1017.geometry} material={nodes.primitive_color_1017.material} />
          </group>
          <group position={[-18.53, 6.36, -0.3]} rotation={[-0.5, -0.44, 1.42]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_1018.geometry} material={nodes.primitive_color_1018.material} />
          </group>
          <group position={[-16.51, 3.44, 5.54]} rotation={[-1.17, 0.61, -0.89]} scale={[0.2, 0.19, 0.2]}>
            <mesh geometry={nodes.primitive_color_1019.geometry} material={nodes.primitive_color_1019.material} />
          </group>
          <group position={[-16.28, 3.38, 5.27]} rotation={[0.97, 0.42, 0.77]} scale={[0.2, 0.17, 0.2]}>
            <mesh geometry={nodes.primitive_color_1020.geometry} material={nodes.primitive_color_1020.material} />
          </group>
          <group position={[-17.28, 3.82, 5.78]} rotation={[-0.36, -0.17, 0.89]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_1021.geometry} material={nodes.primitive_color_1021.material} />
          </group>
          <group position={[-17.5, 3.98, 5.68]} rotation={[0.43, -0.61, -1.93]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_1022.geometry} material={nodes.primitive_color_1022.material} />
          </group>
          <group position={[-17.09, 3.08, 6.17]} rotation={[1.19, 1.15, 1.53]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_1023.geometry} material={nodes.primitive_color_1023.material} />
          </group>
          <group position={[-17.21, 2.84, 6.28]} rotation={[-0.39, 0.08, -0.42]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_1024.geometry} material={nodes.primitive_color_1024.material} />
          </group>
          <group position={[-19.16, 6.37, -1.41]} rotation={[1.65, 0.17, 0.15]} scale={[0.2, 0.39, 0.2]}>
            <mesh geometry={nodes.primitive_color_1025.geometry} material={nodes.primitive_color_1025.material} />
          </group>
          <group position={[-18.85, 6.94, -2.27]} rotation={[-0.2, 0.04, -0.37]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_1026.geometry} material={nodes.primitive_color_1026.material} />
          </group>
          <group position={[-18.74, 7.21, -2.33]} rotation={[0.34, 0.93, 2.48]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_1027.geometry} material={nodes.primitive_color_1027.material} />
          </group>
          <group position={[-19.52, 6.42, -2.42]} rotation={[-0.56, -0.46, 1.37]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_1028.geometry} material={nodes.primitive_color_1028.material} />
          </group>
          <group position={[-19.78, 6.4, -2.56]} rotation={[0.54, -0.4, -1.27]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_1029.geometry} material={nodes.primitive_color_1029.material} />
          </group>
          <group position={[-14.97, 1.85, 4.38]} rotation={[0.9, 0.45, 0.88]} scale={[0.2, 0.39, 0.2]}>
            <mesh geometry={nodes.primitive_color_1030.geometry} material={nodes.primitive_color_1030.material} />
          </group>
          <group position={[-14.02, 2.09, 3.91]} rotation={[0.12, -0.06, -0.89]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_1031.geometry} material={nodes.primitive_color_1031.material} />
          </group>
          <group position={[-13.79, 2.27, 3.94]} rotation={[-0.13, -0.25, 2.22]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_1032.geometry} material={nodes.primitive_color_1032.material} />
          </group>
          <group position={[-14.23, 1.26, 3.91]} rotation={[0.14, -0.58, -2.67]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_1033.geometry} material={nodes.primitive_color_1033.material} />
          </group>
          <group position={[-14.12, 0.99, 3.94]} rotation={[-0.12, -0.02, 0.39]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_1034.geometry} material={nodes.primitive_color_1034.material} />
          </group>
          <group position={[-15.81, 2.83, 4.91]} rotation={[0.02, -0.09, -2.8]} scale={[0.2, 0.17, 0.2]}>
            <mesh geometry={nodes.primitive_color_1035.geometry} material={nodes.primitive_color_1035.material} />
          </group>
          <group position={[-15.69, 2.49, 4.91]} rotation={[-0.02, 0, 0.34]} scale={[0.2, 0.19, 0.2]}>
            <mesh geometry={nodes.primitive_color_1036.geometry} material={nodes.primitive_color_1036.material} />
          </group>
          <group position={[-15.9, 1.61, 4.83]} rotation={[-0.18, -0.35, 2.22]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_1037.geometry} material={nodes.primitive_color_1037.material} />
          </group>
          <group position={[-16.12, 1.42, 4.78]} rotation={[0.17, -0.08, -0.85]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_1038.geometry} material={nodes.primitive_color_1038.material} />
          </group>
          <group position={[-15.27, 1.85, 5.39]} rotation={[1.54, -0.5, -0.52]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_1039.geometry} material={nodes.primitive_color_1039.material} />
          </group>
          <group position={[-15.14, 1.79, 5.65]} rotation={[-1.18, -0.32, 0.47]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_1040.geometry} material={nodes.primitive_color_1040.material} />
          </group>
          <group position={[-14.81, 1.77, 3]} rotation={[1.41, -0.39, -0.45]} scale={[0.2, 0.17, 0.2]}>
            <mesh geometry={nodes.primitive_color_1041.geometry} material={nodes.primitive_color_1041.material} />
          </group>
          <group position={[-14.67, 1.76, 3.33]} rotation={[-1.37, -0.37, 0.45]} scale={[0.2, 0.19, 0.2]}>
            <mesh geometry={nodes.primitive_color_1042.geometry} material={nodes.primitive_color_1042.material} />
          </group>
          <group position={[-14.93, 2.54, 2.16]} rotation={[2.63, 0.4, 0.11]} scale={[0.2, 0.19, 0.2]}>
            <mesh geometry={nodes.primitive_color_1043.geometry} material={nodes.primitive_color_1043.material} />
          </group>
          <group position={[-14.96, 2.22, 2.33]} rotation={[-0.47, 0.02, -0.1]} scale={[0.2, 0.17, 0.2]}>
            <mesh geometry={nodes.primitive_color_1044.geometry} material={nodes.primitive_color_1044.material} />
          </group>
          <group position={[-14.54, 2.98, 1.49]} rotation={[-1.17, 0.57, -0.83]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_1045.geometry} material={nodes.primitive_color_1045.material} />
          </group>
          <group position={[-14.36, 2.95, 1.26]} rotation={[1.04, 0.45, 0.76]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_1046.geometry} material={nodes.primitive_color_1046.material} />
          </group>
          <group position={[-14.68, 3.43, 2.22]} rotation={[0.62, -0.12, -0.37]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_1047.geometry} material={nodes.primitive_color_1047.material} />
          </group>
          <group position={[-14.57, 3.65, 2.39]} rotation={[-1.98, -0.89, 0.6]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_1048.geometry} material={nodes.primitive_color_1048.material} />
          </group>
          <group position={[-17.41, 5.67, -2.7]} rotation={[0.07, 0.1, 1.88]} scale={[0.2, 0.19, 0.2]}>
            <mesh geometry={nodes.primitive_color_1049.geometry} material={nodes.primitive_color_1049.material} />
          </group>
          <group position={[-17.75, 5.56, -2.68]} rotation={[-0.07, 0.05, -1.25]} scale={[0.2, 0.17, 0.2]}>
            <mesh geometry={nodes.primitive_color_1050.geometry} material={nodes.primitive_color_1050.material} />
          </group>
          <group position={[-16.69, 6.02, -2.27]} rotation={[1.12, -0.23, -0.37]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_1051.geometry} material={nodes.primitive_color_1051.material} />
          </group>
          <group position={[-16.59, 6.12, -2.01]} rotation={[-1.74, -0.47, 0.4]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_1052.geometry} material={nodes.primitive_color_1052.material} />
          </group>
          <group position={[-16.83, 6.22, -3.12]} rotation={[-0.8, 0.04, -0.1]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_1053.geometry} material={nodes.primitive_color_1053.material} />
          </group>
          <group position={[-16.8, 6.42, -3.33]} rotation={[2.32, 0.23, 0.1]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_1054.geometry} material={nodes.primitive_color_1054.material} />
          </group>
          <group position={[-16.57, 5.43, -2.88]} rotation={[-0.36, 0.74, -2.26]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_1055.geometry} material={nodes.primitive_color_1055.material} />
          </group>
          <group position={[-16.41, 5.2, -2.96]} rotation={[0.26, 0.08, 0.61]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_1056.geometry} material={nodes.primitive_color_1056.material} />
          </group>
          <group position={[-18.51, 5.77, -2.48]} rotation={[0.35, 0.11, 0.63]} scale={[0.2, 0.17, 0.2]}>
            <mesh geometry={nodes.primitive_color_1057.geometry} material={nodes.primitive_color_1057.material} />
          </group>
          <group position={[-18.72, 6.04, -2.35]} rotation={[-0.54, 0.85, -2.05]} scale={[0.2, 0.19, 0.2]}>
            <mesh geometry={nodes.primitive_color_1058.geometry} material={nodes.primitive_color_1058.material} />
          </group>
          <group position={[10.55, 3.69, 21.23]} rotation={[-0.9, -0.83, 1.47]} scale={[0.2, 0.17, 0.2]}>
            <mesh geometry={nodes.primitive_color_1059.geometry} material={nodes.primitive_color_1059.material} />
          </group>
          <group position={[10.3, 3.51, 21.04]} rotation={[0.58, -0.24, -0.77]} scale={[0.2, 0.19, 0.2]}>
            <mesh geometry={nodes.primitive_color_1060.geometry} material={nodes.primitive_color_1060.material} />
          </group>
          <group position={[9.38, 3.69, 20.46]} rotation={[0.49, -0.71, -1.95]} scale={[0.2, 0.39, 0.2]}>
            <mesh geometry={nodes.primitive_color_1061.geometry} material={nodes.primitive_color_1061.material} />
          </group>
          <group position={[9.06, 4.52, 19.85]} rotation={[-0.68, 0.15, -0.42]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_1062.geometry} material={nodes.primitive_color_1062.material} />
          </group>
          <group position={[9.17, 4.72, 19.67]} rotation={[1.85, 0.86, 0.67]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_1063.geometry} material={nodes.primitive_color_1063.material} />
          </group>
          <group position={[8.6, 4.42, 20.59]} rotation={[0.88, 0.23, 0.48]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_1064.geometry} material={nodes.primitive_color_1064.material} />
          </group>
          <group position={[8.47, 4.56, 20.81]} rotation={[-1.7, 0.71, -0.64]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_1065.geometry} material={nodes.primitive_color_1065.material} />
          </group>
          <group position={[8.47, 3.88, 19.91]} rotation={[-0.84, -0.81, 1.53]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_1066.geometry} material={nodes.primitive_color_1066.material} />
          </group>
          <group position={[8.27, 3.73, 19.76]} rotation={[0.55, -0.23, -0.79]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_1067.geometry} material={nodes.primitive_color_1067.material} />
          </group>
          <group position={[9.61, 2.69, 21.19]} rotation={[1.82, 0.9, 0.72]} scale={[0.2, 0.39, 0.2]}>
            <mesh geometry={nodes.primitive_color_1068.geometry} material={nodes.primitive_color_1068.material} />
          </group>
          <group position={[10.15, 2.95, 20.33]} rotation={[-1.75, 0.7, -0.59]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_1069.geometry} material={nodes.primitive_color_1069.material} />
          </group>
          <group position={[10.27, 2.8, 20.1]} rotation={[0.88, 0.22, 0.45]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_1070.geometry} material={nodes.primitive_color_1070.material} />
          </group>
          <group position={[8.7, 1.64, 21.18]} rotation={[0.56, -0.22, -0.72]} scale={[0.2, 0.17, 0.2]}>
            <mesh geometry={nodes.primitive_color_1071.geometry} material={nodes.primitive_color_1071.material} />
          </group>
          <group position={[8.93, 1.84, 21.36]} rotation={[-0.92, -0.87, 1.5]} scale={[0.2, 0.19, 0.2]}>
            <mesh geometry={nodes.primitive_color_1072.geometry} material={nodes.primitive_color_1072.material} />
          </group>
          <group position={[9.7, 1.86, 21.85]} rotation={[0.47, -0.64, -1.9]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_1073.geometry} material={nodes.primitive_color_1073.material} />
          </group>
          <group position={[9.93, 1.7, 21.95]} rotation={[-0.38, -0.18, 0.88]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_1074.geometry} material={nodes.primitive_color_1074.material} />
          </group>
          <group position={[9.04, 2.4, 22.06]} rotation={[0.9, 0.25, 0.5]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_1075.geometry} material={nodes.primitive_color_1075.material} />
          </group>
          <group position={[8.91, 2.53, 22.29]} rotation={[-1.64, 0.7, -0.66]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_1076.geometry} material={nodes.primitive_color_1076.material} />
          </group>
          <group position={[8.28, 0.94, 21.16]} rotation={[2.43, 0.73, 0.28]} scale={[0.2, 0.17, 0.2]}>
            <mesh geometry={nodes.primitive_color_1077.geometry} material={nodes.primitive_color_1077.material} />
          </group>
          <group position={[8.2, 0.63, 21.34]} rotation={[-0.51, 0.05, -0.21]} scale={[0.2, 0.19, 0.2]}>
            <mesh geometry={nodes.primitive_color_1078.geometry} material={nodes.primitive_color_1078.material} />
          </group>
          <group position={[1.88, 2.35, 20.06]} rotation={[2.85, 0.73, 0.11]} scale={[0.2, 0.4, 0.2]}>
            <mesh geometry={nodes.primitive_color_1079.geometry} material={nodes.primitive_color_1079.material} />
          </group>
          <group position={[2.18, 3.32, 20.32]} rotation={[0.95, -0.25, -0.48]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_1080.geometry} material={nodes.primitive_color_1080.material} />
          </group>
          <group position={[2.31, 3.45, 20.55]} rotation={[-1.66, -0.66, 0.61]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_1081.geometry} material={nodes.primitive_color_1081.material} />
          </group>
          <group position={[8.6, -0.39, 21.42]} rotation={[-0.3, 0.58, -2.22]} scale={[0.2, 0.39, 0.2]}>
            <mesh geometry={nodes.primitive_color_1082.geometry} material={nodes.primitive_color_1082.material} />
          </group>
          <group position={[9.1, -1.01, 20.7]} rotation={[-1.73, -0.01, 0.01]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_1083.geometry} material={nodes.primitive_color_1083.material} />
          </group>
          <group position={[9.1, -1.06, 20.41]} rotation={[1.41, -0.01, -0.01]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_1084.geometry} material={nodes.primitive_color_1084.material} />
          </group>
          <group position={[8.99, -1.39, 21.49]} rotation={[2.42, 0.78, 0.31]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_1085.geometry} material={nodes.primitive_color_1085.material} />
          </group>
          <group position={[8.93, -1.64, 21.62]} rotation={[-0.49, 0.05, -0.22]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_1086.geometry} material={nodes.primitive_color_1086.material} />
          </group>
          <group position={[9.61, -0.79, 21.38]} rotation={[0.28, -0.2, -1.23]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_1087.geometry} material={nodes.primitive_color_1087.material} />
          </group>
          <group position={[9.88, -0.71, 21.46]} rotation={[-0.29, -0.35, 1.75]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_1088.geometry} material={nodes.primitive_color_1088.material} />
          </group>
          <group position={[7.38, -0.08, 21.41]} rotation={[-0.27, -0.34, 1.8]} scale={[0.2, 0.39, 0.2]}>
            <mesh geometry={nodes.primitive_color_1089.geometry} material={nodes.primitive_color_1089.material} />
          </group>
          <group position={[8.08, 0.22, 22.14]} rotation={[1.45, 0, 0]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_1090.geometry} material={nodes.primitive_color_1090.material} />
          </group>
          <group position={[8.08, 0.26, 22.44]} rotation={[-1.7, 0, 0]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_1091.geometry} material={nodes.primitive_color_1091.material} />
          </group>
          <group position={[4.64, -0.06, 22.9]} rotation={[1.68, -0.14, -0.13]} scale={[0.2, 0.39, 0.2]}>
            <mesh geometry={nodes.primitive_color_1092.geometry} material={nodes.primitive_color_1092.material} />
          </group>
          <group position={[5.16, -0.48, 23.76]} rotation={[0.19, -0.36, -2.15]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_1093.geometry} material={nodes.primitive_color_1093.material} />
          </group>
          <group position={[5.39, -0.65, 23.81]} rotation={[-0.18, -0.09, 0.9]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_1094.geometry} material={nodes.primitive_color_1094.material} />
          </group>
          <group position={[4.3, -0.39, 23.87]} rotation={[0.51, 0.6, 1.75]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_1095.geometry} material={nodes.primitive_color_1095.material} />
          </group>
          <group position={[4.07, -0.51, 23.99]} rotation={[-0.43, 0.23, -0.98]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_1096.geometry} material={nodes.primitive_color_1096.material} />
          </group>
          <group position={[4.82, 0.31, 23.9]} rotation={[0.46, -0.04, -0.16]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_1097.geometry} material={nodes.primitive_color_1097.material} />
          </group>
          <group position={[4.87, 0.57, 24.03]} rotation={[-2.55, -0.64, 0.2]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_1098.geometry} material={nodes.primitive_color_1098.material} />
          </group>
          <group position={[3.93, 0.47, 22.02]} rotation={[-0.17, -0.09, 0.94]} scale={[0.2, 0.39, 0.2]}>
            <mesh geometry={nodes.primitive_color_1099.geometry} material={nodes.primitive_color_1099.material} />
          </group>
          <group position={[2.32, 1.37, 20.33]} rotation={[0.2, -0.29, -1.94]} scale={[0.2, 0.19, 0.2]}>
            <mesh geometry={nodes.primitive_color_1100.geometry} material={nodes.primitive_color_1100.material} />
          </group>
          <group position={[2.65, 1.22, 20.4]} rotation={[-0.19, -0.12, 1.12]} scale={[0.2, 0.17, 0.2]}>
            <mesh geometry={nodes.primitive_color_1101.geometry} material={nodes.primitive_color_1101.material} />
          </group>
          <group position={[1.6, 1.33, 19.81]} rotation={[-1.8, -0.66, 0.53]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_1102.geometry} material={nodes.primitive_color_1102.material} />
          </group>
          <group position={[1.48, 1.18, 19.58]} rotation={[0.91, -0.21, -0.42]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_1103.geometry} material={nodes.primitive_color_1103.material} />
          </group>
          <group position={[1.46, 1.54, 20.63]} rotation={[1.12, 0.58, 0.89]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_1104.geometry} material={nodes.primitive_color_1104.material} />
          </group>
          <group position={[1.27, 1.5, 20.85]} rotation={[-0.99, 0.46, -0.81]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_1105.geometry} material={nodes.primitive_color_1105.material} />
          </group>
          <group position={[3.22, 0.95, 21.33]} rotation={[-1.47, -0.15, 0.16]} scale={[0.2, 0.19, 0.2]}>
            <mesh geometry={nodes.primitive_color_1106.geometry} material={nodes.primitive_color_1106.material} />
          </group>
          <group position={[3.16, 0.98, 20.97]} rotation={[1.62, -0.17, -0.16]} scale={[0.2, 0.17, 0.2]}>
            <mesh geometry={nodes.primitive_color_1107.geometry} material={nodes.primitive_color_1107.material} />
          </group>
          <group position={[3.39, 1.4, 22.1]} rotation={[0.41, -0.03, -0.14]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_1108.geometry} material={nodes.primitive_color_1108.material} />
          </group>
          <group position={[3.43, 1.66, 22.22]} rotation={[-2.62, -0.64, 0.18]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_1109.geometry} material={nodes.primitive_color_1109.material} />
          </group>
          <group position={[2.9, 0.66, 22.12]} rotation={[0.61, 0.68, 1.69]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_1110.geometry} material={nodes.primitive_color_1110.material} />
          </group>
          <group position={[2.67, 0.53, 22.26]} rotation={[-0.48, 0.24, -0.91]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_1111.geometry} material={nodes.primitive_color_1111.material} />
          </group>
          <group position={[5.01, 0.28, 21.93]} rotation={[-0.41, 0.22, -0.99]} scale={[0.2, 0.19, 0.2]}>
            <mesh geometry={nodes.primitive_color_1112.geometry} material={nodes.primitive_color_1112.material} />
          </group>
          <group position={[5.3, 0.44, 21.79]} rotation={[0.49, 0.59, 1.77]} scale={[0.2, 0.17, 0.2]}>
            <mesh geometry={nodes.primitive_color_1113.geometry} material={nodes.primitive_color_1113.material} />
          </group>
          <group position={[4.44, -0.44, 21.92]} rotation={[-2.49, -0.8, 0.29]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_1114.geometry} material={nodes.primitive_color_1114.material} />
          </group>
          <group position={[4.38, -0.7, 21.79]} rotation={[0.44, -0.04, -0.2]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_1115.geometry} material={nodes.primitive_color_1115.material} />
          </group>
          <group position={[6.29, 0.06, 21.37]} rotation={[0.27, 0.11, 0.76]} scale={[0.2, 0.19, 0.2]}>
            <mesh geometry={nodes.primitive_color_1116.geometry} material={nodes.primitive_color_1116.material} />
          </group>
          <group position={[6.04, 0.31, 21.46]} rotation={[-0.32, 0.6, -2.17]} scale={[0.2, 0.17, 0.2]}>
            <mesh geometry={nodes.primitive_color_1117.geometry} material={nodes.primitive_color_1117.material} />
          </group>
          <group position={[6.6, -0.8, 21.46]} rotation={[2.59, 0.55, 0.16]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_1118.geometry} material={nodes.primitive_color_1118.material} />
          </group>
          <group position={[6.56, -1.06, 21.59]} rotation={[-0.46, 0.03, -0.14]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_1119.geometry} material={nodes.primitive_color_1119.material} />
          </group>
          <group position={[6.65, -0.4, 20.69]} rotation={[-1.71, -0.06, 0.05]} scale={[0.2, 0.16, 0.2]}>
            <mesh geometry={nodes.primitive_color_1120.geometry} material={nodes.primitive_color_1120.material} />
          </group>
          <group position={[6.63, -0.44, 20.4]} rotation={[1.42, -0.05, -0.05]} scale={[0.2, 0.13, 0.2]}>
            <mesh geometry={nodes.primitive_color_1121.geometry} material={nodes.primitive_color_1121.material} />
          </group>
          <group position={[-4.26, -8.18, -296.31]} />
          <group rotation={[0.25, -0.26, 0]} />
          <group rotation={[0.72, 0.5, 0]} />
        </group>
      </group>
        </group>
    )
}

function Details() {

    const snap = useSnapshot(state)
    if (snap.current === "material_0") {
        return (
            <div className="h-full md:flex md:flex-col md:justify-center font-fontVollkorn">
                <h1 className="text-3xl uppercase">Hydrogen</h1>
            </div>
        )
    }
    else if (snap.current === "material_1") {
        return (
            <div className="h-full md:flex md:flex-col md:justify-center font-fontVollkorn">
                <h1 className="text-3xl uppercase">Oxygen</h1>
            </div>
        )
    }
    else if (snap.current === "material_2") {
        return (
            <div className="h-full md:flex md:flex-col md:justify-center font-fontVollkorn">
                <h1 className="text-3xl uppercase">Carbon</h1>
            </div>
        )
    }
    else {
        return (
            <div className="h-full md:flex md:flex-col md:justify-center font-fontVollkorn">
                <h1 className="text-2xl tracking-wider">Click on diffrent parts of Poloxamers to know more</h1>
                <p className="self-center mx-8 text-xl tracking-wide text-justify font-fontVollkorn">To view the 3D model in AR, scan the QR code or click on the button below.</p>

                <div className="grid justify-center grid-cols-1 gap-2 pb-8 mx-8 md:grid-cols-2 lg:grid-cols-2">
                    <img className="flex p-6 text-6xl rounded-xl h-48 w-48" src="https://storage.echo3d.co/shiny-wave-1052/95cef84e-eec8-4731-9e00-327a152dd574.png" alt="Study QR" />
                    <a href="https://go.echo3d.co/o1tT" target="_blank" rel="noreferrer">
                        <button className="h-12 px-8 ml-8 text-base font-semibold tracking-wider text-white border rounded-full shadow-sm font-fontVollkorn mt-16 bg-red-50 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:shadow-lg">View in AR</button>
                    </a>
                </div>
            </div>
        )
    }
}

export default function Poloxamer() {
    return (
        <>
            <div className="pt-24 bg-ARbg text-white">

                <Link to="/study" className="ml-8">Go Back</Link>

                <div className="grid w-full py-10 place-items-center">
                    <h1 className="pb-2 text-5xl font-semibold tracking-wide font-carattere lg:text-6xl">
                    Poloxamer
                    </h1>
                    <div className="inline-flex h-1 bg-indigo-300 rounded-full w-72"></div>
                    <div className="font-fontVollkorn text-justify text-xl w-86 mt-2 mx-4 md:mx-44">Poloxamers are nonionic compounds that contains a large group of copolymers surfactants formed by chains of ethylene oxide block (EO) and propylene oxide (PO) (OEx–POy–OEx).</div>
                </div>

                <div className="md:grid md:grid-cols-3 md:pr-15 pr-1">

                    <div className="w-full h-screen px-4 outline-none cursor-pointer md:col-span-2 lg:block">
                        <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 50 }}>
                            <ambientLight intensity={0.7} />
                            <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
                            <Suspense fallback={null}>
                                <Model scale={0.05} />
                                <Environment preset="city" />
                                <ContactShadows rotation-x={Math.PI / 2} position={[0, -0.8, 0]} opacity={0.25} width={10} height={10} blur={1.5} far={0.8} />
                            </Suspense>
                            <OrbitControls autoRotate />
                        </Canvas>
                    </div>

                    <div className="mt-16 md:mt-0 md:col-span-1 p-4">
                        <Details />
                    </div>

                </div>

            </div>

        </>
    )
}
