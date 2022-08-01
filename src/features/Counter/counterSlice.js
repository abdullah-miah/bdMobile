const { createSlice } = require("@reduxjs/toolkit");

export const counterSlcie = createSlice({
    name: "counter",
    initialState: {count: 1},
    reducers:{
        increment: state =>{
            state.count = state.count + 1;
        },
        decrement: state =>{
            state.count = state.count - 1;
        },
    }
})

export const {increment, decrement} = counterSlcie.actions;
export default counterSlcie.reducer;