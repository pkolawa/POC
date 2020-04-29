import { combineReducers } from "redux";
import auth from "./auth";
import configurationManagement from './configurationManagement';
import monitoringSystem from './monitoringSystem';
import runtimeManagement from './runtimeManagement';

export default combineReducers({
    auth,
    configurationManagement,
    monitoringSystem,
    runtimeManagement
});