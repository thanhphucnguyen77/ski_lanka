import React from 'react';
import '../styles/style.css'

import { Tabs } from 'antd';
import $ from "jquery";
import SplitText from 'react-pose-text';
import jQuery from 'jquery';
import '../scss/home.scss';
import '../App.css';


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

  $(document).ready(function(){
    var theLetters = "abcdefghijklmnopqrstuvwxyz#%&^+=-"; //You can customize what letters it will cycle through
    //var theLetters = "abcdefg&^+=-";
    var ctnt = "SKI LANKA'S FIRST"; // Your text goes here
    var speed = 50; // ms per frame
    var increment = 8; // frames per step. Must be >2
    
        
    var clen = ctnt.length;       
    var si = 0;
    var stri = 0;
    var block = "";
    var fixed = "";
    //Call self x times, whole function wrapped in setTimeout
    (function rustle (i) {          
    setTimeout(function () {
      if (--i){rustle(i);}
      nextFrame(i);
      si = si + 1;        
    }, speed);
    })(clen*increment+1); 
    function nextFrame(pos){
      for (var i=0; i<clen-stri; i++) {
        //Random number
        var num = Math.floor(theLetters.length * Math.random());
        //Get random letter
        var letter = theLetters.charAt(num);
        block = block + letter;
      }
      if (si == (increment-1)){
        stri++;
      }
      if (si == increment){
      // Add a letter; 
      // every speed*10 ms
      fixed = fixed +  ctnt.charAt(stri - 1);
      si = 0;
      }
      $("#output").html(fixed + block);
      block = "";
    }


     var theLetters2 = "abcdefghijklmnopqrstuvwxyz#%&^+=-"; //You can customize what letters it will cycle through
     //var theLetters2 = "abcdefg&^+=-";
     var ctnt2 = "CRYPTOCURRENCY TRADING FLATFORM"; // Your text goes here
     var speed2 = 25; // ms per frame
     var increment2 = 8; // frames per step. Must be >2
     
         
     var clen2 = ctnt2.length;       
     var si2 = 0;
     var stri2 = 0;
     var block2 = "";
     var fixed2 = "";

     //Call self x times, whole function wrapped in setTimeout
    (function rustle2 (i) {          
        setTimeout(function () {
          if (--i){rustle2(i);}
          nextFrame2(i);
          si2 = si2 + 1;        
        }, speed2);
        })(clen2*increment2+1); 
        function nextFrame2(pos){
          for (var i=0; i<clen2-stri2; i++) {
            //Random number
            var num2 = Math.floor(theLetters2.length * Math.random());
            //Get random letter
            var letter2 = theLetters2.charAt(num2);
            block2 = block2 + letter2;
          }
          if (si2 == (increment2-1)){
            stri2++;
          }
          if (si2 == increment2){
          // Add a letter; 
          // every speed*10 ms
          fixed2 = fixed2 +  ctnt2.charAt(stri2 - 1);
          si2 = 0;
          }
          $("#output2").html(fixed2 + block2);
          block2 = "";
        }
    




    });


