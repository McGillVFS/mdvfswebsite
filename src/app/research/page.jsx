"use client"

import { useState } from "react"
import { useRouter } from 'next/navigation'
import Title from "../ui/Title"
import SubHeading from "../ui/SubHeading";


export default function Projects() {
    
    return (
        <div>
            <Title text={"RESEARCH"}/>

            <SubHeading text={"OUR PROJECTS"} />
        </div>
    )

}