import { Avatar } from '@mui/material'
import React from 'react'
import './SidebarRow.css'

const SidebarRow = ({src,Icon,title}) => {
  return (
    <div className='SidebarRow'>
        
         {src && <Avatar src={src}/>}
       
    {Icon && <Icon/>}
        
    <h4>{title}</h4>
    </div>
  )
}

export default SidebarRow
