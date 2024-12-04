import React, { Component } from "react";
import { Link } from "react-router-dom";
class ServiceSlide extends Component {
  render() {
    return (
      <div className="row-services">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div
                className="themesflat-spacer clearfix"
                data-desktop={81}
                data-mobile={60}
                data-smobile={60}
              />
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
                          {/* <div className="overlay-effect bg-color-accent" /> */}
                        </div>
                        <div className="text-wrap">
                          <h5 className="heading">
                            <Link
                              to="#"
                              onClick={() => {
                                window.location.href = "/services-detail";
                              }}
                            >
                              Epoxy Flooring
                            </Link>
                          </h5>
                          <p className="letter-spacing-01">
                            Industrial epoxy flooring provides an exceptional
                            blend of long-lasting performance, resistance to
                            chemicals, and visually appealing aesthetics.
                          </p>
                          <div className="elm-readmore">
                            <Link
                              to="#"
                              onClick={() => {
                                window.location.href = "/services-detail";
                              }}
                            >
                              DETAILS
                            </Link>
                          </div>
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
                          {/* <div className="overlay-effect bg-color-accent" /> */}
                        </div>
                        <div className="text-wrap">
                          <h5 className="heading">
                            <Link
                              to="#"
                              onClick={() => {
                                window.location.href =
                                  "/services-detail-polyurethane-flooring";
                              }}
                            >
                              Polyurethane Flooring
                            </Link>
                          </h5>
                          <p className="letter-spacing-01">
                            Polyurethane flooring holds immense significance in
                            various industries and applications due to its
                            exceptional qualities. Its durability and resistance
                            ..
                          </p>
                          <div className="elm-readmore">
                            <Link
                              to="#"
                              onClick={() => {
                                window.location.href =
                                  "/services-detail-polyurethane-flooring";
                              }}
                            >
                              DETAILS
                            </Link>
                          </div>
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
                          {/* <div className="overlay-effect bg-color-accent" /> */}
                        </div>
                        <div className="text-wrap">
                          <h5 className="heading">
                            <Link
                              to="#"
                              onClick={() => {
                                window.location.href =
                                  "/services-detail-di-elecric-flooring";
                              }}
                            >
                              Di-Electric Flooring
                            </Link>
                          </h5>
                          <p className="letter-spacing-01">
                            Dielectric flooring is specifically engineered to
                            offer electrical insulation, thus rendering it a
                            secure option for environments where
                            safeguarding........
                          </p>
                          <div className="elm-readmore">
                            <Link
                              to="#"
                              onClick={() => {
                                window.location.href =
                                  "/services-detail-di-elecric-flooring";
                              }}
                            >
                              DETAILS
                            </Link>
                          </div>
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
                          {/* <div className="overlay-effect bg-color-accent" /> */}
                        </div>
                        <div className="text-wrap">
                          <h5 className="heading">
                            <Link
                              to="#"
                              onClick={() => {
                                window.location.href =
                                  "/services-detail-anti-static-epoxy-flooring";
                              }}
                            >
                              Anti-Static Flooring
                            </Link>
                          </h5>
                          <p className="letter-spacing-01">
                            Anti-static flooring plays a crucial role in various
                            industries and environments where electrostatic
                            discharge can pose a significant risk....
                          </p>
                          <div className="elm-readmore">
                            <Link
                              to="#"
                              onClick={() => {
                                window.location.href =
                                  "/services-detail-anti-static-epoxy-flooring";
                              }}
                            >
                              DETAILS
                            </Link>
                          </div>
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
                          {/* <div className="overlay-effect bg-color-accent" /> */}
                        </div>
                        <div className="text-wrap">
                          <h5 className="heading">
                            <Link
                              to="#"
                              onClick={() => {
                                window.location.href =
                                  "/services-detail-esd-flooring";
                              }}
                            >
                              ESD Flooring
                            </Link>
                          </h5>
                          <p className="letter-spacing-01">
                            ESD (Electrostatic Discharge) flooring plays a
                            pivotal role in environments where static
                            electricity poses a serious risk to both sensitive
                            electronic......
                          </p>
                          <div className="elm-readmore">
                            <Link
                              to="#"
                              onClick={() => {
                                window.location.href =
                                  "/services-detail-esd-flooring";
                              }}
                            >
                              DETAILS
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="themesflat-image-box style-2 clearfix">
                    <div className="image-box-item">
                      <div className="inner">
                        <div className="thumb data-effect-item">
                          <img
                            src="assets\img\ServicePage\car-park-flooring.jpg"
                            alt="altimage"
                          />
                          {/* <div className="overlay-effect bg-color-accent" /> */}
                        </div>
                        <div className="text-wrap">
                          <h5 className="heading">
                            <Link
                              to="#"
                              onClick={() => {
                                window.location.href =
                                  "/services-detail-car-park-deck-flooring";
                              }}
                            >
                              Car Park Deck Flooring
                            </Link>
                          </h5>
                          <p className="letter-spacing-01">
                            Car park deck flooring plays a vital role in urban
                            infrastructure, ensuring the safety, longevity, and
                            functionality of multi-level parking
                            structures........
                          </p>
                          <div className="elm-readmore">
                            <Link
                              to="#"
                              onClick={() => {
                                window.location.href =
                                  "/services-detail-car-park-deck-flooring";
                              }}
                            >
                              DETAILS
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="themesflat-image-box style-2 clearfix">
                    <div className="image-box-item">
                      <div className="inner">
                        <div className="thumb data-effect-item">
                          <img
                            src="assets\img\ServicePage\IMG-20210202-WA0012.jpg"
                            alt="altimage"
                          />
                          {/* <div className="overlay-effect bg-color-accent" /> */}
                        </div>
                        <div className="text-wrap">
                          <h5 className="heading">
                            <Link
                              to="#"
                              onClick={() => {
                                window.location.href =
                                  "/services-detail-terrazo-flooring";
                              }}
                            >
                              Terrazzo Flooring
                            </Link>
                          </h5>
                          <p className="letter-spacing-01">
                            Terrazzo flooring is essential for both its
                            aesthetic appeal and durability, as it not only adds
                            a timeless elegance to spaces but also withstands
                            heavy use and traffic, ensuring a long-lasting..
                          </p>
                          <div className="elm-readmore">
                            <Link
                              to="#"
                              onClick={() => {
                                window.location.href =
                                  "/services-detail-terrazo-flooring";
                              }}
                            >
                              DETAILS
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="themesflat-image-box style-2 clearfix">
                    <div className="image-box-item">
                      <div className="inner">
                        <div className="thumb data-effect-item">
                          <img
                            src="assets\img\ServicePage\IMG-20180821-WA0005.jpg"
                            alt="altimage"
                          />
                          {/* <div className="overlay-effect bg-color-accent" /> */}
                        </div>
                        <div className="text-wrap">
                          <h5 className="heading">
                            <Link
                              to="#"
                              onClick={() => {
                                window.location.href =
                                  "/services-detail-di-polished-concrete-flooring";
                              }}
                            >
                              Polished concrete
                            </Link>
                          </h5>
                          <p className="letter-spacing-01">
                            Polished concrete is of utmost importance in modern
                            architectural design, offering a sustainable and
                            visually striking flooring option that enhances
                            light reflection...
                          </p>
                          <div className="elm-readmore">
                            <Link
                              to="#"
                              onClick={() => {
                                window.location.href =
                                  "/services-detail-di-polished-concrete-flooring";
                              }}
                            >
                              DETAILS
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="themesflat-spacer clearfix"
                data-desktop={15}
                data-mobile={15}
                data-smobile={15}
              />
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
                            src="assets\img\ServicePage\Epoxy-Sports.jpg"
                            alt="altimage"
                          />
                          {/* <div className="overlay-effect bg-color-accent" /> */}
                        </div>
                        <div className="text-wrap">
                          <h5 className="heading">
                            <Link
                              to="#"
                              onClick={() => {
                                window.location.href =
                                  "/services-detail-sports-flooring";
                              }}
                            >
                              Epoxy Sports Flooring
                            </Link>
                          </h5>
                          <p className="letter-spacing-01">
                            Sport epoxy flooring is crucial for athletes and
                            fitness enthusiasts as it not only provides a
                            durable and non-slip surface but also enhances
                            safety and....
                          </p>
                          <div className="elm-readmore">
                            <Link
                              to="#"
                              onClick={() => {
                                window.location.href =
                                  "/services-detail-sports-flooring";
                              }}
                            >
                              DETAILS
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="themesflat-image-box style-2 clearfix">
                    <div className="image-box-item">
                      <div className="inner">
                        <div className="thumb data-effect-item">
                          <img
                            src="assets\img\ServicePage\Self-levelling.jpg"
                            alt="altimage"
                          />
                          {/* <div className="overlay-effect bg-color-accent" /> */}
                        </div>
                        <div className="text-wrap">
                          <h5 className="heading">
                            <Link
                              to="#"
                              onClick={() => {
                                window.location.href =
                                  "/services-detail-di-self-leveling-epoxy-flooring";
                              }}
                            >
                              Self-levelling Epoxy Flooring
                            </Link>
                          </h5>
                          <p className="letter-spacing-01">
                            Self-leveling epoxy flooring is crucial for creating
                            a seamless and durable surface that not only
                            enhances the aesthetics of a space but also provides
                            exceptional performance....
                          </p>
                          <div className="elm-readmore">
                            <Link
                              to="#"
                              onClick={() => {
                                window.location.href =
                                  "/services-detail-di-self-leveling-epoxy-flooring";
                              }}
                            >
                              DETAILS
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="themesflat-image-box style-2 clearfix">
                    <div className="image-box-item">
                      <div className="inner">
                        <div className="thumb data-effect-item">
                          <img
                            src="assets\img\ServicePage\Clean-room-flooring.jpg"
                            alt="altimage"
                          />
                          {/* <div className="overlay-effect bg-color-accent" /> */}
                        </div>
                        <div className="text-wrap">
                          <h5 className="heading">
                            <Link
                              to="#"
                              onClick={() => {
                                window.location.href =
                                  "/services-detail-di-clean-room-flooring";
                              }}
                            >
                              Clean Room Flooring
                            </Link>
                          </h5>
                          <p className="letter-spacing-01">
                            Clean room flooring is crucial because it plays a
                            fundamental role in maintaining the sterile
                            environment necessary for sensitive manufacturing
                            processes and research,...
                          </p>
                          <div className="elm-readmore">
                            <Link
                              to="#"
                              onClick={() => {
                                window.location.href =
                                  "/services-detail-di-clean-room-flooring";
                              }}
                            >
                              DETAILS
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="themesflat-image-box style-2 clearfix">
                    <div className="image-box-item">
                      <div className="inner">
                        <div className="thumb data-effect-item">
                          <img
                            src="assets\img\ServicePage\heavyDuty.jpg"
                            alt="altimage"
                          />
                          {/* <div className="overlay-effect bg-color-accent" /> */}
                        </div>
                        <div className="text-wrap">
                          <h5 className="heading">
                            <Link
                              to="#"
                              onClick={() => {
                                window.location.href =
                                  "/services-detail-di-heavy-duty-epoxy-flooring";
                              }}
                            >
                              Heavy-duty epoxy flooring
                            </Link>
                          </h5>
                          <p className="letter-spacing-01">
                            Heavy-duty epoxy flooring is essential for
                            industrial settings as it provides exceptional
                            durability and chemical resistance, ensuring a safe
                            and long-lasting surface that can....
                          </p>
                          <div className="elm-readmore">
                            <Link
                              to="#"
                              onClick={() => {
                                window.location.href =
                                  "/services-detail-di-heavy-duty-epoxy-flooring";
                              }}
                            >
                              DETAILS
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="themesflat-image-box style-2 clearfix">
                    <div className="image-box-item">
                      <div className="inner">
                        <div className="thumb data-effect-item">
                          <img
                            src="assets\img\ServicePage\hygine-Epoxy.jpg"
                            alt="altimage"
                          />
                          {/* <div className="overlay-effect bg-color-accent" /> */}
                        </div>
                        <div className="text-wrap">
                          <h5 className="heading">
                            <Link
                              to="#"
                              onClick={() => {
                                window.location.href =
                                  "/services-detail-di-hygiene-flooring";
                              }}
                            >
                              Hygiene epoxy flooring
                            </Link>
                          </h5>
                          <p className="letter-spacing-01">
                            Hygiene epoxy flooring is paramount in healthcare
                            facilities and food processing plants, as it creates
                            a seamless, easy-to-clean surface that helps prevent
                            the growth....
                          </p>
                          <div className="elm-readmore">
                            <Link
                              to="#"
                              onClick={() => {
                                window.location.href =
                                  "/services-detail-di-hygiene-flooring";
                              }}
                            >
                              DETAILS
                            </Link>
                          </div>
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
                            alt="altimage"
                          />
                          {/* <div className="overlay-effect bg-color-accent" /> */}
                        </div>
                        <div className="text-wrap">
                          <h5 className="heading">
                            <Link
                              to="#"
                              onClick={() => {
                                window.location.href =
                                  "/services-detail-quartz-flooring";
                              }}
                            >
                              Quartz Flooring
                            </Link>
                          </h5>
                          <p className="letter-spacing-01">
                            Quartz flooring is vital in commercial and
                            high-traffic areas due to its exceptional strength
                            and resistance to wear, making it an ideal choice
                            for maintaining....
                          </p>
                          <div className="elm-readmore">
                            <Link
                              to="#"
                              onClick={() => {
                                window.location.href =
                                  "/services-detail-quartz-flooring";
                              }}
                            >
                              DETAILS
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="themesflat-image-box style-2 clearfix">
                    <div className="image-box-item">
                      <div className="inner">
                        <div className="thumb data-effect-item">
                          <img
                            src="assets\img\ServicePage\2.jpg"
                            alt="altimage"
                          />
                          {/* <div className="overlay-effect bg-color-accent" /> */}
                        </div>
                        <div className="text-wrap">
                          <h5 className="heading">
                            <Link
                              to="#"
                              onClick={() => {
                                window.location.href =
                                  "/services-detail-di-expanison-joints";
                              }}
                            >
                              Expansion joints work
                            </Link>
                          </h5>
                          <p className="letter-spacing-01">
                            Expansion joints are crucial in construction to
                            accommodate the natural movement and temperature
                            changes of structures, preventing cracks and damage
                            by allowing....
                          </p>
                          <div className="elm-readmore">
                            <Link
                              to="#"
                              onClick={() => {
                                window.location.href =
                                  "/services-detail-di-expanison-joints";
                              }}
                            >
                              DETAILS
                            </Link>
                          </div>
                        </div>
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
    );
  }
}

export default ServiceSlide;
