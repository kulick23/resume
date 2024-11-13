import React from "react";
import { observer } from "mobx-react-lite";
import skillsStore from "../../Stores/skillsStore";
import './skills.css';

const Skills: React.FC = observer(() => {
    return (
        <div className="skills">
            <h2>My Skills</h2>
            <div className="skills__categories">
                {Object.entries(skillsStore.skills).map(([category, skills]) => (
                    <div key={category} className="skills__categories--category">
                        <h3 className="skills__categories--title">{category}</h3>
                        <ul className="skills__categories--list">
                            {skills.map((skill) => (
                                <li key={skill} className="skills__categories--item">{skill}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
});

export default Skills;
