import React from 'react'
import { useSelector } from 'react-redux';

function HotelImages() {

    const { details } = useSelector((state) => state.hotels)
    // console.log(details);

    return (
        <div>
            <p className='flex text-2xl font-bold justify-center py-6 '>Hotel Images</p>
            <div>
            {details?.hotelImages?.map((image, index) => (
                <div key={index} className='flex items-center justify-center gap-4 w-[100%]'>
                    <div key={index} className='flex items-center justify-center flex-wrap'>
                        <img src={image?.urlHd} alt="" className='rounded-4xl p-4 w-[100%] ' />
                    </div>
                </div>
            ))}
            </div>
        </div>
    )
}

export default HotelImages