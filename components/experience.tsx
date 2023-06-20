import React from "react";
import textStyle from "./utils/styles/Text.module.css";
import Spacer from "./utils/spacer";
import ExperienceCard from "./utils/experience_card";
import {data} from "./data/data";



const Experience: React.FC = () => {
    return (
        <div  id="experience">
            <p className={`${textStyle.sectionText} text-center`}>Experience</p>
            <Spacer height={100}/>
            {
                data.map((datum) => {
                    return (
                        <div key={datum.id} className="flex content-start">
                            <ExperienceCard key={datum.id} year={datum.year} title={datum.title} subTitle={datum.subTitle} experiences={datum.experiences} id={datum.id}/>
                        </div>
                    )
            })

            }
        </div>
    )
}


export default Experience
