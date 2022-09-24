import React from 'react'
import './Login.css'
import Button from "@mui/material/Button";
import { inputClasses, TextField } from '@mui/material';
import { useState } from 'react';
import axios from "axios"
import { NavLink, useNavigate } from 'react-router-dom';




function Login() {
    const [formData,setFormData]= useState({})
    const nav= useNavigate()
    const handleChange=(e)=>{
      const{value,name}=e.target
      setFormData(
      {  ...formData,
        [name]:value,}
        )
    }

    const onclicking=async(e)=>{
      e.preventDefault()
    const {data}= await axios.post("http://localhost:8080/auth/login",formData)
   
        localStorage.setItem("token", data.token);
        if(data.token){
             nav("/home")
        }
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
          label="Username"
          variant="outlined"
          name="username"
          onChange={handleChange}
        />
        <TextField
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
      <NavLink to="/signup">Now signed up ,Do it now </NavLink>
    </div>
  );
}

export default Login 
