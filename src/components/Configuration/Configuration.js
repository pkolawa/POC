import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
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
});

class Configuration extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            formData: [],
        }
    }

    handleNodeClick = (formData) => {
        if(formData && formData.length > 0) {
            this.setState({ formData })
        }
    }

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
                    <TreeNavigation treeItems={metaData} nodeClickHandler={this.handleNodeClick} />
                    <FormComponent pageData={formData} />
                </Container>
                
            </div>
        );
    }
}

export default withStyles(styles)(Configuration);