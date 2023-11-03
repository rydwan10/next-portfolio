import React from "react";
import textStyle from "./utils/styles/Text.module.css";
import Spacer from "./utils/spacer";

import { experienceData } from "./data/data";

import {
    Typography,
} from "@material-tailwind/react";
import CustomTimeline from "./utils/custom_timeline";
import PillsDivider from "./utils/pills_divider";
import FadeInFromBottomOnScroll from "./utils/fade_in_from_bottom_on_scroll";



const Experience: React.FC = () => {
    return (
        <>
            <div id="experience" >
                <FadeInFromBottomOnScroll duration={0.5}>
                    <Typography className={`${textStyle.sectionText} text-center md:text-5xl text-4xl`}>
                        Experiences
                    </Typography>
                </FadeInFromBottomOnScroll>
                <Spacer height={100} />
                <CustomTimeline experiences={experienceData} />
            </div>
            <Spacer height={100} />
            <div className="flex justify-center">
                <PillsDivider />
            </div>
        </>
    )
}

export default Experience