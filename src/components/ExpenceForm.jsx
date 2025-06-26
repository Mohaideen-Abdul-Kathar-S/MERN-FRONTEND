import React, { useEffect, useState } from 'react'
import '../App.css'

const exp = [];
export default function ExpenceForm(props) {
    const [title,setTitle] = useState();
    const [amount,setAmount]=useState();
    const [isedit,setedit]=useState(false);
    
    let handlebtn = (e)=>{
        e.preventDefault();
        if(document.getElementById("title").value!=undefined && document.getElementById("amount").value!=undefined){
        props.sendData(document.getElementById("title").value,document.getElementById("amount").value,props.item.id);
        setTitle();
        setAmount();
        document.getElementById("title").value="";
        document.getElementById("amount").value="";
        props.item.title=undefined;
        }else{
          alert("title or amount can not be empty");
        }
    }
    let cancel = ()=>{
      props.sendData(props.item.title,props.item.amount,props.item.id);
      setTitle();
        setAmount();
        document.getElementById("title").value="";
        document.getElementById("amount").value="";
        props.item.title=undefined;
    }
  useEffect(()=>{
    // setedit(!isedit);
    document.getElementById("title").value=props.item.title || "";
    document.getElementById("amount").value=props.item.amount || "";

  },[props.item])
    
  return (
    <div>
        <form >
            <label htmlFor="title">Title </label>
            <input type="text" id="title" placeholder='Title' onChange={(e)=>(setTitle(e.target.value))} />
            <br />
            
            <label htmlFor="amount">Amount </label>
            <input type="number" id='amount' placeholder='amount'  onChange={(e)=>(setAmount(e.target.value))} />
            <br />
            <button onClick={handlebtn}>{props.item.title==undefined ? "Add":"Update"}</button>
            {props.item.title!=undefined && <button onClick={cancel}>Cancel</button>}
        </form>
    </div>
  )
}
