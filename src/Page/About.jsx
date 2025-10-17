import React from 'react'
import { useNavigate } from 'react-router-dom'
const About = () => {
  const navigate = useNavigate()
  const GoToHome = ()=>{
    navigate("/")
  }

    const Goback = ()=>{
    navigate(-1)
  }
  return (
    <div>
      <button onClick={GoToHome}>Go to home page</button>
      <br/>
      <button onClick={Goback}>Go  back</button>

    </div>
  )
}

export default About