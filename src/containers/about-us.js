import React, {Component} from 'react'
import '../App.css'
import '../styles/aboutus.css'
import Navigation from '../components/navigation.js';


class AboutUs extends Component {
    render() {
        return (
            <div>
                {/* <p className="topbar">POkeon</p> */}
                <div className="container-other-page">
                    {/* <nav className="navbar">
                        <ul>
                            <li>About us</li>
                            <li>Exchange Token (SALA)</li>
                            <li>AFFILIATE</li>
                            <li>Market</li>
                            <li>Fees</li>
                        </ul>
                    </nav> */}
                    <Navigation isActiveAbout={true} />
                    <section className="page-content-about">
                        <div className="page-content-article">
                            {/* <h1>SKI LANKA'S FIRST<br/>
                            CRYPTOCURRENCY TRADING FLATFORM </h1>
                            <div className="divider"></div>
                                <ul>
                                    <li>Spot trading flatform for major digital assets including</li>
                                    <li>and more</li>
                                    <li>Three level-system of wallet and multi layered securitty </li>
                                    <li>Liquidity order-book allows users to freely exchange their digital assets</li>
                                </ul> */}
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}
export default AboutUs;