import React, { useEffect, useState } from "react";

import { Link, NavLink } from "react-router-dom";
import { useHistory } from "react-router";
import './Navbar2.css'
function Navbar2() {
 
let history=useHistory()

  return (

      
        
    <button className="bookActionBtn" onClick={()=>{history.push("/whyus")}}>Logout<i className="fas fa-arrow-right rightArw"></i></button>
        
        
       
   
  );
}

export default Navbar2;
