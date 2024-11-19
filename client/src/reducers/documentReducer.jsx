const initialState = {
  content: '',
};

const documentReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_DOCUMENT':
      return { ...state, content: action.payload };
    default:
      return state;
  }
};

export default documentReducer;
  




