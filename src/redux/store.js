import { configureStore } from '@reduxjs/toolkit';
import drinkSlice from './drinkSlice';

export const store = configureStore({
  reducer: {
    drinks: drinkSlice,
  },
});
