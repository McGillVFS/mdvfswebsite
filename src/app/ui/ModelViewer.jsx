"use client";
import "@google/model-viewer";

export default function ModelViewer(props) {
  return (
    <div>
        <model-viewer
        {...props}
        style={{ width: "100%", height: "750px" }}
        ></model-viewer>
    </div>
  );
}