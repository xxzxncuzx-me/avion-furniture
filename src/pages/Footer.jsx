import React from 'react'
import './Footer.scss'
import texts from "../utils/texts.js";

export default () => {
    return (
        <div className='footer'>
            <div className="main">
                <div className="main__blocks">
                    <div className="first__row">
                        <div>
                            <p>Menu</p>
                            <ul>
                                <li>New arrivals</li>
                                <li>Best sellers</li>
                                <li>Recently viewed</li>
                                <li>Popular this week</li>
                                <li>All products</li>
                            </ul>
                        </div>
                        <div>
                            <p>Categories</p>
                                <ul>
                                    <li>Crockery</li>
                                    <li>Furniture</li>
                                    <li>Homeware</li>
                                    <li>Plant pots</li>
                                    <li>Chairs</li>
                                    <li>Crockery</li>
                                </ul>
                        </div>
                    </div>
                    <div>
                        <p>Our company</p>
                        <ul>
                            <li>About us</li>
                            <li>Vacancies</li>
                            <li>Contact us</li>
                            <li>Privacy</li>
                            <li>Returns policy</li>
                        </ul>
                    </div>
                </div>
                <div className="join__form">
                    <p>Join our mailing list</p>
                    <form>
                        <input type="email" placeholder='your@email.com'/>
                        <button type='submit'>Sign Up</button>
                    </form>
                </div>
            </div>
            <hr />
            <div className="social__medias">
                <p>Copyright 2022 Avion LTD</p>
                <div className="icons">
                    <ul>
                        {texts.footer.medias.map(media => {
                            return <li key={media.icon}><a href=''><img src={media.icon} /></a></li>
                        })}  
                    </ul>
                </div>
            </div>
        </div>
    )

}