import React from 'react'
import {EggItems} from './egg.js';


const Menu8 = () => {
  return (
    <div>
             
        <h2 className='head'>Egg Items</h2>
        <div className='image-grid'>
                 
            {EggItems.map((item, id) => (
           <div key={id} className="image-item">
            <img src={item.image} className='image' alt=""/>
            <p className='itemname'>{item.itemName} <br /><span className='price'>{item.price}</span> </p> 
           
         </div>
            
        ))}
      </div>
  
    </div>
  )
}

export default Menu8