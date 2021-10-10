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
    const { nodes, materials } = useGLTF('/diamond_molecule_structure/scene.gltf')
    const [hovered, set] = useState(null)
    return (
        <group ref={group} {...props} dispose={null}
            onPointerOver={(e) => (e.stopPropagation(), set(e.object.material.name))}
            onPointerOut={(e) => e.intersections.length === 0 && set(null)}
            onPointerMissed={() => (state.current = null)}
            onPointerDown={(e) => (e.stopPropagation(), (state.current = e.object.material.name))}
        >
            <group rotation={[-Math.PI / 2, 0, 0]}>
                <group position={[18.91, 1.01, 5.9]} rotation={[-0.27, 0.6, 1.93]} />
                <group scale={[0.11, 0.11, 1.68]}>
                    <mesh geometry={nodes.Cylinder021_0.geometry} material={materials['Material.008']} />
                    <mesh geometry={nodes.Cylinder021_1.geometry} material={materials['Material.045']} />
                    <mesh geometry={nodes.Cylinder021_2.geometry} material={materials['Material.031']} />
                    <mesh geometry={nodes.Cylinder021_3.geometry} material={materials['Material.060']} />
                    <mesh geometry={nodes.Cylinder021_4.geometry} material={materials['Material.021']} />
                    <mesh geometry={nodes.Cylinder021_5.geometry} material={materials['Material.063']} />
                    <mesh geometry={nodes.Cylinder021_6.geometry} material={materials['Material.036']} />
                    <mesh geometry={nodes.Cylinder021_7.geometry} material={materials['Material.072']} />
                    <mesh geometry={nodes.Cylinder021_8.geometry} material={materials['Material.025']} />
                    <mesh geometry={nodes.Cylinder021_9.geometry} material={materials['Material.070']} />
                    <mesh geometry={nodes.Cylinder021_10.geometry} material={materials['Material.033']} />
                    <mesh geometry={nodes.Cylinder021_11.geometry} material={materials['Material.067']} />
                    <mesh geometry={nodes.Cylinder021_12.geometry} material={materials['Material.032']} />
                    <mesh geometry={nodes.Cylinder021_13.geometry} material={materials['Material.069']} />
                    <mesh geometry={nodes.Cylinder021_14.geometry} material={materials['Material.037']} />
                    <mesh geometry={nodes.Cylinder021_15.geometry} material={materials['Material.076']} />
                    <mesh geometry={nodes.Cylinder021_16.geometry} material={materials['Material.038']} />
                    <mesh geometry={nodes.Cylinder021_17.geometry} material={materials['Material.075']} />
                    <mesh geometry={nodes.Cylinder021_18.geometry} material={materials['Material.040']} />
                    <mesh geometry={nodes.Cylinder021_19.geometry} material={materials['Material.074']} />
                    <mesh geometry={nodes.Cylinder021_20.geometry} material={materials['Material.028']} />
                    <mesh geometry={nodes.Cylinder021_21.geometry} material={materials['Material.068']} />
                    <mesh geometry={nodes.Cylinder021_22.geometry} material={materials['Material.039']} />
                    <mesh geometry={nodes.Cylinder021_23.geometry} material={materials['Material.073']} />
                    <mesh geometry={nodes.Cylinder021_24.geometry} material={materials['Material.027']} />
                    <mesh geometry={nodes.Cylinder021_25.geometry} material={materials['Material.055']} />
                    <mesh geometry={nodes.Cylinder021_26.geometry} material={materials['Material.034']} />
                    <mesh geometry={nodes.Cylinder021_27.geometry} material={materials['Material.077']} />
                    <mesh geometry={nodes.Cylinder021_28.geometry} material={materials['Material.023']} />
                    <mesh geometry={nodes.Cylinder021_29.geometry} material={materials['Material.071']} />
                    <mesh geometry={nodes.Cylinder021_30.geometry} material={materials['Material.013']} />
                    <mesh geometry={nodes.Cylinder021_31.geometry} material={materials['Material.051']} />
                    <mesh geometry={nodes.Cylinder021_32.geometry} material={materials['Material.024']} />
                    <mesh geometry={nodes.Cylinder021_33.geometry} material={materials['Material.062']} />
                    <mesh geometry={nodes.Cylinder021_34.geometry} material={materials['Material.035']} />
                    <mesh geometry={nodes.Cylinder021_35.geometry} material={materials['Material.078']} />
                    <mesh geometry={nodes.Cylinder021_36.geometry} material={materials['Material.022']} />
                    <mesh geometry={nodes.Cylinder021_37.geometry} material={materials['Material.065']} />
                    <mesh geometry={nodes.Cylinder021_38.geometry} material={materials['Material.011']} />
                    <mesh geometry={nodes.Cylinder021_39.geometry} material={materials['Material.048']} />
                    <mesh geometry={nodes.Cylinder021_40.geometry} material={materials['Material.007']} />
                    <mesh geometry={nodes.Cylinder021_41.geometry} material={materials['Material.047']} />
                    <mesh geometry={nodes.Cylinder021_42.geometry} material={materials['Material.001']} />
                    <mesh geometry={nodes.Cylinder021_43.geometry} material={materials['Material.002']} />
                    <mesh geometry={nodes.Cylinder021_44.geometry} material={materials['Material.014']} />
                    <mesh geometry={nodes.Cylinder021_45.geometry} material={materials['Material.049']} />
                    <mesh geometry={nodes.Cylinder021_46.geometry} material={materials['Material.017']} />
                    <mesh geometry={nodes.Cylinder021_47.geometry} material={materials['Material.059']} />
                    <mesh geometry={nodes.Cylinder021_48.geometry} material={materials['Material.029']} />
                    <mesh geometry={nodes.Cylinder021_49.geometry} material={materials['Material.066']} />
                    <mesh geometry={nodes.Cylinder021_50.geometry} material={materials['Material.030']} />
                    <mesh geometry={nodes.Cylinder021_51.geometry} material={materials['Material.061']} />
                    <mesh geometry={nodes.Cylinder021_52.geometry} material={materials['Material.041']} />
                    <mesh geometry={nodes.Cylinder021_53.geometry} material={materials['Material.042']} />
                    <mesh geometry={nodes.Cylinder021_54.geometry} material={materials['Material.015']} />
                    <mesh geometry={nodes.Cylinder021_55.geometry} material={materials['Material.052']} />
                    <mesh geometry={nodes.Cylinder021_56.geometry} material={materials['Material.006']} />
                    <mesh geometry={nodes.Cylinder021_57.geometry} material={materials['Material.044']} />
                    <mesh geometry={nodes.Cylinder021_58.geometry} material={materials['Material.020']} />
                    <mesh geometry={nodes.Cylinder021_59.geometry} material={materials['Material.056']} />
                    <mesh geometry={nodes.Cylinder021_60.geometry} material={materials['Material.019']} />
                    <mesh geometry={nodes.Cylinder021_61.geometry} material={materials['Material.057']} />
                    <mesh geometry={nodes.Cylinder021_62.geometry} material={materials['Material.018']} />
                    <mesh geometry={nodes.Cylinder021_63.geometry} material={materials['Material.058']} />
                    <mesh geometry={nodes.Cylinder021_64.geometry} material={materials['Material.026']} />
                    <mesh geometry={nodes.Cylinder021_65.geometry} material={materials['Material.064']} />
                    <mesh geometry={nodes.Cylinder021_66.geometry} material={materials['Material.012']} />
                    <mesh geometry={nodes.Cylinder021_67.geometry} material={materials['Material.046']} />
                    <mesh geometry={nodes.Cylinder021_68.geometry} material={materials['Material.010']} />
                    <mesh geometry={nodes.Cylinder021_69.geometry} material={materials['Material.050']} />
                    <mesh geometry={nodes.Cylinder021_70.geometry} material={materials['Material.009']} />
                    <mesh geometry={nodes.Cylinder021_71.geometry} material={materials['Material.053']} />
                    <mesh geometry={nodes.Cylinder021_72.geometry} material={materials['Material.005']} />
                    <mesh geometry={nodes.Cylinder021_73.geometry} material={materials['Material.043']} />
                    <mesh geometry={nodes.Cylinder021_74.geometry} material={materials['Material.016']} />
                    <mesh geometry={nodes.Cylinder021_75.geometry} material={materials['Material.054']} />
                </group>
            </group>
        </group>
    )
}

