import React, { Component } from "react";

class Overview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: [
        {
          id: 1,
          text: "Our focus is to exceed your goals, meet your timelines and successfully manage your budget. We provide our clients with top-notch general contracting, construction management, site surveys and design build services.",
          item: [
            {
              idx: 1,
              content:
                "We have successfully completed projects in numerous states.",
            },
            {
              idx: 2,
              content:
                "We is licensed to perform general contracting work in most states.",
            },
            {
              idx: 3,
              content:
                "We will be open to obtaining new licensing if an opportunity arises.",
            },
          ],
        },
        {
          id: 2,
          text: "We are committed to delivering top-quality Industrial Flooring Protective coating solutions tailored to the exact requirements of every customer. Having operational expertise in the field for a decade we aim to provide customers with a personal touch service, technical knowledge and custom solutions to ensure they always perform well.",
          item: [
            {
              idx: 1,
              content:
                "we offer dedication to quality is reflected in every product and system.",
            },
            {
              idx: 2,
              content: "We are dedicated to exceptional customer service.",
            },
            {
              idx: 3,
              content: "Above all, we are dedicated to your satisfaction.",
            },
          ],
        },
        {
          id: 3,
          text: "Our company is committed to providing the highest quality Industrial Flooring and Protective Coatings, tailored to meet the specific needs of each client. With over a decade of industry experience, we offer expertly crafted solutions that ensure durability, performance, and long-term value.",
          item: [
            {
              idx: 1,
              content: "We are committed to offering only the best products.",
            },
            {
              idx: 2,
              content:
                "We are committed to delivering exceptional customer service.",
            },
            {
              idx: 3,
              content: "Our ultimate commitment is to your success.",
            },
          ],
        },
      ],
    };
  }

  render() {
    return (
      <div className="col-md-6">
        <div
          className="themesflat-content-box clearfix"
          data-margin="0 18px 0 0"
          data-mobilemargin="0 0 0 0"
        >
          <div className="themesflat-headings style-1 clearfix">
            <h2 className="heading">OVERVIEW</h2>
            <div className="sep has-width w80 accent-bg margin-top-11 clearfix" />
          </div>
          <div
            className="themesflat-spacer clearfix"
            data-desktop={38}
            data-mobile={35}
            data-smobile={35}
          />
          <div className="themesflat-tabs style-1 clearfix">
            <ul className="tab-title clearfix">
              <li className="item-title active">
                <span className="inner">Our focus</span>
              </li>
              <li className="item-title">
                <span className="inner">Dedicated</span>
              </li>
              <li className="item-title">
                <span className="inner">Committed</span>
              </li>
            </ul>
            <div className="tab-content-wrap clearfix">
              {this.state.tab.map((data) => (
                <div className="tab-content" key={data.id}>
                  <div className="item-content">
                    <p>{data.text}</p>
                    {data.item.map((index) => (
                      <div
                        className="themesflat-list has-icon style-1 icon-left ofset-padding-32 clearfix"
                        key={index.idx}
                      >
                        <div className="inner">
                          <span className="item">
                            <span className="icon">
                              <i className="fa fa-check-square" />
                            </span>
                            <span className="text">{index.content}</span>
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            {/* /.tab-content-wrap */}
          </div>
          {/* /.themesflat-tabs */}
        </div>
        {/* /.themesflat-content-box */}
      </div>
    );
  }
}

export default Overview;
