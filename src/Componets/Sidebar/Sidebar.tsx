import React from 'react';
import { Link } from 'react-scroll';
import './Sidebar.scss';
import { useTranslation } from 'react-i18next';
import { SECTIONS } from '../../Constants';

type SidebarNavProps = {
  onSetActive: (section: string) => void;
};

export const Sidebar: React.FC<SidebarNavProps> = ({ onSetActive }) => {
  const { t } = useTranslation();

  return (
    <div className="sidebar">
      {SECTIONS.map((section) => (
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
