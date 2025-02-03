import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
class SiteContentPolyUrethaneFlooring extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: [
        {
          id: 1,
          text01:
            "One The most popular form of epoxy resin that is used for epoxy coatings is Bisphenol A. Bisphenol A has a honey-liquid consistency and is an extremely versatile resin. Bisphenol A is available in many molecular weights. Their variety of molecular weights is what makes Bisphenol A especially versatile for the epoxy application. Bisphenol A is most widely used for flooring systems, in addition to solid coatings.  Bisphenol A epoxy resin is the most common type for concrete coatings because of its excellent adhesion, toughness, abrasion resistance, and chemical resistance. Due to its especially thick natural consistency, there will commonly be additives and diluents which are added into the Bisphenol-A epoxy formula to enhance workability and adhesion. These additives lessen crosslink density which lowers the chemical resistance.",
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
          <title>Polyurethane Flooring | PU Concrete Flooring</title>
          <meta
            name="description"
            content="Polyurethane Flooring offers a high-performance, durable solution for both commercial and industrial environments. Known for its resistance to wear, chemicals, and UV damage, it provides long-lasting protection and easy maintenance."
          />
          <meta
            name="keywords"
            content="Polyurethane Flooring, Durable Flooring, Stain Resistant Flooring, Protective Flooring, Industrial Flooring, Commercial Flooring"
          />
          <meta name="author" content="Chem Coats" />
          <meta name="robots" content="index, follow" />
          <link
            rel="canonical"
            href="https://www.chemcoats.com/polyurethane-flooring"
          />
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
                    POLYURETHANE FLOORING
                  </h1>
                  <div className="sep has-width w80 accent-bg margin-top-20 clearfix" />
                  <p className="sub-heading margin-top-33 line-height-24">
                    {/* Polyurethane flooring is a type of material that is widely
                    recognized for its strength and long lasting durability. It
                    consists of layers with the layer usually made up of a
                    polyurethane coating. This coating acts as a barrier
                    shielding the floor from damage caused by use, stains and
                    moisture. */}
                    Polyurethane flooring is one of the most widely known
                    materials due to its strength and durability that lasts for
                    long. It comprises layers, where the layer is mostly made of
                    a polyurethane coating. This coating serves as a shield that
                    protects the floor from wear and tear due to usage, stains,
                    and moisture.
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
                src="assets/img/ServicePage/PU1.jpg"
                alt="Polyurethane-flooring-image"
                title="Polyurethane-flooring-image"
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
            {/* <h5 className="title">SERVICE CONSULTANT</h5> */}
            <p>
              {/* Polyurethane flooring is of paramount importance due to its
              exceptional durability, chemical resistance, and versatility. It
              safeguards industrial and commercial spaces from wear, chemical
              exposure, and moisture damage, ensuring longevity and
              cost-efficiency. Its hygienic properties also make it crucial in
              healthcare and food processing facilities, contributing to a safer
              and cleaner environment. In summary, polyurethane flooring is an
              indispensable solution for industries and spaces demanding
              longevity, resilience, and hygiene. */}
              It is essential because it has high durability, chemical
              resistance, and adaptability. It protects industrial and
              commercial premises from wear, chemical attack, and moisture
              damage, with long-lasting and economical benefits. It provides
              hygienic benefits in healthcare and food processing industries,
              leading towards greater hygiene and a safer environment. Put
              simply, polyurethane flooring is the only available solution for
              industries requiring longevity, sustainability, and hygiene.
            </p>
          </div>
          <div
            className="themesflat-spacer clearfix"
            data-desktop={37}
            data-mobile={35}
            data-smobile={35}
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
                <h5 className="title">
                  Significant properties of polyurethane flooring
                </h5>
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
                        <span style={{ fontWeight: "500", color: "#000" }}>
                          Durability and Resilience :{" "}
                        </span>
                        {/* Polyurethane flooring is renowned for its ability to
                        withstand heavy loads, foot traffic, machinery, and
                        equipment movement without deteriorating. This
                        resilience extends its lifespan, reducing the need for
                        frequent repairs or replacements. */}
                        Polyurethane flooring is known for its strength to
                        withstand heavy loads, traffic, machinery, and equipment
                        movement without erosion. This durability prolongs the
                        lifespan of the floor, thus preventing frequent repairs
                        or replacements.
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
                          Chemical Resistance :{" "}
                        </span>
                        {/* It offers exceptional resistance to a broad spectrum of
                        chemicals, including acids, alkalis, solvents, and oils.
                        This property is critical in environments like
                        laboratories, pharmaceutical facilities, and food
                        processing plants, where spillages can occur. */}
                        It offers outstanding resistance to a very broad range
                        of chemicals, including acids, alkalis, solvents, and
                        oils. This property is essential in areas such as
                        laboratories, pharmaceutical establishments, or food
                        processing plants where spillages are possible.
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
                          Slip Resistance :{" "}
                        </span>
                        {/* Safety in the workplace is paramount, and polyurethane
                        flooring can be engineered to provide excellent slip
                        resistance. This is particularly beneficial in areas
                        prone to spills or in industries where workers are
                        constantly on the move. */}
                        Safety is of utmost importance in the workplace, and
                        polyurethane flooring can be engineered to offer
                        excellent slip resistance. It's especially good in areas
                        prone to spills or where workers are always on the move.
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
                          Hygienic and Easy to Clean :{" "}
                        </span>
                        {/* With the option for a seamless installation,
                        polyurethane floors do not harbor bacteria, dust, or
                        mold, making them ideal for sectors where cleanliness is
                        a priority. The surface is also easy to maintain and can
                        withstand aggressive cleaning protocols. */}
                        In the event that a seamless installation is preferred,
                        polyurethane floors do not harbor bacteria, dust, or
                        mold, and thus they find their best fit in sectors that
                        demand maximum hygiene. The surface also can easily
                        stand aggressive cleaning protocols.
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
                          Aesthetic Versatility :{" "}
                        </span>
                        {/* Polyurethane flooring can be customized in a wide range
                        of colors and finishes to suit the aesthetic
                        requirements of any industrial space. This allows for
                        the delineation of safety zones, walkways, and specific
                        work areas. */}
                        Polyurethane flooring can be customized in a very wide
                        range of colors and finishes to suit any aesthetic
                        requirements of an industrial space. It helps to define
                        safety zones, walkways, and specific work areas.
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
                        Comfort and Ergonomics :{" "}
                      </span>
                      {/* The slight give in polyurethane flooring can offer a more
                      comfortable standing experience for workers, potentially
                      reducing fatigue. This ergonomic benefit is an essential
                      consideration for facilities where employees are on their
                      feet for long periods. */}
                      Polyurethane flooring has slight resiliency to ensure
                      greater comfort for standing workers, which equals fatigue
                      reduction. This ergonomic quality has to be a major
                      consideration for those facilities where workers stand for
                      an extended period.
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
                        Noise Reduction :{" "}
                      </span>
                      {/* The elasticity of polyurethane flooring can help absorb
                      sound, contributing to a quieter working environment. This
                      is beneficial in reducing noise pollution in busy
                      industrial settings. */}
                      The elasticity of polyurethane flooring is helpful for the
                      absorption of noise and thus creates a quieter working
                      environment. This in turn reduces noise pollution within
                      an industrialized business.
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
                        Environmental Sustainability :{" "}
                      </span>
                      {/* Modern polyurethane floors are developed with an emphasis
                      on reducing environmental impact. Many options are
                      available with low volatile organic compound (VOC)
                      emissions, supporting industries in their efforts to
                      comply with green standards and ensuring healthier indoor
                      air quality. */}
                      New polyurethane floors are created while considering
                      other environmental problems. There are a lot of options,
                      which would fulfill the criteria with low VOCs and hence,
                      help businesses comply with green standards and improve
                      indoor air quality.
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
          {/* <div
            className="themesflat-spacer clearfix"
            data-desktop={37}
            data-mobile={35}
            data-smobile={35}
          /> */}
          {/* <div className="flat-content-wrap style-2 clearfix">
            <h5 className="title no-letter-spacing">
              TYPES OF EPOXY COMPOSITON
            </h5>
            <div
              className="themesflat-spacer clearfix"
              data-desktop={27}
              data-mobile={27}
              data-smobile={27}
            />
            <div className="themesflat-tabs style-2 title-w170 clearfix">
              <ul className="tab-title clearfix ">
                <li className="item-title active">
                  <span className="inner">Bisphenol A</span>
                </li>
                <li className="item-title">
                  <span className="inner">Bisphenol F</span>
                </li>
                <li className="item-title">
                  <span className="inner">Novolac</span>
                </li>
              </ul>
              <div className="tab-content-wrap clearfix">
                {this.state.tabs.map((data) => (
                  <div className="tab-content" key={data.id}>
                    <div className="item-content">
                      <p>{data.text01}</p>
                      <p>{data.text02}</p>

                      <div className="servicePageImagemap">
                        <img
                          src={data.image}
                          alt="altimage"
                          className="serviceImaGEMAPDIV"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div> */}
          <div
            className="themesflat-spacer clearfix"
            data-desktop={37}
            data-mobile={35}
            data-smobile={35}
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
                <h5 className="title">
                  Polyurethane flooring is utilized across a wide range of
                  industries due to its versatile and resilient characteristics.
                  Here are some of the key sectors that commonly use
                  polyurethane flooring
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
                          Manufacturing :{" "}
                        </span>
                        {/* Due to its durability and resistance to wear and tear,
                        polyurethane flooring is ideal for manufacturing plants
                        where heavy machinery and frequent foot traffic are
                        common. */}
                        Polyurethane flooring is highly suited for manufacturing
                        plants with heavy machinery and frequent foot traffic
                        due to its long life and wear-and-tear resistance.
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
                          Automotive :{" "}
                        </span>
                        {/* Automotive factories and repair shops benefit from
                        polyurethane floors because they resist oil, grease, and
                        chemical spills, and can withstand the weight of
                        vehicles and equipment. */}
                        The automobile factories and repair shops appreciate
                        polyurethane flooring for standing up to oil and grease
                        spills and chemical substances, while also supporting
                        the immense weight of vehicles and heavy machinery.
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
                          Healthcare :{" "}
                        </span>
                        {/* Hospitals and healthcare facilities use polyurethane
                        flooring because it’s easy to clean and maintain a
                        sterile environment, helping prevent the spread of
                        infections. */}
                        Polyurethane flooring is used in hospitals and
                        healthcare facilities because of ease of cleaning and
                        maintenance of a sterile environment to prevent
                        infection.
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
                          Food Processing :{" "}
                        </span>
                        {/* The non-porous surface of polyurethane flooring does not
                        harbor bacteria and resists various organic acids,
                        making it suitable for meat, dairy, and other food
                        processing plants where hygiene is paramount. */}
                        It is suitable for meat and dairy processing plants
                        where sanitation is a top priority, as the polyurethane
                        floor is non-porous and resists different organic acids,
                        preventing accumulation of bacteria.
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
                          Pharmaceuticals :{" "}
                        </span>
                        {/* Similar to healthcare settings, pharmaceutical
                        manufacturing requires sterile conditions, which
                        polyurethane flooring supports by being easy to clean
                        and resistant to contaminants. */}
                        Just as that of their healthcare environment,
                        pharmaceutical manufacturing is done in a sterile
                        environment, hence polyurethane flooring helps with easy
                        clean-up and offers resistance against anything that
                        could contaminate.
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
                        Warehousing and Logistics :
                      </span>{" "}
                      {/* The ability to endure heavy loads, constant forklift
                      traffic, and the weight of stacked goods makes
                      polyurethane flooring a good choice for warehouses and
                      distribution centers. */}
                      For warehouses and distribution centers, polyurethane
                      flooring is ideal, since it can endure heavy loading,
                      continuous forklift traffic, and the weight of stacked
                      loads.
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
                        Retail and Commercial Spaces :
                      </span>{" "}
                      {/* Polyurethane floors are favored in retail environments and
                      commercial spaces for their aesthetic versatility, ease of
                      maintenance, and durability under high foot traffic. */}
                      Polyurethane floors are favored due to their aesthetic
                      flexibility, ease of maintenance, and high durability
                      under heavy foot traffic in retail environments and
                      commercial spaces.
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
                        Educational Facilities :
                      </span>{" "}
                      {/* Schools and universities opt for polyurethane flooring
                      because it can be customized in various colors, is
                      comfortable to walk on, and provides good noise insulation
                      in busy areas. */}
                      Schools and universities prefer polyurethane flooring
                      because customization in colors is offered, it is very
                      comfortable to walk on, and it gives an excellent noise
                      insulation in high-traffic areas.
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
                        Sports Facilities:
                      </span>{" "}
                      {/* Gyms, indoor courts, and fitness centers benefit from the
                      shock absorption, durability, and ease of maintenance that
                      polyurethane flooring offers. */}
                      Polyurethane flooring is shock-absorbing, durable, and
                      easy to maintain for gyms, indoor courts, and fitness
                      centers.
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
              <h5 className="title">Polyurethane Flooring Images</h5>
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
                                src="assets\img\ServicePage\poly-Urathine5.jpg"
                                alt="Polyurethane-flooring-image"
                                title="Polyurethane-flooring-image"
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
                                alt="Polyurethane-flooring-image"
                                title="Polyurethane-flooring-image"
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
                                src="assets\img\ServicePage\poly-Urathine2.jpg"
                                alt="Polyurethane-flooring-image"
                                title="Polyurethane-flooring-image"
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
                                src="assets\img\ServicePage\poly-Urathine3.jpg"
                                alt="Polyurethane-flooring-image"
                                title="Polyurethane-flooring-image"
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
                                src="assets\img\ServicePage\poly-Urathine4.jpg"
                                alt="Polyurethane-flooring-image"
                                title="Polyurethane-flooring-image"
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
                  Why Choose ChemCoats For Polyurethane Flooring?
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
                        17 years of Industrial Polyurethane flooring services in
                        India
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
                        Expert guidance and meticulous attention to every
                        detail.
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
                        100% transparency and customer satisfaction
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
                        Exceptional craftsmanship and a dependable flooring
                        system designed to deliver long-lasting performance
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
                        High-quality installation services with modern equipment
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
                      The core vision of Chemcoats is to fulfill all the
                      industrial flooring requirements of our esteemed clients
                      and deliver unparalleled service
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
                      We excel in managing time-sensitive projects and plant
                      shutdowns
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
                      Guaranteeing on-time completion of projects by our skilled
                      team
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
                      We provide 100% support even after the entire project is
                      finished, ensuring clients needs are always met.
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

export default SiteContentPolyUrethaneFlooring;
