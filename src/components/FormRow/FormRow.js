import React from 'react';
import T from 'prop-types';
// import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import MqType from '../MqType';

// import variables from '../MUITheme/variables';

const styles = {
	
};

/**
 * Form rows - a flex grid container from the MUI library
 */
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
		this.setState(prev => ({
			expansionPanelOpen: !prev.expansionPanelOpen,
		}));
	}

	_renderContent = () => {
		const { header, children, gridSpacing, gutterBottom, classes } = this.props;
		const { expansionPanelOpen } = this.state;
		const tabIndex = (header && header.expandable && !expansionPanelOpen) ? -1 : 0;

		return (
			<Grid
				spacing={gridSpacing}
				container
				// classes={{
				// 	container: classNames(classes.container, {
				// 		[classes.gutterBottom]: gutterBottom,
				// 	}),
				// }}
			>
				{children}
			</Grid>
		);
	}

	_renderHeaderTitle = () => {

		const { header, classes }  = this.props;

		return (
			// <MqType
			// 	variant="heading4"
			// 	gutterBottom
			// >
				<span>{header.title || ''}</span>
			// </MqType>
		);
	}

	_renderWithHeader = () => {

		const { header, classes }  = this.props;

		if (header.expandable) {
			return (
				<ExpansionPanel
					classes={{ root: classes.expansionPanel, expanded: classes.expansionPanelExpanded }}
					onChange={this._handleExpansionPanelChange}
				>
					<ExpansionPanelSummary
						classes={{ root: classes.expansionPanelSummary }}
						expandIcon={<ExpandMoreIcon />}
					>
						{this._renderHeaderTitle()}
					</ExpansionPanelSummary>
					<ExpansionPanelDetails classes={{ root: classes.expansionPanelSummary }}>
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

	}

	render() {

		const { header } = this.props;

		if (header) {return this._renderWithHeader();} else {return this._renderContent();}
	}
}

export default withStyles(styles)(MqFormRow);
