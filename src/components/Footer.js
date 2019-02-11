import React from 'react';
import {Col, Row} from 'antd';
import '../styles/style.css';

const Footer = (props) => {
    return (
        <div className="footer-container">
            <div className="footer-link">
                <ul>
                    <li><a>Term of use</a></li>
                    <li><a> AML&amp;KYC Policy</a></li>
                    <li><a>  Risk Disclosure </a></li>
                    <li><a>Conflicts of interest </a></li>
                    <li><a> Privacy Policy</a></li>
                    <li><a>Order Excecution Policy</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;