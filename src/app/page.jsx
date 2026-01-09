"use client"

import { useState, useEffect } from "react"
import { useRouter } from 'next/navigation'
import Navbar from "./ui/NavBar"
import Footer from "./ui/Footer"
import ScrollVideo from "./ui/ScrollVideo"
import ThreeDModelPopup from "./ui/3DModelPopup"
import Timeline from "./ui/Timeline"
import VideoBlock from "./ui/VideoBlock"

export default function Home() {

    const [isOpen, setIsOpen] = useState(false);
    const [modelPath, setModelPath] = useState("");

    const timelineItems = [
        {
        year: "2020-2021",
        img: "/drone_timeline/imgs/2020-2021.webp",
        model: "/drone_timeline/models/2022-2023.glb",
        },
        {
        year: "2021-2022",
        img: "/drone_timeline/imgs/2021-2022.webp",
        model: "/drone_timeline/models/2022-2023.glb",
        },
        {
        year: "2022-2023",
        img: "/drone_timeline/imgs/2022-2023.webp",
        model: "/drone_timeline/models/2022-2023.glb",
        },
        {
        year: "2023-2024",
        img: "/drone_timeline/imgs/2023-2024.webp",
        model: "/drone_timeline/models/2023-2024.glb",
        },
        {
        year: "2024-2025",
        img: "/drone_timeline/imgs/2024-2025.webp",
        model: "/drone_timeline/models/2024-2025.gltf",
        },
        {
        year: "2025-2026",
        img: "/drone_timeline/imgs/2025-2026.webp",
        model: "/drone_timeline/models/2025-2026.gltf",
        }
    ];

    useEffect(() => {
    document.title = "Home | McGill Aerial Design";
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", "Explore our projects, drones, and innovation at McGill Aerial Design.");
    }, []);
    
    return (
        <div>
            <VideoBlock src="/videos/MAD_intro_video.mp4" />

            <div className='bg-black sm:h-60'>
                <p className="text-red-500 font-inter font-extrabold text-[50px]/30 pt-5 sm:text-[175px] sm:pl-5 sm:pt-20 text-center sm:text-left" data-aos="fade-up">Our Work</p>
            </div>

            <div className="bg-black sm:h-100 h-50 flex items-center justify-center">
                {/*
                <div className="w-48 h-48 bg-blue-500" onClick={() => {
                    setModelPath("/drone_timeline/models/2024-2025.glb")
                    setIsOpen(true)}
                } />
                */}
                <Timeline timelineItems={timelineItems} setIsOpen={setIsOpen} setModelPath={setModelPath} />
            </div>

            <ScrollVideo overlay="" />

            <div className="bg-black flex justify-center items-center">
                <p className = "text-white font-inter font-regular text-[30px] sm:text-[70px] p-5 text-center" data-aos="fade-up">AMBITION. DISCOVERY.</p>
            </div>

            <div className="bg-gradient-to-b from-black to-red-600 sm:flex sm:flex-col justify-end h-[65vh] sm:h-[90vh]">
                <div className="h-44 sm:h-72" />

                <div className="sm:flex"> 
                    <p className=" text-white font-inter font-extrabold text-[175px] -tracking-wider leading-35 px-5 sm:p-12 hidden sm:block" data-aos="fade-down">
                        Follow<br />us.
                    </p>

                    <p className="text-white font-inter font-extrabold text-[70px] -tracking-wider leading-35 px-5 sm:p-12 sm:hidden flex justify-center text-center" data-aos="fade-down">
                        Follow us.
                    </p>

                
                    <div className="flex w-full items-end justify-center sm:justify-end py-2">
                    <div className="flex flex-wrap items-end p-4 sm:p-10 gap-3 sm:gap-6">
                        {/* TikTok */}
                        <div
                        className="cursor-pointer size-[18vw] max-w-[10rem] max-h-[10rem] rounded-full bg-white border-2 border-white overflow-hidden flex items-center justify-center transition-transform hover:scale-105"
                        data-aos="fade-down"
                        data-aos-delay="300"
                        onClick={() =>
                            window.open("https://www.tiktok.com/@mcgillaerialdesign", "_blank")
                        }
                        >
                        <img
                            src="/images/social_icons/Tiktok.png"
                            alt="tiktok icon"
                            className="w-3/4 h-3/4 object-contain"
                        />
                        </div>

                        {/* Instagram */}
                        <div
                        className="cursor-pointer size-[18vw] max-w-[10rem] max-h-[10rem] rounded-full bg-blue-400 border-2 border-white overflow-hidden flex items-center justify-center transition-transform hover:scale-105"
                        data-aos="fade-down"
                        data-aos-delay="450"
                        onClick={() =>
                            window.open("https://www.instagram.com/mcgillaerialdesign/", "_blank")
                        }
                        >
                        <img
                            src="/images/social_icons/Instagram.png"
                            alt="instagram icon"
                            className="w-full h-full object-contain"
                        />
                        </div>

                        {/* LinkedIn */}
                        <div
                        className="cursor-pointer size-[18vw] max-w-[10rem] max-h-[10rem] rounded-full bg-[#0274B3] border-2 border-white overflow-hidden flex items-center justify-center transition-transform hover:scale-105"
                        data-aos="fade-down"
                        data-aos-delay="600"
                        onClick={() =>
                            window.open(
                            "https://www.linkedin.com/company/mcgillmad/posts/?feedView=all",
                            "_blank"
                            )
                        }
                        >
                        <img
                            src="/images/social_icons/LinkedIn.png"
                            alt="linkedin icon"
                            className="w-[85%] h-[85%] object-contain"
                        />
                        </div>

                        {/* YouTube */}
                        <div
                        className="cursor-pointer size-[18vw] max-w-[10rem] max-h-[10rem] rounded-full bg-white border-2 border-white overflow-hidden flex items-center justify-center transition-transform hover:scale-105"
                        data-aos="fade-down"
                        data-aos-delay="750"
                        onClick={() =>
                            window.open(
                            "https://www.youtube.com/channel/UC1zR8ieSpAJ5ad1hOVOjqig",
                            "_blank"
                            )
                        }
                        >
                        <img
                            src="/images/social_icons/Youtube.png"
                            alt="youtube icon"
                            className="w-full h-full object-contain"
                        />
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