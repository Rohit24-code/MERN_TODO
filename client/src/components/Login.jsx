import React, { useContext } from 'react'
import './Login.css'
import Button from "@mui/material/Button";
import { auth, provider } from './firebase';
import { AppContext } from './AppContext';



function Login() {
    const{isAuth,SetIsAuth}=useContext(AppContext)
 
    console.log(isAuth)
    const signIn=()=>{
        auth.signInWithPopup(provider)
        .then(result =>{
             SetIsAuth(result.user) 
        })
        .catch((err)=>alert(err.message))
    }
  return (
    <div className="login">
      <div className="login_logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/640px-Facebook_f_logo_%282021%29.svg.png"
          alt="fb"
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmGXGBMLhXPZUCH3crW_YX2yedIEzxSsBuDg&usqp=CAU"
          alt="fb"
        />
      </div>
      <Button type="submit" onClick={signIn}>Sign In</Button>
    </div>
  );
}

export default Login 
