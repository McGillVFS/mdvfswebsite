import { useState } from "react"
import dynamic from "next/dynamic";
import { IoMdClose } from "react-icons/io";



const Popup = ({ setIsOpen, setContent, children }) => {
    

    return(
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/50">
            <div className="relative w-11/12 max-w-4xl max-h-10/12 overflow-x-scroll rounded-lg bg-black border-white border-2 p-4">
                <div>
                    <button onClick={() => setIsOpen(false)}> <IoMdClose className="text-white size-8 float-left fixed" /></button>
                    <div className="flex justify-center items-center">
                        <div className="p-10">
                            {/*<p className="text-white font-tajawal text-base">{text}</p>*/}
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Popup;