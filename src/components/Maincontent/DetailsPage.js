import React from 'react';
import { useLocation } from 'react-router-dom';

const DetailsPage = () => {
  const location = useLocation();
  const { item } = location.state || {};

  console.log(item);

  return (
    <div>
      <div className='m-10'>
        <div className='flex'>
        <div>
        <img src={item.recipe.image} alt="image_not_found" className='h-80 w-80 rounded-md shadow-2xl'/>
        <h1>Item Name: {item.recipe.label}</h1>
        <p>Diet:{item.recipe.dietLabels}</p>
        </div>
        <div className="px-5">
        <h1 className='text-xl font-bold'>Ingredients Used</h1>
        {item.recipe.ingredients.map((item, index) => (
          <li key={index}>{item.text}</li>
        ))}
        </div>
        <div className='px-5'>
        <h1 className='text-xl font-bold'>Nutritions</h1>
        {item.recipe.digest.map((item, index) => (
          <li key={index}>{item.label}: {item.total}</li>
        ))}
        </div>
        </div>
        </div>
    </div>
  );
};

export default DetailsPage;
