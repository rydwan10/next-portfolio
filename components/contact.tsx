import Image from "next/image";
import textStyle from "./utils/styles/Text.module.css"
import Spacer from "./utils/spacer";
import PillsDivider from "./utils/pills_divider";
import { Typography } from "@material-tailwind/react";
import FadeInFromBottomOnScroll from "./utils/fade_in_from_bottom_on_scroll";

const Contact = () => {
    return (
        <FadeInFromBottomOnScroll duration={0.5}>
            <div className="flex flex-col content-center items-center px-6" id="contact">
                <Typography className={`${textStyle.sectionText} md:text-5xl text-4xl`}>
                    Contact Me
                </Typography>
                <Spacer height={58} />
                <div className="flex mb-20 gap-y-4 items-center flex-wrap justify-center">
                    <a className="mr-8 flex items-center" href="https://www.linkedin.com/in/muhammad-rydwan/" target="_blank" rel="noopener noreferrer">
                        <Image
                            src="/assets/svg/ic_linkedin.svg"
                            width={32}
                            height={32}
                            alt="LinkedIn"
                            className="mr-2"
                        />
                        <span>
                            LinkedIn
                        </span>
                    </a>


                    <a className="mr-8 flex items-center" href="mailto:rydwan.dev@gmail.com">
                        <Image
                            src="/assets/svg/ic_gmail.svg"
                            width={40}
                            height={40}
                            alt="LinkedIn"
                            className="mr-2"
                        />
                        <span>
                            Gmail
                        </span>
                    </a>

                    <a className="mr-8 flex items-center" href="https://wa.me/6282117055066">
                        <Image
                            src="/assets/svg/ic_whatsapp.svg"
                            width={34}
                            height={34}
                            alt="Whatsapp"
                            className="mr-2"
                        />
                        <span>
                            Whatsapp
                        </span>
                    </a>

                    <a className="flex items-center" href="https://instagram.com/rydwan_10">
                        <Image
                            src="/assets/svg/ic_instagram.svg"
                            width={36}
                            height={36}
                            alt="Instagram"
                            className="mr-2"
                        />
                        <span>
                            Instagram
                        </span>
                    </a>
                </div>

                <PillsDivider />

            </div>
        </FadeInFromBottomOnScroll>

    );
};


export default Contact
