import React from 'react'
import { FaSquareInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

function Footer() {
  return (
    <div className='flex justify-evenly px-4 py-6 bg-black'>
        <div className='flex gap-2'>
            <span><FaSquareInstagram size={44} color='white'/></span>
            <span><FaXTwitter size={44} color='white'/></span>
            <span><FaLinkedin size={44} color='white'/></span>
            <span><FaFacebookSquare size={44} color='white'/></span>
        </div>
        <div className='flex flex-col text-white'>
            <span>© 2025</span>
            <span>Country <span className='text-xl font-medium'>India</span></span>
        </div>
    </div>
  )
}

export default Footer