import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

(function () {
	'use strict';
	
	var canvas,
      ctx,
      mousePos,
      points = [],
      maxDist = 200,
      colour = "255,30,70";

	function init () {
		//Add on load scripts
		canvas = document.getElementById("canvas");
		ctx = canvas.getContext("2d");
		canvas.addEventListener("mousemove",function(evt){
			mousePos = getMousePos(canvas,evt);
		});
		resizeCanvas();
		generatePoints(80);
		pointFun();
		setInterval(pointFun,16);
		window.addEventListener('resize', resizeCanvas, false);
	}
	//Particle constructor
	function point () {
		this.x = (Math.random()*(canvas.width+maxDist))-(maxDist/2);
		this.y = (Math.random()*(canvas.height+maxDist))-(maxDist/2);
		this.vx = (Math.random()*1)-.5;
		this.vy = (Math.random()*1)-.5;
    this.dia = Math.random()*3+1;
		points.push(this);
	}
	//Point generator
	function generatePoints (amount) {
		var temp;
		for (var i = 0; i < amount; i++) {
			temp = new point();
		};
		console.log(points);
	}
	//Point drawer
	function draw (obj) {
		ctx.beginPath();
		ctx.fillStyle = "rgb("+colour+")";
		if(obj.dia){
      ctx.arc(obj.x,obj.y,obj.dia,0,2*Math.PI);
    }else{
      ctx.arc(obj.x,obj.y,2,0,2*Math.PI);
    }
		ctx.closePath();
		ctx.fill();
		//ctx.stroke();
	}
	//Updates point position values
	function update (obj) {
		obj.x += obj.vx;
		obj.y += obj.vy;
		if (obj.x > canvas.width+(maxDist/2)) {
			obj.x = -(maxDist/2);
		}
		else if (obj.xpos < -(maxDist/2)) {
			obj.x = canvas.width+(maxDist/2);
		}
		if (obj.y > canvas.height+(maxDist/2)) {
			obj.y = -(maxDist/2);
		}
		else if (obj.y < -(maxDist/2)) {
			obj.y = canvas.height+(maxDist/2);
		}
	}
	//
	function pointFun () {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		if (mousePos) {
			collision(mousePos,maxDist*2);
			draw(mousePos);
		}
		for (var i = 0; i < points.length; i++) {
			collision(points[i],maxDist);
      draw(points[i]);
			update(points[i]);
		};
	}

	function collision (obj,dist) {
		var temp;
		for (var i = 0; i < points.length; i++) {
			//Don't interact with self
			if (obj !== points[i]) {
				temp = Math.sqrt(Math.pow((obj.x - points[i].x),2) + Math.pow((obj.y - points[i].y),2));
				if (temp<dist) {
					ctx.beginPath();
					ctx.moveTo(obj.x, obj.y);
					ctx.strokeStyle = "rgba("+colour+","+.8*Math.pow((dist-temp)/dist,5)+")";
          ctx.moveTo(obj.x, obj.y);
					ctx.lineTo(points[i].x, points[i].y);
					ctx.closePath();
					ctx.stroke();
				};
			}
		};
	}

	function resizeCanvas() {
		canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
		pointFun();
	}

	function getMousePos(cvs, evt1) {
		var rect = cvs.getBoundingClientRect();
		return {
			x: evt1.clientX - rect.left,
			y: evt1.clientY - rect.top
		};
	}

	//Execute when DOM has loaded
	document.addEventListener('DOMContentLoaded',init,false);
})();

class App extends Component {
  render() {
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      //   <p style={{zIndex: "1000000000", color: "#fff"}}>Hello world</p>
      // </div>
      <div>
          <header>
            <img className="logo" src={require('./image/eco-logo.jpg')} width="100" height="100" />

            <nav className="authentication">
              <button>Signup</button>
              <button>Login</button>
            </nav>
          </header>

          <div className="container">
            <div className="homepage">
              <h1>SKI LANKA'S FIRST</h1>
              <h1>CRYPTOCURRENCY TRADING FLATFORM</h1>
              <p> Learn More</p>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
