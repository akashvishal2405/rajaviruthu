import React from 'react'
import {DosaItems} from './Dosa.js';
const Menu6 = () => {
  return (
    <div>        
    <h2 className='head'>Dosa Items</h2>
       <div className='image-grid'>
                
           {DosaItems.map((item, id) => (
          <div key={id} className="image-item">
           <img src={item.image} className='image' alt=""/>
           <p className='itemname'>{item.itemName} <br /><span className='price'>{item.price}</span> </p> 
          
        </div>
           
       ))}
     </div>
     </div>
  )
}

export default Menu6