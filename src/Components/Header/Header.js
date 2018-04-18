import React, { Component } from "react";
import "./Header.css";
import serchicon from "../../Asssetts/image_large-2.svg";
import bagicon from "../../Asssetts/image_large-1.svg";
import logo from "../../Asssetts/image_large.svg";
class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="space"> </div>
        <img src={logo} />
        <a> Mac </a>
        <a>ipad</a>
        <a>iphone</a>
        <a>Watch</a>
        <a> TV </a>
        <a> Music</a>
        <a>Support </a>
        <img src={serchicon} />
        <img src={bagicon} />
        <div className="space"> </div>
      </div>
    );
  }
}

export default Header;
