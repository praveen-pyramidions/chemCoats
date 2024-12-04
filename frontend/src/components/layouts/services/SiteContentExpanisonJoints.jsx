import React, { Component } from "react";
import { Link } from "react-router-dom";
class SiteContentExpanisonJoints extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: [
        {
          id: 1,
          text01:
            "The most popular form of epoxy resin that is used for epoxy coatings is Bisphenol A. Bisphenol A has a honey-liquid consistency and is an extremely versatile resin. Bisphenol A is available in many molecular weights. Their variety of molecular weights is what makes Bisphenol A especially versatile for the epoxy application. Bisphenol A is most widely used for flooring systems, in addition to solid coatings.  Bisphenol A epoxy resin is the most common type for concrete coatings because of its excellent adhesion, toughness, abrasion resistance, and chemical resistance. Due to its especially thick natural consistency, there will commonly be additives and diluents which are added into the Bisphenol-A epoxy formula to enhance workability and adhesion. These additives lessen crosslink density which lowers the chemical resistance.",
          image: "assets/img/ServicePage/Bisphenol-A.jpg",
        },
        {
          id: 2,
          text01:
            "Bisphenol F epoxy will typically be more expensive than Bisphenol A epoxy. This is because Bisphenol F epoxy is able to be used for a greater variety of applications. Bisphenol F resins have lower viscosity which means fewer additives and diluents are added which translates to higher chemical resistance. Bisphenol F is especially chemically resistant, and are more likely to be used as varnishes or lacquers, and for application regarding water pipes, adhesives, supermarket food packaging, plastics, dental sealants, and liners. Another advantage is that Bisphenol F has less tendency to crystallize at lower temperatures compared to Bisphenol A resins. Bisphenol F can be blended with Bisphenol A and other resins to reduce viscosity and increase resistance to crystallization.",
          image: "assets/img/ServicePage/Bisphenol-F.jpg",
        },
        {
          id: 3,
          text01:
            "Novolacs are made using excess phenol and modifying Bisphenol F Resins. The viscosity of Novolac resins is higher than Bisphenol F and its functionality is considerably greater than both Bisphenol A and Bisphenol F resins. The higher viscosity and greater functionality of Novolacs give them superior heat and chemical resistance than their Bisphenol A and Bisphenol F counterparts. The greater chemical resistant qualities is a result of the very tight crosslink density because of Novolac’s higher functionality. These properties also make Novolac resins more brittle than Both Bisphenol A and F resins so formulators need to address that with additives and hardener selection. The greater heat resistance is the result of the larger number of aromatic rings. As to be expected Novolac resins have a higher cost to go along with their higher performance.",
          image: "assets/img/ServicePage/Novolac.jpg",
        },
      ],
    };
  }

  render() {
    return (
      <div id="site-content" className="site-content clearfix">
        <div id="inner-content" className="inner-content-wrap">
          <div
            className="themesflat-spacer clearfix"
            data-desktop={80}
            data-mobile={60}
            data-smobile={60}
          />
          <div className="themesflat-row equalize sm-equalize-auto clearfix">
            <div className="span_1_of_6 bg-f7f">
              <div
                className="themesflat-spacer clearfix"
                data-desktop={60}
                data-mobile={60}
                data-smobile={60}
              />
              <div
                className="themesflat-content-box clearfix"
                data-margin="0 10px 0 43px"
                data-mobilemargin="0 15px 0 15px"
              >
                <div className="themesflat-headings style-2 clearfix">
                  {/* <div className="sup-heading">SPECIAL SERVICES</div> */}
                  <h2 className="heading font-size-28 line-height-39">
                    EXPANSION JOINTS
                  </h2>
                  <div className="sep has-width w80 accent-bg margin-top-20 clearfix" />
                  <p className="sub-heading margin-top-33 line-height-24">
                    Expansion joints function to accommodate the thermal
                    expansion and contraction of materials in a structure,
                    preventing cracks and structural damage caused by
                    temperature variations.
                  </p>
                </div>
              </div>
              <div
                className="themesflat-spacer clearfix"
                data-desktop={56}
                data-mobile={56}
                data-smobile={56}
              />
            </div>
            <div className="span_1_of_6 half-background style-2">
              <img
                src="assets/img/ServicePage/4-1024x628.jpg"
                alt="altimage"
                className="ServiceIDpAGEiMAGE"
              />
            </div>
          </div>
          <div
            className="themesflat-spacer clearfix"
            data-desktop={39}
            data-mobile={39}
            data-smobile={39}
          />
          {/* <div className="flat-content-wrap style-2 clearfix">
            <p>
              Epoxy flooring is highly regarded in the industrial and commercial
              sectors for its exceptional mechanical properties and outstanding
              dimensional stability. When expertly cured, epoxy flooring boasts
              remarkable resistance to chemicals and heat, making it a top
              choice for various applications. Its minimal shrinkage further
              enhances its durability, making epoxy flooring a reliable and
              long-lasting solution.
            </p>
          </div> */}

          <div className="flat-content-wrap style-2 clearfix">
            <div className="item" style={{ width: "100%" }}>
              <div className="inner">
                <div
                  className="themesflat-spacer clearfix"
                  data-desktop={10}
                  data-mobile={10}
                  data-smobile={10}
                />
                <h5 className="title">Why Expansion joints are important?</h5>
                {/* <p>
                  Epoxy flooring plays a vital role in the industry for several
                  compelling reasons:
                </p> */}
                <div
                  className="themesflat-spacer clearfix"
                  data-desktop={8}
                  data-mobile={8}
                  data-smobile={8}
                />
                <div className="themesflat-list has-icon style-1 icon-left size-16 clearfix">
                  <div className="inner">
                    <span className="item">
                      <span className="icon">
                        <i className="fa fa-check-circle" />
                      </span>
                      <span className="text">
                        {" "}
                        <span style={{ fontWeight: "500", color: "#000" }}>
                          {" "}
                          Stress Mitigation :
                        </span>{" "}
                        Expansion joints are critical for managing stress and
                        strain within structures, especially in large buildings,
                        bridges, and infrastructure subjected to temperature
                        fluctuations. They prevent the accumulation of forces
                        that could lead to structural damage.
                      </span>
                    </span>
                  </div>
                </div>
                <div className="themesflat-list has-icon style-1 icon-left size-16 clearfix">
                  <div className="inner">
                    <span className="item">
                      <span className="icon">
                        <i className="fa fa-check-circle" />
                      </span>
                      <span className="text">
                        {" "}
                        <span style={{ fontWeight: "500", color: "#000" }}>
                          {" "}
                          Preventing Cracking :
                        </span>{" "}
                        These joints are instrumental in averting cracks that
                        may develop due to thermal expansion, contraction, and
                        settlement, thereby preserving the structural integrity
                        of materials like concrete and asphalt.
                      </span>
                    </span>
                  </div>
                </div>
                <div className="themesflat-list has-icon style-1 icon-left size-16 clearfix">
                  <div className="inner">
                    <span className="item">
                      <span className="icon">
                        <i className="fa fa-check-circle" />
                      </span>
                      <span className="text">
                        {" "}
                        <span style={{ fontWeight: "500", color: "#000" }}>
                          {" "}
                          Dimensional Stability :
                        </span>{" "}
                        They maintain dimensional stability, ensuring that
                        structures maintain their intended shape and size
                        despite variations in temperature and humidity.
                      </span>
                    </span>
                  </div>
                </div>
                <div className="themesflat-list has-icon style-1 icon-left size-16 clearfix">
                  <div className="inner">
                    <span className="item">
                      <span className="icon">
                        <i className="fa fa-check-circle" />
                      </span>
                      <span className="text">
                        {" "}
                        <span style={{ fontWeight: "500", color: "#000" }}>
                          {" "}
                          Hygiene :
                        </span>{" "}
                        Epoxy is easy to clean and maintain, promoting a
                        hygienic working environment, crucial in industries like
                        pharmaceuticals and food processing.
                      </span>
                    </span>
                  </div>
                </div>
                <div className="themesflat-list has-icon style-1 icon-left size-16 clearfix">
                  <div className="inner">
                    <span className="item">
                      <span className="icon">
                        <i className="fa fa-check-circle" />
                      </span>
                      <span className="text">
                        {" "}
                        <span style={{ fontWeight: "500", color: "#000" }}>
                          {" "}
                          Maintenance Reduction :
                        </span>{" "}
                        Properly designed expansion joints minimize maintenance
                        requirements, reducing the need for costly repairs and
                        enhancing the longevity of structures.
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="themesflat-list has-icon style-1 icon-left size-16 clearfix">
                <div className="inner">
                  <span className="item">
                    <span className="icon">
                      <i className="fa fa-check-circle" />
                    </span>
                    <span className="text">
                      {" "}
                      <span style={{ fontWeight: "500", color: "#000" }}>
                        {" "}
                        Safety Assurance :
                      </span>{" "}
                      Expansion joints enhance safety by preventing trip hazards
                      that can result from uneven surfaces and surface
                      discontinuities.
                    </span>
                  </span>
                </div>
              </div>
              <div className="themesflat-list has-icon style-1 icon-left size-16 clearfix">
                <div className="inner">
                  <span className="item">
                    <span className="icon">
                      <i className="fa fa-check-circle" />
                    </span>
                    <span className="text">
                      {" "}
                      <span style={{ fontWeight: "500", color: "#000" }}>
                        {" "}
                        Structural Longevity :
                      </span>{" "}
                      By reducing the risk of damage, expansion joints help
                      extend the lifespan of infrastructure, such as buildings,
                      bridges, and pavements.
                    </span>
                  </span>
                </div>
              </div>
              <div className="themesflat-list has-icon style-1 icon-left size-16 clearfix">
                <div className="inner">
                  <span className="item">
                    <span className="icon">
                      <i className="fa fa-check-circle" />
                    </span>
                    <span className="text">
                      {" "}
                      <span style={{ fontWeight: "500", color: "#000" }}>
                        {" "}
                        Seismic Resistance :
                      </span>{" "}
                      In regions prone to seismic activity, expansion joints
                      play a crucial role in allowing for controlled movement
                      during an earthquake, thereby enhancing the seismic
                      resistance of structures.
                    </span>
                  </span>
                </div>
              </div>
              <div className="themesflat-list has-icon style-1 icon-left size-16 clearfix">
                <div className="inner">
                  <span className="item">
                    <span className="icon">
                      <i className="fa fa-check-circle" />
                    </span>
                    <span className="text">
                      {" "}
                      <span style={{ fontWeight: "500", color: "#000" }}>
                        {" "}
                        Waterproofing :
                      </span>{" "}
                      They act as a barrier to water infiltration, preventing
                      moisture from seeping into structures and causing damage
                      over time.
                    </span>
                  </span>
                </div>
              </div>
              <div className="themesflat-list has-icon style-1 icon-left size-16 clearfix">
                <div className="inner">
                  <span className="item">
                    <span className="icon">
                      <i className="fa fa-check-circle" />
                    </span>
                    <span className="text">
                      {" "}
                      <span style={{ fontWeight: "500", color: "#000" }}>
                        {" "}
                        Architectural Flexibility :
                      </span>{" "}
                      Expansion joints allow for architectural flexibility by
                      accommodating the movement of different building
                      components, such as facades, without compromising
                      structural stability.
                    </span>
                  </span>
                </div>
              </div>
              <div className="themesflat-list has-icon style-1 icon-left size-16 clearfix">
                <div className="inner">
                  <span className="item">
                    <span className="icon">
                      <i className="fa fa-check-circle" />
                    </span>
                    <span className="text">
                      {" "}
                      <span style={{ fontWeight: "500", color: "#000" }}>
                        {" "}
                        Compliance and Codes :
                      </span>{" "}
                      They are often mandated by building codes and engineering
                      standards, ensuring that structures meet regulatory
                      requirements for safety and performance.
                    </span>
                  </span>
                </div>
              </div>{" "}
              <div className="themesflat-list has-icon style-1 icon-left size-16 clearfix">
                <div className="inner">
                  <span className="item">
                    <span className="icon">
                      <i className="fa fa-check-circle" />
                    </span>
                    <span className="text">
                      {" "}
                      <span style={{ fontWeight: "500", color: "#000" }}>
                        {" "}
                        Infrastructure Functionality :
                      </span>{" "}
                      In transportation infrastructure like roads and bridges,
                      expansion joints ensure a smooth and safe ride for
                      vehicles by accommodating the expansion and contraction of
                      materials due to temperature changes.
                    </span>
                  </span>
                </div>
              </div>{" "}
              <div className="themesflat-list has-icon style-1 icon-left size-16 clearfix">
                <div className="inner">
                  <span className="item">
                    <span className="icon">
                      <i className="fa fa-check-circle" />
                    </span>
                    <span className="text">
                      {" "}
                      <span style={{ fontWeight: "500", color: "#000" }}>
                        {" "}
                        Noise and Vibration Control :
                      </span>{" "}
                      In some applications, expansion joints can help control
                      noise and vibrations generated by the movement of vehicles
                      or machinery, contributing to a more comfortable
                      environment
                    </span>
                  </span>
                </div>
              </div>
            </div>
            {/* <div className="item">
              <div
                className="themesflat-spacer clearfix"
                data-desktop={0}
                data-mobile={0}
                data-smobile={35}
              />
              <div
                className="themesflat-content-box clearfix"
                data-margin="0 0 0 11px"
                data-mobilemargin="0 0 0 0"
              >
                <div className="inner pd35 bg-ffc">
                  <h5 className="title text-white line-height-24 padding-left-7">
                    THIS AWESOME SERVICE BRINGS FULL INTEREST INFORMATION FOR
                    YOUR PURPOSE
                  </h5>
                  <div
                    className="themesflat-spacer clearfix"
                    data-desktop={16}
                    data-mobile={16}
                    data-smobile={16}
                  />
                  <div className="button-wrap has-icon icon-right size-14">
                    <Link
                      to="#"
                      className="themesflat-button bg-white color-333 w100 font-weight-400 no-letter-spacing pd26"
                    >
                      <span>
                        Download .PDF{" "}
                        <span className="icon">
                          <i className="fa fa-file-pdf-o" />
                        </span>
                      </span>
                    </Link>
                  </div>
                  <div
                    className="themesflat-spacer clearfix"
                    data-desktop={6}
                    data-mobile={6}
                    data-smobile={6}
                  />
                  <div className="button-wrap has-icon icon-right size-14">
                    <Link
                      to="#"
                      className="themesflat-button bg-white color-333 w100 font-weight-400 no-letter-spacing pd26 "
                    >
                      <span>
                        Download .DOC{" "}
                        <span className="icon">
                          <i className="fa fa-file-word-o" />
                        </span>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div> */}
          </div>

          {/* Image Slider */}
          <div
            className="themesflat-spacer clearfix"
            data-desktop={37}
            data-mobile={35}
            data-smobile={35}
          />
          <div className="row-services">
            <div className="container">
              <h5 className="title">Expansion Joints Images : </h5>
              <div className="row">
                <div className="col-md-12">
                  <div
                    className="themesflat-carousel-box data-effect clearfix"
                    data-gap={30}
                    data-column={3}
                    data-column2={2}
                    data-column3={1}
                    data-auto="true"
                  >
                    <div className="owl-carousel owl-theme">
                      <div className="themesflat-image-box style-2 clearfix">
                        <div className="image-box-item">
                          <div className="inner">
                            <div className="thumb data-effect-item">
                              <img
                                src="assets\img\ServicePage\epoxy-flooring3.jpg"
                                alt="altimage"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="themesflat-image-box style-2 clearfix">
                        <div className="image-box-item">
                          <div className="inner">
                            <div className="thumb data-effect-item">
                              <img
                                src="assets\img\ServicePage\PU1.jpg"
                                alt="altimage"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="themesflat-image-box style-2 clearfix">
                        <div className="image-box-item">
                          <div className="inner">
                            <div className="thumb data-effect-item">
                              <img
                                src="assets\img\ServicePage\Di-electric-flooring.jpg"
                                alt="altimage"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="themesflat-image-box style-2 clearfix">
                        <div className="image-box-item">
                          <div className="inner">
                            <div className="thumb data-effect-item">
                              <img
                                src="assets\img\ServicePage\IMG-20220628-WA0007.jpg"
                                alt="altimage"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="themesflat-image-box style-2 clearfix">
                        <div className="image-box-item">
                          <div className="inner">
                            <div className="thumb data-effect-item">
                              <img
                                src="assets\img\ServicePage\esd-flooring-5.jpg"
                                alt="altimage"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="themesflat-spacer clearfix"
                      data-desktop={45}
                      data-mobile={60}
                      data-smobile={60}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Image Slider */}
          <div className="flat-content-wrap style-2 clearfix">
            <div className="item" style={{ width: "100%" }}>
              <div className="inner">
                <div
                  className="themesflat-spacer clearfix"
                  data-desktop={10}
                  data-mobile={10}
                  data-smobile={10}
                />
                <h5 className="title">
                  Applications in which expansion joints are employed :
                </h5>

                <div
                  className="themesflat-spacer clearfix"
                  data-desktop={8}
                  data-mobile={8}
                  data-smobile={8}
                />
                <div className="themesflat-list has-icon style-1 icon-left size-16 clearfix">
                  <div className="inner">
                    <span className="item">
                      <span className="icon">
                        <i className="fa fa-check-circle" />
                      </span>
                      <span className="text">
                        <span style={{ fontWeight: "500", color: "#000" }}>
                          {" "}
                          Building Construction :
                        </span>{" "}
                        In commercial and residential buildings to prevent
                        cracks in concrete floors, walls, and ceilings. In
                        high-rise buildings to allow for vertical movement
                        caused by wind loads and thermal expansion. In facades
                        to accommodate movement between different building
                        materials.
                      </span>
                    </span>
                  </div>
                </div>
                <div className="themesflat-list has-icon style-1 icon-left size-16 clearfix">
                  <div className="inner">
                    <span className="item">
                      <span className="icon">
                        <i className="fa fa-check-circle" />
                      </span>
                      <span className="text">
                        <span style={{ fontWeight: "500", color: "#000" }}>
                          {" "}
                          Bridges and Highways :
                        </span>{" "}
                        Expansion joints are essential in bridge construction to
                        accommodate the expansion and contraction of bridge
                        components due to temperature changes.
                      </span>
                    </span>
                  </div>
                </div>
                <div className="themesflat-list has-icon style-1 icon-left size-16 clearfix">
                  <div className="inner">
                    <span className="item">
                      <span className="icon">
                        <i className="fa fa-check-circle" />
                      </span>
                      <span className="text">
                        <span style={{ fontWeight: "500", color: "#000" }}>
                          {" "}
                        </span>{" "}
                        They are used in highway construction to create smooth
                        transitions between different segments of roadways and
                        prevent damage from vehicle loads and thermal effects.
                      </span>
                    </span>
                  </div>
                </div>
                <div className="themesflat-list has-icon style-1 icon-left size-16 clearfix">
                  <div className="inner">
                    <span className="item">
                      <span className="icon">
                        <i className="fa fa-check-circle" />
                      </span>
                      <span className="text">
                        <span style={{ fontWeight: "500", color: "#000" }}>
                          {" "}
                          Airport Runways and Taxiways :
                        </span>{" "}
                        Expansion joints are used in airport pavements to
                        maintain a smooth and safe surface for aircraft, as well
                        as to prevent damage from the weight and movement of
                        planes.
                      </span>
                    </span>
                  </div>
                </div>
                <div className="themesflat-list has-icon style-1 icon-left size-16 clearfix">
                  <div className="inner">
                    <span className="item">
                      <span className="icon">
                        <i className="fa fa-check-circle" />
                      </span>
                      <span className="text">
                        <span style={{ fontWeight: "500", color: "#000" }}>
                          {" "}
                          Railroad Tracks :
                        </span>{" "}
                        Expansion joints are employed in railway infrastructure
                        to absorb the expansion and contraction of rails caused
                        by temperature variations, ensuring safe and efficient
                        train operations.
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="themesflat-list has-icon style-1 icon-left size-16 clearfix">
                <div className="inner">
                  <span className="item">
                    <span className="icon">
                      <i className="fa fa-check-circle" />
                    </span>
                    <span className="text">
                      <span style={{ fontWeight: "500", color: "#000" }}>
                        {" "}
                        Parking Structures :
                      </span>{" "}
                      Expansion joints are used in multi-level parking garages
                      to prevent structural damage and provide a smoother
                      driving surface for vehicles.
                    </span>
                  </span>
                </div>
              </div>
              <div className="themesflat-list has-icon style-1 icon-left size-16 clearfix">
                <div className="inner">
                  <span className="item">
                    <span className="icon">
                      <i className="fa fa-check-circle" />
                    </span>
                    <span className="text">
                      <span style={{ fontWeight: "500", color: "#000" }}>
                        {" "}
                        Industrial Facilities :
                      </span>{" "}
                      In manufacturing plants and industrial facilities,
                      expansion joints are used to absorb vibrations and
                      movements caused by heavy machinery, as well as to prevent
                      leaks in piping systems.
                    </span>
                  </span>
                </div>
              </div>
              <div className="themesflat-list has-icon style-1 icon-left size-16 clearfix">
                <div className="inner">
                  <span className="item">
                    <span className="icon">
                      <i className="fa fa-check-circle" />
                    </span>
                    <span className="text">
                      <span style={{ fontWeight: "500", color: "#000" }}>
                        {" "}
                        Water and Wastewater Treatment Plants :
                      </span>{" "}
                      Expansion joints are used in the construction of tanks,
                      basins, and pipelines to accommodate the movement of water
                      and prevent damage from settling and ground shifts.
                    </span>
                  </span>
                </div>
              </div>
              <div className="themesflat-list has-icon style-1 icon-left size-16 clearfix">
                <div className="inner">
                  <span className="item">
                    <span className="icon">
                      <i className="fa fa-check-circle" />
                    </span>
                    <span className="text">
                      <span style={{ fontWeight: "500", color: "#000" }}>
                        {" "}
                        Marine Structures :
                      </span>{" "}
                      In docks, piers, and seawalls, expansion joints help
                      withstand the dynamic forces of water and tides, ensuring
                      the longevity of maritime infrastructure.
                    </span>
                  </span>
                </div>
              </div>
              <div className="themesflat-list has-icon style-1 icon-left size-16 clearfix">
                <div className="inner">
                  <span className="item">
                    <span className="icon">
                      <i className="fa fa-check-circle" />
                    </span>
                    <span className="text">
                      <span style={{ fontWeight: "500", color: "#000" }}>
                        {" "}
                        Oil and Gas Industry :
                      </span>{" "}
                      Expansion joints are used in pipelines and refineries to
                      absorb thermal expansion and contraction, reducing stress
                      and preventing leaks.
                    </span>
                  </span>
                </div>
              </div>{" "}
              <div className="themesflat-list has-icon style-1 icon-left size-16 clearfix">
                <div className="inner">
                  <span className="item">
                    <span className="icon">
                      <i className="fa fa-check-circle" />
                    </span>
                    <span className="text">
                      <span style={{ fontWeight: "500", color: "#000" }}>
                        {" "}
                        Commercial Kitchens :
                      </span>{" "}
                      In restaurants and commercial kitchens, expansion joints
                      are used in flooring to withstand heavy equipment and
                      temperature fluctuations.
                    </span>
                  </span>
                </div>
              </div>{" "}
              <div className="themesflat-list has-icon style-1 icon-left size-16 clearfix">
                <div className="inner">
                  <span className="item">
                    <span className="icon">
                      <i className="fa fa-check-circle" />
                    </span>
                    <span className="text">
                      {" "}
                      <span style={{ fontWeight: "500", color: "#000" }}>
                        {" "}
                        Sports Stadiums :
                      </span>{" "}
                      Expansion joints are installed in stadium seating areas to
                      accommodate movement and ensure spectator safety.
                    </span>
                  </span>
                </div>
              </div>{" "}
              <div className="themesflat-list has-icon style-1 icon-left size-16 clearfix">
                <div className="inner">
                  <span className="item">
                    <span className="icon">
                      <i className="fa fa-check-circle" />
                    </span>
                    <span className="text">
                      {" "}
                      <span style={{ fontWeight: "500", color: "#000" }}>
                        {" "}
                        Public Transportation :
                      </span>{" "}
                      In subway and light rail systems, expansion joints allow
                      for movement in tunnels and rail tracks to prevent
                      structural damage.
                    </span>
                  </span>
                </div>
              </div>{" "}
              <div className="themesflat-list has-icon style-1 icon-left size-16 clearfix">
                <div className="inner">
                  <span className="item">
                    <span className="icon">
                      <i className="fa fa-check-circle" />
                    </span>
                    <span className="text">
                      {" "}
                      <span style={{ fontWeight: "500", color: "#000" }}>
                        {" "}
                        Tunnels :
                      </span>{" "}
                      Expansion joints are used in tunnels to accommodate
                      movement caused by temperature changes and ground
                      settlement.
                    </span>
                  </span>
                </div>
              </div>{" "}
              <div className="themesflat-list has-icon style-1 icon-left size-16 clearfix">
                <div className="inner">
                  <span className="item">
                    <span className="icon">
                      <i className="fa fa-check-circle" />
                    </span>
                    <span className="text">
                      <span style={{ fontWeight: "500", color: "#000" }}>
                        {" "}
                        Energy Generation Facilities :
                      </span>{" "}
                      In power plants and energy generation facilities,
                      expansion joints are used in equipment such as boilers,
                      chimneys, and exhaust systems to withstand thermal
                      fluctuations.
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div
            className="themesflat-spacer clearfix"
            data-desktop={80}
            data-mobile={60}
            data-smobile={60}
          />
        </div>
      </div>
    );
  }
}

export default SiteContentExpanisonJoints;
