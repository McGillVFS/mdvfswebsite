"use client"

import { useState } from "react"
import { useRouter } from 'next/navigation'
import Title from "../ui/Title"
import ImgCard from "../ui/ImgCard";
import InfoPopup from "../ui/InfoPopup"

export default function Subteams() {
    
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <div>
            <Title text={"Subteams"}/>
            <ImgCard 
                Index={0}
                ImgSrc={'GnUGASHa0AA8fNW.jpeg'}
                setIsOpen={setIsOpen}
                Text={'Hello!'}
            />

            {isOpen && (
                <InfoPopup text="Hello!" setIsOpen={setIsOpen} />
            )}
        </div>
    )

}