"use client"

import { useState } from "react"
import { useRouter } from 'next/navigation'
import Title from "../ui/Title"
import SubHeading from "../ui/SubHeading"


export default function Hackathon() {
    
    return (
        <div className="pb-50">
          <Title text={"HACKATHON"}/>

          <SubHeading text={"AEROHACKS"} />

          <div className="px-4">
            <p className="text-black-500 text-xl font-tajawal pb-1">Apply to AeroHacks!</p>
          </div>

          <div className="flex items-center justify-center py-8">
              <button onClick={() => window.open("https://docs.google.com/forms/d/1zDdhk-TNLQL2yqBGmVQZ_d1SJZEsFiQGE-rcQCcJGLU/viewform?edit_requested=true", "_blank")} className="bg-red-500 hover:bg-red-600 text-white px-4 rounded-xl h-14 min-w-11/12 cursor-pointer">Apply Now!</button>
          </div>

        </div>
    )

}