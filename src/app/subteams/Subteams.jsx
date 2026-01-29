"use client"

import { useState, useEffect } from "react"
import { useRouter } from 'next/navigation'
import Title from "../ui/Title"
import SubteamsPopup from "../ui/SubteamsPopup";
import ImgCard from "../ui/ImgCard";
import Popup from "../ui/Popup"

export default function Subteams() {
    
    const [isOpen, setIsOpen] = useState(false);
    const [popup, setPopup] = useState("");

    const AerostructuresPopup = (
        <SubteamsPopup 
            title={"Aerostructures"}
            project_leads={
                [
                    {
                        name: "Romain Tarayre",
                        img: "/subteams/aerostructures/leaders/romain.jpg"
                    },
                    {
                        name: "Junho Jin",
                        img: "/images/profile_images/default.png"
                    },
                    {
                        name: "Maximilian Newman",
                        img: "/subteams/aerostructures/leaders/max.jpg"
                    },
                    {
                        name: "Emma Lyon",
                        img: "/images/profile_images/default.png"
                    },
                    {
                        name: "Ernest Lee",
                        img: "/subteams/aerostructures/leaders/ernest.png"
                    }
                ]
            }
            content={
                "The Aerostructures team designs and builds the physical framework of the drone, including the body, wings, and other structural components. Their work ensures the aircraft is strong, lightweight, and aerodynamically efficient, while maintaining balance and stability in flight."
            }

            figures={
                [
                    {
                        src: '/subteams/aerostructures/figures/1.png',
                        caption: ''
                    },
                    {
                        src: '/subteams/aerostructures/figures/2.jpg',
                        caption: ''
                    },
                    {
                        src: '/subteams/aerostructures/figures/3.png',
                        caption: ''
                    },
                    {
                        src: '/subteams/aerostructures/figures/4.jpg',
                        caption: ''
                    },
                    {
                        src: '/subteams/aerostructures/figures/5.png',
                        caption: ''
                    },
                    {
                        src: '/subteams/aerostructures/figures/6.png',
                        caption: ''
                    },
                    {
                        src: '/subteams/aerostructures/figures/7.png',
                        caption: ''
                    }
                ]
            }
        />
    )

    const AvionicsPopup = (
        <SubteamsPopup 
            title={"Avionics"}
            project_leads={
                [
                    {
                        name: "Jiwoong Choi",
                        img: "/images/profile_images/default.png"
                    },
                    {
                        name: "Elliot Markovich",
                        img: "/images/profile_images/default.png"
                    },
                    {
                        name: "Alexander Kudinov",
                        img: "/images/profile_images/default.png"
                    },
                    {
                        name: "Amaia Pelletier",
                        img: "/subteams/avionics/leaders/amaia.png"
                    }
                ]
            }
            content={
                "The Avionics team develops the drone’s “brain,” including its software, flight computer, and onboard electronics. They integrate sensors, cameras, and navigation systems to give the drone the ability to fly autonomously and collect mission-critical data."
            }

            figures={
                [
                    {
                        src: '/subteams/avionics/figures/1.jpg',
                        caption: ''
                    },
                    {
                        src: '/subteams/avionics/figures/2.jpg',
                        caption: ''
                    },
                    {
                        src: '/subteams/avionics/figures/3.jpg',
                        caption: ''
                    },
                    {
                        src: '/subteams/avionics/figures/4.jpg',
                        caption: ''
                    },
                    {
                        src: '/subteams/avionics/figures/5.jpg',
                        caption: ''
                    }
                ]
            }
        />
    )

    const PowerPopup = (
        <SubteamsPopup 
            title={"Power"}
            project_leads={
                [
                    {
                        name: "Will Kalish",
                        img: "/images/profile_images/default.png"
                    },
                    {
                        name: "Muntasir Zaman",
                        img: "/subteams/power/leaders/muntasir.png"
                    },
                    {
                        name: "Vidush Komarraju",
                        img: "/images/profile_images/default.png"
                    }
                ]
            }
            content={
                "The Power team is responsible for selecting and integrating propulsion components such as motors, propellers, and batteries. They also design and build the power distribution board, ensuring that the drone operates with maximum thrust, endurance, and energy efficiency."
            }

            figures={
                [
                    {
                        src: '/subteams/power/figures/1.jpg',
                        caption: ''
                    },
                    {
                        src: '/subteams/power/figures/2.jpg',
                        caption: ''
                    },
                    {
                        src: '/subteams/power/figures/3.jpg',
                        caption: ''
                    },
                    {
                        src: '/subteams/power/figures/4.png',
                        caption: ''
                    },
                    {
                        src: '/subteams/power/figures/5.png',
                        caption: ''
                    }
                ]
            }
        />
    )

    const PayloadPopup = (
        <SubteamsPopup 
            title={"Payload"}
            project_leads={
                [
                    {
                        name: "Romain Tarayre",
                        img: "/subteams/aerostructures/leaders/romain.jpg"
                    }
                ]
            }
            content={
                "The Payload team focuses on the specific requirements set out by each year’s competition. This can involve designing custom systems such as cargo delivery mechanisms, pumps, or other mission-dependent components that allow the drone to perform specialized tasks."
            }
        />
    )

    const PilotingPopup = (
        <SubteamsPopup 
            title={"Piloting"}
            project_leads={
                [
                    {
                        name: "Alex Lyakishev",
                        img: "/subteams/piloting/leaders/alex.jpg"
                    }
                ]
            }
            content={
                "The Piloting team provides members with hands-on flight experience, including opportunities to earn advanced drone pilot certification. They conduct training and testing flights to ensure the drone can perform reliably during competition."
            }

            figures={
                [
                    {
                        src: '/subteams/piloting/figures/1.jpg',
                        caption: ''
                    }
                ]
            }
        />
    )

    const ManagementPopup = (
        <SubteamsPopup 
            title={"Management"}
            project_leads={
                [
                    {
                        name: "Scarbo Chan",
                        img: "/subteams/management/leaders/scarbo.png"
                    },
                    {
                        name: "Logan Innes",
                        img: "/images/profile_images/default.png"
                    }
                ]
            }
            content={
                "The Management and Social Media team handles the organizational and outreach aspects of the group. From coordinating logistics and sponsorships to running social media and promoting events, they ensure the team operates smoothly and gains visibility."
            }
        />
    )

    

    
    return (
        <div>
            <Title text={"SUBTEAMS"}/>

            <div className="grid grid-cols-1 sm:grid-cols-3">
                <ImgCard 
                    Index={0}
                    ImgSrc={'/subteams/aerostructures/figures/1.png'}
                    setIsOpen={setIsOpen}
                    Text={'Aerostructures'}
                    setContent={setPopup}
                    content={AerostructuresPopup}
                />
                <ImgCard 
                    Index={1}
                    ImgSrc={'/subteams/avionics/figures/1.jpg'}
                    setIsOpen={setIsOpen}
                    Text={'Avionics'}
                    setContent={setPopup}
                    content={AvionicsPopup}
                />
                <ImgCard 
                    Index={2}
                    ImgSrc={'/subteams/power/figures/1.jpg'}
                    setIsOpen={setIsOpen}
                    Text={'Power'}
                    setContent={setPopup}
                    content={PowerPopup}
                />
                <ImgCard 
                    Index={3}
                    ImgSrc={'/subteams/payload/1.jpg'}
                    setIsOpen={setIsOpen}
                    Text={'Payload'}
                    setContent={setPopup}
                    content={PayloadPopup}
                />
                <ImgCard 
                    Index={4}
                    ImgSrc={'/subteams/piloting/figures/1.jpg'}
                    setIsOpen={setIsOpen}
                    Text={'Piloting'}
                    setContent={setPopup}
                    content={PilotingPopup}
                />
                <ImgCard 
                    Index={5}
                    ImgSrc={'/subteams/management/figures/1.jpg'}
                    setIsOpen={setIsOpen}
                    Text={'Management & Social Media'}
                    setContent={setPopup}
                    content={ManagementPopup}
                />
            </div>

            {isOpen && (
                <Popup setIsOpen={setIsOpen}>
                    {popup}
                </Popup>
            )}
        </div>
    )

}