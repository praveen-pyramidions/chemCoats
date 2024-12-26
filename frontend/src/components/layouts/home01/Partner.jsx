import React, { Component } from "react";

class Partner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      partner: [
        {
          id: 1,
          img: "assets/img/Clients/9051db38-download-1.png",
          imgcolor: "assets/img/partners/partner-1-color.png",
          alt: "Client Logo 1",
          title: "Client Logo 1",
        },
        {
          id: 2,
          img: "assets/img/Clients/ather_energy@2x.png",
          imgcolor: "assets/img/partners/partner-2-color.png",
          alt: "Ather Energy Logo",
          title: "Ather Energy Logo",
        },
        {
          id: 3,
          img: "assets/img/Clients/ce7f6ea1-group-46.png",
          imgcolor: "assets/img/partners/partner-3-color.png",
          alt: "Client Group 46 Logo",
          title: "Client Group 46 Logo",
        },
        {
          id: 4,
          img: "assets/img/Clients/dell@2x.png",
          imgcolor: "assets/img/partners/partner-4-color.png",
          alt: "Dell Logo",
          title: "Dell Logo",
        },
        {
          id: 5,
          img: "assets/img/Clients/flex_chem_coats@2x.png",
          imgcolor: "assets/img/partners/partner-5-color.png",
          alt: "Flex Chem Coats Logo",
          title: "Flex Chem Coats Logo",
        },
        {
          id: 6,
          img: "assets/img/Clients/Kone@2x.png",
          imgcolor: "assets/img/partners/partner-1-color.png",
          alt: "Kone Logo",
          title: "Kone Logo",
        },
        {
          id: 7,
          img: "assets/img/Clients/logo_client.png",
          imgcolor: "assets/img/partners/partner-2-color.png",
          alt: "Client Logo",
          title: "Client Logo",
        },
        {
          id: 8,
          img: "assets/img/Clients/motorola@2x.png",
          imgcolor: "assets/img/partners/partner-3-color.png",
          alt: "Motorola Logo",
          title: "Motorola Logo",
        },
        {
          id: 9,
          img: "assets/img/Clients/network_simenons@2x.png",
          imgcolor: "assets/img/partners/partner-4-color.png",
          alt: "Network Simenons Logo",
          title: "Network Simenons Logo",
        },
        {
          id: 10,
          img: "assets/img/Clients/simens.png",
          imgcolor: "assets/img/partners/partner-5-color.png",
          alt: "Simens Logo",
          title: "Simens Logo",
        },
        {
          id: 11,
          img: "assets/img/Clients/tvs@2x.png",
          imgcolor: "assets/img/partners/partner-5-color.png",
          alt: "TVS Logo",
          title: "TVS Logo",
        },
      ],
    };
  }

  render() {
    return (
      <div className="row-partner">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div
                className="themesflat-spacer clearfix"
                data-desktop={83}
                data-mobile={60}
                data-smobile={60}
              />
              <div
                className="themesflat-carousel-box clearfix"
                data-gap={5}
                data-column={5}
                data-column2={3}
                data-column3={2}
                data-auto="true"
              >
                <div className="owl-carousel owl-theme">
                  {this.state.partner.map((data) => (
                    <div
                      className="themesflat-partner style-1 align-center clearfix"
                      key={data.id}
                    >
                      <div className="partner-item">
                        <div className="inner">
                          <div className="thumb">
                            <img
                              src={data.img}
                              alt={data.alt}
                              title={data.title}
                              className="partner-default"
                            />
                            <img
                              //   src={data.imgcolor}
                              src={data.img}
                              alt={`${data.alt} Color Version`}
                              title={`${data.title} Color Version`}
                              className="partner-color"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div
                className="themesflat-spacer clearfix"
                data-desktop={66}
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

export default Partner;
