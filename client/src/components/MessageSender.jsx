import { Avatar } from '@mui/material'
import VideocamIcon from '@mui/icons-material/Videocam'
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary'
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon'
import React, { useState } from 'react'
import './MessageSender.css'
import { useContext } from 'react'
import { AppContext } from './AppContext'
export function MessageSender() {

  const {isAuth} = useContext(AppContext)
  console.log(isAuth.photoURL)
    const [input,setInput] = useState("")
    const [imageurl,setImageurl] = useState("")

    const handleSubmit=(e)=>{
        e.preventDefault()

     
        
        setInput("")
        setImageurl("")
    }
  return (
    <div className='messageSender'>
      
      <div className="messageSender_top">
        <Avatar src={isAuth.photoURL}/>
        <form >
        <input value={input} onChange={(e)=>setInput(e.target.value)} className='messageSender_input' type="text" placeholder={`what's on your mind ${isAuth.displayName}`} />
        <input value={imageurl} onChange={(e)=>setImageurl(e.target.value)}  type="text" placeholder='image url' />
        <button onClick={handleSubmit} type="submit">
            Hidden submit
        </button>
        </form>
      </div>
      <div className="messageSender_bottom">
        <div className="messageSender_option">
            <VideocamIcon style={{color : "red"}}/>
            <h3>Live Video</h3>
        </div>
        <div className="messageSender_option">
            <PhotoLibraryIcon style={{color : "green"}}/>
            <h3>Photo/Video</h3>
        </div>
        <div className="messageSender_option">
            <InsertEmoticonIcon style={{color : "orange"}}/>
            <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  )
}

export default MessageSender
