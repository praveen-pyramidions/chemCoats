import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import menus from "../menu";
class Header extends Component {
  render() {
    const { location } = this.props;
    return (
      <header id="site-header">
        <div id="site-header-inner" className="container">
          <div className="wrap-inner clearfix">
            <div id="site-logo" className="clearfix">
              <div id="site-log-inner">
                <Link
                  to="#"
                  title="chemcoats logo"
                  onClick={() => {
                    window.location.href = "/";
                  }}
                  rel="home"
                  className="main-logo"
                >
                  <img
                    src={this.props.data.logoweb}
                    alt="Chemcoats Logo"
                    title="Chemcoats Logo"
                    width={186}
                    height={39}
                    data-retina="images/chemcoatslogo.png"
                    data-width={186}
                    data-height={39}
                  />
                </Link>
              </div>
            </div>
            <div className="mobile-button">
              <span />
            </div>
            <nav id="main-nav" className="main-nav">
              <ul id="menu-primary-menu" className="menu">
                {menus.map((data) => (
                  <li
                    className={
                      data.name === this.props.data.names
                        ? "menu-item menu-item-has-children current-menu-item"
                        : "menu-item menu-item-has-children"
                    }
                    key={data.id}
                  >
                    <Link
                      to="#"
                      title={`Go to ${data.name}`}
                      onClick={() => {
                        window.location.href = data.nameLink;
                      }}
                    >
                      {data.name}
                    </Link>
                    {data.namesub.length > 0 ? (
                      <>
                        <ul className="sub-menu">
                          {data.namesub.map((submenu) => (
                            <li
                              className={
                                location.pathname === submenu.links
                                  ? "menu-item current-item"
                                  : "menu-item"
                              }
                              key={submenu.id}
                            >
                              <Link
                                to="#"
                                title={`Go to ${submenu.sub}`}
                                onClick={() => {
                                  window.location.href = submenu.links;
                                }}
                              >
                                {submenu.sub}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : null}
                  </li>
                ))}
              </ul>
            </nav>
            {/* <div id="header-search">
              <Link to="#" className="header-search-icon">
                <span className="search-icon fa fa-search"></span>
              </Link>
              <form
                role="search"
                method="get"
                className="header-search-form"
                action="#"
              >
                <label className="screen-reader-text">Search for:</label>
                <input
                  type="text"
                  defaultValue
                  name="s"
                  className="header-search-field"
                  placeholder="Search..."
                />
                <button
                  type="submit"
                  className="header-search-submit"
                  title="Search"
                >
                  <i className="fa fa-search" />
                </button>
              </form>
            </div> */}
          </div>
        </div>
      </header>
    );
  }
}
export default withRouter(Header);
