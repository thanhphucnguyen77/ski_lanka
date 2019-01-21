import React from 'react';
import '../styles/navigation.css';

const Navigation = (props) => {
    return (
        <div>
            <nav className="navbar">
                <ul>
                    <li><a href="/about-us">About us</a></li>
                    <li><a href="/exchange-token">Exchange Token (SALA)</a></li>
                    <li><a href="/affiliate">AFFILIATE</a></li>
                    <li><a href="/market">Market</a></li>
                    <li><a href="/contact-us">Contact Us</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation