import React from "react";
import "./style.scss";
import MainHeader from "app/components/MainHeader";
import src from "app/images/wr.png";

export default class AppContainer extends React.Component {
  render() {
    return (
      <div className="AppContainer">
        <MainHeader title="Welcome" />
        <p>
          Vestibulum sit amet ipsum sit amet felis aliquet blandit tristique
          porttitor arcu. Quisque varius, nisi sed feugiat aliquam, lorem magna
          consectetur magna, a auctor arcu mi sit amet neque. In elementum rutrum
          condimentum. Vestibulum ante eros, vestibulum a ante quis, iaculis
          pellentesque mauris. Nullam sed justo ut massa malesuada mattis non
          ut ante. Etiam maximus quis ipsum suscipit commodo. Aenean semper lacus
          sed diam molestie, at egestas erat vulputate. Sed condimentum auctor
          lacus eu egestas. Maecenas ac pulvinar lacus.
        </p>

        <img src={src} />
      </div>
    );
  }
}
