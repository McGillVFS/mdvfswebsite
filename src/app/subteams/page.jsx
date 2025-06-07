"use client"

import { useState } from "react"
import { useRouter } from 'next/navigation'
import Title from "../ui/Title"
import ImgCard from "../ui/ImgCard";

export default function Subteams() {
    
    return (
        <div>
            <Title text={"Subteams"}/>
            <ImgCard 
                Index={0}
                ImgSrc={'GnUGASHa0AA8fNW.jpeg'}
                PageRoute={'sponsorships'}
                Text={'Hello!'}
            />
        </div>
    )

}