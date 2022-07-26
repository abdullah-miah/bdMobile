import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



export const fetchMobiles = createAsyncThunk("mobiles/fetchPost",
async()=>{
    const res = await axios.get("http://localhost:5000/products");
    return res.data
}
);

const postSlice = createSlice({
    name: 'mobilesPurchase',
    initialState: {
        isLoading: false,
        mobiles: [],
        error: null
    },
    extraReducers: (builder)=>{
     builder.addCase(fetchMobiles.pending, (state)=>{
        state.isLoading = true;
     });
     builder.addCase(fetchMobiles.fulfilled, (state, action)=>{
        state.isLoading = false;
        state.mobiles = action.payload;
        state.error = null;
     });
     builder.addCase(fetchMobiles.rejected, (state,action)=>{
        state.isLoading = false;
        state.mobiles = [];
        state.error = action.error.message;
     });
    }
})

export default postSlice.reducer;