"use client"

import { useState } from "react"
import { useRouter } from 'next/navigation'
import Title from "../ui/Title"
import SubteamsPopup from "../ui/SubteamsPopup";
import ImgCard from "../ui/ImgCard";
import Popup from "../ui/Popup"

export default function Subteams() {
    
    const [isOpen, setIsOpen] = useState(false);
    const [popup, setPopup] = useState("");

    const AIControlsPopup = (
        <SubteamsPopup 
            title={"AI Controls"}
            project_leads={
                [
                    {
                        name: "Yijun Zhang",
                        img: "/subteams/ai_controls/yijun.jpg"
                    }
                ]
            }
            content={
                "The AI Controls Project at MDVFS spearheads the integration of cutting-edge artificial intelligence technologies to enhance the autonomous control system of the team’s drone. This project is pivotal for advancing the capabilities of the drone, enabling it to operate with increased autonomy and responsiveness. The team explores sophisticated algorithms and machine learning techniques to optimize the drone’s decision-making processes, allowing it to adapt to dynamic flight conditions and navigate complex environments effectively. The integration of AI controls aims to improve the drone’s overall performance, responsiveness to external stimuli, and its ability to execute tasks with precision. This forward-thinking project aligns with MDVFS’s commitment to staying at the forefront of technological advancements in the realm of vertical flight and competing successfully in international competitions organized by institutions like the Vertical Flight Society and the Aerial Evolution Association of Canada. His expertise and dedication have played a crucial role in advancing the project, particularly through the development and implementation of a distance detection library. Yijun Zhang’s insights and technical proficiency have significantly enhanced the capabilities of the drone’s autonomous control system, enabling precise distance measurement and fostering enhanced decision-making capabilities. His commitment to innovation has been instrumental in elevating the project’s success, and MDVFS appreciates his tireless efforts in pushing the boundaries of technology within the realm of vertical flight."
            }
        />
    )

    const PropulsionPopup = (
        <SubteamsPopup 
            title={"Propulsion Systems"}
            project_leads={
                [
                    {
                        name: "Elio Saade",
                        img: "/subteams/propulsion/elio.jpg"
                    },
                    {
                        name: "Cagri Arslan",
                        img: "/subteams/propulsion/cagri.png"
                    }
                ]
            }
            content={
                "The Propulsion System Project at MDVFS focuses on the intricate design and optimization of the drone’s propulsion system, a critical element for achieving sustainable and efficient vertical flight. This project delves into the selection and integration of propulsion components, such as motors and propellers, to maximize thrust and energy efficiency. MDVFS aims to enhance the drone’s overall performance by carefully considering factors like power distribution, weight balance, and aerodynamic considerations. Through continuous testing and refinement, the Propulsion System Project plays a crucial role in ensuring the competitiveness of MDVFS in international competitions, fostering innovation in the rapidly evolving field of vertical flight. Cagri and Elio have been developing cutting edge, multidisciplinary technologies from their first day in the team. Overall, their additions have contributed immensely to the success of the 2022-2023 design, which approved them for a 2023-2024 position as leads. Creative designs like ducted propellers, co-axial configurations and thrust confirmation with practical test stands has been key to developing new propulsion systems for the team."
            }
        />
    )

    const StructurePopup = (
        <SubteamsPopup 
            title={"Structures, Body and Wings"}
            project_leads={
                [
                    {
                        name: "Noa Garbarini",
                        img: "/subteams/structure/noa.jpg"
                    },
                    {
                        name: "Loïcia Lopez",
                        img: "/subteams/structure/loicia.png"
                    }
                ]
            }
            content={
                "The Structures, Body, and Wings Project at MDVFS undertakes the comprehensive design and development of the drone’s structural framework, body, and wings. This project is pivotal in ensuring the overall integrity, aerodynamic efficiency, and weight distribution of the drone. The team employs advanced engineering principles to optimize the design for both structural robustness and aerodynamic performance. Through detailed analysis and simulations, MDVFS aims to create a lightweight yet sturdy frame that can withstand the dynamic forces experienced during vertical flight. Innovations in materials and construction techniques are explored to enhance the drone’s overall efficiency and agility. The project aligns with MDVFS’s commitment to pushing the boundaries of technology in the field of vertical flight, contributing to the team’s success in international competitions hosted by organizations such as the Vertical Flight Society and the Aerial Evolution Association of Canada. Noa and Loïcia have been integral parts of the team over the past two years. They have designed the first vacuum-assisted resin infused glass fiber composites that the team has manufactured. Their help in the designs have been integral to the good functioning of the team. Along with their impressive design, their work has been reliable and innovative ever since they have joined the team. They have both also led the development of the first ever custom frame for the drone during the 2022-2023 design year."
            }
        />
    )

    const CFDPopup = (
        <SubteamsPopup 
            title={"CFD and FEA"}
            project_leads={
                [
                    {
                        name: "Estelle Huy",
                        img: "/subteams/structure/noa.jpg"
                    }
                ]
            }
            content={
                "The Structures, Body, and Wings Project at MDVFS undertakes the comprehensive design and development of the drone’s structural framework, body, and wings. This project is pivotal in ensuring the overall integrity, aerodynamic efficiency, and weight distribution of the drone. The team employs advanced engineering principles to optimize the design for both structural robustness and aerodynamic performance. Through detailed analysis and simulations, MDVFS aims to create a lightweight yet sturdy frame that can withstand the dynamic forces experienced during vertical flight. Innovations in materials and construction techniques are explored to enhance the drone’s overall efficiency and agility. The project aligns with MDVFS’s commitment to pushing the boundaries of technology in the field of vertical flight, contributing to the team’s success in international competitions hosted by organizations such as the Vertical Flight Society and the Aerial Evolution Association of Canada. Noa and Loïcia have been integral parts of the team over the past two years. They have designed the first vacuum-assisted resin infused glass fiber composites that the team has manufactured. Their help in the designs have been integral to the good functioning of the team. Along with their impressive design, their work has been reliable and innovative ever since they have joined the team. They have both also led the development of the first ever custom frame for the drone during the 2022-2023 design year."
            }
        />
    )

    const LandingPopup = (
        <SubteamsPopup 
            title={"Landing Gear"}
            project_leads={
                [
                    {
                        name: " Maëlle le Ménès Rego",
                        img: "/subteams/landing/maelle.jpg"
                    },
                    {
                        name: "Alexander Lyakishev",
                        img: "/subteams/landing/alex.jpg"
                    }
                ]
            }
            content={
                "The Propulsion System Project at MDVFS focuses on the intricate design and optimization of the drone’s propulsion system, a critical element for achieving sustainable and efficient vertical flight. This project delves into the selection and integration of propulsion components, such as motors and propellers, to maximize thrust and energy efficiency. MDVFS aims to enhance the drone’s overall performance by carefully considering factors like power distribution, weight balance, and aerodynamic considerations. Through continuous testing and refinement, the Propulsion System Project plays a crucial role in ensuring the competitiveness of MDVFS in international competitions, fostering innovation in the rapidly evolving field of vertical flight. Cagri and Elio have been developing cutting edge, multidisciplinary technologies from their first day in the team. Overall, their additions have contributed immensely to the success of the 2022-2023 design, which approved them for a 2023-2024 position as leads. Creative designs like ducted propellers, co-axial configurations and thrust confirmation with practical test stands has been key to developing new propulsion systems for the team."
            }
        />
    )
    
    return (
        <div>
            <Title text={"Subteams"}/>
            <div className="flex overflow-x-auto">
                <ImgCard 
                    Index={0}
                    ImgSrc={'/subteams/ai_controls/img.jpg'}
                    setIsOpen={setIsOpen}
                    Text={'AI Controls'}
                    setContent={setPopup}
                    content={AIControlsPopup}
                />
                <ImgCard 
                    Index={1}
                    ImgSrc={'/subteams/propulsion/img.webp'}
                    setIsOpen={setIsOpen}
                    Text={'Propulsion Systems'}
                    setContent={setPopup}
                    content={PropulsionPopup}
                />
                <ImgCard 
                    Index={1}
                    ImgSrc={'/subteams/structure/img.jpg'}
                    setIsOpen={setIsOpen}
                    Text={'Structures, Body and Wings'}
                    setContent={setPopup}
                    content={StructurePopup}
                />
                <ImgCard 
                    Index={1}
                    ImgSrc={'/subteams/landing/img.png'}
                    setIsOpen={setIsOpen}
                    Text={'Landing Gear'}
                    setContent={setPopup}
                    content={LandingPopup}
                />
                <ImgCard 
                    Index={1}
                    ImgSrc={'/subteams/ai_controls/img.jpg'}
                    setIsOpen={setIsOpen}
                    Text={'AI Controls'}
                    setContent={setPopup}
                    content={AIControlsPopup}
                />
                <ImgCard 
                    Index={1}
                    ImgSrc={'/subteams/ai_controls/img.jpg'}
                    setIsOpen={setIsOpen}
                    Text={'AI Controls'}
                    setContent={setPopup}
                    content={AIControlsPopup}
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