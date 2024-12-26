import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.css";

const HeroBanner = () => {
  return (
    <div className="hero-banner">
      <Carousel
        showThumbs={false}
        autoPlay={true}
        infiniteLoop={true}
        interval={3000}
        showStatus={false}
        stopOnHover={true}
        swipeable={true}
        // emulateTouch={true}
      >
        <div>
          <img src="assets/img/epoxy-flooring.jpg" alt="Epoxy-flooring" title="Epoxy-flooring" />
          <div className="legend">
            <div className="WelcomeTextHeroBanner">WELCOME TO CHEMCOATS</div>
            <div className="WelcomeTextMainHeroBanner">
              We offer outstanding industrial Epoxy Flooring and PU Flooring
              services in the Southern region of India.
            </div>
            <button
              onClick={() => {
                window.location.href = "/services";
              }}
              className="knowmorebuttonherobanner"
              title="Learn more about our services"
            >
              Know more
            </button>
          </div>
        </div>
        <div>
          <img
            src="assets/img/types-of-epoxy-flooring-services-2-scaled.jpg"
            alt="Epoxy-flooring"
            title="Epoxy-flooring"
          />
          <div className="legend">
            <div className="WelcomeTextHeroBanner">WELCOME TO CHEMCOATS</div>
            <div className="WelcomeTextMainHeroBanner">
              We offer outstanding industrial Epoxy Flooring and PU Flooring
              services in the Southern region of India.
            </div>
            <button
              onClick={() => {
                window.location.href = "/services";
              }}
              className="knowmorebuttonherobanner"
              title="Learn more about our services"
            >
              Know more
            </button>
          </div>
        </div>
        <div>
          <img
            src="assets/img/Celebrating-17year-in-epoxy-flooring2.jpg"
            alt="Epoxy-flooring"
            title="Epoxy-flooring"
          />
          <div className="legend">
            <div className="WelcomeTextHeroBanner">WELCOME TO CHEMCOATS</div>
            <div className="WelcomeTextMainHeroBanner">
              We offer outstanding industrial Epoxy Flooring and PU Flooring
              services in the Southern region of India.
            </div>
            <button
              onClick={() => {
                window.location.href = "/services";
              }}
              className="knowmorebuttonherobanner"
              title="Learn more about our services"
            >
              Know more
            </button>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default HeroBanner;
