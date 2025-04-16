import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { hotelapi } from '../../Redux/actions/Action';
import { NavLink } from 'react-router-dom';
import Breadcrumb from '../../Components/BreadCrumb/BreadCrumb';
import RatingReview from '../../Components/RatingReview/RatingReview';
import { MdPlace, MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { debounce } from 'lodash';
import Index from './pagination/Index';
import Footer from './footer/Footer';

function Hotels() {
    const [selectedType, setSelectedType] = useState('All');
    const { hotels,loading } = useSelector((state) => state.hotels)
    const [query, setQuery] = useState('');
    const [filteredItems, setFilteredItems] = useState([]);
    const [searchloading, setSearchloading] = useState(false)
    const [favorites, setFavorites] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const filteredCity = selectedType === 'All' ? hotels : hotels?.filter(hotel => hotel.city === selectedType);
    const itemsPerPage = 10;
    const totalItems = filteredCity?.length || 0;
    const totalPages = totalItems > 0 ? Math.ceil(totalItems / itemsPerPage) : 0;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentCity = filteredCity?.slice(startIndex, startIndex + itemsPerPage) || [];

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(hotelapi())
    }, [dispatch])

    const debouncedSearch = debounce((searchQuery) => {
        setSearchloading(true);
        if (searchQuery === "") {
            setFilteredItems([]);
            setSearchloading(false);
        } else {
            setSearchloading(true)
            const lowercasequery = searchQuery.toLowerCase()
            const filtered = hotels.filter(item =>
                item.city.toLowerCase().includes(lowercasequery) ||
                item.name.toLowerCase().includes(lowercasequery)
            );
            setFilteredItems(filtered);
            setTimeout(() => setSearchloading(false), 500); 
        }
    }, 1000);

    useEffect(() => {
        debouncedSearch(query);
        return () => debouncedSearch.cancel();
    }, [query]);

    useEffect(() => {
        const storedFav = JSON.parse(localStorage.getItem('faviorates') || '[]');
        setFavorites(storedFav);
    }, []); 

    const handlefavhotel = (hotel) =>{
        console.log(hotel);
        const hotelId = hotel.id;
        const hotelName = hotel.name;
        const hotelImg = hotel.main_photo;
        const hotelFav = JSON.parse(localStorage.getItem('faviorates') || '[]');
        const hotelIndex = hotelFav.findIndex(b => b.hotelId === hotelId);

            if (hotelIndex >= 0) {
                hotelFav.splice(hotelIndex, 1);
            } else {
                hotelFav.push({ hotelId, hotelName, hotelImg });
            }

        localStorage.setItem('faviorates', JSON.stringify(hotelFav));
        setFavorites(hotelFav);
    }

    const isFav = (hotelID) => {
        return favorites.some(fav => fav.hotelId === hotelID);
    }

    const cityTypes = ['All', ...new Set(hotels?.map(hotel => hotel.city))];

    if(loading){
            return (
                <div className='flex flex-row justify-center items-center h-screen'>
                    <div className='flex'>
                        loading...
                    </div>
                    <div className='flex animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-500'></div>
                </div>
            );
    }

    if (searchloading) {
        return (
            <div className='flex flex-row justify-center items-center h-screen'>
                <div className='flex'>
                    searching...
                </div>
                <div className='flex animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-500'></div>
            </div>
        );
    }

    return (
        <>
            <div className='bg-gradient-to-t from-cyan-950 to-sky-700 text-blue-400'>
                <Breadcrumb />
                <p className='text-white text-4xl pb-2 pl-4'>Hotels in India</p>
                <div className="flex justify-center items-center bg-gradient from-cyan-950 to-sky-700 text-blue-400 pb-4">
                    <input
                        type="text"
                        placeholder="Search hotel by city or name"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="flex  p-3 font-bold w-[90%] gap-2 border-2 rounded-4xl"
                    >
                    </input>
                </div>
                <div>
                    {filteredItems.length > 0 && (
                        <div className='bg-white text-black mx-4 rounded-2xl'>
                            <p className='mx-14 mt-4 pt-2'>Result found for {query} {filteredItems.length}</p>
                            {filteredItems.map((hotel, index) => {
                                return (
                                    <div className="mx-12 mt-8 font-bold" key={index}>
                                        <NavLink
                                            key={hotel.id}
                                            to={`/detail/${hotel.id}`}
                                            className="flex  pl-2 p-4 rounded-md border-1 border-gray-300 shadow-xl inset-shadow-2xs mt-2 hover:border-blue-600 text-black gap-4 ">
                                            <div>
                                                <img src={hotel && hotel?.main_photo ? hotel?.main_photo : "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} alt="" className='h-[200px] w-[200px] rounded-2xl object-cover' />
                                            </div>
                                            <div className='flex flex-col gap-1'>
                                                <span key={index} className='flex flex-col'>{hotel.name}
                                                    <span className='flex flex-row'>
                                                        <span><RatingReview rating={hotel.stars} /></span>
                                                        <p>({hotel.reviewCount})</p>
                                                    </span>
                                                </span>
                                                <span className='font-light w-fit rounded-md opacity-25  p-2 border-2'>{hotel.chain}</span>
                                                <span>{hotel.address}</span>
                                                <span className='flex text-blue-400 font-medium'>{hotel.city}</span>
                                            </div>
                                        </NavLink>
                                    </div>
                                )
                            })}
                        </div>
                    )}
                </div>
            </div>
            <div className='bg-white text-black min-h-screen mt-2'>
                <p className='flex items-center justify-center font-bold text-3xl w-[100%]'>City</p>
                <div className="flex justify-center">
                    <select
                        className="border p-2 rounded"
                        value={selectedType}
                        onChange={(e) => {
                            setSelectedType(e.target.value);
                            setCurrentPage(1);
                        }}
                    >
                        {cityTypes.map((type, index) => (
                            <option key={index} value={type}>{type}</option>
                        ))}
                    </select>
                </div>

                <div className="px-2 flex flex-col mx-2 mt-2">
                    {currentCity && currentCity.map((hotel, index) => (
                        <div key={index}>
                            <div
                                className="flex lg:flex-row flex-col pl-2 p-4 rounded-md border-1 border-gray-300 shadow-xl inset-shadow-2xs mt-2 hover:border-blue-600 text-black gap-4 ">
                                <NavLink
                                    key={hotel.id}
                                    to={`/detail/${hotel.id}`}
                                >
                                    <img src={hotel && hotel?.main_photo ? hotel?.main_photo : "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} alt="" className='w-[100%] h-[300px] lg:h-[200px] lg:w-[200px] rounded-2xl object-cover ' />
                                </NavLink>
                                <div className='flex flex-col gap-1'>
                                    <span key={index} className='flex flex-col'>{hotel.name}
                                        <span className='flex flex-row'>
                                            <span><RatingReview rating={hotel.stars} /></span>
                                            <p>({hotel.reviewCount})</p>
                                        </span>
                                    </span>
                                    <span className='font-medium w-fit rounded-md opacity-25  p-2 border-2'>{hotel.chain}</span>
                                    <span>{hotel.address}</span>
                                    <span className='flex text-blue-400 items-center font-medium'>
                                        <MdPlace size={24} />{hotel.city}</span>
                                    <NavLink onClick={()=>handlefavhotel(hotel)}>
                                        {isFav(hotel.id) ? (
                                            <MdFavorite size={30} color='red'/>
                                        ) : (
                                            <MdFavoriteBorder size={30} color='blue'/>
                                        )}
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <Index totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
                <Footer/>
            </div>
        </>
    )
}

export default Hotels