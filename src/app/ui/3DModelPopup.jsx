import { useState } from "react"
import dynamic from "next/dynamic";
import { IoMdClose } from "react-icons/io";

const ModelViewer = dynamic(() => import("./ModelViewer"), {
    ssr: false,
});

const ThreeDModelPopup = ({ model_path, setIsOpen }) => {
    

    return(
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/50">
            <div className="relative w-11/12 max-w-4xl rounded-lg bg-black border-white border-2 p-4">
                <div>
                    <button onClick={() => setIsOpen(false)}> <IoMdClose className="text-white size-8 float-left" /></button>
                    <ModelViewer
                        src={model_path}
                        alt="3D model"
                        camera-controls
                        auto-rotate
                        ar
                        exposure="1"
                    />
                </div>
            </div>
        </div>
    )
}

export default ThreeDModelPopup;