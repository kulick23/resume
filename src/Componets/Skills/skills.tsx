import React from "react";
import { observer } from "mobx-react-lite";
import skillsStore from "../../Stores/skillsStore";
import './skills.css';

const Skills: React.FC = observer(() => {
    return (
        <div className="skills">
            <h1>My Skills</h1>
            <div className="skills__categories">
                {Object.entries(skillsStore.skills).map(([category, skills]) => (
                    <div key={category} className="skills__category">
                        <h3 className="skills__category--title">{category}</h3>
                        <ul className="skills__category--list">
                            {skills.map((skill) => (
                                <li key={skill} className="skills__category--item">{skill}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
});

export default Skills;
