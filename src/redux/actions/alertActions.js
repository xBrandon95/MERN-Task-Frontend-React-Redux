import { HIDE_ALERT, SHOW_ALERT } from '../types';

const showAlert = (msg, category) => ({
  type: SHOW_ALERT,
  payload: { msg, category },
});

const hideAlert = () => ({
  type: HIDE_ALERT,
});

const showAlertAction = (msg, category) => {
  return dispatch => {
    dispatch(showAlert(msg, category));

    // After 5 seconnds clear the alert
    setTimeout(() => {
      dispatch(hideAlert());
    }, 5000);
  };
};

export default showAlertAction;
