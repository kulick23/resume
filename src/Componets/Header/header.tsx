import React from "react"
import './header.css'
import { NavLink } from 'react-router-dom';
import Photo from '../../Images/re.jpg'
import LinkedIn from '../../Images/linkedin.svg'
import Github from '../../Images/github.svg'
import Gitlab from '../../Images/gitlab.svg'
import Telegram from '../../Images/telegram.svg'


const Header: React.FC = () =>{


    return(
        <header className='header'>
            <div className='header__card'>
                <NavLink to='/'>
                <img className='header__logo' src={Photo} alt="Photo" />
                </NavLink>
                <h1>Danila</h1>
                <h1>Kulinkovich</h1>
                <a>web developer</a>

                <div className='header__favicons'>
                    <a href="https://www.linkedin.com/in/danila-kulinkovich/" target="_blank" rel="noopener noreferrer">
                        <img className='header__favicons--img' src={LinkedIn} alt="LinkedIn" />
                    </a>
                    <a href="https://t.me/chik_chiv" target="_blank" rel="noopener noreferrer">
                        <img className='header__favicons--img' src={Telegram} alt="Telegram" />
                    </a>
                    <a href="https://github.com/kulick23" target="_blank" rel="noopener noreferrer">
                        <img className='header__favicons--img' src={Github} alt="Github" />
                    </a>
                    <a href="https://gitlab.com/Kulick23" target="_blank" rel="noopener noreferrer">
                        <img className='header__favicons--img' src={Gitlab} alt="Gitlab" />
                    </a>
                </div>
                <a>danek200326@gmail.com</a>

            </div>
            <div className='header__pages'>
                <NavLink
                    to="/skills"
                    className={({isActive}) => isActive ? 'header__links--active' : 'header__links'}
                    >Skills</NavLink>
                <NavLink
                    to="/projects"
                    className={({isActive}) => isActive ? 'header__links--active' : 'header__links'}
                    >Projects</NavLink>
                <NavLink
                    to="/experience"
                    className={({isActive}) => isActive ? 'header__links--active' : 'header__links'}
                    >Experience</NavLink>
            </div>
        </header>
    )
}

export default Header;