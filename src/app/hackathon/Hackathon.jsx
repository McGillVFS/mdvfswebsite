"use client"

import { useState, useEffect } from "react"
import { useRouter } from 'next/navigation'
import Title from "../ui/Title"
import SubHeading from "../ui/SubHeading"

// NOTE: This was the page for the 2026 Hackathon; now hidden

export default function Hackathon() {
    
    return (
        <div className="pb-65">
          <Title text={"HACKATHON"}/>

          <SubHeading text={"AeroHacks"} />

          <div className="px-4">
            <p className="text-black-500 text-xl font-tajawal pb-1">Join 150+ students for an exciting 3-day challenge in drone programming, computer vision, embedded systems, and autonomous navigation. Code, collaborate, and compete using real ESP32-powered drones.</p>
          </div>

          <div className="flex items-center justify-center py-8">
              <button onClick={() => window.open("https://www.mcgillaerohacks.com/", "_blank")} className="bg-red-500 hover:bg-red-600 text-white px-4 rounded-xl h-14 min-w-11/12 cursor-pointer">Hackathon Website</button>
          </div>

        </div>
    )

}