import { connect } from "react-redux";
import Dashboard from "../components/Dashboard"

const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = dispatch => ({

});

const DashboardContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard);

export default DashboardContainer