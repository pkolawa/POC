import { connect } from "react-redux";
import RuntimeManagement from "../components/Runtime"

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