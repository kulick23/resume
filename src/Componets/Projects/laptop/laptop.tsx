import React from "react";
import "./laptop.css";
import laptopImg from "../../../Assets/macbook.png";
import phonImg from "../../../Assets/iphon.png";

interface Project {
    title: string;
    projectImg: string;
    mobileImg?: string;
    stack: string[];
    link: string;
    repoLink: string;
}

interface LaptopProps {
    project: Project;
}

const Laptop: React.FC<LaptopProps> = ({ project }) => {
    const handleProjectClick = () => {
        window.open(project.link, "_blank");
    };

    const handleRepoClick = () => {
        window.open(project.repoLink, "_blank");
    };

    return (
        <div className="laptop">
            <div onClick={handleProjectClick} className="laptop__box">
            <img src={laptopImg} alt="Laptop" className="laptop--image" />
            <div className="laptop__screen">
                <img
                    src={project.projectImg}
                    alt={project.title}
                    className="laptop--preview"
                />
            </div>
            {project.mobileImg && (
                <div className="laptop__phone">
                    <img src={phonImg} alt="Phone" className="laptop__phone--image" />
                    <div className="laptop__phone--screen">
                        <img
                            src={project.mobileImg}
                            alt={`${project.title} mobile`}
                            className="laptop--preview"
                        />
                    </div>
                </div>
            )}
            
            <div className="laptop__stack">
                [{project.stack.join(", ")}]
            </div>
            </div>
                <button className="laptop__button" onClick={handleRepoClick}></button>
        </div>
    );
};

export default Laptop;