import React from 'react'

export default function FromChild(probs) {
   
    
  return (
    <div>
        <input type="password" onChange={(e)=> probs.sendPass(e.target.value)}/>
    
    </div>

  )
}
