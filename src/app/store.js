import { configureStore } from '@reduxjs/toolkit';
import mobilesReducer from '../features/Mobile/moblieSlice';

export const store = configureStore({
  reducer: {
    mobiles : mobilesReducer,
  },
});
