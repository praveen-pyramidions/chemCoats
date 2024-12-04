import React, { Component } from "react";

class Information extends Component {
  render() {
    return (
      <div className="col-md-6">
        <div
          className="themesflat-spacer clearfix"
          data-desktop={0}
          data-mobile={0}
          data-smobile={35}
        />
        <div className="themesflat-headings style-2 clearfix">
          <h2 className="heading">INFORMATION</h2>
          <div className="sep has-width w80 accent-bg clearfix" />
        </div>
        <div
          className="themesflat-spacer clearfix"
          data-desktop={36}
          data-mobile={35}
          data-smobile={35}
        />
        <div className="themesflat-tabs style-1 w168 clearfix">
          <ul className="tab-title clearfix">
            <li className="item-title active">
              <span className="inner">Head Office</span>
            </li>
            {/* <li className="item-title">
              <span className="inner">Colombia</span>
            </li>
            <li className="item-title">
              <span className="inner">Mexico</span>
            </li> */}
          </ul>
          <div className="tab-content-wrap clearfix">
            <div className="tab-content">
              <div className="item-content">
                <ul>
                  <li className="clearfix">
                    <div className="inner">
                      <span className="fa fa-map-marker" />
                      <span className="text">
                        17, Srinivasa Reddy Street , T Nagar , Chennai - 600017
                      </span>
                    </div>
                  </li>
                  <li className="clearfix">
                    <div className="inner">
                      <span className="fa fa-phone" />
                      <span className="text">
                        CALL US : +91 99626 99888 , +91 88700 67777
                      </span>
                    </div>
                  </li>
                  <li className="clearfix">
                    <div className="inner">
                      <span className="fa fa-envelope" />
                      <span className="text">EMAIL : Sales@Chemcoats.com</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="tab-content">
              <div className="item-content">
                <ul>
                  <li className="clearfix">
                    <div className="inner">
                      <span className="fa fa-map-marker" />
                      <span className="text">
                        PO BOX 16122 COLLINS STREET WEST VICTORIA, NEWYORK{" "}
                      </span>
                    </div>
                  </li>
                  <li className="clearfix">
                    <div className="inner">
                      <span className="fa fa-phone" />
                      <span className="text">CALL US : (+61) 3 8376 6284</span>
                    </div>
                  </li>
                  <li className="clearfix">
                    <div className="inner">
                      <span className="fa fa-envelope" />
                      <span className="text">
                        EMAIL : SUPPORT@THEMESFLAT.COM
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="tab-content">
              <div className="item-content">
                <ul>
                  <li className="clearfix">
                    <div className="inner">
                      <span className="fa fa-map-marker" />
                      <span className="text">
                        PO BOX 16122 COLLINS STREET WEST VICTORIA, NEWYORK{" "}
                      </span>
                    </div>
                  </li>
                  <li className="clearfix">
                    <div className="inner">
                      <span className="fa fa-phone" />
                      <span className="text">CALL US : (+61) 3 8376 6284</span>
                    </div>
                  </li>
                  <li className="clearfix">
                    <div className="inner">
                      <span className="fa fa-envelope" />
                      <span className="text">
                        EMAIL : SUPPORT@THEMESFLAT.COM
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          className="themesflat-spacer clearfix"
          data-desktop={20}
          data-mobile={35}
          data-smobile={35}
        />
        {/* <div className="themesflat-map" /> */}

        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7774.119502215886!2d80.206043!3d13.031867!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267ffb456dd53%3A0xd8fa228268967252!2sCHEM%20COATS!5e0!3m2!1sen!2sin!4v1732002693067!5m2!1sen!2sin"
            width="600"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    );
  }
}

export default Information;
