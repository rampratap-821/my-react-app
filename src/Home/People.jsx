import React, { useContext } from 'react'
import MoneyContext from '../context/MoneyContext'
const People = () => {
   // console.log(useContext(MoneyContext));
    const data = useContext(MoneyContext)
  return (
    <div>People =
        <h3>{data.counter}</h3>
        <button onClick={()=>data.setCounter(data.counter+1)}>increase</button>
        
    </div>
  )
}

export default People