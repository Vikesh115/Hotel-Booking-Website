import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const hotelapi = createAsyncThunk(
    'hotels/hotelapi',
    async () => {
        try {
            await new Promise(resolve => setTimeout(resolve, 1000));
                const response  = await axios.get("https://api.liteapi.travel/v3.0/data/hotels?countryCode=IN",{
                headers: {
                    accept: "application/json",
                    'X-API-Key': import.meta.env.VITE_API_KEY,
                }
            })
            return response?.data?.data;
        } catch (error) {
            console.log(error);
        }
    }
);

export const hoteldetail = createAsyncThunk(
    'hotels/hoteldetail',
    async (id) => {
        try {
            await new Promise(resolve => setTimeout(resolve, 1000));
            const response = await axios.get(`https://api.liteapi.travel/v3.0/data/hotel?hotelId=${id}&timeout=4`,{
                headers: {
                    accept: 'application/json',
                    'X-API-Key': import.meta.env.VITE_API_KEY,
                }
            })
            return response?.data?.data;
        } catch (error) {
            console.log(error);
        }
    }
)