import React, { Component } from "react";
import "./Header.css";
import serchicon from "../../Asssetts/image_large-2.svg";
import bagicon from "../../Asssetts/image_large-1.svg";
import logo from "../../Asssetts/image_large.svg";
import Mac from "../../Asssetts/image_large-3.svg";
import iPad from "../../Asssetts/image_large-4.svg";
import iPhone from "../../Asssetts/image_large-5.svg";
import Watch from "../../Asssetts/image_large-6.svg";
import Tv from "../../Asssetts/image_large-7.svg";
import Music from "../../Asssetts/image_large-8.svg";
import Support from "../../Asssetts/image_large-9.svg";
import { Link } from "react-router-dom";
class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="space"> </div>
        <Link to="/">
          <img src={logo} />
        </Link>
        <Link to="/Mac">
          <img src={Mac} />
        </Link>
        <img src={iPad} />
        <img src={iPhone} />
        <img src={Watch} />
        <img src={Tv} />
        <img src={Music} />
        <img src={Support} />
        <img src={serchicon} />
        <img src={bagicon} />
        <div className="space"> </div>
      </div>
    );
  }
}

export default Header;
