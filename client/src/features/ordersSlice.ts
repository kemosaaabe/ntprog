import { createSlice } from '@reduxjs/toolkit';

export interface orderInterface {
    orderId: number;
    creationTime: string;
    changeTime: string;
    side: string;
    instrument: number;
    amount: number;
    price: number;
    status: string;
}

const initialState: { orders: orderInterface[] } = {
    orders: [],
};

const ordersSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
        addOrder(state, action) {
            state.orders.push(action.payload);
        },
    },
});

export const { addOrder } = ordersSlice.actions;
export default ordersSlice.reducer;
