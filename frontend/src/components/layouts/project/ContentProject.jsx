import React, { Component } from "react";
import { Helmet } from "react-helmet";

class ContentProject extends Component {
  render() {
    return (
      <div className="detail-gallery">
        <Helmet>
          <title>Chemcoats Project Detail | Our Works</title>
          <meta
            name="description"
            content="The installation of ESD protection systems, including anti-static tiles and advanced raised access flooring, has been successfully completed for a software company located in Techno Park, Trivandrum."
          />

          <meta name="author" content="Your Company Name" />
          <meta name="robots" content="index, follow" />
          <link
            rel="canonical"
            href="https://www.chemcoats.com/project-detail"
          />
        </Helmet>
        <div
          className="themesflat-spacer clearfix"
          data-desktop={21}
          data-mobile={21}
          data-smobile={21}
        />
        <div
          className="themesflat-gallery style-2 has-arrows arrow-center arrow-circle offset-v-82 has-thumb w185 clearfix"
          data-gap={0}
          data-column={1}
          data-column2={1}
          data-column3={1}
          data-auto="false"
        >
          <div className="owl-carousel owl-theme">
            <div className="gallery-item">
              <div className="inner">
                <div className="thumb">
                  <img
                    src="assets/img/project/FlooringServicesforaSoftwareCompany/Access-Floor.jpg"
                    alt=" ESD-protection-systems"
                    title=" ESD protection systems"
                  />
                </div>
              </div>
            </div>
            <div className="gallery-item">
              <div className="inner">
                <div className="thumb">
                  <img
                    src="assets/img/project/FlooringServicesforaSoftwareCompany/Access-Floor2.jpg"
                    alt=" ESD protection systems"
                    title=" ESD protection systems"
                  />
                </div>
              </div>
            </div>
            <div className="gallery-item">
              <div className="inner">
                <div className="thumb">
                  <img
                    src="assets/img/project/FlooringServicesforaSoftwareCompany/Access-Floor3.jpg"
                    alt=" ESD protection systems"
                    title=" ESD protection systems"
                  />
                </div>
              </div>
            </div>
            <div className="gallery-item">
              <div className="inner">
                <div className="thumb">
                  <img
                    src="assets/img/project/FlooringServicesforaSoftwareCompany/Access-Floor4.jpg"
                    alt=" ESD protection systems"
                    title=" ESD protection systems"
                  />
                </div>
              </div>
            </div>
            <div className="gallery-item">
              <div className="inner">
                <div className="thumb">
                  <img
                    src="assets/img/project/FlooringServicesforaSoftwareCompany/Access-Floor5.jpg"
                    alt=" ESD protection systems"
                    title=" ESD protection systems"
                  />
                </div>
              </div>
            </div>
            <div className="gallery-item">
              <div className="inner">
                <div className="thumb">
                  <img
                    src="assets/img/project/FlooringServicesforaSoftwareCompany/Access-Floor6.jpg"
                    alt=" ESD protection systems"
                    title=" ESD protection systems"
                  />
                </div>
              </div>
            </div>
            <div className="gallery-item">
              <div className="inner">
                <div className="thumb">
                  <img
                    src="assets/img/project/FlooringServicesforaSoftwareCompany/Access-Floor6-1.jpg"
                    alt=" ESD protection systems"
                    title="ESD protection systems"
                  />
                </div>
              </div>
            </div>
            <div className="gallery-item">
              <div className="inner">
                <div className="thumb">
                  <img
                    src="assets/img/project/FlooringServicesforaSoftwareCompany/Access-Floor8.jpg"
                    alt=" ESD protection systems"
                    title=" ESD protection systems"
                  />
                </div>
              </div>
            </div>
            <div className="gallery-item">
              <div className="inner">
                <div className="thumb">
                  <img
                    src="assets/img/project/FlooringServicesforaSoftwareCompany/Access-Floor9.jpg"
                    alt=" ESD protection systems"
                    title=" ESD protection systems"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*themesflat-cousel-box */}
        <div
          className="themesflat-spacer clearfix"
          data-desktop={40}
          data-mobile={40}
          data-smobile={40}
        />
        <div className="flat-content-wrap style-3 clearfix">
          <h5 className="title">PROJECT DESCRIPTION</h5>
          <div className="sep has-width w60 accent-bg margin-top-18 clearfix" />
          <p className="margin-top-28">
            {/* The installation of ESD protection systems, including anti-static
            tiles and advanced raised access flooring, has been successfully
            completed for a software company located in Techno Park, Trivandrum.
            This upgrade not only ensures the highest standards of safety by
            protecting sensitive electronic equipment from electrostatic
            discharge but also supports flexible infrastructure management. The
            anti-static tiles provide an additional layer of protection, crucial
            in environments where delicate technology and data are handled
            daily. */}
            The installation of ESD protection systems, including anti-static
            tiles and high performance raised access flooring has been
            accomplished successfully in a software company based in Techno
            Park, Trivandrum. Moreover, this update, in addition to ensuring the
            best possible safety (so that extremely sensitive electronic devices
            are afforded electrostatic discharge protection), also makes it
            possible to do flexible infrastructure management. Antistatic tiles
            which provide an additional layer of protection, which is of great
            significance in daily life in the case of handling high sensitive
            technology and data.
          </p>
          <p>
            {/* The raised flooring solution enhances the workspace's adaptability,
            allowing easy access for cable management, electrical wiring, and
            HVAC systems beneath the surface. This modern flooring setup
            contributes to a clean, professional aesthetic and aligns with the
            company's goal of maintaining an efficient and secure working
            environment. With this installation, the facility is now better
            equipped to support its advanced technological operations while
            providing a safe and productive setting for employees. */}
            The solution can enhance the workspace floor's workability to easily
            access it for cable management, for electrical wiring and HVAC
            installation under the floor surface. This contemporary flooring
            configuration helps produce a neat, formal look and feels in line
            with the company's mission of running a clean,{" "}
            <a
              href="https://www.chemcoats.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#e46b26", textDecoration: "underline" }}
            >
              efficient and safe workplace.
            </a>{" "}
            With this installation the site is now better able to accommodate
            its high tech operations and present a safe and productive working
            environment for the employees.
          </p>
        </div>
      </div>
    );
  }
}

export default ContentProject;
