import clientAxios from '../../config/axios';
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

export const showFormAction = () => ({
  type: SHOW_FORM,
  payload: true,
});

// Actions - Get All Proyects
const getProjects = () => ({
  type: GET_PROJECTS,
});

const getProjectsSuccess = projects => ({
  type: GET_PROJECTS_SUCCESS,
  payload: projects,
});

const getProjectsError = alert => ({
  type: GET_PROJECTS_ERROR,
  payload: alert,
});

export const getAllProjectsAction = () => {
  return async dispatch => {
    dispatch(getProjects());

    try {
      const res = await clientAxios.get('/api/projects');
      dispatch(getProjectsSuccess(res.data));
    } catch (error) {
      const alert = {
        msg: 'Hubo un error',
        category: 'alert-error',
      };
      dispatch(getProjectsError(alert));
    }
  };
};

// Actual Project
export const actualProjectAction = project => ({
  type: ACTUAL_PROJECT,
  payload: project,
});

// Actions - Add Project
const addProject = () => ({
  type: ADD_PROJECT,
});

const addProjectSuccess = project => ({
  type: ADD_PROJECT_SUCCESS,
  payload: project,
});

const addProjectError = alert => ({
  type: ADD_PROJECT_ERROR,
  payload: alert,
});

export const addProjectAction = project => {
  return async dispatch => {
    dispatch(addProject());
    try {
      const res = await clientAxios.post('/api/projects', project);
      dispatch(addProjectSuccess(res.data));
      dispatch(actualProjectAction(res.data));
    } catch (error) {
      const alert = {
        msg: 'Hubo un error',
        category: 'alert-error',
      };
      dispatch(addProjectError(alert));
    }
  };
};

// Validate Form
export const errorFormAction = value => ({
  type: VALIDATE_FORM,
  payload: value,
});

// Actions - Delete Proyect
const deleteProject = () => ({
  type: DELETE_PROJECT,
});

const deleteProjectSuccess = idProject => ({
  type: DELETE_PROJECT_SUCCESS,
  payload: idProject,
});

const deleteProjectError = alert => ({
  type: DELETE_PROJECT_ERROR,
  payload: alert,
});

export const deleteProjectAction = idProject => {
  return async dispatch => {
    dispatch(deleteProject());

    try {
      await clientAxios.delete(`/api/projects/${idProject}`);
      dispatch(deleteProjectSuccess(idProject));
    } catch (error) {
      const alert = {
        msg: 'Hubo un error',
        category: 'alert-error',
      };
      dispatch(deleteProjectError(alert));
    }
  };
};
