import { connect } from "react-redux";
import RuntimeManagement from "../components/RuntimeManagement"

const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = dispatch => ({
    
});

const RuntimeManagementContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(RuntimeManagement);

export default RuntimeManagementContainer