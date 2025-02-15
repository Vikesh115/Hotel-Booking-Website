import React from 'react'

function Holidays() {
    return (
        <div className='flex flex-col w-[100%]'>
            <div className='flex text-4xl font-bold py-7 text-cyan-50 bg-amber-700 justify-center'>
                HOLIDAYS
            </div>
            <div className='flex gap-16 bg-amber-800 p-2 w-[100%] flex-wrap'>
                <div className='flex lg:w-[30%] w-[100%] bg-amber-50 justify-center'>
                <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/a1/0f/21/maharajas-express.jpg?w=1200&h=-1&s=1" alt="" />
                
                </div>
                <div className='flex lg:w-[30%] w-[100%] bg-amber-50 justify-center'>
                    <img src="https://static.toiimg.com/photo/77705127.cms" alt="" />
                </div>
                <div className='flex lg:w-[30%] w-[100%] bg-amber-50 justify-center'>
                    <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/49/c6/34/getlstd-property-photo.jpg?w=1200&h=-1&s=1" alt="" />
                </div>
                <div className='flex lg:w-[30%] w-[100%] bg-amber-50 justify-center'>
                    <img src="https://i0.wp.com/avenuemail.in/wp-content/uploads/2023/07/train.jpg?fit=1200%2C675&ssl=1" alt="" />
                </div>
                <div className='flex lg:w-[30%] w-[100%] bg-amber-50 justify-center'>
                    <img src="https://i.ytimg.com/vi/5VvjxmbWeKk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBibMI18pG7EyKV0F_MbNk_0_T3cg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Holidays