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
    const { nodes, materials } = useGLTF('/science_project_the_atom/scene.gltf')
    const [hovered, set] = useState(null)
    return (
        <group ref={group} {...props} dispose={null}
            onPointerOver={(e) => (e.stopPropagation(), set(e.object.material.name))}
            onPointerOut={(e) => e.intersections.length === 0 && set(null)}
            onPointerMissed={() => (state.current = null)}
            onPointerDown={(e) => (e.stopPropagation(), (state.current = e.object.material.name))}
        >
             <group rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[-2.05, -1.74, -0.25]}>
          <mesh geometry={nodes.Neutrons_1.geometry} material={materials['Material.002']} />
        </group>
        <group position={[0.82, 1.14, -0.07]}>
          <mesh geometry={nodes.Protons_1.geometry} material={materials['Material.004']} />
        </group>
        <group position={[-0.91, 0.91, 0.04]} rotation={[-Math.PI, 0, 0]} scale={[-6.15, 6.15, 6.15]}>
          <mesh geometry={nodes.BezierCircle_1.geometry} material={materials.BezierCircle} />
        </group>
        <group position={[26.29, 9.59, -0.17]}>
          <mesh geometry={nodes.Electrons_1.geometry} material={materials['Material.003']} />
        </group>
      </group>
        </group>
    )
}

function Details() {

    const snap = useSnapshot(state)
    if (snap.current === "Material.003") {
        return (
            <div className="h-full md:flex md:flex-col md:justify-center font-fontVollkorn">
                <h1 className="text-3xl uppercase">Electrons</h1>
            </div>
        )
    }
    else if (snap.current === "Material.002") {
        return (
            <div className="h-full md:flex md:flex-col md:justify-center font-fontVollkorn">
                <h1 className="text-3xl uppercase">Neutrons</h1>
            </div>
        )
    }
    else if (snap.current === "Material.004") {
        return (
            <div className="h-full md:flex md:flex-col md:justify-center font-fontVollkorn">
                <h1 className="text-3xl uppercase">Protons</h1>
            </div>
        )
    }
    else {
        return (
            <div className="h-full md:flex md:flex-col md:justify-center font-fontVollkorn">
                <h1 className="text-2xl tracking-wider">Click on diffrent parts of Atoms to know more</h1>
                <p className="self-center mx-8 text-xl tracking-wide text-justify font-fontVollkorn">To view the 3D model in AR, scan the QR code or click on the button below.</p>

                <div className="grid justify-center grid-cols-1 gap-2 pb-8 mx-8 md:grid-cols-2 lg:grid-cols-2">
                    <img className="flex p-6 text-6xl rounded-xl h-48 w-48" src="https://storage.echo3d.co/shiny-wave-1052/4e88cec7-935f-4d4b-a859-6ae59d6a8a55.png" alt="Study QR" />
                    <a href="https://go.echo3d.co/2KMW" target="_blank" rel="noreferrer">
                        <button className="h-12 px-8 ml-8 text-base font-semibold tracking-wider text-white border rounded-full shadow-sm font-fontVollkorn mt-16 bg-red-50 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:shadow-lg">View in AR</button>
                    </a>
                </div>
            </div>
        )
    }
    // return(
    //     <div>
    //         {snap.current}
    //     </div>
    // )
}

export default function Atom() {
    return (
        <>
            <div className="pt-24 bg-ARbg text-white">

                <Link to="/study" className="ml-8">Go Back</Link>

                <div className="grid w-full py-10 place-items-center">
                    <h1 className="pb-2 text-5xl font-semibold tracking-wide font-carattere lg:text-6xl">
                    Atom
                    </h1>
                    <div className="inline-flex h-1 bg-indigo-300 rounded-full w-72"></div>
                    <div className="font-fontVollkorn text-justify text-xl w-86 mt-2 mx-4 md:mx-44">An atom is the smallest unit of ordinary matter that forms a chemical element. Every solid, liquid, gas, and plasma is composed of neutral or ionized atoms. Atoms are extremely small, typically around 100 picometers across.</div>
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
