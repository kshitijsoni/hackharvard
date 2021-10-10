/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Michael Aristov (https://sketchfab.com/Michael.Aristov)
license: CC-BY-SA-4.0 (http://creativecommons.org/licenses/by-sa/4.0/)
source: https://sketchfab.com/3d-models/structures-of-23-dichlorohexane-141349f633944f79a2794cfae0ef9ec9
title: Structures of 2,3-dichlorohexane
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/scene.gltf')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0, 1.42, -1.4]} rotation={[-Math.PI, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[-23.28, 0.01, 0]} rotation={[0, -0.25, 0]} scale={0.42}>
            <mesh geometry={nodes.Object_74.geometry} material={materials['material_1.046']} />
            <mesh geometry={nodes.Object_75.geometry} material={materials['material_0.010']} />
            <mesh geometry={nodes.Object_76.geometry} material={materials['material_1.047']} />
            <mesh geometry={nodes.Object_77.geometry} material={materials['material_1.048']} />
            <mesh geometry={nodes.Object_78.geometry} material={materials['material_1.049']} />
            <mesh geometry={nodes.Object_79.geometry} material={materials['material_2.010']} />
            <mesh geometry={nodes.Object_80.geometry} material={materials['material_1.050']} />
          </group>
          <group name="subnode_0007_31" position={[-13.38, 0.01, 0]} rotation={[0, -0.25, 0]} scale={0.42}>
            <mesh geometry={nodes.Object_82.geometry} material={materials['material_1.055']} />
            <mesh geometry={nodes.Object_83.geometry} material={materials['material_0.011']} />
            <mesh geometry={nodes.Object_84.geometry} material={materials['material_1.054']} />
            <mesh geometry={nodes.Object_85.geometry} material={materials['material_1.053']} />
            <mesh geometry={nodes.Object_86.geometry} material={materials['material_1.052']} />
            <mesh geometry={nodes.Object_87.geometry} material={materials['material_2.011']} />
            <mesh geometry={nodes.Object_88.geometry} material={materials['material_1.051']} />
          </group>
          <group position={[23.34, 0.01, 0]} rotation={[0, 0.25, -Math.PI]} scale={[0.42, 0.42, 0.42]}>
            <mesh geometry={nodes.Object_4.geometry} material={materials['material_1.060']} />
            <mesh geometry={nodes.Object_5.geometry} material={materials['material_0.012']} />
            <mesh geometry={nodes.Object_6.geometry} material={materials['material_1.059']} />
            <mesh geometry={nodes.Object_7.geometry} material={materials['material_2.012']} />
            <mesh geometry={nodes.Object_8.geometry} material={materials['material_1.058']} />
            <mesh geometry={nodes.Object_9.geometry} material={materials['material_1.057']} />
            <mesh geometry={nodes.Object_10.geometry} material={materials['material_1.056']} />
          </group>
          <group position={[-23.28, 0.01, 0]} rotation={[0, -0.25, 0]} scale={[0.42, 0.42, 0.42]}>
            <mesh geometry={nodes.Object_12.geometry} material={materials['material_1.015']} />
            <mesh geometry={nodes.Object_13.geometry} material={materials['material_0.003']} />
            <mesh geometry={nodes.Object_14.geometry} material={materials['material_1.011']} />
            <mesh geometry={nodes.Object_15.geometry} material={materials['material_2.003']} />
            <mesh geometry={nodes.Object_16.geometry} material={materials['material_1.014']} />
            <mesh geometry={nodes.Object_17.geometry} material={materials['material_1.013']} />
            <mesh geometry={nodes.Object_18.geometry} material={materials['material_1.012']} />
          </group>
          <group position={[-13.38, 0.01, 0]} rotation={[0, -0.25, 0]} scale={[0.42, 0.42, 0.42]}>
            <mesh geometry={nodes.Object_20.geometry} material={materials['material_1.030']} />
            <mesh geometry={nodes.Object_21.geometry} material={materials['material_0.006']} />
            <mesh geometry={nodes.Object_22.geometry} material={materials['material_1.029']} />
            <mesh geometry={nodes.Object_23.geometry} material={materials['material_1.028']} />
            <mesh geometry={nodes.Object_24.geometry} material={materials['material_1.027']} />
            <mesh geometry={nodes.Object_25.geometry} material={materials['material_2.006']} />
            <mesh geometry={nodes.Object_26.geometry} material={materials['material_1.026']} />
          </group>
          <group position={[-3.13, 0.01, 0]} rotation={[0, -0.25, -Math.PI]} scale={[-0.42, 0.42, 0.42]}>
            <mesh geometry={nodes.Object_28.geometry} material={materials['material_1.040']} />
            <mesh geometry={nodes.Object_29.geometry} material={materials['material_0.008']} />
            <mesh geometry={nodes.Object_30.geometry} material={materials['material_1.039']} />
            <mesh geometry={nodes.Object_31.geometry} material={materials['material_1.038']} />
            <mesh geometry={nodes.Object_32.geometry} material={materials['material_1.037']} />
            <mesh geometry={nodes.Object_33.geometry} material={materials['material_2.008']} />
            <mesh geometry={nodes.Object_34.geometry} material={materials['material_1.036']} />
          </group>
          <group position={[-20.05, 0.05, -4.91]} scale={[1, 0.1, 1]}>
            <mesh geometry={nodes.Object_36.geometry} material={nodes.Object_36.material} />
          </group>
          <group position={[-10.05, 0.05, -4.91]} scale={[1, 0.1, 1]}>
            <mesh geometry={nodes.Object_38.geometry} material={nodes.Object_38.material} />
          </group>
          <group position={[-0.04, 0.05, -4.91]} scale={[1, 0.1, 1]}>
            <mesh geometry={nodes.Object_40.geometry} material={nodes.Object_40.material} />
          </group>
          <group position={[9.96, 0.05, -4.91]} scale={[1, 0.1, 1]}>
            <mesh geometry={nodes.Object_42.geometry} material={nodes.Object_42.material} />
          </group>
          <group position={[19.98, 0.05, -4.91]} scale={[1, 0.1, 1]}>
            <mesh geometry={nodes.Object_44.geometry} material={nodes.Object_44.material} />
          </group>
          <group position={[13.32, 0.01, 0]} rotation={[-Math.PI, 0.25, -Math.PI]} scale={[0.43, 0.42, 0.42]}>
            <mesh geometry={nodes.Object_46.geometry} material={materials['material_1.045']} />
            <mesh geometry={nodes.Object_47.geometry} material={materials['material_0.009']} />
            <mesh geometry={nodes.Object_48.geometry} material={materials['material_1.044']} />
            <mesh geometry={nodes.Object_49.geometry} material={materials['material_1.043']} />
            <mesh geometry={nodes.Object_50.geometry} material={materials['material_1.042']} />
            <mesh geometry={nodes.Object_51.geometry} material={materials['material_2.009']} />
            <mesh geometry={nodes.Object_52.geometry} material={materials['material_1.041']} />
          </group>
          <group position={[-20.05, -0.07, -5.27]} rotation={[-Math.PI, 0, -Math.PI]}>
            <mesh geometry={nodes.Object_54.geometry} material={materials['Material.001']} />
          </group>
          <group position={[-20.05, 0.2, -5.27]} rotation={[-Math.PI, 0, -Math.PI]}>
            <mesh geometry={nodes.Object_56.geometry} material={materials['Material.002']} />
          </group>
          <group position={[-10.05, -0.07, -5.27]} rotation={[Math.PI, 0, 0]}>
            <mesh geometry={nodes.Object_58.geometry} material={materials['Material.004']} />
          </group>
          <group position={[-10.05, 0.2, -5.27]} rotation={[-Math.PI, 0, -Math.PI]}>
            <mesh geometry={nodes.Object_60.geometry} material={materials['Material.003']} />
          </group>
          <group position={[-0.05, 0.2, -5.27]} rotation={[-Math.PI, 0, -Math.PI]}>
            <mesh geometry={nodes.Object_62.geometry} material={materials['Material.006']} />
          </group>
          <group position={[-0.05, -0.07, -5.27]} rotation={[Math.PI, 0, 0]}>
            <mesh geometry={nodes.Object_64.geometry} material={materials['Material.005']} />
          </group>
          <group position={[9.95, -0.07, -5.27]} rotation={[Math.PI, 0, 0]}>
            <mesh geometry={nodes.Object_66.geometry} material={materials['Material.008']} />
          </group>
          <group position={[9.95, 0.2, -5.27]} rotation={[-Math.PI, 0, -Math.PI]}>
            <mesh geometry={nodes.Object_68.geometry} material={materials['Material.007']} />
          </group>
          <group position={[19.95, 0.2, -5.27]} rotation={[-Math.PI, 0, -Math.PI]}>
            <mesh geometry={nodes.Object_70.geometry} material={materials['Material.010']} />
          </group>
          <group position={[19.95, -0.07, -5.27]} rotation={[Math.PI, 0, 0]}>
            <mesh geometry={nodes.Object_72.geometry} material={materials['Material.009']} />
          </group>
          <group position={[23.2, 0.01, 0]} rotation={[0, 0.25, -Math.PI]} scale={[0.42, 0.42, 0.42]}>
            <group position={[3.49, -0.64, 0.57]}>
              <mesh geometry={nodes.Object_98.geometry} material={nodes.Object_98.material} />
              <mesh geometry={nodes.Object_99.geometry} material={nodes.Object_99.material} />
              <mesh geometry={nodes.Object_100.geometry} material={nodes.Object_100.material} />
            </group>
            <mesh geometry={nodes.Object_90.geometry} material={nodes.Object_90.material} />
            <mesh geometry={nodes.Object_91.geometry} material={nodes.Object_91.material} />
            <mesh geometry={nodes.Object_92.geometry} material={nodes.Object_92.material} />
            <mesh geometry={nodes.Object_93.geometry} material={nodes.Object_93.material} />
            <mesh geometry={nodes.Object_94.geometry} material={nodes.Object_94.material} />
            <mesh geometry={nodes.Object_95.geometry} material={nodes.Object_95.material} />
            <mesh geometry={nodes.Object_96.geometry} material={nodes.Object_96.material} />
          </group>
          <group position={[2.34, 0.15, -0.96]} scale={0.43}>
            <mesh geometry={nodes.Object_102.geometry} material={nodes.Object_102.material} />
            <mesh geometry={nodes.Object_103.geometry} material={nodes.Object_103.material} />
            <mesh geometry={nodes.Object_104.geometry} material={nodes.Object_104.material} />
          </group>
          <group position={[3.81, -0.29, -0.87]} scale={0.43}>
            <mesh geometry={nodes.Object_106.geometry} material={nodes.Object_106.material} />
            <mesh geometry={nodes.Object_107.geometry} material={nodes.Object_107.material} />
            <mesh geometry={nodes.Object_108.geometry} material={nodes.Object_108.material} />
            <mesh geometry={nodes.Object_109.geometry} material={nodes.Object_109.material} />
          </group>
          <group position={[4.57, 0.27, 0.33]} scale={0.43}>
            <mesh geometry={nodes.Object_111.geometry} material={nodes.Object_111.material} />
            <mesh geometry={nodes.Object_112.geometry} material={nodes.Object_112.material} />
            <mesh geometry={nodes.Object_113.geometry} material={nodes.Object_113.material} />
            <mesh geometry={nodes.Object_114.geometry} material={nodes.Object_114.material} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')
