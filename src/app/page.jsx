"use client"

import { useState } from "react"
import { useRouter } from 'next/navigation'
import Navbar from "./ui/Navbar"
import Footer from "./ui/Footer"
import ScrollVideo from "./ui/ScrollVideo"


export default function Home() {
    
    return (
        <div>
            <ScrollVideo />

            <div className='bg-black'>
                <p className="text-red-500">Our Work</p>
            </div>
            
        </div>
    )

}