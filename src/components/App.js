
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {

  const [inp,setInput]=useState('')

  const [todo,setTodo]=useState([])

  const handleBtn=()=>{

    setTodo([...todo,inp])

    setInput('')



  }

  const handleDel=(index)=>{

    let filte=todo.filter((val,ind)=>ind!==index)

    setTodo(filte)

  }

  
  return (
    <div className="main">
        {/* Do not remove the main div */}
        <div className="todo">
          <p>T0-D0 List</p>
          <input value={inp} onChange={(e)=>setInput(e.target.value)}/>
          <button onClick={handleBtn}>Add Todo</button>
        </div>

        {
      todo.map((val,index)=>(
        <div className="dis" key={index}>

          <span>{val}</span>
          <button onClick={()=>handleDel(index)}>Delete</button>
          
        </div>
      ))
    }
    </div>

   
  )
}

export default App
