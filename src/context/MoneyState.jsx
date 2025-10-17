import React from 'react'
import MoneyContext from './MoneyContext'
import { useState } from 'react'
const MoneyState = (props) => {
    const [counter, setCounter] = useState(0)
    const money = 2000
    const name = "Rampratap"
  return (
    <MoneyContext.Provider value={{
        money,
        counter,
        setCounter,
        name
        }}>
            {props.children}</MoneyContext.Provider>
  )
}

export default MoneyState