function Details() {
    return (
        <div className="h-full md:flex md:flex-col md:justify-center font-fontVollkorn">
            <p className="self-center mx-8 text-xl tracking-wide text-justify font-fontVollkorn">To view the 3D model in AR, scan the QR code or click on the button below.</p>

            <div className="grid justify-center grid-cols-1 gap-2 pb-8 mx-8 md:grid-cols-2 lg:grid-cols-2">
                <img className="flex p-6 text-6xl rounded-xl h-48 w-48" src="https://storage.echoar.xyz/wispy-violet-4999/95fa00e3-8d8c-4e25-9143-a31944f68663" alt="Study QR" />
                <a href="https://go.echoar.xyz/FwfR" target="_blank" rel="noreferrer">
                    <button className="h-12 px-8 ml-8 text-base font-semibold tracking-wider text-white border rounded-full shadow-sm font-fontVollkorn mt-16 bg-red-50 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:shadow-lg">View in AR</button>
                </a>
            </div>
        </div>
    )
}

export default function Diamond() {
    return (
        <>
            <div className="pt-24 bg-ARbg text-white">

                <Link to="/study" className="ml-8">Go Back</Link>

                <div className="grid w-full py-10 place-items-center">
                    <h1 className="pb-2 text-5xl font-semibold tracking-wide font-carattere lg:text-6xl">
                    Diamond Molecule Structure
                    </h1>
                    <div className="inline-flex h-1 bg-indigo-300 rounded-full w-96"></div>
                    <div className="font-fontVollkorn text-justify text-xl w-86 mt-2 mx-4 md:mx-44">Diamond consists of a 3 – dimensional structure of carbon network. The carbon atoms are sp3 hybridized and form a tetrahedral geometry. Each carbon atom is linked with four other carbon atoms which are again linked with four carbons, which forms a network. These carbons are linked together with covalent bonds.</div>
                </div>

                <div className="md:grid md:grid-cols-3 md:pr-15 pr-1">

                    <div className="w-full h-screen px-4 outline-none cursor-pointer md:col-span-2 lg:block">
                        <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 50 }}>
                            <ambientLight intensity={0.7} />
                            <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
                            <Suspense fallback={null}>
                                <Model scale={0.1} />
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
