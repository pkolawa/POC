import React from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Menu from "../components/Menu";
import Title from "../components/Title";
import Socket from "../components/Socket";

const styles = (theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
  },
  container: {
    flexBasis: `calc(100% - 240px)`,
  },
});

class MonitoringSystemContainer extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Menu />
        <Container className={classes.container}>
          <Title color="secondary" title="Monitor Page"/>
          <Socket />
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
)(withStyles(styles)(MonitoringSystemContainer));
