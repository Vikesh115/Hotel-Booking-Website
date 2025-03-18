import { useEffect } from 'react';
import Detailpage from "./pages/Hotels/Detailpage";
import Hotels from "./pages/Hotels/Hotels"
import { useDispatch } from 'react-redux';
import { Route, Routes } from "react-router-dom";
import { hotelapi } from './Redux/actions/Action';
import Home from './pages/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Train from './pages/Train/Train';
import Buses from './pages/Buses/Buses';
import HotelImages from './pages/Hotels/HotelImages';
import HotelInfo from './pages/Hotels/HotelInfo';
import AvailableTrains from './pages/Train/AvailableTrains';
import FavHotels from './pages/Hotels/FavHotels';
import Blogs from './pages/Blogs/Blogs';

function App() {

  const dispatch = useDispatch();

    useEffect(() => {
        dispatch(hotelapi())
    }, [dispatch])

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/hotel" element={<Hotels/>} />
        <Route path='/fav' element={<FavHotels/>}/>
        <Route path='/train' element={<Train/>} />
        <Route path='/bus' element={<Buses/>} />
        <Route path="/detail/:id" element={<Detailpage/>} />
        <Route path='/imagelist' element={<HotelImages/>} />
        <Route path="/info" element={<HotelInfo/>}/>
        <Route path='/availtrain' element={<AvailableTrains/>}/>
        <Route path='/blog' element={<Blogs/>}/>
      </Routes>
    </>
  )
}

export default App