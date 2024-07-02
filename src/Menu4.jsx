import React from 'react'
import {Starter} from './Starter.js';

const Menu4 = () => {
  return (
    <div>
        <h2 className='head'>Starters Items</h2>
        <div className='image-grid'>
                 
            {Starter.map((item, id) => (
           <div key={id} className="image-item">
            <img src={item.image} className='image' alt=""/>
            <p className='itemname'>{item.itemName} <br /><span className='price'>{item.price}</span> </p> 
           
         </div>
            
        ))}
      </div>
  

    </div>
  )
}

export default Menu4