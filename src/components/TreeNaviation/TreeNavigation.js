import React from "react";
import T from 'prop-types';
import { withStyles } from "@material-ui/core/styles";
import TreeView from "@material-ui/lab/TreeView";
import TreeItem from "@material-ui/lab/TreeItem";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

const styles = (theme) => ({
    
});

class TreeNavigation extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            formFields: []
        }
    }

    static propTypes = {
        treeItems: T.array.isRequired,
        nodeClickHandler: T.func.isRequired
	};

    getTreeItemsFromData = treeItems => {
        return treeItems.map(treeItemData => {
            let children = undefined;
            if (treeItemData.children && treeItemData.children.length > 0) {
                children = this.getTreeItemsFromData(treeItemData.children);
            }

            return (
                <TreeItem
                    key={treeItemData.id}
                    nodeId={treeItemData.id}
                    label={this.renderlabel(treeItemData)}
                    children={children}
                />
            );
        });
    };

    renderlabel = item => {
        const { name, id, data } = item;

        return (
            <span onClick={() => this.showDetails(data)} nodeId={id} key={id}>{name}</span>
        )
    }

    showDetails = (data) => {
        const { nodeClickHandler } = this.props;
        nodeClickHandler(data);

    }

    dataTreeView = (treeItems) => {
        return (
            <TreeView
                defaultCollapseIcon={<ExpandMoreIcon />}
                defaultExpandIcon={<ChevronRightIcon />}
            >
                {this.getTreeItemsFromData(treeItems)}
            </TreeView>
        );
    };

    render() {
        const { treeItems } = this.props;
        
        return this.dataTreeView(treeItems);

    }
}

export default withStyles(styles)(TreeNavigation);
