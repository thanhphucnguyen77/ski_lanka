import React from 'react';
import '../styles/style.css'

import { Tabs } from 'antd';

const TabPane = Tabs.TabPane;

function callback(key) {
  console.log(key);
}


const HomePage = (props) => {
    return (
        <div>
            <div className="container">
                <div className="homepage">
                <h1>SKI LANKA'S FIRST</h1>
                <h1>CRYPTOCURRENCY TRADING FLATFORM</h1>
                <p> Learn More</p>
                </div>
            </div>

            <div className="container-other-page">
                <div style={{width: "100%", height: "50px", backgroundColor: "black", position: "absolute", top: "500px"}}>
                <Tabs defaultActiveKey="1" onChange={callback}>
                    <TabPane tab={<span style={{color: "#fff", fontSize: "20px", fontWeight: "bold"}}>About us</span>} key="1">
                        <section className="page-content-about">
                            <div className="page-content-article">
                                <h1 style={{color: "#fff"}}>SKI LANKA'S FIRST<br/>
                                CRYPTOCURRENCY TRADING FLATFORM </h1>
                                <div className="divider"></div>
                                <ul>
                                    <li>Spot trading flatform for major digital assets including</li>
                                    <li>and more</li>
                                    <li>Three level-system of wallet and multi layered securitty </li>
                                    <li>Liquidity order-book allows users to freely exchange their digital assets</li>
                                </ul>
                            </div>
                            
                        </section>
                    
                    </TabPane>
                    <TabPane tab={<span style={{color: "#fff", fontSize: "20px", fontWeight: "bold"}}>Exchange Token</span>} key="2">
                        <section className="page-content-exchange" >
                            <div className="page-content-article">
                            
                                <h1 style={{color: "#fff"}}>EXCHANGE TOKEN(SALA)</h1>
                                <div className="divider"></div>
                                <ul>
                                    <li>Will launch SALA in form of trading mining</li>
                                    <li>Our aim is to create an useful exchange token both in-outside of the exchange</li>
                                    <li>Put one more about token</li>
                                    <li>SALA Whitepaper</li>
                                </ul>
                            </div>
                        </section>
                    
                    </TabPane>
                    <TabPane tab={<span style={{color: "#fff", fontSize: "20px", fontWeight: "bold"}}>Affiliate</span>} key="3">
                    <section className="page-content" >
                    <div className="page-content-article-affiliate">
                        <div className="page-content-col1">
                            <h1 style={{color: "#fff"}}>REWARD FOR THE REFERALS</h1>
                            <div className="divider"></div>
                            <ul >
                                <li>Receive up to 100% commission </li>
                                <li>Commission rate depends on your team size (the number of people linked to referals) Very Simple</li>
                                <li>You will receive some commission as low as just having on team member</li>
                            </ul>
                        </div>
                        <div className="page-content-col2">
                            <img src={require('../image/mission_slide4.png')} width="300" height="400" style={{display: "block", margin: "3rem auto"}} />
                            {/* <table className="affiliate-table">
                                <tr>
                                    <th colSpan="3" style={{border: "1px solid ##93C37D", backgroundColor: "green"}}>Reward for referals</th>
                                </tr>
                                <tr>
                                    <th>Mission No.</th>
                                    <th>Team Size</th>
                                    <th>Reward</th>
                                </tr>

                                <tr>
                                    <td>Mission 1</td>
                                    <td>5</td>
                                    <td>5%</td>
                                </tr>
                                <tr>
                                    <td>Mission 2</td>
                                    <td>10</td>
                                    <td>10%</td>
                                </tr>
                                <tr>
                                    <td>Mission 3</td>
                                    <td>15</td>
                                    <td>15%</td>
                                </tr>
                                <tr>
                                    <td>Mission 4</td>
                                    <td>20</td>
                                    <td>20%</td>
                                </tr>
                                <tr>
                                    <td>Mission 5</td>
                                    <td>25</td>
                                    <td>25%</td>
                                </tr>
                                <tr>
                                    <td>Mission 6</td>
                                    <td>30</td>
                                    <td>30</td>
                                </tr>
                                <tr>
                                    <td>Mission 7</td>
                                    <td>35</td>
                                    <td>35%</td>
                                </tr>

                                <tr>
                                    <td>Mission 8</td>
                                    <td>50</td>
                                    <td>50%</td>
                                </tr>
                                <tr>
                                    <td>Mission 9</td>
                                    <td>80</td>
                                    <td>80%</td>
                                </tr>

                                 <tr>
                                    <td>Final mission</td>
                                    <td>100</td>
                                    <td>100%</td>
                                </tr>


                            </table> */}
                        </div>
                    </div>
                </section>
                    
                    </TabPane>
                    <TabPane tab={<span style={{color: "#fff", fontSize: "20px", fontWeight: "bold"}}>Market</span>} key="4">
                        <section className="page-content" style={{backgroundColor: "#2A3341"}} >
                    
                            <span className="bitcoin">BITCOIN MARKETS</span>
                            <span style={{padding: "1rem"}}>Total Volumn = 423,56777</span>
                            <span style={{padding: "1rem"}}>1BTC = $3.123344555</span>
                            <table className="table-market">
                                <tr>
                                    <th>Market</th>
                                    <th>Current</th>
                                    <th style={{padding: "0 1rem 0 25rem"}}>Volumn</th>
                                    <th >Change</th>
                                    <th>Last Price</th>
                                    <th>24HR HIGH</th>
                                    <th>24HR LOW</th>
                                </tr>

                                <tr>
                                    <td>BTC-ETH</td>
                                    <td>Ethereum</td>
                                    <td className="volumn">5.12%</td>
                                    <td className="change-down">-3.4</td>
                                    <td>0.123234544</td>
                                    <td>0.233445556</td>
                                    <td>0.233445556</td>
                                </tr>

                                <tr>
                                    <td>BTC-ETH</td>
                                    <td>Ethereum</td>
                                    <td className="volumn">5.12%</td>
                                    <td className="change-up">-3.4</td>
                                    <td>0.123234544</td>
                                    <td>0.233445556</td>
                                    <td>0.233445556</td>
                                </tr>

                                <tr>
                                    <td>BTC-ETH</td>
                                    <td >Ethereum</td>
                                    <td className="volumn">5.12%</td>
                                    <td className="change-down">-3.4</td>
                                    <td>0.123234544</td>
                                    <td>0.233445556</td>
                                    <td>0.233445556</td>
                                </tr>

                                <tr>
                                    <td>BTC-ETH</td>
                                    <td>Ethereum</td>
                                    <td className="volumn">5.12%</td>
                                    <td className="change-up">-3.4</td>
                                    <td>0.123234544</td>
                                    <td>0.233445556</td>
                                    <td>0.233445556</td>
                                </tr>

                                <tr>
                                    <td>BTC-ETH</td>
                                    <td>Ethereum</td>
                                    <td className="volumn">5.12%</td>
                                    <td className="change-down">-3.4</td>
                                    <td>0.123234544</td>
                                    <td>0.233445556</td>
                                    <td>0.233445556</td>
                                </tr>
                                <tr>
                                    <td>BTC-ETH</td>
                                    <td>Ethereum</td>
                                    <td className="volumn">5.12%</td>
                                    <td className="change-down">-3.4</td>
                                    <td>0.123234544</td>
                                    <td>0.233445556</td>
                                    <td>0.233445556</td>
                                </tr> 
                                <tr>
                                    <td>BTC-ETH</td>
                                    <td>Ethereum</td>
                                    <td className="volumn">5.12%</td>
                                    <td className="change-down">-3.4</td>
                                    <td>0.123234544</td>
                                    <td>0.233445556</td>
                                    <td>0.233445556</td>
                                </tr>
                            </table>
                   
                        </section>
                    
                    
                    </TabPane>
                    <TabPane tab={<span style={{color: "#fff", fontSize: "20px", fontWeight: "bold"}}>Contact Us</span>} key="5">
                        <section className="page-content-contact" >
                            <div className="page-content-article">
                                <div className="contact-us-content">
                                    <h1 style={{color: "#fff"}}>Contact Us</h1>
                                    <input type="text" placeholder="Name" width="400" height="100" /><br/>
                                    <input type="text" placeholder="Email" width="400" height="100" /><br/>
                                    <textarea type="text" placeholder="Questions"></textarea><br/>
                                    <button className="send">Send > </button>
                                
                                </div>
                            </div>
                        </section>
                    </TabPane>
                </Tabs>
                </div>
             </div>

           

        </div>
    )
}

export default HomePage