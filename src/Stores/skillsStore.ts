import { makeAutoObservable } from "mobx";

class SkillsStore {
    skills = {
        "Frontend": ["HTML", "CSS", "JavaScript", "React", "Angular"],
        "Backend": ["SQL", "MySQL", "C/C++", "Python"],
        "Tools": ["Git", "Microsoft Office", "Photoshop", "UML", "Linux"],
        "Soft Skills": [
            "Scrum", "Teamwork", "Communication", "Problem Solving", "Work with customers"
        ],
        "Languages": ["English", "Russian", "Polish", "Belarusian"],
        "Other": [
            "Digital Photography", "Image Editing",
            "Event Participation", "Marketing", "AI Prompts"
        ]
    };

    constructor() {
        makeAutoObservable(this);
    }
}

export default new SkillsStore();
