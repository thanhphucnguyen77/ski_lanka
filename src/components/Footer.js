import React from 'react';
import {Col, Row} from 'antd';
import '../styles/style.css';

const Footer = (props) => {
    return (
        <div className="footer-container">
            <Row>
                <Col span={4}><a href="#">Term of use</a></Col>
                <Col span={4}><a href="#"> AML&KYC Policy</a></Col>
                <Col span={4}><a href="#">  Risk Disclosure </a></Col>
                <Col span={4}><a href="#">Conflicts of interest </a></Col>
                <Col span={3}><a href="#"> Privacy Policy</a></Col>
                <Col span={5}><a href="#">Order Excecution Policy</a></Col>
            </Row>
        </div>
    )
}

export default Footer;