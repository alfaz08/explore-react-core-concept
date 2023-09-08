import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './counter'
import Team from './Team'
import Users from './Users'
import Friends from './Friends'
import Friend from './Friend'
function App() {

    function handleClick(){
      alert('button clicked')
    }
    const handleClick2 = ()=>{
    alert('valo hoi jaw')
    }

    const addToFive = (num) =>{
      alert(num+5);
    }


  return (
    <>
     <h3>React core concept 3</h3>
     
     <Friends></Friends>
     <Users></Users>
     <Team></Team>
       <Counter></Counter>

     {/* <button onClick={handleClick2} >Click Me</button>
     <button onClick={()=>addToFive(3)} >Click Me</button>
     <button onClick={()=>{alert('soytan ki koros')}} >Click Me</button> */}
    </>
  )
}

export default App
