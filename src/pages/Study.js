import React from 'react'
import { Link } from "react-router-dom"
import PoloxamerImg from '../assets/Poloxamer.png'
import AtomImg from "../assets/Atom.jpeg"
import VolcanoImg from "../assets/Volcano.jpeg"
import DiamondStructImg from "../assets/DiamondStructure.jpg"
import DichlorohexaneImg from "../assets/2,3 Dichlorohexane.jpeg"

export default function Study() {
    return (
        <div className="pt-16 bg-homeImg">
            <div className="grid w-full py-10 place-items-center text-center">
                <h1 className="pb-2 text-5xl font-semibold tracking-wide font-carattere lg:text-6xl">
                    Study about different topics
                </h1>
                <div className="inline-flex h-1 bg-indigo-500 rounded-full w-96"></div>
            </div>

            <div className="flex flex-wrap flex-col-2 justify-around w-full px-16 py-8">

                <Link to='/poloxamer'>
                    <div className="m-8">
                        <div className="w-72 h-72 cursor-pointer transition duration-500 transform hover:scale-105">
                            <img className="pb-8 border-4 bg-white border-indigo-500 rounded-lg" alt="" src=
                                {PoloxamerImg} />
                            <div className="grid place-content-center mx-1 -mt-8 text-xl font-semibold text-gray-900 bg-homeImg font-sourceSerifPro">Poloxamer</div>
                        </div>
                    </div>
                </Link>

                <Link to='/atom'>
                    <div className="m-8">
                        <div className="w-72 h-72 cursor-pointer transition duration-500 transform hover:scale-105">
                            <img className="pb-8 border-4 bg-white border-indigo-500 rounded-lg" alt="" src=
                                {AtomImg} />
                            <div className="grid place-content-center mx-1 -mt-8 text-xl font-semibold text-gray-900 bg-homeImg font-sourceSerifPro">Atom</div>
                        </div>
                    </div>
                </Link>

                <Link to='/volcano'>
                    <div className="m-8">
                        <div className="w-72 h-72 cursor-pointer transition duration-500 transform hover:scale-105">
                            <img className="pb-8 border-4 bg-white border-indigo-500 rounded-lg" alt="" src=
                                {VolcanoImg} />
                            <div className="grid place-content-center mx-1 -mt-8 text-xl font-semibold text-gray-900 bg-homeImg font-sourceSerifPro">Volcano</div>
                        </div>
                    </div>
                </Link>

                <Link to='/diamondmolecule'>
                    <div className="m-8">
                        <div className="w-72 h-72 cursor-pointer transition duration-500 transform hover:scale-105">
                            <img className="pb-8 border-4 bg-white border-indigo-500 rounded-lg" alt="" src=
                                {DiamondStructImg} />
                            <div className="grid place-content-center mx-1 -mt-8 text-xl font-semibold text-gray-900 bg-homeImg font-sourceSerifPro">Diamond Molecule Structure</div>
                        </div>
                    </div>
                </Link>

                <Link to='/dichlorohexane'>
                    <div className="m-8">
                        <div className="w-72 h-72 cursor-pointer transition duration-500 transform hover:scale-105">
                            <img className="pb-8 border-4 bg-white border-indigo-500 rounded-lg" alt="" src=
                                {DichlorohexaneImg} />
                            <div className="grid place-content-center mx-1 -mt-8 text-xl font-semibold text-gray-900 bg-homeImg font-sourceSerifPro">2,3 Dichlorohexane</div>
                        </div>
                    </div>
                </Link>

            </div>
        </div>
    )
}
