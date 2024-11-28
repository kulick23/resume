import React from 'react'
import './about.css'
import clouds from '../../Assets/clouds.png'
import lars from '../../Assets/lars.png'

const About: React.FC = () => {
    return (
        <div className='about'>
            <div className='about__left'>
                <h1>Hello world!</h1>
            </div>
            <div className='about__right'>
                <p className='about__text'>
                    As a multifaceted Web Developer, I bring a unique blend of skills and experiences that span across UI/UX design, front-end development with JS/React, and database management using SQL.<br />
                    My proficiency extends to Git, C/C++, OOP, Linux, and more, ensuring versatile solutions for diverse web development challenges.<br />
                </p>
            </div>
            <img src={clouds} alt="Clouds" className='clouds' />
            <img src={lars} alt="Lars" className='lars' />
        </div>
    )
}

export default About