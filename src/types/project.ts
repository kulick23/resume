export interface Project {
    title: string;
    projectImg: string;
    mobileImg?: string;
    stack: string[];
    link: string;
    repoLink: string;
}

export interface LaptopProps {
    project: Project;
}