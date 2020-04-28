import React from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import DashboardCardList from "../components/DashboardCardList";

const styles = (theme) => ({});

class DashboardContainer extends React.Component {
  render() {
    return (
      <Container>
        <DashboardCardList />
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(DashboardContainer));
