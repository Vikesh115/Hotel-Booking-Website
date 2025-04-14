import { useEffect } from 'react';
import { useParams, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { hoteldetail } from '../../Redux/actions/Action';
import Breadcrumb from '../../Components/BreadCrumb/BreadCrumb';
import RatingReview from '../../Components/RatingReview/RatingReview';
import { FaRegThumbsUp } from "react-icons/fa";
import Facility from './facility/Facility';
import Details from './Home/details';
import Type from './rooms/Type';
import Footer from './footer/Footer';

function Detailpage() {
    const { details, loading } = useSelector((state) => state.hotels)
    console.log(details);
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(hoteldetail(id))
    }, [id, dispatch])

    // if (loading) {
    //     return (
    //         <div className='flex justify-center items-center h-screen w-[100%] text-black'>loading...</div>
    //     )
    // }

    return (
        <>
            <div className='bg-gradient-to-t from-cyan-950 to-sky-700 text-blue-400'>
                <Breadcrumb />
                <p className='text-white text-4xl pb-2 pl-4'>Hotel in {details?.city}</p>
            </div>
            
            <div className='flex lg:flex-row flex-col lg:ml-18 ml-10 mt-6'>
                <div className='flex flex-row gap-2 items-center font-light'>
                    <RatingReview rating={details?.starRating} />
                    <FaRegThumbsUp className='bg-yellow-200 p-1' size={20}/>
                </div>
                <p className='flex text-2xl font-bold'>{details?.name}</p>
            </div>

            <Details/>
            
            <div className='flex justify-center'>
                <div className='lg:hidden flex w-[90%] font-medium h-[30%] flex-col gap-2'>
                    <span className='text-3xl font-bold'>{details?.hotelType}</span>
                    <span>{details?.name}</span>
                    <NavLink target='blank' to={`https://www.google.com/search?q=${details?.address} + ${details?.city}`}
                        className="hover:text-blue-500 font-bold text-amber-950 hover:text-2xl"
                    >{details?.address},{details?.city}</NavLink>
                    <span>{details?.hotelImportantInformation?.slice(0, 200)}
                        <NavLink to="/info" className="text-blue-700">
                            ...more
                        </NavLink>
                    </span>
                </div>
            </div>
            <Type/>
            <Facility/>
            <Footer/>
        </>
    )
}

export default Detailpage