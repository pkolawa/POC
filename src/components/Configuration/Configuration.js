import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TreeNavigation from "./TreeNavigation";
import metaData from "./meta-data-config.json";
import FormComponent from "./FormComponent";
import Menu from "../Menu";

const styles = (theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
  },
  container: {
    flexBasis: `calc(100% - 240px)`,
  },
  gridContainer: {
      marginTop: theme.spacing(3)
  }
});

class Configuration extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formData: [],
      // metaData: []
    };
  }

  componentDidMount() {
    //fetch('http://localhost:3001/configuration').then( metaData => this.setState({metaData})).catch(e => console.error(e))
  }

  handleNodeClick = (formData) => {
    if (formData && formData.length > 0) {
      this.setState({ formData });
    }
  };

  render() {
    const { classes } = this.props;
    const { formData } = this.state;

    return (
      <div className={classes.root}>
        <Menu />
        <Container className={classes.container}>
          <Typography align="center" variant="h2" color="secondary">
            Configuration Page
          </Typography>
          <Grid container className={classes.gridContainer} spacing={3}>
            <Grid item xs={3}>
              <TreeNavigation
                treeItems={metaData}
                nodeClickHandler={this.handleNodeClick}
              />
            </Grid>
            <Grid item xs={9}>
              <FormComponent pageData={formData} />
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default withStyles(styles)(Configuration);
