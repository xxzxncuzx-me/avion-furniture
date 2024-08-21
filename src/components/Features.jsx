import React from 'react'
import './Features.scss'
import texts from "../utils/texts.js";

export default () => {
    return (
        <div className='features__block'>
            <h2>What makes our brand different</h2>
            <div className="features">
                {texts.homepage.features.map(block => {
                    return <div key={block.id} className='features__block'>
                        <img src={block.icon} />
                        <h4>{block.title}</h4>
                        <p>{block.description}</p>
                    </div> 
                })}  
            </div>
        </div>
    )
}



