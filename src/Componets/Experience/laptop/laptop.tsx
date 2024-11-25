import React from "react";
import "./laptop.css";
import laptopImg from "../../../Images/macbook.png";
import phonImg from "../../../Images/iphon.png";

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
        <div className="laptop-container">
            <img src={laptopImg} alt="Laptop" className="laptop-image" />
            <div className="screen">
                <img
                    src={project.projectImg}
                    alt={project.title}
                    className="site-preview"
                />
            </div>
            {project.mobileImg && (
                <div className="phone-container">
                    <img src={phonImg} alt="Phone" className="phone-image" />
                    <div className="phone-screen">
                        <img
                            src={project.mobileImg}
                            alt={`${project.title} mobile`}
                            className="site-preview"
                        />
                    </div>
                </div>
            )}
            <div className="stack-info">
                [{project.stack.join(", ")}]
            </div>
            <div className="laptop__buttons">
                <button className="laptop__button1" onClick={handleProjectClick}></button>
                <button className="laptop__button2" onClick={handleRepoClick}></button>
            </div>
        </div>
    );
};

export default Laptop;