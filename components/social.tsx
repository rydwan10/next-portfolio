import Image from "next/image";
import React from "react";


const Social: React.FC = () => {
    return (
        <div className="flex items-center space-x-9">

            <a href="https://www.linkedin.com/in/muhammad-rydwan/" target="_blank" rel="noopener noreferrer">
                <Image
                    src="/assets/svg/ic_linkedin.svg"
                    width={32}
                    height={32}
                    alt="LinkedIn"
                    className="mr-2"
                />
            </a>

            <a href="https://www.github.com/rydwan10" target="_blank" rel="noopener noreferrer">
                <Image
                    src="/assets/svg/ic_github.svg"
                    width={32}
                    height={32}
                    alt="LinkedIn"
                    className="mr-2"
                />
            </a>

            <a href="mailto:rydwan.dev@gmail.com">
                <Image
                    src="/assets/svg/ic_gmail.svg"
                    width={40}
                    height={40}
                    alt="LinkedIn"
                    className="mr-2"
                />
            </a>


        </div>
    )
}


export default Social;
