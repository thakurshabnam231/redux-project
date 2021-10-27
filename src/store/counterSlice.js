 import {createSlice} from '@reduxjs/toolkit';
 const counterInitialState = {
    counter: 0,
    showCounter: true,
}
const counterSlice = createSlice({
    name: 'counter',
    initialState: counterInitialState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        increase(state, action) {
            state.counter = state.counter + action.payload;
        },
        decrement(state) {
            state.counter--;
        },
        toggleCounterHandler(state) {
            state.showCounter = !state.showCounter;
        },
    }
});
export const counterActions = counterSlice.actions;
export default counterSlice.reducer;