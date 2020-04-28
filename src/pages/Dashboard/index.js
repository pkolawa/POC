import React from "react";
import { Helmet } from "react-helmet";
import DashboardContainer from "../../containers/DashboardContainer";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <Helmet>
          <title>Dashboard</title>
          <meta
            name="description"
            content="Dashboard"
          />
        </Helmet>
        <DashboardContainer />
      </>
    );
  }
}

export default Dashboard;
