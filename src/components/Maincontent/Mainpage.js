import React, { useEffect, useState } from 'react'
import Search from './Search'
import { Link } from 'react-router-dom'

const Mainpage = () => {
  const [data,setData]=useState([])
  const [searchTerm, setSearchItem]=useState("")
    useEffect(() => {
      const fetchData = async () => {
        const response=await fetch(`https://api.edamam.com/search?app_id=900da95e&app_key=40698503668e0bb3897581f4766d77f9&q=${searchTerm}`);
        const result = await response.json();
        setData(result.hits)
        console.log(result.hits);
      };
      fetchData();
    }, [searchTerm]);
    const handleSearch=(newSearchTerm)=>{
      setSearchItem(newSearchTerm);
    };
  return (
    <div className='m-5 mb-6'>
        <Search onSearch={handleSearch}/>
        <div className='flex flex-wrap text-center cursor-pointer'>
        {
          data.map((item)=>(
            <Link  to={`/details/${item.recipe.label}`}state={{item}} key={item.recipe.label}>
            <div className='p-3 h-[9] w-72'>
            <img src={item.recipe.image} alt="not found" className="shadow-lg rounded-lg border bg-gray-50"/>
            <h1 className='font-bold text-lg'>{item.recipe.label}</h1>
            </div>
            </Link>
          ))
        }
        </div>
    </div>
  )
}

export default Mainpage