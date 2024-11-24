import { makeAutoObservable } from "mobx";
import barImg from '../Images/Screenshot/bar.png';
import beatsImg from '../Images/Screenshot/beats.png';
import beatsMobImg from '../Images/Screenshot/beatsmob.png';
import compoImg from '../Images/Screenshot/compo.png';
import cyberImg from '../Images/Screenshot/cyber.png';
import cyberMobImg from '../Images/Screenshot/cybermob.jpg';
import energoImg from '../Images/Screenshot/energo.png';
import energoMobImg from '../Images/Screenshot/energomob.png';
import esdeImg from '../Images/Screenshot/esde.png';
import foodImg from '../Images/Screenshot/food.png';
import musicImg from '../Images/Screenshot/music.png';
import nikeImg from '../Images/Screenshot/nike.png';
import petImg from '../Images/Screenshot/pet.png';
import petMobImg from '../Images/Screenshot/petmob.png';
import qweryImg from '../Images/Screenshot/qwery.png';

interface Project {
    title: string;
    link: string;
    repoLink: string;
    languages: string[];
    projectImg: string;
    mobileImg?: string;
}

class ProjectsStore {
    projects: Project[] = [
        {
            title: "Food market",
            repoLink: "https://github.com/kulick23/food",
            link: "https://kulick23.github.io/food/",
            languages: ["React", "TS", "Redux", "Firebase"],
            projectImg: foodImg,
        },
        {
            title: "ESDE",
            repoLink: "https://github.com/kulick23/esde",
            link: "https://kulick23.github.io/esde/",
            languages: ["React", "JS"],
            projectImg: esdeImg,
        },
        {
            title: "Telegram mini-app",
            repoLink: "https://github.com/kulick23/menu-tg",
            link: "t.me/gethoroscope_bot/menu",
            languages: ["React", "TS"],
            projectImg: cyberImg,
            mobileImg: cyberMobImg,
        },
        {
            title: "Nike",
            repoLink: "https://github.com/kulick23/slider_nike",
            link: "https://kulick23.github.io/slider_nike/",
            languages: ["JS", "HTML", "CSS", "Vite"],
            projectImg: nikeImg,
        },
        {
            title: "Beats",
            repoLink: "https://github.com/kulick23/beats",
            link: "https://kulick23.github.io/beats/",
            languages: ["JS", "HTML", "CSS", "Vite"],
            projectImg: beatsImg,
            mobileImg: beatsMobImg,
        },
        {
            title: "Simo",
            repoLink: "https://github.com/kulick23/simo",
            link: "https://kulick23.github.io/simo/",
            languages: ["JS", "HTML", "CSS", "Vite"],
            projectImg: musicImg,
        },
        {
            title: "Pet",
            repoLink: "https://github.com/kulick23/pet",
            link: "https://kulick23.github.io/pet/",
            languages: ["HTML", "CSS"],
            projectImg: petImg,
            mobileImg: petMobImg,
        },
        {
            title: "Bar",
            repoLink: "https://github.com/kulick23/project_bar",
            link: "https://kulick23.github.io/project_bar/",
            languages: ["React", "JS", "MobX", "Firebase"],
            projectImg: barImg,
        },
        {
            title: "Compo",
            repoLink: "https://github.com/kulick23/compo",
            link: "https://kulick23.github.io/compo/",
            languages: ["React", "JS", "CSS"],
            projectImg: compoImg,
        },
        {
            title: "Energo",
            repoLink: "https://github.com/kulick23/EnergyConstruction",
            link: "https://kulick23.github.io/EnergyConstruction/",
            languages: ["HTML", "CSS", "OWL carousel"],
            projectImg: energoImg,
            mobileImg: energoMobImg,
        },
        {
            title: "Qwery",
            repoLink: "https://github.com/kulick23/qwery",
            link: "https://kulick23.github.io/qwery/",
            languages: ["HTML", "CSS"],
            projectImg: qweryImg,
        },
    ];

    selectedLanguage: string = "";

    constructor() {
        makeAutoObservable(this);
    }
}

export default new ProjectsStore();