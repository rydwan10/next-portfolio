import Image from "next/image";
import Link from "next/link";
import {ReactComponentElement} from "react";


export default function Navbar(): ReactComponentElement<any> {
    const handleSmoothClick = (ref: string): void => {
        const element = document.getElementById(ref);
        if (element) {
            element.scrollIntoView({behavior: 'smooth'});
        }
    }

    return (
        <div className="flex items-center justify-between py-6">
            <div className="flex items-center">
                <Image
                    src="/assets/svg/ic_code.svg"
                    width={32}
                    height={32}
                    alt=""
                    className="mr-2"
                />
                <Link className="font-semibold text-xl" href="https://github.com/rydwan10">
                    Rydwan
                </Link>
            </div>
            <div className="flex items-center space-x-9">
                <a className="text-base" href="#about-me" style={{cursor: "pointer"}}
                   onClick={() => handleSmoothClick("about-me")}>About Me</a>
                <a className="text-base" href="#experience" style={{cursor: "pointer"}}
                   onClick={() => handleSmoothClick("experience")}>Experience</a>
                <a className="text-base" href="#projects" style={{cursor: "pointer"}}
                   onClick={() => handleSmoothClick("projects")}>Projects</a>
                <a className="text-base" href="#contact" style={{cursor: "pointer"}}
                   onClick={() => handleSmoothClick("contact")}>Contact</a>
            </div>

        </div>
    );
}
