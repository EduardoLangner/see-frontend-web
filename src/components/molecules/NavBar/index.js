import React from 'react'
import Logo from '../../../assets/logo.png'
import Button from '../../atoms/Button'
import Search from '../../atoms/Search'

import './index.css'

const NavBar = () => {

    

    return (
        <nav className="nav-bar">
            <div className="nav-bar-content">
                <div className="nav-bar-menu">
                    <div className="icon-logo">
                        <Button href="/"><img className="logo" src={Logo} alt="logo" /></Button>
                    </div>
                    <nav className="nav-bar-menu-buttons">
                        <Button href="/">Início</Button>
                        <Button href="/filmes">Filmes</Button>
                        <Button href="/series">Series</Button>
                        <Button href="/generos">Gêneros</Button>
                        <Search />
                    </nav>
                    {/* <span className="iconSearch"><FaSearch /></span>
                    <div className="expanded-search">   
                        <input className="search-active" type="text" placeholder="Pesquisar..."></input>
                    </div> */}
                </div>
            </div>
        </nav>
    )
}

export default NavBar