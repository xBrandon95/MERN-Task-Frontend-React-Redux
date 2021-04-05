import clientAxios from '../../config/axios';
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
  UPDATE_TASK_SUCCESS,
  UPDATE_TASK_ERROR,
  RESET_ACTUAL_TASK,
  RESET_FORM_TASK,
  LOGOUT_TASK,
} from '../types';

// Actions - Get All Proyects
const getTasks = () => ({
  type: GET_TASKS,
});

export const getTasksSuccess = projectId => ({
  type: GET_TASKS_SUCCESS,
  payload: projectId,
});

const getTasksError = () => ({
  type: GET_TASKS_ERROR,
  payload: true,
});

export const getAllTasksAction = project => {
  return async dispatch => {
    dispatch(getTasks());
    try {
      const res = await clientAxios.get('/api/tasks', { params: { project } });
      dispatch(getTasksSuccess(res.data));
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
  return async dispatch => {
    dispatch(addTask());
    try {
      const res = await clientAxios.post('/api/tasks', task);
      dispatch(addTaskSuccess(res.data.task));
      dispatch(getAllTasksAction(res.data.task.project));
    } catch (error) {
      console.log(error.response);
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

export const deleteTaskAction = (taskId, projectId) => {
  return async dispatch => {
    dispatch(deleteTask());
    try {
      await clientAxios.delete(`/api/tasks/${taskId}`, {
        params: { project: projectId },
      });
      dispatch(deleteTaskSuccess(taskId));
      dispatch(getAllTasksAction(projectId));
    } catch (error) {
      console.log(error);
      dispatch(deleteTaskError());
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
  return async dispatch => {
    dispatch(updateTask());
    try {
      const res = await clientAxios.put(`/api/tasks/${task._id}`, task);
      dispatch(updateTaskSuccess(res.data.task));
    } catch (error) {
      dispatch(updateTaskError());
    }
  };
};

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

// logout task
export const logoutTask = () => ({
  type: LOGOUT_TASK,
});
