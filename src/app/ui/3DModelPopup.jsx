import { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { IoMdClose } from "react-icons/io";

const ModelViewer = dynamic(() => import("./ModelViewer"), {
  ssr: false,
});

//need for rendering images for years we don't have .glb/gltf models for
const is3DModel = (path) => path?.endsWith(".glb") || path?.endsWith(".gltf");

const ThreeDModelPopup = ({ model_path, setIsOpen }) => {
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/50">
      <div className="relative w-11/12 max-w-4xl rounded-lg bg-black border-white border-2 p-4">
        <div>
          <button onClick={() => setIsOpen(false)}>
            <IoMdClose className="text-white w-8 h-8 float-left" />
          </button>
          {is3DModel(model_path) ? ( //use ModelViewer only for .glb/gltf files
            <ModelViewer
              src={model_path}
              alt="3D model"
              camera-controls
              auto-rotate
              ar
              exposure="1"
            />
          ) : (
            <div className="flex justify-center items-center">
              <Image
                src={model_path}
                alt="Image preview"
                width={400}
                height={200}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ThreeDModelPopup;
