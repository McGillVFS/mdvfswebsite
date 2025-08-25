import { useState } from "react"
import { useRouter, usePathname } from 'next/navigation'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const NavBar = ({}) => {
    
    //import vars
    const router = useRouter();
    const pathname = usePathname();

    const pages = [
        {
            page: "About Us",
            link: '/about',
            id: 0
        },
        {
            page: "Join Us",
            link: '/join',
            id: 1
        },
        {
            page: "Initiatives",
            link: '/initiatives',
            id: 2
        },
        {
            page: "Sponsorships",
            link: '/sponsorships',
            id: 3
        },
        {
            page: "Subteams",
            link: '/subteams',
            id: 4
        }
    ]

    const [isOpen, setIsOpen] = useState(false);

    const toggleNav = () => {
        setIsOpen(!isOpen);
    }

    const handleLinkClick = (link) => {
        console.log(`Navigating to: ${link}`);
        setIsOpen(false); // Close nav after clicking a link
        router.push(link);
    };

    //Set hamburger menu color depending on page
    const hamColor = pathname === "/about" ? "text-white" : "text-black"; //change to proper page later

    return(
        <div className = "relative">
            {/* Hamburger Menu Button */}
            <button
                onClick={toggleNav}
                className={`fixed top-4 right-1 z-50 p-2 ${hamColor}`}
                aria-label="Toggle navigation"
            >
                {isOpen ? <IoMdClose className="size-8"/> 
                : <GiHamburgerMenu className="size-8"/>}
            </button>


            {/* Overlay */}
            

            {/* Sidenav */}
            <div className={`fixed top-0 right-0 h-full w-80 bg-neutral-800/90 text-white transform transition-transform duration-300 ease-in-out z-40 ${isOpen ? 'translate-x-0' : 'translate-x-full'} z-40`}>
                <div className="float-right h-full w-14 bg-red-600"></div>
                <div className="p-6 pt-16">
                    <nav>
                        <ul className="space-y-10">
                            {pages.map((page) => {
                                const isActive = pathname === page.link;

                                return (
                                    <li key={page.id}>
                                    <button
                                        onClick={() => handleLinkClick(page.link)}
                                        className={`text-2xl font-light ${isActive ? "text-gray-400 cursor-default" : "text-white hover:text-gray-300"}`} 
                                        disabled={isActive}
                                    >
                                        {page.page}
                                    </button>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
};

export default NavBar;