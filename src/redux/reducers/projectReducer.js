import {
  SHOW_FORM,
  GET_PROJECTS,
  GET_PROJECTS_SUCCESS,
  GET_PROJECTS_ERROR,
  ADD_PROJECT,
  ADD_PROJECT_SUCCESS,
  ADD_PROJECT_ERROR,
  VALIDATE_FORM,
  ACTUAL_PROJECT,
  DELETE_PROJECT,
  DELETE_PROJECT_SUCCESS,
  DELETE_PROJECT_ERROR,
} from '../types';

const initialState = {
  newProject: false,
  projects: [],
  loading: false,
  errorForm: false,
  activeProject: null,
  message: null,
};

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_FORM:
      return {
        ...state,
        newProject: action.payload,
      };

    case DELETE_PROJECT:
    case ADD_PROJECT:
    case GET_PROJECTS:
      return {
        ...state,
        loading: true,
        message: null,
        errorForm: false,
        newProject: false,
      };

    case GET_PROJECTS_SUCCESS:
      return {
        ...state,
        loading: false,
        projects: action.payload,
      };

    case ADD_PROJECT_SUCCESS:
      return {
        ...state,
        loading: false,
        projects: [action.payload, ...state.projects],
        newProject: false,
      };

    case DELETE_PROJECT_SUCCESS:
      return {
        ...state,
        loading: false,
        projects: state.projects.filter(
          project => project._id !== action.payload,
        ),
        activeProject: null,
      };

    case DELETE_PROJECT_ERROR:
    case GET_PROJECTS_ERROR:
    case ADD_PROJECT_ERROR:
      return {
        ...state,
        loading: false,
        newProject: false,
        message: action.payload,
      };

    case VALIDATE_FORM:
      return {
        ...state,
        errorForm: action.payload,
      };

    case ACTUAL_PROJECT:
      return {
        ...state,
        activeProject: action.payload,
        errorForm: false,
        newProject: false,
      };

    default:
      return state;
  }
};

export default projectReducer;
