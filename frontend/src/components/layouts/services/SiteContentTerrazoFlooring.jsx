import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
class SiteContentTerrazoFlooring extends Component {
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
          <title>
            Terrazo Flooring | Epoxy Terrazo Flooring | Epoxy Terrazo
          </title>
          <meta
            name="description"
            content="Terrazzo Flooring is a highly durable, visually striking surface made from a blend of marble, glass, and epoxy. Ideal for high-traffic commercial spaces, it offers long-lasting performance, easy maintenance, and endless design possibilities."
          />

          <meta name="author" content="Your Company Name" />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://chemcoats.com/terrazo-flooring" />
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
                    TERRAZO FLOORING
                  </h1>
                  <div className="sep has-width w80 accent-bg margin-top-20 clearfix" />
                  <p className="sub-heading margin-top-33 line-height-24">
                    {/* Terrazzo epoxy flooring is a composite material consisting
                    of epoxy resin binder and aggregate chips, which are then
                    polished to create a durable and visually appealing surface
                    for various commercial and residential applications. */}
                    Terrazzo epoxy flooring is a mixture of resin binder and
                    aggregate matrix containing chopped (corundum, fused silica,
                    quartz, porcelain powder and various high alumina industrial
                    refractory materials, in powder form) aggregate, which is
                    sometimes polished to obtain abrasion resistant and visually
                    appealing floor for commercial and domestic purposes.
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
                src="assets/img/ServicePage/terrazo.jpg"
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

