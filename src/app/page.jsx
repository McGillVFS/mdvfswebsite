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
        {
        year: "2024-2025",
        img: "/drone_timeline/imgs/2024-2025.webp",
        model: "/drone_timeline/models/2024-2025.gltf",
        },
        {
        year: "2025-2026",
        img: "/drone_timeline/imgs/2025-2026.webp",
        model: "/drone_timeline/models/2025-2026.gltf",
        },
        {
        year: "TBD",
        img: "/drone_timeline/imgs/2024-2025.webp",
        model: "/drone_timeline/models/2024-2025.gltf",
        },
        {
        year: "TBD",
        img: "/drone_timeline/imgs/2024-2025.webp",
        model: "/drone_timeline/models/2024-2025.gltf",
        },
        {
        year: "TBD",
        img: "/drone_timeline/imgs/2024-2025.webp",
        model: "/drone_timeline/models/2024-2025.gltf",
        }
    ];
    
    return (
        <div>
            <ScrollVideo overlay="McGill Drones and Vertical Flight Society" />

            <div className='bg-black h-60'>
                <p className="text-red-500 font-inter font-extrabold text-[200px] pl-5" data-aos="fade-up">Our Work</p>
               
            </div>

            <div className="bg-black h-100">
                {/*
                <div className="w-48 h-48 bg-blue-500" onClick={() => {
                    setModelPath("/drone_timeline/models/2024-2025.glb")
                    setIsOpen(true)}
                } />
                */}
                <Timeline timelineItems={timelineItems} setIsOpen={setIsOpen} setModelPath={setModelPath} />
            </div>

            <div>
                <img src= "images/drone_temp.webp" className="w-full h-auto" alt="Drone Image"/>
            </div>

            <div className="bg-black flex justify-center items-center">
                <p className = "text-white font-inter font-regular text-[70px] p-5" data-aos="fade-up">AMBITION. DISCOVERY.</p>
            </div>

            <div className="bg-gradient-to-b from-black to-red-600 flex flex-col justify-end">
                <div className="h-72"></div>

                <div className="flex"> 
                    <p className="text-white font-inter font-extrabold text-[200px] -tracking-wider leading-35 p-12" data-aos="fade-down">
                        Follow<br />us.
                    </p>
                
                    <div className="flex w-full items-end justify-end">   
                        <div className="flex columns-4 items-end p-10 space-x-6">
                            <div className = "cursor-pointer size-40 rounded-full bg-white border-2 border-white overflow-hidden flex items-center justify-center hover:scale-105" data-aos="fade-down" data-aos-delay="300" onClick={() => window.open("https://www.tiktok.com/explore", "_blank")}>
                                <img src="/images/social_icons/Tiktok.png" alt="tiktok icon" className="w-3/4 h-3/4 object-contain"/>
                            </div>
                            <div className = "cursor-pointer size-40 rounded-full bg-blue-400 border-2 border-white overflow-hidden flex items-center justify-center hover:scale-105" data-aos="fade-down" data-aos-delay="450" onClick={() => window.open("https://www.instagram.com/mcgill_mdvfs/?hl=en", "_blank")}>
                                <img src="/images/social_icons/Instagram.png" alt="instagram icon" className="w-full h-full object-contain"/>
                            </div>
                            <div className = "cursor-pointer size-40 rounded-full bg-[#0274B3] border-2 border-white overflow-hidden flex items-center justify-center hover:scale-105" data-aos="fade-down" data-aos-delay="600" onClick={() => window.open("https://www.linkedin.com/company/mcgillmad/posts/?feedView=all", "_blank")}>
                                <img src="/images/social_icons/LinkedIn.png" alt="linkedin icon" className="w-7/8 h-7/8 object-contain"/>     
                            </div>
                            <div className = "cursor-pointer size-40 rounded-full bg-white border-2 border-white overflow-hidden flex items-center justify-center hover:scale-105" data-aos="fade-down" data-aos-delay="750" onClick={() => window.open("https://www.youtube.com/channel/UC1zR8ieSpAJ5ad1hOVOjqig", "_blank")}>
                                <img src="/images/social_icons/Youtube.png" alt="youtube icon" className="w-full h-full object-contain"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
            {isOpen && (
                <ThreeDModelPopup model_path={modelPath} setIsOpen={setIsOpen} />
            )}

            

        </div>
    )

}