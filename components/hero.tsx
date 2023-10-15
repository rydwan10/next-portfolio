import React from "react";
import mainStyle from './styles/Hero.module.css';
import textStyle from './utils/styles/Text.module.css';
import GradientBlob from "./gradient_blob";
import Social from "./social";
import Spacer from "./utils/spacer";


const Hero: React.FC = () => {
    return (
        <div className="mt-24 lg:mt-44` px-8 lg:px-14 h-screen">
            <div>
                <p className={`${textStyle.textGradient} ${mainStyle.textHeroBase} font-medium`}>Hi,</p>
                <p className={`${mainStyle.textHeroBase}`}>
                    <span >I am </span>
                    <span className={`${textStyle.textGradient} font-medium`}> Rydwan</span>
                </p>
                <p className={`${mainStyle.textHeroBase}`}>
                    <span>Mobile</span>
                    <span
                        className={`${textStyle.textGradient} font-medium`}> Developer</span>
                </p>

                <Spacer height={32} />
                <Social />
            </div>
            <GradientBlob />

        </div>
    );
};

export default Hero;
