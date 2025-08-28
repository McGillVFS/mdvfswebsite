"use client"

export default function VideoBlock({ src }) {
  return (
    <div className="flex items-center justify-center w-full h-screen overflow-hidden">
      <video 
        src={src}
        autoPlay 
        muted 
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
    </div>
  )
}
