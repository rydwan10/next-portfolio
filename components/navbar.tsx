import React from "react";
import {
    Navbar,
    Typography,
    IconButton,
    Collapse,
} from "@material-tailwind/react";
import Image from "next/image";

export default function StickyNavbar() {
    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);

    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="small"
                className="p-1 font-semibold text-base hover:text-blue-500"
            >
                <a href="#about-me" className="flex items-center">
                    About Me
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                className="p-1 font-semibold text-base hover:text-blue-500"
            >
                <a href="#experience" className="flex items-center">
                    Experience
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                className="p-1 font-semibold text-base hover:text-blue-500"
            >
                <a href="#projects" className="flex items-center">
                    Projects
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                className="p-1 font-semibold text-base hover:text-blue-500"
            >
                <a href="#contact" className="flex items-center">
                    Contact
                </a>
            </Typography>
        </ul>
    );

    return (
        <Navbar className="border-hidden shadow-none bg-transparent backdrop-saturate-100 backdrop-blur-none z-10 h-max max-w-full rounded-none py-2 px-8 lg:px-14 lg:py-4">
            <div className="flex items-center justify-between text-blue-gray-50">
                <div className="flex">
                    <Image
                        className="mr-3"
                        src="/assets/svg/ic_code.svg"
                        height={28}
                        width={28}
                        alt="Logo"
                    />
                    <Typography
                        as="h1"
                        href="#"
                        className="mr-4 cursor-pointer py-1.5 font-bold text-lg"
                    >
                        Rydwan
                    </Typography>
                </div>

                <div className="flex items-center gap-4">
                    <div className="mr-4 hidden lg:block">{navList}</div>
                    <IconButton
                        variant="text"
                        className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                        ripple={false}
                        onClick={() => setOpenNav(!openNav)}
                    >
                        {openNav ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                className="h-6 w-6"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                    </IconButton>
                </div>
            </div>
            <Collapse open={openNav}>
                {navList}
            </Collapse>
        </Navbar>

    );
}
