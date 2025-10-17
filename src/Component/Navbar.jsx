import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
const Navbar = () => {
    const [islogged, setIsLogged] = useState(false)
    const navigate = useNavigate();

    const login = ()=>{
        setIsLogged(true);
        navigate("/dashboard")
    }
    const logOut = ()=>{
        setIsLogged(false)
    }
  return (
    <div className='bg-black flex  gap-3 p-2 ' >
        <div style={{width:"80%",paddingBottom:4, paddingLeft:5,fontWeight:"bold"}}><Link to ="/" className='  hover:border border-white hover:bg-yellow-400    ' >Home</Link></div>
        {islogged && (
            <>
             <div style={{paddingBottom:4,fontWeight:"bold"}}> <Link to ="/courses" className='   hover:border border-white hover:bg-green-400 '>Courses</Link></div>
       <div style={{paddingBottom:4,fontWeight:"bold"}}> <Link to ="/dashboard" className='  hover:border border-white hover:bg-blue-900 '>Dashboard</Link></div>
        <div style={{paddingBottom:4,fontWeight:"bold"}}><Link to ="/profile" className='   hover:border border-white hover:bg-purple-400 '>Profile</Link></div>
         <div style={{paddingBottom:4,fontWeight:"bold"}}> <Link onClick={logOut} className='  hover:border border-white hover:bg-violet-400 '>LogOut</Link></div>
            </>
        )}
       { !islogged &&(
        <>
         <div style={{paddingBottom:4,fontWeight:"bold" }}>  <Link to ="/about" className='  hover:border border-white hover:bg-blue-400 '>About</Link></div>
        <div style={{paddingBottom:4,fontWeight:"bold" }}> <Link to ="/contact" className='   hover:border border-white hover:bg-pink-400 '>Contact</Link></div>
       <div style={{paddingBottom:4,fontWeight:"bold"}}> <Link to ="/team" className='  hover:border border-white hover:bg-teal-400 '>Team</Link></div>
          <div style={{paddingBottom:4,fontWeight:"bold"}}><button onClick={login} className=' hover:border border-white hover:bg-red-400 '>Login</button></div>
        </>
       )}

      

    </div>
  )
}

export default Navbar