import { createSlice } from '@reduxjs/toolkit';
const taskslice = createSlice({
  name : 'tasks',
  initialState : {
    tasks : [],
    
  },
  reducers : {
    addTask : (state,action) => {
      state.tasks.push ({
        id : Date.now(),
        text : action.payload,
        completed: false,
        createdAt: new Date().toISOString()
      });
    },
    toggleTask: (state, action) => {
      const task = state.tasks.find(task => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
  }

})
export const {addTask,deleteTask,toggleTask} = taskslice.actions;
export default taskslice.reducer;