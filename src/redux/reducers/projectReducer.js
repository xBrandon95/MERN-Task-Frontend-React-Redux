const initialState = {
  newProject: [],
};

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ACTION_TYPE':
      return null;
    default:
      return state;
  }
};

export default projectReducer;
