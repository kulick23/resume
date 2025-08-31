import { makeAutoObservable } from "mobx";

class WorkExperienceStore {
    experiences = [
        {
            id: 4,
            company: "CyberX",
            position: "experience.experiences.1.position",
            duration: "08.2024 - 11.2024",
            description: "experience.experiences.1.description",
        },
        {
            id: 3,
            company: "Epam ESDE",
            position: "experience.experiences.2.position",
            duration: "12.2023 - 03.2024",
            description: "experience.experiences.2.description",
        },
        {
            id: 2,
            company: "Epam ESDE",
            position: "experience.experiences.3.position",
            duration: "04.2023",
            description: "experience.experiences.3.description",
        },
        {
            id: 1,
            company: "Epam ESDE",
            position: "experience.experiences.4.position",
            duration: "02.2023",
            description: "experience.experiences.4.description",
        },
    ];

    constructor() {
        makeAutoObservable(this);
    }
}

const workExperienceStore = new WorkExperienceStore();
export default workExperienceStore;
