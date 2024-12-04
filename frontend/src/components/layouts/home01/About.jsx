import React, { Component } from "react";
import { Link } from "react-router-dom";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inner: [
        {
          id: 1,
          icon: "fa fa-check-square",
          text: "Completing projects on time & Following budget guidelines",
        },
        {
          id: 2,
          icon: "fa fa-check-square",
          text: "Elevated quality of workmanship",
        },
        {
          id: 3,
          icon: "fa fa-check-square",
          text: "Meeting diverse supplier requirements",
        },
        {
          id: 4,
          icon: "fa fa-check-square",
          text: "Implementing appropriate safety precautions and procedures",
        },
      ],
    };
  }

  render() {
    return (
      <div className="row-about">
        <div className="container-fluid">
          <div className="row equalize sm-equalize-auto">
            <div className="col-md-6 half-background style-1" />
            <div className="col-md-6 bg-light-grey">
              <div
                className="themesflat-spacer clearfix"
                data-desktop={64}
                data-mobile={60}
                data-smobile={60}
              />
              <div
                className="themesflat-content-box clearfix"
                data-margin="0 10% 0 4.5%"
                data-mobilemargin="0 0 0 4.5%"
              >
                <div className="themesflat-headings style-1 clearfix">
                  <h2 className="heading">WHO ARE WE </h2>
                  <div className="sep has-width w80 accent-bg margin-top-11 clearfix" />
                  <p className="sub-heading margin-top-30">
                    Founded in 2008, our proprietorship company is led by a
                    seasoned Chemical and Management professional boasting a
                    decade of hands-on expertise in Industrial Floorings and
                    Protective Coatings. We specialize in offering top-tier
                    product solutions sourced from renowned global
                    manufacturers. Our commitment is to deliver tailored systems
                    and specifications precisely customized to meet your unique
                    requirements, all backed by rigorous quality assurance from
                    these manufacturers.
                  </p>
                  <p className="sub-heading margin-top-30">
                    We take pride in providing consultative support to develop
                    specialized materials tailored to address your extraordinary
                    needs. Our transparent and reliable warranty and guarantee
                    ensure the performance of both our products and systems.
                    Over the years, we’ve built an unparalleled reputation for
                    our prompt, cost-effective, and trustworthy service, earning
                    the trust of our clients for repeat and referral business.
                  </p>
                  <p className="sub-heading margin-top-30">
                    Discover why we stand out in the industry for our
                    exceptional product offerings and client-focused approach.
                    Your satisfaction is our priority.
                  </p>
                </div>
                {/* <div
                  className="themesflat-spacer clearfix"
                  data-desktop={26}
                  data-mobile={35}
                  data-smobile={35}
                />
                <div className="content-list">
                  <div className="themesflat-list has-icon style-1 icon-left clearfix">
                    <div className="inner">
                      {this.state.inner.map((data) => (
                        <span className="item" key={data.id}>
                          <span className="icon">
                            <i className={data.icon} />
                          </span>
                          <span className="text">{data.text}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div> */}
                <div
                  className="themesflat-spacer clearfix"
                  data-desktop={42}
                  data-mobile={35}
                  data-smobile={35}
                />
                <div className="elm-button">
                  <Link
                    to="#"
                    onClick={() => {
                      window.location.href = "/contact-01";
                    }}
                    className="themesflat-button bg-white"
                  >
                    GET IN TOUCH
                  </Link>
                </div>
              </div>
              <div
                className="themesflat-spacer clearfix"
                data-desktop={75}
                data-mobile={60}
                data-smobile={60}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
