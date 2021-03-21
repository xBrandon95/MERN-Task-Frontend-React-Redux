// eslint-disable-next-line import/no-extraneous-dependencies
import shortid from 'shortid';

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
  CHANGE_STATE_TASK,
  ACTUAL_TASK,
  UPDATE_TASK,
  UPDATE_TASK_SUCCESS,
  UPDATE_TASK_ERROR,
  RESET_ACTUAL_TASK,
  RESET_FORM_TASK,
} from '../types';

// Actions - Get All Proyects
const getTasks = () => ({
  type: GET_TASKS,
});

const getTasksSuccess = projectId => ({
  type: GET_TASKS_SUCCESS,
  payload: projectId,
});

const getTasksError = () => ({
  type: GET_TASKS_ERROR,
  payload: true,
});

export const getAllTasksAction = projectId => {
  return dispatch => {
    dispatch(getTasks());

    try {
      dispatch(getTasksSuccess(projectId));
    } catch (error) {
      console.log(error);
      dispatch(getTasksError());
    }
  };
};

const addTask = () => ({
  type: ADD_TASK,
});

const addTaskSuccess = task => ({
  type: ADD_TASK_SUCCESS,
  payload: task,
});

const addTaskError = () => ({
  type: ADD_TASK_ERROR,
  payload: true,
});

export const addTasksAction = task => {
  return dispatch => {
    dispatch(addTask());

    const newTask = { id: shortid.generate(), ...task };
    try {
      dispatch(addTaskSuccess(newTask));
      dispatch(getAllTasksAction(newTask.projectId));
    } catch (error) {
      console.log(error);
      dispatch(addTaskError());
    }
  };
};

// Validate Form
export const errorFormTaskAction = value => ({
  type: VALIDATE_FORM_TASK,
  payload: value,
});

export const resetTaskAction = () => ({
  type: RESET_TASKS,
  payload: [],
});

// Delete Task
const deleteTask = () => ({
  type: DELETE_TASK,
});

const deleteTaskSuccess = taskId => ({
  type: DELETE_TASK_SUCCESS,
  payload: taskId,
});

const deleteTaskError = () => ({
  type: DELETE_TASK_ERROR,
  payload: true,
});

export const deleteTaskAction = taskId => {
  return dispatch => {
    dispatch(deleteTask());
    try {
      dispatch(deleteTaskSuccess(taskId));
    } catch (error) {
      dispatch(deleteTaskError());
      console.log(error);
    }
  };
};

// Update Task
const updateTask = () => ({
  type: UPDATE_TASK,
});

const updateTaskSuccess = task => ({
  type: UPDATE_TASK_SUCCESS,
  payload: task,
});

const updateTaskError = () => ({
  type: UPDATE_TASK_ERROR,
  payload: true,
});

export const updateTasksAction = task => {
  return dispatch => {
    dispatch(updateTask());

    try {
      dispatch(updateTaskSuccess(task));
      dispatch(getAllTasksAction(task.projectId));
    } catch (error) {
      console.log(error);
      dispatch(updateTaskError());
    }
  };
};

// change state task
export const changeStateTaskAction = task => ({
  type: CHANGE_STATE_TASK,
  payload: task,
});

// actual task
export const taskActualAction = task => ({
  type: ACTUAL_TASK,
  payload: task,
});

// reset actual task
export const resetActualTaskAction = () => ({
  type: RESET_ACTUAL_TASK,
});

// reset actual task
export const resetFormTaskAction = () => ({
  type: RESET_FORM_TASK,
});
