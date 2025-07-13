import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer'

import Navbar from './components/Navbar'
import Movies from './pages/Movies'
import MoviesDetails from './pages/MoviesDetails'
import SeatLayout from './pages/SeatLayout'
import MyBooking from './pages/MyBooking'
import Favorite from './pages/Favorite'
import {Toaster} from  'react-hot-toast'
import Layout from './pages/admin/Layout'
import AddShow from './pages/admin/AddShow'
import ListShows from './pages/admin/ListShows'
import LIstBooking from './pages/admin/LIstBooking'
import Dashboard  from './pages/admin/Dashboard'

function App() {
  const  isAdimeRoute = useLocation().pathname.startsWith('/admin')
  return (
    <>
     <Toaster/>
    {!isAdimeRoute && <Navbar/>}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/movies/:id' element={<MoviesDetails />} />
        <Route path='/movies/:id/:date' element={<SeatLayout />} />
        <Route path='/my-booking' element={<MyBooking/>} />
        <Route path='/favorite' element={<Favorite/>} />
        <Route path='/admin/*' element={<Layout/>}>
        <Route index element={<Dashboard/>}/>
        <Route  path='add-shows' element={<AddShow/>}/>
        <Route  path='list-shows' element={<ListShows/>}/>
        <Route  path='list-bookings' element={<LIstBooking/>}/>
        </Route>
      </Routes>
      
      {!isAdimeRoute && <Footer/>}
    </>
  )
}

export default App
