import React from 'react';
import T from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const styles = {
	header: {
		'& svg': {
			fill: 'red',
		},
	},
	tabsIndicator: {
		backgroundColor: 'red',
		height: 4,
	},
	listTab: {
		minWidth: 85,
		opacity: 1,
	},
};

/**
* The TabList component
*/
class TabList extends React.PureComponent {
	static propTypes = {
		/** Tab items */
		listTabs: T.arrayOf(T.shape(
			{
				linkText: T.string.isRequired,
				component: T.oneOfType([T.element, T.func]),
				id: T.string.isRequired,
				disabled: T.bool,
			},
		)).isRequired,
		activeTab: T.number.isRequired,
		onChange: T.func.isRequired,
		classes: T.object,
		scrollButtons: T.string,
	};

	static defaultProps = {
		classes: {},
		scrollButtons: 'auto',
	};

	renderlistTabs() {
		const { listTabs, classes } = this.props;

		return listTabs.map((listTab, ii) => {

			return (
				<Tab
					classes={{
						root: classes.listTab,
					}}
					id={listTab.id}
					key={`list-tab-${ii}`}
					label={listTab.linkText}
					disabled={listTab.disabled || false}

				/>
			);
		});
	}

	renderTabItems() {
		const { listTabs, activeTab } = this.props;

		return listTabs.map((val, ii) => {

			return (
				activeTab === ii &&
				<div
					key={`active-tab-${ii}`}
				>
					{val.component()}
				</div>
			);
		});
	}

	render() {
		const { classes, activeTab, onChange, scrollButtons } = this.props;

		return (
			<div className={classes.root}>
				<div className={classes.header}>
					<Tabs
						scrollable
						classes={{
							indicator: classes.tabsIndicator,
						}}
						value={activeTab}
						onChange={onChange}
						scrollButtons={scrollButtons}
					>
						{this.renderlistTabs()}
					</Tabs>
				</div>
				{this.renderTabItems()}
			</div>
		);
	}
}

export default withStyles(styles)(TabList);
