import React from 'react'
import {Parota} from './paroto.js';

const Menu3 = () => {
  return (
    <div>
           
     <h2 className='head'>Parotta Items</h2>
        <div className='image-grid'>
                 
            {Parota.map((item, id) => (
           <div key={id} className="image-item">
            <img src={item.image} className='image' alt=""/>
            <p className='itemname'>{item.itemName} <br /><span className='price'>{item.price}</span> </p> 
           
         </div>
            
        ))}
      </div>
    </div>
  )
}

export default Menu3