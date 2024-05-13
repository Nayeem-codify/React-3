import { useState } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(5)
  let [error, setError] = useState("")
  let [passShow, setPassShow] = useState("password")

  let handleIncrement = () => {
    if(count >= 10){
       setError("10 or Small Number use");
    }else{
       setError("");
       count++
       setCount(count)
    }
  }

  let handleDecrement = () => {
    if(count <= 0){
       setError("- values Not Allow");
    }else{
       setError("");
       count--
       setCount(count)
    }
  }

let handleShow = () => {
  setPassShow("text")
}


  return (
    <>
      {count >= 10
       ?
       <button className="btn disable">Increment</button> 
       :
       <button className="btn" onClick={handleIncrement}>Increment</button>
      }
      <h1>{count}</h1>
      <button onClick={handleDecrement}>Decrement</button>
      <p>{error}</p>
      <div>
        <input type={passShow} placeholder="Password"/>
        <button onClick={handleShow}>Show</button>
      </div>
    </>
  )
}

export default App
