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
            <div className="linksflex">
              <div className="links1">
                <h3>Shop And Learn</h3>
                <li>Mac</li>
                <li>iPad</li>
                <li>iPhone</li>
                <li>Watch</li>
                <li>TV</li>
                <li>Music</li>
                <li>iTunes</li>
                <li>HomePod</li>
                <li>iPod touch</li>
                <li>Accessories</li>
                <li>Gift Cards</li>
              </div>
              <div className="links2">
                <h3>Apple Store</h3>
                <li>Find a Store</li>
                <li>Genius Bar</li>
                <li>Today at Apple</li>
                <li>Apple Camp</li>
                <li>Field Trip</li>
                <li>Apple Store App</li>
                <li>Refurbished and Clearance</li>
                <li>Financing</li>
                <li>Reuse and Recycling</li>
                <li>Order Status</li>
                <li>Shopping Help</li>
              </div>
              <div className="edulink">
                <h3>For Education</h3>
                <p>Apple and Education</p>
                <p>Shop for Collage</p>

                <h3>For Business</h3>
                <p>Apple and Business</p>
                <p>Shop for Business</p>
              </div>
              <div className="extlink">
                <h3>Account</h3>
                <p>Manage Your Apple ID</p>
                <p>Apple Store Account</p>
                <p>iCloud.com</p>

                <h3>Apple Values</h3>
                <p>Accessibility</p>
                <p>Education</p>
                <p>Environment</p>
                <p>Inclusion and Diversity</p>
                <p>Privacy</p>
                <p>Supplier Responsibility</p>
              </div>
              <div className="aboutlink">
                <h3>About Apple</h3>
                <p>Newsroom</p>
                <p>Apple Leadership</p>
                <p>Job Opportunities</p>
                <p>Investors</p>
                <p>Events</p>
                <p>Contact Apple</p>
              </div>
            </div>
            <p className="applecontact">
              More ways to shop: Visit an <a className="b"> Apple Store</a>,
              call 1-800-MY-APPLE, or <a className="b">find a reseller</a>.
            </p>
          </div>
          <p className="cc">
            Copyright © 2018 Apple Inc. All rights reserved.
            <p className="cc">
              Privacy Policy | Terms of Use | Sales and Refunds | Legal | Site
              Map
            </p>
          </p>
        </div>
      </div>
    );
  }
}

export default Footer;
