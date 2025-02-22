import { useState } from 'react'
import { IoBagCheckOutline } from "react-icons/io5";
import { VscChecklist } from "react-icons/vsc";
import { FaLocationArrow } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { CgCalendarDates } from "react-icons/cg";
import { FaBriefcase } from "react-icons/fa";
import { FaThLarge } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { IoStarSharp } from "react-icons/io5";
import Holidays from './Holidays';
import { staticData } from './data';

function Train() {

  const [searchFields, setSearchFields] = useState({
    from: '',
    to: '',
    class: '',
    birth: '',
    date: ''
  });

  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchFields({ ...searchFields, [name]: value });
  };

  const handleSearch = () => {
    if (Object.values(searchFields).every((value) => value !== '')) {
      setError('');
      const results = staticData.filter((item) =>
        Object.keys(searchFields).every(
          (key) =>
            item[key] &&
            item[key].toLowerCase().includes(searchFields[key].toLowerCase())
        )
      );
      setSearchResults(results);
      console.log(results);
    } else {
      setError('All fields are required to make a search.');
      setSearchResults([]);
    }
  };


  return (
    <>
      <div className="relative h-[640px] w-[100%]">
        <img src="https://www.irctc.co.in/nget/home_page_banner1.e6749c3d9698d1ac7608.jpg" alt="" className='lg:flex hidden h-[640px] w-[100%]' />

        <div className="absolute right-0 top-0 text-blue-900 font-bold text-3xl lg:text-5xl pr-24 pt-5">
          <p>INDIAN RAILWAYS</p>
        </div>

        <div className='absolute lg:rounded-none rounded-t-3xl lg:border-0 border-1 left-0 top-0 bg-white lg:h-[90%] h-[100%] lg:w-[45%] w-[100%] lg:mt-8 lg:ml-10'>
          <div className='lg:flex hidden gap-2 h-[7%] w-[100%]'>
            <div className='flex bg-blue-900 w-[100%] gap-4 text-white'>
              <span className='flex justify-start items-center pl-2'><IoBagCheckOutline size={24} /></span>
              <span className='flex items-center animate-typing'>PNR STATUS</span>
            </div>
            <div className='flex bg-blue-900 w-[100%] gap-4 text-white'>
              <span className='flex justify-start items-center pl-2'><VscChecklist size={24} /></span>
              <span className='flex items-center'>CHARTS/VACANCY</span>
            </div>
          </div>
          <Link to="/availtrain" className='flex text-indigo-800 justify-end pr-2 pt-3 underline items-center gap-1 animate-wiggle hover:animate-none'><IoStarSharp/>AVAILABLE TRAINS</Link>
          <div className='flex justify-center mt-12 font-bold text-4xl text-blue-900'>
            <div>BOOK TICKET</div>
          </div>
          <div className='flex flex-col w-[100%] lg:h-[100%] p-4'>
            <div className='flex lg:flex-row flex-col lg:gap-6 w-[100%] lg:h-[60%] lg:p-4'>
              <div className='flex flex-col lg:w-[60%] lg:gap-8 gap-4 p-2 '>

                <div className='flex lg:p-2 p-4 h-[15%] border-1 rounded-xl'>
                  <span className='flex items-center'><FaLocationArrow /></span>
                  <input
                    type="text"
                    name="from"
                    placeholder="from"
                    value={searchFields.from}
                    onChange={handleInputChange}
                    className='pl-4 focus:outline-none focus:border-none'
                  />
                </div>

                <div className='flex lg:p-2 p-4 h-[15%] border-1 rounded-xl'>
                  <span className='flex items-center'><IoLocationSharp /></span>
                  <input
                    type="text"
                    name="to"
                    placeholder="to"
                    value={searchFields.to}
                    onChange={handleInputChange}
                    className='pl-4 focus:outline-none focus:border-none'
                  />
                </div>

                <div className='flex lg:p-2 p-4 h-[15%] border-1 rounded-xl'>
                  <span className='flex items-center'><CgCalendarDates /></span>
                  <input
                    type="text"
                    name="date"
                    placeholder="date"
                    value={searchFields.date}
                    onChange={handleInputChange}
                    className='pl-4 focus:outline-none focus:border-none'
                  />
                </div>

              </div>

              <div className='flex flex-col lg:w-[40%] h-[100%] lg:gap-8 gap-4 p-2 '>
                <div className='flex lg:p-2 p-4 h-[15%] border-1 rounded-xl'>
                  <span className='flex items-center'><FaBriefcase /></span>
                  <input
                    type="text"
                    name="class"
                    placeholder="class"
                    value={searchFields.class}
                    onChange={handleInputChange}
                    className='pl-4 focus:outline-none focus:border-none'
                  />
                </div>

                <div className='flex lg:p-2 p-4 h-[15%] border-1 rounded-xl'>
                  <span className='flex items-center'><FaThLarge /></span>
                  <input
                    type="text"
                    name="birth"
                    placeholder="birth"
                    value={searchFields.birth}
                    onChange={handleInputChange}
                    className='pl-4 focus:outline-none focus:border-none'
                  />
                </div>

              </div>
            </div>

            <div className='flex w-[100%] justify-evenly text-white '>
              <button onClick={handleSearch} className='flex w-[40%] lg:-mt-5 mt-4 bg-yellow-800 items-center justify-center px-4 py-2 rounded-xl'>search</button>
            </div>

            {error && <p style={{ color: 'red' }}>{error}</p>}
            {searchResults?.length > 0 && (searchResults?.map((item) => (
              <div key={item?.id} className='mt-4 '>
                <p className='text-white bg-black p-4 top-3'>{item?.train}</p>
                <img src={item?.img} alt={item?.train} className='h-auto w-[100%]'/>
              </div>
            ))
            )}
          </div>
        </div>
      </div>
      <Holidays />
    </>
  )
}

export default Train