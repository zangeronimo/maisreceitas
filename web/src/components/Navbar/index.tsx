import React, { useEffect } from 'react';

import { useAuth } from '../../contexts/auth';
import { MdMenu } from 'react-icons/md';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/maisreceitas.png';
import './styles.css';
declare var adsbygoogle: any;

function Navbar() {
    const { setToggled } = useAuth();

    useEffect(() => {
        (adsbygoogle = (window as any).adsbygoogle || []).push({});
    });

    return (
        <div id="navbar">
            <Link className="logo" to="/" title="Ir para a página inicial">
                <img src={logo} alt="maisreceitas.com.br" />
            </Link>
            <div className="only_desktop">
                <ins className="adsbygoogle"
                    data-ad-client="ca-pub-0338836461603030"
                    data-ad-slot="5737388780"
                    data-full-width-responsive="true"></ins>
            </div>
            <div className="icon"><MdMenu onClick={setToggled} /></div>
        </div>
    );
}

export default Navbar;