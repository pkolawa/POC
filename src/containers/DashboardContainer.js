import React from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import { Grid, Container, Paper, Typography } from "@material-ui/core";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import DashboardCardList from "../components/DashboardCardList";
import Widget from "../components/Widget";
import Title from "../components/Title";

const styles = (theme) => ({
  tabWrapper:{
    display: "flex",
    marginTop: theme.spacing(3)
  },
  textColor:{
    color: theme.palette.primary.light
  }
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return <>{value === index && children}</>;
}

export class DashboardContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabValue: 0,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = (event, newValue) => {
    this.setState({ tabValue: newValue });
  };
  render() {
    const { classes } = this.props;
    return (
      <Container>
        <Title color="secondary" title="Dashboard" />
        <Paper square>
          <Tabs
            value={this.state.tabValue}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab label="Data Center 1" />
            <Tab label="Data Center 2" />
            <Tab label="Data Center 3" />
            <Tab label="Data Center 4" />
          </Tabs>
        </Paper>
        <div className={classes.tabWrapper}>
          <TabPanel value={this.state.tabValue} index={0}>
            <Grid container spacing={2}>
              <Grid item sm={6} md={4}>
                <Widget title="Server 1"><Typography className={classes.textColor}>Online</Typography></Widget>
              </Grid>
              <Grid item sm={6} md={4}>
                <Widget title="Server 2"><Typography color="textSecondary">Offline</Typography></Widget>
              </Grid>
              <Grid item sm={6} md={4}>
                <Widget title="Server 3"><Typography color="error">Danger</Typography></Widget>
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel value={this.state.tabValue} index={1}>
            <Grid container spacing={2}>
              <Grid item sm={6} md={4}>
                <Widget title="Server 1">Online</Widget>
              </Grid>
              <Grid item sm={6} md={4}>
                <Widget title="Server 2">Offline</Widget>
              </Grid>
              <Grid item sm={6} md={4}>
                <Widget title="Server 3">Danger</Widget>
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel value={this.state.tabValue} index={2}>
            <Grid container spacing={2}>
              <Grid item sm={6} md={4}>
                <Widget title="Server 1">Online</Widget>
              </Grid>
              <Grid item sm={6} md={4}>
                <Widget title="Server 2">Offline</Widget>
              </Grid>
              <Grid item sm={6} md={4}>
                <Widget title="Server 3">Danger</Widget>
              </Grid>
            </Grid>
          </TabPanel>
        </div>
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
