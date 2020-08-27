import React from 'react';
import './styles.css';
import { useAuth } from '../../contexts/auth';
import { MdMenu } from 'react-icons/md';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/maisreceitas.png';

function Navbar() {
    const { setToggled } = useAuth();

    return (
        <div id="navbar">
            <Link className="logo" to="/" title="Ir para a página inicial">
                <img src={logo} alt="maisreceitas.com.br" />
            </Link>
            <div className="icon"><MdMenu onClick={setToggled} /></div>
        </div>
    );
}

export default Navbar;