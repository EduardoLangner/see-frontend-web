import React from 'react'
import NavBar from '../../molecules/NavBar'
import Card from '../../atoms/Card'
import './index.css'

const Home = () => {
    return (
        <div className="home">
            <div className="home-content">
                <NavBar />
                <Card />
            </div>
        </div>
    )
}

export default Home