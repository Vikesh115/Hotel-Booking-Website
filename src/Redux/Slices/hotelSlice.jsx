import { createSlice } from '@reduxjs/toolkit';
import { hotelapi, hoteldetail, hotelreview } from '../actions/Action';

const initialState = {
    hotels: [],
    reviews: [],
    details: {},
    loading: false,
    error: null
}

const hotelSlice = createSlice({
    name: 'hotels',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(hotelapi.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(hotelapi.fulfilled, (state, action) => {
                state.loading = false;
                state.hotels = action.payload;
            })
            .addCase(hotelapi.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(hoteldetail.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(hoteldetail.fulfilled, (state, action) => {
                state.loading = false;
                state.details = action.payload;
            })
            .addCase(hoteldetail.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(hotelreview.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(hotelreview.fulfilled, (state, action) => {
                state.loading = false;
                state.reviews = action.payload;
            })
            .addCase(hotelreview.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
    },
});



export default hotelSlice.reducer;