import React from "react";
import "./laptop.css";
import laptopImg from "../../../Images/macbook.png";
import phonImg from "../../../Images/iphon.png";

interface Project {
    title: string;
    projectImg: string;
    mobileImg?: string; // Добавляем mobileImg
}

interface LaptopProps {
    project: Project;
}

const Laptop: React.FC<LaptopProps> = ({ project }) => {
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
        </div>
    );
};

export default Laptop;