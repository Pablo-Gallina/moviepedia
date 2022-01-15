import React from 'react';
import logo from './logo.svg';

const Navbar = () => {
    return (
        <nav className="navbar blur">
            <img src={logo} alt="moviepedia logo" />
            <div className="el-r">
                <form className="search">
                    <div>
                        <label htmlFor="search">
                            <i className="fas fa-search"></i>
                        </label>

                        <input type="text" id="search" autoComplete='off' placeholder="Buscar Pelicula"/>
                    </div>
                </form>  
                <i className="fas fa-ellipsis-v"></i>
            </div>

            
        </nav>
    )
}

export default Navbar
