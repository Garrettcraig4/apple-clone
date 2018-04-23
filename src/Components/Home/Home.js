import React, { Component } from "react";
import "./Home.css";
import red from "../../Asssetts/product_red_logo_alt_large.png";
import hero from "../../Asssetts/hero_largetall.jpg";
import iphonexhero from "../../Asssetts/iphone_x_largetall_2x.jpg";
import ipadhero from "../../Asssetts/ipad_largetall.jpg";
import mbphero from "../../Asssetts/macbook_pro_large.jpg";
import applewt from "../../Asssetts/watch_series_3_logo_large.png";
import applewimg from "../../Asssetts/watch_series_3_large.jpg";
import homepodhero from "../../Asssetts/homepod_large.jpg";
import applemimg from "../../Asssetts/music_three_months_large.jpg";
import applemt from "../../Asssetts/music_white_large.png";
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
        <div id="flexd">
          <div className="macbookpro">
            <p id="HMBP">MacBook Pro</p>
            <p id="smbp">A touch of genius.</p>
            <img id="mbpimg" src={mbphero} />
          </div>
          <div className="applewatch">
            <img src={applewt} />
            <p classNane="applewtext">The freedom of cellular.</p>
            <img className="applewimg" src={applewimg} />
          </div>
        </div>
        <div id="flexd">
          <div className="homepod">
            <p className="hhomepod">Homepod</p>
            <p className="shomepod">The new sound of home.</p>
            <img src={homepodhero} />
          </div>
          <div className="applemusic">
            <img className="applemt" src={applemt} />
            <p className="applemtext">45 million songs. Three months on us.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
