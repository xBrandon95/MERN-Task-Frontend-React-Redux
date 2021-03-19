const initialState = {
  task: [],
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ACTION_TYPE':
      return null;
    default:
      return state;
  }
};

export default taskReducer;
