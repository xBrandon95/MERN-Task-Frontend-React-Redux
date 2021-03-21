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
  UPDATE_TASK_ERROR,
  UPDATE_TASK_SUCCESS,
  RESET_ACTUAL_TASK,
  RESET_FORM_TASK,
} from '../types';

const initialState = {
  tasks: [
    { projectId: 1, id: 1, name: 'Elegir Plataforma', state: true },
    { projectId: 1, id: 2, name: 'Elegir Desarrollo', state: true },
    { projectId: 1, id: 3, name: 'Elegir Plataforma', state: true },
    { projectId: 1, id: 4, name: 'Elegir Colores', state: false },
    { projectId: 2, id: 5, name: 'Elegir Colores', state: false },
    { projectId: 2, id: 6, name: 'Elegir Desarrollo', state: true },
    { projectId: 3, id: 7, name: 'Elegir Plataforma', state: true },
    { projectId: 3, id: 8, name: 'Elegir Colores', state: false },
    { projectId: 3, id: 9, name: 'Elegir Desarrollo', state: true },
  ],
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
        tasksProject: state.tasks.filter(
          task => task.projectId === action.payload,
        ),
      };

    case ADD_TASK_SUCCESS:
      return {
        ...state,
        loading: false,
        tasks: [...state.tasks, action.payload],
      };

    case DELETE_TASK_SUCCESS:
      return {
        ...state,
        loading: false,
        tasks: state.tasks.filter(task => task.id !== action.payload),
      };

    case UPDATE_TASK_SUCCESS:
      return {
        ...state,
        loading: false,
        tasks: state.tasks.map(task =>
          task.id !== action.payload.id ? task : action.payload,
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

    case CHANGE_STATE_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload.id ? action.payload : task,
        ),
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

    default:
      return state;
  }
};

export default taskReducer;
