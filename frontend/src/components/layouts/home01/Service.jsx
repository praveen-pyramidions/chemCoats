import React, { Component } from "react";
import { Link } from "react-router-dom";

class Service extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slidecard: [
        {
          id: 1,
          src: "assets/img/ServicePage/epoxy-flooring3.jpg",
          heading: "Epoxy Flooring",
          serviceLink: "/services-detail",
        },
        {
          id: 2,
          src: "assets/img/ServicePage/PU1.jpg",
          heading: "Polyurethane Flooring",
          serviceLink: "/services-detail-polyurethane-flooring",
        },
        {
          id: 3,
          src: "assets/img/ServicePage/Di-electric-flooring.jpg",
          heading: "Di-Electric Flooring",
          serviceLink: "/services-detail-di-elecric-flooring",
        },
        {
          id: 4,
          src: "assets/img/ServicePage/IMG-20220628-WA0007.jpg",
          heading: "Anti-Static Flooring",
          serviceLink: "/services-detail-anti-static-epoxy-flooring",
        },
        {
          id: 5,
          src: "assets/img/ServicePage/esd-flooring-5.jpg",
          heading: "ESD Flooring",
          serviceLink: "/services-detail-esd-flooring",
        },
        {
          id: 6,
          src: "assets/img/ServicePage/car-park-flooring.jpg",
          heading: "Car Park Deck Flooring",
          serviceLink: "/services-detail-car-park-deck-flooring",
        },
        {
          id: 7,
          src: "assets/img/ServicePage/IMG-20210202-WA0012.jpg",
          heading: "Terrazzo Flooring",
          serviceLink: "/services-detail-terrazo-flooring",
        },
        {
          id: 8,
          src: "assets/img/ServicePage/IMG-20180821-WA0005.jpg",
          heading: "Polished concrete",
          serviceLink: "/services-detail-di-polished-concrete-flooring",
        },
        {
          id: 9,
          src: "assets/img/ServicePage/Epoxy-Sports.jpg",
          heading: "Epoxy Sports Flooring",
          serviceLink: "/services-detail-sports-flooring",
        },
        {
          id: 10,
          src: "assets/img/ServicePage/Self-levelling.jpg",
          heading: "Self-levelling Epoxy Flooring",
          serviceLink: "/services-detail-di-self-leveling-epoxy-flooring",
        },
        {
          id: 11,
          src: "assets/img/ServicePage/Clean-room-flooring.jpg",
          heading: "Clean Room Flooring",
          serviceLink: "/services-detail-di-clean-room-flooring",
        },
        {
          id: 12,
          src: "assets/img/ServicePage/heavyDuty.jpg",
          heading: "Heavy-duty epoxy flooring",
          serviceLink: "/services-detail-di-heavy-duty-epoxy-flooring",
        },
        {
          id: 13,
          src: "assets/img/ServicePage/hygine-Epoxy.jpg",
          heading: "Hygiene epoxy flooring",
          serviceLink: "/services-detail-di-hygiene-flooring",
        },
        {
          id: 14,
          src: "assets/img/ServicePage/quartz-Flooring.jpeg",
          heading: "Quartz Flooring",
          serviceLink: "/services-detail-quartz-flooring",
        },
        {
          id: 15,
          src: "assets/img/ServicePage/2.jpg",
          heading: "Expansion joints work",
          serviceLink: "/services-detail-di-expanison-joints",
        },
      ],
    };
  }

  render() {
    return (
      <div
        className="themesflat-carousel-box data-effect clearfix"
        data-gap={30}
        data-column={3}
        data-column2={2}
        data-column3={1}
        data-auto="false"
      >
        <div className="owl-carousel owl-theme">
          {this.state.slidecard.map((data) => (
            <div
              className="themesflat-image-box style-1 has-icon icon-right w65 clearfix"
              key={data.id}
            >
              <div className="image-box-item">
                <div className="inner">
                  <div className="thumb data-effect-item">
                    <img src={data.src} alt="altimage" />
                    {/* <div className="overlay-effect bg-color-accent" /> */}
                  </div>
                  <div className="text-wrap">
                    <h5 className="heading">
                      <Link
                        to="#"
                        onClick={() => {
                          window.location.href = data.serviceLink;
                        }}
                      >
                        {data.heading}
                      </Link>
                    </h5>
                    <span
                      className="icon-wrap"
                      onClick={() => {
                        window.location.href = data.serviceLink;
                      }}
                    >
                      <i className="fa fa-angle-right" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Service;
