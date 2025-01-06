import { configureStore } from '@reduxjs/toolkit';
import taskreducer from '../redux/taskslice';
import preferencereducer from '../redux/preferenceSlice';
export const store = configureStore({
  reducer : {
    tasks : taskreducer,
    preferences : preferencereducer,
  }
});