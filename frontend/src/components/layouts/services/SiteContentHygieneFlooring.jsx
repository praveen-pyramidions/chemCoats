import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
class SiteContentHygieneFlooring extends Component {
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
          <title>Hygiene Flooring | Hygienic Floor Covering</title>
          <meta
            name="description"
            content="Hygiene Flooring is designed to meet the strict cleanliness and safety standards of food processing, healthcare, and laboratory environments. Non-porous, slip-resistant, and easy to clean, it ensures a sterile, low-maintenance surface for high-traffic, contamination-sensitive areas."
          />
          <meta
            name="keywords"
            content="Hygiene Flooring, Sanitary Flooring, Easy-to-Clean Flooring, Non-Porous Flooring, Seamless Flooring, Healthcare Flooring, Food Processing Flooring"
          />
          <meta name="author" content="Your Company Name" />
          <meta name="robots" content="index, follow" />
          <link
            rel="canonical"
            href=" https://chemcoats.com/di-hygiene-flooring"
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
                    HYGIENE FLOORING
                  </h1>
                  <div className="sep has-width w80 accent-bg margin-top-20 clearfix" />
                  <p className="sub-heading margin-top-33 line-height-24">
                    {/* Hygiene flooring is engineered with non-porous materials and
                    seamless installation to prevent the infiltration of
                    contaminants, ensuring a sanitary and easy-to-clean surface,
                    making it ideal for healthcare facilities and food
                    processing plants. */}
                    Hygiene flooring is engineered with non-porous material and
                    seamless installation to prevent any infiltration of
                    contaminants, thus maintaining a sanitary and clean surface.
                    In fact, the surface is ideal for healthcare facilities as
                    well as food processing plants.
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
                src="assets/img/ServicePage/e88e6e23e4cb4e46a4b9fb860b085071-1-1024x579.jpg"
                alt="Hygiene-Flooring-image"
                title="Hygiene Flooring"
                className="ServiceIDpAGEiMAGE"
              />
            </div>
          </div>
          {/* <div
            className="themesflat-spacer clearfix"
            data-desktop={39}
            data-mobile={39}
            data-smobile={39}
          /> */}
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
                <h5 className="title">Why Hygiene flooring is important ?</h5>
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
                        <span
                          style={{ fontWeight: "500", color: "#000" }}
                        ></span>
                        {/* Hygiene flooring plays a crucial role in various
                        industries and settings, offering a range of technical
                        benefits that contribute to maintaining clean and safe
                        environments. Whether in healthcare facilities, food
                        processing plants, laboratories, or even residential
                        kitchens, hygiene flooring is designed to meet stringent
                        standards and deliver essential technical advantages. */}
                        Hygiene flooring applications are paramount in numerous
                        industries and areas where it offers technical benefits
                        to ensure a clean and safe environment. Whether a
                        healthcare facility, food processing plant, laboratory,
                        or a residential kitchen, hygiene flooring is designed
                        to meet the highest standards and deliver those
                        essential technical advantages.
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
                          Antimicrobial Properties :
                        </span>{" "}
                        {/* Hygiene flooring materials are often engineered with
                        antimicrobial additives. These additives inhibit the
                        growth of bacteria, mold, and fungi, helping to prevent
                        the spread of infections and illnesses. In healthcare
                        settings, this is particularly vital for patient safety. */}
                        Hygiene flooring materials are frequently designed with
                        antimicrobial additives. These additives help prevent
                        the growth of bacteria, molds, and fungi, aiding in the
                        prevention of spreading infections and diseases. In the
                        healthcare institutions, this is particularly critical
                        for patient safety.
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
                          Easy to Clean and Maintain :
                        </span>{" "}
                        {/* Hygiene flooring is designed to be easily cleaned and
                        sanitized. Its smooth, non-porous surface prevents dirt
                        and contaminants from getting trapped, allowing for
                        efficient cleaning with standard disinfectants and
                        cleaning agents. This is essential for meeting hygiene
                        and sanitation standards in healthcare, food processing,
                        and pharmaceutical industries. */}
                        Hygiene flooring has been designed explicitly so that
                        cleaning and sanitizing are easy. Because the surface is
                        smooth and non-porous, dirt and contaminants are not
                        entrapped and can be cleaned very conveniently using
                        common disinfectants and cleaning agents.This is very
                        important when it comes to meeting hygiene and
                        sanitation standards within institutions related to
                        healthcare, food processing, and pharmaceutical
                        industries.
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
                          Chemical Resistance :
                        </span>{" "}
                        {/* Many hygiene flooring materials are resistant to a wide
                        range of chemicals, including harsh disinfectants and
                        cleaning agents. This makes them suitable for
                        environments where chemical spills are common, such as
                        laboratories and industrial facilities. */}
                        Most hygiene flooring materials have some degree of
                        resistance to a wide range of chemicals, including harsh
                        disinfectants and cleaning agents. They can thus be
                        suitably applied in environments where chemical spills
                        are common, such as labs and industries.
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
                          Seamless Installation :
                        </span>{" "}
                        {/* Hygiene flooring can be installed seamlessly, minimizing
                        the number of joints and seams where dirt and bacteria
                        can accumulate. This is crucial in environments where
                        cleanliness is paramount, as it reduces the risk of
                        contamination. */}
                        Hygiene flooring can be laid down seamlessly, thus
                        reducing the number of joints and seams where dirt and
                        bacteria can flourish. This is critical for areas where
                        cleanliness is of utmost concern as this reduces the
                        risk of contamination.
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
                        Slip Resistance :
                      </span>{" "}
                      {/* A technical aspect often overlooked is slip resistance.
                      Hygiene flooring is designed to provide a safe and secure
                      footing, even in wet or greasy conditions. This is
                      particularly important in commercial kitchens and food
                      processing areas, where slip and fall accidents can be a
                      significant hazard. */}
                      Slip resistance is a technical property frequently
                      neglected. Hygiene flooring is designed to give a good
                      anti-slip surface roof on which to walk during wet or
                      greasy conditions. This is especially important in
                      commercial kitchens and food processing areas, where falls
                      could be a major hazard.
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
                        Durability :
                      </span>{" "}
                      {/* Hygiene flooring is built to withstand heavy foot traffic,
                      machinery, and equipment, ensuring long-term durability.
                      It can resist wear and tear, maintaining its hygienic
                      properties over time. */}
                      Hygiene flooring allows heavy foot traffic, machines, and
                      equipment, standing the test of time. It resists all forms
                      of wear and tear while still maintaining hygiene
                      attributes over time.
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
                        Compliance with Regulations :
                      </span>{" "}
                      {/* Many industries are subject to stringent regulations and
                      standards governing hygiene and sanitation. Hygiene
                      flooring is engineered to meet or exceed these
                      requirements, providing a technical solution that helps
                      businesses and organizations stay in compliance with the
                      law. */}
                      Most sectors have specific regulations and standards on
                      hygiene and sanitation. Hygiene flooring is tailored to
                      meet the requirements, which would thus technically help
                      organizations and businesses be compliant with the law.
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
                        Thermal Stability :
                      </span>{" "}
                      {/* In certain settings, hygiene flooring needs to withstand
                      extreme temperature variations, such as in industrial
                      kitchens or cold storage facilities. Specialized hygiene
                      flooring materials can maintain their integrity and
                      hygiene properties in these conditions. */}
                      Hygiene floors must remain impervious to variations in
                      temperature in certain environments, such as in industrial
                      kitchens or cold operates. Special hygienic floor
                      coverings are designed to hold their integrity and
                      hygienic properties in those conditions.
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
                        Aesthetic Options :
                      </span>{" "}
                      {/* Hygiene flooring doesn’t have to sacrifice aesthetics for
                      functionality. It comes in a variety of colors and
                      designs, allowing businesses to create visually appealing
                      spaces while maintaining high hygiene standards. */}
                      Hygiene flooring does not have to forego aesthetics for
                      functionality. It has various colors and layouts, allowing
                      businesses to build visually attractive spaces while
                      keeping up high standards of hygiene.
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
          {/* <div
            className="themesflat-spacer clearfix"
            data-desktop={37}
            data-mobile={35}
            data-smobile={35}
          />
          <div className="row-services">
            <div className="container">
              <h5 className="title">Epoxy Flooring Images</h5>
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
          </div> */}
          {/* Image Slider */}
          <div
            className="themesflat-spacer clearfix"
            data-desktop={37}
            data-mobile={35}
            data-smobile={35}
          />
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
                  Why Choose ChemCoats For Epoxy Flooring?
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
                        15 years of Industrial Epoxy flooring services in India
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
          /> */}
        </div>
      </div>
    );
  }
}

export default SiteContentHygieneFlooring;
