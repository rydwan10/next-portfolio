import React from "react";
import mainStyle from './styles/Hero.module.css';
import textStyle from './utils/styles/Text.module.css';
import GradientBlob from "./gradient_blob";
import Social from "./social";
import Spacer from "./utils/spacer";

const Hero: React.FC = () => {
    return (
        <div className={mainStyle.heroWrapper}>
            <div>
                <p className={`${textStyle.textGradient} ${mainStyle.textHeroBase} font-medium`}>Hi,</p>
                <p>
                    <span className={mainStyle.textHeroBase}>I am Muhammad</span>
                    <span className={`${textStyle.textGradient} ${mainStyle.textHeroBase} font-medium`}> Rydwan</span>
                </p>
                <p>
                    <span className={mainStyle.textHeroBase}>Mobile</span>
                    <span
                        className={`${textStyle.textGradient} ${mainStyle.textHeroBase} font-medium`}> Developer</span>
                </p>

                <Spacer height={32}/>
                <Social/>
            </div>
            <GradientBlob/>

        </div>
    );
};

export default Hero;
