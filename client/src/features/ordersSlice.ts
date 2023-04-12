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
        updateOrder(state, action) {
            const existingOrder = state.orders.find(
                (order) => order.orderId === action.payload.orderId
            );

            if (existingOrder) {
                existingOrder.status = action.payload.status;
                existingOrder.changeTime = action.payload.changeTime;
            }
        },
    },
});

export const { addOrder, updateOrder } = ordersSlice.actions;
export default ordersSlice.reducer;
