import React from 'react'
import {Routes,Route} from 'react-router-dom'
import AddFlight from './components/pages/AddFlight/AddFlight';
import Cardf from './components/pages/Card/Card';
import Home from './components/pages/Home/Home';
function Router() {
  return (
    <div>
      <Routes>
        <Route path="home" element={<Home/>}/>
        <Route path="AddFlight" element={<AddFlight/>}/>
      </Routes>
    </div>
  )
}

export default Router;
