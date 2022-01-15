import React, { useState } from 'react'
import {  Link ,useLocation } from "wouter";
import logo from './logo.svg';

const Navbar = () => {
    const [keyword, setKeyword] = useState('');

    const [path, pushLocation] = useLocation(); // path: locaion actual, pushLocation: locacion nueva

    const handleChange = e => {
        setKeyword(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        pushLocation(`/search/${keyword}`); // Nueva locacion
        // setKeyword('')
    }
    return (
        <nav className="navbar blur">
            <Link to='/'>
                <img src={logo} alt="moviepedia logo" />
            </Link>
            <div className="el-r">
                <form className="search" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="search">
                            <i className="fas fa-search"></i>
                        </label>

                        <input type="text" id="search" onChange={handleChange} value={keyword} spellCheck='false' autoComplete='off' placeholder="Buscar Pelicula"/>
                    </div>
                </form>  
                <i className="fas fa-ellipsis-v"></i>
            </div>

            
        </nav>
    )
}

export default Navbar
