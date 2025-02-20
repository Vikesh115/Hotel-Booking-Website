import React from 'react'
import { staticData } from './data'

function AvailableTrains() {
    return (
        <div className='flex flex-wrap flex-col px-2'>
            <div className='flex justify-evenly pl-2 gap-2 font-bold w-[100%]'>
                <span className='flex w-[20%]'>FROM</span>
                <span className='flex w-[20%]'>TO</span>
                <span className='flex w-[20%]'>CLASS</span>
                <span className='flex w-[20%]'>BIRTH</span>
                <span className='flex w-[20%]'>DATE</span>
            </div>
            <div>{staticData?.map((item, index) => (
                <div key={index} className='flex justify-evenly pl-2 gap-2 w-[100%]'>
                    <span className='flex w-[20%]'>{item.from}</span>
                    <span className='flex w-[20%]'>{item.to}</span>
                    <span className='flex w-[20%]'>{item.class}</span>
                    <span className='flex w-[20%]'>{item.birth}</span>
                    <span className='flex w-[20%]'>{item.date}</span>
                </div>
            ))}
            </div>
        </div>
    )
}

export default AvailableTrains