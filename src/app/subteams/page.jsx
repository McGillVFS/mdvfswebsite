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
                        name: " Noa Garbarini",
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

    const LandingPopup = (
        <SubteamsPopup 
            title={"Landing Gear"}
            project_leads={
                [
                    {
                        name: "Maëlle le Ménès Rego",
                        img: "/subteams/landing/maelle.jpg"
                    },
                    {
                        name: "Alexander Lyakishev",
                        img: "/subteams/landing/alex.jpg"
                    }
                ]
            }
            content={
                "The Landing Gear Project at MDVFS focuses on the design and optimization of the landing gear system for the team’s drone. This essential component plays a critical role in ensuring safe takeoffs, landings, and overall stability during flight operations. The project involves detailed engineering analysis to determine the optimal configuration, materials, and structural integrity of the landing gear. Factors such as weight distribution, impact resistance, and ease of deployment are carefully considered to enhance the overall performance of the drone. The team collaborates on developing innovative solutions, incorporating cutting-edge technologies and materials to improve the reliability and functionality of the landing gear. By addressing the unique challenges associated with vertical flight, MDVFS aims to contribute to the advancement of drone technology and secure a competitive edge in international competitions organized by institutions like the Vertical Flight Society and the Aerial Evolution Association of Canada. Maëlle and Alexander have been integral to all parts of the team. Their designs have been the first student researched and developed landing gear design in not only the team’s history, but all engineering design teams at McGill. Maëlle has been incredibly reliable not only through her designs, but also through her participation in the competitions, where she has singlehandedly repaired the wings of the drone a day before the fly-off. Alexander has also been just as much of an asset, where his work has given multiple bonuses and interest in international competitions."
            }
        />
    )

    const CFDPopup = (
        <SubteamsPopup 
            title={"Structures, Body and Wings"}
            project_leads={
                [
                    {
                        name: "Estelle Huy",
                        img: "/subteams/cfd/estelle.png"
                    },
                ]
            }
            content={
                "The CFD and FEA Project at MDVFS strategically employs both OpenVSP and NX’s Finite Element Analysis (FEA) tools to enhance the simulation and analysis aspects of the team’s drone designs. OpenVSP, an open-source parametric aircraft geometry tool, facilitates the creation and modification of detailed 3D models, contributing to comprehensive aerodynamic analyses. Simultaneously, NX’s FEA capabilities play a crucial role in assessing the structural integrity and mechanical behavior of the drone components. This dual approach, integrating both OpenVSP and NX’s FEA tools, ensures a thorough evaluation of the drones’ performance in terms of aerodynamics and structural stability. The team’s commitment to utilizing advanced software tools aligns with its pursuit of success in international vertical flight competitions, organized by institutions such as the Vertical Flight Society and the Aerial Evolution Association of Canada. Estelle has been an integral part of not only the CFD and FEA projects, but also the team as a whole. Supporting the whole aerostructures team with numerical confirmation of designs, Estelle has been incredibly helpful in every aspect of manufacturing. Her work has been integral to the development of the team to what it is today."
            }
        />
    )

    const FPVPopup = (
        <SubteamsPopup 
            title={"FPV System"}
            project_leads={
                [
                    {
                        name: "Shiyuan Qiao",
                        img: "/subteams/fpv/shiyuan.jpg"
                    },
                ]
            }
            content={
                "The FPV System Project at MDVFS focuses on the development and integration of First Person View (FPV) systems into the team’s drone technology. This project is crucial for enhancing the team’s capabilities in real-time drone piloting and remote operation. The FPV system allows operators to experience a live feed from the drone’s perspective, enabling precise control and navigation. The project involves exploring state-of-the-art FPV technologies, selecting optimal hardware and software components, and integrating them seamlessly into the drone’s overall system architecture. By incorporating a robust FPV system, MDVFS aims to improve the pilot’s situational awareness, responsiveness, and overall control during flight missions, contributing to the team’s success in international vertical flight competitions. This initiative aligns with MDVFS’s commitment to staying at the forefront of technological advancements in the field of drone development. Shiyuan has led the development of the first FPV system in the team’s history. She has been an exemplary lead and an inspiration to her new recruits as an engineer. With her help, the team has had numerous improvements in the video transmission, FPV headset and on-screen-display categories."
            }
        />
    )

    const PowerPopup = (
        <SubteamsPopup 
            title={"Power Management"}
            project_leads={
                [
                    {
                        name: "Zachary Tremblay",
                        img: "/subteams/power/zachary.jpg"
                    },
                ]
            }
            content={
                "The Power Management Project at MDVFS is dedicated to optimizing drone efficiency through advanced power management solutions, including the exploration of solar panels and hydrogen fuel cells. This initiative involves researching cutting-edge power storage technologies, implementing intelligent power distribution systems, and refining energy consumption profiles. By enhancing power control and distribution, the team aims to extend flight duration, improve system resilience, and compete effectively in international vertical flight competitions. This project aligns with MDVFS’s commitment to pushing the boundaries of sustainable vertical flight technology."
            }
        />
    )

    const PilotingPopup = (
        <SubteamsPopup 
            title={"Piloting"}
            project_leads={
                [
                    {
                        name: "Zachary Tremblay",
                        img: "/subteams/power/zachary.jpg"
                    },
                ]
            }
            content={
                "The Piloting Project at MDVFS stands as a crucial initiative geared towards advancing the team’s capabilities in drone operation and control. This project focuses on the development of proficient piloting skills and strategies, contributing to the successful execution of MDVFS’s drone missions in international competitions. The team recognizes the significance of skilled drone pilots in ensuring optimal performance during flight tests and competitive events. The Piloting Project involves comprehensive training programs, including the acquisition of piloting licenses and simulator-based exercises, to enhance the competency of team members in navigating and maneuvering the drones effectively. This initiative aligns with the team’s broader goal of integrating all facets of engineering into a single, high-performance drone that proudly represents McGill University on the international stage. Zachary Tremblay earned his basic operations and advanced license for Remotely Piloted Aircraft System (RPAS) and has been the team’s pilot for the 2022-2023 competition. With this experience in tailsitter drone piloting, he has been leading a new generation of pilots to compete in the 2023-2024 competitions organized with the team."
            }
        />
    )

    const FinancialsPopup = (
        <SubteamsPopup 
            title={"Financials"}
            project_leads={
                [
                    {
                        name: "Finlay Charlesworth",
                        img: "/subteams/financials/finlay.png"
                    },
                    {
                        name: "Scarbo Chan",
                        img: "/subteams/financials/scarbo.png"
                    },
                ]
            }
            content={
                "The Financials Project Team at MDVFS plays a pivotal role in managing and optimizing the financial aspects of the organization. This team is responsible for overseeing budgets, expenses, and revenue streams, ensuring the efficient allocation of resources for various projects and operational needs. With a focus on transparency and accountability, the Financials Project Team collaborates closely with external sponsors and funding sources, seeking opportunities to secure financial support for the team’s initiatives. Their meticulous financial planning and management contribute to the overall sustainability and growth of MDVFS, facilitating the successful execution of innovative projects and participation in international competitions within the vertical flight community. Scarbo and Finlay have both contributed immensely since their arrival in the team. Their impact has been felt through a dramatic increase in revenue, organization of budgets and classification of expenses. Without their dedication, the team would not have grown to the heights that it has in one short year."
            }
        />
    )
    
    return (
        <div>
            <Title text={"SUBTEAMS"}/>
            {/*<div>
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
            </div>
            <div className="flex overflow-x-auto">
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
                    ImgSrc={'/subteams/cfd/img.png'}
                    setIsOpen={setIsOpen}
                    Text={'CFD and FEA'}
                    setContent={setPopup}
                    content={CFDPopup}
                />
                <ImgCard 
                    Index={1}
                    ImgSrc={'/subteams/fpv/img.png'}
                    setIsOpen={setIsOpen}
                    Text={'FPV System'}
                    setContent={setPopup}
                    content={FPVPopup}
                />
            </div>
            <div className="flex overflow-x-auto">
                <ImgCard 
                    Index={1}
                    ImgSrc={'/subteams/power/img.jpg'}
                    setIsOpen={setIsOpen}
                    Text={'Power Management'}
                    setContent={setPopup}
                    content={PowerPopup}
                />
                <ImgCard 
                    Index={1}
                    ImgSrc={'/subteams/piloting/img.png'}
                    setIsOpen={setIsOpen}
                    Text={'Piloting'}
                    setContent={setPopup}
                    content={PilotingPopup}
                />
                <ImgCard 
                    Index={1}
                    ImgSrc={'/subteams/financials/img.jpg'}
                    setIsOpen={setIsOpen}
                    Text={'Financials'}
                    setContent={setPopup}
                    content={FinancialsPopup}
                />
            </div>
            </div>*/}

            <div className="grid grid-cols-1 sm:grid-cols-3">
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
                    ImgSrc={'/subteams/cfd/img.png'}
                    setIsOpen={setIsOpen}
                    Text={'CFD and FEA'}
                    setContent={setPopup}
                    content={CFDPopup}
                />
                <ImgCard 
                    Index={1}
                    ImgSrc={'/subteams/fpv/img.png'}
                    setIsOpen={setIsOpen}
                    Text={'FPV System'}
                    setContent={setPopup}
                    content={FPVPopup}
                />
                <ImgCard 
                    Index={1}
                    ImgSrc={'/subteams/power/img.jpg'}
                    setIsOpen={setIsOpen}
                    Text={'Power Management'}
                    setContent={setPopup}
                    content={PowerPopup}
                />
                <ImgCard 
                    Index={1}
                    ImgSrc={'/subteams/piloting/img.png'}
                    setIsOpen={setIsOpen}
                    Text={'Piloting'}
                    setContent={setPopup}
                    content={PilotingPopup}
                />
                <ImgCard 
                    Index={1}
                    ImgSrc={'/subteams/financials/img.jpg'}
                    setIsOpen={setIsOpen}
                    Text={'Financials'}
                    setContent={setPopup}
                    content={FinancialsPopup}
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