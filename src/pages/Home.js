import React from 'react'
import { Link } from 'react-router-dom'
import HomeImg from "../assets/learn-home.png"

export default function Home() {

    return (
        <>
            <div className=" md:pt-24 bg-homeImg h-screen w-full">
                <div className="p-4 origin-bottom-right lg:mx-36 md:mx-8">
                    <div className="p-4 space-y-10 md:space-y-0 md:grid md:grid-cols-2">

                        <div className="pr-4 md:flex md:flex-col md:justify-center align-middle">

                            <h2 className="self-center mb-4 text-5xl font-bold tracking-wider text-indigo-800 font-carattere md:text-4xl lg:text-7xl">Learn3D</h2>

                            <p className="self-center text-xl tracking-wide text-justify font-sourceSerifPro">Learn3D is a web app where students can learn various concepts with the help of 3D and AR. So Students can understand the concepts more easily. If the concepts are understood, then learning will become easier. Moreover, students will be more attracted to learning while learning through 3D concepts.</p>

                            <Link to="/study" className="md:w-1/3">
                                <button className="p-2 px-8 mt-4 text-base font-semibold tracking-wider text-white border rounded-full shadow-sm font-sourceSerifPro md:w-full bg-red-50 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:shadow-lg ">Explore</button>
                            </Link>

                        </div>

                        <div className="h-full">
                            <img src={HomeImg} alt="img" className="w-full lg:p-10" />
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}
