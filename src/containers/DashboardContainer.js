import React from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import { Grid, Container } from "@material-ui/core";
import DashboardCardList from "../components/DashboardCardList";
import Widget from "../components/Widget";
import Title from "../components/Title";

const styles = (theme) => ({
});

export class DashboardContainer extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Container>
        <Title color="secondary" title="Dashboard"/>
        <Grid container spacing={2}>
          <Grid item sm={6} md={4}>
            <Widget title="Server Status">
              ToBe Done
            </Widget>
          </Grid>
          <Grid item sm={6} md={4}>
            <Widget title="Health">ToBe Done</Widget>
          </Grid>
          <Grid item sm={6} md={4}>
            <Widget title="Proxy">ToBe Done</Widget>
          </Grid>
        </Grid>
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
