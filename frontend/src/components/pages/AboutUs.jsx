import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Counter, LeaderTeam } from "../layouts/about";
import { Helmet } from "react-helmet";
import BannerTitle from "../layouts/about/banner/BannerTitle";
import {
  TitleHeading,
  IconBox,
  About,
  Overview,
  Faq,
  Partner,
} from "../layouts/home01/index";
import { Header, Footer, TopBar, BottomBar } from "../layouts/general/index";

class AboutUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headers: [
        {
          id: 1,
          logoweb: "assets/img/logo-small.png",
          names: "About Us",
        },
      ],
      headingchoose: [
        {
          id: 1,
          classnames: "heading",
          title: "YOUR BEST CHOOSE",
          text: "“We are proud to mark 17 years of providing exceptional industrial flooring services. Throughout these years, we have established a reputable name for ourselves in the industry and remained steadfast in our commitment to serving our valued clients.”",
          classtext: "sub-heading",
        },
      ],
      headingchoose1: [
        {
          id: 1,
          classnames: "heading",
          title: "WHAT WE DO",
          text: "“We specialize in providing top-notch industrial flooring solutions, focusing on industrial epoxy flooring and industrial polyurethane flooring (PU flooring). Our dedicated team offers comprehensive services, drawing upon 17 years of valuable experience in the field. We stand out for delivering unmatched service quality, utilizing the finest products, and offering unparalleled technical support in the industrial flooring industry.”",
          classtext: "sub-heading",
        },
      ],
      banners: [
        {
          id: 1,
          links: "",
          titlelink: "",
          border: "",
          name: "About Us",
          heading: "About Us",
        },
      ],
    };
  }
  render() {
    return (
      <div className="header-fixed page no-sidebar header-style-2 topbar-style-1 menu-has-search">
         {/* SEO Meta Data */}
         <Helmet>
          <title>Industrial Floorings and Protective Coatings.</title>
          <meta
            name="description"
            content="Industrial Floorings and Protective Coatings offer durable, high-performance solutions for factories, warehouses, and commercial spaces. Designed to withstand heavy traffic, chemicals, and wear, these coatings ensure long-lasting protection and easy maintenance for a variety of industrial applications."
          />
          <meta
            name="keywords"
            content="Industrial Flooring, Protective Coatings, ESD Flooring, Project Completion, Quality Workmanship, Safety Procedures"
          />
          <link rel="canonical" href=" https://www.chemcoats.com/about-us" />
          <meta name="robots" content="index, follow" />
          {/* <meta property="og:title" content="About Us - Your Company Name" />
          <meta
            property="og:description"
            content="Discover our top-tier product solutions and unmatched service in Industrial Floorings and Protective Coatings."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://yourwebsite.com/about" />
          <meta
            property="og:image"
            content="https://yourwebsite.com/og-image.jpg"
          /> */}
        </Helmet>
        <div id="wrapper" className="animsition">
          <div id="page" className="clearfix">
            <div id="site-header-wrap">
              <TopBar />
              {this.state.headers.map((data, idx) => (
                <Header data={data} key={idx} />
              ))}
            </div>
            {this.state.banners.map((data) => (
              <BannerTitle key={data.id} data={data} />
            ))}
            <div id="main-content" className="site-main clearfix">
              <div id="content-wrap">
                <div id="site-content" className="site-content clearfix">
                  <div id="inner-content" className="inner-content-wrap">
                    <div className="page-content">
                      <About />
                      <div className="row-iconbox">
                        <div className="container">
                          <div className="row">
                            <div className="col-md-12">
                              <div
                                className="themesflat-spacer clearfix"
                                data-desktop={60}
                                data-mobile={60}
                                data-smobile={60}
                              />
                              {this.state.headingchoose.map((data) => (
                                <TitleHeading data={data} key={data.id} />
                              ))}
                              <div
                                className="themesflat-spacer clearfix"
                                data-desktop={42}
                                data-mobile={35}
                                data-smobile={35}
                              />
                            </div>
                          </div>

                          <IconBox />
                          <div className="row">
                            <div className="col-md-12">
                              {/* <div
                                className="themesflat-spacer clearfix"
                                data-desktop={41}
                                data-mobile={35}
                                data-smobile={35}
                              /> */}
                              {/* <div className="elm-button text-center">
                                <Link
                                  to="#"
                                  className="themesflat-button bg-accent"
                                >
                                  ABOUT US
                                </Link>
                              </div> */}
                              {/* <div
                                className="themesflat-spacer clearfix"
                                data-desktop={73}
                                data-mobile={60}
                                data-smobile={60}
                              /> */}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row-iconbox">
                        <div className="container">
                          <div className="row">
                            <div className="col-md-12">
                              <div
                                className="themesflat-spacer clearfix"
                                data-desktop={60}
                                data-mobile={60}
                                data-smobile={60}
                              />
                              {this.state.headingchoose1.map((data) => (
                                <TitleHeading data={data} key={data.id} />
                              ))}
                              {/* <div
                                className="themesflat-spacer clearfix"
                                data-desktop={42}
                                data-mobile={35}
                                data-smobile={35}
                              /> */}
                            </div>
                          </div>

                          {/* <IconBox /> */}
                          <div className="row">
                            <div className="col-md-12">
                              {/* <div
                                className="themesflat-spacer clearfix"
                                data-desktop={41}
                                data-mobile={35}
                                data-smobile={35}
                              /> */}
                              {/* <div className="elm-button text-center">
                                <Link
                                  to="#"
                                  className="themesflat-button bg-accent"
                                >
                                  ABOUT US
                                </Link>
                              </div> */}
                              <div
                                className="themesflat-spacer clearfix"
                                data-desktop={73}
                                data-mobile={60}
                                data-smobile={60}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <About /> */}
                      <Counter />
                      <Partner />
                      <div className="row-tabs">
                        <div className="container">
                          <div className="row">
                            <div className="col-md-12"></div>
                          </div>
                          <div className="row">
                            <Overview />
                            <Faq />
                          </div>
                        </div>
                        <div
                          className="themesflat-spacer clearfix"
                          data-desktop={61}
                          data-mobile={60}
                          data-smobile={60}
                        />
                      </div>

                      {/* <div className="row-quote bg-row-1">
                        <div className="container">
                          <div className="row">
                            <div className="col-md-12">
                              <div
                                className="themesflat-spacer clearfix"
                                data-desktop={40}
                                data-mobile={60}
                                data-smobile={60}
                              />
                              <div className="themesflat-quote style-1 clearfix">
                                <div className="quote-item">
                                  <div className="inner">
                                    <div className="heading-wrap">
                                      <h3 className="heading">
                                        START EXECUTING YOUR PROJECT
                                      </h3>
                                    </div>
                                    <div className="button-wrap has-icon icon-left">
                                      <Link
                                        to="#"
                                        className="themesflat-button bg-white small"
                                      >
                                        <span>
                                          (+613) 8376 6284{" "}
                                          <span className="icon">
                                            <i className="autora-icon-phone-contact" />
                                          </span>
                                        </span>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="themesflat-spacer clearfix"
                                data-desktop={31}
                                data-mobile={60}
                                data-smobile={60}
                              />
                            </div>
                          </div>
                        </div>
                      </div> */}
                      {/* <LeaderTeam /> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Footer />
            {/* {this.state.headers.map((data, idx) => (
              <BottomBar data={data} key={idx} />
            ))} */}
          </div>
        </div>
      </div>
    );
  }
}

export default AboutUs;
