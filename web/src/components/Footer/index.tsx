import React from 'react';
import './styles.css';

function Footer() {
    const Xmas = new Date();
    return (
        <footer className="footer">
            <p>2006 - {Xmas.getFullYear()}</p>
            <p>todos os direitos reservados</p>
        </footer>
    );
}

export default Footer;