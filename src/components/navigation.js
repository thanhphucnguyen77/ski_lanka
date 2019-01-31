import React from 'react';
import '../styles/navigation.css';
import '../styles/style.css';


const Navigation = (props) => {
    return (
        <div>
            <canvas id="canvas" className="canvas"></canvas>
            <nav className="navbar">
                <ul>
                    <li className={props.isActiveAbout ? "active" : ""}><a href="/about-us">About us</a></li>
                    <li className={props.isActiveExchange ? "active" : ""}><a href="/exchange-token">Exchange Token (SALA)</a></li>
                    <li className={props.isActiveAffiliate ? "active" : ""}><a href="/affiliate">AFFILIATE</a></li>
                    <li className={props.isActiveMarket ? "active" : ""}><a href="/market">Market</a></li>
                    <li className={props.isActiveContact ? "active" : ""}><a href="/contact-us">Contact Us</a></li>
                </ul>
                
            </nav>
        </div>
    )
}

export default Navigation







