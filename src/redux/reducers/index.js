import { combineReducers } from 'redux';
import alertReducer from './alertReducer';
import authReducer from './authReducer';
import projectReducer from './projectReducer';
import taskReducer from './taskReducer';

const reducers = combineReducers({
  project: projectReducer,
  task: taskReducer,
  auth: authReducer,
  alert: alertReducer,
});

export default reducers;
