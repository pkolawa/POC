import React from "react";
import { Helmet } from "react-helmet";
import ConfigurationManagementContainer from "../../containers/ConfigurationManagementContainer";

class Configuration extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <Helmet>
          <title>Configuration Management</title>
          <meta name="description" content="Configuration Management" />
        </Helmet>
        <ConfigurationManagementContainer />
      </>
    );
  }
}

export default Configuration;
