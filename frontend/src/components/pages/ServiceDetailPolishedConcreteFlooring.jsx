import React, { Component } from "react";
import BannerTitle from "../layouts/about/banner/BannerTitle";
import { Header, Footer, TopBar, BottomBar } from "../layouts/general/index";
import {
  Sidebar,
  SidebarPolishedConcreteFlooring,
  SiteContent,
  SiteContentPolishedConcreteFlooring,
} from "../layouts/services/index";

class ServiceDetailPolishedConcreteFlooring extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headers: [
        {
          id: 1,
          logoweb: "assets/img/logo-small.png",
          names: "Services",
        },
      ],
      banners: [
        {
          id: 1,
          links: "",
          titlelink: "",
          border: "",
          name: "Services",
          heading: "All Services",
        },
      ],
    };
  }
  render() {
    return (
      <div className="header-fixed page sidebar-left header-style-2 topbar-style-1 menu-has-search">
        <div id="wrapper" className="animsition">
          <div id="page" className="clearfix">
            <div id="site-header-wrap">
              <TopBar />
              {this.state.headers.map((data, idx) => (
                <Header data={data} key={idx} />
              ))}
            </div>
            {this.state.banners.map((data) => (
              <BannerTitle key={data.id} data={data} />
            ))}
            <div id="main-content" className="site-main clearfix">
              <div id="content-wrap" className="container">
                <SiteContentPolishedConcreteFlooring />
                <SidebarPolishedConcreteFlooring />
              </div>
            </div>
            <Footer />
            {/* {this.state.headers.map((data, idx) => (
              <BottomBar data={data} key={idx} />
            ))} */}
          </div>
        </div>
      </div>
    );
  }
}

export default ServiceDetailPolishedConcreteFlooring;
