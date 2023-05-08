import {AboutIcon, HomeIcon, ExoneraLogo, NewsIcon} from "@/assets/svgs/icons";
import Link from "next/link";

export function Navbar(){
    return (
        <nav className="w-[8.75rem] bg-[#5AB290] flex flex-col items-center pt-[4.22rem]">
            <ExoneraLogo/>
            <ul className="mt-[14rem] flex flex-col gap-y-[4.5rem] items-center">
                <li>
                    <Link href="/">
                        <HomeIcon/>
                    </Link> 
                </li>
                <li>
                    <Link href="/sobre">
                        <AboutIcon/>
                    </Link>
                </li>
                <li>
                    <Link href="/noticias">
                        <NewsIcon/>
                    </Link>
                </li>
                
                <li>
                    <Link href="/querido-diario">
                        <NewsIcon/>    
                    </Link> 
                </li>
            </ul>
        
                
        </nav>
    )
}

export default Navbar