import React from 'react';
import Logo from '../../assets/images/LogoBig.png';
import './Menu.css';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="CadnunsFlix Logo"></img>
            </a>
            <a className="ButtonLink" href="/">
               Novo Video
            </a>
        </nav>
    );
}

export default Menu;