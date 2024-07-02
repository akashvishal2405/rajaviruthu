import React from "react";
import {juice} from "./juice.js"

const Menu7 = () => {
  return (
    <div>
            <h2 className='head'>Juice Items</h2>
    <div className='image-grid'>
             
        {juice.map((item, id) => (
       <div key={id} className="image-item">
        <img src={item.image} className='image' alt=""/>
        <p className='itemname'>{item.itemName} <br /><span className='price'>{item.price}</span> </p> 
       
     </div>
        
    ))}

  </div>
    </div>
  );
};

export default Menu7;
