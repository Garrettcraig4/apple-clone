import React, { Component } from "react";
import "./Footer.css";

import { Link } from "react-router-dom";
class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div className="insidef">
          <div className="redt">
            <ul>
              <li>
                A portion of the proceeds from every (PRODUCT)RED purchase will
                go to the Global Fund to fight AIDS in Africa.
              </li>
            </ul>
          </div>
          <div className="linksf">
            <p>links</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
