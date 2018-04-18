import React, { Component } from "react";
import "./Home.css";
import red from "../../Asssetts/product_red_logo_alt_large.png";
import hero from "../../Asssetts/hero_largetall.jpg";
class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="se">
          <p>Special Edition</p>
        </div>
        <img src={red} />
        <img className="hero" src={hero} />
      </div>
    );
  }
}

export default Home;
