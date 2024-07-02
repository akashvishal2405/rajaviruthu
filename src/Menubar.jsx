import React from 'react'
import shop from "./Images/rajavirundhu.png"
import biriyani from './Images/menubar/biriyani.jpeg';
import meals from './Images/menubar/meals.jpeg';
import staters from './Images/menubar/staters.jpg';
import parota from './Images/menubar/parota.jpeg';
import chinesefood from './Images/menubar/chinesefood.jpg';
import dosa from './Images/menubar/dosa.jpg';
import egg from './Images/menubar/egg.jpg';
import gravy from './Images/menubar/gravy.jpeg';
import soup from './Images/menubar/soup.jpeg';
import icecream from './Images/menubar/icecream.jpeg';
import idly from './Images/menubar/idly.jpg';
import juice from './Images/menubar/juice.jpg';
import spl from "./Images/spl.png"




import "./Menubar.css"
import { Link, Outlet, } from 'react-router-dom';

const Menubar = () => {
  return (
    <>
      
            <h1 className="shopname">
              <img src={shop}alt="" />
            </h1>
   

      <div className="container">
     <div className="item">
      <Link to={"/"} >
          <img src={spl} alt="BIRIYANI" className="img" />
          <p>
            <b>RAJAVIRUNTHU SPL</b>
          </p>
          </Link>
        </div> 

        <div className="item">
      <Link to={"menu1"} >
          <img src={biriyani} alt="BIRIYANI" className="img" />
          <p>
            <b>BIRIYANI</b>
          </p>
          </Link>
        </div> 
        

        <div className="item">
        <Link to={"menu2"}>
          <img src={meals} alt="MEALS" className="img" />
          <p>
            <b>MEALS</b>
          </p>
          </Link>
        </div>

        <div className="item">
        <Link to={"menu3"}>
          <img src={parota} alt="MEALS" className="img" />
          <p>
            <b>PAROTA</b>
          </p>
          </Link>
        </div>

        <div className="item">
        <Link to={"menu4"}>
          <img src={staters} alt="MEALS" className="img" />
          <p>
            <b>STATERS</b>
          </p>
          </Link>
        </div>

      

        <div className="item">
        <Link to={"menu5"}>
          <img src={chinesefood} alt="MEALS" className="img" />
          <p>
            <b>CHINESE FOOD</b>
          </p>
          </Link>
        </div>
        <div className="item">
          
     
        <Link to={"menu6"}>
          <img src={dosa} alt="MEALS" className="img" />
          <p>
            <b>DOSA</b>
          </p>
          </Link>
        </div>
        <div className="item">
        <Link to={"menu7"}>
          <img src={juice} alt="MEALS" className="img" />
          <p>
            <b>JUICE</b>
          </p>
          </Link>
        </div>

     

        <div className="item">
        <Link to={"menu8"}>
          <img src={egg} alt="MEALS" className="img" />
          <p>
            <b>EGG</b>
          </p>
          </Link>
        </div>

        <div className="item">
        <Link to={"menu9"}>
          <img src={gravy} alt="MEALS" className="img" />
          <p>
            <b>GRAVY</b>
          </p>
          </Link>
        </div>

        <div className="item">
        <Link to={"menu10"}>
          <img src={soup} alt="MEALS" className="img" />
          <p>
            <b>SOUP</b>
          </p>
          </Link>
        </div>

        <div className="item">
        <Link to={"menu11"}>
          <img src={icecream} alt="MEALS" className="img" />
          <p>
            <b>ICE CREAM </b>
          </p>
          </Link>
        </div>

        <div className="item">
        <Link to={"menu12"}>
          <img src={idly} alt="MEALS" className="img" />
          <p>
            <b>BREAK FAST</b>
          </p>
          </Link>
        </div>

    
      

        
      </div>
     
    </>
  )
}

export default Menubar