import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
class SiteContentQuartzFlooring extends Component {
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
            Quartz Flooring | Quartz Epoxy Floor | Quartz Floor Coating
          </title>
          <meta
            name="description"
            content="Quartz Flooring combines the durability of epoxy with the beauty of quartz aggregates, creating a strong, attractive surface. Ideal for high-traffic areas, it offers resistance to wear, stains, and chemicals while providing a seamless, low-maintenance finish."
          />
          <meta name="author" content="Chem Coats" />
          <meta name="robots" content="index, follow" />
          <link
            rel="canonical"
            href=" https://www.chemcoats.com/quartz-flooring"
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
                    QUARTZ FLOORING
                  </h1>
                  <div className="sep has-width w80 accent-bg margin-top-20 clearfix" />
                  <p className="sub-heading margin-top-33 line-height-24">
                    {/* Quartz flooring is a high-density, engineered flooring
                    material composed of natural quartz crystals and polymer
                    resins, offering exceptional durability and resistance to
                    abrasion, making it an ideal choice for commercial and
                    high-traffic residential applications. */}
                    Quartz flooring is a high-abrasive, engineered floor
                    covering material which is made of real natural quartz
                    crystals and a polymer resin building block, and has
                    superior abrasion resistance and thus is suitable for
                    commercial and high-traffic residential environments.
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
                src="assets/img/ServicePage/Quartz2.png"
                alt="Quartz-Flooring-image"
                title="Quartz-Flooring"
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
                <h5 className="title">Importance of Quartz Flooring : </h5>

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
                          Durability :
                        </span>{" "}
                        {/* Quartz flooring is known for its remarkable durability,
                        making it suitable for high-traffic areas such as
                        commercial spaces, airports, and shopping centers. Its
                        resistance to wear and tear ensures a longer lifespan
                        compared to many other flooring options. */}
                        Quartz flooring is known to be extremely robust which
                        gives it a strong fit for high traffic areas of business
                        settings, airports, and shopping malls. It holds up well
                        against wear and tear lasting longer than many other
                        floor types.
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
                          Resistance to Stains and Chemicals :
                        </span>{" "}
                        {/* Quartz flooring is highly resistant to stains, spills,
                        and chemicals. This property makes it ideal for use in
                        kitchens, laboratories, and manufacturing facilities
                        where spills and chemical exposure are common. */}
                        Quartz floor is highly resistant to staining, spills,
                        and chemicals. This feature is suitable for application
                        to kitchens, laboratories, and manufacturing to
                        environments in which spills and chemical contamination
                        are of frequent occurrence.
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
                          Hygienic :
                        </span>{" "}
                        {/* Quartz flooring is non-porous, preventing the absorption
                        of liquids and the growth of bacteria and mold. This
                        characteristic makes it a preferred choice for
                        healthcare facilities, food processing areas, and
                        pharmaceutical labs. */}
                        Quartz flooring is non-porous and does not absorb
                        liquids and bacteria and mold. This feature makes it of
                        high interest for healthcare, food processing and
                        pharmaceutical laboratories.
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
                          Aesthetic Appeal :
                        </span>{" "}
                        {/* Quartz flooring offers a wide range of design options,
                        with various colors and patterns available. It can mimic
                        the appearance of natural stone or create unique,
                        eye-catching designs, enhancing the aesthetics of
                        residential and commercial spaces. */}
                        Quartz flooring provides many design possibilities, with
                        a variety of colours and patterns to consider. It can be
                        observed to try and simulate the look of natural stone
                        or to generate completely new, original shapes, with
                        high aesthetic implications to the architecture of
                        residential and commercial buildings.
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
                          Low Maintenance :
                        </span>{" "}
                        {/* Easy to clean and maintain, quartz flooring reduces the
                        long-term maintenance costs associated with other
                        flooring materials. */}
                        Quartz flooring is also relatively easy to clean and
                        maintain, thus providing a lower long-term maintenance
                        cost than some of the other flooring materials.
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
                        Moisture Resistance :
                      </span>{" "}
                      {/* Quartz flooring is moisture-resistant, making it suitable
                      for bathrooms, laundry rooms, and other areas prone to
                      damp conditions. It helps prevent water damage and ensures
                      a longer-lasting floor. */}
                      Due to its water resistance it is possible to use quartz
                      flooring in bathroom, laundry rooms or other wet rooms to
                      avoid water damage and extend the lifetime of the
                      flooring.
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
                        Environmentally Friendly :
                      </span>{" "}
                      {/* Some quartz flooring products are designed to be
                      eco-friendly, using recycled materials and low-VOC
                      (volatile organic compound) resins, contributing to
                      sustainable building practices. */}
                      Certain of the quartz-based flooring products are also
                      eco-friendly with recycled materials and low-VOC (volatile
                      organic compound) resins which promote sustainable
                      construction practices.
                    </span>
                  </span>
                </div>
              </div>
              {/* <div className="themesflat-list has-icon style-1 icon-left size-16 clearfix">
                <div className="inner">
                  <span className="item">
                    <span className="icon">
                      <i className="fa fa-check-circle" />
                    </span>
                    <span className="text">
                      Seamless Surface: Epoxy provides a seamless surface that
                      prevents dust and contaminants from settling into cracks
                      or crevices, ensuring a cleaner and safer workspace.
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
                      Quick Installation: Epoxy flooring can be applied
                      relatively quickly, minimizing downtime in industrial
                      operations and allowing for faster project completion.
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
                      Environmental Benefits: Many epoxy coatings are low in
                      volatile organic compounds (VOCs), making them
                      environmentally friendly and compliant with sustainability
                      goals.
                    </span>
                  </span>
                </div>
              </div> */}
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
                          alt="Quartz-Flooring-image"
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
                <h5 className="title"></h5>

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
                          Commercial Spaces :
                        </span>{" "}
                        {/* Shopping malls, hotels, restaurants, and office
                        buildings benefit from quartz flooring’s durability and
                        aesthetics. */}
                        Durable quartz flooring is a great addition for shopping
                        malls, hotels, restaurants and office buildings.
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
                          Residential Homes :
                        </span>{" "}
                        {/* Quartz flooring can be used in kitchens, bathrooms,
                        basements, and living areas, providing a durable and
                        stylish flooring option for homeowners. */}
                        Quartz flooring may be installed in kitchens, bathrooms,
                        basements, and living spaces and provides a hard,
                        attractive floor option for homeowners.
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
                          Healthcare Facilities :
                        </span>{" "}
                        {/* Hospitals and clinics choose quartz flooring for its
                        hygienic properties and resistance to chemicals. */}
                        Quartz flooring is also cheap (ie, it lasts longer less
                        needs replacing than other floor coverings such as
                        ceramic tiles, mosaic tiles or cement floors which can
                        be painted) and hospitals and clinics use it because it
                        is hygienic (ie, it stops contamination) and has
                        chemical resistance (ie, it helps or can mask the
                        masking of other pollutants which have been introduced
                        into many hospitals and clinics over the past decades
                        due to inadequate disposal of medical waste).
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
                          Industrial Facilities :
                        </span>{" "}
                        {/* Manufacturing plants and warehouses use quartz flooring
                        to withstand heavy machinery, chemical exposure, and
                        high foot traffic. */}
                        Factories and warehouses especially select quartz
                        flooring, as it is durable enough for working heavy
                        machinery, chemical environment and high foot pressure.
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
                        Educational Institutions :
                      </span>{" "}
                      {/* Schools and universities appreciate the low maintenance
                      and longevity of quartz flooring in classrooms and
                      corridors. */}
                      Schools and universities like the low maintenance and long
                      life of quartz flooring in classrooms and corridors.
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
                        Food Service :
                      </span>{" "}
                      {/* Quartz flooring is suitable for commercial kitchens and
                      food processing facilities due to its resistance to
                      staining and moisture. */}
                      Quartz flooring is suitable for commercial kitchens and
                      food processing facilities due to its resistance to
                      staining and moisture.
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
                        Laboratories :
                      </span>{" "}
                      {/* Research labs and pharmaceutical facilities require the
                      hygienic and chemical-resistant properties of quartz
                      flooring. */}
                      Quartz flooring has hygienic and chemical-resistant
                      properties, which is essential in a research laboratory or
                      a pharmaceutical facility.
                    </span>
                  </span>
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
                  <h5 className="title">Quartz Flooring Images :</h5>
                  <div
                    className="themesflat-spacer clearfix"
                    data-desktop={10}
                    data-mobile={10}
                    data-smobile={10}
                  />
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
                                    src="assets\img\ServicePage\Quartz3-768x697.png"
                                    alt="Quartz-Flooring-image"
                                    title="Quartz-Flooring"
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
                                    src="assets\img\ServicePage\Quartz-flooring-2-1.png"
                                    alt="Quartz-Flooring-image"
                                    title="Quartz-Flooring"
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
                                    src="assets\img\ServicePage\quartz-Flooring.jpeg"
                                    alt="Quartz-Flooring-image"
                                    title="Quartz-Flooring"
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
                                    src="assets\img\ServicePage\Quartz3-768x697.png"
                                    alt="Quartz-Flooring-image"
                                    title="Quartz-Flooring"
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
                                    src="assets\img\ServicePage\Quartz-flooring-2-1.png"
                                    alt="Quartz-Flooring-image"
                                    title="Quartz-Flooring"
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

export default SiteContentQuartzFlooring;
