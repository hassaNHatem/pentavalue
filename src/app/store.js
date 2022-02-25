import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import DashboardSlice from '../DashboardSlice';
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    Dashboard:DashboardSlice,
   
  },
});
