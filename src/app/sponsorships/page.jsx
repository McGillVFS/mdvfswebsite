"use client"

import { useState } from "react"
import { useRouter } from 'next/navigation'
import Title from "../ui/Title"
import InfoCard from "../ui/InfoCard"
import SubHeading from "../ui/SubHeading"
import SponsorshipCard from "../ui/SponsorshipCard"

import { LuUsersRound } from "react-icons/lu";
import { LuMonitor } from "react-icons/lu";
import { LuAward } from "react-icons/lu";
import { LuGlobe } from "react-icons/lu";


export default function Sponsorships() {
    var gold_bullets = ["Large corporate logo on club clothing", "Large corporate logo on website and banners", "Distribution of merch at events", "Involvement on social media"]
    var diamond_bullets = ["Large corporate logo on club clothing", "Large corporate logo on website and banners", "Distribution of merch at events", "Involvement on social media", "Access to resume database", "Job/intern postings on internal channels"]
    var platinum_bullets = ["Large corporate logo on club clothing", "Large corporate logo on website and banners", "Distribution of merch at events", "Involvement on social media", "Access to resume database", "Job/intern postings on internal channels", "Tabling and judging during our case competition and drone show"]
    var premium_bullets = ["Large corporate logo on club clothing", "Large corporate logo on website and banners", "Distribution of merch at events", "Involvement on social media", "Access to resume database", "Job/intern postings on internal channels", "Tabling and judging during our case competition and drone show", "Logo on all competition video footage on live overlay", "Custom drone/act during drone show X", "Additional custom benefits"]
    
    return (
        <div>
            <Title text={"SPONSORSHIPS"}/>

            <SubHeading text={"Our Sponsors"} />
            <div className="px-4">
                <p className="text-gray-500 text-lg font-tajawal pb-3">Thank you to all our sponsors:</p>
            </div>
            <img alt="Sponsors" className="w-full h-auto object-cover mb-8"/>

            <SubHeading text={"Why Sponsor Us?"} />

            <div className="grid grid-cols-2 gap-5 p-4">

                <InfoCard 
                title={"First Look at Interns"}
                description={"Looking for quality interns with hands-on experience? Access to our members' resume database allows a direct proof that interns have relevant design and manufacturing experience to suit your requirements."}
                icon={<LuUsersRound className="text-4xl text-gray-500"/>}
                />

                <InfoCard 
                title={"Community of Researchers and Professionals"}
                description={"Multiple different companies, researchers and professionals alike support the McGill Drones and Vertical Flight Society. Being able to join all of these industry experts allows for first hand contact with multiple different backgrounds."}
                icon={<LuMonitor className="text-4xl text-gray-500"/>}
                className="px-3"
                />

                <InfoCard 
                title={"Publicity on Award-Winning Designs"}
                description={"Logos and messages of sponsors are available on our competition drones. Not only that, but sponsors’ logos are also displayed on our website and our merch."}
                icon={<LuAward className="text-4xl text-gray-500"/>}
                />

                <InfoCard 
                title={"Exclusive Access to Events"}
                description={"Sponsors have exclusive access to our events as judges, guests, presenters and more."}
                icon={<LuGlobe className="text-4xl text-gray-500"/>}
                className="px-3"
                />

            </div>

            <SubHeading text={"Sponsorship Packages"} />

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 p-4">
                <SponsorshipCard 
                    tier={"Gold"}
                    price={"$999+"}
                    bullets={gold_bullets}
                />

                <SponsorshipCard 
                    tier={"Platinum"}
                    price={"$1999+"}
                    bullets={platinum_bullets}
                />

                <SponsorshipCard 
                    tier={"Diamond"}
                    price={"$2999+"}
                    bullets={diamond_bullets}
                />

                <SponsorshipCard 
                    tier={"Premium"}
                    price={"$5999+"}
                    bullets={premium_bullets}
                />
            </div>

            <SubHeading text={"Alumni Experience"} />
            <SubHeading text={"Become a Sponsor Today"} />

            <div>
                <p className="text-xl font-tajawal px-4 pb-3">For sponsorship inquiries, please contact our capitain:</p>
                <div className="flex px-4 pb-3 gap-4">
                    <div className="bg-red-400 h-60 w-50 rounded-2xl"></div>
                    <div>
                        <p className="text-xl font-tajawal"><span className="font-bold">Name: </span>Zachary Tremblay</p>
                        <p className="text-xl font-tajawal"><span className="font-bold">Phone: </span>438-927-171</p>
                        <p className="text-xl font-tajawal"><span className="font-bold">Email: </span>mdvfs.sponsorships@mcgilleus.ca</p>


                    </div>
                </div>
            </div>

        </div>
    )

}