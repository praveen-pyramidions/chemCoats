import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import AboutUs from "../pages/AboutUs";
import {
  Slider,
  TitleHeading,
  IconBox,
  About,
  Service,
  Project,
  ServicesBox,
  Testimonial,
  Overview,
  Faq,
  Partner,
} from "../layouts/home01/index";
import { Header, Footer, TopBar, BottomBar } from "../layouts/general/index";
import WhyChooseEpoxy from "./WhyChooseEpoxy";
import HeroBanner from "./HeroBannerSlider";

class Home01 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headers: [
        {
          id: 1,
          logoweb: "assets/img/logo-small.png",
          names: "Home",
        },
      ],
      headingchoose: [
        {
          id: 1,
          classnames: "heading",
          title: "YOUR BEST CHOOSE",
          text: "We are proud to mark 17 years of providing exceptional industrial flooring services. Throughout these years, we have established a reputable name for ourselves in the industry and remained steadfast in our commitment to serving our valued clients.",
          classtext: "sub-heading",
        },
      ],
      headingchoose1: [
        {
          id: 1,
          classnames: "heading",
          // title: "Best Epoxy Floor Coating in Chennai",
          text: "ChemCoats is the foremost provider of epoxy flooring and professional flooring solutions for a wide range of industries in South India.",
          text2:
            "Our team of experts boasts extensive experience in managing projects of all sizes, recognizing that each industry possesses unique characteristics. This understanding drives us to provide a wide array of epoxy flooring options.",
          text3:
            "In summary, ChemCoats is your all-encompassing solution for enhancing your concrete flooring. With a proven history of excellence, an unwavering commitment to quality, and a comprehensive range of services, we are the ultimate choice for meeting your industrial flooring needs.",
          text1:
            "With Over 17 years of experience in industrial epoxy flooring, we offer a comprehensive platform to address concrete flooring challenges, offering solutions such as Epoxy Flooring, Epoxy Coating, PU Flooring, PU Coating, Epoxy Floor Coating, ESD Flooring, Anti-static Epoxy Flooring, Dielectric Flooring, Heavy-Duty Epoxy Flooring, Self-Leveling Epoxy Flooring, Sports Flooring, Hygiene Flooring, Cleanroom Flooring, and Expansion Joint Filling Treatments. Our dedication lies in providing top-tier customer service and delivering products of the highest quality, backed by dependable technical support.",

          classtext: "sub-heading",
        },
      ],
      headingservice: [
        {
          id: 1,
          classnames: "heading",
          title: "SERVICES ",
          text: "Construction Services offers a full range of construction services from initial design to seamless project completion support and execution.",
          classtext: "sub-heading",
        },
      ],
      headingproject: [
        {
          id: 1,
          classnames: "heading text-white",
          title: "RECENT PROJECTS",
          classtext: "sub-heading",
        },
      ],
      servicebox: [
        {
          id: 1,
          classnames: "heading font-size-30",
          title: "ALL SERVICES",
          classtext: "sub-heading font-weight-400",
          text: "Are you interested in finding out how we can make your project a success? Please constact us.",
        },
      ],
    };
  }

  render() {
    return (
      <div className="header-fixed page no-sidebar header-style-2 topbar-style-2 menu-has-search">
        <Helmet>
          <title>Industrial Flooring | Industrial Flooring Services</title>
          <meta
            name="description"
            content="Explore top-quality industrial flooring services tailored to meet the demands of factories, warehouses, and commercial spaces. From epoxy coatings to polished concrete, our durable, cost-effective flooring solutions enhance safety and performance."
          />

          <meta name="author" content="Chemcoats" />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://www.chemcoats.com/" />
        </Helmet>
        <div id="wrapper" className="animsition">
          <div id="page" className="clearfix">
            <div id="site-header-wrap">
              <TopBar />
              {this.state.headers.map((data, idx) => (
                <Header data={data} key={idx} />
              ))}
            </div>
            <HeroBanner />
            <div id="main-content" className="site-main clearfix">
              <div id="content-wrap">
                <div id="site-content" className="site-content clearfix">
                  <div id="inner-content" className="inner-content-wrap">
                    <div className="page-content">
                      {/* <div className="rev_slider_wrapper fullwidthbanner-container">
                        <div
                          id="rev-slider1"
                          className="rev_slider fullwidthabanner"
                        >
                          <Slider />
                        </div>
                      </div> */}
                      <div className="row-iconbox">
                        <div className="container">
                          <div className="row">
                            <div className="col-md-12">
                              <div className="mobileHide">
                                <div
                                  className="themesflat-spacer clearfix"
                                  data-desktop={60}
                                  data-mobile={60}
                                  data-smobile={60}
                                />
                              </div>
                            <h1 className="heading-h1-main">Best Epoxy Floor Coating in Chennai</h1>
                              {this.state.headingchoose1.map((data) => (
                                <TitleHeading data={data} key={data.id} />
                              ))}
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-md-12"></div>
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
                              <div
                                className="themesflat-spacer clearfix"
                                data-desktop={41}
                                data-mobile={35}
                                data-smobile={35}
                              />
                              {/* <div className="elm-button text-center">
                                <Link
                                  to="#"
                                  onClick={() => {
                                    window.location.href = "/about-us";
                                  }}
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
                      <About />
                      <div className="row-services">
                        <div className="container">
                          <div className="row">
                            <div className="col-md-12">
                              <div
                                className="themesflat-spacer clearfix"
                                data-desktop={60}
                                data-mobile={60}
                                data-smobile={60}
                              />
                              {this.state.headingservice.map((data) => (
                                <TitleHeading data={data} key={data.id} />
                              ))}
                              <div
                                className="themesflat-spacer clearfix"
                                data-desktop={39}
                                data-mobile={35}
                                data-smobile={35}
                              />
                              <Service />
                              <div
                                className="themesflat-spacer clearfix"
                                data-desktop={50}
                                data-mobile={35}
                                data-smobile={35}
                              />
                              <div className="elm-button text-center">
                                <Link
                                  to="#"
                                  title="Learn more about our services"
                                  className="themesflat-button bg-accent"
                                  onClick={() => {
                                    window.location.href = "/services";
                                  }}
                                >
                                  ALL SERVICES
                                </Link>
                              </div>
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
                      <div className="row-project parallax parallax-1 parallax-overlay">
                        <div className="project-overlay">
                          <div className="container-fluid">
                            <div className="row">
                              <div className="col-md-12">
                                <div
                                  className="themesflat-spacer clearfix"
                                  data-desktop={60}
                                  data-mobile={60}
                                  data-smobile={60}
                                />
                                {this.state.headingproject.map((data) => (
                                  <TitleHeading data={data} key={data.id} />
                                ))}
                                <div
                                  className="themesflat-spacer clearfix"
                                  data-desktop={30}
                                  data-mobile={35}
                                  data-smobile={35}
                                />

                                <Project />
                                <div
                                  className="themesflat-spacer clearfix"
                                  data-desktop={41}
                                  data-mobile={35}
                                  data-smobile={35}
                                />
                                <div className="elm-button text-center">
                                  <Link
                                    to="#"
                                    title="Learn more about our project"
                                    onClick={() => {
                                      window.location.href = "/project";
                                    }}
                                    className="themesflat-button bg-accent"
                                  >
                                    ALL PROJECTS
                                  </Link>
                                </div>
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
                      </div>
                      {/* <div className="row-iconbox">
                        <div className="container">
                          <div className="row">
                            <div className="col-md-12">
                              <div
                                className="themesflat-spacer clearfix"
                                data-desktop={61}
                                data-mobile={60}
                                data-smobile={60}
                              />
                              {this.state.servicebox.map((data) => (
                                <TitleHeading data={data} key={data.id} />
                              ))}
                              <div
                                className="themesflat-spacer clearfix"
                                data-desktop={57}
                                data-mobile={35}
                                data-smobile={35}
                              />
                              <ServicesBox />
                              <div className="row">
                                <div className="col-md-12">
                                  <div
                                    className="themesflat-spacer clearfix"
                                    data-desktop={72}
                                    data-mobile={60}
                                    data-smobile={60}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div> */}
                      {/* <Testimonial /> */}
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
                      <div className="row-tabs">
                        <div className="container">
                          <div className="row">
                            <div className="col-md-12">
                              <div
                                className="themesflat-spacer clearfix"
                                data-desktop={61}
                                data-mobile={60}
                                data-smobile={60}
                              />
                            </div>
                          </div>
                          <div className="row">
                            <Overview />
                            <Faq />
                          </div>
                        </div>
                      </div>
                      <Partner />

                      {/* <WhyChooseEpoxy /> */}
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

export default Home01;
