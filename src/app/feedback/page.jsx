"use client"

import { Metadata } from 'next'
import { useState, useEffect } from "react"
import { useRouter } from 'next/navigation'
import Title from "../ui/Title"
import SubHeading from "../ui/SubHeading"


export default function Feedback() {

  useEffect(() => {
  document.title = "Feedback | McGill Aerial Design";
  }, []);
    
    return (
        <div className="pb-65">
          <Title text={"FEEDBACK"}/>

          <SubHeading text={"Feedback Form"} />

          <div className="px-4">
            <p className="text-black-500 text-xl font-tajawal pb-1">Found a bug or have a suggestion about the website? Let us know.</p>
          </div>

          <div className="flex items-center justify-center py-8">
              <button onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSc9NxP77kJas6021WTheurfLi78hYwJQZC70JOJ9gZ6YiJnyw/viewform?usp=dialog", "_blank")} className="bg-red-500 hover:bg-red-600 text-white px-4 rounded-xl h-14 min-w-11/12 cursor-pointer">Feedback Form</button>
          </div>

        </div>
    )

}