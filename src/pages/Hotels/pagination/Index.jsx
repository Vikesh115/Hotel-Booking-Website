import { NavLink } from "react-router-dom";

function Index({totalPages,currentPage, setCurrentPage}) {

    const handlePrevious = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };
    
    const handleNext = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    return (
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
    )
}

export default Index