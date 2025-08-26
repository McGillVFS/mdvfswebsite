"use client"

import { useState } from "react"
import { useRouter } from 'next/navigation'
import Title from "../ui/Title"
import ImgCard from "../ui/ImgCard";
import Popup from "../ui/Popup"

export default function Subteams() {
    
    const [isOpen, setIsOpen] = useState(false);
    const [content, setContent] = useState("");
    
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
                <Popup text="Hello!" setIsOpen={setIsOpen} />
            )}
        </div>
    )

}