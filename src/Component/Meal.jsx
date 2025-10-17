import React from 'react'
import { useEffect, useState } from 'react'

const Meal = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        
            const fetchData = async () => {
                const res = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian")

                const result = await res.json()
                console.log("result ", result);
                setData(result.meals)
            }
        fetchData()
    },[])
    return (
        <div>
            {data.map((item)=>
            <div>
                <img src={item.strMealThumb} width={200} height={200}/>

                <h1>{item.strMeal}</h1>
                <h1>{item.idMeal}</h1>

            </div>
            )}
        </div>
    )
}

export default Meal