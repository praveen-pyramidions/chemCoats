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
          text: "ESD flooring is provided as a controlled pathway for electrical charges to move safely to ground, thus preventing accumulation of static electricity. This is done by conductive capillaries, filaments, or fibers in the flooring material that collect static electricity from people or objects as they walk on the floor surface and safely prevents electrostatic discharge events to occur on sensitive electronic devices.",
        },
        {
          id: 2,
          classname: "accordion-item",
          heading: "Does ESD flooring require special maintenance?",
          text: "Indeed, maintenance according to proper ESD flooring procedures is very important for achieving a successful ESD flooring system. However, regular cleaning with suitable material is required in order to preserve its conductive capacity. For example, StaticSmart® ESD vinyl floor tile does not require wax or polish, but should be cleaned in accordance with the manufacturer's instructions. In the same way, ESD carpet tiles have particular cleaning instructions in order to maintain static control properties.",
        },
        {
          id: 3,
          classname: "accordion-item",
          heading:
            "What industries or environments benefit the most from ESD flooring?",
          text: "ESD flooring is very important in the fields in which electric shock can be responsible for damaging delicate equipment or components. They comprise electronics manufacturing, data centers, pharmaceutical laboratories, cleanrooms and, aerospace facilities. There is a further wide adoption in the field of healthcare, such as operating rooms, where the static control plays the main role for the patient safety and the appliance functionality.",
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
