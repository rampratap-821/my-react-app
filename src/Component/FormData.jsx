import React from 'react'
import { useState } from 'react'
const FormData = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password,setPassword] = useState("")
    const handsubmit =(e)=>{
        e.preventDefault();
        alert(`My name is ${name}`+email+password)
        setName("")
        setEmail("")
        setPassword("")
    }
  return (
    <div>
        <form onSubmit={handsubmit}>
        <div>
            Name : <input value ={name} type="text" onChange={(e)=>setName(e.target.value)} required />
        </div>

         <div>
            email : <input value ={email} type="email"  onChange={(e)=>setEmail(e.target.value)} required />
        </div>

         <div>
            Password :<input value ={password} type="password"  onChange={(e)=>setPassword(e.target.value)} required />
        </div>
        <div>
            <button>Submit</button>
        </div>
        </form>

    </div>
  )
}

export default FormData