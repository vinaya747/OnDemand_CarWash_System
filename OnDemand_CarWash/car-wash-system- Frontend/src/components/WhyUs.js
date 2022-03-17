import React from "react";
import "./WhyUs.css";
import CheckIcon from "@material-ui/icons/Check";
import { Navbar } from "react-bootstrap";
import Navbar1 from "./Navbar1";

import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'


function WhyUs() {
  const paperStyle={padding :20,height:'100vh',width:1200, margin:"50px auto",paddingTop:20
 
} 
  return (
   <>
   <Navbar1/>
  
 
    <div className="component">
      <Grid>
      <Paper elevation={10} style={paperStyle}>
      <div className="banner">
        <div>
          <img className="banner__image" src="https://www.venturef0rth.com/wp-content/uploads/2019/07/car-wash-name-ideas.jpg" alt="WYPE LOGO" />
        </div>
        <div className="banner__contentRight">
          <br /> <br /> <br />
          <h1 className="banner__heading">THE BEST CAR WASH AWAITS YOU</h1>
          <br></br>
        <p className="banner__para">
            
          </p>
        </div>
      </div>
      </Paper>
      </Grid>
      <hr />
    
      <Paper elevation={10} style={paperStyle}>
      <div className="banner">
        <div className="banner__contentLeft">
          <h1 className="feature__heading">QUALITY</h1>
          <br></br>
          <h4 className="feature__subHeading">It's Our responsibility</h4>
          <p className="banner__para">
            We are committed to quality and take car care seriously. 
          </p>
          <p className="points">
            <CheckIcon color="secondary" />
            Skilled whashers.
          </p>
          <p className="points">
            <CheckIcon color="secondary" /> Genuine spares.
          </p>
          <p className="points">
            <CheckIcon color="secondary" />
            Service warranty.
          </p>
        </div>
        <div>
          <img className="banner__image" src="https://s25180.pcdn.co/wp-content/uploads/2015/06/3611_serving-up-customer-satisfaction.jpg" alt="WYPE LOGO" />
        </div>
      </div>
      </Paper>
     
    </div>

    </>
    
  );
}

export default WhyUs;
