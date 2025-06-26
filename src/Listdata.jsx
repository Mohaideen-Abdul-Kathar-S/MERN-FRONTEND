import React, { useEffect, useState } from 'react'

export default function Listdata() {
    let [apidata,setapidata] = useState([]);
    let [btn,setbtn] = useState("posts");
    // let dd =[];
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/${btn}`)
        .then((message)=>{
            return message.json();
        })
        .then((message)=>{
            // console.log(message)
            // for (let i in message){
            //     dd[i]=<p>{message[i]}</p>
            // }
            // console.log(dd)
            setapidata(message);
        })
    },[btn])
  return (
    <div>
        <div>listdata Usinf API</div>
  <button onClick={()=> setbtn('posts')}>posts</button>
       <button onClick={()=> setbtn('todos')}>todos</button>
       <button onClick={()=> setbtn('users')}>users</button>

           
       {
        apidata.map((val)=> (
        <p key={val.id}>
            {val.name || val.title || val.body}
        </p>
    ))
    }
    
       
   
    </div>
    
    
  )
}
