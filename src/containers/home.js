import React from 'react';
import '../styles/style.css'

import { Tabs } from 'antd';
import $ from "jquery";
import SplitText from 'react-pose-text';


const TabPane = Tabs.TabPane;

function callback(key) {
  console.log(key);
}
  
const charPoses = {
    exit: { opacity: 0, y: 20 },
    enter: {
      opacity: 1,
      y: 0,
      delay: ({ charIndex }) => charIndex * 30
    }
  };




class HomePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isVisibleTitle: true,
            isVisibleMenu: false
        }
    }

    displayMenu = () => {
        setTimeout(() => {
            this.setState({
                isVisibleTitle: false,
                isVisibleMenu: true
            })
        }, 2000)
    }

    componentDidMount() {
        this.displayMenu();
    }

    render() {
    return (
        <div>
            {
                this.state.isVisibleTitle ? 
                <div className="container">
                    <div className="homepage">
                        <h1>
                            <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
                                SKI LANKA'S FIRST
                            </SplitText><br/>
                            <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
                                CRYPTOCURRENCY TRADING FLATFORM
                            </SplitText>
                        </h1>
                    </div>
                </div>
                : ""
            }

            {this.displayMenu}

            { this.state.isVisibleMenu ? 
        
            <div className="container-other-page">
                <div style={{width: "100%", height: "35px", position: "absolute", top: "500px", boxSizing: "border-box"}}>
                <Tabs defaultActiveKey="1" onChange={callback}>
                    <TabPane tab={<span style={{color: "#fff", fontWeight: "bold"}}>About us</span>} key="1">
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
                    <TabPane tab={<span style={{color: "#fff", fontWeight: "bold"}}>Exchange Token</span>} key="2">
                        <section className="page-content" >
                            <div className="page-content-article">
                            
                                <h1 style={{color: "#fff"}}>EXCHANGE TOKEN(SALA)</h1>
                                <div className="divider"></div>
                                <ul style={{color: "#fff"}}>
                                    <li>Will launch SALA in form of trading mining</li>
                                    <li>Our aim is to create an useful exchange token both in-outside of the exchange</li>
                                    <li>Put one more about token</li>
                                    <li>SALA Whitepaper</li>
                                </ul>
                            </div>
                        </section>
                    
                    </TabPane>
                    <TabPane tab={<span style={{color: "#fff", fontWeight: "bold"}}>Affiliate</span>} key="3">
                    <section className="page-content">
                        {/* <section className="page-content-affiliate"></section> */}
                        <div className="page-content-article">
                            <div className="page-content-col1">
                                <h1 style={{color: "#fff"}}>REWARD FOR THE REFERALS</h1>
                                <div className="divider"></div>
                                <ul style={{color: "#fff"}} >
                                    <li>Receive up to 100% commission </li>
                                    <li>Commission rate depends on your team size (the number of people linked to referals) Very Simple</li>
                                    <li>You will receive some commission as low as just having on team member</li>
                                </ul>
                            </div>
                            <div className="page-content-col2">
                                <img src={require('../image/mission_slide4.png')} width="300" height="350" style={{display: "block"}} />
                                
                            </div>
                        </div>
                    </section>
                
                    
                    </TabPane>
                    <TabPane tab={<span style={{color: "#fff", fontWeight: "bold"}}>Market</span>} key="4">
                        <section className="page-content" style={{backgroundColor: "#2A3341"}} >
                    
                            <span className="bitcoin">BITCOIN MARKETS</span>
                            <span style={{padding: "1rem"}}>Total Volumn = 423,56777</span>
                            <span style={{padding: "1rem"}}>1BTC = $3.123344555</span>
                            <table className="table-market">
                                <tbody>
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
                                </tbody>
                            </table>
                   
                        </section>
                    
                    
                    </TabPane>
                    <TabPane tab={<span style={{color: "#fff", fontWeight: "bold"}}>Contact Us</span>} key="5">
                        <section className="page-content" ></section>
                            <div className="page-content-article">
                                <div className="contact-us-content">
                                    <h1 style={{color: "#fff", opacity: "1 !important"}}>Contact Us</h1>
                                    <input type="text" placeholder="Name" width="400" height="100" /><br/>
                                    <input type="text" placeholder="Email" width="400" height="100" /><br/>
                                    <textarea type="text" placeholder="Questions"></textarea><br/>
                                    <button className="send">Send > </button>
                                
                                </div>
                            </div>
            
                    </TabPane>
                </Tabs>
                </div>
             </div>
            : ""
            }

        </div>
    )
    }
}

export default HomePage