import React from 'react'
import {AiFillLinkedin,AiOutlineTwitter} from 'react-icons/ai'
const Footer= ()=> {
  return (
    <div className='footer-container'>
        <p>2023 Shopping-Hopping All rights reserverd</p>
        <p className='icons'>
            <AiFillLinkedin/>
            <AiOutlineTwitter/> 
        </p>
    </div>
  )
}

export default Footer