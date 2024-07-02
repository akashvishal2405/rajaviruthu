import React from 'react'
import {Gravy} from './gravy.js';

const Menu9 = () => {
  return (
    <div>
       <h2 className='head'>Gravy Items</h2>
       <div className='image-grid'>
                
           {Gravy.map((item, id) => (
          <div key={id} className="image-item">
           <img src={item.image} className='image' alt=""/>
           <p className='itemname'>{item.itemName} <br /><span className='price'>{item.price}</span> </p> 
          
        </div>
           
       ))}
     </div>
    </div>
  )
}

export default Menu9