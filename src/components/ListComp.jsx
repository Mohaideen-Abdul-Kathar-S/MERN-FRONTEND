import React, { useState } from 'react'
import Expence from './Expence';
import '../App.css'
export default function ListComp(props) {
    //const [exp,setExp] = useState(props.exp);
   
  return (
    <div>
      
        <ul className='ulclass'>
      {
        props.exp.map((item)=>{
          return <li key={item.id}>item : {item.title}, rate : {item.amount} - <button onClick={()=>props.delid(item._id)} id='delbtn'>Delete</button> <button id='editbtn' onClick={()=>props.edit(item)}>Edit</button></li>
        })
      }
     </ul>
    </div>
  )
}
