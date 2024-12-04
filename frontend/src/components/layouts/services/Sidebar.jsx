import React, { Component } from "react";
import { Link } from "react-router-dom";
class Sidebar extends Component {
  render() {
    return (
      <div id="sidebar">
        <div
          className="themesflat-spacer clearfix"
          data-desktop={80}
          data-mobile={0}
          data-smobile={0}
        />
        <div id="inner-sidebar" className="inner-content-wrap">
          <div className="widget widget_list">
            <div className="advantagesServicePage">Advantages</div>
            <div className="inner">
              <ul className="list-wrap">
                <li className="list-item">
                  <Link to="#">
                    <span className="text">
                      Exceptional Chemical and Heat Resilience
                    </span>
                  </Link>
                </li>
                <li className="list-item">
                  <Link to="#">
                    <span className="text">
                      Exceptional Scratch and Impact Endurance
                    </span>
                  </Link>
                </li>
                <li className="list-item">
                  <Link to="#">
                    <span className="text">
                      Unyielding Durability and Toughness
                    </span>
                  </Link>
                </li>
                <li className="list-item">
                  <Link to="#">
                    <span className="text">Guarantees Utter Satisfaction</span>
                  </Link>
                </li>
                <li className="list-item">
                  <Link to="#">
                    <span className="text">Striking High-Gloss Finish</span>
                  </Link>
                </li>
                <li className="list-item">
                  <Link to="#">
                    <span className="text">Exceptional Heat Tolerances</span>
                  </Link>
                </li>
                <li className="list-item">
                  <Link to="#">
                    <span className="text">
                      Outstanding Resistance to Abrasion
                    </span>
                  </Link>
                </li>
                <li className="list-item">
                  <Link to="#">
                    <span className="text">
                      Remarkable Impact and Pressure Resilience
                    </span>
                  </Link>
                </li>
                <li className="list-item">
                  <Link to="#">
                    <span className="text">
                      Adaptable Thicknesses for Versatile Use
                    </span>
                  </Link>
                </li>
                <li className="list-item">
                  <Link to="#">
                    <span className="text">
                      Eye-catching, Vibrant Color Selection
                    </span>
                  </Link>
                </li>
                <li className="list-item">
                  <Link to="#">
                    <span className="text">Non-Slip and Easy to Maintain</span>
                  </Link>
                </li>
                <li className="list-item">
                  <Link to="#">
                    <span className="text">
                      Resilient Against Weather Conditions
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="widget widget_list" style={{ background: "#e26016" }}>
            <div className="advantagesServicePage">
              Our Other Industrial Flooring Services
            </div>
            <div className="inner">
              <ul className="list-wrap">
                <li className="list-item">
                  <Link
                    to="#"
                    onMouseEnter={(e) => (e.target.style.color = "black")}
                    onMouseLeave={(e) => (e.target.style.color = "white")}
                    onClick={() => {
                      window.location.href = "/services-detail";
                    }}
                  >
                    <span className="text">EPOXY FLOORING</span>
                  </Link>
                </li>
                <li className="list-item">
                  <Link
                    onMouseEnter={(e) => (e.target.style.color = "black")}
                    onMouseLeave={(e) => (e.target.style.color = "white")}
                    to="#"
                    onClick={() => {
                      window.location.href =
                        "/services-detail-polyurethane-flooring";
                    }}
                  >
                    <span className="text">POLYURETHANE FLOORING</span>
                  </Link>
                </li>
                <li className="list-item">
                  <Link
                    onMouseEnter={(e) => (e.target.style.color = "black")}
                    onMouseLeave={(e) => (e.target.style.color = "white")}
                    to="#"
                    onClick={() => {
                      window.location.href =
                        "/services-detail-di-elecric-flooring";
                    }}
                  >
                    <span className="text">DI-ELECRIC FLOORING</span>
                  </Link>
                </li>
                <li className="list-item">
                  <Link
                    onMouseEnter={(e) => (e.target.style.color = "black")}
                    onMouseLeave={(e) => (e.target.style.color = "white")}
                    to="#"
                    onClick={() => {
                      window.location.href =
                        "/services-detail-anti-static-epoxy-flooring";
                    }}
                  >
                    <span className="text">ANTI-STATIC EPOXY FLOORING</span>
                  </Link>
                </li>
                <li className="list-item">
                  <Link
                    onMouseEnter={(e) => (e.target.style.color = "black")}
                    onMouseLeave={(e) => (e.target.style.color = "white")}
                    to="#"
                    onClick={() => {
                      window.location.href = "/services-detail-esd-flooring";
                    }}
                  >
                    <span className="text">ESD FLOORING</span>
                  </Link>
                </li>
                <li className="list-item">
                  <Link
                    onMouseEnter={(e) => (e.target.style.color = "black")}
                    onMouseLeave={(e) => (e.target.style.color = "white")}
                    to="#"
                    onClick={() => {
                      window.location.href = "/services-detail-access-floors";
                    }}
                  >
                    <span className="text">ACCESS FLOORS</span>
                  </Link>
                </li>
                <li className="list-item">
                  <Link
                    onMouseEnter={(e) => (e.target.style.color = "black")}
                    onMouseLeave={(e) => (e.target.style.color = "white")}
                    to="#"
                    onClick={() => {
                      window.location.href =
                        "/services-detail-car-park-deck-flooring";
                    }}
                  >
                    <span className="text">CAR PARK DECK FLOORING</span>
                  </Link>
                </li>
                <li className="list-item">
                  <Link
                    onMouseEnter={(e) => (e.target.style.color = "black")}
                    onMouseLeave={(e) => (e.target.style.color = "white")}
                    to="#"
                    onClick={() => {
                      window.location.href = "/services-detail-sports-flooring";
                    }}
                  >
                    <span className="text">SPORTS FLOORING</span>
                  </Link>
                </li>
                <li className="list-item">
                  <Link
                    onMouseEnter={(e) => (e.target.style.color = "black")}
                    onMouseLeave={(e) => (e.target.style.color = "white")}
                    to="#"
                    onClick={() => {
                      window.location.href =
                        "/services-detail-di-clean-room-flooring";
                    }}
                  >
                    <span className="text">CLEAN ROOM FLOORING</span>
                  </Link>
                </li>
                <li className="list-item">
                  <Link
                    onMouseEnter={(e) => (e.target.style.color = "black")}
                    onMouseLeave={(e) => (e.target.style.color = "white")}
                    to="#"
                    onClick={() => {
                      window.location.href =
                        "/services-detail-di-heavy-duty-epoxy-flooring";
                    }}
                  >
                    <span className="text">HEAVY DUTY EPOXY FLOORING</span>
                  </Link>
                </li>
                <li className="list-item">
                  <Link
                    onMouseEnter={(e) => (e.target.style.color = "black")}
                    onMouseLeave={(e) => (e.target.style.color = "white")}
                    to="#"
                    onClick={() => {
                      window.location.href =
                        "/services-detail-di-hygiene-flooring";
                    }}
                  >
                    <span className="text">HYGIENE FLOORING</span>
                  </Link>
                </li>
                <li className="list-item">
                  <Link
                    onMouseEnter={(e) => (e.target.style.color = "black")}
                    onMouseLeave={(e) => (e.target.style.color = "white")}
                    to="#"
                    onClick={() => {
                      window.location.href =
                        "/services-detail-di-self-leveling-epoxy-flooring";
                    }}
                  >
                    <span className="text">SELF LEVELLING EPOXY FLOORING</span>
                  </Link>
                </li>
                <li className="list-item">
                  <Link
                    onMouseEnter={(e) => (e.target.style.color = "black")}
                    onMouseLeave={(e) => (e.target.style.color = "white")}
                    to="#"
                    onClick={() => {
                      window.location.href = "/services-detail-quartz-flooring";
                    }}
                  >
                    <span className="text">QUARTZ FLOORING</span>
                  </Link>
                </li>
                <li className="list-item">
                  <Link
                    onMouseEnter={(e) => (e.target.style.color = "black")}
                    onMouseLeave={(e) => (e.target.style.color = "white")}
                    to="#"
                    onClick={() => {
                      window.location.href =
                        "/services-detail-terrazo-flooring";
                    }}
                  >
                    <span className="text">TERRAZO FLOORING</span>
                  </Link>
                </li>
                <li className="list-item">
                  <Link
                    onMouseEnter={(e) => (e.target.style.color = "black")}
                    onMouseLeave={(e) => (e.target.style.color = "white")}
                    to="#"
                    onClick={() => {
                      window.location.href =
                        "/services-detail-di-polished-concrete-flooring";
                    }}
                  >
                    <span className="text">POLISHED CONCRETE FLOORING</span>
                  </Link>
                </li>
                <li className="list-item">
                  <Link
                    onMouseEnter={(e) => (e.target.style.color = "black")}
                    onMouseLeave={(e) => (e.target.style.color = "white")}
                    to="#"
                    onClick={() => {
                      window.location.href =
                        "/services-detail-di-expanison-joints";
                    }}
                  >
                    <span className="text">EXPANSION JOINTS</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* <div className="widget widget_help align-center has-shadow no-sep has-border border-solid">
            <div className="inner">
              <h2 className="widget-title margin-bottom-14">
                <span>HOW CAN WE HELP ?</span>
              </h2>
              <p className="text line-height-26 margin-bottom-23">
                Are you interested in finding out how we can make your project.
                Please email us.
              </p>
              <div className="elm-button">
                <Link to="#" className="themesflat-button bg-accent pd30">
                  GET IN TOUCH
                </Link>
              </div>
            </div>
          </div> */}
        </div>
        <div
          className="themesflat-spacer clearfix"
          data-desktop={0}
          data-mobile={60}
          data-smobile={60}
        />
      </div>
    );
  }
}

export default Sidebar;
