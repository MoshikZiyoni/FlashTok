import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ onOpenModal }) => {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState(location.pathname);

    return (
        <nav className="navbar">
            <Link to="/" className="navbar-logo" style={{ textDecoration: 'none' }}>
                Rank<span className="logo-highlight">Up</span>
            </Link>

            <ul className="nav-links">
                <li>
                    <Link
                        to="/"
                        className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                    >
                        תנועה אמיתית לאתר
                    </Link>
                </li>
                <li>
                    <Link
                        to="/fb-monitor"
                        className={`nav-link ${location.pathname === '/fb-monitor' ? 'active' : ''}`}
                    >
                        Facebook Monitor
                    </Link>
                </li>
            </ul>

            <button className="nav-cta" onClick={() => onOpenModal()}>
                צור קשר
            </button>
        </nav>
    );
};

export default Navbar;
