"use client"

export default function VideoBlock({ src }) {
  return (
    <div className="relative items-center justify-center w-full h-screen overflow-hidden">
      <video 
        src={src}
        autoPlay 
        muted 
        playsInline
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-0 left-0 w-full h-60 bg-gradient-to-b from-black/0 to-red-500/60" />
    </div>
  )
}
