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
                      alt="imagealt"
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
                    onClick={() => {
                      window.location.href = "/services-detail";
                    }}
                  >
                    EPOXY Flooring
                  </Link>
                  <Link
                    to="#"
                    onClick={() => {
                      window.location.href =
                        "/services-detail-polyurethane-flooring";
                    }}
                  >
                    POLYURETHANE FLOORING
                  </Link>
                  <Link
                    to="#"
                    onClick={() => {
                      window.location.href =
                        "/services-detail-di-elecric-flooring";
                    }}
                  >
                    DI-ELECRIC FLOORING
                  </Link>
                  <Link
                    to="#"
                    onClick={() => {
                      window.location.href =
                        "/services-detail-anti-static-epoxy-flooring";
                    }}
                  >
                    ANTI-STATIC EPOXY FLOORING
                  </Link>
                  <Link
                    to="#"
                    onClick={() => {
                      window.location.href = "/services-detail-esd-flooring";
                    }}
                  >
                    ESD FLOORING
                  </Link>
                  <Link
                    to="#"
                    onClick={() => {
                      window.location.href = "/services-detail-access-floors";
                    }}
                  >
                    ACCESS FLOORS
                  </Link>
                  <Link
                    to="#"
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
                    onClick={() => {
                      window.location.href = "/project-detail";
                    }}
                  >
                    Flooring Services
                  </Link>
                  <Link
                    to="#"
                    onClick={() => {
                      window.location.href =
                        "/project-detail-esdantistaticfloorforapharma";
                    }}
                  >
                    ESD Anti Static Floor
                  </Link>
                  <Link
                    to="#"
                    onClick={() => {
                      window.location.href = "/project-detail-foxcon";
                    }}
                  >
                    Foxcon
                  </Link>
                  <Link
                    to="#"
                    onClick={() => {
                      window.location.href = "/project-detail-luxshare";
                    }}
                  >
                    Luxshare
                  </Link>
                  <Link
                    to="#"
                    onClick={() => {
                      window.location.href = "/project-detail-mandolez";
                    }}
                  >
                    Mandolez
                  </Link>
                  <Link
                    to="#"
                    onClick={() => {
                      window.location.href = "/project-detail-syrmasgs";
                    }}
                  >
                    Syrma SGS
                  </Link>
                  <Link
                    to="#"
                    onClick={() => {
                      window.location.href = "/project-detail-flex";
                    }}
                  >
                    FLEX
                  </Link>
                  <Link
                    to="#"
                    onClick={() => {
                      window.location.href = "/project-detail-sportsproject";
                    }}
                  >
                    Sports-project
                  </Link>
                  <Link
                    to="#"
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
