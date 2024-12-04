import React, { Component } from "react";
import { Link } from "react-router-dom";
class IconBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      iconbox: [
        {
          id: 1,
          headding: "+91 9962699888 , +91 8870067777 ",
          subheading: "Support 24/7 - Online 24 hours",
          morelink: "Call us now",
          icon: "icon-phone",
        },
        {
          id: 2,
          headding:
            "17, Srinivasa Reddy St, T. Nagar,   Chennai, Tamil Nadu 600017",
          subheading: "Mon- Sat: 9:00 am to 8 pm",
          // morelink: "Sunday: Close",
          icon: "icon-map",
        },
        {
          id: 3,
          headding: "sales@chemcoats.com",
          subheading: "Support 24/7 - Online 24 hours",
          morelink: "Mail us now",
          icon: "icon-envelope",
        },
      ],
    };
  }

  render() {
    return (
      <div className="row gutter-16">
        {this.state.iconbox.map((data) => (
          <div className="col-md-4" key={data.id}>
            <div
              className="themesflat-spacer clearfix"
              data-desktop={0}
              data-mobile={0}
              data-smobile={35}
            />
            <div className="themesflat-icon-box icon-top align-center accent-color style-3 bg-light-snow clearfix">
              <div className="icon-wrap">
                <i className={data.icon} />
              </div>
              <div className="text-wrap">
                <h5 className="heading">
                  <Link to="#">{data.headding}</Link>
                </h5>
                <p className="sub-heading">{data.subheading}</p>
                <span className="class more-link">
                  <Link to="#">{data.morelink}</Link>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default IconBox;
