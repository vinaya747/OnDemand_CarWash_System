import React, { Component }  from 'react';
import { useState } from "react";
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
import { useHistory } from 'react-router-dom';



function Login1() {
  const btnstyle={margin:'8px 0'}
  const avatarStyle={backgroundColor:'#0000FF'}
  const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto",borderRadius:'20px'}
  let history=useHistory()
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
      history.push("/pack");
    } catch (error) {
      console.log(error.message);
      alert("Invalid user name or password")
    }
  };

  

  return (
 
    <div>
    
  <Grid>
  <Paper elevation={10} style={paperStyle}>
           <>
    

 
      <div className='container'>
      <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
          <div className='heading'>
        <h3 > Login </h3>
        </div>
        <div className="form">
        <input
          placeholder="Email..."
          type='email'
          onChange={(event) => {
            setLoginEmail(event.target.value);
          }}
        />
        <br></br>
        <br></br>
        <input
          placeholder="Password..."
          type='password'
          onChange={(event) => {
            setLoginPassword(event.target.value);
          }}
        />
</div>
<br></br>
<br></br>
<div className='sign-up'>
        <Button className='tex' onClick={login} color='primary' variant="contained" style={btnstyle} fullWidth> Login</Button>
      </div></div>
      <p class="sign-up">Don't have an acount ? <a href="/register"> Sign up</a> </p>

      </>
      </Paper>
      </Grid>
      
      </div>

  
  );
}

export default Login1;
