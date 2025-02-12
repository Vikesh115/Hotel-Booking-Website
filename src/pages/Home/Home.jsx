import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa";
import Footer from '../Footer/Footer'

function Home() {
    return (
        <div>
            <div>
                <div className='relative flex w-[100%]'>
                    <img src="https://images.pexels.com/photos/6265937/pexels-photo-6265937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='absolute object-cover w-screen h-screen' />
                    <div className='relative flex flex-col justify-center items-start h-screen w-[70%] p-4 gap-4'>
                        <p className='flex pl-1 text-3xl text-yellow-600 lg:text-yellow-950 font-light italic'>Indulge in ultimate Luxury</p>
                        <p className='flex lg:text-6xl text-white text-4xl'>
                            DISCOVER THE PINNACLE OF LUXURY
                        </p>
                        <Link to="/hotel" className='flex lg:text-xl p-2 px-3 text-black bg-amber-400 rounded-4xl font-thin items-center gap-2'>Explore more
                        <FaArrowRight/></Link>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    )
}

export default Home