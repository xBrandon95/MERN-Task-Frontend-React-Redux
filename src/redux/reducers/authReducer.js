const initialState = {
  auth: [],
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ACTION_TYPE':
      return null;
    default:
      return state;
  }
};

export default authReducer;
