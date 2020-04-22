import { combineReducers } from 'redux';
import configurationManagement from './configurationManagement';
import monitoringSystem from './monitoringSystem';
import runtimeManagement from './runtimeManagement';

export default combineReducers({
    configurationManagement,
    monitoringSystem,
    runtimeManagement
})