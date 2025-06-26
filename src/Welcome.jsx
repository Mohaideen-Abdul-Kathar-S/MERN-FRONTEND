import React, { useState } from 'react'
import idcard from './assets/idcard.jpg'
import Work from './Work'

export default function (probs) {
  


console.log(probs.user)
  return (
    <div>
        <h3>I am Learning React js</h3>
        {/* <img className='myid' src={idcard} alt="myidcard" /> */}
        {/* <h2>{name}</h2> */}
        <Work obj={probs.user}  />
        
    </div>
  )
}
