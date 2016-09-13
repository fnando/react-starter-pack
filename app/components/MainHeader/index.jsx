import React, {PropTypes} from "react";
import "./style.scss";
import src from "./images/main-header.png";

export default class MainHeader extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
      <header className="MainHeader">
        <h1>{this.props.title}</h1>
        <img src={src} />
      </header>
    );
  }
}
