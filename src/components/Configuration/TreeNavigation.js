import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import metaData from "./meta-data-config.json";

import TreeView from "@material-ui/lab/TreeView";
import TreeItem from "@material-ui/lab/TreeItem";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

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
});

class Configuration extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            formFields: []
        }
    }

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
        if (data && data.length > 0) {
            this.setState({formFields: data})
        }

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
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Menu />
                <Container className={classes.container}>
                    <Typography align="center" variant="h2" color="secondary">
                        Configuration Page
          </Typography>
                    {this.dataTreeView(metaData)}
                </Container>


            </div>
        );
    }
}

export default withStyles(styles)(Configuration);
