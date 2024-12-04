import React, { Component } from "react";
import { Link } from "react-router-dom";

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          srcimg: "assets/img/project/projectMainPage/1.jpg",
          heading: "Flooring Services for a Software Company",
          // meta: "Architecture",
          // text: "Building",
          projectlink: "/project-detail",
        },
        {
          id: 2,
          srcimg: "assets/img/project/projectMainPage/2.png",
          heading: "ESD Anti Static Floor for a Pharma",
          // meta: "Architecture",
          // text: "Building",
          projectlink: "/project-detail-esdantistaticfloorforapharma",
        },
        {
          id: 3,
          srcimg: "assets/img/project/projectMainPage/foxon.jpg",
          heading: "Foxcon",
          // meta: "Architecture",
          // text: "Building",
          projectlink: "/project-detail-foxcon",
        },
        {
          id: 4,
          srcimg: "assets/img/project/projectMainPage/luxshare.jpeg",
          heading: "Luxshare",
          // meta: "Architecture",
          // text: "Building",
          projectlink: "/project-detail-luxshare",
        },
        {
          id: 5,
          srcimg: "assets/img/project/projectMainPage/mandeolz.png",
          heading: "Mandolez",
          // meta: "Architecture",
          // text: "Building",
          projectlink: "/project-detail-mandolez",
        },
        {
          id: 6,
          srcimg: "assets/img/project/projectMainPage/syrmss.jpeg",
          heading: "Syrma SGS",
          // meta: "Architecture",
          // text: "Building",
          projectlink: "/project-detail-syrmasgs",
        },
        {
          id: 7,
          srcimg: "assets/img/project/projectMainPage/aadhiTapeSolutions.jpeg",
          heading: "AADHI TAPE SOLUTIONS",
          // meta: "Architecture",
          // text: "Building",
          projectlink: "/project-detail-aadhitapesolutions",
        },
        {
          id: 8,
          srcimg: "assets/img/project/projectMainPage/flex.png",
          heading: "FLEX",
          // meta: "Architecture",
          // text: "Building",
          projectlink: "/project-detail-flex",
        },
        {
          id: 9,
          srcimg: "assets/img/project/projectMainPage/9.jpg",
          heading:
            "Execeuted PPT based multi sports court for a leading school in indoor and out door",
          // meta: "Architecture",
          // text: "Building",
          projectlink: "/project-detail-execeutedpptbasedmultisports",
        },
        {
          id: 10,
          srcimg: "assets/img/project/projectMainPage/10.jpeg",
          heading: "Sports-Project",
          // meta: "Architecture",
          // text: "Building",
          projectlink: "/project-detail-sportsproject",
        },
      ],
    };
  }
  render() {
    return (
      <div
        className="themesflat-carousel-box clearfix"
        data-gap={30}
        data-column={4}
        data-column2={2}
        data-column3={1}
        data-auto="false"
      >
        <div className="owl-carousel owl-theme">
          {this.state.data.map((data) => (
            <div
              className="themesflat-project style-1 data-effect  clearfix"
              key={data.id}
            >
              <div className="project-item">
                <div className="inner">
                  <div className="thumb data-effect-item has-effect-icon w40 offset-v-43 offset-h-46">
                    <img src={data.srcimg} alt="altimage" />
                    <div className="text-wrap text-center">
                      <h5 className="heading">
                        <Link
                          to="#"
                          onClick={() => {
                            window.location.href = data.projectlink;
                          }}
                        >
                          {data.heading}
                        </Link>
                      </h5>
                      {/* <div className="elm-meta">
                        <span>
                          <Link to="#">{data.meta}</Link>
                        </span>
                        <span>
                          <Link to="#">{data.text}</Link>
                        </span>
                      </div> */}
                    </div>
                    {/* <div className="elm-link">
                      <Link to="#" className="icon-1 icon-search"></Link>
                      <Link to="#" className="icon-1"></Link>
                    </div> */}
                    <div className="overlay-effect bg-color-3" />
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

export default Project;
