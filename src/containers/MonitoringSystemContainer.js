import { connect } from "react-redux";
import MonitoringSystem from "../components/MonitoringSystem"

const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = dispatch => ({

});

const MonitoringSystemContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(MonitoringSystem);

export default MonitoringSystemContainer