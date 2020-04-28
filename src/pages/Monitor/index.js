import React from "react";
import { Helmet } from "react-helmet";
import MonitoringSystemContainer from "../../containers/MonitoringSystemContainer";

class Monitor extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <Helmet>
          <title>Monitor</title>
          <meta
            name="description"
            content="Monitor"
          />
        </Helmet>
        <MonitoringSystemContainer />
      </>
    );
  }
}

export default Monitor;
