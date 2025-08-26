"use client"

import { useState } from "react"
import { useRouter } from 'next/navigation'
import Navbar from "./ui/Navbar"
import Footer from "./ui/Footer"
import ScrollVideo from "./ui/ScrollVideo"
import ThreeDModelPopup from "./ui/3DModelPopup"
import Timeline from "./ui/Timeline"


export default function Home() {

     const [isOpen, setIsOpen] = useState(false);
     const [modelPath, setModelPath] = useState("");
     const timelineItems = [
         "2015: Built a drone",
         "2016: Built another drone",
         "2017: Built yet another drone",
         "2018: Built yet another drone",
         "2019: Didn't build a drone (ran out of time)",
         "2020: Didn't do anything because of COVID",
     ];
    
     return (
        <div>
            <ScrollVideo overlay="McGill Drones and Vertical Flight Society" />

            <div className='bg-black'>
                <p className="text-red-500 font-inter font-extrabold text-[200px] pl-5">Our Work</p>
               
            </div>

            <div className="bg-black h-120">
                <div className="w-48 h-48 bg-blue-500" onClick={() => setIsOpen(true)} />
                <Timeline setModelPath={setModelPath} timelineItems={timelineItems} />
            </div>

            <div>
                <img src= "images/drone_temp.webp" className="w-full h-auto" alt="Drone Image"/>
            </div>

            <div className="bg-black flex justify-center items-center">
                <p className = "text-white font-inter font-regular text-[70px] p-5">AMBITION. DISCOVERY.</p>
            </div>

            <div className="bg-gradient-to-b from-black to-red-600 flex flex-col justify-end">
                <div className="h-72"></div>

                <div className="flex"> 
                    <p className="text-white font-inter font-extrabold text-[200px] -tracking-wider leading-35 p-12">
                        Follow<br />us.
                    </p>
                
                    <div className="flex w-full items-end justify-end">   
                        <div className="flex columns-4 items-end p-10 space-x-6">
                            <div className = "size-42 rounded-full bg-blue-400 border-2 border-white" onClick={() => {}} />
                            <div className = "size-42 rounded-full bg-blue-400 border-2 border-white" onClick={() => {}} />
                            <div className = "size-42 rounded-full bg-blue-400 border-2 border-white" onClick={() => {}} />
                            <div className = "size-42 rounded-full bg-blue-400 border-2 border-white" onClick={() => {}} />
                        </div>
                    </div>
                </div>
            </div>

            
            {isOpen && (
                <ThreeDModelPopup model_path={"/models/comic_drone.glb"} setIsOpen={setIsOpen} />
            )}

        </div>
    )

}