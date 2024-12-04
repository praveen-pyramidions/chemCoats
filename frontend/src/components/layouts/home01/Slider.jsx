import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import bannerhome1 from "./data_banner";
import bannerhome2 from "../home02/data_banner";

class Slider extends Component {
  render() {
    const { location } = this.props;

    const commonTransitionProps = {
      in: "x:[-100%];opacity:0;s:1000;e:Power4.easeInOut;",
      out: "x:[100%];opacity:0;s:1000;e:Power2.easeInOut;",
    };

    // Function to render slides dynamically
    const renderSlides = (bannerData) =>
      bannerData.map((data) => (
        <li data-transition="slide" key={data.id}>
          <img
            src={data.srcimg}
            alt="altimage"
            data-bgposition="center center"
            data-no-retina
          />
          <div
            className={data.classnames}
            data-x={data.datax}
            data-hoffset={data.datahset}
            data-y="['middle','middle','middle','middle']"
            data-voffset={data.datavset1}
            data-fontsize="['20','20','20','16']"
            data-lineheight="['70','70','40','24']"
            data-width="full"
            data-height="none"
            data-whitespace="normal"
            data-transform_idle="o:1;"
            data-transform_in={commonTransitionProps.in}
            data-transform_out={commonTransitionProps.out}
            data-start={700}
            data-splitin="none"
            data-splitout="none"
            data-responsive_offset="on"
          >
            WELCOME TO CHEMCOATS
          </div>
          <div
            className={data.classtext}
            data-x={data.datax}
            data-hoffset={data.datahset}
            data-y="['middle','middle','middle','middle']"
            data-voffset={data.datavset2}
            data-fontsize="['52','52','42','32']"
            data-lineheight="['65','65','45','35']"
            data-width="full"
            data-height="none"
            data-whitespace="normal"
            data-transform_idle="o:1;"
            data-transform_in={commonTransitionProps.in}
            data-transform_out={commonTransitionProps.out}
            data-start={1000}
            data-splitin="none"
            data-splitout="none"
            data-responsive_offset="on"
          >
            We offer outstanding industrial Epoxy Flooring and PU Flooring
            services
          </div>

          <div
            className={data.classbtn}
            data-x={data.datax}
            data-hoffset={data.datahset}
            data-y="['middle','middle','middle','middle']"
            data-voffset={data.datavset}
            data-width="full"
            data-height="none"
            data-whitespace="normal"
            data-transform_idle="o:1;"
            data-transform_in={commonTransitionProps.in}
            data-transform_out={commonTransitionProps.out}
            data-start={1000}
            data-splitin="none"
            data-splitout="none"
            data-responsive_offset="on"
          >
            <Link to="#" className="themesflat-button bg-accent big">
              <span>GET IN TOUCH</span>
            </Link>
          </div>
        </li>
      ));

    const mainContent = () => {
      if (location.pathname === "/") {
        return <>{renderSlides(bannerhome1)}</>;
      } else if (location.pathname === "/home-02") {
        return <>{renderSlides(bannerhome2)}</>;
      }
    };

    return <ul>{mainContent()}</ul>;
  }
}

export default withRouter(Slider);
