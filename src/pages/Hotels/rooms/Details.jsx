import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'

function Details() {
    const { details } = useSelector((state) => state.hotels)
    const { id } = useParams()

    const room = details?.rooms?.find((room) => room.id === Number(id))
    console.log(room);

    return (
        <div className='bg-sky-200 h-screen'>
            <p className='flex font-mono text-2xl justify-center mb-2 pt-2'>{room.roomName}</p>
            
        </div>
    )
}

export default Details