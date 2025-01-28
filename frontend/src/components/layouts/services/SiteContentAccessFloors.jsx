import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
class SiteContentAccessFloors extends Component {
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
          <title>Access Floors | Access Flooring Systems</title>
          <meta
            name="description"
            content="Access Floors provide flexible, raised platforms for easy installation of wiring, cables, and HVAC systems. Ideal for offices, data centers, and commercial spaces, they offer convenient access for maintenance and future upgrades."
          />
          <meta
            name="keywords"
            content="Access Floors, False Floors, Cable Management, Elevated Flooring, HVAC Systems, Chem Coats"
          />
          <meta name="author" content="Chem Coats" />
          <meta name="robots" content="index, follow" />
          {/* <link rel="canonical" href="https://chemcoats.com/access-floors" /> */}
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
                    ACCESS FLOORS
                  </h1>
                  <div className="sep has-width w80 accent-bg margin-top-20 clearfix" />
                  <p className="sub-heading margin-top-33 line-height-24">
                    {/* Access floors, also known as false floors, are elevated
                    flooring systems designed to create a raised platform above
                    a structural floor, providing a space for the distribution
                    of services such as electrical wiring, data cables, and HVAC
                    systems, while facilitating convenient access for
                    maintenance and reconfiguration. */}
                    Access floors, also referred to as false floors, are raised
                    flooring systems designed to provide a raised platform above
                    a structural floor to create an area for distributing
                    services such as electrical wiring, data cables, and HVAC
                    systems, while allowing for easy access for maintenance and
                    reconfiguration.
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
                src="assets/img/ServicePage/access page.jpeg"
                alt="access-floor-ESD"
                title="access-floor-ESD"
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
              {/* Access floors, including server room floors, hub room floors,
              false floors, Unitile floors, and cavity floors, play a crucial
              role in enhancing the safety, efficiency, and overall productivity
              of various industries. These specialized flooring systems are
              designed to create a functional and adaptable space beneath the
              visible floor surface. By lifting the floor above the structural
              slab, they provide a concealed area for the installation of
              essential infrastructure components, such as cabling, wiring, and
              HVAC systems. */}
              Access floors, like server room floors, hub room floors, false
              floors, Unitile floors, and cavity floors, are all important in
              many industries for creating safety, efficiency, and total
              productivity. Access floors are especially designed to form a
              functional, adaptable space that lies beneath the visible floor
              surface. They help create space for the infrastructure necessities
              like cabling, wiring, and HVAC systems, all enclosed under the
              raised floor above the structural slab.
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
                  Benefits of Access Floors in industries
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
                          Cable Management :
                        </span>{" "}
                        {/* Access floors provide efficient cable management by
                        concealing wires, reducing tripping hazards, and
                        enabling accessible maintenance in industries with
                        complex electrical and data requirements. */}
                        The access floor aids in proper cable management with
                        reduction in trip hazards and makes maintenance easier
                        in industries with high complicated electrical and data
                        demands.
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
                        {/* The modular nature of access floors allows easy
                        reconfiguration of workspace layouts, providing a
                        flexible solution to accommodate evolving needs in
                        dynamic environments with frequent technological or
                        organizational changes. */}
                        The modular nature of access floors allows easy
                        reconfiguration of workspace layouts, providing a
                        flexible solution to accommodate evolving needs in
                        dynamic environments with frequent technological or
                        organizational changes.
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
                          Improved Airflow and Cooling :
                        </span>{" "}
                        {/* Raised access floors enhance airflow, crucial for
                        industries like data centers and server rooms. This
                        dissipates heat from electronic equipment, improving
                        cooling system efficiency and ensuring the reliability
                        of sensitive technology. */}
                        Raised access floors enhance airflow, crucial for
                        industries like data centers and server rooms. This
                        dissipates heat from electronic equipment, improving
                        cooling system efficiency and ensuring the reliability
                        of sensitive technology.
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
                          Enhanced Safety and Accessibility :
                        </span>{" "}
                        {/* Concealing cables beneath access floors enhances safety
                        by reducing accident risks. It also facilitates easy
                        access for maintenance, promoting a safer working
                        environment without disrupting the entire workspace. */}
                        Cables can be hidden under access floors, improving
                        safety as chances of accidents decrease. It further
                        makes maintenance work easier and helps to ensure that
                        the entire space is safe while not being occupied.
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
                          Aesthetic Appeal :
                        </span>{" "}
                        {/* Beyond functionality, epoxy floors can be customized
                        with various colors and finishes, enhancing the overall
                        aesthetics of industrial spaces. */}
                        Not only functional, epoxy floors are available in
                        multiple colors and finishes, making it a beautiful
                        floor for industrial sites.
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
                      Light Reflectivity: Epoxy floors are reflective, which can
                      help improve visibility and reduce the need for additional
                      lighting in large industrial facilities.
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
                      Cost-Efficiency: Epoxy flooring is a cost-effective choice
                      due to its long lifespan, minimal maintenance
                      requirements, and reduced need for frequent replacements.
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
                  List some important types of access floors based on industry
                  needs.
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
                        <span
                          style={{
                            fontWeight: "500",
                            color: "#000",
                          }}
                        >
                          {" "}
                          Raised Floors :
                        </span>{" "}
                        {/* Raised floors, also known as access floors, involve
                        elevating the floor level to create a space beneath the
                        surface. This void can be utilized for accommodating
                        various utilities such as cabling, electrical wiring,
                        and HVAC systems. By concealing these components beneath
                        the raised floor, the workspace becomes more organized,
                        streamlined, and aesthetically pleasing. */}
                        Raised floors, also known as access floors, involve
                        elevating the floor level to create a space beneath the
                        surface. This void can be utilized for accommodating
                        various utilities such as cabling, electrical wiring,
                        and HVAC systems. By concealing these components beneath
                        the raised floor, the workspace becomes more organized,
                        streamlined, and aesthetically pleasing.
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
                        <span
                          style={{
                            fontWeight: "500",
                            color: "#000",
                          }}
                        >
                          Server Room Floors :
                        </span>{" "}
                        {/* In the context of server rooms, raised floors play a
                        crucial role in managing the complex network of cables
                        and providing a cooling infrastructure. The elevated
                        flooring allows for efficient airflow, helping to
                        dissipate heat generated by servers. This not only
                        ensures optimal functioning of the servers but also
                        contributes to the longevity of the equipment. */}
                        In the context of server rooms, raised floors play a
                        crucial role in managing the complex network of cables
                        and providing a cooling infrastructure. The elevated
                        flooring allows for efficient airflow, helping to
                        dissipate heat generated by servers. This not only
                        ensures optimal functioning of the servers but also
                        contributes to the longevity of the equipment.
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
                          Hub Room Floors :
                        </span>{" "}
                        {/* Similar to server rooms, hub rooms house networking
                        equipment and infrastructure. Raised floors in hub rooms
                        facilitate the organized distribution of network cables,
                        power lines, and other essential connections. This
                        accessibility simplifies maintenance and upgrades,
                        reducing downtime and enhancing the overall reliability
                        of the network. */}
                        Similar to server rooms, hub rooms house networking
                        equipment and infrastructure. Raised floors in hub rooms
                        facilitate the organized distribution of network cables,
                        power lines, and other essential connections. This
                        accessibility simplifies maintenance and upgrades,
                        reducing downtime and enhancing the overall reliability
                        of the network.
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
                          False Floors :
                        </span>{" "}
                        {/* False floors, synonymous with raised floors, provide a
                        deceptive appearance of a regular floor while concealing
                        a space beneath. This design is particularly useful in
                        environments where aesthetics are a priority, such as
                        office spaces or commercial buildings. False floors
                        contribute to a clean and visually appealing atmosphere. */}
                        False floors, synonymous with raised floors, provide a
                        deceptive appearance of a regular floor while concealing
                        a space beneath. This design is particularly useful in
                        environments where aesthetics are a priority, such as
                        office spaces or commercial buildings. False floors
                        contribute to a clean and visually appealing atmosphere.
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
                          Unitile Floors :
                        </span>{" "}
                        {/* Unitile is a specific brand of raised floor systems that
                        offers modular and customizable solutions. These floors
                        are designed to be flexible and adaptable, allowing for
                        easy reconfiguration of the workspace layout. Unitile
                        floors are often chosen for their versatility and the
                        ability to accommodate changing business needs. */}
                        Unitile floors are a specialized brand of raised floor
                        systems and provide modularized and customized products.
                        These floor systems are pliable and very flexible,
                        ensuring that the workstation layout can easily be
                        reorganized. Unitile floors are considered versatile and
                        chosen for their ease in accommodating new business
                        needs.
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
                          Cavity Floors :
                        </span>{" "}
                        {/* Cavity floors, like raised floors, create a cavity or
                        void underneath the surface. This space is utilized for
                        housing various services, including data and power
                        cables, ensuring a clutter-free and efficient working
                        environment. Cavity floors are commonly employed in
                        industries where frequent modifications and upgrades are
                        anticipated. */}
                        Cavity floors, like raised floors, create a cavity or
                        void underneath the surface. This space is utilized for
                        housing various services, including data and power
                        cables, ensuring a clutter-free and efficient working
                        environment. Cavity floors are commonly employed in
                        industries where frequent modifications and upgrades are
                        anticipated.
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
                      Light Reflectivity: Epoxy floors are reflective, which can
                      help improve visibility and reduce the need for additional
                      lighting in large industrial facilities.
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
                      Cost-Efficiency: Epoxy flooring is a cost-effective choice
                      due to its long lifespan, minimal maintenance
                      requirements, and reduced need for frequent replacements.
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

          {/* Image Slider */}
          <div
            className="themesflat-spacer clearfix"
            data-desktop={37}
            data-mobile={35}
            data-smobile={35}
          />
          <div className="row-services">
            <div className="container">
              <h5 className="title">Access Floors Images :</h5>
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
                                src="assets\img\ServicePage\Acess-Floors1.jpeg"
                                alt="access-floor-ESD-image"
                                title="access-floor-ESD-image"
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
                                src="assets\img\ServicePage\Acess-Floors2.png"
                                alt="access-floor-ESD-image"
                                title="access-floor-ESD-image"
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
                                src="assets\img\ServicePage\Acess-Floors3.jpeg"
                                alt="access-floor-ESD-image"
                                title="access-floor-ESD-image"
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
                                src="assets\img\ServicePage\Acess-Floors4.jpeg"
                                alt="access-floor-ESD-image"
                                title="access-floor-ESD-image"
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
                                src="assets\img\ServicePage\Acess-Floors5.jpeg"
                                alt="access-floor-ESD-image"
                                title="access-floor-ESD-image"
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

export default SiteContentAccessFloors;
