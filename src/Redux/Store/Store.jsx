import {configureStore} from '@reduxjs/toolkit'
import hotelReducer  from '../Slices/hotelSlice';

const store = configureStore({
    reducer: {
        hotels: hotelReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})

export default store;