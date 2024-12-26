import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

class Service extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slidecard: [
        {
          id: 1,
          src: "assets/img/ServicePage/epoxy-flooring3.jpg",
          heading: "Epoxy Flooring",
          serviceLink: "/epoxy-flooring",
          alt: "Epoxy Flooring Image",
          title: "Epoxy Flooring",
        },
        {
          id: 2,
          src: "assets/img/ServicePage/PU1.jpg",
          heading: "Polyurethane Flooring",
          serviceLink: "/polyurethane-flooring",
          alt: "Polyurethane Flooring Image",
          title: "Polyurethane Flooring",
        },
        {
          id: 3,
          src: "assets/img/ServicePage/Di-electric-flooring.jpg",
          heading: "Di-Electric Flooring",
          serviceLink: "/di-electric-flooring",
          alt: "Di-Electric Flooring Image",
          title: "Di-Electric Flooring",
        },
        {
          id: 4,
          src: "assets/img/ServicePage/IMG-20220628-WA0007.jpg",
          heading: "Anti-Static Flooring",
          serviceLink: "/anti-static-epoxy-flooring",
          alt: "Anti-Static Flooring Image",
          title: "Anti-Static Flooring",
        },
        {
          id: 5,
          src: "assets/img/ServicePage/esd-flooring-5.jpg",
          heading: "ESD Flooring",
          serviceLink: "/esd-flooring",
          alt: "ESD Flooring Image",
          title: "ESD Flooring",
        },
        {
          id: 6,
          src: "assets/img/ServicePage/car-park-flooring.jpg",
          heading: "Car Park Deck Flooring",
          serviceLink: "/car-park-deck-flooring",
          alt: "Car Park Deck Flooring Image",
          title: "Car Park Deck Flooring",
        },
        {
          id: 7,
          src: "assets/img/ServicePage/IMG-20210202-WA0012.jpg",
          heading: "Terrazzo Flooring",
          serviceLink: "/terrazo-flooring",
          alt: "Terrazzo Flooring Image",
          title: "Terrazzo Flooring",
        },
        {
          id: 8,
          src: "assets/img/ServicePage/IMG-20180821-WA0005.jpg",
          heading: "Polished Concrete",
          serviceLink: "/di-polished-concrete-flooring",
          alt: "Polished Concrete Image",
          title: "Polished Concrete",
        },
        {
          id: 9,
          src: "assets/img/ServicePage/Epoxy-Sports.jpg",
          heading: "Epoxy Sports Flooring",
          serviceLink: "/sports-flooring",
          alt: "Epoxy Sports Flooring Image",
          title: "Epoxy Sports Flooring",
        },
        {
          id: 10,
          src: "assets/img/ServicePage/Self-levelling.jpg",
          heading: "Self-levelling Epoxy Flooring",
          serviceLink: "/di-self-leveling-epoxy-flooring",
          alt: "Self-levelling Epoxy Flooring Image",
          title: "Self-levelling Epoxy Flooring",
        },
        {
          id: 11,
          src: "assets/img/ServicePage/Clean-room-flooring.jpg",
          heading: "Clean Room Flooring",
          serviceLink: "/di-clean-room-flooring",
          alt: "Clean Room Flooring Image",
          title: "Clean Room Flooring",
        },
        {
          id: 12,
          src: "assets/img/ServicePage/heavyDuty.jpg",
          heading: "Heavy-duty Epoxy Flooring",
          serviceLink: "/di-heavy-duty-epoxy-flooring",
          alt: "Heavy-duty Epoxy Flooring Image",
          title: "Heavy-duty Epoxy Flooring",
        },
        {
          id: 13,
          src: "assets/img/ServicePage/hygine-Epoxy.jpg",
          heading: "Hygiene Epoxy Flooring",
          serviceLink: "/di-hygiene-flooring",
          alt: "Hygiene Epoxy Flooring Image",
          title: "Hygiene Epoxy Flooring",
        },
        {
          id: 14,
          src: "assets/img/ServicePage/quartz-Flooring.jpeg",
          heading: "Quartz Flooring",
          serviceLink: "/quartz-flooring",
          alt: "Quartz Flooring Image",
          title: "Quartz Flooring",
        },
        {
          id: 15,
          src: "assets/img/ServicePage/2.jpg",
          heading: "Expansion Joints Work",
          serviceLink: "/di-expanison-joints",
          alt: "Expansion Joints Work Image",
          title: "Expansion Joints Work",
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
                    <img src={data.src} alt={data.alt} title={data.title} />
                    {/* <div className="overlay-effect bg-color-accent" /> */}
                  </div>
                  <div className="text-wrap">
                    <h5 className="heading">
                      <Link
                        to="#"
                        title="Learn more about our services"
                        onClick={() => {
                          window.location.href = data.serviceLink;
                        }}
                      >
                        {data.heading}
                      </Link>
                    </h5>
                    <span
                      title="Learn more about our services"
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
