import React from 'react';
import '../styles/style.css'

import { Tabs } from 'antd';
import $ from "jquery";
import SplitText from 'react-pose-text';
import jQuery from 'jquery';
import '../scss/home.scss';
import '../App.css';
import {Row, Col} from 'antd';
import Footer from '../components/Footer.js';

const TabPane = Tabs.TabPane;




  
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
    var speed = 20; // ms per frame
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

    /* output2 */

     var theLetters2 = "abcdefghijklmnopqrstuvwxyz#%&^+=-"; //You can customize what letters it will cycle through
     //var theLetters2 = "abcdefg&^+=-";
     var ctnt2 = "CRYPTOCURRENCY TRADING PLATFORM"; // Your text goes here
     var speed2 = 10; // ms per frame
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

        /* output3 */
        
        var theLetters3 = "abcdefghijklmnopqrstuvwxyz#%&^+=-"; //You can customize what letters it will cycle through
        //var theLetters2 = "abcdefg&^+=-";
        var ctnt3 = "ECO"; // Your text goes here
        var speed3 = 120; // ms per frame
        var increment3 = 8; // frames per step. Must be >2
        
            
        var clen3 = ctnt3.length;       
        var si3 = 0;
        var stri3 = 0;
        var block3 = "";
        var fixed3 = "";
   
        //Call self x times, whole function wrapped in setTimeout
       (function rustle3 (i) {          
           setTimeout(function () {
             if (--i){rustle3(i);}
             nextFrame3(i);
             si3 = si3 + 1;        
           }, speed3);
           })(clen3*increment3+1); 
           function nextFrame3(pos){
             for (var i=0; i<clen3-stri3; i++) {
               //Random number
               var num3 = Math.floor(theLetters3.length * Math.random());
               //Get random letter
               var letter3 = theLetters3.charAt(num3);
               block3 = block3 + letter3;
             }
             if (si3 == (increment3-1)){
               stri3++;
             }
             if (si3 == increment3){
             // Add a letter; 
             // every speed*10 ms
             fixed3 = fixed3 +  ctnt3.charAt(stri3 - 1);
             si3 = 0;
             }
             $("#output3").html(fixed3 + block3);
             block3 = "";
           }

    });


/* Effect for about us */


class HomePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isVisibleTitle: true,
            isVisibleMenu: false,
            activeAbout: true,
            activeExchange: false,
            activeAf: false,
            disappearTitle: false

        }
        this.callback = this.callback.bind(this)
    }

    callback(key) {
        console.log("key", key)
        if (key === '1') {
            this.setState({
                activeAbout: true
            })
        }
        else {
            this.setState({
                activeAbout: false
            })
        }

        if (key === '2') {
            this.setState({
                activeExchange: true
            })
            console.log({...this.state})
        }
        else {
            this.setState({
                activeExchange: false
            })
        }

        if (key === '3') {
            this.setState({
                activeAf: true
            })
        }

        else {
            this.setState({
                activeAf: false
            })
        }
    }

    displayMenu = () => {
        setTimeout(() => {
            this.setState({
                isVisibleTitle: false,
                isVisibleMenu: true
            })
        }, 10000)
    }

    unDisplayTitle = () => {
        setTimeout(() => {
            this.setState({
                disappearTitle: true
            })
        }, 6000)
    }

    componentDidMount() {
        this.displayMenu();
        this.unDisplayTitle();
    }

    render() {
    return (
        <div>
            
            {
                this.state.isVisibleTitle ? 
                <div className="container">
                    <div className="homepage">
                        <div id={this.state.disappearTitle === false ? "output" : "disappearing1"} style={{fontSize: "40px"}}></div>
                        <div id={this.state.disappearTitle === false ? "output2" : "disappearing2"} style={{fontSize: "40px"}}></div>
                        <div id={this.state.disappearTitle === false ? "output3" : "disappearing3"} style={{color: "#128732", fontSize: "45px", fontWeight: "bold"}}></div>
                    </div>
                </div>
                : ""
            }

            {/* {this.displayMenu} */}

            { this.state.isVisibleMenu ? 
        
            <div>
            <div className="container-other-page">
                <div style={{width: "100%", height: "35px", position: "absolute", top: "500px", boxSizing: "border-box"}}>
                <Tabs defaultActiveKey="1" onChange={this.callback}>
                    <TabPane tab={<span style={{color: "#fff", fontWeight: "bold"}}>About us</span>} key="1" >
                        <section className="page-content-about">
                            <div className="page-content-article">
                                <div className={this.state.activeAbout ? "page-content-text" : ""}>
                                   <Row>
                                       <Col xs={{span: 15}} sm={{span: 15}} md={{span: 15}} lg={{span: 15}}>
                                    <h1 className="about-us-title" style={{color: "#fff"}}>
                                       
                                        <span>S</span><span>K</span><span>I</span>&nbsp;
                                        <span>L</span><span>A</span><span>N</span><span>K</span><span>A</span><span>'S</span>&nbsp;
                                        <span>F</span><span>I</span><span>R</span><span>S</span><span>T</span><br/>
                                        <span>C</span><span>R</span><span>Y</span><span>P</span><span>T</span><span>O</span><span>C</span><span>U</span><span>R</span><span>R</span><span>E</span><span>N</span><span>C</span><span>Y</span>&nbsp;
                                        <span>T</span><span>R</span><span>A</span><span>D</span><span>I</span><span>N</span><span>G</span>&nbsp;
                                        <span>P</span><span>L</span><span>A</span><span>T</span><span>F</span><span>O</span><span>R</span><span>M</span>
                                    </h1>
                                    <div className="divider"></div>
                                    {console.log("active about ", this.state.activeAbout)}
                                    <ul className="about-content">
                                        {/* <li>Operated by Pelpola Vipassi Foundation.</li> */}
                                        <li className="line1"> 
                                            {/* <img className="image-effect" src={require('../image/bitcoins.png')} style={{margin: "0 10px 0 0"}} /> */}
                                            <span>O</span><span>p</span><span>e</span><span>r</span><span>a</span><span>t</span><span>e</span><span>d</span>&nbsp;
                                            <span>b</span><span>y</span>&nbsp;
                                            <a href="https://www.pelpolavipassifoundation.org/" style={{borderBottom: "1px solid #fff", fontWeight: "bold", color: "#fff"}}><span>P</span><span>e</span><span>l</span><span>p</span><span>o</span><span>l</span><span>a</span>&nbsp;
                                            <span>V</span><span>i</span><span>p</span><span>a</span><span>s</span><span>s</span><span>i</span>&nbsp;
                                            <span>F</span><span>o</span><span>u</span><span>n</span><span>d</span><span>a</span><span>t</span><span>i</span><span>o</span><span>n</span></a>&nbsp;
                                            
                                        </li>
                                        {/* <li>and more</li> */}
                                        {/* <li>Profits are used to improve the environment of Sri Lanka through the foundation.</li> */}
                                        <li className="line2">
                                            {/* <img className="image-effect" src={require('../image/ethereum.png')} style={{margin: "0 10px 0 0"}} /> */}
                                            <span>P</span><span>r</span><span>o</span><span>f</span><span>i</span><span>t</span><span>s</span>&nbsp;
                                            <span>a</span><span>r</span><span>e</span>&nbsp;
                                            <span>u</span><span>s</span><span>e</span><span>d</span>&nbsp;
                                            <span>t</span><span>o</span>&nbsp;
                                            <span>t</span><span>h</span><span>e</span>&nbsp;
                                            <span>e</span><span>n</span><span>v</span><span>i</span><span>r</span><span>o</span><span>n</span><span>m</span><span>e</span><span>n</span><span>t</span>&nbsp;
                                            <span>o</span><span>f</span>&nbsp;
                                            <span>S</span><span>r</span><span>i</span>&nbsp;
                                            <span>L</span><span>a</span><span>n</span><span>k</span><span>a</span>&nbsp;
                                            <span>t</span><span>h</span><span>r</span><span>o</span><span>u</span><span>g</span><span>h</span>&nbsp;
                                            <span>t</span><span>h</span><span>e</span>&nbsp;
                                            <span>f</span><span>o</span><span>u</span><span>n</span><span>d</span><span>a</span><span>t</span><span>i</span><span>o</span><span>n</span>&nbsp;
                                        </li>
                                        {/* <li>Spot trading platform for major digital assets including（crypto icons）</li> */}
                                        <li className="line3">
                                            {/* <img className="image-effect" src={require('../image/ripple.png')} style={{margin: "0 10px 0 0"}} /> */}
                                            <span>S</span><span>p</span><span>o</span><span>t</span>&nbsp;
                                            <span>t</span><span>r</span><span>a</span><span>d</span><span>i</span><span>n</span><span>g</span>&nbsp;
                                            <span>p</span><span>l</span><span>a</span><span>t</span><span>f</span><span>o</span><span>r</span><span>m</span>&nbsp;
                                            <span>f</span><span>o</span><span>r</span>&nbsp;
                                            <span>m</span><span>a</span><span>j</span><span>o</span><span>r</span>&nbsp;
                                            <span>d</span><span>i</span><span>g</span><span>i</span><span>t</span><span>a</span><span>l</span>&nbsp;
                                            <span>a</span><span>s</span><span>s</span><span>e</span><span>t</span><span>s</span>&nbsp;
                                            <span>i</span><span>n</span><span>c</span><span>l</span><span>u</span><span>d</span><span>i</span><span>n</span><span>g</span>&nbsp;
                                            <span>(</span><span>c</span><span>r</span><span>y</span><span>p</span><span>t</span><span>o</span>&nbsp;
                                            <span>i</span><span>c</span><span>o</span><span>n</span><span>s</span><span>)</span>&nbsp;
                                        </li>

                                        <li>
                                            <img src={require("../image/bitcoin_m.png")} className="image-effect" style={{margin: "0 10px"}} />
                                            <img src={require("../image/ethereum_m.png")} className="image-effect" style={{margin: "0 10px"}} />
                                            <img src={require("../image/ripple_m.png")} className="image-effect" style={{margin: "0 10px"}} />
                                            <img src={require("../image/litecoin_m2.png")} className="image-effect" style={{margin: "0 10px"}} />
                                        </li>
                                        
                                        {/* <li>Three-level system of wallets and multiple securities including 2FA.</li> */}
                                        <li className="line4">
                                            {/* <img className="image-effect" src={require('../image/litecoin.png')} style={{margin: "0 10px 0 0"}} /> */}
                                            <span>T</span><span>h</span><span>r</span><span>e</span><span>e</span><span>-</span><span>l</span><span>e</span><span>v</span><span>e</span><span>l</span>&nbsp;
                                            <span>s</span><span>y</span><span>s</span><span>t</span><span>e</span><span>m</span>&nbsp;
                                            <span>o</span><span>f</span>&nbsp;
                                            <span>w</span><span>a</span><span>l</span><span>l</span><span>e</span><span>t</span><span>s</span>&nbsp;
                                            <span>a</span><span>n</span><span>d</span>&nbsp;
                                            <span>m</span><span>u</span><span>l</span><span>t</span><span>i</span><span>p</span><span>l</span><span>e</span>&nbsp;
                                            <span>s</span><span>e</span><span>c</span><span>u</span><span>r</span><span>i</span><span>t</span><span>i</span><span>e</span><span>s</span>&nbsp;
                                            <span>i</span><span>n</span><span>c</span><span>l</span><span>u</span><span>d</span><span>i</span><span>n</span><span>g</span>&nbsp;
                                            <span>2</span><span>F</span><span>A</span>&nbsp;
                                        </li>
                                        {/* <li>High liquidity order-book allows users to freely exchange digital assets.</li> */}
                                        <li className="line5">
                                            {/* <img className="image-effect" src={require('../image/bitcoins.png')} style={{margin: "0 10px 0 0"}} /> */}
                                            <span>H</span><span>i</span><span>g</span><span>h</span>&nbsp;
                                            <span>l</span><span>i</span><span>q</span><span>u</span><span>i</span><span>d</span><span>i</span><span>t</span><span>y</span>&nbsp;
                                            <span>o</span><span>r</span><span>d</span><span>e</span><span>r</span><span>-</span><span>b</span><span>o</span><span>o</span><span>k</span>&nbsp;
                                            <span>a</span><span>l</span><span>l</span><span>o</span><span>w</span><span>s</span>&nbsp;
                                            <span>t</span><span>o</span>&nbsp;
                                            <span>f</span><span>r</span><span>e</span><span>e</span><span>l</span><span>y</span>&nbsp;
                                            <span>e</span><span>x</span><span>c</span><span>h</span><span>a</span><span>n</span><span>g</span><span>e</span>&nbsp;
                                            <span>d</span><span>i</span><span>g</span><span>i</span><span>t</span><span>a</span><span>l</span>&nbsp;
                                            <span>a</span><span>s</span><span>s</span><span>e</span><span>t</span><span>s</span>&nbsp;
                                        </li>
                                    </ul>
                                    </Col>

                                    <Col xs={{span: 9}} xs={{span: 9}} md={{span: 9}} lg={{span: 9}}>
                                        <img src={require("../image/ECO_LOGO.png")} width="300" height="300" className="image-effect" />
                                    </Col>
                                    </Row>
                                </div>
                                
                            </div>
                            
                        </section>
                    
                    </TabPane>
                    <TabPane tab={<span style={{color: "#fff", fontWeight: "bold"}}>Exchange Token</span>} key="2">
                        <section className="page-content" >
                            <div className="page-content-article">
                                <div className={this.state.activeExchange ? "exchange-container" : ""}>
                                <Row gutter={32}>
                                    <Col xs={{span: 14}} sm={{span: 14}} md={{span: 14}} lg={{span: 14}}>
                                       
                                      
                                        
                                        <h1 style={{color: "#fff"}} className="exchange-title">
                                                <span>E</span><span>X</span><span>C</span><span>H</span><span>A</span><span>N</span><span>G</span><span>E</span>&nbsp;
                                                <span>T</span><span>O</span><span>K</span><span>E</span><span>N</span><span>S</span><span>(</span><span>S</span><span>A</span><span>L</span><span>A</span><span>)</span>&nbsp;
                                            
            
                                        </h1>
                                        <div className="divider"></div>
                                        {console.log("active exchange 2", this.state.activeExchange2)}
                                        <ul style={{color: "#fff"}} className="exchange-content">
                                            {/* <li>Will launch SALA in form of trading mining</li> */}
                                            <li className="ex-line1">
                                                {/* <img className="ex-image-effect" src={require('../image/bitcoins.png')} style={{margin: "0 10px 0 0"}} /> */}
                                                <span>W</span><span>i</span><span>l</span><span>l</span>&nbsp;
                                                <span>l</span><span>a</span><span>u</span><span>n</span><span>c</span><span>h</span>&nbsp;
                                                <span>S</span><span>A</span><span>L</span><span>A</span>&nbsp;
                                                <span>i</span><span>n</span>&nbsp;
                                                <span>o</span><span>f</span>&nbsp;
                                                <span>t</span><span>r</span><span>a</span><span>d</span><span>i</span><span>n</span><span>g</span>&nbsp; 
                                                <span>m</span><span>i</span><span>n</span><span>i</span><span>n</span><span>g</span>&nbsp;
                                                
                                            </li>
                                            {/* <li>Our mission is to establish an useful exchange token both in-outside of the exchange</li> */}
                                            <li className="ex-line2">
                                                {/* <img className="ex-image-effect" src={require('../image/ethereum.png')} style={{margin: "0 10px 0 0"}} /> */}
                                                <span>O</span><span>u</span><span>r</span>&nbsp;
                                                <span>m</span><span>i</span><span>s</span><span>s</span><span>i</span><span>o</span><span>n</span>&nbsp;
                                                <span>i</span><span>s</span>&nbsp;
                                                <span>t</span><span>o</span>&nbsp;
                                                <span>e</span><span>s</span><span>t</span><span>a</span><span>b</span><span>l</span><span>l</span><span>i</span><span>s</span><span>h</span>&nbsp;
                                                <span>a</span><span>n</span>&nbsp;
                                                <span>u</span><span>s</span><span>e</span><span>f</span><span>u</span><span>l</span>&nbsp;
                                                <span>e</span><span>x</span><span>c</span><span>h</span><span>a</span><span>n</span><span>g</span><span>e</span>&nbsp; 
                                                <span>t</span><span>o</span><span>k</span><span>e</span><span>n</span>&nbsp;
                                                <span>b</span><span>o</span><span>t</span><span>h</span>&nbsp;
                                                <span>i</span><span>n</span><span>-</span><span>o</span><span>u</span><span>t</span><span>s</span><span>i</span><span>d</span><span>e</span>&nbsp;
                                                <span>o</span><span>f</span>&nbsp;
                                                <span>t</span><span>h</span><span>e</span>&nbsp;
                                                {/* <span>e</span><span>x</span><span>c</span><span>h</span><span>a</span><span>n</span><span>g</span><span>e</span>&nbsp;  */}
                                                <span>e</span><span>x</span><span>c</span><span>h</span><span>a</span><span>n</span><span>g</span><span>e</span>
                                               
                                                
                                            </li>

                                            {/* <li>Get discounts on various fees / receive commissions.</li> */}
                                            <li className="ex-line3">
                                                {/* <img className="ex-image-effect" src={require('../image/ripple.png')} style={{margin: "0 10px 0 0"}} /> */}
                                                <span>G</span><span>e</span><span>t</span>&nbsp;
                                                <span>d</span><span>i</span><span>s</span><span>c</span><span>o</span><span>u</span><span>n</span><span>t</span><span>s</span>&nbsp;
                                                <span>o</span><span>n</span>&nbsp;
                                                <span>v</span><span>a</span><span>r</span><span>i</span><span>o</span><span>u</span><span>s</span>&nbsp;
                                                <span>f</span><span>e</span><span>e</span><span>s</span>&nbsp;
                                                <span>/</span>&nbsp;
                                                <span>r</span><span>e</span><span>v</span><span>e</span><span>i</span><span>v</span><span>e</span>&nbsp;
                                                <span>c</span><span>o</span><span>m</span><span>m</span><span>i</span><span>s</span><span>s</span><span>i</span><span>o</span><span>n</span><span>s.</span>&nbsp;
                                                {/* <span>e</span><span>x</span><span>c</span><span>h</span><span>a</span><span>n</span><span>g</span><span>e</span>&nbsp;  */}

                                            </li>
                                            {/* <li>For more information, please check our Whitepaper</li> */}
                                            <li className="ex-line4">
                                                {/* <img className="ex-image-effect" src={require('../image/bitcoins.png')} style={{margin: "0 10px 0 0"}} /> */}
                                                <span>F</span><span>o</span><span>r</span>&nbsp;
                                                <span>m</span><span>o</span><span>r</span><span>e</span>&nbsp;
                                                <span>i</span><span>n</span><span>f</span><span>o</span><span>r</span><span>m</span><span>a</span><span>t</span><span>i</span><span>o</span><span>n,</span>&nbsp;
                                                <span>p</span><span>l</span><span>e</span><span>a</span><span>s</span><span>e</span>&nbsp;
                                                <span>c</span><span>h</span><span>e</span><span>c</span><span>k</span>&nbsp;
                                                <span>o</span><span>u</span><span>r</span>&nbsp;
                                                <span>W</span><span>h</span><span>i</span><span>t</span><span>e</span><span>p</span><span>a</span><span>p</span><span>e</span><span>r</span>
                                            </li>

                                        </ul>
                                        
                                    </Col>
                                    
                                    <Col xs={{span: 10}} sm={{span: 10}} md={{span: 10}} lg={{span: 10}}  >
                                        <div style={{position: "relative", height: "300px", width: "350px"}}>
                                            <img className="ex-image-effect" src={require("../image/exchange_4coin.png")} alt="exchange-icon" width="150" height="150" style={{position: "absolute", top: "0", left: "0"}} />
                                            <img className="ex-image-effect" src={require("../image/add2.png")} alt="add icon" width="100" height="100" style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }} />
                                            <img className="ex-image-effect" src={require("../image/mining_v2.png")} alt="mining-icon" width="150" height="150" style={{position: "absolute", bottom: "0", right: "0"}} />
                                        </div>
                                    </Col>
                                </Row>
                                </div>
                            </div>
                        </section>
                    
                    </TabPane>
                    <TabPane tab={<span style={{color: "#fff", fontWeight: "bold"}}>Affiliate</span>} key="3">
                    <section className="page-content">
                        {/* <section className="page-content-affiliate"></section> */}
                        <div className="page-content-article">
                            <div className={this.state.activeAf ? "affiliate-container" : ""}>
                                <Row>
                                    <Col xs={{span: 15}} sm={{span: 15}} md={{span: 15}} lg={{span: 15}}>
                                        
                                        
                                        <h1 style={{color: "#fff"}} className="af-title">
                                                <span>B</span><span>E</span><span>S</span><span>T</span>&nbsp;
                                                <span>A</span><span>F</span><span>F</span><span>I</span><span>L</span><span>I</span><span>A</span><span>T</span><span>E</span>&nbsp;
                                                <span>S</span><span>Y</span><span>S</span><span>T</span><span>E</span><span>M</span>&nbsp;
                                                <span>F</span><span>O</span><span>R</span>&nbsp;
                                                <span>R</span><span>E</span><span>W</span><span>A</span><span>R</span><span>D</span>&nbsp;
                                                <span>U</span><span>S</span><span>E</span><span>R</span><span>S</span>&nbsp;
                                        
                                        
                                        </h1>
                                        <div className="divider"></div>
                                        <ul style={{color: "#fff"}} className="af-content" >
                                            {/* <li>Receive up to 100% of transaction fees paid by linked users.  </li> */}
                                            <li className="af-line1">
                                                {/* <img className="af-image-effect" src={require('../image/bitcoins.png')} style={{margin: "0 10px 0 0"}} /> */}
                                                <span>R</span><span>e</span><span>c</span><span>e</span><span>i</span><span>v</span><span>e</span>&nbsp;
                                                <span>u</span><span>p</span>&nbsp;
                                                <span>t</span><span>o</span>&nbsp;
                                                <span>1</span><span>0</span><span>0</span><span>%</span>&nbsp;
                                                <span>o</span><span>f</span>&nbsp;
                                                <span>t</span><span>r</span><span>a</span><span>n</span><span>s</span><span>a</span><span>c</span><span>t</span><span>i</span><span>o</span><span>n</span>&nbsp;
                                                <span>f</span><span>e</span><span>e</span><span>s</span>&nbsp;
                                                <span>p</span><span>a</span><span>i</span><span>d</span>&nbsp;
                                                <span>b</span><span>y</span>&nbsp;
                                                <span>l</span><span>i</span><span>n</span><span>k</span><span>e</span><span>d</span>&nbsp;
                                                <span>u</span><span>s</span><span>e</span><span>r</span><span>s</span>&nbsp;
                                            </li>
                                            {/* <li>Our model even rewards users who invite only one friend.</li> */}

                                            <li className="af-line2">
                                                 {/* <img className="af-image-effect" src={require('../image/ethereum.png')} style={{margin: "0 10px 0 0"}} /> */}
                                                <span>O</span><span>u</span><span>r</span>&nbsp;
                                                <span>m</span><span>o</span><span>d</span><span>e</span><span>l</span>&nbsp;
                                                <span>e</span><span>v</span><span>e</span><span>n</span>&nbsp;
                                                <span>r</span><span>e</span><span>w</span><span>a</span><span>r</span><span>d</span>&nbsp;
                                                <span>u</span><span>s</span><span>e</span><span>r</span><span>s</span>&nbsp;
                                                <span>w</span><span>h</span><span>o</span>&nbsp;
                                                <span>i</span><span>n</span><span>v</span><span>i</span><span>t</span><span>e</span>&nbsp;
                                                <span>o</span><span>n</span><span>l</span><span>y</span>&nbsp;
                                                <span>o</span><span>n</span><span>e</span>&nbsp;
                                                <span>f</span><span>r</span><span>i</span><span>e</span><span>n</span><span>d.</span>&nbsp;

                                            </li>
                                            {/* <li>Easily achieved missions.</li> */}
                                            <li className="af-line3">
                                                {/* <img className="af-image-effect" src={require('../image/ripple.png')} style={{margin: "0 10px 0 0"}} /> */}
                                                <span>E</span><span>a</span><span>s</span><span>i</span><span>l</span><span>y</span>&nbsp;
                                                <span>a</span><span>c</span><span>h</span><span>i</span><span>e</span><span>v</span><span>e</span><span>d</span>&nbsp;
                                                <span>m</span><span>i</span><span>s</span><span>s</span><span>i</span><span>o</span><span>n</span>&nbsp;
                                            
                                            </li>
                                        </ul>
                                        
                                    </Col>
                                    <Col sx={{span: 9}} sm={{span: 9}} md={{span: 9}} lg={{span: 9}}>
                                        <img className="af-image-effect" src={require("../image/user_coin4.png")} width="400" height="300" style={{marginLeft: "5rem 20px"}}  />
                                    </Col>
                                </Row>
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
                                    <button className="send">Send &gt; </button>
                                    <p>For listing tokens on ECO, please submit our listing application form from <a href="https://goo.gl/forms/W6oZ2hpbgHn2VApE3" style={{color: "#fff", textDecoration: "underline"}} >here.</a></p>
                                </div>
                            </div>
                        </section>
                    </TabPane>
                </Tabs>
                </div>
             </div>
             <Footer />
             </div>
            : ""
            }
            
        </div>
    )
    }
}

export default HomePage