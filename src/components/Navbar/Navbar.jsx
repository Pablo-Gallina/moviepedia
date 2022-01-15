import React from 'react';
import logo from './logo.svg';

const Navbar = () => {
    return (
        <nav className="navbar blur">
            <img src={logo} alt="moviepedia logo" />
            <div className="el-r">
                <i className="fas fa-search"></i>
                <i className="fas fa-ellipsis-v"></i>
            </div>
        </nav>
    )
}

export default Navbar
