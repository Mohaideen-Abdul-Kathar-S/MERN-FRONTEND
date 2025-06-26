import React, { useEffect } from 'react'
import ExpenceForm from './ExpenceForm'
import {v4 as uid} from "uuid";
import  { useState } from 'react'
import ListComp from './ListComp';
import Summary from './Summary';
import "../App.css"
import axios from 'axios';

  const data = [
    {
      id:uid(),
      title : "E1",
      amount : 100,
    },
    {
      id : uid(),
      title : "E2",
      amount : -200,
    }
  ];


export default function Expence(Props) {
  const [exp,setExp] = useState(data);
  const [items,setItems] = useState({})
   
  console.log(axios.get("http://localhost:3000/api/expenses"))
   
  useEffect(()=>{
     axios.get("http://localhost:3000/api/expenses")
     .then((res)=>setExp(res.data))
     .catch((err)=>console.error("Fetch error:",err));
    },[]) 

  
  const addExpen = (title,amount,id=null)=>{
    if(id){
      axios.put(`http://localhost:3000/api/expenses/${id}`,
      {title,amount:Number(amount)}).then((res)=>{
      const updatedList=exp.map((ex)=>ex._id==id ? res.data:exp);
        setExp(updatedList);
        setItems(null); 
      })
    .catch((err)=>console.error("updaer erre",err))
      
    }else{ 
      axios.post("http://localhost:3000/api/expenses",
        {title,amount:Number(amount)})
      .then((res)=>setExp([...exp,res.data]))
      .catch((err)=>console.error("Add Error",err));
    }
    
    
    
  }
   const del=(id)=>{
    axios.delete(`http://localhost:3000/api/expenses/${id}`)
    .then(()=>setExp(exp.filter((ex)=>ex._id!==id)))
    .catch((err)=>console.error("Delete Err:",err));
   }

    

  // console.log(exp)
  return (
    <div>
      
      <ExpenceForm sendData={addExpen} item={items}/>
      <ListComp exp={exp} delid={del} edit={setItems}/>
      <Summary exp={exp}/>
     
    </div>
  )
}
