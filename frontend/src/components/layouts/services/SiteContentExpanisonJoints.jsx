import React, { Component } from "react";
import { Helmet } from "react-helmet";
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
        <Helmet>
          <title>Expansion Joints | Concrete Expansion Joint</title>
          <meta
            name="description"
            content="Expansion Joints are critical components designed to accommodate movement and prevent damage in concrete and flooring systems. Ideal for bridges, highways, and industrial floors, they ensure durability and flexibility by allowing for thermal expansion and contraction."
          />
          <meta name="author" content="Chem Coats" />
          {/* <link
            rel="canonical"
            href="https://chemcoats.com/di-expanison-joints"
          /> */}
          <meta name="robots" content="index, follow" />
        </Helmet>
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
                  <h1 className="heading font-size-28 line-height-39">
                    EXPANSION JOINTS
                  </h1>
                  <div className="sep has-width w80 accent-bg margin-top-20 clearfix" />
                  <p className="sub-heading margin-top-33 line-height-24">
                    {/* Expansion joints function to accommodate the thermal
                    expansion and contraction of materials in a structure,
                    preventing cracks and structural damage caused by
                    temperature variations. */}
                    Expansion joints are used to compensate thermal expansion
                    and contraction of building materials, avoiding cracks and
                    damage to the structure from temperature changes.
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
                alt="Expansion-Joints-image"
                title="Expansion Joints"
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
                        {/* Expansion joints are critical for managing stress and
                        strain within structures, especially in large buildings,
                        bridges, and infrastructure subjected to temperature
                        fluctuations. They prevent the accumulation of forces
                        that could lead to structural damage. */}
                        Expansion joints play an important role in controlling
                        the stress and strain of structures, particularly in big
                        structures, bridges and infrastructure, which are
                        subject to temperature changes. They stop the buildup of
                        stresses that may lead to structural failure.
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
                        {/* These joints are instrumental in averting cracks that
                        may develop due to thermal expansion, contraction, and
                        settlement, thereby preserving the structural integrity
                        of materials like concrete and asphalt. */}
                        These articulations play a key role in preventing
                        potentially damaging cracks that can arise from thermal
                        expansion, contracting, and settling and, as such,
                        protect the integrity of the structure of the material
                        that they are built from, such as concrete and asphalt.
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
                        {/* They maintain dimensional stability, ensuring that
                        structures maintain their intended shape and size
                        despite variations in temperature and humidity. */}
                        They keep dimensional stability, that planes do not
                        alter shape and size while temperature and humidity
                        changes occur.
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
                        {/* Epoxy is easy to clean and maintain, promoting a
                        hygienic working environment, crucial in industries like
                        pharmaceuticals and food processing. */}
                        Epoxy is very easy to clean and to maintain, thereby
                        creating a very sanitary working environment, which is
                        of particular importance in industries such as
                        pharmaceuticals or in processing food.
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
                        {/* Properly designed expansion joints minimize maintenance
                        requirements, reducing the need for costly repairs and
                        enhancing the longevity of structures. */}
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
                      {/* Expansion joints enhance safety by preventing trip hazards
                      that can result from uneven surfaces and surface
                      discontinuities. */}
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
                      {/* By reducing the risk of damage, expansion joints help
                      extend the lifespan of infrastructure, such as buildings,
                      bridges, and pavements. */}
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
                      {/* In regions prone to seismic activity, expansion joints
                      play a crucial role in allowing for controlled movement
                      during an earthquake, thereby enhancing the seismic
                      resistance of structures. */}
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
                      {/* They act as a barrier to water infiltration, preventing
                      moisture from seeping into structures and causing damage
                      over time. */}
                      They are a watertight barrier that prevents capillary
                      absorption of moisture into buildings and deterioration
                      with time.
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
                      {/* Expansion joints allow for architectural flexibility by
                      accommodating the movement of different building
                      components, such as facades, without compromising
                      structural stability. */}
                      Expansion joints permit structural flexibility to enable
                      movement of other structural components, e.g., facades,
                      without affecting structural integrity.
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
                      {/* They are often mandated by building codes and engineering
                      standards, ensuring that structures meet regulatory
                      requirements for safety and performance. */}
                      These are frequently mandated by building codes and
                      engineering practices, guaranteeing structures conform to
                      regulatory guidelines for safety and performance.
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
                      {/* In transportation infrastructure like roads and bridges,
                      expansion joints ensure a smooth and safe ride for
                      vehicles by accommodating the expansion and contraction of
                      materials due to temperature changes. */}
                      In the infrastructure of transportation, such as roads and
                      bridges, expansion joints do the right job providing a
                      confortable and safe driving of vehicles by allowing
                      materials to expand and contract according to temperature
                      variations.
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
                      {/* In some applications, expansion joints can help control
                      noise and vibrations generated by the movement of vehicles
                      or machinery, contributing to a more comfortable
                      environment */}
                      In certain applications, expansion joints may be used to
                      regulate noise and vibration caused by the movement of
                      vehicles and/or machinery which contribute to a quieter
                      environment.
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
                                alt="Expansion-Joints-image"
                                title="Expansion Joints"
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
                                alt="Expansion-Joints-image"
                                title="Expansion Joints"
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
                                alt="Expansion-Joints-image"
                                title="Expansion Joints"
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
                                alt="Expansion-Joints-image"
                                title="Expansion Joints"
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
                                alt="Expansion-Joints-image"
                                title="Expansion Joints"
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
                        {/* In commercial and residential buildings to prevent
                        cracks in concrete floors, walls, and ceilings. In
                        high-rise buildings to allow for vertical movement
                        caused by wind loads and thermal expansion. In facades
                        to accommodate movement between different building
                        materials. */}
                        For building commercial and residential structures with
                        the aim of preventing concrete floor, wall, and ceiling
                        cracks. In high-rise buildings to allow for vertical
                        movement caused by wind loads and thermal expansion. In
                        facades to accommodate movement between different
                        building materials.
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
                        {/* Expansion joints are essential in bridge construction to
                        accommodate the expansion and contraction of bridge
                        components due to temperature changes. */}
                        Expansion joints are one of the key components in the
                        construction of bridges for the purpose of the growth
                        and shrinking of bridge elements caused by the
                        temperature variation.
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
                        {/* They are used in highway construction to create smooth
                        transitions between different segments of roadways and
                        prevent damage from vehicle loads and thermal effects. */}
                        These can also be applied to the highway construction
                        with the aim of providing smooth continuous transitions
                        between different road sections and avoidance of damage
                        due to vehicle traffic and thermal effects.
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
                        {/* Expansion joints are used in airport pavements to
                        maintain a smooth and safe surface for aircraft, as well
                        as to prevent damage from the weight and movement of
                        planes. */}
                        Expansion joints are incorporated to airport pavements
                        so that the surface is smooth and safe for aircraft and
                        to avoid car damage from airplane weight and movement.
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
                        {/* Expansion joints are employed in railway infrastructure
                        to absorb the expansion and contraction of rails caused
                        by temperature variations, ensuring safe and efficient
                        train operations. */}
                        Expansion joints are used in railway structures to
                        accommodate the bending and warping of rails due to
                        thermal expansion and contraction and guarantee safe and
                        effective train operation.
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
                      {/* Expansion joints are used in multi-level parking garages
                      to prevent structural damage and provide a smoother
                      driving surface for vehicles. */}
                      Expansion joints are incorporated into the multi-story
                      parking garage to avoid structural damage and to create a
                      more compliant driving surface for vehicles.
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
                      {/* In manufacturing plants and industrial facilities,
                      expansion joints are used to absorb vibrations and
                      movements caused by heavy machinery, as well as to prevent
                      leaks in piping systems. */}
                      In manufacturing plants, as well as in industrial plants,
                      expansion joints are employed to accommodate vibrations
                      and to compensate for the travelling of heavy machinery,
                      in addition to serving a major area of piping systems leak
                      prevention.
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
                      {/* Expansion joints are used in the construction of tanks,
                      basins, and pipelines to accommodate the movement of water
                      and prevent damage from settling and ground shifts. */}
                      Expansion joints are applied to the construction of tanks,
                      basins and pipes to allow for the expansion and
                      contraction of water and to prevent damage caused by
                      settling or ground movement.
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
                      {/* In docks, piers, and seawalls, expansion joints help
                      withstand the dynamic forces of water and tides, ensuring
                      the longevity of maritime infrastructure. */}
                      Expansion joints in docks, piers, and seawalls protect
                      against the dynamic loads of water and tides and thus the
                      lifespans of maritime structures.
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
                      {/* Expansion joints are used in pipelines and refineries to
                      absorb thermal expansion and contraction, reducing stress
                      and preventing leaks. */}
                      Expansion joints are incorporated in pipelines and
                      refineries to accommodate thermal expansion and
                      contraction, thus relieving stress and preventing leaks.
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
                      {/* In restaurants and commercial kitchens, expansion joints
                      are used in flooring to withstand heavy equipment and
                      temperature fluctuations. */}
                      Expansion joints are included in the floor of restaurants
                      and commercial kitchens to resist the impacts of heavy
                      traffic and temperature changes.
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
                      {/* Expansion joints are installed in stadium seating areas to
                      accommodate movement and ensure spectator safety. */}
                      Expansion joints are fitted in seating areas of the
                      stadium to allow for movement and to have a spectator
                      safety.
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
                      {/* In subway and light rail systems, expansion joints allow
                      for movement in tunnels and rail tracks to prevent
                      structural damage. */}
                      Expansion joints in subway and light rail systems
                      accommodate expansion in tunnels and rail tracks to
                      prevent the damage of structures.
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
                      {/* Expansion joints are used in tunnels to accommodate
                      movement caused by temperature changes and ground
                      settlement. */}
                      Expansion joints are inserted in tunnel in order to leave
                      space for thermal expansion and/or settling of the ground.
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
                      {/* In power plants and energy generation facilities,
                      expansion joints are used in equipment such as boilers,
                      chimneys, and exhaust systems to withstand thermal
                      fluctuations. */}
                      Expansion joints on equipment (such as boilers and
                      chimneys and exhaust systems) in power plants and energy
                      generating plants, due to thermal fluctuations, are
                      accommodated in the form of expansion joints.
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
