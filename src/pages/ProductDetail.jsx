import React, { useState } from 'react';
import { Link, useParams} from 'react-router-dom';
import products from '../utils/products.js';
import './ProductDetail.scss'; 
import Features from '../components/Features.jsx';
import ProductsList from '../components/ProductsList.jsx';
import JoinUs from '../components/JoinUs.jsx';
import { useCart } from '../components/CartContex.jsx';

export default () => {
  const { id } = useParams();
  const product = products.collection.find(p => p.id.toString() === id);
  const [count, setCount] = useState(1);
  const { dispatch } = useCart();

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleCountChange = (event) => {
    setCount(parseInt(event.target.value));
  };

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: { ...product, count } });
  };

  const renderDimensions = () => {
    switch (product.type) {
      case 'chairs':
        return (
          <table>
              <tr><th>Width</th><th>Height</th><th>Depth</th></tr>
              <tr><td>{product.dimensions.width}</td><td>{product.dimensions.height}</td><td>{product.dimensions.depth}</td></tr>
          </table>
        );
      case 'tables':
        return (
        <table>
          <tr><th>Width</th><th>Length</th><th>Height</th></tr>
          <tr><td>{product.dimensions.width}</td><td>{product.dimensions.length}</td><td>{product.dimensions.height}</td></tr>
        </table>
        );
      case 'ceramics':
        return (
        <table>
          <tr><th>Height</th><th>Diameter</th></tr>
          <tr><td>{product.dimensions.height}</td><td>{product.dimensions.diameter}</td></tr>
        </table>
        );
      case 'tableware':
      case 'crockery':
        return (
        <table>
          <tr><th>Diameter</th></tr>
          <tr><td>{product.dimensions.diameter}</td></tr>
        </table>
        );
      case 'cutlery':
        return (
          <table>
            <tr><th>Length:</th></tr>
            <tr><td>{product.dimensions.length}</td></tr>
          </table>
        );
      default:
        return null;
    }
  };

  const relatedProducts = products.collection.filter(p => p.type === product.type && p.id !== product.id);

  return (
    <div>
      <div className="product-detail">
        <img src={product.img} alt={product.title} />
        <div className="details">
          <h2>{product.title}</h2>
          <h3>{product.price}</h3>
          <div className="description">
            <h4>Description</h4>
            <p>{product.description}</p>
          </div>
          <div className="dimensions">
            <h4>Dimensions</h4>
            {renderDimensions()}
          </div>
          
          <div className="product-detail-controls">
            <label>
              <h4>Amount</h4>
              <input
                type="number"
                value={count}
                onChange={handleCountChange}
                min="1"
                max={product.count}
              />
            </label>
            <button onClick={handleAddToCart} className='button dark'>Add to Cart</button>
          </div>
        </div>

      </div>
      <div className="promo">
        <div className="collection">
          <h2>You might also like</h2>
          <ProductsList Array={relatedProducts.slice(0, 4)} />
          <Link className='button light' to='/allproducts'>View collection</Link>
        </div>
        <Features />
      </div>
      <JoinUs/>
    </div>
  );
};