import React from "react";
import textStyle from "./utils/styles/Text.module.css";
import Spacer from "./utils/spacer";
import ExperienceCard from "./utils/experience_card";
import { data } from "./data/data";

import {
    Typography,
} from "@material-tailwind/react";
import CustomTimeline from "./utils/custom_timeline";



const Experience: React.FC = () => {
    return (
        <div id="experience">
            <Typography className={`${textStyle.sectionText} text-center md:text-5xl text-4xl`}>
                Experience
            </Typography>
            <Spacer height={100} />
            <CustomTimeline experiences={data} />
            {/* {
                data.map((datum) => {
                    return (
                        <div key={datum.id} className="flex content-start">
                            <ExperienceCard key={datum.id} year={datum.year} title={datum.title} subTitle={datum.subTitle} experiences={datum.experiences} id={datum.id} />
                        </div>
                    )
                })

            } */}
        </div>
    )
}

export default Experience