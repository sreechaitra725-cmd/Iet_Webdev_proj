import {useState} from 'react'
import {Route,Routes} from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar'
import Home from './pages/home'
import Cart from './pages/cart'
import About from './pages/about'
import Collections from './pages/collections'
import Contact from './pages/contact'
import ProductDetails from "./pages/product_dets";

function App() {
  
  return (
  
    <div className='App-content'>
      <Navbar/>
      
       <div className='App-Routes'>
        { <Routes> 
          <Route path="/" element={<Home/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/collections' element={<Collections/>}/>
          <Route path="/product/:id" element={<ProductDetails />} />
         </Routes>
}
       </div> 
      
     </div>
   
   
         
  );
}

export default App