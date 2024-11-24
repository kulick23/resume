import React from 'react'
import './about.css'
import clouds from '../../Images/clouds.png'
import lars from '../../Images/lars.png'

const About: React.FC = () => {
    return (
        <div className='about'>
            <div className='about__left'>
                <h1>Hello world!</h1>
            </div>
            <div className='about__right'>
                <p className='about__text'>
                    My name is Danila)<br />
                    As a multifaceted Web Developer, I bring a unique blend of skills and experiences that span across UI/UX design, front-end development with JS/React, and database management using SQL.<br />
                    My proficiency extends to Git, C/C++, OOP, Linux, and more, ensuring versatile solutions for diverse web development challenges.<br />
                    My educational journey through IT STEP Minsk, Internation Sakharov Environmental University, and EPAM School of Digital Engineering has equipped me with a strong foundation in Software Development, Digital Technologies, and Software Testing.<br />
                    My professional experience includes roles in customer service, sales, and management, which have honed my skills in communication, teamwork, and fast learning.<br />
                    Fluent in Russian, Belarusian, and proficient in English and Polish, I am ready to contribute to and thrive in multicultural teams.<br />
                    Let's connect and explore how we can create impactful digital solutions together.
                </p>
            </div>
            <img src={clouds} alt="Clouds" className='clouds' />
            <img src={lars} alt="Lars" className='lars' />
        </div>
    )
}

export default About