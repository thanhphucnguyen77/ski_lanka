import React, {Component} from 'react'
import '../App.css'
import '../styles/aboutus.css'
import '../styles/style.css'
import Navigation from '../components/navigation.js';



class AboutUs extends Component {
    render() {
        return (
            <div>
                <div className="container-other-page">
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