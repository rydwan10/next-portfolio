import Image from "next/image";
import style from "./styles/AboutMe.module.css"
import textStyle from "./utils/styles/Text.module.css"
import Spacer from "./utils/spacer";
import PillsDivider from "./utils/pills_divider";
import { Typography } from "@material-tailwind/react";
import FadeInFromBottom from "./utils/fade_in_from_bottom";
import FadeInFromBottomOnScroll from "./utils/fade_in_from_bottom_on_scroll";

const AboutMe = () => {
    return (
        <FadeInFromBottomOnScroll duration={0.7} threshold={0.5}>
            <div className="flex flex-col content-center items-center px-6" id="about-me">
                <Typography className={`${textStyle.sectionText} md:text-5xl text-4xl`}>
                    About Me
                </Typography>
                <Spacer height={120} />
                <div className={style.imageContainer}>
                    <div className={style.imageGradient} />
                    <Image
                        width={300}
                        height={200}
                        className={`${style.profilePicture} md:w-60 w-44`}
                        src="/assets/png/about_me_picture.png"
                        alt="Muhammad Rydwan" />
                </div>
                <Spacer height={75} />
                <div className="xl:px-64 px-12">
                    <p className="leading-loose md:leading-relaxed text-white font-light text-base md:text-xl lg:text-2xl text-center">
                        Currently I&apos;m a Mobile Developer at <a className={textStyle.linkText} href="https://www.reku.id/"
                            target="_blank" rel="noopener noreferrer">Reku.id</a> a
                        cryptocurrency marketplace based in South Jakarta,
                        Indonesia. I&apos;m in love with programming since in vocational high school and continue in depth in
                        <a className={textStyle.linkText} href="https://www.dumbways.id/"
                            target="_blank" rel="noopener noreferrer"> Dumbways.id</a> bootcamp. Previously, I&apos;m a Fullstack Developer developing Fullstack Application using
                        Angular and ASP .NET Web API.
                    </p>
                </div>

                <Spacer height={100} />
                <PillsDivider />
            </div>
        </FadeInFromBottomOnScroll>

    );
};


export default AboutMe
