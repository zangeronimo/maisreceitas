import React from 'react';

import { useAuth } from '../../contexts/auth';
import { MdMenu } from 'react-icons/md';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/maisreceitas.png';
import './styles.css';

function Navbar() {
    const { setToggled } = useAuth();

    return (
        <div id="navbar">
            <Link className="logo" to="/" title="Ir para a página inicial">
                <img src={logo} alt="maisreceitas.com.br" />
            </Link>
            <div className="only_desktop">
            </div>
            <div className="icon"><MdMenu onClick={setToggled} /></div>
        </div>
    );
}

export default Navbar;