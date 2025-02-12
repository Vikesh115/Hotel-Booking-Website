import React from 'react'
import { useSelector } from 'react-redux';
import Breadcrumb from '../../Components/BreadCrumb/BreadCrumb';

function HotelInfo() {

  const { details } = useSelector((state) => state.hotels)


  return (
    <>
      <div className='bg-gradient-to-t from-cyan-950 to-sky-700 text-blue-400'>
        <Breadcrumb />
      </div>
      <div className='flex '>
        <div className='flex flex-col justify-center items-center p-4 gap-5'>
          <p className='flex text-2xl text-(--color-avocado-600) font-(--font-display)'>Hotel Important Information</p>
          <span className='flex justify-center'>
            <img src={details.main_photo} alt="" className='rounded-2xl w-[60%]' />
          </span>
          <p className='flex text-base'>{details.hotelImportantInformation}</p>
        </div>
      </div></>
  )
}

export default HotelInfo