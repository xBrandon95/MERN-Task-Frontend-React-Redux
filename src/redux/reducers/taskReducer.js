import {
  GET_TASKS,
  GET_TASKS_SUCCESS,
  GET_TASKS_ERROR,
  ADD_TASK,
  ADD_TASK_SUCCESS,
  ADD_TASK_ERROR,
  VALIDATE_FORM_TASK,
  RESET_TASKS,
  DELETE_TASK,
  DELETE_TASK_SUCCESS,
  DELETE_TASK_ERROR,
  ACTUAL_TASK,
  UPDATE_TASK,
  UPDATE_TASK_ERROR,
  UPDATE_TASK_SUCCESS,
  RESET_ACTUAL_TASK,
  RESET_FORM_TASK,
  LOGOUT_TASK,
} from '../types';

const initialState = {
  loading: false,
  tasksProject: [],
  activeTask: null,
  errorTask: false,
  errorFormTask: false,
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TASK:
    case DELETE_TASK:
    case ADD_TASK:
    case GET_TASKS:
      return {
        ...state,
        loading: true,
        errorTask: false,
      };

    case GET_TASKS_SUCCESS:
      return {
        ...state,
        loading: false,
        tasksProject: action.payload,
      };

    case ADD_TASK_SUCCESS:
      return {
        ...state,
        loading: false,
        tasksProject: [...state.tasksProject, action.payload],
      };

    case DELETE_TASK_SUCCESS:
      return {
        ...state,
        loading: false,
        tasksProject: state.tasksProject.filter(
          task => task._id !== action.payload,
        ),
      };

    case UPDATE_TASK_SUCCESS:
      return {
        ...state,
        loading: false,
        tasksProject: state.tasksProject.map(task =>
          task._id !== action.payload._id ? task : action.payload,
        ),
      };

    case UPDATE_TASK_ERROR:
    case DELETE_TASK_ERROR:
    case ADD_TASK_ERROR:
    case GET_TASKS_ERROR:
      return {
        ...state,
        loading: false,
        errorTask: action.payload,
      };

    case VALIDATE_FORM_TASK:
      return {
        ...state,
        errorFormTask: action.payload,
      };

    case RESET_TASKS:
      return {
        ...state,
        tasksProject: action.payload,
      };

    case ACTUAL_TASK:
      return {
        ...state,
        activeTask: action.payload,
        errorFormTask: false,
      };

    case RESET_ACTUAL_TASK:
      return {
        ...state,
        activeTask: null,
      };

    case RESET_FORM_TASK:
      return {
        ...state,
        errorFormTask: false,
      };

    case LOGOUT_TASK:
      return {
        ...state,
        loading: false,
        tasksProject: [],
        activeTask: null,
        errorTask: false,
        errorFormTask: false,
      };

    default:
      return state;
  }
};

export default taskReducer;
