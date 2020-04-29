import React from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import DashboardCardList from "../components/DashboardCardList";

const styles = (theme) => ({
  toolbar: theme.mixins.toolbar,
});

class DashboardContainer extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Container>
        <div className={classes.toolbar} />
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
