import { useState } from "react";
import { useRouter } from 'next/navigation'
import Image from 'next/image'

const ImgCard = ( { Index, ImgSrc, PageRoute, Text }) => {
    const router = useRouter();

    return(
        <div className="w-lg h-175 relative overflow-hidden rounded-lg group" onClick={() => router.push(`/${PageRoute}`)} >
            <img 
                src={ImgSrc} 
                className="object-cover w-full h-full"
                alt={Text}
            />
            <div className="absolute inset-x-0 bottom-0 bg-red-500 h-24 transition-all duration-500 ease-in-out group-hover:h-full rounded-b-lg group-hover:rounded-lg flex flex-col items-center">
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