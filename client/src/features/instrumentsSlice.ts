import { createSlice } from '@reduxjs/toolkit';

interface Instruments {
    id: number;
    subscribe: boolean;
    name: string;
}

const initialState: { instruments: Instruments[] } = {
    instruments: [
        { id: 1, subscribe: false, name: 'CNN\\RUB' },
        { id: 2, subscribe: false, name: 'EUR\\RUB' },
        { id: 3, subscribe: false, name: 'EUR\\USD' },
        { id: 4, subscribe: false, name: 'USD\\RUB' },
        { id: 5, subscribe: false, name: 'TRY\\RUB' },
        { id: 6, subscribe: false, name: 'BYN\\RUB' },
    ],
};

const instrumentsSlice = createSlice({
    name: 'instruments',
    initialState,
    reducers: {
        changeSubscribe(state, action) {
            state.instruments.map((i) =>
                i.id === action.payload.id
                    ? (i.subscribe = action.payload.subscribe)
                    : i
            );
        },
    },
});

export const { changeSubscribe } = instrumentsSlice.actions;
export default instrumentsSlice.reducer;
