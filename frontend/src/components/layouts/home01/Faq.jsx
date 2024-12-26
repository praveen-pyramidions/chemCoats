import React, { Component } from "react";

class Faq extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accordion: [
        {
          id: 1,
          classname: "accordion-item active",
          heading: "What is ESD flooring, and how does it work?",
          text: "ESD flooring is designed to prevent the buildup of static electricity by providing a controlled pathway for electrical charges to dissipate safely to the ground. This is achieved through conductive veins, filaments, or fibers within the flooring material that draw static electricity away from people or objects as they move across the floor, protecting sensitive electronic equipment from electrostatic discharge events.",
        },
        {
          id: 2,
          classname: "accordion-item",
          heading: "Does ESD flooring require special maintenance?",
          text: "Yes, proper maintenance is essential to ensure the effectiveness of ESD flooring. Regular cleaning with appropriate products is necessary to maintain its conductive properties. For instance, StaticSmart® ESD vinyl tile does not require wax or polish but should be cleaned following the manufacturer's guidelines. Similarly, ESD carpet tiles have specific cleaning instructions to preserve their static control capabilities.",
        },
        {
          id: 3,
          classname: "accordion-item",
          heading: "What industries or environments benefit the most from ESD flooring?",
          text: "ESD flooring is crucial in industries where static electricity can damage sensitive equipment or components. These include electronics manufacturing, data centers, pharmaceutical labs, cleanrooms, and aerospace facilities. It is also commonly used in healthcare settings like operating rooms, where static control is critical for patient safety and equipment functionality.",
        },
      ],
    };
  }

  render() {
    return (
      <div className="col-md-6">
        <div
          className="themesflat-spacer clearfix"
          data-desktop={0}
          data-mobile={0}
          data-smobile={35}
        />
        <div
          className="themesflat-content-box"
          data-margin="0 0 0 18px"
          data-mobilemargin="0 0 0 0"
        >
          <div className="themesflat-headings style-1 clearfix">
            <h2 className="heading">FAQs</h2>
            <div className="sep has-width w80 accent-bg margin-top-11 clearfix" />
          </div>
          <div
            className="themesflat-spacer clearfix"
            data-desktop={38}
            data-mobile={35}
            data-smobile={35}
          />
          <div className="themesflat-accordions style-1 has-icon icon-left iconstyle-1 clearfix">
            {this.state.accordion.map((data) => (
              <div className={data.classname} key={data.id}>
                <h3 className="accordion-heading">
                  <span className="inner">{data.heading}</span>
                </h3>
                <div className="accordion-content">
                  <div>{data.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Faq;
