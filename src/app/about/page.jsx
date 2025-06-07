"use client"

import { useState } from "react"
import { useRouter } from 'next/navigation'
import Title from "../ui/Title"
import SubHeading from "../ui/SubHeading"

export default function About() {
    
    return (
        <div>
            <Title text={"About Us"}/>
            <SubHeading text={"WHO WE ARE"}/>
        </div>
    )

}