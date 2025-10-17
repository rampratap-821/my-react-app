import React from 'react'
import { Link } from 'react-router-dom'

const Product = () => {
  const arr = [
    { id: "1", course_name: "Mern stack", price: 10000, duration: "5-month" },
    { id:"2", course_name: "PHP", price: 15000, duration: "5-month" },
    { id:"3", course_name: "JAVA", price: 50000, duration: "5-month" },
    { id: "4", course_name: "REACT.JS", price: 25000, duration: "5-month" },
  ]
  return (
    <div>
<ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
  {arr.map((data) => (
    <li key={data.id}><Link to ={`/courses/${data.id}`}>{data.course_name} </Link></li>
  ))}
</ul>

    </div>
  )
}

export default Product
