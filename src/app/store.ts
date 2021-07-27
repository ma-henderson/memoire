import { configureStore } from '@reduxjs/toolkit';
import memorySlice from '../features/memory/memory-slice';

export const store = configureStore({
  reducer: {
    memory: memorySlice,
  }
})

// These types are used to Type-ify hooks
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
