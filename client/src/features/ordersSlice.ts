import { createSlice } from '@reduxjs/toolkit';

interface ordersAction {
    orderId: number;
    creationTime: string;
    side: string;
    instrument: number;
    amount: number;
    price: number;
}

const initialState: { orders: ordersAction[] } = {
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
