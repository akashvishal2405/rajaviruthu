import React from 'react'
import{RajaVirundhu} from "./Rajavirunthuspl.js"

const Menuspl = () => {
  return (
    <div>
         
     <h2 className='head'>Rajavirunthu Special</h2>
        <div className='image-grid'>
                 
            {RajaVirundhu.map((item, id) => (
           <div key={id} className="image-item">
            <img src={item.image} className='image' alt=""/>
            <p className='itemname'>{item.itemName} <br /><span className='price'>{item.price}</span> </p> 
           
         </div>
            
        ))}
      </div>
    </div>
  )
}

export default Menuspl