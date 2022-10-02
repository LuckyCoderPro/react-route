import logo from '../../../src/logo.svg';
import React from 'react';
import "./Header.css"
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='container'>
            <nav className='Nav-bar'>
                <div className='d-flex align-items-center'>
                <img width="120" src={logo} alt="logo" />
                <p className='fs-2 text-info'>React Router</p>
                </div>
                <div className='nav-links'>
                    <Link to='/home'>Home</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/erroet'>404</Link>
                    <Link to='/friends'>Friends</Link>
                    <Link to='/products'>Products</Link>
                    {/* never use in react router 
                    <a href="/home">Home</a>
                    <a href="/about">About</a> */}
                </div>
            </nav>
        </div>
    );
};

export default Header;