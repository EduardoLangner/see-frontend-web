import React from "react"
import './index.css'

const Card = () => {
    return (
        <div className="card">
            <div className="card-content">
                <div className="card-image">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPgDJ8e2Hx-0O8NfXfWXqb4pmE7pln_J8ZiWt_fqAgcRgZrRPvIKNeyacc4_4q0yjSogk&usqp=CAU" alt="car" />
                </div>
                <div className="card-informations">
                    <div className="card-title">
                        <p>Ximbalaie</p>
                    </div>
                    <div className="card-time">
                        <p>12:00</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card