/* Effect for about us */


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
        }, 8000)
    }

    componentDidMount() {
        this.displayMenu();
    }

    render() {
    return (
        <div>
            <canvas id="canvas" className="canvas"></canvas>
            {
                this.state.isVisibleTitle ? 
                <div className="container">
                    <div className="homepage">
                        {/* <h1>
                            <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
                                SKI LANKA'S FIRST
                            </SplitText><br/>
                            <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
                                CRYPTOCURRENCY TRADING FLATFORM
                            </SplitText>
                        </h1> */}
                        <div id="output"></div>
                        <div id="output2"></div>
                    </div>
                </div>
                : ""
            }

            {/* {this.displayMenu} */}

            { this.state.isVisibleMenu ? 
        
            <div className="container-other-page">
                <div style={{width: "100%", height: "35px", position: "absolute", top: "500px", boxSizing: "border-box"}}>
                <Tabs defaultActiveKey="1" onChange={callback}>
                    <TabPane tab={<span style={{color: "#fff", fontWeight: "bold"}}>About us</span>} key="1">
                        <section className="page-content-about">
                            <div className="page-content-article">
                                <div className="page-content-text">
                                    <h1 className="about-us-title" style={{color: "#fff"}}>
                                        <span>S</span><span>K</span><span>I</span>&nbsp;
                                        <span>L</span><span>A</span><span>N</span><span>K</span><span>A</span><span>'S</span>&nbsp;
                                        <span>F</span><span>I</span><span>R</span><span>S</span><span>T</span><br/>
                                        <span>C</span><span>R</span><span>Y</span><span>P</span><span>C</span><span>U</span><span>R</span> <span>R</span><span>R</span><span>E</span><span>N</span><span>C</span><span>Y</span>&nbsp;
                                        <span>T</span><span>R</span><span>A</span><span>D</span><span>I</span><span>N</span><span>G</span>&nbsp;
                                        <span>F</span><span>L</span><span>A</span><span>T</span><span>F</span><span>O</span><span>R</span><span>M</span>
                                    </h1>
                                    <div className="divider"></div>
                                    <ul>
                                        {/* <li>Spot trading flatform for major digital assets including</li> */}
                                        <li className="line1"> 
                                            <span>S</span><span>p</span><span>o</span><span>t</span>&nbsp;
                                            <span>t</span><span>r</span><span>a</span><span>d</span><span>i</span><span>n</span><span>g</span>&nbsp;
                                            <span>f</span><span>l</span><span>a</span><span>t</span><span>f</span><span>o</span><span>r</span><span>m</span>&nbsp;
                                            <span>f</span><span>o</span><span>r</span>&nbsp; 
                                            <span>m</span><span>a</span><span>j</span><span>o</span><span>r</span>&nbsp;
                                            <span>d</span><span>i</span><span>g</span><span>i</span><span>t</span><span>a</span><span>l</span> &nbsp;
                                            <span>a</span><span>s</span><span>s</span><span>e</span><span>t</span><span>s</span>&nbsp;
                                            <span>i</span><span>c</span><span>l</span><span>u</span><span>d</span><span>i</span><span>n</span><span>g</span>&nbsp;
                                        </li>
                                        {/* <li>and more</li> */}
                                        {/* <li>Three level-system of wallet and multi layered securitty </li> */}
                                        <li className="line2">
                                            <span>T</span><span>h</span><span>r</span><span>e</span><span>e</span>&nbsp;
                                            <span>l</span><span>e</span><span>v</span><span>e</span><span>l</span><span>-</span><span>s</span><span>y</span><span>s</span><span>t</span><span>e</span><span>m</span>&nbsp;
                                            <span>o</span><span>f</span>&nbsp;
                                            <span>w</span><span>a</span><span>l</span><span>l</span><span>e</span><span>t</span>&nbsp;
                                            <span>a</span><span>d</span>&nbsp;
                                            <span>m</span><span>u</span><span>l</span><span>t</span><span>i</span>&nbsp;
                                            <span>l</span><span>a</span><span>y</span><span>e</span><span>r</span><span>e</span><span>d</span>&nbsp;
                                            <span>s</span><span>e</span><span>c</span><span>u</span><span>r</span><span>i</span><span>t</span><span>y</span>&nbsp;
                                        </li>
                                        {/* <li>Liquidity order-book allows users to freely exchange their digital assets</li> */}
                                        <li className="line3">
                                            <span>L</span><span>i</span><span>q</span><span>u</span><span>i</span><span>d</span><span>i</span><span>t</span><span>y</span>&nbsp;
                                            <span>o</span><span>r</span><span>d</span><span>e</span><span>r</span><span>s</span><span>b</span><span>o</span><span>o</span><span>k</span>&nbsp;
                                            <span>a</span><span>l</span><span>l</span><span>o</span><span>w</span><span>s</span>&nbsp;
                                            <span>u</span><span>s</span><span>e</span><span>r</span><span>s</span>&nbsp;
                                            <span>t</span><span>o</span>&nbsp;
                                            <span>f</span><span>r</span><span>e</span><span>e</span><span>l</span><span>y</span>&nbsp;
                                            <span>e</span><span>x</span><span>c</span><span>h</span><span>a</span><span>n</span><span>g</span><span>e</span>&nbsp;
                                            <span>t</span><span>h</span><span>e</span><span>i</span><span>r</span>&nbsp;
                                        </li>
                                    </ul>
                                </div>
                                
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
                                    <li>Our mission is to establish an useful exchange token both in-outside of the exchange</li>
                                    <li>Get discounts on various fees </li>
                                    <li>More information will be announced shortly, for more details, please check our WhitePaper</li>
                                </ul>
                            </div>
                        </section>
                    
                    </TabPane>
                    <TabPane tab={<span style={{color: "#fff", fontWeight: "bold"}}>Affiliate</span>} key="3">
                    <section className="page-content">
                        {/* <section className="page-content-affiliate"></section> */}
                        <div className="page-content-article">
                            <div className="page-content-col1">
                                <h1 style={{color: "#fff"}}>Reward for Referrals</h1>
                                <div className="divider"></div>
                                <ul style={{color: "#fff"}} >
                                    <li>Receive up to 100% commission </li>
                                    <li>Commission rate will depend on your team size. (Team size = Number of users linked to your referral)</li>
                                    <li>Our model will let you receive reward as low as inviting one friend</li>
                                </ul>
                            </div>
                            {/* <div className="page-content-col2">
                                <img src={require('../image/mission_slide4.png')} width="300" height="350" style={{display: "block"}} />
                                
                            </div> */}
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
                                    <th style={{padding: "0 1rem 0 8rem"}}>Volumn</th>
                                    <th >Change</th>
                                    <th>Last Price</th>
                                    <th>24HR HIGH</th>
                                    <th>24HR LOW</th>
                                </tr>

                                <tr>
                                    <td>BTC-ETH</td>
                                    <td>Ethereum</td>
                                    <td className="volumn">512.19</td>
                                    <td className="change-down">-3.4</td>
                                    <td>0.03317924</td>
                                    <td>0.233445556</td>
                                    <td>0.233445556</td>
                                </tr>

                                <tr>
                                    <td>BTC-TRX</td>
                                    <td>TRON</td>
                                    <td className="volumn">331.35</td>
                                    <td className="change-up">12.4</td>
                                    <td>0.123234544</td>
                                    <td>0.233445556</td>
                                    <td>0.233445556</td>
                                </tr>

                                <tr>
                                    <td>BTC-ADA</td>
                                    <td >Cardano</td>
                                    <td className="volumn">323.18</td>
                                    <td className="change-down">-3.1</td>
                                    <td>0.123234544</td>
                                    <td>0.233445556</td>
                                    <td>0.233445556</td>
                                </tr>

                                <tr>
                                    <td>BTC-WAVES</td>
                                    <td>Waves</td>
                                    <td className="volumn">259.58</td>
                                    <td className="change-up">9.1</td>
                                    <td>0.123234544</td>
                                    <td>0.233445556</td>
                                    <td>0.233445556</td>
                                </tr>

                                <tr>
                                    <td>BTC-BCH</td>
                                    <td>Bitcoin Cash(ABC)</td>
                                    <td className="volumn">257.27</td>
                                    <td className="change-down">-3.5</td>
                                    <td>0.123234544</td>
                                    <td>0.233445556</td>
                                    <td>0.233445556</td>
                                </tr>
                                <tr>
                                    <td>BTC-XRP</td>
                                    <td>XRP</td>
                                    <td className="volumn">174.80</td>
                                    <td className="change-down">-0.3</td>
                                    <td>0.123234544</td>
                                    <td>0.233445556</td>
                                    <td>0.233445556</td>
                                </tr> 
                                <tr>
                                    <td>BTC-XLM</td>
                                    <td>Lumen</td>
                                    <td className="volumn">107.56</td>
                                    <td className="change-down">-2.6</td>
                                    <td>0.123234544</td>
                                    <td>0.233445556</td>
                                    <td>0.233445556</td>
                                </tr>
                                </tbody>
                            </table>
                   
                        </section>
                    
                    
                    </TabPane>
                    <TabPane tab={<span style={{color: "#fff", fontWeight: "bold"}}>Contact us</span>} key="5">
                        <section className="page-content" >
                            <div className="page-content-article-contact">
                                <div className="contact-us-content">
                                    <h1 style={{color: "#fff", opacity: "1 !important"}}>Contact Us</h1>
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
            : ""
            }

        </div>
    )
    }
}

export default HomePage