import React from 'react'
import './JoinUs.scss'
import Checkmark from '../icons/checkmark.svg'

export default () => {
    return (
        <div className="join__us">
            <h2>Join the club and get the benefits</h2>
            <p>Sign up for our newsletter and receive exclusive offers on <br/>new ranges, sales, pop up stores and more</p>
            <ul>
                <li><img src={Checkmark}/><p>Exclusive offers</p></li>  
                <li><img src={Checkmark}/><p>Free events</p></li> 
                <li><img src={Checkmark}/><p>Large discounts</p></li> 
            </ul>
            <form>
                <input type="email" placeholder='your@email.com'/>
                <button type='submit'>Sign Up</button>
            </form>
        </div>
    )
}