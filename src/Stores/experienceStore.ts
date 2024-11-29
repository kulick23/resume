import { makeAutoObservable } from "mobx";

class WorkExperienceStore {
    experiences = [
        {
            id: 1,
            company: "CyberX",
            position: "experience.experiences.1.position",
            duration: "August 2024 - November 2024",
            description: "experience.experiences.1.description",
        },
        {
            id: 2,
            company: "Epam ESDE",
            position: "experience.experiences.2.position",
            duration: "December 2023 - March 2024",
            description: "experience.experiences.2.description",
        },
        {
            id: 3,
            company: "Epam ESDE",
            position: "experience.experiences.3.position",
            duration: "April 2023",
            description: "experience.experiences.3.description",
        },
        {
            id: 4,
            company: "Epam ESDE",
            position: "experience.experiences.4.position",
            duration: "February 2023",
            description: "experience.experiences.4.description",
        },
    ];

    constructor() {
        makeAutoObservable(this);
    }
}

const workExperienceStore = new WorkExperienceStore();
export default workExperienceStore;