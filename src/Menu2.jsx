import React from 'react'
import { Meals} from './Meals';

const Menu2 = () => {
  return (
    <>
        
     <h2 className='head'>Meals</h2>
        <div className='image-grid'>
                 
            {Meals.map((item, id) => (
           <div key={id} className="image-item">
            <img src={item.image} className='image' alt=""/>
            <p className='itemname'>{item.itemName} <br /><span className='price'>{item.price}</span> </p> 
           
         </div>
            
        ))}
      </div>
    </>
  )
}

export default Menu2