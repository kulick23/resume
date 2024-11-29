import { makeAutoObservable } from "mobx";

class SkillsStore {
    skills = {
        "techSkills": ["HTML", "CSS", "JS/TS", "React", "SQL", "C/C++", "Python"],
        "softSkills": [
            "Scrum", "Teamwork", "Communication", "Problem Solving", "Work with customers"
        ],
        "Tools": ["Git", "Microsoft Office", "Photoshop", "Figma", "UML", "Linux"],
        "Languages": ["English", "Russian", "Polish", "Belarusian"]
    };

    constructor() {
        makeAutoObservable(this);
    }
}

export default new SkillsStore();
