import React from 'react'
import './index.css'

const Search = () => {
    return (
        <form action="" class="search-bar">
            <input type="search" name="search" required autocomplete="off" placeholder="Pesquisar"/>
            <button class="search-button" type="submit"></button>
        </form>
    )
}

export default Search