import { useState } from "react"
import { useRouter } from 'next/navigation'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";



const NavBar = ({}) => {
    
    //import vars
    const router = useRouter()
    
    //states
    const [menuOpen, setMenuOpen] = useState(false);

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
        <div className="py-2 px-1"> 
            <li 
            key={links.id} 
            onClick= {() => {
                router.push(links.link);
                setMenuOpen(false);
            }}
            className="text-white cursor-pointer"
            >
                {links.page}
            </li>

        </div>
    )

    const expandedBar = () => {
        return(
            <div className="bg-gray-800 fixed w-5 h-full">
                <div className="justify-self-end px-1">
                    <IoMdClose onClick={openNavBar} />
                </div>
    
                <div>
                    <ul>{pageLink}</ul>
                </div>
            </div>
        )
    }


    //functions
    function openNavBar() {
        setMenuOpen(true);
    }

    function closeNavBar() {
        setMenuClose(false);
    }



    return(
        <div>
            <div className="justify-self-end px-1">
                <GiHamburgerMenu onClick={openNavBar} />
            </div>
        </div>
    )

};

export default NavBar;