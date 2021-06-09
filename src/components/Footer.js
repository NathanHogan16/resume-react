import React from 'react';
import linkedin from '../assets/icons/linkedin.icon.png';
import github from '../assets/icons/github.icon.png';
import stockoverflow from '../assets/icons/stockoverflow.png';

function Footer() {

    return (
        <footer className="row">
             <ul className="icons">
                <li>
                    <a href="https://github.com/NathanHogan16" target="_blank">
                        <img className="icon" src={github}></img>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/nathan-hogan-164511201/">
                        <img className="icon" src={linkedin}></img>
                    </a>
                </li>
                <li>
                    <a href="https://stackoverflow.com/users/14771245/nate-hogan">
                        <img className="icon" src={stockoverflow}></img>
                    </a>
                </li>
            </ul>
        </footer>

    );
}

export default Footer;