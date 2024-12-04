import React, { Component } from "react";

class TitleHeading extends Component {
  render() {
    return (
      <div className="themesflat-headings style-1 text-center clearfix">
        <h2 className={this.props.data.classnames}>{this.props.data.title}</h2>
        {/* <div className="sep has-icon width-125 clearfix">
          <div className="sep-icon">
            <span className="sep-icon-before sep-center sep-solid" />
            <span className="icon-wrap">
              <i className="autora-icon-build" />
            </span>
            <span className="sep-icon-after sep-center sep-solid" />
          </div>
        </div> */}
        <p
          style={{
            textAlign: "left",
            maxWidth: "100%",
            width: "95%", // Optional, for added flexibility
          }}
          className={this.props.data.classtext}
        >
          {this.props.data.text}
        </p>

        <p
          style={{
            textAlign: "left",
            maxWidth: "100%",
            width: "95%", // Optional, for added flexibility
          }}
          className={this.props.data.classtext}
        >
          {this.props.data.text1}
        </p>
        <p
          style={{
            textAlign: "left",
            maxWidth: "100%",
            width: "95%", // Optional, for added flexibility
          }}
          className={this.props.data.classtext}
        >
          {this.props.data.text2}
        </p>
        <p
          style={{
            textAlign: "left",
            maxWidth: "100%",
            width: "95%", // Optional, for added flexibility
          }}
          className={this.props.data.classtext}
        >
          {this.props.data.text3}
        </p>
      </div>
    );
  }
}

export default TitleHeading;
