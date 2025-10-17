import React from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
const Course_Details = () => {
 // console.log(useParams());
  const{id} =useParams()
  const Location = useLocation()
console.log(location);

  const arr = [
    { id: "1", course_name: "Mern stack", price: 10000, duration: "5-month" },
    { id:"2", course_name: "PHP", price: 15000, duration: "5-month" },
    { id:"3", course_name: "JAVA", price: 50000, duration: "5-month" },
    { id: "4", course_name: "REACT.JS", price: 25000, duration: "5-month" },
  ]
  const FilterData = arr.filter((data)=>data.id==id)
  //console.log(FilterData);
  
  return (
    <div>
    <h1> course name = {FilterData[0].course_name}</h1>
    {
      Location.pathname != "/courses/4" && (
        <>
    <h1> course  duration = {FilterData[0].duration}</h1>
    <h1> course  price = {FilterData[0].price}</h1>
    </>
      )
}
    <button><Link to={`/courses`} className='bg-red-900 text-white rounded px-[50px]'> button</Link></button>

      {/* {
        FilterData.map((data)=>
        <div key={data.id}>
          <h1>{data.id}</h1>
          <h1>{data.course_name}</h1>
          <h1>{data.price}</h1>
          <h1>{data.duration}</h1>

        </div>
        )
      } */}
    </div>
  )
}

export default Course_Details