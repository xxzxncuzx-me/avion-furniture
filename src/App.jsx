import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import './App.scss';
import { Route, Routes} from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Navbar from './components/Navbar.jsx';
import Footer from './pages/Footer.jsx';
import AllProducts from './pages/AllProducts.jsx'
import ProductDetail from './pages/ProductDetail.jsx';
import Checkout from './pages/Checkout.jsx';
import { CartProvider } from './components/CartContex.jsx';  

export default () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return <div>
    <CartProvider>
      <Navbar />
        <Routes>
          <Route path='/avion-furniture' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/allproducts' element={<AllProducts />} />
          <Route path="/product/:id" element={<ProductDetail />} /> 
          <Route path='/checkout' element={<Checkout />} />
          <Route path='*' element={<p>Page not found</p>} />
        </Routes>
    </CartProvider>
    <Footer/>
  </div>

}

