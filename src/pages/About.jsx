import React from 'react'
import './About.scss'
import './AboutBlock.scss'
import Features from '../components/Features'
import JoinUs from '../components/JoinUs'

export default () => {
    return (
        <div className='about__blocks'>
            <h2 className='about__title'>A brand built on the love of craftmanship,<br/> quality and outstanding customer service</h2>
            <div className="blocks__wrap">
                <div className="about__brand">
                    <div className="about text">
                        <div className="about__text--block">
                            <h2>From a studio in London to a global brand with over 400 outlets</h2>
                            <p>When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.</p>
                            <p>Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.</p>
                        </div>
                        <a className='button light' href=''>Get in touch</a>   
                    </div>
                    <div className="about img"></div>
                </div>
                <div className="about__brand">
                    <div className="about img"></div>
                    <div className="about text">
                        <div className="about__text--block">
                            <h2>Our service isn’t just personal, it’s actually hyper personally exquisite</h2>
                            <p>When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.</p>
                            <p>Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.</p>
                        </div>
                        <a className='button light' href=''>Get in touch</a>   
                    </div>
                </div>
            </div>
            <Features/>
            <JoinUs />
        </div>
    )
}

