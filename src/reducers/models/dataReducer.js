import { createSlice } from "@reduxjs/toolkit";

const dataReducer = createSlice({
  name: 'data',
  initialState: {
    renderItemsState: [],
    allItemsState: []
  },
  reducers: {
    setGet: (state, action) => {
      state.renderItemsState = action.payload;
      state.allItemsState = [];
    },
    setGetSeveralData: (state, action) => {
      let summaryItems = action.payload.map((element) => element.summaryItems);
			let allItems = action.payload.map((element) => element.allItems);
      state.renderItemsState = summaryItems;
      state.allItemsState = allItems;
    },
    setPost: (state, action) => {
      state.renderItemsState.push(action.payload);
    },
    setPostSeveralData: (state, action) => {
      state.renderItemsState.push(action.payload.summaryItems);
      state.allItemsState.push(action.payload.allItems);
    },
    setEdit: (state, action) => {
      state.renderItemsState = state.renderItemsState.map(item => (item.codigo === action.payload.codigo ? action.payload : item));
    },
    setEditSeverallData: (state, action) => {
      state.renderItemsState = state.renderItemsState.map(item => (item.codigo === action.payload.summaryItems.codigo ? action.payload.summaryItems : item));
      state.allItemsState = state.allItemsState.map(item => (item.codigo === action.payload.allItems.codigo ? action.payload.allItems : item));
    },
    setDelete: (state, action) => {
      state.renderItemsState = state.renderItemsState.filter(item => item.codigo !== action.payload.codigo);
      state.allItemsState = state.allItemsState.filter(item => item.codigo !== action.payload.codigo);
    }
  }
});

export const { setGet, setGetSeveralData, setPost, setPostSeveralData, setEdit, setEditSeverallData, setDelete } = dataReducer.actions;

export default dataReducer.reducer

