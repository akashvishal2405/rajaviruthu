import React from 'react'
import {Biriyani} from './Biriyani';
import "./displayitems.css"

const Menu1 = () => {
  return (
    <>  
    
     <h2 className='head'>Biriyani</h2>
        <div className='image-grid'>
                 
            {Biriyani.map((item, id) => (
           <div key={id} className="image-item">
            <img src={item.image} className='image' alt=""/>
            <p className='itemname'>{item.itemName} <br /><span className='price'>{item.price}</span> </p> 
           
         </div>
            
        ))}
      </div>
  
    </>
  )
}

export default Menu1