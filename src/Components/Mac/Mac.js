import React, { Component } from "react";
import "./Mac.css";
import macbook from "../../Asssetts/macbook_dark_large.svg";
import macbookair from "../../Asssetts/macbookair_dark_large.svg";
import macbookpro from "../../Asssetts/macbookpro_dark_large.svg";
import imac from "../../Asssetts/imac_dark_large.svg";
import imacpro from "../../Asssetts/imac_pro_dark_large.svg";
import macpro from "../../Asssetts/macpro_dark_large.svg";
import macmini from "../../Asssetts/macmini_dark_large.svg";
import accessories from "../../Asssetts/mac_acc_dark_large.svg";
import highsierra from "../../Asssetts/mac_osx_dark_large.svg";
import compare from "../../Asssetts/mac_comp_dark_large.svg";
import { Link } from "react-router-dom";
class Mac extends Component {
  render() {
    return (
      <div className="Mac">
        <div className="fill">
          <div className="machead">
            <div className="par">
              <img src={macbook} />
              <p className="mact">MacBook</p>
            </div>
            <div className="par">
              <img src={macbookair} />
              <p className="mact">MacBook Air</p>
            </div>
            <div className="par">
              <img src={macbookpro} />
              <p className="mact">MacBook Pro</p>
            </div>
            <div className="par">
              <img src={imac} />
              <p className="mact">iMac</p>
            </div>
            <div className="par">
              <img src={imacpro} />
              <p className="mact">iMac Pro</p>
              <p className="o">New</p>
            </div>
            <div className="par">
              <img src={macpro} />
              <p className="mact">Mac Pro</p>
            </div>
            <div className="par">
              <img src={macmini} />
              <p className="mact">Mac mini</p>
            </div>
            <div className="par">
              <img src={accessories} />
              <p className="mact">Accessories</p>
            </div>
            <div className="par">
              <img src={highsierra} />
              <p className="mact">High Sierra</p>
            </div>
            <div className="par">
              <img src={compare} />
              <p className="mact">Compare</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Mac;
