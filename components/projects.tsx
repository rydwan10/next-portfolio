import { Typography } from "@material-tailwind/react"
import Spacer from "./utils/spacer"
import textStyle from "./utils/styles/Text.module.css"
import { projectData } from "./data/data"
import ProjectCard from "./utils/project_card"


const Projects: React.FC = () => {
    return (
        <div className="flex flex-col content-center items-center px-4" id="projects">
            <Typography className={`${textStyle.sectionText} md:text-5xl text-4xl`}>
                Projects
            </Typography>
            <Spacer height={120} />
            <div>
                {
                    projectData.map((item) => {
                        return (
                            <>
                                <ProjectCard key={item.id} project={item} />
                                <Spacer height={58} />
                            </>


                        )
                    })
                }
                <div className="flex justify-center">
                    <button
                        onClick={() => {
                            window.open("https://github.com/rydwan10", '_blank')
                        }}
                        className="border-2 border-blue-400 inline-flex items-center justify-center px-4 py-2 rounded-full bg-dark-experienceDetails text-white focus:outline-blue-500 focus:ring-2 focus:ring-blue-500 lg:max-w-md"
                    >
                        <img className="w-6 h-6 mr-2" src="assets/svg/ic_github.svg" alt="Image" />
                        <span>More projets on Github</span>
                    </button>
                </div>
            </div>

        </div>
    )
}


export default Projects