import React from "react";
import T from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const styles = {};

class MqFormRow extends React.PureComponent {
  static propTypes = {
    children: T.func.isRequired,
    gridSpacing: T.number,
    classes: T.object,
    header: T.object,
    gutterBottom: T.bool,
  };

  static defaultProps = {
    // gridSpacing: variables.sizes.gridSpacing,
    classes: {},
    header: null,
    gutterBottom: false,
  };

  state = {
    expansionPanelOpen: false,
  };

  _handleExpansionPanelChange = () => {
    this.setState((prev) => ({
      expansionPanelOpen: !prev.expansionPanelOpen,
    }));
  };

  _renderContent = () => {
    const { children, gridSpacing } = this.props;

    return (
      <Grid spacing={gridSpacing} container>
        {children}
      </Grid>
    );
  };

  _renderHeaderTitle = () => {
    const { header } = this.props;

    return header.title || "";
  };

  _renderWithHeader = () => {
    const { header, classes } = this.props;

    if (header.expandable) {
      return (
        <ExpansionPanel
          classes={{
            root: classes.expansionPanel,
            expanded: classes.expansionPanelExpanded,
          }}
          onChange={this._handleExpansionPanelChange}
        >
          <ExpansionPanelSummary
            classes={{ root: classes.expansionPanelSummary }}
            expandIcon={<ExpandMoreIcon />}
          >
            {this._renderHeaderTitle()}
          </ExpansionPanelSummary>
          <ExpansionPanelDetails
            classes={{ root: classes.expansionPanelSummary }}
          >
            {this._renderContent()}
          </ExpansionPanelDetails>
        </ExpansionPanel>
      );
    } else {
      return (
        <div className={classes.formSection}>
          {this._renderHeaderTitle()}
          {this._renderContent()}
        </div>
      );
    }
  };

  render() {
    const { header } = this.props;

    if (header) {
      return this._renderWithHeader();
    } else {
      return this._renderContent();
    }
  }
}
export { MqFormRow };
export default withStyles(styles)(MqFormRow);
