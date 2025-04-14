import React from 'react'
import { useSelector } from 'react-redux'

function Facility() {
    const { details } = useSelector((state) => state.hotels)
    return (
        <div className='flex flex-col lg:ml-18 mx-10 my-6 '>
            <p className='text-2xl font-bold '>Facilities of {details.name} by {details.chain}</p>
            <span className='font-extralight text-xs'>Great facilities! Review score, {details.rating}</span>
            <span className='font-bold'>Most popular facilities</span>
            <div className='flex flex-wrap flex-row gap-2 items-center '>
                <div className='flex flex-row flex-wrap gap-5 '>
                    {details?.facilities?.map((facility, index) => (
                        <p key={index} className='p-1 border-1 rounded'>
                            {facility.name}
                        </p>
                    ))}
                </div>
            </div>
        </div>)
}

export default Facility