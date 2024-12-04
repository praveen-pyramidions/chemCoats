import React, { Component } from "react";
import { Link } from "react-router-dom";
class SidebarAccessFloors extends Component {
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
                      Efficient Cable and Utility Management
                    </span>
                  </Link>
                </li>
                <li className="list-item">
                  <Link to="#">
                    <span className="text">
                      Enhanced Flexibility and Adaptability
                    </span>
                  </Link>
                </li>
                <li className="list-item">
                  <Link to="#">
                    <span className="text">Improved Aesthetic Appeal</span>
                  </Link>
                </li>
                <li className="list-item">
                  <Link to="#">
                    <span className="text">Easy Access for Maintenance</span>
                  </Link>
                </li>
                <li className="list-item">
                  <Link to="#">
                    <span className="text">
                      Enhanced Airflow and Ventilation
                    </span>
                  </Link>
                </li>
                <li className="list-item">
                  <Link to="#">
                    <span className="text">Load-Bearing Capacity</span>
                  </Link>
                </li>
                <li className="list-item">
                  <Link to="#">
                    <span className="text">Customizable Finishes</span>
                  </Link>
                </li>
                <li className="list-item">
                  <Link to="#">
                    <span className="text">Acoustic Benefits</span>
                  </Link>
                </li>
                <li className="list-item">
                  <Link to="#">
                    <span className="text">Fire Safety Integration</span>
                  </Link>
                </li>
                <li className="list-item">
                  <Link to="#">
                    <span className="text">Eco-Friendly Options</span>
                  </Link>
                </li>
                <li className="list-item">
                  <Link to="#">
                    <span className="text">
                      Cost-Effective Installation and Maintenance
                    </span>
                  </Link>
                </li>
                <li className="list-item">
                  <Link to="#">
                    <span className="text">Supports Modular Design</span>
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

export default SidebarAccessFloors;
