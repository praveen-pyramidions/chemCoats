import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <footer id="footer" className="clearfix">
        <div id="footer-widgets" className="container">
          <div className="themesflat-row gutter-30">
            <div className="col span_1_of_3">
              <div className="widget widget_text">
                <div className="textwidget">
                  <p>
                    <img
                      src="/assets/img/logo-white@2x.png"
                      alt="chemcoats logo"
                      title="chemcoats logo"
                      width={170}
                      height={34}
                    />
                  </p>

                  <ul>
                    <li>
                      <div className="inner">
                        <span className="fa fa-map-marker" />
                        <span className="text">
                          17, Srinivasa Reddy St , T Nagar, &nbsp;Chennai, Tamil
                          Nadu 600017
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="inner">
                        <span className="fa fa-phone" />
                        <span className="text">CALL US : +91 9962699888</span>
                      </div>
                    </li>
                    <li className="margin-top-7">
                      <div className="inner">
                        <span className=" font-size-14 fa fa-envelope" />
                        <span className="text">Sales@Chemcoats.com</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              {/* /.widget_text */}
              <div
                className="themesflat-spacer clearfix"
                data-desktop={0}
                data-mobile={0}
                data-smobile={35}
              />
            </div>
            {/* /.col */}

            {/* /.col */}
            <div className="col span_1_of_3">
              <div
                className="themesflat-spacer clearfix"
                data-desktop={0}
                data-mobile={35}
                data-smobile={35}
              />
              <div className="widget widget_tags">
                <h2 className="widget-title margin-bottom-30">
                  <span>SERVICES</span>
                </h2>
                <div className="tags-list">
                  <Link
                    to="#"
                    title={`Go to Services`}
                    onClick={() => {
                      window.location.href = "/services";
                    }}
                  >
                    EPOXY Flooring
                  </Link>
                  <Link
                    to="#"
                    title={`Go to polyurethane-flooring`}
                    onClick={() => {
                      window.location.href =
                        "/polyurethane-flooring";
                    }}
                  >
                    POLYURETHANE FLOORING
                  </Link>
                  <Link
                    to="#"
                    title={`di-elecric-flooring`}
                    onClick={() => {
                      window.location.href =
                        "/di-elecric-flooring";
                    }}
                  >
                    DI-ELECRIC FLOORING
                  </Link>
                  <Link
                    to="#"
                    title={`anti-static-epoxy-flooring`}
                    onClick={() => {
                      window.location.href =
                        "/anti-static-epoxy-flooring";
                    }}
                  >
                    ANTI-STATIC EPOXY FLOORING
                  </Link>
                  <Link
                    to="#"
                    title={`esd-flooring`}
                    onClick={() => {
                      window.location.href = "/esd-flooring";
                    }}
                  >
                    ESD FLOORING
                  </Link>
                  <Link
                    to="#"
                    title={`access-floors`}
                    onClick={() => {
                      window.location.href = "/access-floors";
                    }}
                  >
                    ACCESS FLOORS
                  </Link>
                  <Link
                    to="#"
                    title={`services`}
                    onClick={() => {
                      window.location.href = "/services";
                    }}
                  >
                    All Services
                  </Link>
                </div>
              </div>
            </div>
            {/* /.col */}
            {/* /.col */}
            <div className="col span_1_of_3">
              <div
                className="themesflat-spacer clearfix"
                data-desktop={0}
                data-mobile={35}
                data-smobile={35}
              />
              <div className="widget widget_tags">
                <h2 className="widget-title margin-bottom-30">
                  <span>PROJECTS</span>
                </h2>
                <div className="tags-list">
                  <Link
                    to="#"
                    title={`esd-protection-systems`}
                    onClick={() => {
                      window.location.href = "/esd-protection-systems";
                    }}
                  >
                    Flooring Services
                  </Link>
                  <Link
                    to="#"
                    title={`esd-antistatic-floor-fora-pharma`}
                    onClick={() => {
                      window.location.href =
                        "/esd-antistatic-floor-fora-pharma";
                    }}
                  >
                    ESD Anti Static Floor
                  </Link>
                  <Link
                    to="#"
                    title={`foxcon`}
                    onClick={() => {
                      window.location.href = "/foxcon";
                    }}
                  >
                    Foxcon
                  </Link>
                  <Link
                    to="#"
                    title={`luxshare`}
                    onClick={() => {
                      window.location.href = "/luxshare";
                    }}
                  >
                    Luxshare
                  </Link>
                  <Link
                    to="#"
                    title={`mandolez`}
                    onClick={() => {
                      window.location.href = "/mandolez";
                    }}
                  >
                    Mandolez
                  </Link>
                  <Link
                    to="#"
                    title={`syrmasgs`}
                    onClick={() => {
                      window.location.href = "/syrmasgs";
                    }}
                  >
                    Syrma SGS
                  </Link>
                  <Link
                    to="#"
                    title={`flex`}
                    onClick={() => {
                      window.location.href = "/flex";
                    }}
                  >
                    FLEX
                  </Link>
                  <Link
                    to="#"
                    title={`sports-project`}
                    onClick={() => {
                      window.location.href = "/sports-project";
                    }}
                  >
                    Sports-project
                  </Link>
                  <Link
                    to="#"
                    title={`project`}
                    onClick={() => {
                      window.location.href = "/project";
                    }}
                  >
                    All Projects
                  </Link>
                </div>
              </div>
            </div>
            {/* /.col */}
            {/* /.col */}
            <div className="col span_1_of_3">
              <div
                className="themesflat-spacer clearfix"
                data-desktop={0}
                data-mobile={35}
                data-smobile={35}
              />
              <div className="widget widget_tags">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7774.119502215886!2d80.206043!3d13.031867!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267ffb456dd53%3A0xd8fa228268967252!2sCHEM%20COATS!5e0!3m2!1sen!2sin!4v1732002693067!5m2!1sen!2sin"
                  width="600"
                  height="350"
                  style={{ border: 0 }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            {/* /.col */}
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
