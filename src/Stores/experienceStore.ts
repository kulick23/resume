import { makeAutoObservable } from "mobx";

class WorkExperienceStore {
    experiences = [
        {
            id: 1,
            company: "CyberX",
            position: "Administrator/Programming",
            duration: "August 2024 - November 2024",
            description: "Work with customers, creating game servers, frontend",
        },
        {
            id: 2,
            company: "Epam ESDE",
            position: "Student Lab",
            duration: "December 2023 - March 2024",
            description: "Work with customers, Soft skills, Programing skills, React project",
        },
        {
            id: 3,
            company: "Epam ESDE",
            position: "Hackathon",
            duration: "April 2023",
            description: "React project",
        },
        {
            id: 4,
            company: "Epam ESDE",
            position: "Hackathon",
            duration: "February 2023",
            description: "JS project",
        },
      
    ];

    constructor() {
        makeAutoObservable(this);
    }
}

const workExperienceStore = new WorkExperienceStore();
export default workExperienceStore;
