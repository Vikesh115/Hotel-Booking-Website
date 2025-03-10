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
                    'X-API-Key': 'sand_822c6ced-1c4e-4a60-93e2-2c83129e69d1',
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
                    'X-API-Key': 'sand_822c6ced-1c4e-4a60-93e2-2c83129e69d1'
                }
            })
            console.log(response?.data?.data);
            return response?.data?.data;
        } catch (error) {
            console.log(error);
        }
    }
)

// export const hotelreview = createAsyncThunk(
//     'hotels/hotelreview',
//     async (id) => {
//         try {
//             const response = await axios.get(`https://api.liteapi.travel/v3.0/data/reviews?hotelId=${id}&timeout=4&getSentiment=false`,{
//                 headers: {
//                     accept: 'application/json',
//                     'X-API-Key': 'sand_822c6ced-1c4e-4a60-93e2-2c83129e69d1'
//                 }
//             })
//             console.log(response?.data);
//             return response?.data?.data;
//         } catch (error) {
//             console.log(error);
//         }
//     }
// )