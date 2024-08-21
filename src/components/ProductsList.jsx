import React from 'react'
import { Link } from 'react-router-dom';
import './ProductsList.scss'


export default ({Array}) => {

    return (
        <div className="products">
            {Array.map(product => {
                return <div key={product.id} className='product'>

                    <Link to={`/product/${product.id}`}>
                        
                        <img src={product.img} />
                        <h4>{product.title}</h4>
                        <h5>{product.price}</h5>                    
                    
                    </Link>

                </div> 
            })} 
        </div>
    )
}