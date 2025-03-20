import React, { useEffect, useMemo, useState } from 'react'

function FavHotels() {
    // Memoize the storedFav array to prevent unnecessary recreations
    const storedFav = useMemo(() => JSON.parse(localStorage.getItem('faviorates') || '[]'),[]);
    console.log(storedFav);

    const [query, setQuery] = useState('');
    const [searchresults, setSearchresults] = useState(storedFav);

    const handlequery = (e) => {
        const value = e.target.value;
        setQuery(value)
    }

    // Faced warning due to infinite call of storedfav because setsearchresults every time when rerender because query will be empty then storedfav call after every render;
    useEffect(() => {
        if (query) {
            const filterHotel = storedFav.filter(item => item.hotelName.toLowerCase().includes(query.toLowerCase()));
            setSearchresults(filterHotel);
        } else {
            setSearchresults(storedFav)
        }
    }, [query, storedFav])

    return (
        <div className='flex flex-col px-4 w-[100%]'>
            <p className='flex justify-center text-2xl font-extrabold'>Faviorates</p>
            <div className='flex justify-center w-[100%]'>
                <input
                    type="text"
                    value={query}
                    placeholder='Search favoirate hotel'
                    className='p-2 rounded-md border-none w-[100%] bg-blue-100 focus:bg-blue-200 focus:outline-none'
                    onChange={handlequery}
                />
            </div>

            {searchresults && searchresults.map((faviorate, index) => (
                <div className='  shadow-2xl p-2' key={index}>
                    <img src={faviorate?.hotelImg} alt="" className='w-[100%] h-[300px] lg:h-[200px] lg:w-[200px] rounded-2xl object-cover ' />
                    <p key={index}>{faviorate.hotelName}</p>
                </div>
            ))}
        </div>
    )
}

export default FavHotels



// import React, { useEffect, useState } from 'react'

// function FavHotels() {
//     const [storedFav, setStoredFav] = useState([]);

//     useEffect(() => {
//         const favorites = JSON.parse(localStorage.getItem('faviorates') || '[]');
//         setStoredFav(favorites);
//     }, []); 

//     console.log(storedFav);

//     const [query, setQuery] = useState('');
//     const [searchresults, setSearchresults] = useState(storedFav);

//     const handlequery = (e) => {
//         const value = e.target.value;
//         setQuery(value)
//     }

//     useEffect(() => {
//         if (query) {
//             const filterHotel = storedFav.filter(item => item.hotelName.toLowerCase().includes(query.toLowerCase()));
//             setSearchresults(filterHotel);
//         } else {
//             setSearchresults(storedFav);
//         }
//     }, [query, storedFav]);

//     return (
//         <div className='flex flex-col px-4 w-[100%]'>
//             <p className='flex justify-center text-2xl font-extrabold'>Faviorates</p>
//             <div className='flex justify-center w-[100%]'>
//                 <input
//                     type="text"
//                     value={query}
//                     placeholder='Search favoirate hotel'
//                     className='p-2 rounded-md border-none w-[100%] bg-blue-100 focus:bg-blue-200 focus:outline-none'
//                     onChange={handlequery}
//                 />
//             </div>

//             {searchresults && searchresults.map((faviorate, index) => (
//                 <div className='  shadow-2xl p-2' key={index}>
//                     <img src={faviorate?.hotelImg} alt="" className='w-[100%] h-[300px] lg:h-[200px] lg:w-[200px] rounded-2xl object-cover ' />
//                     <p key={index}>{faviorate.hotelName}</p>
//                 </div>
//             ))}
//         </div>
//     )
// }

// export default FavHotels