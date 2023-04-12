import { configureStore } from '@reduxjs/toolkit';
import instrumentsSlice from '../features/instrumentsSlice';
import ordersSlice from '../features/ordersSlice';

export const store = configureStore({
    reducer: {
        instruments: instrumentsSlice,
        orders: ordersSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
