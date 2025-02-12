import { RiHotelLine } from "react-icons/ri";
import { SiRailway } from "react-icons/si";
import { FaBus } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

function Navbar() {
  const notify = () => toast("Upcomming!!!");

  return (
    <div className='flex w-[100%] h-[6%] justify-evenly items-center shadow-2xl py-4'>
      <NavLink to='/' className='flex justify-between gap-2 text-blue-400 items-center'>
        <span>W O R L D</span>
        <span className="bg-green-950 text-white p-2 items-center italic font-medium rounded-xl">of</span>
        <span>H O T E L</span>
      </NavLink>
      <div className='flex gap-5'>
        <NavLink
          to="/hotel"
          style={({ isActive }) => ({
            color: isActive ? "Blue" : 'Black'
          })}
          className="flex gap-1 flex-col items-center"
        >
          <span><RiHotelLine size={20} /></span>
          <span className='font-thin'>Hotel</span>
        </NavLink>
        <NavLink
          to="/train"
          style={({ isActive }) => ({
            color: isActive ? "Blue" : 'Black'
          })}
          className="flex gap-1 flex-col items-center"
        >
          <span><SiRailway size={20} /></span>
          <span className='font-thin'>Train</span>
        </NavLink>
        <NavLink
          to="/bus"
          style={({ isActive }) => ({
            color: isActive ? "Blue" : 'Black'
          })}
          className="flex gap-1 flex-col items-center"
        >
          <span><FaBus size={20} /></span>
          <span className='font-thin'>Buses</span>
        </NavLink>
      </div>
      <div className='lg:flex hidden items-center py-1 px-3 rounded-sm bg-gradient-to-r from-blue-400 to-blue-600 text-white'>
        <NavLink onClick={notify}>Blog</NavLink>
        <ToastContainer
          position="top-center"
          theme="dark"
        />
      </div>
    </div>
  )
}

export default Navbar