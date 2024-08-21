import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './AllProducts.scss';
import ProductsList from '../components/ProductsList.jsx';
import products from '../utils/products.js';

export default () => {
    const [isTypeDropdownOpen, setTypeDropdownOpen] = useState(false);
    const [isPriceDropdownOpen, setPriceDropdownOpen] = useState(false);
    const [selectedTypes, setSelectedTypes] = useState([]);
    const [selectedPriceRange, setSelectedPriceRange] = useState([]);
    const [visibleProductsCount, setVisibleProductsCount] = useState(9);
    
    const location = useLocation();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const type = params.get('type');
        const price = params.get('price');

        if (type) {
        setSelectedTypes([type]);
        } else {
        setSelectedTypes([]);
        }

        if (price) {
        setSelectedPriceRange([price]);
        } else {
        setSelectedPriceRange([]);
        }
    }, [location]);

    const toggleTypeDropdown = () => {
        setTypeDropdownOpen(!isTypeDropdownOpen);
    };

    const togglePriceDropdown = () => {
        setPriceDropdownOpen(!isPriceDropdownOpen);
    };

    const handleTypeChange = (event) => {
        const { name, checked } = event.target;
        setSelectedTypes(prev =>
        checked ? [...prev, name] : prev.filter(type => type !== name)
        );
    };

    const handlePriceChange = (event) => {
        const { name, checked } = event.target;
        setSelectedPriceRange(prev =>
        checked ? [...prev, name] : prev.filter(price => price !== name)
        );
    };

    const filterProducts = (products) => {
        return products.filter(product => {
        const typeMatch = selectedTypes.length === 0 || selectedTypes.includes(product.type);
        const price = parseFloat(product.price.replace('£', ''));
        const priceMatch = selectedPriceRange.length === 0 || selectedPriceRange.some(range => {
            if (range === 'low') return price <= 100;
            if (range === 'medium') return price > 100 && price <= 250;
            if (range === 'high') return price > 250;
            return false;
        });
        return typeMatch && priceMatch;
        });
    };

    const loadMoreProducts = () => {
        setVisibleProductsCount(prevCount => prevCount + 9);
    };

    const typeFilters = (
        <div className="filtered type">
        <h3>Product Type</h3>
        {[ 'ceramics', 'tables', 'chairs', 'crockery', 'tableware', 'cutlery'].map(type => (
            <div key={type}>
            <input type="checkbox" id={type} name={type} onChange={handleTypeChange} />
            <label htmlFor={type}>{type.charAt(0).toUpperCase() + type.slice(1)}</label>
            </div>
        ))}
        </div>
    );

    const priceFilters = (
        <div className="filtered price">
        <h3>Price</h3>
        {['low', 'medium', 'high'].map(price => (
            <div key={price}>
            <input type="checkbox" id={price} name={price} onChange={handlePriceChange} />
            <label htmlFor={price}>{price === 'low' ? '0-100' : price === 'medium' ? '101-250' : '250+'}</label>
            </div>
        ))}
        </div>
    );

    const filteredProducts = filterProducts(products.collection);
    const visibleProducts = filteredProducts.slice(0, visibleProductsCount);
    
  return (
    <div className='all__products'>
      <div className="page__header">
        <h2>All products</h2>
      </div>
      <div className="products__content">
        <div className="filter">
          <div className="sidebar">
            {typeFilters}
            {priceFilters}
          </div>
          <div className="dropdown">
            <button onClick={toggleTypeDropdown}>Filter by Type</button>
            <div className={`dropdown-content ${isTypeDropdownOpen ? 'open' : ''}`}>
              {typeFilters}
            </div>
          </div>
          <div className="dropdown">
            <button onClick={togglePriceDropdown}>Filter by Price</button>
            <div className={`dropdown-content ${isPriceDropdownOpen ? 'open' : ''}`}>
              {priceFilters}
            </div>
          </div>
        </div>
        <div className="product__list">
         <ProductsList Array={visibleProducts}/>
          {visibleProductsCount < filteredProducts.length && (
            <button onClick={loadMoreProducts} className="button light">
              Load More
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
