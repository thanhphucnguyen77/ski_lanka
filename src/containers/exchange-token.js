import React from 'react'
//import Navigation from '../components/navigation.js'
import Navigation from '../components/navigation.js';
import '../styles/style.css'


const ExchangeToken = (props) => {
    return (
        <div>
            <div className="container-other-page">
                <Navigation isActiveExchange={true}  />
                <section className="page-content-exchange" >
                    <div className="page-content-article">
                    
                        {/* <h1>EXCHANGE TOKEN(SALA)</h1>
                        <div className="divider"></div>
                        <ul>
                            <li>Will launch SALA in form of trading mining</li>
                            <li>Our aim is to create an useful exchange token both in-outside of the exchange</li>
                            <li>Put one more about token</li>
                            <li>SALA Whitepaper</li>
                        </ul> */}
                    </div>
                </section>
            </div>
        </div>
    )
}

export default ExchangeToken;