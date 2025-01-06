import { createSlice } from "@reduxjs/toolkit";
const preferenceSlice = createSlice({
  name : 'preferences',
  initialState : {
    theme : 'light',
    sortedBy : 'createdAt',
    showCompleted : 'true'
  },
  reducers : {
    toggleTheme : (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
    sorted : (state,action) => {
      state.sortedBy = action.payload;
    },
    completed : (state) => {
      state.showCompleted = !state.showCompleted;
    }
  }
})
export const {toggleTheme,sorted,completed} = preferenceSlice.actions;
export default preferenceSlice.reducer;