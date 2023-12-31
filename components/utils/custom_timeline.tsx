
import { useEffect, useState } from 'react';
import { IExperience } from '../data/data';
import { Typography } from '@material-tailwind/react';
import textStyle from "./styles/Text.module.css"
import FadeInFromSideOnScroll from './fade_in_from_side_on_scroll';



interface TimelineProps {
    experiences: IExperience[];
}

interface ItemTimelineProps {
    experience: IExperience;
    isEven: boolean;
}

const useShowInLgOnly = () => {
    const [isLgScreen, setIsLgScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsLgScreen(window.innerWidth >= 960);
        };

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Call handleResize initially
        handleResize();

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return isLgScreen;
};

const CustomTimeline: React.FC<TimelineProps> = ({ experiences }) => {

    return (
        <div className="container mx-auto w-full h-full">
            <div className="relative wrap overflow-hidden p-10 h-full">
                {/* Vertical Divider */}
                <div className="border-2-2 absolute border-opacity-30 border-purple-700 h-full border hidden md:hidden sm:hidden lg:block" style={{ left: '50%' }}></div>

                {experiences.map((item, index) => {
                    let isEven = ((index + 1) % 2) == 0 ? true : false;

                    if (isEven) {
                        return (<FadeInFromSideOnScroll key={item.id} duration={0.5} direction='left'><TimelineItem experience={item} isEven={true} /></FadeInFromSideOnScroll>)
                    }

                    return (<FadeInFromSideOnScroll key={item.id} duration={0.5} direction='right'><TimelineItem experience={item} isEven={false} /></FadeInFromSideOnScroll>)
                })}

            </div>
        </div>
    )
}

const TimelineItem: React.FC<ItemTimelineProps> = ({ experience, isEven }) => {
    const rightTimelineClass = "mb-8 flex justify-between sm:flex-col md:flex-col lg:flex-row items-center w-full right-timeline";
    const leftTimelineClass = "mb-8 flex justify-between sm:flex-col md:flex-col lg:flex-row-reverse items-center w-full left-timeline";

    function handleOnClickTitle(url: string) {
        if (url) {
            window.open(url, '_blank');
        }
    }

    return (
        <div className={isEven ? rightTimelineClass : leftTimelineClass}>
            {/* Bullet */}
            {useShowInLgOnly() && <div className="order-1 w-5/12"></div>}
            <div className="hidden md:hidden lg:block z-20 items-center order-1 bg-purple-400 border-4 border-purple-800 shadow-xl w-8 h-8 rounded-full">
            </div>


            {/* Content */}
            <div className="order-1 bg-dark-main rounded-3xl shadow-xl w-auto sm:w-auto md:w-auto lg:w-5/12 px-6 py-9 border border-purple-500">
                <h3 className={`mb-3 font-semibold text-3xl ${textStyle.purpleText}`}>{experience.year}</h3>

                <a className={`mb-1 font-semibold text-3xl ${textStyle.linkText}`} href={experience.website} target="_blank" rel="noopener noreferrer">
                    {experience.title}
                </a>


                <h3 className="mb-14 font-light text-white text-2xl">{experience.subTitle}</h3>

                {experience.experienceDetail.map((item, index) => {
                    return (
                        <ExperienceDetail key={index} experienceDetail={item} isLast={index + 1 == experience.experienceDetail.length} />
                    )
                })}

            </div>
        </div>
    )
}

const ExperienceDetail: React.FC<{ experienceDetail: String, isLast: boolean }> = ({ experienceDetail, isLast }) => {
    return (
        <div className={`bg-dark-experienceDetails rounded-xl px-4 py-6 ${isLast ? null : "mb-5"} `}>
            <Typography
                as="a"
                className="text-white md:text-xl sm:text-base font-medium"
            >
                {experienceDetail}
            </Typography>
        </div>
    )
}




export default CustomTimeline
