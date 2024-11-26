import React from "react"
import './footer.css'
import NaboImg from '../../Assets/nabo.png'

const Footer: React.FC = () => {
    return (
        <footer className='footer'>
            <div className='footer-content'>
                <img src={NaboImg} alt="Nabo" className='footer-image' />
                <h1>Thank you for watching</h1>
                <h2>Looking forward to working together</h2>
            </div>
        </footer>
    )
}

export default Footer