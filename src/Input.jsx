import React, { useState } from 'react'

export default function Input() {
  const data = ['Apple','orange','mango','pineapple','Lime','pomogrante','dragon fruit','banana','graps'];
  const [search,setSearch] = useState([]);
    const [val,setVal]= useState()
    const hand = (event)=>{
      event.preventDefault();
        setVal(event.target.value)
        setSearch(data.filter((i)=>{
            return i.toLocaleLowerCase().includes((event.target.value).toLocaleLowerCase()) && event.target.value!="";
        }
        ))
    }
    const clicked = (e)=>{
        e.preventDefault();
        document.getElementById('idval').innerText=data.some((i)=>i.toLocaleLowerCase()===(val.toLocaleLowerCase()))?val:`${val} not found`;
        document.getElementById('inputid').value='';
        setSearch([])

    }
  return (
    <div>
        <form onSubmit={clicked}>
        <input type="name"   placeholder='Search here...' id='inputid' onChange={hand} />
        <br />
        <br />
        <button type='submit'>Search</button>
        </form>
        <p id='idval' style={{backgroundColor:'red'}} ></p>
        {search.map((l,i)=>(<p key={i} style={{backgroundColor:"grey",color:"white"}}>{i} - {l}</p>))}
    </div>
    
  )
}
