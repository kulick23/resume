import type React from "react"
import "./BusinessLaptop.scss"
import { LAPTOP_IMG } from "../../Constants"
import type { BusinessLaptopProps } from "../../types"

export const BusinessLaptop: React.FC<BusinessLaptopProps> = ({ project, onNDAClick }) => {
  const handleNDAClick = () => {
    onNDAClick(project)
  }

  return (
    <div className="business-laptop">
      <div className="business-laptop__box">
        <div className="business-laptop__screen">
          <div className="business-laptop__nda-overlay">
            <div className="business-laptop__nda-content">
              <h3>NDA</h3>
              <p>Confidential Project</p>
            </div>
          </div>
        </div>
        <img src={LAPTOP_IMG || "/placeholder.svg"} alt="Laptop" className="business-laptop--image" />
        <div className="business-laptop__stack">[{project.stack.join(", ")}]</div>
      </div>
      <div className="business-laptop__info-btn" onClick={handleNDAClick}>
        <span>?</span>
      </div>
    </div>
  )
}

export default BusinessLaptop
