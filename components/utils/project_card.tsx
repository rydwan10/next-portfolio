import { Button, Typography } from "@material-tailwind/react"
import Spacer from "./spacer"
import { IProject } from "../data/data"


const ProjectCard: React.FC<{ project: IProject }> = ({ project }) => {
    const handleOnClick = () => {
        window.open(project.repoUrl, '_blank');
    }

    return (
        <div className="bg-dark-main rounded-3xl shadow-xl w-auto px-6 py-9 border border-purple-500 max-w-4abouxl">
            <div className="lg:flex justify-center">
                {/* Image */}
                <div className="lg:w-1/2 flex justify-center pr-4">
                    <img
                        className="h-auto w-full object-cover lg:h-full lg:w-full bg-center"
                        src={project.projectImage}
                        alt="Image"
                    />
                </div>

                {/* Content */}
                <div className="lg:w-1/2 flex flex-col justify-center">
                    <Typography as="h3" className="mb-3 font-semibold text-white text-3xl text-center lg:text-left">
                        Shamo
                    </Typography>
                    <Spacer height={30} />
                    <Typography as="p" className="text-white font-medium text-lg text-center lg:text-left">
                        Stack Used:
                    </Typography>
                    <Spacer height={23} />
                    <div className="flex flex-row justify-center lg:justify-start">
                        {project.stackLogo.map((item) => {
                            return <img src={item} alt="stack logo" className="mr-8" />;
                        })}
                    </div>
                    <Spacer height={45} />
                    <Typography as="p" className="text-white font-medium text-lg text-center lg:text-left">
                        {project.desc}
                    </Typography>

                    <Spacer height={40} />
                    <button
                        onClick={() => handleOnClick()}
                        className="border-2 border-blue-400 inline-flex items-center justify-center px-4 py-2 rounded-full bg-dark-experienceDetails text-white focus:outline-blue-500 focus:ring-2 focus:ring-blue-500 lg:max-w-md"
                    >
                        <img className="w-6 h-6 mr-2" src="assets/svg/ic_github.svg" alt="Image" />
                        <span>Repository</span>
                    </button>
                </div>
            </div>
        </div>

    )
}



export default ProjectCard