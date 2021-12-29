import React, { Component }  from 'react';
import { useState } from "react";

import {useHistory} from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import { auth } from "./firebase-config";

function Register() {
  const avatarStyle={backgroundColor:'#0000FF'}
  const btnstyle={margin:'20px 30px',width:'30',paddingLeft:'25'}
let history=useHistory()
  const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto", borderRadius:'20px'}
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
 

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
      alert("registration is successful")
      history.push("/log")
    } catch (error) {
      alert("enter email and password")
      console.log(error.message);
    }
  };

  

 
  return (
   
    <div >
           <>
           <Grid>
  <Paper elevation={10} style={paperStyle}>
      <div>
        <br></br>
        <br></br>
        <h3> Register User </h3>
        <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
        <br></br>
        <br></br>
        <input
          placeholder="Email..."
          onChange={(event) => {
            setRegisterEmail(event.target.value);
          }}
        />
<br></br>
<br></br>
        <input
          placeholder="Password..."
          onChange={(event) => {
            setRegisterPassword(event.target.value);
          }}
        />
         
<br></br>
<br></br>
        
        <Button  onClick={register} color='primary' variant="contained" style={btnstyle} >Register</Button>
      </div>

      

  
      </Paper>
      </Grid>
      </>
    </div>
  );
}

export default Register;
