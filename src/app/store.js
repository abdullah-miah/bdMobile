import { configureStore } from '@reduxjs/toolkit';
import CounterReducer from '../features/Counter/counterSlice';

import mobilesReducer from '../features/Mobile/moblieSlice';


export const store = configureStore({
  reducer: {
    mobiles : mobilesReducer,
    counter: CounterReducer,
  },
});
