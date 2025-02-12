import React from 'react'
import { FaSquareInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

function Footer() {
  return (
    <div className='flex justify-evenly lg:px-4 px-2 lg:py-6 py-4 bg-blue-700 lg:bg-black text-white'>
        <div className='lg:flex hidden gap-2'>
            <span><FaSquareInstagram size={44} color='white'/></span>
            <span><FaXTwitter size={44} color='white'/></span>
            <span><FaLinkedin size={44} color='white'/></span>
            <span><FaFacebookSquare size={44} color='white'/></span>
        </div>
        <div className='lg:hidden flex gap-1'>
            <span><FaSquareInstagram size={30} color='white'/></span>
            <span><FaXTwitter size={30} color='white'/></span>
            <span><FaLinkedin size={30} color='white'/></span>
            <span><FaFacebookSquare size={30} color='white'/></span>
        </div>
        <div className='flex flex-col '>
            <span>© 2025</span>
            <span>Country <span className='text-xl font-medium'>India</span></span>
        </div>
    </div>
  )
}

export default Footer