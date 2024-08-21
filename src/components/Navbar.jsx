import React, {useEffect, useRef, useState} from 'react'
import './Navbar.scss';
import { Link } from 'react-router-dom';
import Search from '../icons/search.svg';
import Shopping from '../icons/shopping-cart.svg';
import User from '../icons/user-avatar.svg';
import { useCart } from './CartContex.jsx';

export default () => {
  const [burger, setBurger] = useState('burger unclicked')
  const [menu, setMenu] = useState('menu hidden')
  const [isMenuClicked, setIsMenuClicked] = useState('menu hidden')
  const [showCart, setShowCart] = useState(false);
  const { cart, dispatch } = useCart();

  const updateMenu = () => {
    if(!isMenuClicked) {
      setBurger('burger clicked')
      setMenu('menu visible')
    }
    else {
      setBurger('burger unclicked')
      setMenu('menu hidden')
    }
    setIsMenuClicked(!isMenuClicked)
  }

  const sideNavRef = useRef(null);
  const cartRef = useRef(null);
  
  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);
  
  const handleClickOutside = (event) => {
    if (sideNavRef.current && !sideNavRef.current.contains(event.target)) {
      setBurger('burger unclicked')
      setMenu('menu hidden')
    }
        if (cartRef.current && !cartRef.current.contains(event.target)) {
      setShowCart(false);
    }
  }

    const toggleCart = () => {
    setShowCart(!showCart);
  };

  const handleRemoveFromCart = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { id } });
  };

  return (
    <div>
      <nav className="navbar">
        <Link to='/' className='logo'>Avion</Link>
        <div className="navigation">
          <div className="nav__menu" ref={sideNavRef}>
            <div className={menu}>
              <Link to='/about'>About Us</Link>
              <Link to=''>Contact</Link>
              <Link to=''>Blog</Link>
            </div>
            <div className="hamburger" onClick={updateMenu}>
              <div className={burger} />
              <div className={burger} />
              <div className={burger} />
            </div>
          </div>
          <div className="nav__icons">
            <Link to=''><img src={Search} alt="Search" /></Link>
            <div className="cart-icon" onClick={toggleCart} ref={cartRef}>
              <img src={Shopping} alt="Shopping Cart" />
              {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
            </div>
            <Link to=''><img src={User} alt="User Avatar" /></Link>
          </div>
        </div>
      </nav>
      <div className="products__list">
        <li><Link to='/allproducts'>All products</Link></li>
        <li><Link to='/allproducts?type=ceramics'>Ceramics</Link></li>
        <li><Link to='/allproducts?type=tables'>Tables</Link></li>
        <li><Link to='/allproducts?type=chairs'>Chairs</Link></li>
        <li><Link to='/allproducts?type=crockery'>Crockery</Link></li>
        <li><Link to='/allproducts?type=tableware'>Tableware</Link></li>
        <li><Link to='/allproducts?type=cutlery'>Cutlery</Link></li>
      </div>
      {showCart && (
        <div className="cart-dropdown">
          {cart.length > 0 ? (
            <div>
              <ul>
                {cart.map(item => (
                  <li key={item.id}>
                    <img src={item.img} alt={item.title} />
                    <div>
                      <h4>{item.title}</h4>
                      <p>Quantity: {item.count}</p>
                      <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
                    </div>
                  </li>
                ))}
              </ul>
              <Link to="/checkout" className="button light">Proceed to Checkout</Link>
            </div>
          ) : (
            <p>Your cart is empty</p>
          )}
        </div>
      )}
    </div>
  );
};
