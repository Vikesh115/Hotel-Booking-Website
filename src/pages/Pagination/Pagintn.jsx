// // Pagination.js
// import { useEffect } from "react";
// import { hotelreview } from "../../Redux/actions/Action";
// import { useSelector, useDispatch } from "react-redux";

// const Pagintn = ({ currentPage, setCurrentPage, id }) => {
    
//     const itemsPerPage = 10;
//     console.log("Review", id);

//     const dispatch = useDispatch();

//     useEffect(() => {
//         dispatch(hotelreview(id))
//     }, [id, dispatch])

//     const { reviews } = useSelector((state) => state.hotels)

//     console.log(reviews);

//     const totalItems = reviews.length;

//     console.log(totalItems);

//     const totalPages = Math.ceil(totalItems / itemsPerPage);

//     // for (let i = 1; i <= totalPages; i++) {
//     //     reviews.push(i);
//     // }

//     const handlePrevious = () => {
//         if (currentPage > 1) {
//             setCurrentPage(currentPage - 1);
//         }
//     };

//     const handleNext = () => {
//         if (currentPage < totalPages) {
//             setCurrentPage(currentPage + 1);
//         }
//     };

//     return (
//         <div className="flex justify-center items-center space-x-2 mt-4">
//             <button
//                 className={`px-4 py-2 rounded ${currentPage === 1 ?
//                     'bg-gray-300' : 'bg-blue-500 text-white'
//                     }`}
//                 onClick={handlePrevious}
//                 disabled={currentPage === 1}>
//                 Previous
//             </button>
//             {reviews && reviews.data && reviews.data.map((page,p) => (
//                 <button
//                     key={p}
//                     className={`px-4 py-2 rounded ${currentPage === page ?
//                         'bg-blue-500 text-white' : 'bg-gray-200'
//                         }`}
//                     onClick={() => setCurrentPage(page)}  >
//                     {page}
//                 </button>
//             ))}
//             <button
//                 className={`px-4 py-2 rounded ${currentPage === totalPages ?
//                     'bg-gray-300' : 'bg-blue-500 text-white'
//                     }`}
//                 onClick={handleNext}
//                 disabled={currentPage === totalPages} >
//                 Next
//             </button>
//         </div>
//     );
// };

// export default Pagintn;
