import React from 'react'
const App = () => {
  const initialValue=0;
  const increament=()=>{
   //dispatch
  }
  const decreament=()=>{

  }
  return (
    <>
      <h1>{initialValue}</h1>
      <button onClick={increament} >Increament</button>
      <button onClick={decreament}>Decreament</button>
    </>
  )
}

export default App

