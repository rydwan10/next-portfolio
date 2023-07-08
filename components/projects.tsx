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
                            <ProjectCard key={item.id} project={item} />
                        )
                    })
                }
            </div>

        </div>
    )
}


export default Projects