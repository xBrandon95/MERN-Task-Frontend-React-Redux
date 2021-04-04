import clientAxios from '../../config/axios';
import tokenAuth from '../../config/token';
import {
  REGISTRATION_SUCCESS,
  REGISTRATION_ERROR,
  GET_USER,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT,
} from '../types';

// ----- Register USER -----

export const registerSuccess = data => ({
  type: REGISTRATION_SUCCESS,
  payload: data,
});

const registerError = alert => ({
  type: REGISTRATION_ERROR,
  payload: alert,
});

// ----- Return User Authenticated -----

export const userAuthenticated = () => {
  return async dispatch => {
    const token = localStorage.getItem('token');

    if (token) {
      // TODO: function to send the token by header
      tokenAuth(token);
    }

    try {
      const res = await clientAxios.get('/api/auth');
      dispatch({
        type: GET_USER,
        payload: res.data,
      });
    } catch (error) {
      console.log(error.response);
      dispatch({
        type: LOGIN_ERROR,
      });
    }
  };
};

export const registerUserAction = user => {
  return async dispatch => {
    try {
      const res = await clientAxios.post('/api/users', user);
      dispatch(registerSuccess(res.data));

      // get user
      dispatch(userAuthenticated());
    } catch (error) {
      const alert = {
        msg: error.response.data.msg,
        category: 'alert-error',
      };
      dispatch(registerError(alert));
    }
  };
};

// Login
export const loginAction = data => {
  return async dispatch => {
    try {
      const res = await clientAxios.post('/api/auth', data);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });

      // get user
      dispatch(userAuthenticated());
    } catch (error) {
      console.log(error.response.data);
      const alert = {
        msg: error.response.data.msg,
        category: 'alert-error',
      };
      dispatch(registerError(alert));
    }
  };
};

export const logoutAction = () => ({
  type: LOGOUT,
});
