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
        />
    )

    const researchPopupTwo = (
        <ResearchPopup 
            year={"2024-2025"}
            type={"Capstone"}
            subject={"Wind Sensor"}
            presented_by={"Lorem, Ipsum"}
            advised_by={"Dr. Lorem Ipsum"}
            abstract={"Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum."}
        />
    )
    
    return (
        <div>
            <Title text={"RESEARCH"}/>

            <SubHeading text={"OUR PROJECTS"} />

            <div className="flex overflow-x-auto">
                <ImgCard 
                    Index={0}
                    ImgSrc={'GnUGASHa0AA8fNW.jpeg'}
                    setIsOpen={setIsOpen}
                    Text={'Multi-Surface Cleaning Attachment'}
                    setContent={setResearchPopup}
                    content={researchPopupOne}
                />
                <ImgCard 
                    Index={0}
                    ImgSrc={'GnUGASHa0AA8fNW.jpeg'}
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