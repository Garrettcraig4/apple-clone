import React, { Component } from "react";
import "./Home.css";
import red from "../../Asssetts/product_red_logo_alt_large.png";
import hero from "../../Asssetts/hero_largetall.jpg";
import iphonexhero from "../../Asssetts/iphone_x_largetall_2x.jpg";
import ipadhero from "../../Asssetts/ipad_largetall.jpg";
class Home extends Component {
  render() {
    return (
      <div className="RealHome">
        <div className="Home">
          <div className="se">
            <span>Special Edition</span>
          </div>
          <img id="red" src={red} />
          <div id="two">
            <p>Learn about (RED)® ></p>
            <p>Buy ></p>
          </div>
          <img className="hero" src={hero} />
        </div>
        <div className="iphonex">
          <p className="ix">iPhone X</p>
          <p className="six"> Say hello to the future.</p>

          <img className="iximg" src={iphonexhero} />
        </div>
        <div className="ipad">
          <p id="hipad">iPad</p>
          <p id="sipad"> Like a computer. Unlike any computer. </p>
          <img src={ipadhero} />
        </div>
      </div>
    );
  }
}

export default Home;
