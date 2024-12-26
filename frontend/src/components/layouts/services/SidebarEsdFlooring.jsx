import React, { Component } from "react";
import { Link } from "react-router-dom";
class SidebarEsdFlooring extends Component {
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
                      High electrical and insulation resistance on display.
                    </span>
                  </Link>
                </li>
                <li className="list-item">
                  <Link to="#">
                    <span className="text">
                      Superior Impact and Pressure Resistance
                    </span>
                  </Link>
                </li>
                <li className="list-item">
                  <Link to="#">
                    <span className="text">
                      Boasts exceptional durability and abrasion resistance.
                    </span>
                  </Link>
                </li>
                <li className="list-item">
                  <Link to="#">
                    <span className="text">
                      Remarkable resistance to a wide spectrum of chemicals and
                      liquids is shown.
                    </span>
                  </Link>
                </li>
                <li className="list-item">
                  <Link to="#">
                    <span className="text">
                      Features a seamless design, eliminating the risk of leaky
                      joints.
                    </span>
                  </Link>
                </li>
                <li className="list-item">
                  <Link to="#">
                    <span className="text">
                      Offers high build and excellent adhesion.
                    </span>
                  </Link>
                </li>
                <li className="list-item">
                  <Link to="#">
                    <span className="text">
                      Provides a smooth and glossy finish.
                    </span>
                  </Link>
                </li>
                <li className="list-item">
                  <Link to="#">
                    <span className="text">
                      Ensuring a sanitary environment
                    </span>
                  </Link>
                </li>
                <li className="list-item">
                  <Link to="#">
                    <span className="text">
                      Proves to be economical and user-friendly, with
                      straightforward recoating, patching, and regular
                      maintenance.
                    </span>
                  </Link>
                </li>
                <li className="list-item">
                  <Link to="#">
                    <span className="text">
                      Exhibits toughness and exceptional resistance to abrasion
                    </span>
                  </Link>
                </li>
                <li className="list-item">
                  <Link to="#">
                    <span className="text">
                      Reducing the risk of slips and falls in industrial
                      settings.
                    </span>
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
                    title="epoxy-flooring"
                    onMouseEnter={(e) => (e.target.style.color = "black")}
                    onMouseLeave={(e) => (e.target.style.color = "white")}
                    onClick={() => {
                      window.location.href = "/epoxy-flooring";
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
                    title="polyurethane-flooring"
                    onClick={() => {
                      window.location.href =
                        "/polyurethane-flooring";
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
                    title="di-elecric-flooring"
                    onClick={() => {
                      window.location.href =
                        "/di-elecric-flooring";
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
                    title="anti-static-epoxy-flooring"
                    onClick={() => {
                      window.location.href =
                        "/anti-static-epoxy-flooring";
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
                    title="esd-flooring"
                    onClick={() => {
                      window.location.href = "/esd-flooring";
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
                    title="access-floors"
                    onClick={() => {
                      window.location.href = "/access-floors";
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
                    title="car-park-deck-flooring"
                    onClick={() => {
                      window.location.href =
                        "/car-park-deck-flooring";
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
                    title="sports-flooring"
                    onClick={() => {
                      window.location.href = "/sports-flooring";
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
                    title="di-clean-room-flooring"
                    onClick={() => {
                      window.location.href =
                        "/di-clean-room-flooring";
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
                    title="di-heavy-duty-epoxy-flooring"
                    onClick={() => {
                      window.location.href =
                        "/di-heavy-duty-epoxy-flooring";
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
                    title="di-hygiene-flooring"
                    onClick={() => {
                      window.location.href =
                        "/di-hygiene-flooring";
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
                    title="di-self-leveling-epoxy-flooring"
                    onClick={() => {
                      window.location.href =
                        "/di-self-leveling-epoxy-flooring";
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
                    title="quartz-flooring"
                    onClick={() => {
                      window.location.href = "/quartz-flooring";
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
                    title="terrazo-flooring"
                    onClick={() => {
                      window.location.href =
                        "/terrazo-flooring";
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
                    title="di-polished-concrete-flooring"
                    onClick={() => {
                      window.location.href =
                        "/di-polished-concrete-flooring";
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
                    title="di-expanison-joints"
                    onClick={() => {
                      window.location.href =
                        "/di-expanison-joints";
                    }}
                  >
                    <span className="text">EXPANSION JOINTS</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="themesflat-spacer clearfix"
            data-desktop={80}
            data-mobile={0}
            data-smobile={0}
          />
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

export default SidebarEsdFlooring;
