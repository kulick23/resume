import React from "react"
import './header.css'
import LinkedIn from '../../Images/linkedin.svg'
import Github from '../../Images/github.svg'
// import Gitlab from '../../Images/gitlab.svg'
import Telegram from '../../Images/telegram.svg'

const Header: React.FC = () => {
    return (
        <header className='header'>
            <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>
            <div className='header__card'>
                <p>HI, my name is Danila Kulinkovich</p>
                <div className='header__web'>
                    <h1>WEB</h1>
                    <div className='header__favicons'>
                    <a href="https://github.com/kulick23" target="_blank" rel="noopener noreferrer">
                            <img className='header__favicons--img' src={Github} alt="Github" />
                        </a>
                        {/* <a href="https://gitlab.com/Kulick23" target="_blank" rel="noopener noreferrer">
                            <img className='header__favicons--img' src={Gitlab} alt="Gitlab" />
                        </a> */}
                        <a href="https://t.me/chik_chiv" target="_blank" rel="noopener noreferrer">
                            <img className='header__favicons--img' src={Telegram} alt="Telegram" />
                        </a>
                        <a href="https://www.linkedin.com/in/danila-kulinkovich/" target="_blank" rel="noopener noreferrer">
                            <img className='header__favicons--img' src={LinkedIn} alt="LinkedIn" />
                        </a>
                       
                    </div>
                </div>
                <h1>DEVELOPER</h1>
                <p>danek200326@gmail.com</p>
            </div>
        </header>
    )
}

export default Header