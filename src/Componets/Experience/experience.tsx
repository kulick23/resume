import React from "react";
import { observer } from "mobx-react-lite";
import workExperienceStore from "../../Stores/experienceStore";
import "./experience.css";

const Experience: React.FC = observer(() => {
    return (
        <div className="experience">
            <h2 className="experience__title">Work Experience</h2>
            <div className="experience__container">
                {workExperienceStore.experiences.map((experience) => (
                    <div className="experience__card" key={experience.id}>
                        <h3 className="experience__company">{experience.company}</h3>
                        <p className="experience__position">{experience.position}</p>
                        <p className="experience__duration">{experience.duration}</p>
                        <p className="experience__description">{experience.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
});

export default Experience;