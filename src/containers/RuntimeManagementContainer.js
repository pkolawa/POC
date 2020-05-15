import React from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Menu from "../components/Menu";
import Title from "../components/Title";
import Chart from "../components/Chart";

const styles = (theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
  },
  container: {
  },
});

export class RuntimeManagementContainer extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Container className={classes.container}>
          <div className={classes.toolbar} />
          <Title color="secondary" title="Runtime Page" />
          <Chart />
        </Container>
      </div>
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
)(withStyles(styles)(RuntimeManagementContainer));
