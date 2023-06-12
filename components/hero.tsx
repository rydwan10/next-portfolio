import React from "react";
import style from './styles/Hero.module.css';
import GradientBlob from "./gradient_blob";

const Hero: React.FC = () => {
    return (
        <div className={style.heroWrapper}>
            <div>
                <p className={style.textHeroGradient}>Hi,</p>
                <p>
                    <span className={style.textHeroBase}>I'm Muhammad</span>
                    <span className={style.textHeroGradient}> Rydwan</span>
                </p>
                <p>
                    <span className={style.textHeroBase}>Mobile</span>
                    <span className={style.textHeroGradient}> Developer</span>
                </p>
            </div>
            <GradientBlob />

        </div>
    );
};

export default Hero;
