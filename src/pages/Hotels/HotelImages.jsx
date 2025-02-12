import React from 'react'
import { useSelector } from 'react-redux';
import { LazyLoadImage } from "react-lazy-load-image-component";

function HotelImages() {

    const { details } = useSelector((state) => state.hotels)

    return (
        <div>
            <p className='flex text-2xl font-bold justify-center py-6 '>Hotel Images</p>
            <div>
                {details?.hotelImages?.map((image, index) => (
                    <div key={index} className='flex items-center justify-center gap-4 w-[100%]'>
                        <div key={index} className='flex items-center justify-center flex-wrap'>
                            <div className=' p-4 '>
                            <LazyLoadImage src={image?.urlHd}
                                width={600} height={400}
                                alt="loading"
                                className='w-[100%] rounded-4xl'
                            />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default HotelImages