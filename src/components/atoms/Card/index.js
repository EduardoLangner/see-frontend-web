import React from "react"
import image from "../../../assets/image22.png"
import './index.css'

const Card = (props) => {
    return (
        <div className="card">
            <div className="card-content">
                <div className="card-image">
                    <img src={image} alt="car" />
                </div>
                <div className="card-informations">
                    <div className="card-title">
                        <span className='card-text'>
                            {/* {props.children} */}
                            nome
                        </span>
                    </div>
                    <div className="card-time">
                        <p>144min</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card