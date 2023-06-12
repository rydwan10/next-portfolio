import Image from "next/image";
import Link from "next/link";
import { ReactComponentElement } from "react";


export default function Navbar(): ReactComponentElement<any> {
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
                <Link className="text-base" href="#about-me">About Me</Link>
                <Link className="text-base" href="#experience">Experience</Link>
                <Link className="text-base" href="#projects">Projects</Link>
                <Link className="text-base" href="#contact">Contact</Link>
            </div>

        </div>
    );
}
