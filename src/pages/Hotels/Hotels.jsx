import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { hotelapi } from '../../Redux/actions/Action';
import { NavLink } from 'react-router-dom';
import Breadcrumb from '../../Components/BreadCrumb/BreadCrumb';
import RatingReview from '../../Components/RatingReview/RatingReview';
import { MdPlace } from "react-icons/md";

function Hotels() {
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedType, setSelectedType] = useState('All');
    const { hotels } = useSelector((state) => state.hotels)
    const [query, setQuery] = useState('');
    const [filteredItems, setFilteredItems] = useState([]);

    console.log(hotels);

    useEffect(() => {
        if (query === "") {
            setFilteredItems([]);
        }
        else {
            const filtered = hotels.filter(item =>
                item.city.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredItems(filtered);
        }
    }, [hotels, query]);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(hotelapi())
    }, [dispatch])

    const itemsPerPage = 10;

    const filteredCity = selectedType === 'All' ? hotels : hotels?.filter(hotel => hotel.city === selectedType);

    const totalItems = filteredCity?.length || 0;
    const totalPages = totalItems > 0 ? Math.ceil(totalItems / itemsPerPage) : 0;

    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentCity = filteredCity?.slice(startIndex, startIndex + itemsPerPage) || [];

    const handlePrevious = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const handleNext = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const cityTypes = ['All', ...new Set(hotels?.map(hotel => hotel.city))];

    return (
        <>
            <div className='bg-gradient-to-t from-cyan-950 to-sky-700 text-blue-400'>
                <Breadcrumb />
                <p className='text-white text-4xl pb-2 pl-4'>Hotels in India</p>
            </div>
            <div className='bg-white text-black min-h-screen mt-2'>
                {/* Search */}
                <div className="flex justify-center items-center ">
                    <input
                        type="text"
                        placeholder="Search hotel"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="flex  p-3 font-bold w-[90%] gap-2 border-2 rounded-4xl"
                    >
                    </input>
                </div>
                <div>
                    {filteredItems.length > 0 && (
                        <div>
                            <p className='mx-14 mt-4'>Result found for {query} {filteredItems.length}</p>
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

                {/* filter */}
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

                {/* hotels */}
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
                                        <MdPlace size={24} />   {hotel.city}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* pagination */}
                <div className="flex justify-center flex-wrap items-center mt-6 w-[100%] p-2 gap-2">
                    <button
                        className={`px-4 py-2 rounded transition ${currentPage === 1 ? 'bg-gray-800 text-white cursor-not-allowed' : 'bg-blue-500 text-black hover:bg-blue-600'}`}
                        onClick={handlePrevious}
                        disabled={currentPage === 1}
                    >
                        Previous
                    </button>

                    {[...Array(totalPages)].map((_, index) => (
                        <NavLink
                            key={index}
                            className={`px-4 p-1 md:py-2 rounded transition text-black ${currentPage === index + 1 ? 'hidden md:flex bg-blue-500 text-black' : 'hidden md:flex text-white bg-gray-800 hover:bg-gray-300'}`}
                            onClick={() => setCurrentPage(index + 1)}
                        >
                            {index + 1}
                        </NavLink>
                    ))}
                    <button
                        className={`px-4 py-2 rounded transition ${currentPage === totalPages ? 'bg-gray-800 text-white cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
                        onClick={handleNext}
                        disabled={currentPage === totalPages}
                    >
                        Next
                    </button>
                </div>
            </div>
        </>
    )
}

export default Hotels