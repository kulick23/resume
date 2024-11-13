import { makeAutoObservable } from "mobx";

interface Project {
    title: string;
    description: string;
    link: string;
    languages: string[];
}

class ProjectsStore {
    projects: Project[] = [
        {
            title: "Food market",
            description: "React project with light/dark themes, Account system with firebase and Redux statement",
            link: "https://gitlab.com/esde1/home_react_project",
            languages: ["React", "TS", "CSS"],
        },
        {
            title: "News",
            description: "React project with adding news functional",
            link: "https://gitlab.com/Kulick23/esde_news",
            languages: ["React", "JS", "CSS"],
        },
        {
            title: "Menu mini-app",
            description: "Telegram mini app, food menu with changing ingredients",
            link: "https://github.com/kulick23/menu-tg",
            languages: ["React", "TS", "CSS"],
        },
        {
            title: "Nike",
            description: "JS project Nike slider with dynamic HTML generation",
            link: "https://github.com/kulick23/slider_nike",
            languages: ["JS", "HTML", "CSS"],
        },
        {
            title: "Beats",
            description: "JS project Beats market landing",
            link: "https://github.com/kulick23/esde-intro-to-web-dev-tasks/tree/master/packages/hometask-beats",
            languages: ["JS", "HTML", "CSS"],
        },
        {
            title: "Music",
            description: "Music website landing with dynamic HTML generation",
            link: "https://github.com/kulick23/esde-intro-to-web-dev-tasks/tree/master/packages/hometask-music",
            languages: ["JS", "HTML", "CSS"],
        },
        {
            title: "Pets",
            description: "Mobile first layout",
            link: "https://github.com/kulick23/esde-intro-to-web-dev-tasks/tree/master/packages/hometask-pet",
            languages: ["JS", "HTML", "CSS"],
        },
        {
            title: "Bar",
            description: "My finale project in IT Step, Bar website",
            link: "https://github.com/kulick23/project_bar",
            languages: ["React", "JS", "CSS"],
        },
    ];

    selectedLanguage: string = "";

    constructor() {
        makeAutoObservable(this);
    }

    get filteredProjects() {
        return this.selectedLanguage
            ? this.projects.filter((project) => project.languages.includes(this.selectedLanguage))
            : this.projects;
    }

    setLanguage(language: string) {
        this.selectedLanguage = language;
    }
}

export default new ProjectsStore();
