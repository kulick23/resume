import { makeAutoObservable } from "mobx";

class WorkExperienceStore {
    experiences = [
        {
            id: 1,
            company: "Epam",
            position: "Student Lab",
            duration: "December 2023 - March 2024",
            description: "Work with customers, Soft skills, Programing skills, React",
        },
        {
            id: 2,
            company: "Epam",
            position: "Hackathon",
            duration: "April 2023",
            description: "JS project",
        },
        {
            id: 3,
            company: "CyberX",
            position: "Administrator/Programming",
            duration: "August 2024 - November 2024",
            description: "Work with customers, creating game servers, frontend",
        },
        {
            id: 4,
            company: "Moon",
            position: "Administrator",
            duration: "July 2021 - June 2022",
            description: "Sales, Merchandising, Event Participation, Team Collaboration",
        },
        {
            id: 5,
            company: "Koryaga by",
            position: "Manager",
            duration: "December 2018 - March 2022",
            description: "Photo design, Target, Sales",
        },

    ];

    constructor() {
        makeAutoObservable(this);
    }
}

const workExperienceStore = new WorkExperienceStore();
export default workExperienceStore;
