import React from "react";
import textStyle from "./utils/styles/Text.module.css";
import Spacer from "./utils/spacer";

import { experienceData } from "./data/data";

import {
    Typography,
} from "@material-tailwind/react";
import CustomTimeline from "./utils/custom_timeline";



const Experience: React.FC = () => {
    return (
        <div id="experience">
            <Typography className={`${textStyle.sectionText} text-center md:text-5xl text-4xl`}>
                Experiences
            </Typography>
            <Spacer height={100} />
            <CustomTimeline experiences={experienceData} />
        </div>
    )
}

export default Experience