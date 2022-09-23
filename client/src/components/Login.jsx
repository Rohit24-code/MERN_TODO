import React, { useContext } from 'react'
import './Login.css'
import Button from "@mui/material/Button";
import { AppContext } from './AppContext';
import { inputClasses, TextField } from '@mui/material';
import { useState } from 'react';
import axios from "axios"



function Login() {
    const{isAuth,SetIsAuth}=useContext(AppContext)
    const [formData,setFormData]= useState({})
    
    const handleChange=(e)=>{
      const{value,name}=e.target
      setFormData(
      {  ...formData,
        [name]:value,}
        )
    }

    const onclicking=async(e)=>{
      e.preventDefault()
      console.log(formData);
    const {data}= await axios.post("http://localhost:8080/auth/login",formData)
        console.log(data)
    }

  return (
    <div className="login">
      <div className="login_logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/640px-Facebook_f_logo_%282021%29.svg.png"
          alt="fb"
        />
      </div>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          width: "25%",
        }}
        className={inputClasses.root}
      >
        <TextField
          fullWidth="true"
          // id="outlined-basic"
          label="Username"
          variant="outlined"
          name="username"
          onChange={handleChange}
        />
        <TextField
          // id="outlined-basic"
          label="password"
          variant="outlined"
          name="password"
          type="password"
          onChange={handleChange}
        />
        <Button
          size="medium"
          variant="outlined"
          onClick={onclicking}
          type="click"
        >
          Login
        </Button>
      </form>
    </div>
  );
}

export default Login 
