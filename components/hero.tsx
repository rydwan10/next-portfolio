import React from "react";
import mainStyle from './styles/Hero.module.css';
import textStyle from './utils/styles/Text.module.css';
import GradientBlob from "./gradient_blob";
import Social from "./social";
import Spacer from "./utils/spacer";
import scrollDownLottie from "../public/assets/lottie/scroll-down.json";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import FadeInFromBottom from "./utils/fade_in_from_bottom";


const ScrollDownAnimation: React.FC = () => {
    return <Lottie animationData={scrollDownLottie} loop={true} />
}


const Hero: React.FC = () => {
    const variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div className="h-screen flex-col items-center">
            <div className="mt-24 lg:mt-44 px-8 lg:px-14 leading-tight md:leading-normal">
                <FadeInFromBottom duration={1.3}>
                    <div>
                        <p className={`${textStyle.textGradient} ${mainStyle.textHeroBase} font-medium`}>Hi,</p>
                        <p className={`${mainStyle.textHeroBase}`}>
                            <span >I am </span>
                            <span className={`${textStyle.textGradient} font-medium`}> Rydwan</span>
                        </p>
                        <p className={`${mainStyle.textHeroBase} mt-5`}>
                            <span>Mobile</span>
                            <span
                                className={`${textStyle.textGradient} font-medium`}> Developer</span>
                        </p>

                        <Spacer height={32} />
                        <Social />
                    </div>
                </FadeInFromBottom>

                <GradientBlob />
            </div>
            <Spacer height={164} />
            <div className="flex justify-center mt-4">
                <a href="#about-me">
                    <ScrollDownAnimation />
                </a>
            </div>
        </div>
    );
};

export default Hero;
