import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {incNumber,decNumber} from './actions/index'
const App = () => {
  //dispatch action ko trigger ya call krega fir command reducer ko jaega
  const dispatch=useDispatch()
//store se data lene k liye useSelector
  const myState=useSelector((state)=>state.changeTheNumber)
  
  return (
    <>
      <input type='text' value={myState} />
      <button onClick={()=> dispatch(incNumber(10))}>Increament</button>
      <button onClick={()=> dispatch(decNumber())}>Decreament</button>
    </>
  )
}

export default App

