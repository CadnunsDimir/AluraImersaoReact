import React from 'react';
import Logo from '../../assets/images/LogoBig.png';
import './Menu.css';
// import ButtonLink from './components/ButtonLink'
import Button from '../Button';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="CadnunsFlix Logo"></img>
            </a>
            {/* <ButtonLink className="ButtonLink" href="/">Novo Video</ButtonLink> */}
            <Button className="ButtonLink" href="/">Novo Video</Button>
        </nav>
    );
}

export default Menu;