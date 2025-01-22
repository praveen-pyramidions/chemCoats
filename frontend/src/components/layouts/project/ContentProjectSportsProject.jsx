import React, { Component } from "react";
import { Helmet } from "react-helmet";

class ContentProjectSportsProject extends Component {
  render() {
    return (
      <div className="detail-gallery">
        <Helmet>
          <title>Chemcoats Project | Sports</title>
          <meta
            name="description"
            content="Despite the time constraints, we successfully completed the project in just four days, ensuring the court was fully functional and visually appealing for the event."
          />
          <meta name="author" content="Your Company Name" />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://chemcoats.com/sports-project" />
        </Helmet>
        <div
          className="themesflat-spacer clearfix"
          data-desktop={21}
          data-mobile={21}
          data-smobile={21}
        />
        <div
          className="themesflat-gallery style-2 has-arrows arrow-center arrow-circle offset-v-82 has-thumb w185 clearfix"
          data-gap={0}
          data-column={1}
          data-column2={1}
          data-column3={1}
          data-auto="false"
        >
          <div className="owl-carousel owl-theme">
            <div className="gallery-item">
              <div className="inner">
                <div className="thumb">
                  <img
                    src="assets\img\project\Sports-project/WhatsApp-Image-2024-03-25-at-8.36.44-AM-1-qlrx3r8rpz3pd7lmfh1s60oj2cw67ikf97f8a6anac.jpeg"
                    alt="Sports-project"
                    title="Sports-project"
                  />
                </div>
              </div>
            </div>
            <div className="gallery-item">
              <div className="inner">
                <div className="thumb">
                  <img
                    src="assets\img\project\Sports-project/WhatsApp-Image-2024-03-25-at-8.36.43-AM-qlrx0dzl8chprihr3imwqda2fnhtmk71sj9ldhafl0.jpeg"
                    alt="Sports-project"
                    title="Sports-project"
                  />
                </div>
              </div>
            </div>
            <div className="gallery-item">
              <div className="inner">
                <div className="thumb">
                  <img
                    src="assets\img\project\Sports-project/WhatsApp-Image-2024-03-25-at-8.36.44-AM-qlrwmivafbigikmr20w0gd8b01tx3a5kvwurjjuhd0.jpeg"
                    alt="Sports-project"
                    title="Sports-project"
                  />
                </div>
              </div>
            </div>
            <div className="gallery-item">
              <div className="inner">
                <div className="thumb">
                  <img
                    src="assets\img\project\Sports-project/WhatsApp-Image-2024-03-25-at-8.36.45-AM-1-qlrwn5fezcdc97pzean247jd9aqq80n4z0if26x17o.jpeg"
                    alt="Sports-project"
                    title="Sports-project"
                  />
                </div>
              </div>
            </div>
            <div className="gallery-item">
              <div className="inner">
                <div className="thumb">
                  <img
                    src="assets\img\project\Sports-project/WhatsApp-Image-2024-03-25-at-8.36.45-AM-2-qlrwzdbvtt3j6pz01ksgj4j39miiad5inhtnnossbo.jpeg"
                    alt="Sports-project"
                    title="Sports-project"
                  />
                </div>
              </div>
            </div>
            <div className="gallery-item">
              <div className="inner">
                <div className="thumb">
                  <img
                    src="assets\img\project\Sports-project/WhatsApp-Image-2024-03-25-at-8.36.45-AM-qlrwqli41h36tqpr9s9t9c87o5r6g2bpg2miept2ec.jpeg"
                    alt="Sports-project"
                    title="Sports-project"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /.themesflat-cousel-box */}
        <div
          className="themesflat-spacer clearfix"
          data-desktop={40}
          data-mobile={40}
          data-smobile={40}
        />
        <div className="flat-content-wrap style-3 clearfix">
          <h5 className="title">PROJECT DESCRIPTION</h5>
          <div className="sep has-width w60 accent-bg margin-top-18 clearfix" />
          <p className="margin-top-28">
            A basketball court was required within an exceptionally tight
            deadline of four or five days to be ready for the opening ceremony
            by the Minister. Despite the time constraints, we successfully
            completed the project in just four days, ensuring the court was
            fully functional and visually appealing for the event. This
            fast-paced task included the procurement of materials, which were
            sourced from Mumbai, and their timely transportation to the site.
            Our team worked around the clock to ensure all aspects of the
            project, from surface preparation to final installation, were
            executed with precision and quality, allowing the opening ceremony
            to proceed as planned without any delays.
          </p>
        </div>
      </div>
    );
  }
}

export default ContentProjectSportsProject;
