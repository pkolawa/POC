import { connect } from "react-redux";
import ConfigurationManagement from "../components/ConfigurationManagement"

const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = dispatch => ({

});

const ConfigurationManagementContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ConfigurationManagement);

export default ConfigurationManagementContainer