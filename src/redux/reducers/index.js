import { combineReducers } from 'redux';
import alertReducer from './alertReducer';
import authReducer from './authReducer';
import projectReducer from './projectReducer';
import taskReducer from './taskReducer';

const reducers = combineReducers({
  projects: projectReducer,
  tasks: taskReducer,
  auth: authReducer,
  alert: alertReducer,
});

export default reducers;
