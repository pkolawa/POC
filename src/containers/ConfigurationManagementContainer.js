import React from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import TreeNavigation from "../components/TreeNaviation/TreeNavigation";
import metaData from "./../components/TreeNaviation/meta-data-config.json";
import FormComponent from "./../components/FormComponent";
import Menu from "../components/Menu";
import Title from "../components/Title";

const styles = (theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
  },
  toolbar: theme.mixins.toolbar,
  container: {
    flexBasis: `calc(100% - 240px)`,
  },
});

class ConfigurationManagementContainer extends React.Component {

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
          <Title color="secondary" title="Configuration Page"/>
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

const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(ConfigurationManagementContainer));
