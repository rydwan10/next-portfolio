import Image from "next/image";
import style from "./styles/AboutMe.module.css"
import textStyle from "./utils/styles/Text.module.css"
import Spacer from "./utils/spacer";
import PillsDivider from "./utils/pills_divider";

const AboutMe = () => {
    return (
        <div className="flex-col content-center items-center flex" id="about-me">
            <p className={textStyle.sectionText}>About Me</p>
            <Spacer height={120}/>
            <div className={style.imageContainer}>
                <div className={style.imageGradient}/>
                <Image className={style.profilePicture} width={240} height={235} src="/assets/svg/about_me_picture.png"
                       alt="Muhammad Rydwan"/>
            </div>
            <Spacer height={75}/>
            <p className={style.aboutMeDesc}>
                Currently I’m a Mobile Developer at <a className={textStyle.linkText} href="https://www.reku.id/"
                                                       target="_blank" rel="noopener noreferrer">Reku.id</a> a
                cryptocurrency marketplace based in South Jakarta,
                Indonesia. I’m in love with programming since in vocational high school and continue in depth in
                <a className={textStyle.linkText} href="https://www.dumbways.id/"
                   target="_blank" rel="noopener noreferrer"> Dumbways.id</a> bootcamp. Previously, I’m a Fullstack Developer developing Fullstack Application using
                Angular and ASP .NET Web API.
            </p>
            <Spacer height={50}/>
            <PillsDivider/>
        </div>
    );
};


export default AboutMe
