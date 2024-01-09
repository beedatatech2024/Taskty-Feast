import React, { useEffect, useState } from 'react';
import Search from './Search';
import { Link } from 'react-router-dom';
import Shimmer from './Shimmer';

const Mainpage = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchItem] = useState("biryani");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.edamam.com/search?app_id=900da95e&app_key=40698503668e0bb3897581f4766d77f9&q=${searchTerm}`);
        const result = await response.json();
        setData(result.hits);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    setLoading(true);
    fetchData();
  }, [searchTerm]);

  const handleSearch = (newSearchTerm) => {
    setSearchItem(newSearchTerm);
  };

  return (
    <div className='m-5 mb-6'>
      <Search onSearch={handleSearch} />
      {loading ? (
        <Shimmer/>
      ) : (
        data.length > 0 ? (
          <div className='flex flex-wrap cursor-pointer'>
            {data.map(({ recipe }, index) => (
              <Link to={`/details/${recipe.label}`} state={{ item: { recipe } }} key={index}>
                <div className='p-3 h-[9] w-64'>
                  <img src={recipe.image} alt="not found" className="shadow-lg rounded-lg border bg-gray-50"/>
                  <h1 className='font-bold text-lg'>{recipe.label}</h1>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p className='text-center text-5xl'>No data available.</p>
        )
      )}
    </div>
  );
};

export default Mainpage;
