import Image from "next/image";
import React from "react";


const Social: React.FC = () => {
    return (
        <div className="flex gap-y-4 items-center flex-wrap">

            <a className="mr-4" href="https://www.linkedin.com/in/muhammad-rydwan/" target="_blank" rel="noopener noreferrer">
                <Image
                    src="/assets/svg/ic_linkedin.svg"
                    width={32}
                    height={32}
                    alt="LinkedIn"
                    className="mr-2"
                />
            </a>

            <a className="mr-4" href="https://www.github.com/rydwan10" target="_blank" rel="noopener noreferrer">
                <Image
                    src="/assets/svg/ic_github.svg"
                    width={32}
                    height={32}
                    alt="Github"
                    className="mr-2"
                />
            </a>

            <a className="mr-4" href="mailto:rydwan.dev@gmail.com">
                <Image
                    src="/assets/svg/ic_gmail.svg"
                    width={40}
                    height={40}
                    alt="Gmail"
                    className="mr-2"
                />
            </a>

            <a href="/assets/pdf/muhammad-rydwan-cv.pdf" target="_blank" rel="noopener noreferrer" className="rounded-full border-2 border-purple-500 px-4 py-2 flex items-center space-x-2 text-white">
                <span className="mr-2 font-semibold">Download CV</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>

            </a>
        </div>
    )
}


export default Social;
