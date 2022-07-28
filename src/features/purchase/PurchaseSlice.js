import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



export const fetchMobilesPurchase = createAsyncThunk("mobilesPurch/fetchMobilesPurchase",
async()=>{
    const res = await axios.get(`http://localhost:5000/purchase`);
    return res.data
}
);

const purchaseSlice = createSlice({
    name: 'mobilesPurchase',
    initialState: {
        isLoading: false,
        mobiles: [],
        error: null
    },
    extraReducers: (builder)=>{
     builder.addCase(fetchMobilesPurchase.pending, (state)=>{
        state.isLoading = true;
     });
     builder.addCase(fetchMobilesPurchase.fulfilled, (state, action)=>{
        state.isLoading = false;
        state.mobiles = action.payload;
        state.error = null;
     });
     builder.addCase(fetchMobilesPurchase.rejected, (state,action)=>{
        state.isLoading = false;
        state.mobiles = [];
        state.error = action.error.message;
     });
    }
})

export default purchaseSlice.reducer;