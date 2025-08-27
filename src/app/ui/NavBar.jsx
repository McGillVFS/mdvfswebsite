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
            page: "Home",
            link: '/',
            id: 0
        },
        {
            page: "About Us",
            link: '/about',
            id: 1
        },
        {
            page: "Join Us",
            link: '/join',
            id: 2
        },
        {
            page: "Research",
            link: '/research',
            id: 3
        },
        {
            page: "Sponsorships",
            link: '/sponsorships',
            id: 4
        },
        {
            page: "Subteams",
            link: '/subteams',
            id: 5
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
    const hamColor = pathname === "/" ? "text-white" : "text-black"; //change to proper page later

    return(
        <div className = "relative">
            {/* Hamburger Menu Button */}
            <button
                onClick={toggleNav}
                className={`fixed top-4 right-1 z-50 p-2 ${hamColor}`}
                aria-label="Toggle navigation"
                data-aos="fade-right" 
            >
                {isOpen ? <IoMdClose className="size-8"/> 
                : <GiHamburgerMenu className="size-8"/>}
            </button>


            {/* Overlay */}
            {isOpen && (
                <div className="fixed inset-0 bg-transparent z-30" onClick={() => setIsOpen(false)} />
            )}

            {/* Sidenav */}
            <div className={`fixed top-0 right-0 h-full w-70 bg-neutral-800/90 text-white transform transition-transform duration-500 ease-out z-40 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
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