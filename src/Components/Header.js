import React from 'react';
import { Link } from 'react-router-dom';
import Customlink from './Customelink';
import './Header.css'

const Header = () => {
    return (
        <div>
             <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand" href="#">Khaiba Naki</a>
                   
                    <div className="" id="navbarNavAltMarkup">
                        <div className="navbar-nav all-nav">
                        <Customlink to="/">Home</Customlink>
                        <Customlink to="/reviews">Reviews</Customlink>
                        <Customlink to="/dashbord">Dashbord</Customlink>
                        <Customlink to="/blogs">Blogs</Customlink>
                        <Customlink to="/about">About</Customlink>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;