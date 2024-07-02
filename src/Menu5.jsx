import React from 'react'
import {Chinese} from "./chinese.js"

const Menu5 = () => {
  return (
    <div>
               <h2 className='head'>Chinese Items</h2>
             <div className='image-grid'>
                
                {Chinese.map((item, id) => (
               <div key={id} className="image-item">
                <img src={item.image} className='image' alt=""/>
                <p className='itemname'>{item.itemName} <br /><span className='price'>{item.price}</span> </p> 
               
             </div>
                
            ))}
          </div>
    </div>
  )
}

export default Menu5