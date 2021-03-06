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
import imacprohero from "../../Asssetts/imac_pro_01_large.jpg";
import imachero from "../../Asssetts/imac_large.jpg";
import macbookprohero from "../../Asssetts/macbookpro_tb_large.jpg";
import macbookhero from "../../Asssetts/macbook_large.jpg";
import comparemachero from "../../Asssetts/compare_large.jpg";
import shipping from "../../Asssetts/icon_shipping_large.png";
import pickup from "../../Asssetts/icon_pickup_large.png";

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
        <div className="imacpro">
          <p className="imacproh">iMac Pro</p>
          <p className="imacpros">Power to the pro.</p>
          <div className="flexthis">
            <p>Learn more ></p>
            <p>Buy ></p>
            <p>Watch the films ></p>
          </div>
          <img src={imacprohero} />
        </div>
        <div className="imac">
          <p className="imach">iMac</p>
          <p className="imacs">The vision is brighter than ever.</p>
          <div className="flexthis">
            <p>Learn more ></p>
            <p> Buy ></p>
          </div>

          <img src={imachero} />
        </div>
        <div className="macbookpro2">
          <p className="macbookproh">MacBook Pro </p>
          <p className="macbookpros">A touch of genius.</p>
          <div className="flexthis">
            <p>Learn more ></p>
            <p>Buy ></p>
          </div>
          <img className="macbookproim" src={macbookprohero} />
        </div>
        <div className="macbook">
          <p className="macbookh">MacBook</p>
          <p className="macbooks"> Light. Years ahead.</p>
          <div className="flexthis">
            <p> Learn more ></p>
            <p> Buy ></p>
          </div>
          <img src={macbookhero} />
        </div>
        <div className="os">
          <p className="osh">macOS High Sierra</p>
          <p className="oss">Your Mac.Elevated.</p>
          <div className="flexthis">
            <p>Learn more ></p>
            <p>Upgrade now ^</p>
          </div>
        </div>
        <div className="comparem">
          <p className="comparemh">Compare Mac models.</p>
          <div>
            <p className="comparems">Find the best Mac for you > </p>
          </div>
          <img src={comparemachero} />
        </div>
        <div className="justt">
          <p className="justth">Turn the computer you have</p>
          <p className="justth">into the Mac you want.</p>
          <p className="justts">
            Get credit toward a new Mac. Just trade in your eligible computer
            with
          </p>
          <p className="justts">
            Apple GiveBack. It's good for you and the planet.
          </p>
          <p className="blue"> See how it works > </p>
        </div>
        <div className="buy">
          <div className="deliver">
            <img src={shipping} />
            <p className="shippingtexth">Free two-day delivery</p>
            <p className="shippingtexts">
              On in-stock items orderd by 5:00 p.m.
            </p>

            <p className="blue">learn more ></p>
          </div>

          <div className="pickup">
            <img src={pickup} />
            <p className="pickuptexth">Pick up at the Apple Store</p>
            <p className="pickuptexts">
              Buy online and pick up available items in an hour.
            </p>
            <p className="blue"> Learn more ></p>
          </div>
        </div>
        <div className="accessories">
          <p className="acch">Accessories for Mac</p>
          <p className="blue">Shop now > </p>
        </div>
      </div>
    );
  }
}

export default Mac;
