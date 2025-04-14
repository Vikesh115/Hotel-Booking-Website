import React from 'react'
import { useSelector } from 'react-redux'
import { GiPlayButton } from "react-icons/gi";
import { Link } from 'react-router-dom';

function Type() {
    const { details } = useSelector((state) => state.hotels)

    return (
        <div className='flex flex-col lg:ml-18 mx-10 mt-6'>
            <p className='bg-blue-700 text-white p-1'>Room type</p>
            <div>
                {details?.rooms?.map((room, index) => (
                    <div key={index} className='flex flex-col p-2 border-1'>
                        <Link className='flex items-center'>
                            <GiPlayButton className='text-lime-500'/>
                            <p className='text-blue-700 underline'>{room?.roomName}</p>
                        </Link>
                        <p>{room?.bedTypes[0]?.bedType}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Type