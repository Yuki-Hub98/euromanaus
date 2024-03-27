const dataReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_DATA':
      return action.payload;
    case 'POST_DATA':
      return [...state, action.payload];
    case 'EDIT_DATA':
      return state.map(item => (item.codigo === action.payload.codigo ? action.payload : item));
    case 'DELETE_DATA':
      return state.filter(item => item.codigo !== action.payload.codigo);
    default:
      return state;
  }
};

export default dataReducer;