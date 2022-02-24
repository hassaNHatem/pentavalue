import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import DashboardSlice from '../DashboardSlice';
import dataSlice from '../dataSlice';
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    Dashboard:DashboardSlice,
    data:dataSlice
  },
});
