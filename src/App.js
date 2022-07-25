import React from 'react'
import {BrowserRouter} from 'react-router-dom';
import {Route,Routes} from 'react-router-dom';
import NavBar from './Components/NavBar';
import AllJewellery from './pages/All_jewellery/AllJewellery'
import Gold from './pages/Gold/Gold';
import Diamonds from './pages/Diamonds/Diamonds';
import EarRings from './pages/Earrings/EarRings';
import Rings from './pages/Rings/Rings';
import DigitalGold from './pages/DigitalGold/DigitalGold';
import Collections from './pages/Collections/Collections';
import Rivaah from './pages/Rivaah/Rivaah';
import Mia from './pages/Mia/Mia';
import Store from './pages/Store/Store';
import Search from './pages/Search/Search';
function App() {
  return (
    <>  
    <BrowserRouter>
    <NavBar/>

    <Routes>
      <Route path='/' element={<AllJewellery/>}/>
      <Route path='/alljewellery' element={<AllJewellery/>}/>
      <Route path='/gold' element={<Gold/>}/>
      <Route path='/diamond' element={<Diamonds/>}/>
      <Route path='/earrings' element={<EarRings/>}/>
      <Route path='/rings' element={<Rings/>}/>
      <Route path='/digitalgold' element={<DigitalGold/>}/>
      <Route path='/collections' element={<Collections/>}/>
      <Route path='/rivaah' element={<Rivaah/>}/>
      <Route path='/mia' element={<Mia/>}/>
      <Route path='/store' element={<Store/>}/>
      <Route path='/search' element={<Search/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App