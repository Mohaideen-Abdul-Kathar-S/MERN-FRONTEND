import React, { useState } from 'react'

export default function Summary(props) {
    const [income,setIncome]=useState(0);
    const [Expences,setExpences] = useState(0);
    
    const summary = ()=>{
   
        // const A = props.exp.reduce((sum,cur)=>{

        //    return cur.amount>=0?cur.amount+sum:sum
        // },0);
        // const B = props.exp.reduce((sum,cur)=>{
        //    return cur.amount<0?cur.amount+sum:sum
        // },0);
        // setIncome(A);
        // setExpences(B);
        setIncome(props.exp.filter((e)=>(e.amount>=0)).reduce((sum,cur)=> cur.amount+sum,0))
        setExpences(props.exp.filter((e)=>(e.amount<0)).reduce((sum,cur)=> cur.amount+sum,0))
    }
  return (
    <div className='sumdiv'>
        <button onClick={summary} id='sumbtn'>Summay</button>
        <p>Income : {income}</p>
        <p>Expences : {Math.abs(Expences)}</p>
        <p>Balance : {income+Expences}</p>
    </div>
  )
}
