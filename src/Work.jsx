import React, { useState } from 'react'

export default function Work(props) {
    /* const [count,setValue] = useState(true);
    const [a,setA] = useState(0);
    const inc = ()=> setA(a+1);
    const dec = ()=> setA(a-1);
    const [red,setRed] = useState(0);
    const [blue,setBlue] = useState(0);
    const [green,setGreen] = useState(0);
    const redf = ()=> setRed(red+1);
    const bluef = ()=> setBlue(blue+1);
    const greenf = ()=> setGreen(green+1); */
    
    
  return (
    <>
        {/* {count && <h2>this is a work component </h2>}
        <button id='b' onClick={()=>{setValue(!count);
            
        }
        }>{(!count && <p>view</p>) || <p>hide</p>}</button>
        <hr />
        <button onClick={inc}>+</button>
        {a}
        <button onClick={dec}>-</button>

        <button onClick={redf}>red</button>
        {red}
        <button onClick={bluef}>blue</button>
        {blue}
        <button onClick={greenf}>green</button>
        {green} */}
         {props.obj.map((val,index)=>( 
          <p key={index}> 
             {val.name} {val.age} 
             </p>
          ))} 
          
    </>
  )
}
