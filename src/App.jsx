import React from "react";

import Menubar from "./Menubar";
import {  Route, Routes } from "react-router-dom";

import Menu1 from "./Menu1";
import Menu2 from "./Menu2";
import Menu3 from "./Menu3";
import Menu4 from "./Menu4";
import Menu6 from "./Menu6";
import Menu7 from "./Menu7";
import Menu9 from "./Menu9";
import Menu8 from "./Menu8";
import Menu10 from "./Menu10";
import Menu11 from "./Menu11";
import Menu12 from "./Menu12";
import Menuspl from "./Menuspl";
import Menu5 from "./Menu5";


const App = () => {
  return (
    <>
    <Menubar />
        <Routes>
          
            <Route path="/" exact element={<Menuspl />} />
            <Route path="menu1" exact element={<Menu1 />} />
            <Route path="menu2" exact element={<Menu2 />} />
            <Route path="menu3" exact element={<Menu3 />} />
            <Route path="menu4" exact element={<Menu4 />} />
            <Route path="menu5" exact element={<Menu5 />} />
            <Route path="menu6" exact element={<Menu6 />} />
            <Route path="menu7" exact element={<Menu7 />} />
            <Route path="menu8" exact element={<Menu8 />} />
            <Route path="menu9" exact element={<Menu9 />} />
            <Route path="menu10" exact element={<Menu10 />} />
            <Route path="menu11" exact element={<Menu11 />} />
            <Route path="menu12" exact element={<Menu12 />} />
           
      
        </Routes>
    
    </>
  );
};

export default App;
