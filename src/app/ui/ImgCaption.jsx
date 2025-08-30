import { useState } from "react";
import { useRouter } from 'next/navigation'

const ImgCaption = ( { src, Text }) => {
    return (
        <div>
            <img 
                src={src} 
                className="w-auto h-auto"
                >     
            </img>
            <p className="text-sm font-light text-gray-300 font-tajawal pt-1">{Text}</p>
        </div>
    )
}

export default ImgCaption;