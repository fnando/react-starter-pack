import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import "app/styles/styles.scss";
import AppContainer from "app/components/AppContainer";

ReactDOM.render(<AppContainer />, document.querySelector("#app"));
