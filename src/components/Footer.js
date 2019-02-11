import React from 'react';
import {Col, Row} from 'antd';
import '../styles/style.css';

const Footer = (props) => {
    return (
        <div className="footer-container">
            <div className="footer-link">
                <Row>
                    <Col span={3}><a>Term of use</a></Col>
                    <Col span={4}><a> AML&amp;KYC Policy</a></Col>
                    <Col span={3}><a>  Risk Disclosure </a></Col>
                    <Col span={4}><a>Conflicts of interest </a></Col>
                    <Col span={4}><a> Privacy Policy</a></Col>
                    <Col span={6}><a>Order Excecution Policy</a></Col>
                </Row>
            </div>
        </div>
    )
}

export default Footer;