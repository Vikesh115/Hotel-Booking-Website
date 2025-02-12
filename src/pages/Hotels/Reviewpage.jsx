import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { hotelreview } from '../../Redux/actions/Action';
import { NavLink } from 'react-router-dom';

function Reviewpage({ id }) {
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedType, setSelectedType] = useState('All');

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(hotelreview(id));
    }, [id, dispatch, currentPage]);

    const { reviews } = useSelector((state) => state.hotels);

    console.log(reviews);

    const itemsPerPage = 10;

    const reviewTypes = ['All', ...new Set(reviews?.map(review => review.type))];

    const filteredReviews = selectedType === 'All' ? reviews : reviews?.filter(review => review.type === selectedType);

    const totalItems = filteredReviews?.length || 0;
    const totalPages = totalItems > 0 ? Math.ceil(totalItems / itemsPerPage) : 0;

    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentReviews = filteredReviews?.slice(startIndex, startIndex + itemsPerPage) || [];

    const handlePrevious = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const handleNext = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    return (
        <div className="flex flex-col p-2 w-[100%] text-black bg-white">
            <p className='flex items-center justify-center font-bold text-3xl w-[100%]'>Reviews</p>
            <div className="flex items-center justify-center">
                <select
                    className="border-2 p-2 rounded "
                    value={selectedType}
                    onChange={(e) => {
                        setSelectedType(e.target.value);
                        setCurrentPage(1);
                    }}
                >
                    {reviewTypes.map((type, index) => (
                            <option key={index} value={type} >{type}</option>
                    ))}
                </select>
            </div>

            {totalItems === 0 ? (
                <p className="text-center text-gray-500 mt-4">No reviews available</p>
            ) : (
                    <div className="flex my-1 w-[100%] flex-col"> 
                        {currentReviews.map((review, index) => (
                            <div key={index} className="flex flex-col p-4 bg-white text-black w-[100%]">
                                <div className='flex w-[100%]  flex-col'>
                                    <div className='flex w-[100%]'>
                                        <div className='flex font-bold'>
                                        {review.name} 
                                        </div>
                                        <div>
                                        ({review.type})
                                        </div>
                                    </div>
                                    <div className='flex flex-col-reverse gap-2 w-[100%]'>
                                        <span className='flex'>{review.date}</span>
                                        <span className='flex gap-2'>
                                            <span className='flex text-xl '>Cons: </span> <span className='flex items-center'>{review?.cons || "Nothing"}</span>
                                        </span>
                                        <span className='flex gap-2'>
                                            <span className='flex text-xl'>Pros: </span> <span className='flex items-center'>{review?.pros || "Not available"}</span>
                                        </span>
                                    </div>
                                </div>
                                <span className='p-0.25 bg-gray-500 w-[100%]'></span>
                            </div>
                        ))}
                    </div>
            )}

            {/* Pagination */}
            <div className="flex justify-center items-center mt-6 w-[100%] p-2 gap-2">
                <button
                    className={`px-4 py-2 rounded transition ${currentPage === 1 ? 'text-white bg-gray-800 cursor-not-allowed' : 'bg-blue-500 text-black hover:bg-blue-600'}`}
                    onClick={handlePrevious}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>

                {[...Array(totalPages)].map((_, index) => (
                    <NavLink
                        key={index}
                        className={`px-4 p-1 md:py-2 rounded transition text-black ${currentPage === index + 1 ? 'hidden md:flex bg-blue-500 text-black' : 'hidden md:flex text-black bg-white hover:bg-gray-300'}`}
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
    );
}

export default Reviewpage;
