
import { useState } from "react"
import { useRouter } from 'next/navigation'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";



const NavBar = ({}) => {
    
    //import vars
    const router = useRouter()

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
            page: "Initiatives",
            link: '/initiatives',
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

    const [isOpen, setIsOpen] = useState(false)

    const toggleNav = () => {
        setIsOpen(!isOpen)
    }

    const handleLinkClick = (link) => {
        console.log(`Navigating to: ${link}`);
        setIsOpen(false); // Close nav after clicking a link
        router.push(link);
    };

    return(
        <div className = "relative">
            {/* Hamburger Menu Button */}
            <button
                onClick={toggleNav}
                className="fixed top-4 right-4 z-50 p-2 text-white"
                aria-label="Toggle navigation"
            >
                {isOpen ? <IoMdClose className="size-8"/> : <GiHamburgerMenu className="size-8"/>}
            </button>


            {/* Overlay */}
            

            {/* Sidenav */}
            <div className={`fixed top-0 right-0 h-full w-80 bg-neutral-800 text-white transform transition-transform duration-300 ease-in-out z-40 ${isOpen ? 'translate-x-0' : 'translate-x-full'} z-40`}>
                <div className="float-right h-full w-20 bg-red-600"></div>
                <div className="p-6 pt-16">
                    <nav>
                        <ul className="space-y-10">
                            {pages.map((page) => (
                                <li key={page.id}>
                                    <button
                                        onClick={() => handleLinkClick(page.link)}
                                        className="text-2xl text-white font-light hover:text-gray-300"
                                    >
                                        {page.page}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

            </div>
        </div>
    )
};

export default NavBar;