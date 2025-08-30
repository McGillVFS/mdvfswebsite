import { useState } from "react";
import { useRouter } from 'next/navigation'
import Image from 'next/image'

const ImgCard = ( { Index, ImgSrc, setIsOpen, Text, content, setContent }) => {
    const router = useRouter();

    return(
        <div className="sm:w-full sm:h-175 w-full h-75 relative overflow-hidden group" onClick={() => {
                setContent(content)
                setIsOpen(true)
            }} >
            <img 
                src={ImgSrc} 
                className="object-cover h-full w-full"
                alt={Text}
            />
            <div className="absolute inset-x-0 bottom-0 bg-red-600 h-24 transition-all duration-500 ease-in-out group-hover:h-full flex flex-col items-center">
                {/* This wrapper div handles the text positioning with transitions */}
                <div className="w-full h-full flex flex-col justify-end group-hover:justify-center items-center p-4 transition-all duration-500 ease-in-out">
                <p className="text-lg font-bold text-white text-center">{Text}</p>
                <p className="text-sm underline text-white text-center mt-2">Learn More</p>
                </div>
            </div>
        </div>
    )
}

export default ImgCard;