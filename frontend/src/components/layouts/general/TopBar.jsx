import React, { Component } from "react";
import { Link } from "react-router-dom";

class TopBar extends Component {
  render() {
    return (
      <div id="top-bar">
        <div id="top-bar-inner" className="container">
          <div className="top-bar-inner-wrap">
            <div className="top-bar-content">
              <div className="inner">
                <span className="address content">
                  17, Srinivasa Reddy St, T Nagar
                </span>
                <span className="phone content">
                  +91 99626 99888 , 88700 67777
                </span>
                <span className="time content">Mon-Sat: 9am - 8pm</span>
              </div>
            </div>
            <div className="top-bar-socials">
              <div className="inner">
                <span className="text">Follow us:</span>
                <span className="icons">
                  {/* <Link to="#" title="Facebook">
                    <i className="fa fa-facebook" />
                  </Link>
                  <Link to="#" title="Twitter">
                    <i className="fa fa-twitter" />
                  </Link>
                  <Link to="#" title="Pinterest">
                    <i className="fa fa-pinterest-p" />
                  </Link> */}
                  <a href="https://www.linkedin.com/company/chemcoats/" title="linkedIn" target="_blank">
                    <i className="fa fa-linkedin" />
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TopBar;
