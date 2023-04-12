import { createSlice } from '@reduxjs/toolkit';

interface Instruments {
    id: number;
    subscribe: boolean;
}

const initialState: { instruments: Instruments[] } = {
    instruments: [],
};

const instrumentsSlice = createSlice({
    name: 'instruments',
    initialState,
    reducers: {
        addInstrument(state, action) {
            state.instruments.push(action.payload);
        },
    },
});

export const { addInstrument } = instrumentsSlice.actions;
export default instrumentsSlice.reducer;
