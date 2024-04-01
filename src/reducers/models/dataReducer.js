export const GET_DATA = 'GET_DATA'
export const POST_DATA = 'POST_DATA'
export const EDIT_DATA = 'EDIT_DATA'
export const DELETE_DATA = 'DELETE_DATA'
const setGet = (data) => ({
  type: GET_DATA,
  payload:data
})
const setPost = (data) => ({
  type: POST_DATA,
  payload: data
})
const setEdit = (data) => ({
  type: EDIT_DATA,
  payload: data
})
const setDelete = (data) => ({
  type: DELETE_DATA,
  payload: data
})

const dataReducer = (state = [], action) => {
  switch (action.type) {
    case GET_DATA:
      return action.payload;
    case POST_DATA:
      return [...state, action.payload];
    case EDIT_DATA:
      return state.map(item => (item.codigo === action.payload.codigo ? action.payload : item));
    case DELETE_DATA:
      return state.filter(item => item.codigo !== action.payload.codigo);
    default:
      return state;
  }
};

export {dataReducer, setGet, setPost, setEdit, setDelete};