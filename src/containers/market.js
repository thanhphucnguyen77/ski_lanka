import React from 'react'
import Navigation from '../components/navigation.js';
import '../styles/style.css'
import '../styles/market.css'

const Market = (props) => {
    return (
        <div>
            <div className="container-other-page">
                <Navigation />
                <section className="page-content" style={{backgroundColor: "#2A3341"}} >
                    
                        <span className="bitcoin">BITCOIN MARKETS</span>
                        <span style={{padding: "1rem"}}>Total Volumn = 423,56777</span>
                        <span style={{padding: "1rem"}}>1BTC = $3.123344555</span>
                        <table className="table-market">
                            <tr>
                                <th>Market</th>
                                <th>Current</th>
                                <th style={{padding: "0 1rem 0 10rem"}}>Volumn</th>
                                <th>Change</th>
                                <th>Last Price</th>
                                <th>24HR HIGH</th>
                                <th>24HR LOW</th>
                            </tr>

                            <tr>
                                <td>BTC-ETH</td>
                                <td>Ethereum</td>
                                <td style={{padding: "0 1rem 0 10rem"}}>5.12%</td>
                                <td>-3.4</td>
                                <td>0.123234544</td>
                                <td>0.233445556</td>
                                <td>0.233445556</td>
                            </tr>

                             <tr>
                                <td>BTC-ETH</td>
                                <td>Ethereum</td>
                                <td style={{padding: "0 1rem 0 10rem"}}>5.12%</td>
                                <td>-3.4</td>
                                <td>0.123234544</td>
                                <td>0.233445556</td>
                                <td>0.233445556</td>
                            </tr>

                             <tr>
                                <td>BTC-ETH</td>
                                <td >Ethereum</td>
                                <td style={{padding: "0 1rem 0 10rem"}}>5.12%</td>
                                <td>-3.4</td>
                                <td>0.123234544</td>
                                <td>0.233445556</td>
                                <td>0.233445556</td>
                            </tr>

                             <tr>
                                <td>BTC-ETH</td>
                                <td>Ethereum</td>
                                <td style={{padding: "0 1rem 0 10rem"}}>5.12%</td>
                                <td>-3.4</td>
                                <td>0.123234544</td>
                                <td>0.233445556</td>
                                <td>0.233445556</td>
                            </tr>

                             <tr>
                                <td>BTC-ETH</td>
                                <td>Ethereum</td>
                                <td style={{padding: "0 1rem 0 10rem"}}>5.12%</td>
                                <td>-3.4</td>
                                <td>0.123234544</td>
                                <td>0.233445556</td>
                                <td>0.233445556</td>
                            </tr>
                            <tr>
                                <td>BTC-ETH</td>
                                <td>Ethereum</td>
                                <td style={{padding: "0 1rem 0 10rem"}}>5.12%</td>
                                <td>-3.4</td>
                                <td>0.123234544</td>
                                <td>0.233445556</td>
                                <td>0.233445556</td>
                            </tr> 
                            <tr>
                                <td>BTC-ETH</td>
                                <td>Ethereum</td>
                                <td style={{padding: "0 1rem 0 10rem"}}>5.12%</td>
                                <td>-3.4</td>
                                <td>0.123234544</td>
                                <td>0.233445556</td>
                                <td>0.233445556</td>
                            </tr>
                        </table>
                   
                </section>
            </div>
        </div>
    )
}

export default Market