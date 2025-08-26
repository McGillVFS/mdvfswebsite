import { useState } from "react"
import ImgCard from "./ImgCard";

const CardCarousel = ({ CardObj }) => {

    return(
        <div className="overflow-x-auto overflow-y-hidden whitespace-nowrap w-full border p-4">
            {
                CardObj.map((CardInfo) => {
                    return(
                        <ImgCard 
                            key={CardInfo.index}
                            ImgSrc={CardInfo.source} 
                            PageRoute={CardInfo.route}
                            Text={CardInfo.text}
                        />
                    )
                })
            }

        </div>
    )
}

export default CardCarousel;