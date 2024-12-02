import React from 'react';
import { Link } from 'react-scroll';
import './Sidebar.css';
import { useTranslation } from 'react-i18next';

type SidebarNavProps = {
    onSetActive: (section: string) => void;
};

const Sidebar: React.FC<SidebarNavProps> = ({ onSetActive }) => {
    const { t } = useTranslation();
    const sections = ['header', 'about', 'skills', 'projects', 'experience', 'footer'];

    return (
        <div className="sidebar">
            {sections.map((section) => (
                <Link
                    key={section}
                    activeClass="active"
                    to={section}
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="sidebar__nav"
                    onSetActive={() => onSetActive(section)}
                >
                    {t(`sidebar.${section}`)}
                </Link>
            ))}
        </div>
    );
};

export default Sidebar;