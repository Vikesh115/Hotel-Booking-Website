import React from 'react'
import { useSelector } from 'react-redux';
import { LazyLoadImage } from "react-lazy-load-image-component";

function HotelImages() {

    const { details } = useSelector((state) => state.hotels)

    return (
        <div>
            <p className='flex text-2xl font-bold justify-center py-6 '>Hotel Images</p>
            <div className='flex flex-col w-[100%] bg-blue-200'>
                {details?.hotelImages?.map((image, index) => (
                        <div key={index} className='flex flex-col h-screen'>
                            <div  className='flex items-center justify-center p-2 h-full'>
                            <LazyLoadImage src={image?.urlHd}
                                alt="loading"
                                className='object-cover w-full h-full'
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default HotelImages