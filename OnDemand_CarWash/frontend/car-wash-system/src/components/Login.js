import React, {useState} from 'react';

import './Login.css';


import {Link, useHistory} from "react-router-dom";
import Navbar1 from './Navbar1';
const Login = () => {
    let history =useHistory()
    const submit = e =>{
        history.push("/pack")
       
            
          
    }
    return (
        <>
        <Navbar1/>
        <div className='form-div'>
            <div className='loginForm'>
                <form onSubmit={submit}>
                    <label htmlFor="username">User Name</label><br/>
                    <input type="text" id="username" placeholder='Enter your Username' /> <br/><br/>

                    <label htmlFor="password">Password</label><br/>
                    <input type="password" id="password" placeholder='enter your Password' /><br/><br/>

                   
                 
                    <button type="submit" className='loginButton'  >LogIn</button>
                  
                </form>
            </div>
        </div>
        </>
    )
}

export default Login

/*import React, { Component }  from 'react';
import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import './login1.css';
import { auth } from "./firebase-config";
import { useHistory } from 'react-router-dom';
function Login1() {
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
           <>
      

    
      <div className='container'>
          <div className='heading'>
        <h3 > Login </h3>
        </div>
        <div className="form">
        <input
          placeholder="Email..."
          onChange={(event) => {
            setLoginEmail(event.target.value);
          }}
        />
        <br></br>
        <br></br>
        <input
          placeholder="Password..."
          onChange={(event) => {
            setLoginPassword(event.target.value);
          }}
        />
</div>
<br></br>
<br></br>
<div className='sign-up'>
        <button className='tex' onClick={login}> Login</button>
      </div></div>
      <p class="sign-up">Don't have an acount ? <a href="/register"> Sign up</a> </p>
      
      </>
      </div>
  );
}

export default Login1;*/