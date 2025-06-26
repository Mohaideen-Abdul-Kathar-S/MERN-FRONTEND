// import Welcome from "./Welcome"
// import Work from "./Work"
// import Input from "./Input"
// import Probs from "./Probs"
// import Listdata from "./listdata"
// import { createContext, useState } from "react"
// import FromChild from "./FromChild"
// import './App.css'
import { BrowserRouter,Routes,Route, Link } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Expence from './components/Expence'
function App() {
//   let user = {name:"mak",age:19};
//   const users = [
//   { name: "one", age: 1 },
//   { name: "two", age: 2 },
//   { name: "three", age: 3 }
// ];
// let [context,setContext] = createContext(users);
// const [password,setPassword]= useState();
// function setPass(pass){
//   setPassword(pass);
// }
  return (
    <>
    {/* <FromChild sendPass={setPass}/>
  <h1>password</h1>

  <p>{password}</p>       */}

{/* <div className='appdiv'> <h1>Expence Tracker</h1> </div>
  
  <Expence/> */}
  <h1>Navigation</h1>

  <BrowserRouter>
  <nav>
    <Link to='/home'>Home</Link>
    <Link to='/about/Kathar'> About</Link>
    <Link to='/contact'> Contact</Link>
    <Link to='/expense'> Expence Track</Link>
  </nav>
  <Routes>
    <Route path='/home' element={<Home/>}/> 
    <Route path='/about/:name' element={<About/>}/>
     <Route path='/contact' element={<Contact/>}/>
     <Route path='/expense' element={<Expence />}/>
  </Routes>
    
  </BrowserRouter>
    </>
  )
}

export default App
