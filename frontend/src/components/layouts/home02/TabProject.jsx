import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

class TabProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          id: 1,
          classnames: "project-item green villa",
          srcimg: "assets/img/project/projectMainPage/1.jpg",
          heading: "Flooring Services for a Software Company",
          // name01: "Green House",
          // name02: "Villa",
          projectLink: "/esd-protection-systems",
        },
        {
          id: 2,
          classnames: "project-item architecture building construction",
          srcimg: "assets/img/project/projectMainPage/2.png",
          heading: "ESD Anti Static Floor for a Pharma",
          projectLink: "/esd-antistatic-floor-fora-pharma",
          // name01: "Architecture",
          // name02: "",
        },
        {
          id: 3,
          classnames: "project-item villa architecture building construction",
          srcimg: "assets/img/project/projectMainPage/foxon.jpg",
          heading: "Foxcon",
          projectLink: "/foxcon",
          // name01: "Green House",
          // name02: "Villa",
        },
        {
          id: 4,
          classnames: "project-item green villa",
          srcimg: "assets/img/project/projectMainPage/luxshare.jpeg",
          heading: "Luxshare",
          // name01: "Green House",
          // name02: "Villa",
          projectLink: "/luxshare",
        },
        {
          id: 5,
          classnames: "project-item architecture building construction",
          srcimg: "assets/img/project/projectMainPage/mandeolz.png",
          heading: "Mandolez",
          // name01: "Architecture",
          // name02: "",
          projectLink: "/mandolez",
        },
        {
          id: 6,
          classnames: "project-item green",
          srcimg: "assets/img/project/projectMainPage/syrmss.jpeg",
          heading: "Syrma SGS",
          // name01: "Green House",
          // name02: "Villa",
          projectLink: "/syrmasgs",
        },
        {
          id: 7,
          classnames: "project-item green",
          srcimg: "assets/img/project/projectMainPage/aadhiTapeSolutions.jpeg",
          heading: "AADHI TAPE SOLUTIONS",
          // name01: "AADHI TAPE SOLUTIONS",
          // name02: "Villa",
          projectLink: "/aadhi-tape-solutions",
        },
        {
          id: 8,
          classnames: "project-item green",
          srcimg: "assets/img/project/projectMainPage/flex.png",
          heading: "FLEX",
          // name01: "AADHI TAPE SOLUTIONS",
          // name02: "Villa",
          projectLink: "/flex",
        },
        {
          id: 9,
          classnames: "project-item green",
          srcimg: "assets/img/project/projectMainPage/9.jpg",
          heading:
            "Execeuted PPT based multi sports court for a leading school in indoor and out door",
          // name01: "AADHI TAPE SOLUTIONS",
          // name02: "Villa",
          projectLink: "/executed-ppt-based-multi-sports",
        },

        {
          id: 10,
          classnames: "project-item green",
          srcimg: "assets/img/project/projectMainPage/10.jpeg",
          heading: "Sports-project",
          // name01: "AADHI TAPE SOLUTIONS",
          // name02: "Villa",
          projectLink: "/sports-project",
        },
      ],
    };
  }

  render() {
    return (
      <div className="themesflat-project style-2 isotope-project has-margin mg15 data-effect clearfix">
        {this.state.projects.map((data) => (
          <div className={data.classnames} key={data.id}>
            <div
              className="inner"
              onClick={() => {
                window.location.href = data.projectLink;
              }}
            >
              <Helmet>
                <title>Flooring Projects</title>
                <meta
                  name="description"
                  content="Flooring Projects encompass the design, installation, and renovation of flooring solutions for residential, commercial, and industrial spaces. From consultation to completion, we deliver high-quality, durable floors tailored to your specific needs and budget."
                />
                <meta name="author" content="Your Company Name" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://chemcoats.com/project" />
              </Helmet>
              <div className="thumb data-effect-item has-effect-icon w40 offset-v-19 offset-h-49">
                <img
                  src={data.srcimg}
                  alt="Project-image"
                  title="ProJect-image"
                />
                <div className="elm-link">
                  {/* <Link to="#" className="icon-1 icon-search" /> */}
                  {/* <Link to="#" className="icon-1" /> */}
                </div>
                {/* <div className="overlay-effect bg-color-3" /> */}
              </div>
              <div className="text-wrap">
                <h5 className="heading">
                  <Link
                    to="#"
                    onClick={() => {
                      window.location.href = data.projectLink;
                    }}
                  >
                    {data.heading}
                  </Link>
                </h5>
                <div className="elm-meta">
                  <span>
                    <Link to="#">{data.name01}</Link>
                  </span>
                  <span>
                    <Link to="#">{data.name01}</Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default TabProject;
