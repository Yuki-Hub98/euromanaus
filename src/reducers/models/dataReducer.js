import { RemoveDuplicatesCodigo } from "@/functions/removeDuplicates"
export const GET_DATA = 'GET_DATA'
export const GET_MOREDATA = 'GET_MOREDATA'
export const POST_DATA = 'POST_DATA'
export const POST_MOREDATA = 'POST_MOREDATA'
export const EDIT_DATA = 'EDIT_DATA'
export const DELETE_DATA = 'DELETE_DATA'
export const EDIT_MOREDATA = 'EDIT_MOREDATA'

const setGet = (data) => ( {
  type: GET_DATA,
  payload:data
})

const setGetSeveralData = (summaryItems, allItems) => ({
  type: GET_MOREDATA,
  payload: summaryItems,
  allPayload: allItems,
})

const setPost = (data) => ({
  type: POST_DATA,
  payload: data
})

const setPostSeveralData = (summaryItems, allItems) => ({
  type: POST_MOREDATA,
  payload: summaryItems,
  allPayload: allItems,
})

const setEdit = (data) => ({
  type: EDIT_DATA,
  payload: data
})

const setEditSeveralData = (summaryItems, allItems) => ({
  type: EDIT_MOREDATA,
  payload: summaryItems,
  allPayload: allItems,
})

const setDelete = (data) => ({
  type: DELETE_DATA,
  payload: data
})


const initialState = {
  renderItemsState: [],
  allItemsState: []
}

const dataReducer = (state = initialState , action) => {
  switch (action.type) {
    case GET_DATA:
      return {...state, renderItemsState: action.payload, allItemsState:[]};
    case GET_MOREDATA:
      return {...state, renderItemsState: action.payload, allItemsState: action.allPayload};
    case POST_DATA:
      return {...state, renderItemsState: [...state.renderItemsState, action.payload]};
    case POST_MOREDATA:
      return {...state, renderItemsState: [...state.renderItemsState, action.payload], allItemsState: [...state.allItemsState, action.allPayload]};
    case EDIT_DATA:
      return {...state, renderItemsState: state.renderItemsState.map(item => (item.codigo === action.payload.codigo ? action.payload : item))};
    case EDIT_MOREDATA:
      return {...state, renderItemsState: state.renderItemsState.map(item => (item.codigo === action.payload.codigo ? action.payload : item)),
        allItemsState: RemoveDuplicatesCodigo([action.allPayload, ...state.allItemsState])};
    case DELETE_DATA:
      return {...state, renderItemsState: state.renderItemsState.filter(item => item.codigo !== action.payload.codigo), 
        allItemsState: state.allItemsState.filter(item => item.codigo !== action.payload.codigo)};
    default:
      return state;
  }
};

export {dataReducer, setGet, setGetSeveralData, setPost, setPostSeveralData, setEdit, setEditSeveralData, setDelete};