          <div className="flat-content-wrap style-2 clearfix">
            <div className="item" style={{ width: "100%" }}>
              <div className="inner">
                <div
                  className="themesflat-spacer clearfix"
                  data-desktop={10}
                  data-mobile={10}
                  data-smobile={10}
                />
                <h5 className="title">Why Terrazzo Flooring is Needed?</h5>

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
                          Durability :
                        </span>
                        {"  "}
                        {/* Terrazzo flooring is extremely durable and can withstand
                        heavy foot traffic, making it a long-lasting flooring
                        solution. It is resistant to wear and tear, which is
                        especially crucial in high-traffic commercial and
                        institutional settings. */}
                        Terrazzo is highly stable, and can bear a considerable
                        amount of weight under the foot, so it is a good choice
                        for the floor. Because it is rugged and wears resistant,
                        it is of considerable relevance in high-traffic urban
                        commercial or institutional settings.
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
                          {"  "}
                          Strength :
                        </span>
                        {/* Terrazzo is known for its high compressive strength,
                        making it capable of withstanding heavy loads without
                        cracking or breaking. This strength ensures its
                        resilience in environments with heavy equipment or
                        machinery. */}
                        It is evident that the compressive strength of Terrazzo
                        is high and that it can handle a tremendous load without
                        delamination or cracking. This robustness assures it can
                        withstand very heavy loads or machines.
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
                          Chemical Resistance :
                        </span>
                        {"  "}
                        {/* Terrazzo is resistant to chemicals, acids, and stains,
                        making it suitable for use in laboratories, industrial
                        facilities, and healthcare settings where exposure to
                        various substances is common. */}
                        It can be observed that terrazzo has good chemical and
                        acid resistance, stain resistance, and therefore is
                        suitable for cases where interaction with a blend of
                        materials cannot be avoided (e.g., laboratory,
                        industrial, and medical).
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
                          Low Porosity :
                        </span>
                        {"  "}
                        {/* Terrazzo flooring is relatively low in porosity, which
                        means it is less susceptible to water infiltration and
                        moisture damage. This property is essential for
                        maintaining the structural integrity of the flooring. */}
                        Terrazzo floor is relatively porous, so it is less prone
                        to water penetration and wet damage. In this regard the
                        function is of central importance when relating floor
                        structural continuity.
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
                          Hygienic Properties :
                        </span>
                        {"  "}
                        {/* Terrazzo can be formulated with antimicrobial additives,
                        enhancing its hygienic properties. This is particularly
                        important in healthcare facilities, where maintaining a
                        sterile environment is crucial. */}
                        Antimicrobial agents may be added to terrazzo
                        formulation with good hygiene profile. Firstly, it is a
                        subject of specific relevance to medical environments,
                        since, for practical reasons, an unsterile environment
                        is unacceptable.
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
                        Customization :
                      </span>
                      {"  "}
                      {/* Terrazzo offers a high degree of customization in terms of
                      color, aggregate selection, and design patterns. This
                      flexibility allows architects and designers to create
                      unique and visually appealing flooring designs tailored to
                      the specific needs of a space. */}
                      Using terrazzo, it is possible to make a high
                      personalizability with respect to colour, choice of
                      aggregates, and design motifs. This flexibility enables
                      the architect and designer to build custom, appealing
                      floor plans tailored to the specific requirements of a
                      room space.
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
                        Low Maintenance :
                      </span>
                      {"  "}
                      {/* Terrazzo requires minimal maintenance over its lifespan.
                      Unlike some other flooring materials, it does not need
                      frequent waxing or sealing, reducing long-term maintenance
                      costs. */}
                      Terrazzo requires minimal maintenance over its lifespan.
                      Yet, unlike other floor coverings, it is no longer
                      necessary to wax or seal it periodically, thus reducing
                      the floor's maintenance in the long term.
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
                        Environmental Sustainability :
                      </span>
                      {"  "}
                      {/* Terrazzo can be environmentally friendly when using
                      recycled aggregates or incorporating eco-friendly binders.
                      Its durability also contributes to sustainability by
                      reducing the need for frequent replacements. */}
                      In all concrete, ecofriendly, using recycled aggregates or
                      eco friendly binders, also referred to as ground
                      constituents, are applicable to terrazzo. Because of its
                      degradation resistance, in addition, it contributes to
                      sustainability by decreasing the replacement rate.
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
                        Fire Resistance :
                      </span>
                      {"  "}
                      {/* Terrazzo has inherent fire-resistant properties, making it
                      a safe choice for spaces where fire safety is a concern. */}
                      Because of the inherent fire resisting property of
                      terrazzo, it can be used in fire safety-equipped
                      environments.
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
                        Noise Reduction :
                      </span>
                      {"  "}
                      {/* Terrazzo can be designed to have sound-absorbing
                      properties, helping to reduce noise levels in commercial
                      and public spaces. */}
                      The sound absorbing performance can be engineered into the
                      terrazzo to minimise noise in stores and public areas.
                    </span>
                  </span>
                </div>
              </div>
            </div>
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
              <h5 className="title">Terrazzo Flooring Images :</h5>
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
                                src="assets\img\ServicePage\terrazoImage1.jpg"
                                alt="terrazoflooring"
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
                                src="assets\img\ServicePage\terrazoImage2.jpg"
                                alt="terrazoflooring"
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
                                src="assets\img\ServicePage\terrazoImage1.jpg"
                                alt="terrazoflooring"
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
                                src="assets\img\ServicePage\terrazoImage2.jpg"
                                alt="terrazoflooring"
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
                                src="assets\img\ServicePage\terrazoImage1.jpg"
                                alt="terrazoflooring"
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
                  Terrazzo flooring is needed in various applications and
                  settings.
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
                          Commercial Buildings :
                        </span>
                        {"  "}
                        {/* Terrazzo is a popular choice for commercial spaces,
                        including office buildings, shopping malls, and
                        airports, where it can withstand heavy foot traffic
                        while offering an elegant appearance. */}
                        Terrazzo is a robust concrete floor covering suitable to
                        be used in large areas, such as office buildings,
                        shopping malls and airports where it is both robust
                        enough to withstand heavy traffic, but also very
                        sophisticated.
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
                          Educational Institutions :
                        </span>
                        {"  "}
                        {/* Schools, colleges, and universities often use terrazzo
                        flooring in hallways, common areas, and auditoriums
                        because of its durability and low maintenance
                        requirements. */}
                        The use of terrazzo pavement in floors of halls, rooms,
                        and in auditoriums in schools, colleges and universities
                        is frequent owing to its durability and the relative
                        simplicity with which it can be maintained.
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
                          Healthcare Facilities :
                        </span>
                        {"  "}
                        {/* Terrazzo’s hygienic properties and ease of cleaning make
                        it a preferred flooring option in hospitals, clinics,
                        and laboratories. */}
                        As a floor covering, terrazzo has made the hygienic
                        qualities and scrubability of its surface an option as a
                        floor covering in medical facilities, clinics, and
                        laboratories.
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
                          Residential Homes :
                        </span>
                        {"  "}
                        {/* Terrazzo can be found in upscale residential homes,
                        particularly in entryways, kitchens, and bathrooms,
                        adding a touch of luxury and durability. */}
                        For example, terrazzo is found, e.g., in the entrance
                        hall, the kitchen and the bathroom of luxury residential
                        homes, and it imparts a sense of luxury and robustness.
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
                          Public Transportation Hubs :
                        </span>
                        {"  "}
                        {/* Bus terminals, train stations, and airports use terrazzo
                        flooring in waiting areas and concourses due to its
                        ability to withstand heavy foot traffic. */}
                        Floor slabs made from terrazzo are used on the
                        concourses of bus terminals, train stations and
                        airports, and on the waiting halls of airports and
                        railway terminals because of its strength against load.
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
                        Restaurants and Hospitality :
                      </span>
                      {"  "}
                      {/* Restaurants, bars, hotels, and resorts often opt for
                      terrazzo flooring to create a visually appealing and
                      durable environment for guests. */}
                      Restaurants, bars, hotels and resorts,. If, for instance,
                      people have a preference for terrazzo surfaces because
                      those surfaces are good looking, durable, and practical.
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
                        Retail Stores :
                      </span>
                      {"  "}
                      {/* Many retail establishments use terrazzo for its aesthetic
                      flexibility and the ability to create unique branding
                      through custom designs. */}
                      Using of terrazzo, for example, retail shop floor has been
                      extremely popular because of its design versatility and
                      its potential (use of) design movement from playful
                      aesthetics to completely new branding, both on a personal
                      basis.
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
                        Museums and Cultural Institutions :
                      </span>
                      {"  "}
                      {/* Terrazzo’s durability and customization options make it a
                      suitable choice for museums, art galleries, and cultural
                      centers. */}
                      Due to its robustness and ease of personalisation,
                      terrazzo is now positioned to act as a scale model,
                      remodel museums, art galleries and cultural buildings.
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
                        Government Buildings :
                      </span>
                      {"  "}
                      {/* Government offices, courthouses, and municipal buildings
                      may use terrazzo flooring due to its longevity and
                      professional appearance. */}
                      Architectural features, e.g., courthouses and municipal
                      office structures can be tiled with terrazzo due to its
                      toughness and aesthetic merit.
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
                        Industrial Facilities :
                      </span>
                      {"  "}
                      {/* In industrial settings where durability and resistance to
                      chemicals are essential, terrazzo flooring is chosen for
                      manufacturing plants and warehouses. */}
                      Terrazzo flooring is chosen for use in production
                      facilities and storage facilities due to its need for
                      toughness and chemical resistance.
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
                        Sports Facilities :
                      </span>
                      {"  "}
                      {/* Some sports facilities and gymnasiums use terrazzo
                      flooring in entryways and common areas for its durability
                      and low maintenance requirements. */}
                      The need for stable floor cover and a straightforward
                      maintenance routine has led to an exponential increase in
                      the number of sport facility and gymnasium floor coverings
                      using terrazzo flooring in entrance, lobby and common
                      areas.
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
                        Hotels and Resorts :
                      </span>
                      {"  "}
                      {/* Terrazzo can be found in upscale hotels and resorts, often
                      in lobbies, corridors, and spa areas, to create a
                      luxurious and inviting atmosphere. */}
                      Terrazzo is actually very common in luxury hotels and
                      resorts, often as the flooring in lobbies, corridors and
                      spa areas to create a luxurious and welcoming atmosphere.
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
                        Public Spaces :
                      </span>
                      {"  "}
                      {/* Terrazzo is sed in various public spaces, including
                      libraries, community centers, and convention centers, due
                      to its ability to withstand heavy use and its aesthetic
                      appeal. */}
                      Terrazzo is located in a variety of public spaces,
                      including libraries, community halls, and convention
                      centers, due to its durability to heavy traffic, and is a
                      visual pleasure.
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

export default SiteContentTerrazoFlooring;
