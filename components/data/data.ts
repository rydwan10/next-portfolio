export { }

export interface IExperience {
    id: number,
    year: number,
    title: string,
    subTitle: string,
    website: string,
    experienceDetail: string[],
}

export interface IProject {
    id: number,
    projectName: string,
    stackLogo: string[],
    desc: string,
    repoUrl: string,
    projectImage: string,
}

export const experienceData: IExperience[] = [
    {
        id: 1,
        year: 2020,
        title: "Dumbways.id",
        subTitle: "Fullstack Developer Bootcamp",
        website: "https://www.dumbways.id/",
        experienceDetail: [
            "Learn Javascript programming language, Node.js, React.js and Express.js",
            "Create two Fullstack Web App using React.js and Express.js",
            "Trained about how to develop good software and making good portfolio and CV",
        ]
    },
    {
        id: 2,
        year: 2021,
        title: "Andal Software",
        subTitle: "Fulltime Fullstack Developer",
        website: "https://andalsoftware.com/",
        experienceDetail: [
            "Contribute to developing API using ASP .NET for HRIS application",
            "Integrating and applying logical business to Angular Frontend",
        ]
    },
    {
        id: 3,
        year: 2022,
        title: "Reku.id",
        website: "https://reku.id/",
        subTitle: "Fulltime Mobile Developer",
        experienceDetail: [
            "Contribute to maintain and enhancing new feature on Reku (Rekeningku) mobile apps",
            "Contribute to developingnew product that Reku will release using Flutter",
            "Testing and bug fixing the Reku(Rekeningku) mobile apps",
        ]
    }
]


export const projectData: IProject[] = [
    {
        id: 1,
        projectName: "Shamo",
        stackLogo: [
            "/assets/svg/stack/flutter.svg",
            "/assets/svg/stack/laravel.svg",
            "/assets/svg/stack/firebase.svg",
        ],
        desc: "Shamo is a Point of Sales application that aims to sell various types of shoes. Shamo is built using Flutter as the mobile frontend, Laravel as the API service, and Firebase for real-time chat features.",
        repoUrl: "https://github.com/rydwan10/fullstack-laravel-flutter-e-commerce",
        projectImage: "/assets/png/shamo.png"
    },
    {
        id: 2,
        projectName: "Vinways Music Gallery",
        stackLogo: [
            "/assets/svg/stack/expressjs.svg",
            "/assets/svg/stack/reactjs.svg",
            "/assets/svg/stack/nodejs.svg",
        ],
        desc: "Vinways is Spotify like music streaming platform. User can use their subscription to play any song they want. Vinways built using Express.js as the API service and React.js as the frontend",
        repoUrl: "https://github.com/rydwan10/DWF199LKB_vinways_final",
        projectImage: "/assets/png/vinways.png"
    },

]
