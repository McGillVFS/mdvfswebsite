"use client"

import { useState } from "react"
import { useRouter } from 'next/navigation'
import Title from "../ui/Title"
import SubHeading from "../ui/SubHeading";
import ResearchPopup from "../ui/ResearchPopup";
import ImgCard from "../ui/ImgCard";
import Popup from "../ui/Popup";

export default function Projects() {
    const [isOpen, setIsOpen] = useState(false);
    const [researchPopup, setResearchPopup] = useState(null);

    const researchPopupOne = (
        <ResearchPopup 
            year={"2024-2025"}
            type={"Capstone"}
            subject={"Multi-Surface Cleaning Attachment for Drones"}
            presented_by={"William Robinson, Justin Goodman, Kaiz Dhamani, Jonah Dalfen"}
            advised_by={"Dr. Amar Sabih"}
            abstract={"This project presents a drone-mounted cleaning mechanism designed to replace manual labor in hazardous or hard-to-reach environments such as high-rise windows, rooftops, and solar panel fields. At the core of the system is a custom-designed, 3D-printed PETG container that mounts securely onto any weight-bearing drone. The container features an internal separation that creates two compartments: a larger reservoir for water and a smaller one for cleaning solution. Two diaphragm pumps, controlled by an Arduino microcontroller, manage the delivery of each liquid. An external electronics box, safely mounted beneath the container, encloses all necessary circuitry and control components. Flexible silicone tubing connects the base of each compartment to a Tee-connector, which channels the fluids to an industrial-grade flat spray nozzle. The system is lightweight, durable, and optimized for aerial stability and efficiency. By integrating compact mechanical and electronic systems, this cleaning mechanism enables drones to perform targeted spray cleaning with precision and minimal human intervention. The result is a safer, more cost-effective, and scalable solution for cleaning applications in environments that are typically dangerous, labor-intensive, or inaccessible by conventional means."}
            figures={
                [
                    {
                        src: '/research/cleaning/1.png',
                        caption: 'Figure 1: Final container prototype after bonding and spray painting '
                    },
                    {
                        src: '/research/cleaning/2.png',
                        caption: 'Figure 2: Full assembly of cleaning mechanism with hydraulics system in clear view'
                    },
                    {
                        src: '/research/cleaning/3.png',
                        caption: 'Figure 3: Exploded view of final assembly including all components'

                    },
                    {
                        src: '/research/cleaning/4.png',
                        caption: 'Figure 4: Cleaning mechanism fastened to drone\'s legs during testing'
                    }
                ]
            }
        />
    )

    const researchPopupTwo = (
        <ResearchPopup 
            year={"2024-2025"}
            type={"Capstone"}
            subject={"Wind Sensor"}
            presented_by={"Christopher Jari, David Zhang, Jiaduo Xing, Mythreya Raghav"}
            advised_by={"Dr. Dennis Giannacopoulos"}
            abstract={"The large surface area of the wings in vertical take-off and landing (VTOL) drones presents a significant challenge in controlling substantial lateral movement, making it difficult to maintain a precise and stable flight path. A straightforward solution is to rotate the drone around the z-axis so that the wings are aligned with the wind, thereby reducing lateral forces. However, in order to rotate the drone, wind direction and intensity must be determined while the drone is in flight. Therefore, this project focuses on developing a method to determine wind speed and intensity that takes the preliminary form of sensors mounted on the drone. Over the course of the winter 2025 semester, our team explored various techniques for wind speed and direction measurement. After discussions with relevant parties, we evaluated the use of pressure sensors and microphones. Initial tests were done using the built in microphones of the STM32 microcontroller, while separate tests were conducted with pressure sensors using an Arduino platform. The results indicated that pressure sensors provided more reliable and consistent data with less noise, making them a more suitable choice for real-time measurements. To test the sensor placement, a prototype of the drone was 3-D printed, allowing us to experiment with the different sensor configurations. This prototype, along with the data from the pressure sensors will serve as a foundation in implementing the system on the actual drone."}
            figures={
                [
                    {
                        src: '/research/wind/1.png',
                        caption: 'Fig 1. Code used while testing pressure sensors'
                    },
                    {
                        src: '/research/wind/2.png',
                        caption: 'Fig 2. 3D printed prototype of the drone'
                    }
                ]
            }
        />
    )
    
    return (
        <div>
            <Title text={"RESEARCH"}/>

            {/*<SubHeading text={"OUR PROJECTS"} />*/}

            <div className="flex overflow-x-auto">
                <ImgCard 
                    Index={0}
                    ImgSrc={'/research/cleaning/4.png'}
                    setIsOpen={setIsOpen}
                    Text={'Multi-Surface Cleaning Attachment'}
                    setContent={setResearchPopup}
                    content={researchPopupOne}
                />
                <ImgCard 
                    Index={0}
                    ImgSrc={'/research/wind/2.png'}
                    setIsOpen={setIsOpen}
                    Text={'Wind Sensor'}
                    setContent={setResearchPopup}
                    content={researchPopupTwo}
                />
            </div>

            {isOpen && (
                <Popup setIsOpen={setIsOpen}>
                    {researchPopup}
                </Popup>
            )}
        </div>
    )

}