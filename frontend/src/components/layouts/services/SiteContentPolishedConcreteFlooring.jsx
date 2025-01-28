import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
class SiteContentPolishedConcreteFlooring extends Component {
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
          <title>Polished Concrete Flooring | Polished Cement Floors</title>
          <meta
            name="description"
            content=" Polished Concrete Flooring offers a sleek, durable surface with a high-gloss finish. Ideal for commercial and residential spaces, it’s low-maintenance, stain-resistant, and provides a modern, long-lasting flooring solution."
          />
          <meta name="author" content="Your Company Name" />
          <meta name="robots" content="index, follow" />
          {/* <link
            rel="canonical"
            href="https://chemcoats.com/di-polished-concrete-flooring"
          /> */}
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
                    POLISHED CONCRETE FLOORING
                  </h1>
                  <div className="sep has-width w80 accent-bg margin-top-20 clearfix" />
                  <p className="sub-heading margin-top-33 line-height-24">
                    {/* Polished concrete is a choice, for flooring because it
                    offers both durability and visual appeal. Achieved by
                    grinding and polishing surfaces this process creates a sleek
                    and shiny finish that not only enhances the overall
                    appearance but also extends the lifespan of the material. */}
                    Polished concrete is a solution for flooring, providing both
                    strength and aesthetics. Accomplished by the grinding and
                    polishing of the surfaces this processing provides a smooth
                    and shiny surface finish, not only improving the general
                    aesthetics but also improving the durability of the
                    material.
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
                src="assets/img/ServicePage/polished-concrete.jpeg"
                alt="Polished-Concreate-Flooring-image"
                title="Polished Concreate Flooring"
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
                <h5 className="title">
                  Why Polished Concrete is important for floors?
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
                          Surface Strength :
                        </span>
                        {"  "}
                        {/* Polished concrete significantly increases the surface
                        strength of the flooring material, making it more
                        resistant to cracking, chipping, and abrasion. */}
                        The surface hardness of floor material is substantially
                        enhanced by using polished concrete, thus the floor is
                        improved in terms of resistance to cracking and
                        chipping, as well as abrasion.
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
                          Dust Reduction :
                        </span>
                        {"  "}
                        {/* The polishing process includes the use of densifiers
                        that harden the concrete, reducing dusting and
                        minimizing the release of concrete particles into the
                        air. */}
                        Polishing process is accompanied by the application of
                        densifiers that harden the concrete, where they reduce
                        dusty effects and the emission of concrete particles
                        into the atmosphere.
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
                          Chemical Resistance :
                        </span>
                        {"  "}
                        {/* Polished concrete is highly resistant to chemical damage
                        from acids, oils, and other substances, making it
                        suitable for environments where chemical spills may
                        occur. */}
                        Polished concrete is very durable against attack of
                        acids, oils and similar aggressive materials and is
                        therefore indicated for areas of potential contamination
                        by chemicals.
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
                          {"  "}
                          Reflectivity :
                        </span>
                        {/* The glossy finish of polished concrete enhances light
                        reflection, reducing the need for artificial lighting
                        and contributing to energy savings. */}
                        The sheen produced in polished concrete by its surface
                        finish adds to the light reflected, thus decreasing the
                        use of artificial light, and, as a consequence, from
                        electricity and energy use.
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
                          Longevity :
                        </span>
                        {"  "}
                        {/* When properly installed and maintained, polished
                        concrete can last for many years, providing a durable
                        and cost-effective flooring solution. */}
                        Polished concrete can last a very long time if properly
                        installed and maintained and offers a strong
                        cost-effective solution for floor covering.
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
                        Cost-Effective :
                      </span>
                      {"  "}
                      {/* Polishing existing concrete surfaces eliminates the need
                      for additional flooring materials, reducing both material
                      costs and installation time. */}
                      Sanding off the surface of existing concrete removes the
                      need for new flooring materials, therefore lowering the
                      cost of materials, as well as time of installation.
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
                        Sustainability :
                      </span>
                      {"  "}
                      {/* Polished concrete promotes sustainability by repurposing
                      existing concrete slabs, reducing waste, and often
                      incorporating eco-friendly products and practices. */}
                      Polished concrete contributes to sustainability by reusing
                      existing concrete slabs, minimizing waste, and frequently
                      using sustainable materials and procedures.
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
                        Customization :
                      </span>
                      {"  "}
                      {/* It offers various design options, including different
                      levels of sheen, decorative scoring, and the ability to
                      incorporate colors or aggregates to achieve specific
                      aesthetics. */}
                      It provides several design possibilities, such as varying
                      levels of gloss, decorative embossing, and the possibility
                      of adding colors or aggregates to realize different
                      aesthetics.
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
                        Enhanced Safety :
                      </span>
                      {"  "}
                      {/* Polished concrete can be treated with anti-slip additives,
                      making it a safe flooring option even in areas prone to
                      moisture or spills. */}
                      Anti-slip agents can be applied to polished concrete,
                      giving the flooring a safe surface for areas in contact
                      with humidity or spills.
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
                        Temperature Control :
                      </span>
                      {"  "}
                      {/* It has thermal mass properties, which can help regulate
                      indoor temperatures, contributing to energy efficiency. */}
                      It also has thermal mass characteristics that can be used
                      for indoor temperature control, thus leading to an
                      increase in energy efficiency.
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
                        Indoor Air Quality :
                      </span>
                      {"  "}
                      {/* Polished concrete does not trap allergens, dust mites, or
                      mold, promoting better indoor air quality. */}
                      Polished concrete does not retain allergens, dust mites
                      and mould and contributes to cleaner indoor air.
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
                        Versatility :
                      </span>
                      {"  "}
                      {/* Suitable for a wide range of applications, including
                      residential, commercial, industrial, and institutional
                      settings. */}
                      Suitable for a wide range of applications, including
                      residential, commercial, industrial, and institutional
                      settings.
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
                        Quick Installation :
                      </span>
                      {"  "}
                      {/* Polishing concrete is often faster than installing other
                      flooring types, minimizing downtime during renovations or
                      construction. */}
                      Concrete polishing is generally a quicker process than
                      installing other flooring materials, thereby providing a
                      reduction in renovation or construction downtime.
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
                        LEED Certification :
                      </span>
                      {"  "}
                      {/* Polished concrete can contribute to LEED (Leadership in
                      Energy and Environmental Design) certification points due
                      to its sustainable qualities. */}
                      Polished concrete can gain LEED (Leadership in Energy and
                      Environmental Design) certification points owing to its
                      sustainability properties.
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
                          alt="Polished-Concreate-Flooring-image"
                          className="serviceImaGEMAPDIV"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
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
                <h5 className="title">
                  Some of the important Applications of polished concrete
                  flooring
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
                          Residential Flooring :
                        </span>
                        {"  "}
                        {/* Polished concrete is increasingly popular as a stylish
                        and low-maintenance flooring option in homes, offering a
                        sleek and modern look. */}
                        Polished concrete is becoming mainstream as a stylish
                        and hard-wearing floor covering in homes due to its
                        smooth and stylish appearance.
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
                          Commercial Spaces :
                        </span>
                        {"  "}
                        {/* It is commonly used in retail stores, offices,
                        restaurants, and hotels for its durability, ease of
                        maintenance, and attractive appearance. */}
                        It is commonly used in retail stores, offices,
                        restaurants, and hotels for its durability, ease of
                        maintenance, and attractive appearance.
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
                        {/* Polished concrete is ideal for warehouses, manufacturing
                        plants, and distribution centers due to its ability to
                        withstand heavy machinery, forklift traffic, and
                        chemical exposure. */}
                        Polished concrete is appropriate for warehouses, factory
                        environments, and distribution facilities because of its
                        capability to endure heavy equipment traffic, forklift
                        traffic, and chemical contamination.
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
                          Garages and Automotive Workshops :
                        </span>
                        {"  "}
                        {/* It provides a resilient, easy-to-clean surface that can
                        resist oil, grease, and tire marks. */}
                        It offers a durable, slip-resistant cleaning surface
                        that can be resistant to oil, grease and tire mark.
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
                        {/* Polished concrete is found in schools, universities, and
                        other educational facilities for its longevity and the
                        low maintenance required in high-traffic areas. */}
                        Polished concrete is used throughout schools,
                        universities, and such learning institutions because of
                        its long-lasting nature and minimal maintenance in high
                        usage places.
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
                        Healthcare Facilities :
                      </span>
                      {"  "}
                      {/* Hospitals and medical centers use polished concrete in
                      corridors, waiting areas, and patient rooms due to its
                      clean and hygienic properties. */}
                      Hospitals and medical centers use polished concrete in
                      corridors, waiting areas, and patient rooms due to its
                      clean and hygienic properties.
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
                        Public Spaces :
                      </span>
                      {"  "}
                      {/* Polished concrete is used in museums, art galleries,
                      libraries, and municipal buildings, where its aesthetic
                      qualities and durability are valued. */}
                      Polished concrete is in use in museums, art centres,
                      library, and municipal offices where the aesthetic
                      features and the robustness of concrete are desirable.
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
                        Sports and Recreation :
                      </span>
                      {"  "}
                      {/* Indoor sports facilities, gymnasiums, and recreation
                      centers often choose polished concrete for its resilience
                      and ability to accommodate line markings */}
                      Due to its durability and suitability for line markings,
                      polished concrete is selected by many indoor, sports
                      facilities (e.g., gymnasiums, recreation centers) that use
                      it to demarcate areas.
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
                        Restaurants and Food Service :
                      </span>
                      {"  "}
                      {/* Polished concrete floors are both stylish and easy to
                      clean, making them suitable for commercial kitchens and
                      dining areas. */}
                      Polished concrete floors are both chic and low
                      maintenance, and therefore appropriate for commercial
                      kitchens and restaurants.
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
                        Exhibition and Event Spaces :
                      </span>
                      {"  "}
                      {/* Trade show venues and event centers appreciate the
                      durability and ease of maintenance of polished concrete
                      flooring. */}
                      Trade show halls and convention centers value the strength
                      and ease of care of polished concrete floor.
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
                        Aircraft Hangars :
                      </span>
                      {"  "}
                      {/* Polished concrete can withstand the heavy loads and wear
                      associated with aircraft maintenance and storage. */}
                      Polished concrete can resist heavy loads and wear that
                      occur in the aircraft maintenance and storage process.
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
                        Retail Showrooms :
                      </span>
                      {"  "}
                      {/* Many high-end retail showrooms and boutiques use polished
                      concrete to create a modern and upscale ambiance. */}
                      A number of high-end retail showrooms and boutiques have
                      been constructed with polished concrete as a means to give
                      a modern and sophisticated atmosphere.
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
                        Data Centers :
                      </span>
                      {"  "}
                      {/* Polished concrete can be found in data centers where it
                      helps with static control and provides a clean environment
                      for sensitive equipment. */}
                      In data centres, polished concrete serves as a support for
                      static control and as an uncluttered space for working
                      with delicate equipment.
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
                        Residential Garages :
                      </span>
                      {"  "}
                      {/* Homeowners often choose polished concrete for their garage
                      floors due to its resilience and resistance to automotive
                      fluids. */}
                      Homeowners often choose polished concrete for their garage
                      floors due to its resilience and resistance to automotive
                      fluids.
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
                        Outdoor Spaces :
                      </span>
                      {"  "}
                      {/* In addition to indoor applications, polished concrete can
                      be used for patios, pool decks, and other outdoor areas
                      when properly sealed. */}
                      Besides areas for indoor use, polished concrete has wider
                      uses in outdoor areas such as patios, pool decks and so
                      forth, provided it is sealed properly.
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
                        Green Building Projects :
                      </span>
                      {"  "}
                      {/* Polished concrete is considered a sustainable flooring
                      option and is used in eco-friendly and LEED-certified
                      building projects. */}
                      Polished concrete is considered a sustainable flooring
                      option and is used in eco-friendly and LEED-certified
                      building projects.
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
                      {/* These diverse applications highlight the adaptability and
                      popularity of polished concrete as a flooring solution in
                      both residential and commercial settings. */}
                      These various uses demonstrate the versatility and
                      popularity of finished concrete as a floor covering in
                      domestic and commercial applications.
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
              <h5 className="title">Polished Concrete Flooring : </h5>
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
                                src="assets\img\ServicePage\polish-concrete.jpg"
                                alt="polished Concrete"
                                title="Polished Concreate Flooring"
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
                                src="assets\img\ServicePage\polished-concrete.jpeg"
                                alt="polished Concrete"
                                title="Polished Concreate Flooring"
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
                                src="assets\img\ServicePage\polish-concrete.jpg"
                                alt="polished Concrete"
                                title="Polished Concreate Flooring"
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
                                src="assets\img\ServicePage\polished-concrete.jpeg"
                                alt="polished Concrete"
                                title="Polished Concreate Flooring"
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
                                src="assets\img\ServicePage\polished-concrete.jpeg"
                                alt="polished Concrete"
                                title="Polished Concreate Flooring"
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

export default SiteContentPolishedConcreteFlooring;
