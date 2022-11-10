import React from "react"
import './index.css'

const Button = (props) => {
    return (
        <div className="button-content">
            <a href={props.href}>
                <button className="button">{props.children}</button>
            </a>
        </div>
    )
}

export default Button