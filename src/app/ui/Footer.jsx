import { useState } from "react"
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { FaTiktok, FaInstagram, FaLinkedin, FaYoutube, FaEnvelope } from "react-icons/fa6";
import { IconContext } from "react-icons";
import MDVFS_Logo_Stroke from '../../../public/main_logo.png'




const Footer = () => {

    const router = useRouter()

    /*
    const pages = [
        {
            page: "About Us",
            link: '/about',
            id: 0
        },
        {
            page: "Contact Us",
            link: '/contact',
            id: 1,
        },
        {
            page: "Join Us",
            link: '/join',
            id: 2,
        },
        {
            page: "Projects",
            link: '/projects',
            id: 3,
        },
        {
            page: "Sponsorships",
            link: '/sponsorships',
            id: 4,
        },
        {
            page: "Subteams",
            link: '/subteams',
            id: 5
        },
    ]

    const pageLink = pages.map(links =>  
        <li 
        key={links.id} 
        onClick= {() => {
            router.push(links.link);
        }}
        className="text-white cursor-pointer"
        >
            {links.page}
        </li>
    )
    */

    return(
        <div className="hidden sm:flex bg-black h-40 w-full items-center">

            <div className="flex min-w-full"> {/* contains two columns, one with mdvfs logo (small) and one with links (large) */}

                <div className="w-2/10 h-full flex items-center justify-center">
                    {/*<div className="w-30 h-30 bg-amber-400"></div>*/}
                    <Image src={MDVFS_Logo_Stroke} width={240} height={240} alt="mdvfs_logo" className="cursor-pointer" onClick={() => router.push("/")}/>

                </div>

                <div className="w-7/10 grid grid-rows-2 items-center"> {/* contains two rows, one for page links and one for social media icons */}
                    
                    <div className="columns-5 gap-2.5">
                        {/*pageLink*/}
                        <li className="navlink justify-self-end cursor-pointer" onClick={() => router.push("/about")}>ABOUT US</li>
                        <li className="navlink justify-self-end cursor-pointer" onClick={() => router.push("/join")}>JOIN US</li>
                        <li className="navlink justify-self-end cursor-pointer" onClick={() => router.push("/research")}>RESEARCH</li>
                        <li className="navlink justify-self-end cursor-pointer" onClick={() => router.push("/sponsorships")}>SPONSORS</li>
                        <li className="navlink justify-self-end cursor-pointer" onClick={() => router.push("subteams")}>SUBTEAMS</li>
                    </div>
                    
                    <div className="w-full flex justify-end">
                        <div className="justify-end w-3/10 h-auto grid grid-cols-5 gap-0.25">
                            <IconContext.Provider value={{ color: "white", size: "2em" }}>
                                <FaTiktok className="justify-self-end cursor-pointer" onClick={() => window.open("https://www.tiktok.com/explore", "_blank")}/>
                            </IconContext.Provider>

                            <IconContext.Provider value={{ color: "white", size: "2em" }}>
                                <FaInstagram className="justify-self-end cursor-pointer" onClick={() => window.open("https://www.instagram.com/mcgill_mdvfs/?hl=en", "_blank")}/>
                            </IconContext.Provider>

                            <IconContext.Provider value={{ color: "white", size: "2em" }}>
                                <FaLinkedin className="justify-self-end cursor-pointer" onClick={() => window.open("https://www.linkedin.com/company/mcgillmad/posts/?feedView=all", "_blank")}/>
                            </IconContext.Provider>
                            
                            <IconContext.Provider value={{ color: "white", size: "2em" }}>
                                <FaYoutube className="justify-self-end cursor-pointer" onClick={() => window.open("https://www.youtube.com/channel/UC1zR8ieSpAJ5ad1hOVOjqig", "_blank")}/>
                            </IconContext.Provider>

                            <IconContext.Provider value={{ color: "white", size: "2em" }}>
                                <FaEnvelope className="justify-self-end cursor-pointer" onClick={() => window.open("mailto:mdvfs.sponsorships@mcgilleus.ca")}/>
                            </IconContext.Provider>

                        </div>
                    </div>

                </div>
            </div>
        </div> 
            
    )
}

export default Footer;