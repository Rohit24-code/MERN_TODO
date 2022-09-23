import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react'

const Signup = () => {
 const [udata,setData]=useState({})

 const handleChange=(e)=>{
    let{name,value}=e.target
    setData({
        ...udata,[name]:value
    })
 }

 const submitData= async (e)=>{
      e.preventDefault()
      let {data} = await axios.post("http://localhost:8080/auth/signup", udata);
      console.log(data);
 }
  return (
    <div
      style={{
        width: "98vw",
        display: "flex",
        alignItem: "center",
        justifyContent: "center",
      }}
    >
      <div>
        <FormControl
          style={{
            width: "50vw",
            display: "flex",
            alignItem: "center",
            justifyContent: "center",
            gap: "10px",
            backgroundColor: "white",
          }}
          fullWidth={true}
        >
          <TextField
            label="Name"
            onChange={handleChange}
            name="name"
            variant="filled"
          />
          <TextField
            label="Username"
            onChange={handleChange}
            name="username"
            variant="filled"
          />
          <TextField
            label="Password"
            onChange={handleChange}
            name="password"
            variant="filled"
          />
          <TextField
            label="Email"
            onChange={handleChange}
            name="email"
            variant="filled"
          />
          <TextField
            label="Mobile"
            onChange={handleChange}
            name="mobile"
            variant="filled"
          />
          <TextField
            label="Country"
            onChange={handleChange}
            name="country"
            variant="filled"
          />
          {/* <FormControl fullWidth> */}
            
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="gender"
                value=""
              label="Gender"
              onChange={handleChange}
            >
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
              <MenuItem value="unspecified">Unspecified</MenuItem>
            </Select>
          {/* </FormControl> */}
          <Button onClick={submitData} >Sign in</Button>
        </FormControl>
      </div>
    </div>
  );
}

export default Signup
