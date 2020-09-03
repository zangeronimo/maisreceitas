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
                <ins className="adsbygoogle"
                    data-ad-client="ca-pub-0338836461603030"
                    data-ad-slot="5990059408"
                    data-ad-format="auto"
                    data-full-width-responsive="true"></ins>
            </div>
            <div className="icon"><MdMenu onClick={setToggled} /></div>
        </div>
    );
}

export default Navbar;