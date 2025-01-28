import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
class SiteContentCarParkDeckFlooring extends Component {
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
          <title>Car Parking Floor | Car Parking Epoxy Flooring</title>
          <meta
            name="description"
            content="Car Parking Epoxy Flooring offers durable, easy-to-clean surfaces for parking garages and lots. Resistant to oil, chemicals, and wear, it ensures a long-lasting, aesthetically pleasing solution for high-traffic parking areas."
          />
          <meta
            name="keywords"
            content="Car Park Deck Flooring, Abrasion-Resistant Flooring, Durable Flooring, Parking Structure Flooring, Heavy Load Flooring, Vehicular Traffic Flooring"
          />
          <meta name="author" content="Your Company Name" />
          <meta name="robots" content="index, follow" />
          {/* <link
            rel="canonical"
            href="https://chemcoats.com/car-park-deck-flooring"
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
                    CAR PARK DECK FLOORING
                  </h1>
                  <div className="sep has-width w80 accent-bg margin-top-20 clearfix" />
                  <p className="sub-heading margin-top-33 line-height-24">
                    {/* Car park deck flooring is typically engineered with a
                    high-strength, abrasion-resistant surface coating to
                    withstand the heavy loads, vehicular traffic, and
                    environmental conditions encountered in parking structures */}
                    Car park deck flooring is often engineered with a strong,
                    abrasion-resistant surface coating to resist loads,
                    vehicular traffic, and environmental conditions prevalent in
                    parking structures
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
                src="assets/img/ServicePage/car-park-flooring.jpg"
                alt="Car-park-deck-flooring-image"
                title="Car park deck flooring"
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
              {/* Car park deck flooring is a critical component of modern parking
              structures. Engineered for durability and safety, it features a
              robust surface coating that resists abrasion and chemical damage.
              This specialized flooring is designed to withstand the constant
              load and traffic of vehicles, ensuring long-term structural
              integrity. Its non-slip properties and resistance to environmental
              factors make it an essential choice for optimizing both safety and
              longevity in parking facilities. */}
              Car park deck flooring is a critical component of modern parking
              structures. Engineered for durability and safety, it features a
              robust surface coating that resists abrasion and chemical damage.
              This specialized flooring is designed to withstand the constant
              load and traffic of vehicles, ensuring long-term structural
              integrity. Its non-slip properties and resistance to environmental
              factors make it an essential choice for optimizing both safety and
              longevity in parking facilities.
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
                  What is the significance of car park flooring?
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
                          {" "}
                          Optimized Space Utilization :{" "}
                        </span>
                        {/* Car park decks efficiently maximize the use of available
                        land, allowing multiple vehicles to park vertically and
                        horizontally, reducing the need for extensive
                        ground-level parking. */}
                        Efficient parking decks, the vertical parking as well as
                        the horizontal allows the utilization of space available
                        over an area thus parking up numerous cars rather than
                        on more expansive ground floors.
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
                          Urban Planning :{" "}
                        </span>
                        {/* They contribute to urban planning by minimizing the
                        footprint of parking areas, which helps cities utilize
                        space more effectively. */}
                        It saves parking spaces; a car has its minimum area so
                        they offer better urban designing, hence urban
                        utilization.
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
                          Enhanced Safety :{" "}
                        </span>
                        {/* These structures often include security measures like
                        lighting, surveillance, and controlled access points,
                        improving the safety and security of parked vehicles and
                        their owners. */}
                        Many of these facilities are designed with lighting,
                        surveillance systems, and secured entry and exit points,
                        hence making the parking area and vehicle owners safer
                        and more secure.
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
                          Weather Protection :{" "}
                        </span>
                        {/* Multi-level parking structures provide shelter from
                        adverse weather conditions such as rain, snow, and
                        extreme temperatures, helping to preserve the condition
                        of vehicles. */}
                        Multi-level car parks provide an environment free from
                        adverse weather, such as rain, snow, or extreme
                        temperatures, to protect vehicles' conditions.
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
                          Convenience :{" "}
                        </span>
                        {/* Car park decks offer convenient and accessible parking
                        options, reducing the time and effort required to find
                        parking spaces. */}
                        Decks on a car park allow the people convenient access
                        to a place of parking while avoiding unnecessary
                        searching and long-time waits to obtain an appropriate
                        place for their automobiles.
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
                        Reduced Traffic Congestion :{" "}
                      </span>
                      {/* They help reduce on-street parking, leading to improved
                      traffic flow and reduced congestion in urban areas. */}
                      Car decks free space on the streets, thus allowing easy
                      flow of vehicle traffic through towns with minimal
                      congestion.
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
                        Environmental Benefits :{" "}
                      </span>
                      {/* By minimizing land use and promoting shared parking
                      spaces, car park decks can support sustainable urban
                      development and reduce urban sprawl. */}
                      Car parks minimize land use and allow for shared parking
                      spaces, thus allowing for sustainable urban development
                      reductions in urban sprawl.
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
                        Economic Benefits :{" "}
                      </span>
                      {/* They generate revenue for property owners and local
                      governments, contributing to the financial sustainability
                      of urban infrastructure projects. */}
                      Car decks bring in revenue for property owners and local
                      governments that further contribute to the financial
                      viability of urban infrastructure projects.
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
                          alt="Car-park-deck-flooring-image"
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
                  Why Consider ChemCoats For Car Park Flooring?
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
                        With, over 15 years of experience in providing
                        Industrial Dielectric flooring services across India we
                        pride ourselves on offering expert guidance and paying
                        attention to every detail.
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
                        Our top priority is ensuring 100% transparency and
                        customer satisfaction.
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
                        We are committed to delivering a flooring system that is
                        designed for lasting performance thanks, to our
                        exceptional craftsmanship.
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
                        At Chemcoats our core vision revolves around meeting all
                        the flooring requirements of our valued clients and
                        providing service.
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
                        We specialize in managing time projects and plant
                        shutdowns guaranteeing the timely completion of projects
                        through the expertise of our skilled team. Furthermore
                        our support extends beyond project completion as we
                        continuously strive to meet our clients needs and ensure
                        their satisfaction.
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              {/* <div className="themesflat-list has-icon style-1 icon-left size-16 clearfix">
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
              </div> */}
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
              <h5 className="title">Car Park Deck Flooring Images :</h5>
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
                                alt="Car-park-deck-flooring-image"
                                title="Car park deck flooring"
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
                                alt="Car-park-deck-flooring-image"
                                title="Car park deck flooring"
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
                                alt="Car-park-deck-flooring-image"
                                title="Car park deck flooring"
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
                                alt="Car-park-deck-flooring-image"
                                title="Car park deck flooring"
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
                                alt="Car-park-deck-flooring-image"
                                title="Car park deck flooring"
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
                  Advantages of chemcoats Car Park Deck flooring
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
                          Structural Integrity :{" "}
                        </span>
                        {/* Car park deck flooring is engineered to support heavy
                        loads, providing long-term structural stability and
                        safety for parked vehicles and the structure itself. */}
                        Car park deck flooring is designed to withstand heavy
                        weights, providing assured structural stability and
                        security to parked automobiles and the structural
                        element.
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
                          Durability :{" "}
                        </span>
                        {/* These floors are constructed with robust materials and
                        coatings that withstand the wear and tear caused by
                        vehicular traffic and exposure to environmental factors. */}
                        These floors are composed of robust materials and
                        coatings proven to resist disturbance and damages
                        through vehicular traffic and environmental exposure.
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
                          Corrosion Resistance :{" "}
                        </span>
                        {/* Car park deck flooring is designed to resist corrosion
                        from salt, water, and chemicals, making it ideal for
                        regions with harsh weather or de-icing agents. */}
                        The car park deck flooring is designed to resist
                        corrosion from salt, water, and chemicals, making it
                        best for regions exposed to harsh weather or de-icing
                        agents.
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
                          Waterproofing :{" "}
                        </span>
                        {/* Many car park deck flooring systems incorporate
                        waterproofing properties to prevent water infiltration,
                        protecting the structural integrity of the parking
                        facility. */}
                        Most commonly used waterproofing features are
                        incorporated in many car park deck flooring systems to
                        avoid any water entering which could affect the
                        structural quality of the parking facility.
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
                          Seamless Installation :{" "}
                        </span>
                        {/* The seamless application of car park deck flooring
                        eliminates joints and seams where water and contaminants
                        could penetrate, ensuring a watertight and durable
                        surface. */}
                        Car park deck flooring is extremely smooth and seamless
                        with no joints or cracks, where water or contaminants
                        can penetrate. It has an altogether seamless surface
                        with an everlasting water-impermeable feature.
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
                          Chemical Resistance :{" "}
                        </span>
                        {/* It is resistant to chemicals such as oils, fuels, and
                        solvents, reducing the risk of damage and staining from
                        vehicle fluids. */}
                        It can resist damage and staining from vehicle fluids by
                        oils, fuels, and solvents.
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
                          Low Maintenance :{" "}
                        </span>
                        {/* Car park deck flooring typically requires minimal
                        maintenance, saving time and costs over its lifespan. */}
                        Car park deck flooring has low maintenance that will
                        require minimal time and cost in its lifetime.
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
                          Skid Resistance :{" "}
                        </span>
                        {/* These floors can be designed with anti-slip properties
                        to enhance safety for both pedestrians and vehicles,
                        reducing the risk of accidents in the parking structure. */}
                        These floors can be designed with anti-slip properties
                        to enhance safety for both pedestrians and vehicles,
                        reducing the risk of accidents in the parking structure.
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              {/* <div className="themesflat-list has-icon style-1 icon-left size-16 clearfix">
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
              </div> */}
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

export default SiteContentCarParkDeckFlooring;
