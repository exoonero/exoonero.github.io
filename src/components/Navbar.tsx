import {AboutIcon, HomeIcon, ExoneraLogo, NewsIcon} from "@/assets/svgs/icons";
import clsx from "clsx";
import Link from "next/link";

interface NavbarProps{
    activeButton: "Home" | "About" | "News"  
}

export function Navbar({activeButton}: NavbarProps){
    return (
        <nav className="min-[1792px]:w-[8.75rem] lg:w-[7.25rem] bg-[#5AB290]  lg:flex flex-col items-center min-[1792px]:pt-[4.22rem] lg:pt-[3.489rem] hidden">
            <ExoneraLogo className="w-[5.645rem] min-[1792px]:w-auto"/>
            <ul className="min-[1792px]:mt-[14rem] lg:mt-[11.66rem] flex flex-col min-[1792px]:gap-y-[4.5rem] lg:gap-y-[3.90rem] items-center">
                <li>
                    <Link href="/">
                        <HomeIcon className={clsx(activeButton === "Home" ? "fill-white lg:w-8 min-[1792px]:w-auto": "fill-[#8BE2C0] hover:fill-gray-200 lg:w-8 min-[1792px]:w-auto")}/>
                    </Link> 
                </li>
                <li>
                    <Link href="/sobre">
                        <AboutIcon className={clsx(activeButton === "About" ? "fill-white lg:w-[2.31rem] min-[1792px]:w-auto": "fill-[#8BE2C0] hover:fill-gray-200 lg:w-[2.31rem] min-[1792px]:w-auto")}/>
                    </Link>
                </li>
                <li>
                    <Link href="/noticias">
                        <NewsIcon className={clsx(activeButton === "News" ? "fill-white lg:w-8 min-[1792px]:w-auto": "fill-[#8BE2C0] hover:fill-gray-200 lg:w-8 min-[1792px]:w-auto")}/>
                    </Link>
                </li>
                
            </ul>
        
                
        </nav>
    )
}

export default Navbar