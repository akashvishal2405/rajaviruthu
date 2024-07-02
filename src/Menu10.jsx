import React from 'react'
import {Soup} from './soup.js';

const Menu10 = () => {
  return (
    <div>
       <h2 className='head'>Starters Items</h2>
        <div className='image-grid'>
                 
            {Soup.map((item, id) => (
           <div key={id} className="image-item">
            <img src={item.image} className='image' alt=""/>
            <p className='itemname'>{item.itemName} <br /><span className='price'>{item.price}</span> </p> 
           
         </div>
            
        ))}
      </div>
    </div>
  )
}

export default Menu10