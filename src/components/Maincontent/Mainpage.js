import React, { useEffect, useState } from 'react'
import Search from './Search'

const Mainpage = () => {
  const [data,setData]=useState([])
    useEffect(() => {
      const fetchData = async () => {
        const response=await fetch('https://api.edamam.com/search?app_id=900da95e&app_key=40698503668e0bb3897581f4766d77f9&q=icecream');
        const result = await response.json();
        setData(result.hits)
      };
      fetchData();
    }, []);
  return (
    <div className='m-5'>
        <Search/>
        <div className='flex flex-wrap text-center'>
        {
          data.map((item)=>(
            <div className='p-4 h-80 w-72'>
            <img src={item.recipe.image} alt="notfound"/>
            <h1 className='font-semibold'>{item.recipe.label}</h1>
            </div>
          ))
        }
        </div>
    </div>
  )
}

export default Mainpage