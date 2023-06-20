import React from "react";
import cardStyle from './styles/ExperienceCard.module.css'
import Spacer from "./spacer";
import {IExperience} from "../data/data";



const ExperienceCard: React.FC<IExperience> = (params: IExperience) => {
    return (
        <div className={`${cardStyle.cardContainer} flex-col items-start content-start`}>
            <p className={cardStyle.year}>{params.year}</p>
            <Spacer height={14}/>
            <p className={cardStyle.tilte}>{params.title}</p>
            <Spacer height={8}/>
            <p className={cardStyle.subTitle}>{params.subTitle}</p>
            <Spacer height={38}/>

            {
                params.experiences.map((item, index) => {
                    return ExperienceDesc(
                        {desc: item, isLast: index + 1 == params.experiences.length}
                    )
                })
            }
        </div>
    )
}


interface ExperienceDescProps {
    desc: string;
    isLast: boolean;
}

const ExperienceDesc: React.FC<ExperienceDescProps> = (props: ExperienceDescProps) => {
    return (
        <>
        <div className={cardStyle.experienceDescContainer}>
            <p>{props.desc}</p>
        </div>
            {!props.isLast && <Spacer height={12}/>}
        </>
    )
}

export default ExperienceCard;
