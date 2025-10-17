import React, { useEffect, useState } from 'react'

const FetchData = () => {
    const [data, setdata] = useState([])
    useEffect(() => {
        const FetchData = async () => {
            try {
                const res = await fetch("https://jsonplaceholder.typicode.com/albums")
                const data = await res.json()
                console.log(data);
                setdata(data)
            } catch (error) {
                console.log("error :", error)
            }
        }
        FetchData()
    }, [])
    return (
        <div className='grid grid-cols-3 gap-5  '>
        
            {
                data.map((item) =>
                    <div key={item.id} className="bg-black p-5 col-span-6  border border-yellow-500 border-4 
                         text-2xl text-white text-center m-5"  >

                        {item.title}
                    </div>

                )
            }
        </div>
    )
}

export default FetchData