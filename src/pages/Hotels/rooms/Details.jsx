import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import Footer from '../footer/Footer';

function Details() {
    const { details } = useSelector((state) => state.hotels)
    const { id } = useParams()

    const room = details?.rooms?.find((room) => room.id === Number(id))
    console.log(room);

    const photos = room?.photos

    const roomMainPhoto = room?.photos?.find((p) => p)
    console.log(roomMainPhoto);

    return (
        <div>
            <p className='flex font-mono text-2xl justify-center mb-2 pt-2'>
                {room.roomName}
            </p>

            <div className='flex justify-center'>
                <div className='flex flex-wrap justify-center rounded-4xl pt-4 lg:bg-gray-100 w-[90%] lg:h-screen gap-1 p-2'>
                    <div className='flex  w-[100%] h-[60%]'>
                        <img src={roomMainPhoto.hd_url} alt="Not found" className=' object-cover w-[100%] rounded-3xl' />
                    </div>

                    <div className='flex  w-[100%] h-[60%] lg:flex-col justify-evenly gap-1'>
                        <div className='flex w-[100%] h-[50%] gap-1'>
                            <div className='flex w-[50%] '>
                                {<img src={photos[1]?.url} alt="Not found" className='rounded-3xl object-cover w-[100%]' />}
                            </div>
                            <div className='lg:flex hidden w-[50%] '>
                                {<img src={photos[2]?.url} alt="Not found" className='rounded-3xl object-cover w-[100%]' />}
                            </div>
                            <div className='relative lg:hidden flex w-[50%]'>
                                <img src={photos[3]?.url} alt="Notttttt found" className='absolute inset-0 rounded-3xl object-cover w-[100%] h-[100%] backdrop-opacity-90' />
                                <div className='relative m-auto flex'>
                                    <p className='transition-all transform font-extrabold text-4xl text-white'>
                                        +{room?.photos?.length - 2}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className='lg:flex hidden w-[100%] h-[50%] gap-1 '>
                            <div className='flex w-[50%] '>
                                <img src={photos[3]?.url} alt="Notttttt found" className='rounded-3xl object-cover w-[100%]' />
                            </div>
                            <div className='relative flex w-[50%]'>
                                <img src={photos[4]?.url ? photos[4]?.url : photos[3]?.url} alt="Notttttt found" className='absolute inset-0 rounded-3xl object-cover w-[100%] h-[100%] backdrop-opacity-90' />
                                <div className='relative m-auto flex'>
                                    <p className='transition-all transform font-extrabold text-4xl text-white'>
                                        +{room?.photos?.length - 4}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex justify-center'>
            <div className='flex w-[90%] mt-3 lg:mt-72 flex-wrap justify-start gap-1'>
                    <p className='flex w-[100%] pl-6 font-bold text-3xl'>Facility</p>
                    <div className='flex flex-wrap pl-6 gap-2'>
                        {room?.roomAmenities?.map((item, index) => (
                            <p key={index} className='p-2 border-1 bg-blue-800 text-white rounded'>{item.name}</p>
                        ))}
                    </div>
            </div>
            </div>

            <Footer />
        </div>
    )
}

export default Details