import { configureStore } from '@reduxjs/toolkit';
import mobilesReducer from '../features/Mobile/moblieSlice';
import PurchaseReducer from '../features/purchase/PurchaseSlice';

export const store = configureStore({
  reducer: {
    mobiles : mobilesReducer,
    purchase: PurchaseReducer,
  },
});
