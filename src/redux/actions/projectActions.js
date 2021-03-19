// eslint-disable-next-line import/no-extraneous-dependencies
import shortid from 'shortid';

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

const getProjectsError = () => ({
  type: GET_PROJECTS_ERROR,
  payload: true,
});

export const getAllProjectsAction = () => {
  return dispatch => {
    dispatch(getProjects());

    try {
      const projects = [
        { id: 1, name: 'Tienda Virtual' },
        { id: 2, name: 'Intranet' },
        { id: 3, name: 'Desarrollo Web' },
      ];

      dispatch(getProjectsSuccess(projects));
    } catch (error) {
      console.log(error);
      dispatch(getProjectsError());
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

const addProjectError = () => ({
  type: ADD_PROJECT_ERROR,
  payload: true,
});

export const addProjectAction = project => {
  return dispatch => {
    dispatch(addProject());

    const newProject = { id: shortid.generate(), ...project };

    try {
      dispatch(addProjectSuccess(newProject));
      dispatch(actualProjectAction(newProject));
    } catch (error) {
      console.log(error);
      dispatch(addProjectError());
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

const deleteProjectError = () => ({
  type: DELETE_PROJECT_ERROR,
  payload: true,
});

export const deleteProjectAction = idProject => {
  return dispatch => {
    dispatch(deleteProject());

    try {
      dispatch(deleteProjectSuccess(idProject));
    } catch (error) {
      console.log(error);
      dispatch(deleteProjectError());
    }
  };
};
