import React from 'react'

function FavHotels() {
    const storedFav = JSON.parse(localStorage.getItem('faviorates') || '[]');
    console.log(storedFav);

    return (
        <div className='flex flex-col px-4'>
            <p className='flex justify-center text-2xl font-extrabold'>Faviorates</p>
            {storedFav.map((faviorate, index)=>(
                <div className=' shadow-fuchsia-400 shadow-2xl p-2' key={index}>
                <img src={faviorate?.hotelImg} alt="" className='w-[100%] h-[300px] lg:h-[200px] lg:w-[200px] rounded-2xl object-cover ' />
                <p key={index}>{faviorate.hotelName}</p>
                </div>
            ))}
        </div>
    )
}

export default FavHotels