import {AboutIcon, HomeIcon, ExoneraLogo, NewsIcon} from "@/assets/svgs/icons";
import clsx from "clsx";
import Link from "next/link";

interface NavbarProps{
    activeButton: "Home" | "About" | "News"  
}

export function Navbar({activeButton}: NavbarProps){
    return (
        <nav className="w-[8.75rem] bg-[#5AB290] lg:flex flex-col items-center pt-[4.22rem] hidden">
            <ExoneraLogo/>
            <ul className="mt-[14rem] flex flex-col gap-y-[4.5rem] items-center">
                <li>
                    <Link href="/">
                        <HomeIcon className={clsx(activeButton === "Home" ? "fill-white": "fill-[#8BE2C0] hover:fill-gray-200")}/>
                    </Link> 
                </li>
                <li>
                    <Link href="/sobre">
                        <AboutIcon className={clsx(activeButton === "About" ? "fill-white transition-colors": "fill-[#8BE2C0] hover:fill-gray-200")}/>
                    </Link>
                </li>
                <li>
                    <Link href="/noticias">
                        <NewsIcon className={clsx(activeButton === "News" ? "fill-white ": "fill-[#8BE2C0] hover:fill-gray-200")}/>
                    </Link>
                </li>
                
            </ul>
        
                
        </nav>
    )
}

export default Navbar