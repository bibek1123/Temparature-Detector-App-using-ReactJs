import React from 'react'
import { useState, useEffect } from 'react'

const WheatherApp = () => {
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState('Bangalore')

    useEffect(() => {
        const fetchApi = async () => {
            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=b96bac12de25ae8cf92d04a724ba46fa`)
            // console.log(res)
            const resJson = await res.json();
            console.log(resJson)
            setCity(resJson.main)
        }
        fetchApi();
    }, [search])
    return (
        <>
            <div className="md:w-1/2 container h-96 text-center bg-indigo-200 my-52 rounded mx-auto font-Koh Santepheap">

                <input type="search" className="rounded-full text-center h-10 w-3/4 font-bold my-2 mx-auto outline-none " name='search' placeholder="Search Any City..." onChange={(event) => {
                    setSearch(event.target.value)
                }}></input>

                {
                    !city ? (
                        <>

                            <p className="mt-3 font-bold">No Data Found!</p>
                            <i className="fas fa-exclamation-triangle text-9xl my-16"></i>
                        </>
                    ) : (
                        <>
                            <div className="info">
                                <h2 className="mt-11 mb-6 text-6xl sm:mt-16">
                                    <i className="fas fa-cloud text-white"></i>
                                    {search}</h2>
                                <h1 className="text-3xl mt-10">
                                    {city.temp}°C
                                </h1>
                                <h3 className="mt-4 bg-red-500 rounded-full text-white">Humidity: {city.humidity} | Min: {city.temp_min}°C | Max: {city.temp_max}°C</h3>

                            </div>
                            <div className="animate-ping h-12 w-48 text-center inline-flex bg-gray-200 opacity-75"></div>

                        </>)
                }
            </div>
        </>
    )

}

export default WheatherApp;