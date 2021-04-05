import {
  REGISTRATION_SUCCESS,
  REGISTRATION_ERROR,
  GET_USER,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT,
} from '../types';

const initialState = {
  token: localStorage.getItem('token'),
  auth: null,
  user: null,
  message: null,
  loading: true,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
    case REGISTRATION_SUCCESS:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        auth: true,
        message: null,
        loading: false,
      };

    case GET_USER:
      return {
        ...state,
        user: action.payload.user,
        auth: true,
        loading: false,
      };

    case LOGOUT:
    case LOGIN_ERROR:
    case REGISTRATION_ERROR:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        user: null,
        message: action.payload,
        loading: false,
        auth: null,
      };

    default:
      return state;
  }
};

export default authReducer;
