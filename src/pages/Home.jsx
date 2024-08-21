import React from 'react'
import { Link } from 'react-router-dom';
import './Home.scss'
import products from '../utils/products.js';
import Features from '../components/Features'
import JoinUs from '../components/JoinUs.jsx';
import ProductsList from '../components/ProductsList.jsx';
import './AboutBlock.scss'

export default () => {
    return (
        <div className='wrap'>
            <div className='home__page--main'>
                <div className='info__box'>
                    <div className="info__box--text">
                        <h2>Luxury homeware for people who love timeless design quality</h2>
                        <p>Shop the new Spring 2024 collection today</p>
                    </div>
                    <Link className='button light' to='/allproducts'>View collection</Link>
                </div>
                <div className="xs__img"></div>
            </div>
            <div className='home__page--content'>
                <Features/>
                <div className="collection">
                    <ProductsList Array={products.collection.slice(0, 4)} />
                    <Link className='button light' to='/allproducts'>View collection</Link>
                </div>
                <div className="about__brand">
                    <div className="about text">
                        <div className="about__text--block">
                            <h2>It started with a small idea</h2>
                            <p>A global brand with local beginnings, our story begain in a small studio in South London in early 2014</p>
                        </div>
                        <a className='button dark' href=''>View collection</a>   
                    </div>
                    <div className="about img"></div>
                </div>
            </div>
            <JoinUs/>
        </div>
    )
}