import { makeAutoObservable } from "mobx";

class SkillsStore {
    skills = {
        "Tech Skills": ["HTML", "CSS", "JS/TS", "React", "SQL", "C/C++", "Python"],
        "Soft Skills": [
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
