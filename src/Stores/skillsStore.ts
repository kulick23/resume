import { makeAutoObservable } from "mobx";

class SkillsStore {
    skills = {
        "techSkills": ["HTML", "CSS", "JS/TS", "React", "SQL", "C/C++", "Python"],
        "softSkills": [
            "Teamwork",
            "Communication",
            "Problem Solving",
            "Work with customers",
            "Development methodologies"
        ],
        "Tools": ["Git", "Microsoft Office", "Photoshop", "Figma", "UML", "Linux"],
        "Languages": ["English", "Russian", "Polish", "Belarusian"]
    };

    constructor() {
        makeAutoObservable(this);
    }
}

const skillsStore = new SkillsStore();

export default skillsStore;