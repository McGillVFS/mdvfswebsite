"use client"

import { useState } from "react"
import { useRouter } from 'next/navigation'
import Title from "../ui/Title"
import InfoCard from "../ui/InfoCard"
import SubHeading from "../ui/SubHeading"
import { LuUsersRound } from "react-icons/lu";
import { LuMonitor } from "react-icons/lu";
import { LuWrench } from "react-icons/lu";
import { LuGlobe } from "react-icons/lu";


export default function Join() {
    
    return (
        <div>
            <Title text={"JOIN US"}/>

            <div className="grid grid-cols-2 gap-5 p-4">

                <InfoCard 
                title={"Mentoring"}
                description={"Each new member is assigned a project lead, where they can be mentored to learn the technical aspects of each project. You’ll have the opportunity to work with other new members of the team and socialize with people with the same interests as you!"}
                icon={<LuUsersRound className="text-4xl text-gray-500"/>}
                />

                <InfoCard 
                title={"Training"}
                description={"Our training sessions include in-person tutorials, video playlists, practice sessions and weekly learning. Joining the team allows you to access our practical learning process, which greatly complements the theoretical approach of classes."}
                icon={<LuMonitor className="text-4xl text-gray-500"/>}
                className="px-3"
                />

                <InfoCard 
                title={"Hands-On Experience"}
                description={"Nowhere else will you be able to complete your builds with the hands-on experience that our team provides. The knowledge gained from this experience allows students to become better engineers in terms of design for manufacturing and design for assembly, since our designers also do the building!"}
                icon={<LuWrench className="text-4xl text-gray-500"/>}
                />

                <InfoCard 
                title={"Community"}
                description={"Join the vertical flight community! We’re multiple students and professionals that host networking events to share knowledge, opportunities and our passion for aviation."}
                icon={<LuGlobe className="text-4xl text-gray-500"/>}
                className="px-3"
                />

            </div>

            <SubHeading text={"Application Form"} />

            <div className="px-4">
                <p className="text-gray-500 text-lg font-tajawal pb-1">Join the newest and fastest growing design team at McGill!</p>
            </div>

            <div className="flex items-center justify-center py-8">
                <button className="bg-red-500 hover:bg-red-600 text-white font-bold px-4 rounded-xl h-14 min-w-11/12">Apply Now!</button>
            </div>
            
        </div>
    )

}