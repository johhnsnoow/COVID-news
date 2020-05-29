import React from 'react';
import { Link } from 'react-router-dom';
import './NavbarComponent.css'
const NavbarComponent = () => {
    return (
        <div className="navbar">
            <nav className="nav nav-wrapper blue-grey darken-4">
                <div className="container">
                    <text className="titlecontainer">COVID NEWS</text>
                    <ul className="right">
                        <li>
                            <Link to="/">Latest News</Link>
                        </li>
                        <li>
                            <a rel="noopener noreferrer" target="_blank" href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public">WHO Guidelines</a>
                        </li>
                        <li>
                            <a rel="noopener noreferrer" target="_blank" href="https://www.github.com/johhnsnoow/">GITHUB</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavbarComponent;