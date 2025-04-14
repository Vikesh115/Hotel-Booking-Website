import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

function Details() {
    const { details } = useSelector((state) => state.hotels)

    return (
        <div className='flex justify-center'>
            <div className='flex flex-wrap justify-center rounded-4xl pt-4 lg:bg-gray-100 w-[90%] lg:h-screen gap-1 p-1'>
                <div className='flex lg:w-[40%] w-[100%] h-[60%]'>
                    <img src={details?.main_photo ? details?.main_photo : "https://images.pexels.com/photos/751268/pexels-photo-751268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} alt="" className=' object-cover w-[100%] rounded-3xl' />
                </div>
                <div className='flex lg:w-[50%] w-[100%] h-[60%] lg:flex-col justify-evenly gap-1'>
                    <div className='flex w-[100%] h-[50%] gap-1'>
                        <div className='flex w-[50%] '>
                            <img src={details?.hotelImages ? details?.hotelImages[1].urlHd : "https://images.pexels.com/photos/751268/pexels-photo-751268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} alt="" className='rounded-3xl object-cover w-[100%]' />
                        </div>
                        <div className='lg:flex hidden w-[50%] '>
                            <img src={details?.hotelImages ? details?.hotelImages[2].urlHd : "https://images.pexels.com/photos/751268/pexels-photo-751268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} alt="" className='rounded-3xl object-cover w-[100%]' />
                        </div>
                        <NavLink
                            to="/imagelist"
                            className='relative lg:hidden flex w-[50%]'>
                            <img src={details?.hotelImages ? details?.hotelImages[2].urlHd : "https://images.pexels.com/photos/751268/pexels-photo-751268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} alt="" className='absolute inset-0 rounded-3xl object-cover w-[100%] h-[100%] backdrop-opacity-90' />
                            <div className='relative m-auto flex'>
                                <p className='transition-all transform font-extrabold text-4xl text-white'>
                                    +{details?.hotelImages?.length - 2}
                                </p>
                            </div>
                        </NavLink>
                    </div>
                    <div className='lg:flex hidden w-[100%] h-[50%] gap-1 '>
                        <div className='flex w-[50%] '>
                            <img src={details?.hotelImages ? details?.hotelImages[3].urlHd : "https://images.pexels.com/photos/751268/pexels-photo-751268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} alt="" className='rounded-3xl object-cover w-[100%]' />
                        </div>
                        <NavLink
                            to="/imagelist"
                            className='relative flex w-[50%]'>
                            <img src={details?.hotelImages ? details?.hotelImages[4].urlHd : "https://images.pexels.com/photos/751268/pexels-photo-751268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} alt="" className='absolute inset-0 rounded-3xl object-cover w-[100%] h-[100%] backdrop-opacity-90' />
                            <div className='relative m-auto flex'>
                                <p className='transition-all transform font-extrabold text-4xl text-white'>
                                    +{details?.hotelImages?.length - 4}
                                </p>
                            </div>
                        </NavLink>
                    </div>
                </div>
                <div className='lg:flex hidden w-[90%] font-medium h-[40%] flex-col gap-2'>
                    <span className='flex items-center gap-1'>
                        <span className='flex text-3xl font-bold'>{details?.hotelType} </span>
                        <p className='flex'>({details?.reviewCount} Reviews)</p>
                    </span>
                    <span>{details?.name}</span>
                    <NavLink target='blank' to={`https://www.google.com/search?q=${details?.address} + ${details?.city}`}
                        className="hover:text-blue-500 font-light text-amber-950 hover:text-2xl"
                    >{details?.address},{details?.city}</NavLink>
                    <span>{details?.hotelImportantInformation?.slice(0, 200)}
                        <NavLink to="/info" className="text-blue-700">
                            ...more
                        </NavLink>
                    </span>
                </div>
            </div>
        </div>)
}

export default Details