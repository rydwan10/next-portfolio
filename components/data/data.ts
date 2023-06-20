export {}

export interface IExperience {
    id: number,
    year: number,
    title: string,
    subTitle: string,
    experiences: string[],
}

export const data: IExperience[] = [
    {
        id: 1,
        year: 2020,
        title: "Dumbways.id",
        subTitle: "Fullstack Developer Bootcamp",
        experiences: [
            "Learn Javascript programming language, Node.js, React.js and Express.js",
            "Create two Fullstack Web App using React.js and Express.js",
            "Trained about how to develop good software and making good portfolio and CV",
        ]
    },
    {
        id: 2,
        year: 2021,
        title: "Andal Softwrae",
        subTitle: "Fulltime Fullstack Developer",
        experiences: [
            "Contribute to developing API using ASP .NET for HRIS application",
            "Integrating and applying logical business to Angular Frontend",
        ]
    },
    {
        id: 3,
        year: 2022,
        title: "Reku.id",
        subTitle: "Fulltime Mobile Developer",
        experiences: [
            "Contribute to maintain and enhancing new feature on Reku (Rekeningku) mobile apps",
            "Contribute to developingnew product that Reku will release using Flutter",
            "Testing and bug fixing the Reku(Rekeningku) mobile apps",
        ]
    }
]
