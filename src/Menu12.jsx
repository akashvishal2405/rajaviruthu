import React from 'react'
import{Breakfast} from "./breakfast.js"

const Menu12 = () => {
  return (
    <div>
      <h2 className='head'>Breakfast Items</h2>
    <div className='image-grid'>
             
        {Breakfast.map((item, id) => (
       <div key={id} className="image-item">
        <img src={item.image} className='image' alt=""/>
        <p className='itemname'>{item.itemName} <br /><span className='price'>{item.price}</span> </p> 
       
     </div>
        
    ))}
  </div>
  </div>
  )
}

export default Menu12